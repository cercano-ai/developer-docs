# Cercano + Cercloud developer documentation

Review draft built with Chloroplast. Source repository: https://github.com/cercano-ai/developer-docs. Proposed website destination: https://developer.cercloud.ai. Source publication is authorized; deployment, DNS changes, production edits, and CNAME activation remain pending review and approval.

## Run locally

Requirements: .NET SDK 8 (or newer SDK with .NET 8 runtime), Node.js 22+, Python 3, Git.

```sh
npm ci
npm run bootstrap
npm run build
npm run check
npm run preview
```

Open http://127.0.0.1:4321/. The static output is `out/` (ignored). Preview binds loopback only. Stop it with Ctrl-C. Rebuild after content/template changes; this simple static preview does not watch files.

## Chloroplast configuration

`SiteConfig.yml` maps Markdown and assets under `source/` to static `out/`, uses English, enables asset cache busting, and sets the future canonical base URL. `templates/Default.cshtml` renders Markdown inside the reading layout; `SiteFrame.cshtml` renders the shared frame; `Navigation.cshtml` holds deployment-safe links. Body images and content links are relative to the page and Chloroplast rewrites links for a configured basePath.

The machine initially had global `Chloroplast.Tool 0.14.262-local` (banner assembly 0.14.262.0), a local development build rather than a reproducible public NuGet version. The bootstrap script resolves this without replacing the framework: it archives clean tracked source at Chloroplast commit `5a580a656bb305532fda485b91fa18d291b84eda`, packages version `0.14.262-docs.5a580a6`, and installs it into ignored `.tools/bin`. It uses the existing local Chloroplast repository when available, otherwise clones the official repository. Set `CHLOROPLAST_SOURCE` to another local clone if necessary. It does not alter the original source repository or global installation. The build requires this pinned local tool. Package restore requires network access on first setup.

Chloroplast has no native search/indexer or syntax-highlighting implementation in the inspected source. After Chloroplast generates the pages, `scripts/build.mjs` uses pinned Highlight.js at build time and writes a static full-text JSON index. The lightweight browser search ranks matching titles first and renders keyboard-accessible links, empty/error states, and live result announcements. It searches only this draft, not linked external guides. No runtime service or alternate site generator is involved.

## Publishing later, after approval

1. Review the draft, reconcile the gaps in `review/`, confirm public source-link visibility, and select the eventual repository name/ownership.
2. Re-run bootstrap/build/check on the approved source and enable a GitHub Pages artifact workflow. A suitable workflow installs .NET 8 and Node 22, runs `npm ci`, `npm run bootstrap`, `npm run build`, `npm run check`, then uploads only `out/` using the official Pages artifact/action flow. There is deliberately no active publishing workflow in this draft.
3. For an initial project Pages URL, set `baseUrl` to `https://cercano-ai.github.io/REPOSITORY/` and `basePath` to `/REPOSITORY`; rebuild and check with `python3 scripts/check-links.py out /REPOSITORY`. A local root preview can use `npm run build -- --no-basepath`.
4. For the approved custom domain, use `baseUrl: https://developer.cercloud.ai` and an empty basePath (current config). Add `developer.cercloud.ai` to `out/CNAME` through a tracked source asset/build step only when authorized, configure the repository Pages custom domain, and have the domain owner add GitHub’s required DNS record. Enable HTTPS after domain verification. No CNAME/DNS has been added now.
5. Remove the draft `noindex,nofollow` meta and review-draft labels before public release; confirm robots/sitemap/canonical policy. The generated sitemap currently names the future domain and is local-only. `.nojekyll` is added to output.

## Review materials

- [Information architecture](review/INFORMATION-ARCHITECTURE.md)
- [Source-to-page inventory](review/CONTENT-INVENTORY.md)
- [Gaps and conflicts](review/GAPS-AND-CONFLICTS.md)
- [Exact reused assets and files](review/REUSED-ASSETS.md)
- [Source revisions and hashes](review/source-snapshot.json)
- [Validation results](review/VALIDATION.md)

The initial draft has 17 pages, including six adapted technical guides. Other pages curate source-backed starting points and explicitly identify missing public contracts. It is not a full migration of every proposed documentation topic. No edits were made to the source product/marketing repositories.
