## What does this PR do?

<!-- A sentence or two. If it resolves an issue, link it: "Closes #123" -->

## If adding a new pattern

<!-- Delete this section if it doesn't apply. -->

- [ ] Copied [`content/patterns/_template.md`](../blob/HEAD/content/patterns/_template.md), removed the `draft: true` line and the how-to comment block
- [ ] Frontmatter complete: `title`, `description`, a type tag (`protocol` / `ux` / `social`), one `topic/*` tag, `thumbnail` + `illustration` paths
- [ ] Required sections filled: The Design Problem, The Design Solution, Why Choose, Best Practice, Potential Problems, The Take Away
- [ ] Images added in `content/patterns/<name>/` (at least `thumbnail.svg` + `illustration.svg`)
- [ ] Pattern listed in `content/index.md` and on its topic page in `content/topics/`
- [ ] Ran `npm run format` (CI checks formatting)
