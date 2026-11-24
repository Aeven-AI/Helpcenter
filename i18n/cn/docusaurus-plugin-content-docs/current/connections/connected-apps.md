---
title: 连接器
description: 让 Æven 访问你的邮件、日历、文件、代码仓库、聊天、业务工具和云账户——大多数服务一键连接，其余的填一张简短的表单或关联账户。
---

# 连接器

连接器是对你已有账户的访问权：一个邮箱、一份日历、一个云盘、一个代码仓库、一个团队聊天、一个工作区、一家店铺、一个云账户。连接之后，它就成了 Æven 可以在任务里使用的东西——“总结今天的邮件”、“我明天日历上有什么”、“为这件事开一个 pull request”、“把这些笔记加到 Notion 里的 Q3 页面”。

**设置 → 连接器** 是它们所在的地方，分列在 **沟通**、**效率**、**开发工具**、**销售与营销**、**电商与购物**、**金融服务** 和最后的 **自定义连接器** 这几个标题下。顶部的 **搜索连接器** 可以缩小列表。它旁边的那一页 [技能](../using/skills.md) 放着使用它们的流程。

## 连接一个账户

1. 打开 **设置 → 连接器**。
2. 选择服务，然后按 **登录**。
3. 在打开的窗口里批准它请求的访问权限。
4. 回到 Æven，那一行会显示它关联的账户，并且是 **开**。

以下服务支持一键登录：

- **Google** —— Gmail、Google Drive、Google Calendar、Google 任务、Google 通讯录、Google Meet、BigQuery、Compute Engine
- **Microsoft** —— Microsoft 365、Outlook、Outlook Calendar、OneDrive、SharePoint、Teams
- **工作工具** —— Slack、Notion、Calendly、Jira 与 Confluence（Atlassian）、Monday、Stripe
- **开发者工具** —— GitHub、Vercel、Cloudflare、AWS、Supabase

**Microsoft 365** 一次登录即可同时连接邮件、日历、OneDrive、SharePoint 和 Teams。它、SharePoint 和 Teams 都需要工作或学校账户：个人的 Microsoft 账户关联不了它们。如果你的组织需要先批准 Æven，那一行会说明，并附上给管理员的批准页面链接。

## 用其他方式连接的账户

| 服务 | 如何关联 |
| --- | --- |
| 邮箱账户 | 你的地址，以及接收（IMAP 或 POP3）和可选发送（SMTP）的服务器信息——适用于任何邮箱，也是让 Æven 读取 Gmail 的方式 |
| Salesforce | 先由你的 Salesforce 管理员为 Æven 设置一个应用，并打开 Salesforce 的 MCP 服务器；那一行列出了他们具体需要做什么。然后填入你组织的 **我的域** 和应用的 **使用者密钥**，再选择 **连接组织** |
| Shopify | 输入店铺的 myshopify.com 地址，选择 **连接店铺**；随后 Shopify 会请你把 Æven 应用安装到该店铺。**连接其他店铺** 可以添加下一家 |
| Azure DevOps | 在 **组织** 里输入组织名称或它的 dev.azure.com 地址，选择 **连接组织**；随后 Microsoft 会请你用工作或学校账户登录 |
| Oracle Cloud | 先由你的 OCI 管理员在身份域里为 Æven 设置一个应用；那一行列出了他们具体需要做什么。然后填入 **MCP 服务器 URL**、**身份域 URL**，以及应用的 **客户端 ID** 和 **客户端密钥**，再选择 **连接租户** |
| WhatsApp | 关联一个手机号；关联之后那一行会显示这个号码 |
| Telegram | 你的手机号、Telegram 发给你的验证码，以及你设置过的两步验证密码 |
| Discord | 添加一个服务器；Æven 的机器人会加入你选择的服务器，并在那里回答 |
| Slack | 登录并选择工作区 |

一个账户可以关联不止一次——两个邮箱、两份日历、两家店铺——每一个都是单独的一行。

## 你自己的 MCP 服务器

**自定义 MCP** 在页面最下方的 **自定义连接器** 下，可以连接任何支持 Model Context Protocol 的东西。选择 **添加服务器**，给它一个名字、它的地址，如果服务器需要令牌，又没有可走的登录流程，就通过 **改用访问令牌** 提供。Æven 会在保存前检查服务器；连不上的服务器会说明这一点，你可以移除它再重新添加。

对于没有专属连接器的服务，只要它提供 MCP 服务器，这也是连接它的路。

## 每个连接器带来什么

| 连接器 | Æven 可以 |
| --- | --- |
| Gmail | 发送邮件和管理标签。要读取邮件，请再把 Gmail 添加为邮箱账户 |
| Google Drive | 创建和编辑 Docs、Sheets、Slides 和 Forms，并管理你用 Æven 打开的文件 |
| Google Calendar | 查看空闲时间并管理事件 |
| Google 任务 | 阅读、添加和完成 Google 任务列表里的任务 |
| Google 通讯录 | 搜索、阅读和更新 Google 通讯录里的联系人 |
| Google Meet | 创建 Meet 会议链接，并读取你会议的会议记录 |
| BigQuery | 在你的 Google Cloud 项目里浏览数据集和表，并运行 SQL 查询 |
| Compute Engine | 查看和管理你 Google Cloud 项目里的虚拟机、磁盘和实例组 |
| Microsoft 365 | 一次登录，做到下面五个 Microsoft 连接器能做的一切 |
| Outlook | 读取、搜索、起草、整理和发送邮件 |
| Outlook Calendar | 管理日历、事件和邀请 |
| OneDrive | 查找、上传、整理和共享文件 |
| SharePoint | 使用站点库和列表 |
| Teams | 读取和发送聊天与频道消息 |
| GitHub | 处理代码仓库、issue 和 pull request |
| Slack | 查找消息、文件、频道和人员；发布、定时发送和添加表情回应 |
| Notion | 搜索、阅读、创建和更新页面、数据库与评论 |
| Calendly | 查看已安排的会议和活动类型、分享预约链接，并预约或取消会议 |
| Jira 与 Confluence | 搜索、阅读、创建和更新 Jira 问题与 Confluence 页面 |
| Monday | 阅读和更新看板、条目与动态 |
| Vercel | 查看项目、部署、构建日志和域名 |
| Cloudflare | 查看和管理你的 Cloudflare 账户、域名区域、DNS 和 Workers |
| AWS | 查阅 AWS 文档，并操作你 AWS 账户里的资源 |
| Supabase | 查询数据库、运行迁移，并管理项目、边缘函数和存储 |
| Azure DevOps | 在你的组织里处理代码仓库、pull request、工作项、流水线和 Wiki |
| Oracle Cloud | 通过你租户的托管 MCP 服务器查询 Autonomous AI Database |
| Stripe | 查询客户、付款、发票和订阅，并创建或修改它们 |
| Salesforce | 在你的组织里搜索、阅读、创建和更新记录 |
| Shopify | 管理商品、库存、订单、客户和折扣 |
| Discord | 读取服务器和频道；发布、回复、添加表情回应、上传、开启话题 |
| Telegram | 读取、搜索和发送消息、媒体、投票和群组变更 |
| WhatsApp | 读取、搜索和发送消息、媒体和群组变更 |
| 邮箱账户 | 读取、搜索、整理和发送你添加的账户里的邮件 |
| 自定义 MCP | 该服务器的工具能做的任何事 |

已连接的账户也是 [机器人](../automation/automations.md) 使用的账户，其中一些还能唤醒机器人：邮箱账户里的新邮件、Google Calendar、Outlook Calendar 或 Microsoft 365 里的日历事件，或者 GitHub 上的动态。

## 什么会先问你

读取账户会自行进行。任何会改变东西的操作——发送、编辑、删除、转发、添加表情回应、置顶、静音、定时发送、标记为已读，以及任何群组和频道变更——都会先问你。在 Discord 上，每一次管理和审核调用都会单独询问，并说明它究竟要改什么。

对于 Notion、Calendly、Jira 与 Confluence、Monday、Vercel、Cloudflare、AWS、Supabase、BigQuery、Compute Engine、Azure DevOps、Oracle Cloud、Stripe、Salesforce 和 Shopify，Æven 以服务自己标注为只读的调用为准：这些调用自行进行，其他所有调用都会先问你。

**本会话允许** 覆盖的是那个账户和那种操作，所以一批类似的改动只问一次，而不是四十次。机器人自己的连接器是例外：确认机器人时你已经批准了它们，所以它的运行会直接在这些连接器上行动，不再询问。[Æven 会先问什么](../using/approvals.md)

## 连接器停止工作时

| 你看到的 | 该做什么 |
| --- | --- |
| 登录已过期 | 重新打开这个连接器并登录——那一行会说明它需要什么 |
| 无法访问 | 服务器下线了，或者地址变了。移除它再重新添加 |
| 在服务商处被撤销了访问权 | 重新关联该账户，在这里，或者在服务商自己的安全页面上 |
| 管理员批准 | 你的组织需要先批准 Æven 才能连接。批准之后，重新登录 |

[解决问题](../help/troubleshooting.md) 涵盖其余的情况。

## 移除访问权

打开这个连接器，选择账户，然后断开它。服务商允许 Æven 撤销的，Æven 会撤销，不再保留任何访问权；下一个需要这项服务的任务必须重新询问。在服务商的安全页面上撤销，效果相同，之后那一行会显示该账户需要重新关联。

## 什么会离开你的电脑

连接器的内容是别人的数据：消息文本、文件名、成员列表、记录和日历都会到达作答的模型，和你附上的文件一样。[隐私政策](../legal/privacy.md) 说明了这意味着什么。
