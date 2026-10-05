import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../quartz/components/types"

interface Options {
  repo: string
  branch?: string
}

export default ((opts: Options) => {
  const branch = opts.branch ?? "main"
  const EditLinks: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const filePath = fileData.filePath
    if (!filePath) return null
    const title = fileData.frontmatter?.title ?? fileData.slug
    const editUrl = `${opts.repo}/edit/${branch}/${filePath}`
    const issueUrl = `${opts.repo}/issues/new?title=${encodeURIComponent(`[${title}] `)}`
    return (
      <div class="edit-links">
        <a href={editUrl} target="_blank" rel="noopener">
          Edit this page on GitHub
        </a>
        <a href={issueUrl} target="_blank" rel="noopener">
          Something wrong? Open an issue
        </a>
      </div>
    )
  }
  return EditLinks
}) satisfies QuartzComponentConstructor<Options>
