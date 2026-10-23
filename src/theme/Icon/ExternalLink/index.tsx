import type {ReactNode} from 'react'
import styles from './styles.module.css'

/* Docusaurus marks a link that leaves the site with an arrow escaping a box, drawn from a
   sprite. Aeven's own set uses the Lucide `link` glyph (lucide.dev/icons/link), stroked in
   the ink it is set in, so the arrow never appears. */

export default function IconExternalLink({
  width = 13.5,
  height = 13.5,
}: {
  width?: number | string
  height?: number | string
}): ReactNode {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="(opens in new tab)"
      className={styles.iconExternalLink}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}
