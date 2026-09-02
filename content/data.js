// 内容加载器：从 content/*.json 读取全站内容。
// 改内容请用网站后台（/admin），不要直接改这个文件。
window.PAGE_DATA_READY = (async () => {
  try {
    const [site, worksObj, pcObj] = await Promise.all([
      fetch("content/site.json").then(r => r.json()),
      fetch("content/works.json").then(r => r.json()),
      fetch("content/postcards.json").then(r => r.json())
    ]);
    window.PAGE_DATA = {
      site: site || {},
      works: (worksObj && worksObj.works) || [],
      postcards: (pcObj && pcObj.postcards) || []
    };
  } catch (e) {
    // 直接双击 html（file:// 协议）时无法读取 JSON，请用本地服务器或线上地址打开
    window.PAGE_DATA = { site: {}, works: [], postcards: [] };
  }
})();