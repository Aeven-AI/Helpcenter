---
title: Conectores
description: Da a Æven acceso a tu correo, calendario, archivos, repositorios, chats y herramientas de negocio — un clic para la mayoría de los servicios, un formulario corto o una cuenta vinculada para el resto.
---

# Conectores

Un conector es el acceso a una cuenta que ya tienes: un buzón, un calendario, un disco, un repositorio, un chat de equipo, un espacio de trabajo, una tienda. Una vez conectado, se convierte en algo que Æven puede usar dentro de una tarea — «resume el correo de hoy», «qué tengo mañana en el calendario», «abre un pull request para esto», «añade estas notas a la página del T3 en Notion».

Los conectores están en **Settings → Connectors**. La página que está a su lado, [Skills](../using/skills.md), reúne los procedimientos que los usan.

## Conectar una cuenta

1. Abre **Settings → Connectors**.
2. Elige el servicio y pulsa **Iniciar sesión**.
3. Aprueba el acceso que pide en la ventana que se abre.
4. De vuelta en Æven, la fila muestra la cuenta a la que está vinculado y aparece como **On**.

El inicio de sesión con un clic funciona con:

- **Google** — Gmail, Google Drive, Google Calendar
- **Microsoft** — Microsoft 365, Outlook, Outlook Calendar, OneDrive, SharePoint, Teams
- **Herramientas de trabajo** — GitHub, Slack, Notion, Vercel, Jira y Confluence (Atlassian), monday.com, Stripe

**Microsoft 365** es un solo inicio de sesión para correo, calendario, OneDrive, SharePoint y Teams a la vez. Tanto él como SharePoint y Teams necesitan una cuenta profesional o educativa: una cuenta personal de Microsoft no los vincula. Si tu organización tiene que aprobar Æven primero, la fila lo dice y enlaza a la página de aprobación para tu administrador.

## Cuentas que se conectan de otra forma

| Servicio | Cómo se vincula |
| --- | --- |
| Cuentas de correo | Tu dirección y los datos del servidor para recibir (IMAP o POP3) y, opcionalmente, para enviar (SMTP) — para cualquier buzón, y la forma de que Æven lea Gmail |
| Salesforce | Primero, tu administrador de Salesforce configura una app para Æven y activa el servidor MCP de Salesforce; la fila indica exactamente qué necesita. Después escribe el **Mi dominio** de tu organización y la **Clave de consumidor** de la app, y elige **Conectar una organización** |
| Shopify | Escribe la dirección myshopify.com de tu tienda y elige **Conectar una tienda**; Shopify te pedirá instalar la app de Æven en esa tienda. **Conectar otra tienda** añade la siguiente |
| WhatsApp | Vincula un número de teléfono; la fila muestra el número una vez vinculado |
| Telegram | Tu número de teléfono, el código que te envía Telegram y tu contraseña de dos pasos si la tienes configurada |
| Discord | Añade un servidor; el bot de Æven se une a los servidores que elijas y responde allí |
| Slack | Inicia sesión y elige el espacio de trabajo |

Una cuenta se puede vincular más de una vez — dos buzones, dos calendarios, dos tiendas — y cada una tiene su propia fila.

## Tu propio servidor MCP

**MCP personalizado** conecta cualquier cosa que hable el Model Context Protocol. Dale un nombre, su dirección y, si el servidor lo necesita, un token mediante **Usar un token de acceso en su lugar** cuando no haya un flujo de inicio de sesión que seguir. Æven comprueba el servidor antes de guardarlo; si no puede llegar a él, lo dice, y puedes quitarlo y volver a añadirlo.

Esta es también la vía hacia un servicio sin conector propio, siempre que ese servicio publique un servidor MCP.

## Qué añade cada conector

| Conector | Æven puede |
| --- | --- |
| Gmail | Enviar correo y gestionar etiquetas. Para leer tu correo, añade Gmail también como cuenta de correo |
| Google Drive | Crear y editar Docs, Sheets, Slides y Forms, y gestionar los archivos que abres con Æven |
| Google Calendar | Consultar la disponibilidad y gestionar eventos |
| Microsoft 365 | Todo lo que hacen los cinco conectores de Microsoft de abajo, con un solo inicio de sesión |
| Outlook | Leer, buscar, redactar, organizar y enviar correo |
| Outlook Calendar | Gestionar calendarios, eventos e invitaciones |
| OneDrive | Buscar, subir, organizar y compartir archivos |
| SharePoint | Trabajar con bibliotecas y listas de sitios |
| Teams | Leer y enviar chats y mensajes de canales |
| GitHub | Trabajar con repositorios, issues y pull requests |
| Slack | Buscar mensajes, archivos, canales y personas; publicar, programar y reaccionar |
| Notion | Buscar, leer, crear y actualizar páginas, bases de datos y comentarios |
| Vercel | Consultar proyectos, despliegues, registros de compilación y dominios |
| Jira y Confluence | Buscar, leer, crear y actualizar issues de Jira y páginas de Confluence |
| monday.com | Leer y actualizar tableros, elementos y actualizaciones |
| Stripe | Consultar clientes, pagos, facturas y suscripciones, y crearlos o modificarlos |
| Salesforce | Buscar, leer, crear y actualizar registros en tu organización |
| Shopify | Gestionar productos, inventario, pedidos, clientes y descuentos |
| Discord | Leer servidores y canales; publicar, responder, reaccionar, subir archivos y abrir hilos |
| Telegram | Leer, buscar y enviar mensajes, archivos multimedia, encuestas y cambios de grupo |
| WhatsApp | Leer, buscar y enviar mensajes, archivos multimedia y cambios de grupo |
| Cuentas de correo | Leer, buscar, organizar y enviar el correo de las cuentas que añades |
| MCP personalizado | Lo que hagan las herramientas de ese servidor |

Las cuentas conectadas son también las que usan los [bots](../automation/automations.md), y algunas pueden activar uno: correo nuevo en una cuenta de correo, un evento en Google Calendar, Outlook Calendar o Microsoft 365, o actividad en GitHub.

## Qué pregunta antes de actuar

Leer una cuenta funciona por su cuenta. Todo lo que cambia algo — enviar, editar, borrar, reenviar, reaccionar, fijar, silenciar, programar, marcar como leído o cualquier cambio de grupo y de canal — te pregunta antes. En Discord, cada llamada de administración y moderación pregunta por separado y nombra exactamente qué va a cambiar.

Con Notion, Vercel, Jira y Confluence, monday.com, Stripe, Salesforce y Shopify, Æven se guía por lo que el propio servicio marca como lectura: esas llamadas funcionan por su cuenta y todas las demás preguntan.

Permitir para la tarea cubre esa cuenta y esa operación, así que un lote de cambios parecidos pregunta una vez en lugar de cuarenta. Los conectores propios de un bot son la excepción: al confirmar el bot los aprobaste, así que sus ejecuciones actúan con ellos sin preguntar. [Lo que Æven pregunta antes de actuar](../using/approvals.md)

## Cuando un conector deja de funcionar

| Qué ves | Qué hacer |
| --- | --- |
| Sign-in expired | Vuelve a activar el conector e inicia sesión — la fila dice qué necesita |
| Not reachable | El servidor está caído o la dirección ha cambiado. Quítalo y vuelve a añadirlo |
| Access revoked at the provider | Vincula la cuenta otra vez, aquí o desde la página de seguridad del propio proveedor |
| Aprobación del administrador | Tu organización tiene que aprobar Æven antes de que puedas conectarte. Tras la aprobación, vuelve a iniciar sesión |

[Solucionar un problema](../help/troubleshooting.md) cubre el resto.

## Quitar el acceso

Abre el conector, elige la cuenta y desconéctala. Æven revoca lo que el proveedor le permite revocar y no conserva más acceso; la siguiente tarea que necesite ese servicio tendrá que pedirlo de nuevo. Revocar desde la página de seguridad del proveedor tiene el mismo efecto, y la fila muestra entonces que la cuenta necesita vincularse otra vez.

## Qué sale de tu computadora

El contenido de los conectores son datos de otras personas: el texto de los mensajes, los nombres de archivos, las listas de miembros, los registros y los calendarios llegan al modelo que responde, igual que un archivo que adjuntas. La [Política de privacidad](../legal/privacy.md) explica qué significa eso.
