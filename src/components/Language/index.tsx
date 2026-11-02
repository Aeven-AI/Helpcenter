/* The globe in the header and the card it opens: the same control aeven.io carries, so a
 * reader meets one language switch across the product. The mark is the site's Lucide globe
 * at 18px on a 30px ink disc; the card is the app's menu surface, 218px wide with 8px of
 * padding inside a 30px radius, and one 40px row per language with the current one checked.
 *
 * It is mounted by a client module into the header's own slot (docusaurus.config.ts, the
 * `html` navbar item), so it carries no Docusaurus context and takes the address it needs
 * as props.
 */

import {useCallback, useEffect, useRef, useState, type ReactNode} from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import {LANGUAGES, SWITCHER_LABEL, currentLocale, localeUrl, storeLanguage} from './languages'

/* Lucide's globe, which is the mark the site and the app both draw. */
function GlobeMark(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}

/* The trailing check that marks the row you are on, as the app's menu draws it. */
function CheckMark(): ReactNode {
  return (
    <svg
      className={styles.mark}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true">
      <path
        d="M15.0498 3.92579L8.49512 12.3818C8.25774 12.6881 8.04517 12.9645 7.84668 13.1689C7.63957 13.3823 7.38732 13.5841 7.04492 13.6719C6.86373 13.7183 6.6757 13.7346 6.48926 13.7197C6.13666 13.6915 5.8528 13.5355 5.6123 13.3604C5.38201 13.1926 5.12573 12.9567 4.83984 12.6953L1.03125 9.21289L1.96875 8.1875L5.77734 11.6699C6.08684 11.9529 6.27773 12.1249 6.43066 12.2363C6.50183 12.2882 6.54699 12.3135 6.57324 12.3252C6.58525 12.3305 6.59269 12.3322 6.5957 12.333C6.59802 12.3336 6.59961 12.334 6.59961 12.334C6.63317 12.3367 6.66758 12.3335 6.7002 12.3252C6.7002 12.3252 6.70211 12.3251 6.7041 12.3242C6.70698 12.3229 6.71348 12.319 6.72461 12.3115C6.74849 12.2956 6.78843 12.2642 6.84961 12.2012C6.98138 12.0654 7.13957 11.8628 7.39648 11.5313L13.9502 3.07422L15.0498 3.92579Z"
        fill="currentColor"
      />
    </svg>
  )
}

export interface LanguageProps {
  /** The path the reader is on, so the switch keeps them on the same page. */
  pathname: string
}

/** The header's language switch: a globe that opens the languages, the current one checked. */
export default function Language({pathname}: LanguageProps): ReactNode {
  const [open, setOpen] = useState(false)
  const container = useRef<HTMLDivElement>(null)
  const current = currentLocale(pathname)

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event: MouseEvent): void => {
      if (container.current !== null && !container.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const choose = useCallback(
    (language: string): void => {
      /* A deliberate choice outranks the browser's preference on every later visit. */
      storeLanguage(language)
      setOpen(false)
      window.location.assign(localeUrl(language, pathname))
    },
    [pathname],
  )

  return (
    <div className={styles.menu} ref={container}>
      <button
        type="button"
        className={styles.button}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={SWITCHER_LABEL[current] ?? SWITCHER_LABEL.en}
        title={SWITCHER_LABEL[current] ?? SWITCHER_LABEL.en}
        onClick={() => setOpen((value) => !value)}>
        <GlobeMark />
      </button>

      {open ? (
        <div className={styles.popup} role="menu">
          {LANGUAGES.map((language) => (
            <button
              key={language.key}
              type="button"
              role="menuitemradio"
              aria-checked={language.key === current}
              lang={language.tag}
              className={clsx(styles.option, language.key === current && styles.selected)}
              onClick={() => choose(language.key)}>
              <span className={styles.label}>{language.label}</span>
              <CheckMark />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
