import type {ReactNode} from 'react'

/** The eight strokes of the Aeven mark, drawn in `currentColor`. */
const MARK_PATHS = [
  'm225.301 0 305.5 529.142-43.301 25L182 25z',
  'M140 529.141 445.5 0l43.302 25-305.5 529.141z',
  'M167.901 530.059h335v50h-335z',
  'm43.302 264.5 167.5 290.119-43.302 25L0 289.5zM503.302 0l167.5 290.119-43.302 25L460 25z',
  'M460 554.618 627.5 264.5l43.301 25-167.5 290.118zM0 290.118 167.5 0 210.8 25l-167.5 290.118z',
  'M167.5 0h57.8v50h-57.8zM445.5 0h57.8v50h-57.8zM72.5 405.3 306.5 0l43.302 25-234 405.3z',
  'm364.301 0 234 405.3-43.3 25L321 25z',
  'M306.5 0h57.8v50h-57.8z',
]

export default function AevenMark({
  width = 24,
  className,
}: {
  width?: number
  className?: string
}): ReactNode {
  return (
    <svg
      width={width}
      height={(width * 581) / 671}
      viewBox="0 0 671 581"
      fill="currentColor"
      aria-hidden="true"
      className={className}>
      {MARK_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
