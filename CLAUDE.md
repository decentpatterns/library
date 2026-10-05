# Project: Decent Patterns

A Quartz v5 static site — the pattern library and website of Decent Patterns (`decentpatterns.com`, repo `decentpatterns/library`). The pre-Quartz content is archived on the `master` branch; see `MIGRATION.md` for cutover status.

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
  - `content/patterns/<name>.md` — Pattern pages (one per pattern)
  - `content/patterns/<name>/` — Images for each pattern (SVG, PNG, JPEG)
  - `content/topics/<name>.md` — Topic category pages (one per topic)
  - `content/glossary/index.md` — Glossary overview page (linked from index as [[Glossary]])
  - `content/glossary/<name>.md` — Glossary term pages (one per term)
  - `content/index.md` — Landing page
- `quartz.config.yaml` — Site config (title, theme colors) and plugins, including each plugin's layout position. Kept as a minimal diff from upstream's `quartz.config.default.yaml` (same plugins, same order), so `diff quartz.config.default.yaml quartz.config.yaml` shows everything we change
- `quartz.ts` — What YAML can't express: the Explorer's folder order, and adding our own components to the layout
- `components/` — Our own components, only for what no Quartz plugin does (pattern grid, pattern meta, illustration, edit links, head)
- `quartz/styles/custom.scss` — Site styles (the one file in `quartz/` that is ours)
- `quartz/` — Quartz framework source, tracked from upstream `v5` (avoid editing unless necessary)

## Quartz 5 notes

- Prefer native `@quartz-community` plugins and their options over our own components or CSS. Folder names (Explorer, breadcrumbs, folder pages) come from `content/<folder>/index.md` titles.
- Plugins are npm packages (`@quartz-community/*`). In `quartz.ts` and in `layout.byPageType.*.exclude` they are referred to by their full source, e.g. `@quartz-community/explorer`.
- Quartz 5.0 ignores the `layout` exported from `quartz.ts`, so `quartz.ts` swaps in its own `PageTypeDispatcher`. Check whether that's still needed when upgrading.
- Quartz's base and plugin CSS sits in `@layer quartz-base`, so unlayered rules in `custom.scss` beat them regardless of specificity. Put bare element rules (e.g. `h2`) inside `@layer quartz-base { … }`.
- Emitted URLs and asset paths are lowercased. Paths written into HTML by our components must go through `slugifyFilePath`.
- Upgrading Quartz: `git fetch https://github.com/jackyzha0/quartz.git v5 && git merge FETCH_HEAD`, then `npm install`.

## Content Conventions

**Pattern frontmatter:**

```yaml
---
title: "Pattern Name"
description: "One-line description"
tags:
  - protocol # or: ux, social, etc.
  - topic/moderation-curation # hierarchical topic tag
status: stub # stub | draft | mature — stubs publish visibly; no draft: true hiding
aliases:
  - "library/pattern-name" # only for patterns that existed on the old site
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
