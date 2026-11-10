/* The home page's own words, one entry per locale, so the landing page a reader meets in
 * /cn/ or /es/ is in their language too. The sections keep the same targets everywhere:
 * a locale only changes the reading, never the route.
 */

export interface HomeLink {
  label: string
  to: string
}

export interface HomeSection {
  title: string
  blurb: string
  links: HomeLink[]
}

export interface HomeCopy {
  pageTitle: string
  pageDescription: string
  heroTitle: string
  heroTagline: string
  searchLabel: string
  closingLead: string
  closingLink: string
  sections: HomeSection[]
}

const SECTIONS: {to: string; links: string[]}[] = [
  {
    to: '/docs/getting-started',
    links: [
      '/docs/getting-started/why-aeven',
      '/docs/getting-started/install-and-sign-in',
      '/docs/getting-started/your-first-task',
    ],
  },
  {
    to: '/docs/using',
    links: ['/docs/using/choose-a-folder', '/docs/using/chat-and-attachments', '/docs/using/approvals'],
  },
  {
    to: '/docs/using/memory',
    links: ['/docs/using/memory', '/docs/using/skills', '/docs/using/models'],
  },
  {
    to: '/docs/automation/automations',
    links: ['/docs/automation/automations', '/docs/using/background-jobs', '/docs/using/where-your-work-lands'],
  },
  {
    to: '/docs/connections/connected-apps',
    links: ['/docs/connections/connected-apps', '/docs/using/browser', '/docs/using/devices'],
  },
  {
    to: '/docs/account/plans-and-credits',
    links: [
      '/docs/account/plans-and-credits',
      '/docs/account/your-data',
      '/docs/help/troubleshooting',
    ],
  },
]

/** Pairs the shared targets with one locale's labels. */
function build(
  copy: Omit<HomeCopy, 'sections'>,
  sections: {title: string; blurb: string; labels: string[]}[],
): HomeCopy {
  return {
    ...copy,
    sections: sections.map((section, index) => ({
      title: section.title,
      blurb: section.blurb,
      links: section.labels.map((label, position) => ({
        label,
        to: SECTIONS[index].links[position],
      })),
    })),
  }
}

const en = build(
  {
    pageTitle: 'Help center',
    pageDescription:
      'How to use Aeven: your first task, folders, the sidebar, approvals, memory, skills, models, bots, connectors, and account settings.',
    heroTitle: 'What do you want to get done?',
    heroTagline:
      'Guides for using Aeven, written for people who would rather not read about software.',
    searchLabel: 'Search the help center',
    closingLead: 'Can’t find what you were looking for? ',
    closingLink: 'Tell us what went wrong',
  },
  [
    {
      title: 'Start here',
      blurb: 'Install Aeven, sign in, and finish a first task.',
      labels: ['Why Aeven is different', 'Install and sign in', 'Your first task'],
    },
    {
      title: 'Everyday use',
      blurb: 'Pick a folder, ask, attach, approve, and correct.',
      labels: ['Choose a folder', 'Chat and attachments', 'What Aeven asks first'],
    },
    {
      title: 'Memory, skills and models',
      blurb: 'What Aeven remembers, the procedures it follows, and which model answers.',
      labels: ['What Aeven remembers', 'Skills', 'Choose a model'],
    },
    {
      title: 'Bots',
      blurb: 'Work that runs on its own, on a schedule you confirm or in the background.',
      labels: ['Bots', 'Work that keeps running', 'Where your work lands'],
    },
    {
      title: 'Connectors',
      blurb: 'Bring your mail, calendar, chat, code, browser, and phones into a task.',
      labels: ['Connectors', 'The browser', 'Phones and simulators'],
    },
    {
      title: 'Account and app',
      blurb: 'Plans, credits, updates, and your data.',
      labels: ['Plans and credits', 'Your data', 'Fix a problem'],
    },
  ],
)

const cn = build(
  {
    pageTitle: '帮助中心',
    pageDescription:
      '如何使用 Aeven：第一个任务、文件夹、侧边栏、审批、记忆、技能、模型、机器人、连接和账户设置。',
    heroTitle: '你想完成什么？',
    heroTagline: '写给不想研究软件说明的人的 Aeven 使用指南。',
    searchLabel: '搜索帮助中心',
    closingLead: '没有找到你要的内容？',
    closingLink: '告诉我们哪里出了问题',
  },
  [
    {
      title: '从这里开始',
      blurb: '安装 Aeven、登录，并完成第一个任务。',
      labels: ['Aeven 的不同之处', '安装并登录', '你的第一个任务'],
    },
    {
      title: '日常使用',
      blurb: '选择文件夹、提问、添加附件、审批并纠正。',
      labels: ['选择文件夹', '对话与附件', 'Aeven 会先问什么'],
    },
    {
      title: '记忆、技能与模型',
      blurb: 'Aeven 记住什么、它遵循的流程，以及由哪个模型来回答。',
      labels: ['Aeven 记得什么', '技能', '选择模型'],
    },
    {
      title: '机器人',
      blurb: '自行运行的工作：按你确认的时间，或在后台。',
      labels: ['机器人', '持续运行的工作', '你的成果落在哪里'],
    },
    {
      title: '连接',
      blurb: '把邮件、日历、聊天、代码、浏览器和手机带进同一个任务。',
      labels: ['连接', '浏览器', '手机与模拟器'],
    },
    {
      title: '账户与应用',
      blurb: '套餐、点数、更新和你的数据。',
      labels: ['套餐与点数', '你的数据', '解决问题'],
    },
  ],
)

const es = build(
  {
    pageTitle: 'Centro de ayuda',
    pageDescription:
      'Cómo usar Aeven: tu primera tarea, carpetas, la barra lateral, aprobaciones, memoria, skills, modelos, bots, conectores y ajustes de cuenta.',
    heroTitle: '¿Qué quieres conseguir?',
    heroTagline: 'Guías para usar Aeven, escritas para quien prefiere no leer sobre software.',
    searchLabel: 'Buscar en el centro de ayuda',
    closingLead: '¿No encuentras lo que buscabas? ',
    closingLink: 'Cuéntanos qué ha fallado',
  },
  [
    {
      title: 'Empieza aquí',
      blurb: 'Instala Aeven, inicia sesión y completa una primera tarea.',
      labels: ['Por qué Aeven es diferente', 'Instalar e iniciar sesión', 'Tu primera tarea'],
    },
    {
      title: 'Uso diario',
      blurb: 'Elige una carpeta, pregunta, adjunta, aprueba y corrige.',
      labels: ['Elegir una carpeta', 'Chat y adjuntos', 'Qué te pregunta Aeven primero'],
    },
    {
      title: 'Memoria, skills y modelos',
      blurb: 'Qué recuerda Aeven, los procedimientos que sigue y qué modelo responde.',
      labels: ['Qué recuerda Aeven', 'Skills', 'Elegir un modelo'],
    },
    {
      title: 'Bots',
      blurb: 'Trabajo que se hace solo, con un horario que tú confirmas o en segundo plano.',
      labels: ['Bots', 'Trabajo que sigue en marcha', 'Dónde queda tu trabajo'],
    },
    {
      title: 'Conectores',
      blurb: 'Trae tu correo, calendario, chat, código, navegador y teléfonos a una tarea.',
      labels: ['Conectores', 'El navegador', 'Teléfonos y simuladores'],
    },
    {
      title: 'Cuenta y aplicación',
      blurb: 'Planes, créditos, actualizaciones y tus datos.',
      labels: ['Planes y créditos', 'Tus datos', 'Resolver un problema'],
    },
  ],
)

export const HOME_COPY: Record<string, HomeCopy> = {en, cn, es}
