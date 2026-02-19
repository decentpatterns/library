# Patterns Garden

An open design pattern library for decentralized technologies, built with [Quartz](https://quartz.jzhao.xyz/).

## About

Patterns Garden is a curated collection of UX design patterns for decentralized applications. The patterns address common challenges that arise when building apps backed by peer-to-peer, federated, or otherwise decentralized architectures — from managing identity and moderation to handling data sync and sharing permissions.

The content originates from the [Decent Patterns](https://decentpatterns.com) project (source: [decentpatterns/library](https://github.com/decentpatterns/library)), originally developed at [Simply Secure](https://simplysecure.org). All design patterns are licensed CC0.

## Content

The library includes **22 patterns** organized across **4 topics**:

- **Identity & Agency** — Address, Disposable Identity, Host Roulette, Persistent Identity
- **Moderation & Curation** — Cautious Optimism, Conditional File Sharing, Content Curators, Prioritize Backup, Social Radius Slider, Tombstones, Village or City
- **Sharing & Permissions** — Paper Keys, QR Code Verification, Secret Sharing, Standards Marker, Visual Hash, Whisper Links
- **Sync & Status** — Age Indicator, Discovery Server, Network Health Indicator, Physical Beacon, Protocol Agnosticism, Trackers

Plus a **glossary** of key decentralization terms.

## Architecture

The site is built with [Quartz v4](https://quartz.jzhao.xyz/), a static-site generator that transforms Markdown into a fully functional website with features like full-text search, graph view, backlinks, and popover previews.

```
content/
  index.md                    # Landing page with categorized pattern listing
  glossary.md                 # Glossary index page linking to all terms
  glossary/
    <term-name>.md            # 35 individual glossary term pages
  patterns/
    <pattern-name>.md         # 22 pattern pages (one per pattern)
    <pattern-name>/           # Images for each pattern (SVG, PNG, JPEG)
  topics/
    identity-agency.md        # 4 topic category pages
    moderation-curation.md
    sharing-permissions.md
    sync-status.md
```

Key Quartz features used:

- **Wikilinks** (`[[Pattern Name]]`) for cross-referencing between patterns, with popover previews
- **Graph View** to visualize relationships between patterns
- **Backlinks** to see which patterns reference each other
- **Explorer** sidebar for folder-based navigation
- **Hierarchical tags** (`topic/identity-agency`) for topic-based categorization
- **Callout blocks** (`> [!example]`) for image galleries

## Development

**Requirements:** Node.js >= 22, npm >= 10.9.2

```bash
# Install dependencies
npm install

# Build the site
npx quartz build

# Build and serve locally (http://localhost:8080)
npx quartz build --serve
```

## Deployment (Cloudflare Pages)

| Setting              | Value              |
| -------------------- | ------------------ |
| Build command        | `npx quartz build` |
| Build output dir     | `public`           |
| Node.js version      | `22`               |

Set the environment variable `NODE_VERSION=22` in your Cloudflare Pages project settings.

## License

Pattern content is licensed [CC0](https://creativecommons.org/publicdomain/zero/1.0/). Quartz is licensed [MIT](https://github.com/jackyzha0/quartz/blob/v4/LICENSE.txt).
