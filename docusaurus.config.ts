import type {Config} from '@docusaurus/types'
import type {Options as SearchOptions} from '@easyops-cn/docusaurus-search-local'
import {themes as prismThemes} from 'prism-react-renderer'

const config: Config = {
  title: 'Help center',
  tagline: 'You bring the idea. Aeven finds the way.',
  favicon: 'img/favicon.svg',

  url: 'https://help.aeven.io',
  baseUrl: '/',

  organizationName: 'Aeven-AI',
  projectName: 'helpcenter',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {label: 'English', direction: 'ltr', htmlLang: 'en'},
      'zh-Hans': {label: '简体中文', direction: 'ltr', htmlLang: 'zh-Hans'},
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
