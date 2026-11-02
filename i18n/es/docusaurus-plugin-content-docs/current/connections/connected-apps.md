---
title: Conectores
description: Da a Aeven acceso a tu correo, calendario, archivos, repositorios y chats — un clic para los grandes proveedores, un token o una cuenta vinculada para el resto.
---

# Conectores

Un conector es el acceso a una cuenta que ya tienes: un buzón, un calendario, un disco, un repositorio, un chat de equipo. Una vez conectado, se convierte en algo que Aeven puede usar dentro de una tarea — «resume el correo de hoy», «qué tengo mañana en el calendario», «abre un pull request para esto».

Los conectores están en **Settings → Connectors**. La página que está a su lado, [Skills](../using/skills.md), reúne los procedimientos que los usan.

## Conectar una cuenta

1. Abre **Settings → Connectors**.
2. Elige el servicio y pulsa **Sign in**.
3. Aprueba el acceso que pide en la ventana que se abre.
4. De vuelta en Aeven, la fila muestra la cuenta a la que está vinculado y aparece como **On**.

El inicio de sesión con un clic funciona con Gmail, Google Drive, Google Calendar, Outlook, Outlook Calendar, OneDrive, SharePoint, Teams, GitHub y Slack. SharePoint y Teams son cuentas de trabajo: una cuenta personal de Microsoft no las vincula.

## Cuentas que se conectan de otra forma

| Servicio | Cómo se vincula |
| --- | --- |
| Email accounts | Tu dirección y los datos del servidor para recibir (IMAP o POP3) y, opcionalmente, para enviar (SMTP) — para un buzón que no tiene conector de un clic |
| WhatsApp | Vincula un número de teléfono; la fila muestra el número una vez vinculado |
| Telegram | Tu número de teléfono, el código que te envía Telegram y tu contraseña de dos pasos si la tienes configurada |
| Discord | Añade un servidor; el bot de Aeven se une a los servidores que elijas y responde allí |
| Slack | Inicia sesión y elige el espacio de trabajo |

Una cuenta se puede vincular más de una vez — dos buzones, dos calendarios — y cada una tiene su propia fila.

## Tu propio servidor MCP

**Custom MCP** conecta cualquier cosa que hable el Model Context Protocol. Dale un nombre, su dirección y, si el servidor lo necesita, un token mediante **Use an access token instead** cuando no haya un flujo de inicio de sesión que seguir. Aeven comprueba el servidor antes de guardarlo; si no puede llegar a él, lo dice, y puedes quitarlo y volver a añadirlo.

Esta es también la vía hacia un servicio del catálogo que aún no tiene inicio de sesión con un clic.

## El catálogo

El **Catalog** reúne servicios muy usados a los que Aeven puede llegar — Canva, Notion, Slack, Figma, Linear, Jira y Confluence, Dropbox, Box, Asana, HubSpot, Salesforce, Stripe. Una entrada del catálogo no es una conexión: te dice que el servicio funciona y cómo conectarlo, normalmente mediante un servidor MCP propio con un token de ese proveedor. Algunos tienen sus propias salvedades — puede que Figma necesite que el proveedor apruebe un cliente nuevo, el endpoint predefinido de Linear es de solo lectura y Stripe pide una clave de Agent API.

## Qué añade cada conector

| Conector | Aeven puede |
| --- | --- |
| Gmail | Leer, buscar, redactar y organizar el correo, y enviarlo |
| Google Drive | Buscar y gestionar archivos, Docs, Sheets, Slides, Forms y comentarios |
| Google Calendar | Consultar la disponibilidad y gestionar eventos |
| Outlook | Leer, buscar, redactar, organizar y enviar correo |
| Outlook Calendar | Gestionar calendarios, eventos e invitaciones |
| OneDrive | Buscar, subir, organizar y compartir archivos |
| SharePoint | Trabajar con bibliotecas y listas de sitios |
| Teams | Leer y enviar chats y mensajes de canales |
| GitHub | Trabajar con repositorios, issues y pull requests |
| Slack | Buscar mensajes, archivos, canales y personas; publicar, programar y reaccionar |
| Discord | Leer servidores y canales; publicar, responder, reaccionar, subir archivos y abrir hilos |
| Telegram | Leer, buscar y enviar mensajes, archivos multimedia, encuestas y cambios de grupo |
| WhatsApp | Leer, buscar y enviar mensajes, archivos multimedia y cambios de grupo |
| Email accounts | Leer y buscar el correo de las cuentas que añades |
| Custom MCP | Lo que hagan las herramientas de ese servidor |

## Qué pregunta antes de actuar

Leer una cuenta funciona por su cuenta. Todo lo que cambia algo — enviar, editar, borrar, reenviar, reaccionar, fijar, silenciar, programar, marcar como leído o cualquier cambio de grupo y de canal — te pregunta antes. En Discord, cada llamada de administración y moderación pregunta por separado y nombra exactamente qué va a cambiar.

Permitir para la tarea cubre esa cuenta y esa operación, así que un lote de cambios parecidos pregunta una vez en lugar de cuarenta. [Lo que Aeven pregunta antes de actuar](../using/approvals.md)

## Cuando un conector deja de funcionar

| Qué ves | Qué hacer |
| --- | --- |
| Sign-in expired | Vuelve a activar el conector e inicia sesión — la fila dice qué necesita |
| Not reachable | El servidor está caído o la dirección ha cambiado. Quítalo y vuelve a añadirlo |
| Access revoked at the provider | Vincula la cuenta otra vez, aquí o desde la página de seguridad del propio proveedor |

[Solucionar un problema](../help/troubleshooting.md) cubre el resto.

## Quitar el acceso

Abre el conector, elige la cuenta y desconéctala. Aeven revoca lo que el proveedor le permite revocar y no conserva más acceso; la siguiente tarea que necesite ese servicio tendrá que pedirlo de nuevo. Revocar desde la página de seguridad del proveedor tiene el mismo efecto, y la fila muestra entonces que la cuenta necesita vincularse otra vez.

## Qué sale de tu computadora

El contenido de los conectores son datos de otras personas: el texto de los mensajes, los nombres de archivos, las listas de miembros y los calendarios llegan al modelo que responde, igual que un archivo que adjuntas. La [Política de privacidad](../legal/privacy.md) explica qué significa eso.
