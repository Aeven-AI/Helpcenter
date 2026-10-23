import type {SidebarsConfig} from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  help: [
    {
      type: 'doc',
      id: 'index',
      label: 'Help center',
    },
    {
      type: 'category',
      label: 'Getting started',
      collapsible: false,
      items: [
        'getting-started/why-aeven',
        'getting-started/install-and-sign-in',
        'getting-started/your-first-task',
      ],
    },
    {
      type: 'category',
      label: 'Using Aeven',
      collapsible: false,
      items: [
        'using/choose-a-folder',
        'using/chat-and-attachments',
        'using/approvals',
        'using/where-your-work-lands',
        'using/memory',
        'using/models',
      ],
    },
    {
      type: 'category',
      label: 'Automation',
      collapsible: false,
      items: [
        'automation/automations',
      ],
    },
    {
      type: 'category',
      label: 'Connections',
      collapsible: false,
      items: [
        'connections/connected-apps',
      ],
    },
    {
      type: 'category',
      label: 'Account and app',
      collapsible: false,
      items: [
        'account/plans-and-credits',
        'account/your-data',
      ],
    },
    {
      type: 'category',
      label: 'Help',
      collapsible: false,
      items: [
        'help/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      collapsible: false,
      items: [
        'legal/privacy',
        'legal/terms',
      ],
    },
  ],
}

export default sidebars
