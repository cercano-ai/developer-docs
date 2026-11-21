# Exact brand and asset reuse

| Source relative to cercano-ai | Draft file | Treatment | SHA-256 |
| --- | --- | --- | --- |
| `cercloud-site/website/assets/favicon.svg` | `source/assets/favicon.svg` | Byte-for-byte; header prompt mark and favicon, original geometry preserved | `77d5af1cea23f32f20aa00ffc63a4ebd5938b5d3171bf3cc53f5c9b9f0a97148` |
| `cercloud-site/website/assets/control-plane-day.svg` | `source/assets/control-plane-day.svg` | Byte-for-byte daylight platform illustration | `22da07658f8c83468453466f9ab015693d05cdbb0f2761e8a542e3b073d97661` |
| `cercloud-site/website/assets/control-plane-v2.svg` | `source/assets/control-plane-v2.svg` | Byte-for-byte night platform illustration | `1434866861652d06dced33ae4fe6a4530fb3b70c92745054562a10ba17b429ac` |
| `Cercano/website/public/videos/terminal-ui.jpg` | `source/assets/terminal-ui.jpg` | Byte-for-byte real terminal UI image | `f2e575056e75b6c45e1c35e8bdf8bad5cb762399b2849be8277726b76e90f1c2` |
| `Cercano/website/public/videos/delegation.jpg` | `source/assets/videos/delegation.jpg` | Byte-for-byte delegation poster | `bf2fff642b3d6ff66297835f010896df26cea695b00edec57d87091f8354d309` |
| `Cercano/website/public/videos/delegation.mp4` | `source/assets/videos/delegation.mp4` | Byte-for-byte delegation demonstration | `77bf0e6d0aba74590bc1d44ffcceb394a59b0b8f9862db114ca46cfb7b339f5c` |
| `Cercano/website/public/videos/metrics.jpg` | `source/assets/videos/metrics.jpg` | Byte-for-byte token-metrics poster | `cd5574c84c5db25cf755a6c243d8626938e1e41fed87e4b765dd867fd235ad15` |
| `Cercano/website/public/videos/metrics.mp4` | `source/assets/videos/metrics.mp4` | Byte-for-byte token-metrics demonstration | `2b787674d8de9fdb4496f83a7439bc09ba12b3a2a13694d77a719a8ee75aa859` |
| `Cercano/website/public/videos/sessions.jpg` | `source/assets/videos/sessions.jpg` | Byte-for-byte session-resume poster | `e8f01f2738e9af9d8c4d50e0e7875a6d2d70c272c2ca3ae35427f1c758f69f0d` |
| `Cercano/website/public/videos/sessions.mp4` | `source/assets/videos/sessions.mp4` | Byte-for-byte session-resume demonstration | `980901aa03bd21bf832bfedd8f241ae19cb992fe4669f37095a6fa7740a8430f` |
| `Cercano/website/public/videos/terminal-ui.jpg` | `source/assets/videos/terminal-ui.jpg` | Byte-for-byte terminal demonstration poster | `f2e575056e75b6c45e1c35e8bdf8bad5cb762399b2849be8277726b76e90f1c2` |
| `Cercano/website/public/videos/terminal-ui.mp4` | `source/assets/videos/terminal-ui.mp4` | Byte-for-byte terminal demonstration | `bc6c69ee7bd4d82e179c59140c157c5a038cbdffd5a4f4c6e11693530b6f9ef9` |
| `cercloud-site/website/site.js` | `source/assets/theme.js` | Byte-for-byte selector logic, image switching, theme-color update, cercloud-theme storage key | `da96a5a55ac7a95e5d142c34d4a3d22428e7be6948cd69ee09bcfece6c2c7518` |

`source/assets/brand.css` is the exact prefix of `cercloud-site/website/styles.css` up to `.hero {`. It includes all light/night tokens, Georgia/IBM Plex Mono stacks, base styles, page shell, header, brand geometry, navigation, focus treatment and selector track. Documentation CSS overrides the body to IBM Plex Mono 16px, retains Georgia display headings, and adds a responsive reading layout. Marketing hero/card rules are not imported.

`templates/SiteFrame.cshtml` reuses the header brand markup, 24×24 asset dimensions, theme button markup, initial theme script, Google Fonts URL (IBM Plex Mono 400/500/600), and preconnects from `cercloud-site/website/index.html`. Internal asset links use Chloroplast `Asset()` and navigation uses `Href()`. The original source initial theme behavior is retained. Google Fonts needs network access; the original monospace fallbacks remain available offline.

Cercano cross-reference: `Cercano/website/app/globals.css`, `app/layout.tsx`, and `app/icon.svg` were inspected. The palettes/type stacks agree; its theme key is `cercano-theme`, whereas this shared site follows primary reference `cercloud-theme`. Preferences persist within this documentation origin; localStorage is not shared across domains.

No logo or illustration was redrawn. The existing platform illustration appears on the overview page with an availability caption; the documentation homepage is typographic. No new technical diagram was introduced.
