# Validation — local draft

Checked on 2026-11-20, America/Los_Angeles.

- Pinned Chloroplast source bootstrap: PASS. Clean tracked archive at 5a580a656bb305532fda485b91fa18d291b84eda packaged and installed project-locally as 0.14.262-docs.5a580a6. Upstream emits nullable-annotation warnings and a package-readme warning; no build errors. No changes to global tooling or the original Chloroplast checkout.
- Static build: PASS, 17 HTML pages. Chloroplast's automatic site validation reports no issues.
- Independent final-output check: PASS, internal links, fragment targets, CSS, scripts, ordinary images, both theme-image variants, and all search destination paths.
- Project Pages base-path check: PASS at /developer-docs with matching GitHub Pages baseUrl. Config and output restored to custom-domain root settings after the check.
- HTTP preview: PASS, 200 response from http://127.0.0.1:4321/.
- Headless Chrome desktop (1440×1050): PASS. Search returns matching links and an empty state for an absent term; Night persists through reload; day/night illustration source switches; build-time syntax-highlight spans exist. No page exceptions or failed local HTTP requests.
- Headless Chrome mobile (390×844): PASS. Navigation starts collapsed, opens through its button, and is collapsed on arrival at the selected page. No horizontal page overflow on installation, TUI, policy publication, or enterprise connection pages.
- Visual review: desktop Day and Night homepage plus mobile installation screenshots inspected. Original palette, type system, thin borders and uncluttered task navigation retained. Body 16px; navigation and code 14px or larger.
- Source snapshot verification: PASS for the source-file hashes in source-snapshot.json. Original brand CSS prefix and asset hashes match the inspected sources.

Screenshots and ad-hoc browser QA script are in ignored .qa/. The tracked checks are npm run build and npm run check. Browser checks used the host's Chrome and bundled Playwright, not a production deployment. Keyboard focus styles and semantic controls are present; no formal screen-reader audit was performed. External GitHub links were preserved or resolved to source repositories but not exhaustively checked for anonymous visibility or current remote branch contents. Live Google, Keychain, provider access, packaged-client acceptance, DNS, and production service behavior were not tested.

At initial draft validation, preview was loopback-only and the repository was local and uncommitted. The user subsequently authorized pushing the source to the private cercano-ai/developer-docs repository. Deployment, DNS operations, and production-site edits remain outside that authorization.
