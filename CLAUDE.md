# Project: Patterns Garden

A Quartz v4 static site — a design pattern library for decentralized technologies. Deploys to Cloudflare Pages at `patterns-garden.pages.dev`.

## Dev Commands

```bash
npm install                      # Install dependencies
npx quartz build                 # Build the site
npx quartz build --serve         # Build and serve at http://localhost:8080
npm run check                    # TypeScript check + Prettier check
npm run format                   # Format with Prettier
npm test                         # Run tests (tsx --test)
```

## Project Structure

- `content/` — All Markdown content (edit these for content changes)
  - `content/patterns/<name>.md` — 22 pattern pages
  - `content/patterns/<name>/` — Images for each pattern (SVG, PNG, JPEG)
  - `content/topics/<name>.md` — 4 topic category pages
  - `content/glossary/<name>.md` — ~35 glossary term pages
  - `content/index.md` — Landing page
- `quartz.config.ts` — Site config (title, theme colors, plugins)
- `quartz.layout.ts` — Page layout and sidebar components
- `quartz/` — Quartz framework source (avoid editing unless necessary)

## Content Conventions

**Pattern frontmatter:**
```yaml
---
title: "Pattern Name"
description: "One-line description"
tags:
  - protocol          # or: ux, social, etc.
  - topic/moderation-curation  # hierarchical topic tag
---
```

**Glossary frontmatter:**
```yaml
---
title: "Term"
description: "Short definition."
tags:
  - reference
---
```

**Topic page frontmatter:**
```yaml
---
title: "Topic Name"
description: "..."
tags:
  - topic
---
```

**Pattern page sections** (in order):
1. The Design Problem
2. The Design Solution
3. Examples
4. Why Choose [Pattern]?
5. Best Practice: How to Implement [Pattern]
6. Potential Problems with [Pattern]
7. The Take Away
8. References & Where to Learn More

**Wikilinks:** Use `[[pattern-name|Display Text]]` for cross-references. Quartz resolves by shortest path.

**Image callouts:** Use `> [!example]` callout blocks for image galleries.

## What NOT to do
- Don't create new dependencies without asking
- Don't refactor unrelated code while fixing a bug
- Don't create new files when editing an existing one will do
- Don't edit files inside `quartz/` unless the task specifically requires it
