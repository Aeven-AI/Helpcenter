import type {ReactNode} from 'react'
import Link from '@docusaurus/Link'
import AevenMark from '@site/src/components/AevenMark'
import SocialMark, {type MarkName} from '@site/src/components/SocialMark'
import styles from './styles.module.css'

/* The footer follows the one-pager's own: one black band, the mark at the top left in a
   50px band, and under it a row split 40% / the rest — the legal pair on the left, the
   titled columns on the right, each link that has one behind its own mark. Nothing here
   carries a hover state; this is the quiet end of the page. Numbers come from the
   aeven.io landing footer. */

interface FooterLinkItem {
  label: string
  to?: string
  href?: string
  mark?: MarkName
}

interface Group {
  title: string
  links: FooterLinkItem[]
}

const groups: Group[] = [
  {
    title: 'Use Aeven',
    links: [
      {label: 'Start here', to: '/docs/'},
      {label: 'Your first task', to: '/docs/getting-started/your-first-task'},
      {label: 'GitHub', href: 'https://github.com/Aeven-AI/Aeven'},
    ],
  },
  {
    title: 'Account',
    links: [
      {label: 'Plans', to: '/docs/account/plans-and-credits'},
      {label: 'Your data', to: '/docs/account/your-data'},
      {label: 'Send feedback', href: 'mailto:help@aeven.io'},
    ],
  },
  {
    title: 'Follow',
    links: [
      {label: 'X', href: 'https://x.com/aevenai', mark: 'x'},
      {label: 'Discord', href: 'https://discord.gg/6fmTDy6hYV', mark: 'discord'},
      {label: 'Telegram', href: 'https://t.me/+UNNKYk_D1dFlZWM0', mark: 'telegram'},
    ],
  },
]

function FooterLink({
  label,
  to,
  href,
  mark,
  className,
}: {
  label: string
  to?: string
  href?: string
  mark?: MarkName
  className?: string
}): ReactNode {
  const classes = [styles.link, className].filter(Boolean).join(' ')
  const content = (
    <>
      {mark ? (
        <span className={styles.mark}>
          <SocialMark mark={mark} />
        </span>
      ) : null}
      <span className={styles.label}>{label}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} rel="noreferrer" target="_blank">
      {content}
    </a>
  )
}

export default function Footer(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span className={styles.logo}>
          <AevenMark width={26} />
        </span>

        <div className={styles.buttons}>
          <div className={styles.start}>
            <div className={styles.legal}>
              <FooterLink
                label="Privacy Policy"
                to="/docs/privacy"
                className={styles.legalLink}
              />
              <FooterLink
                label="Terms of Service"
                to="/docs/terms"
                className={styles.legalLink}
              />
              <span className={styles.copyright}>© {new Date().getFullYear()} Aeven</span>
            </div>
          </div>

          <div className={styles.second}>
            {groups.map((group) => (
              <div className={styles.block} key={group.title}>
                <span className={styles.title}>{group.title}</span>

                <div className={styles.links}>
                  {group.links.map((link) => (
                    <FooterLink key={link.label} {...link} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
