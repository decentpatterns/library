# Decent Patterns

The pattern library and website of [Decent Patterns](https://decentpatterns.com) — an open design pattern library for decentralized technologies, built with [Quartz](https://quartz.jzhao.xyz/).

## About

Decent Patterns is a curated collection of UX design patterns for decentralized applications. The patterns address common challenges that arise when building apps backed by peer-to-peer, federated, or otherwise decentralized architectures — from managing identity and moderation to handling data sync and sharing permissions.

The project was originally developed at [Simply Secure](https://simplysecure.org) as Decentralization Off The Shelf (DOTS). All design patterns are licensed CC0. The pre-Quartz content lives on the `master` branch (see [MIGRATION.md](MIGRATION.md)).

## Content

The library's patterns are organized by topic:

- **Identity & Agency** — managing online identity and credentials
- **Moderation & Curation** — content moderation and community safety
- **Sharing & Permissions** — deciding who sees what, and when
- **Sync & Status** — data availability, sync status, and discoverability

Plus a **glossary** of key decentralization terms.

## Architecture

The site is built with [Quartz v5](https://quartz.jzhao.xyz/), a static-site generator that transforms Markdown into a fully functional website with features like full-text search, graph view, backlinks, and popover previews.

```
content/
  index.md                    # Landing page with categorized pattern listing
  glossary/
    index.md                  # Glossary overview linking to all terms
    <term-name>.md            # One page per glossary term
  patterns/
    _template.md              # Starting point for new patterns (not published)
    <pattern-name>.md         # One page per pattern
    <pattern-name>/           # Images for each pattern (SVG, PNG, JPEG)
  topics/
    <topic-name>.md           # One page per topic
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

| Setting          | Value              |
| ---------------- | ------------------ |
| Build command    | `npx quartz build` |
| Build output dir | `public`           |
| Node.js version  | `22`               |

Set the environment variable `NODE_VERSION=22` in your Cloudflare Pages project settings.

## Contributing

New patterns are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). You don't need to be a developer: propose a pattern by opening an issue, or copy [`content/patterns/_template.md`](content/patterns/_template.md) and open a pull request.

## License

Pattern content is licensed [CC0](https://creativecommons.org/publicdomain/zero/1.0/). Quartz is licensed [MIT](https://github.com/jackyzha0/quartz/blob/v4/LICENSE.txt).
