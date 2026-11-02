import type {ReactNode} from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {HOME_COPY} from '@site/src/components/HomeCopy'
import styles from './index.module.css'

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

function AevenMark({size = 24}: {size?: number}): ReactNode {
  return (
    <svg
      width={size}
      height={(size * 581) / 671}
      viewBox="0 0 671 581"
      fill="currentColor"
      aria-hidden="true"
      className={styles.mark}>
      {MARK_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}

function openSearch(): void {
  const input = document.querySelector<HTMLInputElement>('input.navbar__search-input')
  if (!input) {
    return
  }
  input.focus()
  input.click()
}

export default function Home(): ReactNode {
  const favicon = useBaseUrl('img/favicon.svg')
  const {i18n} = useDocusaurusContext()
  const copy = HOME_COPY[i18n.currentLocale] ?? HOME_COPY.en
  /* Every section links to a doc, and a doc lives under its own language's segment. */
  const prefix = (i18n.localeConfigs[i18n.currentLocale]?.baseUrl ?? `/${i18n.currentLocale}/`).replace(
    /\/$/,
    '',
  )

  return (
    <Layout title={copy.pageTitle} description={copy.pageDescription}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroMark}>
              <AevenMark size={54} />
            </div>
            <h1 className={styles.heroTitle}>{copy.heroTitle}</h1>
            <p className={styles.heroTagline}>{copy.heroTagline}</p>
            <button type="button" className={styles.search} onClick={openSearch}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <span className={styles.searchLabel}>{copy.searchLabel}</span>
              <span className={styles.searchHint}>⌘K</span>
            </button>
          </div>
        </section>

        <section className={styles.sections}>
          {copy.sections.map((section) => (
            <article key={section.title} className={styles.card}>
              <h2 className={styles.cardTitle}>{section.title}</h2>
              <p className={styles.cardBlurb}>{section.blurb}</p>
              <ul className={styles.cardLinks}>
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={`${prefix}${link.to}`}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.closing}>
          <img src={favicon} alt="" className={styles.closingMark} />
          <p className={styles.closingText}>
            {copy.closingLead}
            <Link to={`${prefix}/docs/help/troubleshooting`}>{copy.closingLink}</Link>.
          </p>
        </section>
      </main>
    </Layout>
  )
}
