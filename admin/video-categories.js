(() => {
  'use strict';
  const model = window.PortfolioVideoCategories;
  window.PortfolioCategoryEditor = {attach(cms) {
    const knownLabels = new Map(model.DEFAULTS.map(row => [row.id,row.label]));
    const snapshot = () => cms.editor.getCurrentEntry();
    const choices = () => model.configured(snapshot()?.data.site);
    const freshId = () => 'category-' + crypto.randomUUID();
    let scheduled = false, applying = false;
    function normalizeIds() {
      if (scheduled || applying) return;
      scheduled = true;
      queueMicrotask(() => {
        scheduled = false;
        const entry = snapshot();
        if (entry?.collection !== 'portfolio') return;
        const rows = entry.data.site?.videoCategories;
        const patches = [], seen = new Set();
        if (!Array.isArray(rows)) patches.push({path:'site.videoCategories',value:model.DEFAULTS});
        else rows.forEach((row,i) => {
          const id = typeof row?.id === 'string' ? row.id.trim() : '';
          if (!id || id === model.ALL || seen.has(id)) patches.push({path:`site.videoCategories.${i}.id`,value:freshId()});
          else seen.add(id);
          if (id && row.label) knownLabels.set(id,row.label);
        });
        if (patches.length) {
          applying = true;
          try { cms.editor.applyFieldPatch(patches); } finally { applying = false; }
        }
      });
    }
    const Control = window.createClass({
      getInitialState() { return {revision:0}; },
      componentDidMount() {
        this.unsubscribe = cms.editor.onEditorChange(() => this.setState(state => ({revision:state.revision+1})));
      },
      componentWillUnmount() { this.unsubscribe?.(); },
      render() {
        const rows = choices();
        const value = this.props.value || '';
        const current = model.find(rows,value);
        const options = [window.h('option',{key:'empty',value:'',disabled:true},rows.length ? '请选择分类' : '请先在站点信息中添加视频作品分类')];
        if (value && !current) options.push(window.h('option',{key:'unlisted',value},`未列入分类：${knownLabels.get(value)||value}`));
        rows.forEach(row => options.push(window.h('option',{key:row.id,value:row.id},row.label)));
        return window.h('select',{
          id:this.props.forID,
          className:this.props.classNameWrapper,
          value:current?.id || value,
          onChange:event => this.props.onChange(event.target.value),
          style:{width:'100%',minHeight:'44px',padding:'10px 12px',font:'inherit',color:'inherit',backgroundColor:'#fff',border:'1px solid #b5bdc3',borderRadius:'4px'}
        },options);
      }
    });
    const Preview = ({value,entry}) => {
      const data = entry?.get('data')?.toJS() || snapshot()?.data;
      return window.h('span',{},model.find(model.configured(data?.site),value)?.label || knownLabels.get(value) || value || '');
    };
    cms.registerWidget('video-category',Control,Preview);
    cms.editor.onEditorChange(normalizeIds);
    normalizeIds();
    cms.registerEventListener({name:'preSave',handler:({entry}) => {
      const data = entry.get('data'), plain = data.toJS();
      const rows = plain.site?.videoCategories;
      if (!Array.isArray(rows)) throw new Error('请先在“站点信息 → 视频作品分类”中设置分类。');
      const names = new Set(), ids = new Set();
      rows.forEach(row => {
        const name = row.label?.trim(), id = row.id?.trim();
        if (!name) throw new Error('视频分类名称不能为空，请填写名称或删除空白分类。');
        if (name === '全部') throw new Error('“全部”是自动生成的汇总按钮，请使用其他分类名称。');
        if (names.has(name.toLocaleLowerCase())) throw new Error(`视频分类名称“${name}”重复，请修改后再发布。`);
        if (!id || id === model.ALL || ids.has(id)) throw new Error('视频分类尚未准备好，请稍后再次发布。');
        names.add(name.toLocaleLowerCase()); ids.add(id);
      });
      const categories = model.configured(plain.site);
      for (const work of plain.works || []) {
        if (!model.find(categories,work.cat)) throw new Error(`作品“${work.title || work.id}”仍使用分类“${knownLabels.get(work.cat)||work.cat||'未选择'}”。请先给作品选择现有分类，再删除原分类。`);
      }
      return data.updateIn(['site','videoCategories'],list => list.map(row => row.set('label',row.get('label').trim())));
    }});
  }};
})();
