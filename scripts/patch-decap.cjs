// Reproducible, fail-closed patch of the pinned official browser bundle.
// Usage: node scripts/patch-decap.cjs /path/to/decap-cms@3.17.1/dist/decap-cms.js
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const input = fs.readFileSync(process.argv[2], 'utf8');
const upstreamSHA256 = '95e216ad2ec85d48993e000e3b876ce95ad01b161a4f4652d9eb21b4664e93dc';
assert.equal(crypto.createHash('sha256').update(input).digest('hex'), upstreamSHA256, 'Unexpected upstream bundle; review before patching');
let output = input;
function patch(before, after) {
  assert.equal(output.split(before).length - 1, 1, 'Patch anchor must occur exactly once: ' + before.slice(0, 65));
  output = output.replace(before, after);
}
patch(
  'async toBase64(){const e=await fetch(this.url).then(e=>e.blob());return e.size<=0?"":await new Promise(t=>{const n=new FileReader;n.onload=e=>{const n=e.target?.result||"";t(n.toString().split("base64,")[1])},n.readAsDataURL(e)})}',
  'async toBase64(){let e=this.fileObj;if(!(e instanceof Blob))try{const t=await fetch(this.url);if(!t.ok)throw new Error("HTTP "+t.status);e=await t.blob()}catch(e){throw new Error("无法读取素材“"+(this.path||"未命名文件")+"”。请重新选择该文件后再发布；文字修改可通过后台的导出备份按钮保留。",{cause:e})}return e.size<=0?"":await new Promise((t,r)=>{const n=new FileReader;n.onload=e=>{const n=e.target?.result||"";t(n.toString().split("base64,")[1])},n.onerror=()=>r(new Error("无法读取素材“"+(this.path||"未命名文件")+"”，请重新选择文件。")),n.onabort=()=>r(new Error("素材读取被中断，请重试。")),n.readAsDataURL(e)})}'
);
patch(
  'r=this.entryToRaw(t,e);if(!r.trim())return;const i=await Promise.all(e.get("mediaFiles").toJS().map(async e=>{if(e.url?.startsWith("blob:")){const t=await fetch(e.url).then(e=>e.blob());return{...e,file:Ph(e.name,t)}}return e}));',
  'r=this.entryToRaw(t,e);if(!r.trim())return;window.PortfolioAdminSafety?.captureRaw(r);const i=await Promise.all(e.get("mediaFiles").toJS().map(async e=>{if(e.file instanceof Blob)return e;if(e.url?.startsWith("blob:"))try{const t=await fetch(e.url).then(e=>{if(!e.ok)throw new Error("HTTP "+e.status);return e.blob()});return{...e,file:Ph(e.name,t)}}catch(t){window.PortfolioAdminSafety?.mediaWarning(e.path||e.name);return e}return e}));'
);
patch(
  'catch(e){console.warn("persistLocalDraftBackup",e)}finally{this.backupSync.release()}',
  'catch(e){console.warn("persistLocalDraftBackup",e),window.PortfolioAdminSafety?.storageWarning()}finally{this.backupSync.release()}'
);
patch(
  '.catch(n=>(console.error(n),t(ly({message:{details:n,key:"ui.toast.onFailToPersist"}',
  '.catch(n=>(console.error(n),window.PortfolioAdminSafety?.saveFailed(n),t(ly({message:{details:n,key:"ui.toast.onFailToPersist"}'
);
output = output.replace('\n//# sourceMappingURL=decap-cms.js.map', '');
const dest = path.resolve(__dirname, '../admin/vendor');
fs.mkdirSync(dest, { recursive: true });
fs.writeFileSync(path.join(dest, 'decap-cms-3.17.1.patched.js'), output);
const report = {version:'3.17.1',upstreamSHA256,patchedSHA256:crypto.createHash('sha256').update(output).digest('hex'),patches:4};
fs.writeFileSync(path.join(dest, 'patch-manifest.json'), JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report));
