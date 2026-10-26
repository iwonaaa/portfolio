# Pinned Decap CMS media persistence fix

This folder hosts the official Decap CMS 3.17.1 browser bundle with four narrowly scoped patches. Authentication, repository access, permissions and commit behavior are unchanged.

Upstream: https://unpkg.com/decap-cms@3.17.1/dist/decap-cms.js

Upstream SHA-256: `95e216ad2ec85d48993e000e3b876ce95ad01b161a4f4652d9eb21b4664e93dc`.

Reproduce: download that exact file, then run `node scripts/patch-decap.cjs /path/to/decap-cms.js`. The script refuses a different upstream hash or ambiguous replacement anchors. Keep the included upstream licenses.

Changes:

1. `AssetProxy.toBase64` reads the retained native File/Blob first, so a revoked preview object URL cannot block publishing. FileReader errors and aborts reject rather than hanging. A genuinely unavailable asset fails with its filename, without dropping its reference or pretending that publishing succeeded.
2. `Backend.persistLocalDraftBackup` reuses retained File objects and isolates each unavailable preview. It still persists the latest raw text and the readable media instead of losing the whole checkpoint. Unreadable media metadata is retained and the editor is told to reselect that file.
3. Browser backup storage failures reach the content backup status instead of only the console.
4. Publish failures reach the status bar. The original error, failed draft state and server response remain intact; there is no automatic retry of writes.

`../save-safety.js` separately stores content-only checkpoints with the bundled `CMS.editor` API and a formatter-time fallback. That experimental API is why this exact bundle is pinned. A browser storage failure leaves the current snapshot in memory and enables export. A fresh visit never automatically replaces the current entry with an older local backup. Exports contain content and asset paths, not credentials or media file bytes.

The existing image/file widget draft backup still stores media Files in IndexedDB. Content-only backups do not imply successful media backup or successful publication. Existing offline drafts with already-lost bytes require the original media files; the fix cannot reconstruct absent bytes.

Regression: in a Node environment with Playwright and Chromium, run `node tests/admin-save.cjs /path/to/the/unmodified/decap-cms.js`. Optional `ADMIN_TEST_PLAYWRIGHT_MODULE` and `ADMIN_TEST_CHROME` select existing local runtimes. The tests use a local server and an in-memory CMS backend; no production authentication or repository writes occur. Test output goes in ignored `tests/results/`. The deliberately simulated failed saves cause two upstream rejected-promise reports; those are asserted separately from unexpected browser errors.

References:

- https://github.com/decaporg/decap-cms/blob/master/packages/decap-cms-core/src/valueObjects/AssetProxy.ts
- https://github.com/decaporg/decap-cms/blob/master/packages/decap-cms-core/src/backend.ts
- https://decapcms.org/docs/registering-events/
