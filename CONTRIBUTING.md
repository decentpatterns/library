# Contributing to Patterns Garden

Thank you for helping grow this library! It's an open, [CC0](https://creativecommons.org/publicdomain/zero/1.0/)-licensed collection of UX design patterns for decentralized technologies. Patterns come from practitioners — you don't need to be a developer to contribute.

There are two ways in, depending on how far you want to take it.

## 1. Propose an idea (no code)

If you have a pattern in mind but aren't ready to write the whole page, **open an issue** describing:

- the **problem** the pattern solves,
- the **solution** in a sentence or two, and
- any **apps or examples** you've seen it in.

A maintainer (or another contributor) can help shape it into a full page. This is the best starting point if you're new.

## 2. Write a pattern (pull request)

Every pattern is a single Markdown file plus a folder of images. You can do this entirely in the GitHub web UI, or locally if you prefer a live preview.

### Steps

1. **Fork** this repository and create a branch.
2. **Copy the template** [`content/patterns/_template.md`](content/patterns/_template.md) to `content/patterns/<your-pattern-name>.md`. Use a lowercase, hyphenated name (e.g. `social-radius-slider.md`).
3. **Add images.** Create `content/patterns/<your-pattern-name>/` and add at least a `thumbnail.svg` and an `illustration.svg`. Example screenshots go in the same folder. See any existing pattern folder for sizing and style.
4. **Fill in the sections** (see _Anatomy of a pattern_ below) and update the frontmatter, including deleting the `draft: true` line.
5. **Cross-link** related patterns and glossary terms with `[[Wikilinks]]` — this powers the graph view, backlinks, and hover previews.
6. **List it** in two places: add a card in [`content/index.md`](content/index.md) under the right topic, and a bullet on the matching topic page in [`content/topics/`](content/topics).
7. **Format and preview** (see _Local development_), then open a pull request.

### Anatomy of a pattern

A pattern page uses these sections, in this order. **Required** sections must be present; **optional** ones are strongly encouraged but may be omitted if you truly have nothing for them.

| Section                              | Status       |
| ------------------------------------ | ------------ |
| The Design Problem                   | **Required** |
| The Design Solution                  | **Required** |
| Examples (an `> [!example]` callout) | Optional     |
| Why Choose [Pattern]?                | **Required** |
| Best Practice: How to Implement …    | **Required** |
| Potential Problems with [Pattern]    | **Required** |
| The Take Away                        | **Required** |
| References & Where to Learn More     | Optional     |

The frontmatter must include `title`, `description`, a primary type tag (`protocol`, `ux`, or `social`), one `topic/<name>` tag, and `thumbnail` + `illustration` paths. The template has all of this stubbed out.

## Local development

Optional, but it gives you a live preview. Requires **Node.js ≥ 22** and **npm ≥ 10.9.2**.

```bash
npm install
npx quartz build --serve   # preview at http://localhost:8080
npm run format             # auto-format Markdown before committing
npm run check              # verify formatting + types pass (CI runs this)
```

Please run `npm run format` before opening a PR — it normalizes Markdown style so reviews stay focused on content.

## Licensing and conduct

All contributions are released under [CC0](https://creativecommons.org/publicdomain/zero/1.0/). By contributing, you agree to license your work this way. We follow the [Berlin Code of Conduct](https://berlincodeofconduct.org/) — be respectful, curious, and inclusive.
