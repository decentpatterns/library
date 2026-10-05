import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry, ConditionalRender } from "./quartz/components"
import { PageTypes } from "./quartz/plugins"
import type { FullPageLayout } from "./quartz/cfg"
import * as Component from "./components"

const REPO_URL = "https://github.com/decentpatterns/library"

// Explorer callbacks can't be expressed in YAML. They are serialised and run in
// the browser, so they must be self-contained (no references to outer variables).
// The node fields used here; the plugin's published FileTrieNode type is looser
// than what it passes at runtime.
type ExplorerNode = { isFolder: boolean; slugSegment: string; displayName: string }

const mapFn = (node: ExplorerNode) => {
  const folderNames: Record<string, string> = {
    patterns: "Patterns",
    topics: "Topics",
    glossary: "Glossary",
  }
  if (node.isFolder && folderNames[node.slugSegment]) {
    node.displayName = folderNames[node.slugSegment]
  }
}
const sortFn = (a: ExplorerNode, b: ExplorerNode) => {
  const folderOrder = ["patterns", "topics", "glossary"]
  if (a.isFolder && b.isFolder) {
    const aIndex = folderOrder.indexOf(a.slugSegment)
    const bIndex = folderOrder.indexOf(b.slugSegment)
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
    if (aIndex !== -1) return -1
    if (bIndex !== -1) return 1
  }
  if (a.isFolder && !b.isFolder) return -1
  if (!a.isFolder && b.isFolder) return 1
  return a.displayName.localeCompare(b.displayName, undefined, {
    numeric: true,
    sensitivity: "base",
  })
}
// keyed by the plugin source in quartz.config.yaml
componentRegistry.setOptionOverrides("@quartz-community/explorer", { mapFn, sortFn })

const isPattern = (slug?: string) =>
  (slug?.startsWith("patterns/") ?? false) && slug !== "patterns/index"
const isTopic = (slug?: string) => (slug?.startsWith("topics/") ?? false) && slug !== "topics/index"

// our components on every page type; plugin components come from quartz.config.yaml
const shared: Partial<FullPageLayout> = {
  head: Component.Head(),
  afterBody: [
    ConditionalRender({
      component: Component.PatternGrid({ mode: "by-topic" }),
      condition: (page) => page.fileData.slug === "index",
    }),
    ConditionalRender({
      component: Component.PatternGrid({ mode: "current-topic", showDescriptions: true }),
      condition: (page) => isTopic(page.fileData.slug),
    }),
    Component.EditLinks({ repo: REPO_URL }),
  ],
  footer: [
    Component.Footer({
      links: {
        "Source (GitHub)": REPO_URL,
        "Built with Quartz": "https://quartz.jzhao.xyz",
      },
    }),
  ],
}

const config = await loadQuartzConfig()
export default config

const base = await loadQuartzLayout()

// pattern metadata and illustration only appear on single-page (content) layouts
const content = base.byPageType.content ?? base.defaults
const contentLayout: Partial<FullPageLayout> = {
  ...content,
  ...shared,
  beforeBody: [
    ...(content.beforeBody ?? []),
    ConditionalRender({
      component: Component.PatternMeta(),
      condition: (page) => isPattern(page.fileData.slug),
    }),
  ],
  right: [
    ConditionalRender({
      component: Component.PatternThumbnail({ repo: REPO_URL }),
      condition: (page) => page.fileData.slug?.startsWith("patterns/") ?? false,
    }),
    ...(content.right ?? []),
  ],
}

export const layout = {
  defaults: { ...base.defaults, ...shared },
  byPageType: {
    ...Object.fromEntries(
      Object.entries(base.byPageType).map(([pageType, l]) => [pageType, { ...l, ...shared }]),
    ),
    content: contentLayout,
  },
}

// Quartz 5.0's loadQuartzConfig() renders pages from the YAML layout only and
// ignores the `layout` export above, so swap in a dispatcher that uses it.
config.plugins.emitters = [
  ...config.plugins.emitters.filter((emitter) => emitter.name !== "PageTypeDispatcher"),
  PageTypes.PageTypeDispatcher(layout),
]
