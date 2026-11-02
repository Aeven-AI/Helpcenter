/* Mounts the header's language switch into the slot the navbar draws
 * (docusaurus.config.ts, an `html` item), and re-renders it after each client-side
 * navigation so the check marks the page the reader is on.
 *
 * The switch lives outside Docusaurus's React tree because a navbar item of a custom type
 * is not part of the theme's own item map; it therefore takes the address it needs from
 * the router's location.
 */

import {createElement} from 'react'
import {createRoot, type Root} from 'react-dom/client'
import Language from '@site/src/components/Language'

/** The slot's own markup; a page without the navbar has none, and then nothing mounts. */
const SLOT = '[data-language-switcher]'

let root: Root | null = null

function mount(pathname: string): void {
  const slot = document.querySelector<HTMLElement>(SLOT)
  if (slot === null) return

  root ??= createRoot(slot)
  root.render(createElement(Language, {pathname}))
}

/** Called by Docusaurus after every navigation, including the first page load. */
export function onRouteDidUpdate({location}: {location: {pathname: string}}): void {
  mount(location.pathname)
}
