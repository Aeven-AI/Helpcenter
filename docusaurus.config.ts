import type {Config} from '@docusaurus/types'
import type {PluginOptions as SearchOptions} from '@easyops-cn/docusaurus-search-local'
import {themes as prismThemes} from 'prism-react-renderer'

const baseUrl = '/'

/* The header's language switch: Docusaurus draws the slot as an `html` navbar item, and
   src/clientModules/languageSwitcher.ts mounts the control into it. */
const languageSlot = '<div data-language-switcher></div>'

const config: Config = {
  title: 'Help center',
  tagline: 'You bring the idea. Aeven finds the way.',
  favicon: 'img/favicon.svg',

  url: 'https://help.aeven.io',
  baseUrl,

  organizationName: 'Aeven-AI',
  projectName: 'helpcenter',

  /* A visit that names no language lands in the visitor's own language
     (languageDetection.ts), the header's switch is mounted by languageSwitcher.ts, and the
     site root is written by plugins/root-redirect.js. */
  plugins: [require.resolve('./plugins/root-redirect.js')],

  clientModules: [
    require.resolve('./src/clientModules/languageDetection.ts'),
    require.resolve('./src/clientModules/languageSwitcher.ts'),
  ],

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    /* Every language carries its own segment, English included, so a page always says which
       language it is: /en/, /cn/, /es/. The site root answers with the browser's language
       and falls back to English (see plugins/root-redirect.js). Chinese keeps htmlLang
       `zh-Hans`, the correct tag, while its address stays short. */
    locales: ['en', 'cn', 'es'],
    localeConfigs: {
      en: {label: 'English', direction: 'ltr', htmlLang: 'en', baseUrl: '/en/'},
      cn: {label: '中文', direction: 'ltr', htmlLang: 'zh-Hans', baseUrl: '/cn/'},
      es: {label: 'Español', direction: 'ltr', htmlLang: 'es', baseUrl: '/es/'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          showLastUpdateTime: false,
        },
        blog: false,
        pages: {},
        theme: {
          customCss: ['./src/css/tokens.css', './src/css/custom.css'],
        },
      },
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: false,
        searchBarShortcutHint: true,
        searchResultLimits: 8,
      } satisfies SearchOptions,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      /* The mark alone signs the header; the browser title stays "Help center". */
      hideOnScroll: false,
      logo: {
        alt: 'Aeven help center',
        src: 'img/mark.svg',
        width: 26,
        height: 23,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'help',
          position: 'left',
          label: 'Guides',
        },
        {
          to: '/docs/tips/everything-aeven-can-do',
          position: 'left',
          label: 'Tips and tricks',
        },
        {
          to: '/docs/help/troubleshooting',
          position: 'left',
          label: 'Fix a problem',
        },
        {
          href: 'https://aeven.io',
          label: 'Aeven',
          position: 'right',
        },
        {
          href: 'https://github.com/Aeven-AI/Aeven',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'html',
          value: languageSlot,
          position: 'right',
        },
      ],
    },
    /* The footer is a component of the site's own (src/theme/Footer) — its content lives
       there, not here, so the two cannot drift apart. */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  },
}

export default config
