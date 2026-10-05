import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../quartz/components/types"
import { QuartzPluginData } from "../quartz/plugins/vfile"
import {
  FilePath,
  FullSlug,
  joinSegments,
  pathToRoot,
  resolveRelative,
  slugifyFilePath,
} from "../quartz/util/path"

interface Options {
  mode: "by-topic" | "current-topic"
  topicOrder?: string[]
  showDescriptions?: boolean
}

const STATUS_ICON: Record<string, string> = {
  stub: "○",
  draft: "◐",
}

const byTitle = (a: QuartzPluginData, b: QuartzPluginData) =>
  (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? "")

function topicSegment(slug: string): string {
  return slug.split("/")[1] ?? ""
}

function patternsForTopic(allFiles: QuartzPluginData[], segment: string): QuartzPluginData[] {
  return allFiles
    .filter(
      (f) =>
        f.slug?.startsWith("patterns/") &&
        f.slug !== "patterns/index" &&
        (f.frontmatter?.tags ?? []).includes(`topic/${segment}`),
    )
    .sort(byTitle)
}

function Card({
  pattern,
  currentSlug,
  showDescription,
}: {
  pattern: QuartzPluginData
  currentSlug: FullSlug
  showDescription: boolean
}) {
  const title = pattern.frontmatter?.title ?? pattern.slug
  const thumbnail = pattern.frontmatter?.["thumbnail"] as string | undefined
  const status = pattern.frontmatter?.["status"] as string | undefined
  const icon = status ? STATUS_ICON[status] : undefined
  return (
    <a class="pattern-card" href={resolveRelative(currentSlug, pattern.slug!)}>
      {thumbnail ? (
        <img
          src={joinSegments(pathToRoot(currentSlug), slugifyFilePath(thumbnail as FilePath))}
          alt=""
        />
      ) : (
        <div class="pattern-card-placeholder">
          <span>needs an illustration</span>
        </div>
      )}
      <span class="pattern-card-title">
        {title}
        {icon && (
          <span class="pattern-card-status" title={`This pattern is a ${status} — help finish it`}>
            {" "}
            {icon}
          </span>
        )}
      </span>
      {showDescription && pattern.frontmatter?.description && (
        <span class="pattern-card-desc">{pattern.frontmatter.description}</span>
      )}
    </a>
  )
}

export default ((opts: Options) => {
  const showDescriptions = opts.showDescriptions ?? false

  const PatternGrid: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const currentSlug = fileData.slug!

    const renderGrid = (patterns: QuartzPluginData[]) =>
      patterns.length > 0 ? (
        <div class="pattern-grid">
          {patterns.map((pattern) => (
            <Card pattern={pattern} currentSlug={currentSlug} showDescription={showDescriptions} />
          ))}
        </div>
      ) : (
        <p class="pattern-grid-empty">No patterns here yet — add the first one!</p>
      )

    if (opts.mode === "current-topic") {
      return renderGrid(patternsForTopic(allFiles, topicSegment(currentSlug)))
    }

    // by-topic: one section per topic page
    const topics = allFiles
      .filter(
        (f) =>
          f.slug?.startsWith("topics/") &&
          f.slug !== "topics/index" &&
          (f.frontmatter?.tags ?? []).includes("topic"),
      )
      .sort(byTitle)

    if (opts.topicOrder) {
      const order = opts.topicOrder
      topics.sort((a, b) => {
        const ai = order.indexOf(topicSegment(a.slug!))
        const bi = order.indexOf(topicSegment(b.slug!))
        if (ai !== -1 && bi !== -1) return ai - bi
        if (ai !== -1) return -1
        if (bi !== -1) return 1
        return byTitle(a, b)
      })
    }

    return (
      <div class="pattern-grid-sections">
        {topics.map((topic) => (
          <section>
            <h2>
              <a href={resolveRelative(currentSlug, topic.slug!)}>{topic.frontmatter?.title}</a>
            </h2>
            {topic.frontmatter?.description && <p>{topic.frontmatter.description}</p>}
            {renderGrid(patternsForTopic(allFiles, topicSegment(topic.slug!)))}
          </section>
        ))}
      </div>
    )
  }
  return PatternGrid
}) satisfies QuartzComponentConstructor<Options>
