/* Content-only safety copy, independent of media serialization and Git authentication. */
(() => {
  'use strict';
  const KEY = 'portfolio.content-safety.v1';
  let cms, latest, timer, notice = '', storageFailed = false, lastRaw = '';
  const panel = document.getElementById('save-safety');
  const status = document.getElementById('save-safety-status');
  const exportButton = document.getElementById('export-content-backup');
  const valid = d => d && typeof d.site === 'object' && Array.isArray(d.works) && Array.isArray(d.postcards);
  const time = date => new Intl.DateTimeFormat('zh-CN', {hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(new Date(date));
  const current = () => { try { return cms?.editor?.getCurrentEntry(); } catch { return null; } };
  function readBackup() {
    try { const value = JSON.parse(localStorage.getItem(KEY)); return valid(value?.content) ? value : null; } catch { return null; }
  }
  function render() {
    if (!panel) return;
    const data = latest || readBackup();
    exportButton.disabled = !valid(current()?.data) && !data;
    const saved = data ? `${current()?.hasChanged ? '未发布 · ' : ''}本机内容备份 ${time(data.savedAt)}` : '编辑后自动保留本机内容备份';
    status.textContent = notice || (navigator.onLine === false ? '网络已断开，修改尚未发布。' + saved : saved);
    const failed = Boolean(notice) && !/^(已保存到仓库|正在发布)/.test(notice);
    panel.dataset.error = String(failed || storageFailed || navigator.onLine === false);
  }
  function capture(data) {
    if (!valid(data)) return;
    const raw = JSON.stringify(data);
    if (lastRaw === raw && latest) { render(); return; }
    const next = {format:'portfolio-content-backup-v1', savedAt:new Date().toISOString(), content:JSON.parse(raw)};
    // Keep an in-memory copy even if browser storage is blocked or exhausted.
    latest = next;
    try { localStorage.setItem(KEY, JSON.stringify(next)); lastRaw = raw; storageFailed = false; }
    catch { storageFailed = true; notice = '本机存储不可用，请立即点“导出备份”。当前修改仍在页面里。'; }
    render();
  }
  function captureCurrent() {
    clearTimeout(timer);
    const entry = current();
    if (entry?.collection === 'portfolio' && entry.hasChanged) capture(entry.data);
  }
  function captureRaw(raw) {
    try {
      // Loading a published entry must not replace an older unsaved safety copy.
      const entry = current();
      if (entry && !entry.hasChanged) return;
      capture(JSON.parse(raw));
    } catch { /* The CMS owns validation and error reporting. */ }
  }
  function saveFailed(error) {
    captureCurrent();
    if (storageFailed) {
      notice = '发布未完成，本机存储也不可用。请立即导出备份并保留此页。'; render(); return;
    }
    const code = Number(error?.status || error?.response?.status);
    if (navigator.onLine === false) notice = '网络已断开，修改尚未发布。内容备份已留在本机，联网后可重试。';
    else if (code === 401) notice = '登录已失效。请先导出备份，再重新登录后发布。';
    else if (code === 403) notice = '账号没有写入权限。请先导出备份，检查后台授权。';
    else if (code === 409) notice = '线上内容已更新，请先导出备份，核对新版本后再发布。';
    else if (code === 429) notice = '保存请求过于频繁。修改已留在本机，请稍后重试。';
    else if (String(error?.message || '').startsWith('无法读取素材')) notice = error.message;
    else notice = '这次发布未完成。请保留此页重试，也可先导出内容备份。';
    render();
  }
  const api = window.PortfolioAdminSafety = {
    captureRaw,
    saveFailed,
    mediaWarning(name) {
      notice = `素材“${name || '未命名文件'}”的预览已失效，请重新选择该文件。文字和素材路径备份会继续保留。`;
      render();
    },
    storageWarning() {
      notice = '图片或视频的本机备份未完成，请保留原文件。可点“导出备份”保存文字和素材路径。';
      render();
    },
    attach(instance) {
      cms = instance;
      cms.editor?.onEditorChange(() => {
        const entry = current();
        if (entry?.collection === 'portfolio' && entry.hasChanged) {
          if (notice.startsWith('已保存到仓库') && JSON.stringify(entry.data) !== lastRaw) notice = '';
          clearTimeout(timer); timer = setTimeout(captureCurrent, 250);
        }
        render();
      });
      cms.registerEventListener({name:'preSave', handler:({entry}) => {
        const data = entry.get('data')?.toJS();
        capture(data);
        notice = navigator.onLine === false ? '网络已断开，修改尚未发布。请联网后重试。' : '正在发布；文字和素材路径已留在本机。';
        render();
        if (navigator.onLine === false) throw new Error(notice);
      }});
      cms.registerEventListener({name:'postSave', handler:() => {
        notice = storageFailed ? '已保存到仓库；本机存储不可用，可导出备份。' : '已保存到仓库，网站正在更新。'; render();
      }});
      render();
    }
  };
  exportButton?.addEventListener('click', () => {
    const entry = current();
    if (entry?.collection === 'portfolio' && valid(entry.data) && (entry.hasChanged || (!latest && !readBackup()))) capture(entry.data);
    const data = latest || readBackup();
    if (!data) return;
    const payload = {...data, exportedAt:new Date().toISOString(), includesMediaFiles:false};
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)], {type:'application/json;charset=utf-8'}));
    const link = document.createElement('a'); link.href = url;
    link.download = `作品集内容备份-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
    link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  window.addEventListener('beforeunload', captureCurrent);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') captureCurrent(); });
  window.addEventListener('offline', render); window.addEventListener('online', render);
  render();
})();
