# Cercano + Cercloud developer documentation

Documentation built with Chloroplast and published through GitHub Pages at https://developer.cercloud.ai. Source repository: https://github.com/cercano-ai/developer-docs. The user authorized public repository visibility, GitHub Pages publishing, and the developer subdomain DNS configuration. Content availability caveats remain visible while the initial documentation migration is in review.

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

## Publishing with GitHub Pages

`.github/workflows/pages.yml` builds on pushes to `main` and manual dispatch. It installs .NET 8 and Node 22, restores the pinned Chloroplast source tool, builds and validates the static site, and uploads only `out/` with the official Pages artifact/deployment actions. The source repository is public so it can use Pages on the organization's Free plan.

`SiteConfig.yml` sets `baseUrl: https://developer.cercloud.ai` with an empty basePath. `source/CNAME` is copied into the generated output, documenting the intended domain; the Pages API/settings custom-domain setting is authoritative for this Actions-based deployment. `.nojekyll` is added by the build. Site-wide draft noindex was removed for publication; content scope and implementation caveats remain intact.

DNS Made Easy record for the cercloud.ai zone:

| Type | Name | Target | TTL |
| --- | --- | --- | --- |
| CNAME | developer | cercano-ai.github.io. | 300 |

The CNAME points to the organization Pages hostname, without a repository path. Configure the custom domain on GitHub before pointing DNS, then enable HTTPS when GitHub's certificate is available. The apex domain, mail records, and other subdomains are outside this change.

For a temporary project Pages URL instead of the custom domain, set the corresponding baseUrl and `/developer-docs` basePath, rebuild, and validate with `python3 scripts/check-links.py out /developer-docs`.

## Review materials

- [Information architecture](review/INFORMATION-ARCHITECTURE.md)
- [Source-to-page inventory](review/CONTENT-INVENTORY.md)
- [Gaps and conflicts](review/GAPS-AND-CONFLICTS.md)
- [Exact reused assets and files](review/REUSED-ASSETS.md)
- [Source revisions and hashes](review/source-snapshot.json)
- [Validation results](review/VALIDATION.md)

The initial draft has 17 pages, including six adapted technical guides. Other pages curate source-backed starting points and explicitly identify missing public contracts. It is not a full migration of every proposed documentation topic. No edits were made to the source product/marketing repositories.
