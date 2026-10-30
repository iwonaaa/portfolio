// Run with CINEMA_TEST_PLAYWRIGHT_MODULE and CINEMA_TEST_CHROME if needed.
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.CINEMA_TEST_PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const mime = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.json':'application/json', '.mp3':'audio/mpeg', '.mp4':'video/mp4', '.png':'image/png', '.jpg':'image/jpeg', '.woff2':'font/woff2' };
const server = http.createServer((req, res) => {
  const name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (name.startsWith('/.netlify/functions/')) {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ items:[], likes:0, comments:[] }));
  }
  const file = path.resolve(root, '.' + (name.endsWith('/') ? name + 'index.html' : name));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.statusCode = 404; return res.end('missing');
  }
  const size = fs.statSync(file).size;
  const range = /bytes=(\d+)-(\d*)/.exec(req.headers.range || '');
  const start = range ? +range[1] : 0;
  const end = range && range[2] ? Math.min(+range[2], size - 1) : size - 1;
  res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
  res.setHeader('Accept-Ranges', 'bytes');
  res.setHeader('Content-Length', end - start + 1);
  if (range) { res.statusCode = 206; res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`); }
  const stream = fs.createReadStream(file, { start, end });
  res.on('close', () => stream.destroy());
  stream.pipe(res);
});

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless:true, executablePath:process.env.CINEMA_TEST_CHROME, args:['--enable-unsafe-swiftshader'] });
  const checks = [];
  try {
    for (const deferredAutoplay of [false, true]) {
      const reducedMotion = deferredAutoplay ? 'reduce' : 'no-preference';
      const context = await browser.newContext({ viewport:{width:1440,height:900}, reducedMotion });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await page.addInitScript(({ deferredAutoplay }) => {
        const original = HTMLMediaElement.prototype.play;
        let firstBgm = true;
        window.__musicAttemptsInModal = 0;
        HTMLMediaElement.prototype.play = function () {
          if (this.tagName === 'AUDIO' && /bgm/.test(this.src)) {
            if (document.body?.classList.contains('cinema-open')) window.__musicAttemptsInModal++;
            if (deferredAutoplay && firstBgm) {
              firstBgm = false;
              return Promise.reject(new DOMException('Test browser autoplay block', 'NotAllowedError'));
            }
            const result = original.call(this);
            // Exercise a play promise completing after the modal has already opened.
            return deferredAutoplay ? result.then(() => new Promise(resolve => setTimeout(resolve, 700))) : result;
          }
          return original.call(this);
        };
      }, { deferredAutoplay });
      await page.goto(`http://127.0.0.1:${server.address().port}/`, { waitUntil:'domcontentloaded' });
      await page.waitForFunction(() => document.querySelectorAll('#works-grid .work').length > 0 && bgm !== null);
      const card = page.locator('#works-grid .work').first();
      if (!deferredAutoplay) {
        await page.locator('#btn-music').click();
        await page.locator('#btn-music').click();
        await page.waitForFunction(() => !bgm.paused && bgm.volume > 0.1);
      }
      await card.click();
      await page.waitForFunction(() => document.body.classList.contains('cinema-open') && !document.querySelector('#cv').paused && document.querySelector('#cv').volume > 0.1);
      const assertSilent = async () => {
        assert.deepEqual(await page.evaluate(() => ({ paused:bgm.paused, volume:bgm.volume, attempts:window.__musicAttemptsInModal })), { paused:true, volume:0, attempts:0 });
      };
      await assertSilent();
      assert.equal(await page.locator('#cv').evaluate(v => v.muted), false);
      // Make the real detail pane long enough to scroll independently of artwork copy.
      await page.locator('#ci-desc').evaluate(el => { el.textContent += '\n' + '滚动详细内容\n'.repeat(90); el.style.whiteSpace = 'pre-wrap'; });
      await page.locator('.cinema-info').hover();
      for (const delta of [500, 500, -300, 650, -500]) {
        await page.mouse.wheel(0, delta);
        await page.waitForTimeout(180);
        await assertSilent();
      }
      assert.ok(await page.locator('.cinema-info').evaluate(el => el.scrollTop > 0), 'Detail pane actually scrolled');
      await page.locator('#v-play').click();
      await page.waitForFunction(() => document.querySelector('#cv').paused);
      await page.mouse.wheel(0, 300);
      await page.waitForTimeout(900);
      await assertSilent();
      await page.locator('#v-play').click();
      await page.locator('#v-mute').click();
      assert.equal(await page.locator('#cv').evaluate(v => v.muted), true);
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => !bgm.paused && bgm.volume > 0.1);
      await card.click();
      await page.waitForFunction(() => !document.querySelector('#cv').muted && document.querySelector('#cv').volume > 0.1);
      await assertSilent();
      // A zero-volume previous video must also reopen with sound enabled.
      await page.locator('#v-volume').evaluate(el => { el.value = '0'; el.dispatchEvent(new Event('input', {bubbles:true})); });
      await page.locator('#cinema-close').click();
      await card.click();
      await page.waitForFunction(() => !document.querySelector('#cv').muted && document.querySelector('#cv').volume > 0.1);
      await assertSilent();
      await page.keyboard.press('Escape');
      await page.locator('#btn-music').click();
      await page.waitForFunction(() => bgmOn === false && bgm.paused);
      await card.focus();
      await page.keyboard.press('Enter');
      await page.locator('.cinema-info').hover();
      await page.mouse.wheel(0, 400);
      await assertSilent();
      await page.locator('#cinema-close').click();
      await page.waitForTimeout(1000);
      assert.equal(await page.evaluate(() => bgm.paused && !bgmOn), true, 'Music OFF survives closing');
      // Rapid close/reopen while the resume fade or play promise is in flight.
      await page.locator('#btn-music').click();
      await page.evaluate(() => {
        openCinema(state.works[0]); closeCinema(); openCinema(state.works[1]);
      });
      await page.waitForTimeout(1200);
      await assertSilent();
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => !bgm.paused && bgm.volume > 0.1);
      assert.deepEqual(errors, []);
      checks.push({ deferredAutoplay, reducedMotion, detailScroll:true, pauseResume:true, reopenUnmuted:true, reopenAfterZeroVolume:true, musicOffPreserved:true, rapidReopen:true, errors });
      await context.close();
    }
    console.log(JSON.stringify({ passed:true, checks }, null, 2));
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
