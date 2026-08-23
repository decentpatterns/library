import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { Date as DateComponent, getDate } from "./Date"

const STATUS: Record<string, string> = {
  stub: "○ Stub",
  draft: "◐ Draft",
  mature: "● Mature",
}

const PatternMeta: QuartzComponent = ({ cfg, fileData }: QuartzComponentProps) => {
  const status = fileData.frontmatter?.["status"] as string | undefined
  const badge = status ? STATUS[status] : undefined
  const date = getDate(cfg, fileData)
  const rawContributors = fileData.frontmatter?.["contributors"] as string[] | string | undefined
  const contributors = typeof rawContributors === "string" ? [rawContributors] : rawContributors

  const parts = []
  if (badge) {
    parts.push(<span class={`status-badge status-${status}`}>{badge}</span>)
  }
  if (date) {
    parts.push(
      <span>
        last updated <DateComponent date={date} locale={cfg.locale} />
      </span>,
    )
  }
  if (contributors && contributors.length > 0) {
    parts.push(<span>contributed by {contributors.join(", ")}</span>)
  }
  if (parts.length === 0) return null

  return (
    <p class="pattern-meta">
      {parts.map((part, i) => (
        <>
          {i > 0 && <span class="meta-sep"> · </span>}
          {part}
        </>
      ))}
    </p>
  )
}

export default (() => PatternMeta) satisfies QuartzComponentConstructor
