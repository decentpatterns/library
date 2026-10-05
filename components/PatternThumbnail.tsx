import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../quartz/components/types"
import { FilePath, pathToRoot, joinSegments, slugifyFilePath } from "../quartz/util/path"

interface Options {
  repo?: string
}

export default ((opts?: Options) => {
  const PatternThumbnail: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const illustration = fileData.frontmatter?.["illustration"] as string | undefined
    if (!illustration) {
      if (!opts?.repo) return null
      const title = fileData.frontmatter?.title ?? fileData.slug
      const issueUrl = `${opts.repo}/issues/new?title=${encodeURIComponent(
        `[${title}] illustration wanted`,
      )}`
      return (
        <div class="pattern-thumbnail pattern-thumbnail-placeholder">
          <a href={issueUrl} target="_blank" rel="noopener">
            This pattern needs an illustration — add one
          </a>
        </div>
      )
    }
    const baseDir = pathToRoot(fileData.slug!)
    // emitted asset paths are lowercased, so match them
    const src = joinSegments(baseDir, slugifyFilePath(illustration as FilePath))
    return (
      <div class="pattern-thumbnail">
        <img src={src} alt="" aria-hidden="true" />
      </div>
    )
  }
  return PatternThumbnail
}) satisfies QuartzComponentConstructor<Options>
