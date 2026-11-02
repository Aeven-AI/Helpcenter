/* The languages this site is written in, where the visitor's choice is kept, and the
 * addresses that carry it. The list, the storage key and the detection rule mirror the
 * aeven.io site (website/site/src/app/services/LanguageService.jsx), so both surfaces
 * answer a browser in the same language.
 *
 * Every language has a segment of its own — /en/, /cn/, /es/ — so an address always says
 * which language a page is in. The root of the site has no language: it asks the browser
 * and falls back to English.
 */

export interface Language {
  /** Docusaurus locale key, which is also the URL segment. Chinese keeps `cn` — the short
      address — while its htmlLang stays `zh-Hans`. */
  key: string
  /** The language's own name, so a visitor can find it in a list they cannot read. */
  label: string
  /** BCP 47 tag for the label, so a screen reader announces it in that language. */
  tag: string
  /** Primary subtag a browser reports for this language, which is what detection matches. */
  subtag: string
}

/* Every language in this list must also appear in `i18n.locales` in
   docusaurus.config.ts with the same baseUrl; a locale the site never builds has no
   address to switch to. */
export const LANGUAGES: Language[] = [
  {key: 'en', label: 'English', tag: 'en', subtag: 'en'},
  {key: 'cn', label: '中文', tag: 'zh-Hans', subtag: 'zh'},
  {key: 'es', label: 'Español', tag: 'es', subtag: 'es'},
]

/** What the site answers when the browser asks for none of the languages above. */
export const DEFAULT_LANGUAGE = 'en'

/* The same key aeven.io stores its choice under, so the naming stays one idea across
   the product even though the two origins keep their own storage. */
export const STORAGE_KEY = 'aeven:language'

/** Whether `value` names a language this site is written in. */
export function isSupported(value: unknown): value is string {
  return typeof value === 'string' && LANGUAGES.some((language) => language.key === value)
}

/** The visitor's own choice, or null when they have not made one yet. */
export function readStoredLanguage(): string | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isSupported(stored) ? stored : null
  } catch {
    /* Private mode without storage: the page still switches, it just cannot remember. */
    return null
  }
}

/** Keep a choice for every later visit; the stored value wins over the browser's. */
export function storeLanguage(language: string): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, language)
  } catch {
    /* Private mode without storage, as above. */
  }
}

/* The first language in the browser's own list that this site is written in. A visitor
   whose browser asks for zh-Hans-CN gets Chinese, because the primary subtag decides
   which language is really being asked for. */
export function readBrowserLanguage(): string {
  const requested =
    typeof navigator === 'undefined'
      ? []
      : Array.isArray(navigator.languages) && navigator.languages.length > 0
        ? navigator.languages
        : navigator.language
          ? [navigator.language]
          : []

  for (const entry of requested) {
    const subtag = String(entry).toLowerCase().split('-')[0]
    const match = LANGUAGES.find((language) => language.subtag === subtag)
    if (match !== undefined) return match.key
  }

  return DEFAULT_LANGUAGE
}

/** The language to show a visitor who has not chosen: the browser's, then English. */
export function resolveLanguage(): string {
  return readStoredLanguage() ?? readBrowserLanguage()
}

/** The language an address names, or null when it names none (the site root, an old link). */
export function localeInPath(pathname: string): string | null {
  for (const {key} of LANGUAGES) {
    if (pathname === `/${key}` || pathname.startsWith(`/${key}/`)) return key
  }
  return null
}

/** The language a page is served in; an address without one is read as the fallback. */
export function currentLocale(pathname: string): string {
  return localeInPath(pathname) ?? DEFAULT_LANGUAGE
}

/* The path with its language segment removed, so it can be re-prefixed for another. */
function pathAfterLocale(pathname: string): string {
  const locale = localeInPath(pathname)
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  if (locale === null) return path

  const rest = path.slice(locale.length + 1)
  return rest === '' ? '/' : rest
}

/** The address of the current page in `locale`, which is what a switch navigates to. */
export function localeUrl(locale: string, pathname: string): string {
  const path = pathAfterLocale(pathname)
  return path === '/' ? `/${locale}/` : `/${locale}${path}`
}
