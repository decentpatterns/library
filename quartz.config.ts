import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Decent Patterns",
    pageTitleSuffix: " | Decent Patterns",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "patterns-garden.pages.dev",
    ignorePatterns: ["private", "templates", ".obsidian", "patterns/_template.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: { name: "Space Grotesk", weights: [300, 400] },
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        // dark-only site: both palettes carry the dark values so every consumer
        // of the CSS variables renders dark; print styles live in custom.scss
        lightMode: {
          light: "#131F26",
          lightgray: "#29333B",
          gray: "#A0ADC0",
          darkgray: "#CAD3DF",
          dark: "#ECF0F8",
          secondary: "#FF8566",
          tertiary: "#32C8B2",
          highlight: "rgba(255, 133, 102, 0.12)",
          textHighlight: "#FF856644",
        },
        darkMode: {
          light: "#131F26",
          lightgray: "#29333B",
          gray: "#A0ADC0",
          darkgray: "#CAD3DF",
          dark: "#ECF0F8",
          secondary: "#FF8566",
          tertiary: "#32C8B2",
          highlight: "rgba(255, 133, 102, 0.12)",
          textHighlight: "#FF856644",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-dark",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
