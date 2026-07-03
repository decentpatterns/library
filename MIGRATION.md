# Migration checklist: moving this site to `decentpatterns/library`

Working notes for the cutover from this repo (`bumbleblue/gardening` → Cloudflare Pages at `patterns-garden.pages.dev`) to its intended home. Delete this file once the migration is complete.

**Current wiring** (surveyed July 2026): `decentpatterns/website` (Eleventy 0.11 + Tailwind 1 + Webpack, default branch `develop`) consumes `decentpatterns/library` (branch `master`) as a git submodule with symlinks, advanced by a manual GitHub Action. It deploys via **Netlify** — the deploy config lives in the Netlify dashboard, not in the repo, and the production branch (`develop` vs `master`) must be verified there. The domain **decentpatterns.com** points at Netlify via DNS at the registrar. The website repo is still active (live `/soups-2026/` CFP page).

## 1. Repo cutover (`decentpatterns/library`)

- [ ] Preserve the old Eleventy-era content on an archive branch (e.g. `eleventy-archive`)
- [ ] Push this repo's history; set default branch to `main` (currently `master`)
- [ ] Delete `.github/workflows/update-website.yml` (build-dispatch to the website repo) and decommission its PAT secrets
- [ ] Decide fate of `.github/workflows/update-format.yml` (prettier auto-commit bot) — our CI _checks_ formatting instead of auto-fixing; keeping both is redundant
- [ ] Old issue templates (`.github/ISSUE_TEMPLATE/*-template.md`) are superseded by the YAML forms in this repo
- [ ] Labels `pattern-submission` / `pattern-request` already exist there — the new issue forms bind to them automatically

## 2. In-flight contributor work (do not lose)

- [ ] **PR #25** — "peer introduction", a complete pattern by an external contributor (tied to idea issue #23). Port it with conversion: frontmatter `topic: identity-agency` → `tags: [ui, topic/identity-agency]` style, and the `::: examples :::` container → a `> [!example]-` callout. Credit the author.
- [ ] Keep the ~10 open pattern-idea issues (`[submission]`/`[request]` titled) — they're the seed backlog for new patterns
- [ ] Issue #26 (persistent-identity refinement) — fold into the pattern or keep open
- [ ] Issues #4 (format documentation) and #6 (section ordering) are answered by `CONTRIBUTING.md` and the current section order — close with a pointer

## 3. Domain and hosting

- [ ] In the Netlify dashboard: confirm which branch is production, then disable the site after cutover
- [ ] Re-point decentpatterns.com DNS (at the registrar) from Netlify to the Quartz deploy
- [ ] Update `baseUrl` in `quartz.config.ts` (OG images, sitemap, and RSS all derive from it)
- [ ] Archive `decentpatterns/website` once traffic is off it

## 4. Redirects (old URLs → new)

The old site has no redirect config in-repo, so the new host must map these:

- [ ] `/library/<slug>` → `/patterns/<slug>` — **the pattern URL shape differs**
- [ ] `/report/` and `/files/DOTS_Report_7Maxims.pdf`, `/files/report.txt`
- [ ] `/projects/web-monetization/`, `/zines/web-monetization/`, `/files/Barriers to Adoption…pdf`, `/files/DOTS-webmon-report.txt`
- [ ] `/soups-2026/` — live CFP page with an external signup form
- [ ] Org pages: `/about/`, `/vision/`, `/governance/`, `/assembly/`, `/work-with-us/`, `/contribute/`, `/glossary/`, `/code-of-conduct/`, `/imprint/`, `/privacy/`

## 5. Website-only content — port into the garden or consciously drop

The garden already covers: patterns, topics, glossary, about, contribute. Only on the old site:

- [ ] **DOTS "7 Maxims" research report** (`/report/` + PDF/txt) — the garden's about page references this report
- [ ] **Web Monetization report + interactive zine** (self-contained HTML/JS app)
- [ ] **`/soups-2026/`** — time-sensitive, currently live
- [ ] Vision, governance, assembly, work-with-us pages
- [ ] Imprint + privacy policy (legal — likely required if serving from decentpatterns.com)
- [ ] Berlin Code of Conduct page (the garden links out; the old site self-hosts)
- [ ] Assets: social-share images (og/twitter), self-hosted Inter + Space Grotesk fonts, logos, sprint illustrations
