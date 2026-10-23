import type {ReactNode} from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
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

interface Section {
  title: string
  blurb: string
  links: {label: string; to: string}[]
}

/* The four things that make Aeven worth choosing, each a claim the product can be
   checked against, under the hero. They point at the page that explains the claim rather
   than making it on their own. */
const facts: {title: string; line: string; to?: string; href?: string}[] = [
  {
    title: 'It works in your files',
    line: 'Reads and writes in the folder you choose, on your own computer.',
    to: '/docs/using/choose-a-folder',
  },
  {
    title: 'A memory you own',
    line: 'What it learns is readable, movable, and yours to keep.',
    to: '/docs/using/memory',
  },
  {
    title: 'Any model, or ours',
    line: 'The Aeven models are included; bring your own key when you want.',
    to: '/docs/using/models',
  },
  {
    title: 'Open source',
    line: 'Apache 2.0 in public — check what it does instead of trusting it.',
    href: 'https://github.com/Aeven-AI/Aeven',
  },
]

const sections: Section[] = [
  {
    title: 'Start here',
    blurb: 'Install Aeven, sign in, and finish a first task.',
    links: [
      {label: 'Install and sign in', to: '/docs/getting-started/install-and-sign-in'},
      {label: 'Your first task', to: '/docs/getting-started/your-first-task'},
    ],
  },
  {
    title: 'Everyday use',
    blurb: 'Pick a folder, ask, attach, approve, and correct.',
    links: [
      {label: 'Choose a folder', to: '/docs/using/choose-a-folder'},
      {label: 'Chat and attachments', to: '/docs/using/chat-and-attachments'},
      {label: 'What Aeven asks first', to: '/docs/using/approvals'},
      {label: 'Where your work lands', to: '/docs/using/where-your-work-lands'},
    ],
  },
  {
    title: 'Memory and models',
    blurb: 'What Aeven remembers, and which model answers.',
    links: [
      {label: 'What Aeven remembers', to: '/docs/using/memory'},
      {label: 'Choose a model', to: '/docs/using/models'},
    ],
  },
  {
    title: 'Automation',
    blurb: 'Work that runs again on its own.',
    links: [{label: 'Automations', to: '/docs/automation/automations'}],
  },
  {
    title: 'Connected apps',
    blurb: 'Bring your mail, calendar, chat, and code into a task.',
    links: [
      {label: 'Connect an account', to: '/docs/connections/connected-apps'},
    ],
  },
  {
    title: 'Account and app',
    blurb: 'Plans, credits, updates, and your data.',
    links: [
      {label: 'Plans and credits', to: '/docs/account/plans-and-credits'},
      {label: 'Your data', to: '/docs/account/your-data'},
      {label: 'Fix a problem', to: '/docs/help/troubleshooting'},
    ],
  },
]

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
  return (
    <Layout
      title="Help center"
      description="How to use Aeven: your first task, folders, approvals, memory, models, automations, connected apps, and account settings.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroMark}>
              <AevenMark size={54} />
            </div>
            <h1 className={styles.heroTitle}>What do you want to get done?</h1>
            <p className={styles.heroTagline}>
              Guides for using Aeven, written for people who would rather not read about
              software.
            </p>
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
              <span className={styles.searchLabel}>Search the help center</span>
              <span className={styles.searchHint}>⌘K</span>
            </button>
          </div>
        </section>

        <section className={styles.facts}>
          <div className={styles.factsHead}>
            <h2 className={styles.factsTitle}>Why Aeven, and not a chat box</h2>
            <Link className={styles.factsMore} to="/docs/getting-started/why-aeven">
              The four differences
            </Link>
          </div>

          <div className={styles.factsGrid}>
            {facts.map((fact) =>
              fact.to ? (
                <Link key={fact.title} to={fact.to} className={styles.fact}>
                  <span className={styles.factTitle}>{fact.title}</span>
                  <span className={styles.factLine}>{fact.line}</span>
                </Link>
              ) : (
                <a
                  key={fact.title}
                  href={fact.href}
                  className={styles.fact}
                  rel="noreferrer"
                  target="_blank">
                  <span className={styles.factTitle}>{fact.title}</span>
                  <span className={styles.factLine}>{fact.line}</span>
                </a>
              ),
            )}
          </div>
        </section>

        <section className={styles.sections}>
          {sections.map((section) => (
            <article key={section.title} className={styles.card}>
              <h2 className={styles.cardTitle}>{section.title}</h2>
              <p className={styles.cardBlurb}>{section.blurb}</p>
              <ul className={styles.cardLinks}>
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.closing}>
          <img src={favicon} alt="" className={styles.closingMark} />
          <p className={styles.closingText}>
            Can’t find what you were looking for?{' '}
            <Link to="/docs/help/troubleshooting">Tell us what went wrong</Link>.
          </p>
        </section>
      </main>
    </Layout>
  )
}
