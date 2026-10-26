const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const assert=require('node:assert/strict');
const {chromium}=require(process.env.ADMIN_TEST_PLAYWRIGHT_MODULE||'playwright');
const site=path.resolve(__dirname,'..');
const out=path.join(__dirname,'results');fs.mkdirSync(out,{recursive:true});
const upstream=fs.readFileSync(process.argv[2],'utf8');
const patched=fs.readFileSync(path.join(site,'admin/vendor/decap-cms-3.17.1.patched.js'),'utf8');
const data=JSON.parse(fs.readFileSync(path.join(site,'content/portfolio.json'),'utf8'));
function fragments(bundle){
 const i=bundle.indexOf('async toBase64(){');
 const start=bundle.lastIndexOf('class ',i),end=bundle.indexOf('function ff(',i);
 assert.ok(start>0&&end>i);
 const name=/class (\w+)/.exec(bundle.slice(start,i))[1];
 const b=bundle.indexOf('async persistLocalDraftBackup('),e=bundle.indexOf('async deleteLocalDraftBackup(',b);
 assert.ok(b>0&&e>b);
 return {asset:bundle.slice(start,end)+`;return ${name};`,backup:bundle.slice(b,e)};
}
const fixture=`<!doctype html><meta charset="utf-8"><title>后台保存回归测试</title><link rel="stylesheet" href="save-safety.css"><div id="nc-root"></div><div id="save-safety"><span id="save-safety-status" role="status"></span><button id="export-content-backup" title="导出文字和素材路径；不含媒体原文件">导出备份</button></div><script>window.CMS_MANUAL_INIT=true;window.repoFiles={content:{'portfolio.json':{content:${JSON.stringify(JSON.stringify(data)).replace(/</g,'\\u003c')}}}};</script><script src="save-safety.js"></script><script src="vendor/decap-cms-3.17.1.patched.js"></script><script>
const Parent=CMS.getBackend('test-repo').BackendClass;
class SaveTestBackend extends Parent {
 constructor(...args){super(...args);window.testBackend=this;window.testAttempts=0;window.testPayloads=[];}
 authenticate(){return Promise.resolve({name:'Local test',login:'local-test'});}
 async persistEntry(entry,options){
  window.testAttempts++;
  const assets=await Promise.all(entry.assets.map(async a=>({path:a.path,base64:await a.toBase64()})));
  if(window.testFailure){const error=new Error('simulated write failure');error.status=window.testFailure;throw error;}
  window.testPayloads.push({data:entry.dataFiles.map(f=>JSON.parse(f.raw)),assets});
  return super.persistEntry(entry,options);
 }
}
CMS.registerBackend('portfolio-test',SaveTestBackend);
PortfolioAdminSafety.attach(CMS);
CMS.init({config:{backend:{name:'portfolio-test',login:false},editor:{preview:false}}});
</script>`;
const regression=`<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="/admin/save-safety.css"><div id="save-safety"><span id="save-safety-status"></span><button id="export-content-backup">导出备份</button></div><script src="/admin/save-safety.js"></script>`;
const mime={'.json':'application/json','.yml':'text/yaml','.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2','.mp4':'video/mp4'};
const server=http.createServer((req,res)=>{
 const url=new URL(req.url,'http://local');
 if(url.pathname==='/admin/test-save.html'){res.setHeader('Content-Type','text/html;charset=utf-8');return res.end(fixture);}
 if(url.pathname==='/regression.html'){res.setHeader('Content-Type','text/html;charset=utf-8');return res.end(regression);}
 let rel=decodeURIComponent(url.pathname);if(rel.endsWith('/'))rel+='index.html';
 const file=path.resolve(site,'.'+rel);
 if(!file.startsWith(site+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.statusCode=404;return res.end('not found');}
 res.setHeader('Content-Type',mime[path.extname(file)]||'text/plain');fs.createReadStream(file).pipe(res);
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${server.address().port}`;
 const browser=await chromium.launch({headless:true,...(process.env.ADMIN_TEST_CHROME?{executablePath:process.env.ADMIN_TEST_CHROME}:{})});
 const results=[];
 let debugPage;const logs=[];
 try{
  const context=await browser.newContext({acceptDownloads:true,viewport:{width:1365,height:900}});
  await context.route(/https:\/\//,r=>r.abort());
  const page=await context.newPage();debugPage=page;page.on('console',m=>logs.push(m.type()+': '+m.text().slice(0,1000)));page.on('pageerror',e=>logs.push('pageerror: '+e.message));await page.goto(base+'/regression.html');
  const native=await page.evaluate(async ({old,fix})=>{
   const oldAsset=new Function(old.asset)(),fixedAsset=new Function(fix.asset)();
   const bytes=new TextEncoder().encode('真实素材 bytes 0123');
   const file=new File([bytes],'测试视频.mp4',{type:'video/mp4'});
   const url=URL.createObjectURL(file);URL.revokeObjectURL(url);
   let originalFailed=false;try{await new oldAsset({file,url,path:'assets/uploads/测试视频.mp4'}).toBase64();}catch{originalFailed=true;}
   const recovered=await new fixedAsset({file,url,path:'assets/uploads/测试视频.mp4'}).toBase64();
   let absentError='';try{await new fixedAsset({url,path:'assets/uploads/丢失原文件.mp4'}).toBase64();}catch(e){absentError=e.message;}
   const db=await new Promise((resolve,reject)=>{const r=indexedDB.open('regression-native-files',1);r.onupgradeneeded=()=>r.result.createObjectStore('backups');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});
   const forage={setItem:(key,value)=>new Promise((resolve,reject)=>{const t=db.transaction('backups','readwrite');t.objectStore('backups').put(value,key);t.oncomplete=()=>resolve(value);t.onerror=()=>reject(t.error);})};
   const read=key=>new Promise((resolve,reject)=>{const r=db.transaction('backups').objectStore('backups').get(key);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});
   const getKey=(collection,slug)=>collection?`backup.${collection}.${slug}`:'backup';
   function controller(source,storage=forage){
    const method=new Function('yh','Ok','Ph','R_',`return ({${source}}).persistLocalDraftBackup;`)(storage,getKey,(name,blob)=>new File([blob],name),()=>false);
    return {persistLocalDraftBackup:method,backupSync:{acquire:async()=>{},release:()=>{}},entryToRaw:()=>JSON.stringify({site:{tagline:'最新文字'},works:[],postcards:[]})};
   }
   const entry=files=>({get:key=>key==='mediaFiles'?{toJS:()=>files}:key==='slug'?'portfolio':key==='path'?'content/portfolio.json':undefined});
   const collection={get:()=> 'portfolio'};
   const media={name:file.name,path:'assets/uploads/'+file.name,url,draft:true,file};
   await controller(old.backup).persistLocalDraftBackup(entry([media]),collection);
   const oldDraft=await read('backup.portfolio.portfolio');
   await controller(fix.backup).persistLocalDraftBackup(entry([media]),collection);
   const fixedDraft=await read('backup.portfolio.portfolio');
   const restoredURL=URL.createObjectURL(fixedDraft.mediaFiles[0].file);
   const restoredBytes=Array.from(new Uint8Array(await(await fetch(restoredURL)).arrayBuffer()));URL.revokeObjectURL(restoredURL);
   await controller(fix.backup).persistLocalDraftBackup(entry([media,{name:'坏预览.png',path:'assets/uploads/坏预览.png',url,draft:true}]),collection);
   const partial=await read('backup.portfolio.portfolio');
   const partialNotice=document.getElementById('save-safety-status').textContent;
   await controller(fix.backup,{setItem:async()=>{throw new DOMException('quota','QuotaExceededError');}}).persistLocalDraftBackup(entry([media]),collection);
   const independent=JSON.parse(localStorage.getItem('portfolio.content-safety.v1'));
   return {originalFailed,recovered,absentError,oldBackupMissing:!oldDraft,fixedRaw:JSON.parse(fixedDraft.raw).site.tagline,restoredBytes,expectedBytes:Array.from(bytes),partialCount:partial.mediaFiles.length,partialRaw:JSON.parse(partial.raw).site.tagline,partialNotice,independentText:independent.content.site.tagline,storageNotice:document.getElementById('save-safety-status').textContent};
  },{old:fragments(upstream),fix:fragments(patched)});
  assert.equal(native.originalFailed,true);assert.equal(native.oldBackupMissing,true);
  assert.equal(native.recovered,Buffer.from('真实素材 bytes 0123').toString('base64'));
  assert.match(native.absentError,/丢失原文件/);assert.deepEqual(native.restoredBytes,native.expectedBytes);
  assert.equal(native.fixedRaw,'最新文字');assert.equal(native.partialRaw,'最新文字');assert.equal(native.partialCount,2);
  assert.match(native.partialNotice,/坏预览/);assert.equal(native.independentText,'最新文字');assert.match(native.storageNotice,/未完成/);
  results.push({name:'native File retained after URL.revokeObjectURL; IndexedDB restore; partial media failure; quota failure',passed:true});
  console.log('PASS native revoked-URL and backup regressions');

  await page.evaluate(()=>localStorage.clear());
  await page.goto(base+'/admin/test-save.html#/collections/portfolio/entries/portfolio');
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.waitForFunction(()=>window.CMS?.editor?.getCurrentEntry()?.collection==='portfolio',{timeout:30000});
  const first=await page.evaluate(()=>CMS.editor.getCurrentEntry());assert.equal(first.data.works.length,24);
  const editResult=await page.evaluate(()=>CMS.editor.applyFieldPatch([{path:'site.tagline',value:'保存回归测试：中文 🙂'}]));assert.ok(editResult.applied.includes('site.tagline'));
  await page.waitForFunction(()=>JSON.parse(localStorage.getItem('portfolio.content-safety.v1')||'null')?.content?.site?.tagline==='保存回归测试：中文 🙂');
  const before=await page.evaluate(()=>JSON.stringify(CMS.editor.getCurrentEntry().data));
  const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'导出备份',exact:true}).click();const download=await downloadPromise;
  const downloadPath=path.join(out,'export-test.json');await download.saveAs(downloadPath);const exported=JSON.parse(fs.readFileSync(downloadPath,'utf8'));
  assert.equal(exported.content.site.tagline,'保存回归测试：中文 🙂');assert.equal(exported.includesMediaFiles,false);assert.equal(JSON.stringify(exported).includes('access_token'),false);
  const after=await page.evaluate(()=>JSON.stringify(CMS.editor.getCurrentEntry().data));assert.equal(before,after);
  await page.evaluate(()=>window.testFailure=401);
  await page.getByRole('button',{name:'Publish',exact:true}).first().click();
  await page.getByText('Publish now',{exact:true}).click();
  await page.waitForFunction(()=>window.testAttempts===1);
  await page.waitForFunction(()=>document.getElementById('save-safety-status').textContent.includes('登录已失效'));
  assert.equal(await page.evaluate(()=>CMS.editor.getCurrentEntry().data.site.tagline),'保存回归测试：中文 🙂');
  assert.equal(await page.evaluate(()=>window.testPayloads.length),0);
  await page.evaluate(()=>window.testFailure=0);
  await page.getByRole('button',{name:'Publish',exact:true}).first().click();
  await page.getByText('Publish now',{exact:true}).click();
  await page.waitForFunction(()=>window.testPayloads.length===1);
  await page.waitForFunction(()=>!CMS.editor.getCurrentEntry().hasChanged);
  assert.equal(await page.locator('#save-safety').getAttribute('data-error'),'false');
  const committed=await page.evaluate(()=>window.testPayloads[0].data[0]);assert.equal(committed.site.tagline,'保存回归测试：中文 🙂');assert.equal(committed.works.length,24);
  results.push({name:'actual pinned CMS + production config: live autosave, export, 401 failure preserves draft, retry commits all 24 works',passed:true});
  await page.screenshot({path:path.join(out,'admin-desktop.png')});
  await page.setViewportSize({width:390,height:844});
  await page.evaluate(()=>PortfolioAdminSafety.mediaWarning('assets/uploads/非常长的中文图片文件名称-abcdefghijklmnopqrstuvwxyz.png'));
  const bounds=await page.locator('#save-safety').boundingBox();assert.ok(bounds.x>=0&&bounds.x+bounds.width<=390);
  await page.screenshot({path:path.join(out,'admin-mobile.png')});
  await page.setViewportSize({width:1365,height:900});
  await context.setOffline(true);
  await page.evaluate(()=>CMS.editor.applyFieldPatch([{path:'site.tagline',value:'断网时继续编辑'}]));
  await page.waitForFunction(()=>JSON.parse(localStorage.getItem('portfolio.content-safety.v1')).content.site.tagline==='断网时继续编辑');
  const attempts=await page.evaluate(()=>window.testAttempts);await page.getByRole('button',{name:'Publish',exact:true}).first().click();await page.getByText('Publish now',{exact:true}).click();
  await page.waitForFunction(()=>document.getElementById('save-safety-status').textContent.includes('网络已断开'));
  assert.equal(await page.evaluate(()=>window.testAttempts),attempts);
  await context.setOffline(false);
  await page.goto(base+'/regression.html');
  const persisted=await page.evaluate(()=>JSON.parse(localStorage.getItem('portfolio.content-safety.v1')).content.site.tagline);
  assert.equal(persisted,'断网时继续编辑');
  await page.evaluate(()=>{
    const original=Storage.prototype.setItem;
    Storage.prototype.setItem=function(key,value){if(key==='portfolio.content-safety.v1')throw new DOMException('quota','QuotaExceededError');return original.call(this,key,value);};
    PortfolioAdminSafety.captureRaw(JSON.stringify({site:{tagline:'存储不可用时的最新修改'},works:[],postcards:[]}));
  });
  assert.match(await page.locator('#save-safety-status').innerText(),/立即/);
  const memoryDownloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'导出备份',exact:true}).click();const memoryDownload=await memoryDownloadPromise;
  await memoryDownload.saveAs(path.join(out,'memory-export-test.json'));
  assert.equal(JSON.parse(fs.readFileSync(path.join(out,'memory-export-test.json'),'utf8')).content.site.tagline,'存储不可用时的最新修改');
  results.push({name:'offline edit survives navigation; no publish while offline; narrow-screen status fits; export works when browser storage is blocked',passed:true});
  assert.deepEqual(errors,['Object','Object'],'Only the two deliberately simulated rejected saves may report errors');
  fs.writeFileSync(path.join(out,'test-results.json'),JSON.stringify({results,native,errors},null,2)+'\n');
  console.log(JSON.stringify({results,errors},null,2));
 }catch(e){console.error(e);if(debugPage){await debugPage.screenshot({path:path.join(out,'test-failure.png')});logs.push(await debugPage.locator('body').innerText());}fs.writeFileSync(path.join(out,'test-failure.txt'),String(e.stack)+'\n'+logs.join('\n'));process.exitCode=1;}
 finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
