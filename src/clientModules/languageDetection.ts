import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import {localeInPath, localeUrl, resolveLanguage} from '@site/src/components/Language/languages'

/* A visit that names no language — the site root, or a link written before the languages
 * had segments of their own — is answered in the visitor's language: their own choice
 * first, then their browser's, then English. A path that already names a language is left
 * alone, so a shared /cn/ link is never rewritten into another language. */
if (ExecutionEnvironment.canUseDOM) {
  const decide = (): void => {
    if (localeInPath(window.location.pathname) !== null) return

    const target = localeUrl(resolveLanguage(), window.location.pathname)
    if (target === window.location.pathname) return

    window.location.replace(`${target}${window.location.search}${window.location.hash}`)
  }

  decide()
}
