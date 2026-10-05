import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../quartz/components/types"
import QuartzHead from "../quartz/components/Head"

export default (() => {
  const BaseHead = QuartzHead()
  const Head: QuartzComponent = (props: QuartzComponentProps) => {
    // avoid "Site Name | Site Name" on pages titled after the site itself
    if (props.fileData.frontmatter?.title === props.cfg.pageTitle) {
      return <BaseHead {...props} cfg={{ ...props.cfg, pageTitleSuffix: "" }} />
    }
    return <BaseHead {...props} />
  }
  return Head
}) satisfies QuartzComponentConstructor
