import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot, joinSegments } from "../util/path"

const PatternThumbnail: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const illustration = fileData.frontmatter?.["illustration"] as string | undefined
  if (!illustration) return null
  const baseDir = pathToRoot(fileData.slug!)
  const src = joinSegments(baseDir, illustration)
  return (
    <div class="pattern-thumbnail">
      <img src={src} alt="" aria-hidden="true" />
    </div>
  )
}

export default (() => PatternThumbnail) satisfies QuartzComponentConstructor
