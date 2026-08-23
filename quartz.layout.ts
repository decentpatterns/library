import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const REPO_URL = "https://github.com/decentpatterns/library"

const explorerOptions: Parameters<typeof Component.Explorer>[0] = {
  mapFn: (node) => {
    const folderNames: Record<string, string> = {
      patterns: "Patterns",
      topics: "Topics",
      glossary: "Glossary",
    }
    if (node.isFolder && folderNames[node.slugSegment]) {
      node.displayName = folderNames[node.slugSegment]
    }
  },
  sortFn: (a, b) => {
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
  },
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      component: Component.PatternGrid({ mode: "by-topic" }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.PatternGrid({ mode: "current-topic", showDescriptions: true }),
      condition: (page) =>
        (page.fileData.slug?.startsWith("topics/") ?? false) &&
        page.fileData.slug !== "topics/index",
    }),
    Component.EditLinks({ repo: REPO_URL }),
  ],
  footer: Component.Footer({
    links: {
      "Source (GitHub)": REPO_URL,
      "Built with Quartz": "https://quartz.jzhao.xyz",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.PatternMeta(),
      condition: (page) =>
        (page.fileData.slug?.startsWith("patterns/") ?? false) &&
        page.fileData.slug !== "patterns/index",
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
        },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.PatternThumbnail({ repo: REPO_URL }),
      condition: (page) => page.fileData.slug?.startsWith("patterns/") ?? false,
    }),
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
        },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [],
}
