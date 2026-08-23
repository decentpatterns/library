# Contributing to Decent Patterns

Thank you for helping grow this library! It's an open, [CC0](https://creativecommons.org/publicdomain/zero/1.0/)-licensed collection of UX design patterns for decentralized technologies. Patterns come from practitioners — you don't need to be a developer to contribute, and you don't need to arrive with a finished page. Patterns have a **status** — `stub` (a skeleton), `draft` (usable but incomplete), or `mature` (complete) — and submitting a stub is a real contribution.

There are two ways in, depending on how far you want to take it.

## 1. Propose or request a pattern (no code)

Open an issue — there's a form for each path:

- **[Propose a pattern](../../issues/new?template=propose-pattern.yml)** — you have a pattern in mind (a name, the problem, the solution, examples you've seen) but aren't ready to write the whole page.
- **[Request a pattern](../../issues/new?template=request-pattern.yml)** — you keep running into a design problem and want the community to work out a pattern for it.

A maintainer (or another contributor) can pick it up from there. This is the best starting point if you're new.

You can also fix any existing page directly: every page on the site has an **"Edit this page on GitHub"** link at the bottom.

## 2. Write a pattern (pull request)

Every pattern is a single Markdown file. You can do this entirely in the GitHub web UI, or locally if you prefer a live preview.

### Steps

1. **Fork** this repository and create a branch.
2. **Copy the template** [`content/patterns/_template.md`](content/patterns/_template.md) to `content/patterns/<your-pattern-name>.md`. Use a lowercase, hyphenated name (e.g. `social-radius-slider.md`).
3. **Update the frontmatter**: `title`, `description`, tags, and a `status` that honestly reflects how done it is. That's the whole registration — the homepage and topic page generate themselves from the frontmatter.
4. **Fill in what you can** of the sections (see _Anatomy of a pattern_ below). A `stub` or `draft` can leave gaps.
5. **Images are optional.** If you have them, create `content/patterns/<your-pattern-name>/` with a `thumbnail.svg` and an `illustration.svg` (see any existing pattern folder for sizing and style) and point the `thumbnail` / `illustration` frontmatter paths at them. Until then the site shows a placeholder inviting someone to illustrate it — often a designer picks that up later.
6. **Cross-link** related patterns and glossary terms with `[[Wikilinks]]` — this powers the graph view, backlinks, and hover previews.
7. **Format and preview** (see _Local development_), then open a pull request.

### Anatomy of a pattern

A pattern page uses these sections, in this order. A **mature** pattern has all required sections filled in; a `stub` or `draft` can leave gaps — visible gaps are invitations for the next contributor.

| Section                              | Status                |
| ------------------------------------ | --------------------- |
| The Design Problem                   | **Required (mature)** |
| The Design Solution                  | **Required (mature)** |
| Examples (an `> [!example]` callout) | Optional              |
| Why Choose [Pattern]?                | **Required (mature)** |
| Best Practice: How to Implement …    | **Required (mature)** |
| Potential Problems with [Pattern]    | **Required (mature)** |
| The Take Away                        | **Required (mature)** |
| References & Where to Learn More     | Optional              |

The frontmatter must include `title`, `description`, a primary type tag (`protocol`, `ux`, or `social`), one `topic/<name>` tag, and a `status`. `thumbnail`, `illustration`, and `contributors` are optional. The template has all of this stubbed out, and `npm test` checks it.

## Local development

Optional, but it gives you a live preview. Requires **Node.js ≥ 22** and **npm ≥ 10.9.2**.

```bash
npm install
npx quartz build --serve   # preview at http://localhost:8080
npm run format             # auto-format Markdown before committing
npm run check              # verify formatting + types pass (CI runs this)
npm test                   # content lint: frontmatter completeness (CI runs this)
```

Please run `npm run format` before opening a PR — it normalizes Markdown style so reviews stay focused on content.

## Licensing and conduct

All contributions are released under [CC0](https://creativecommons.org/publicdomain/zero/1.0/). By contributing, you agree to license your work this way. We follow the [Berlin Code of Conduct](https://berlincodeofconduct.org/) — be respectful, curious, and inclusive.
