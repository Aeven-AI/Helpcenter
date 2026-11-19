---
title: Instalar e iniciar sesión
description: Consigue la aplicación de escritorio de Æven, inicia sesión con una cuenta existente y entiende qué significa la primera pantalla.
---

# Instalar e iniciar sesión

Æven se ejecuta como aplicación de escritorio en macOS, Windows y Linux. La aplicación se abre directamente en una conversación; no hay una pantalla de configuración que recorrer.

## Instalar la aplicación

1. Descarga el instalador para tu computadora desde [aeven.io](https://aeven.io).
2. Abre el instalador y termínalo como terminas cualquier aplicación en tu sistema.
3. Inicia **Æven**. Se abre una ventana en la pantalla de conversación.

El primer arranque tarda unos segundos mientras Æven inicia su servicio local. Si la ventana parece vacía al principio, es que todavía está arrancando.

## O usa Æven Web {#o-usa-aeven-web}

Æven también funciona en un navegador en [chat.aeven.io](https://chat.aeven.io), sin instalar nada. Inicia sesión con la misma cuenta y tus conversaciones, tu memoria y tus ajustes están ahí. Es la entrada rápida, pero hace menos que la aplicación de escritorio; para el trabajo serio, instala la aplicación.

En Æven Web el asistente trabaja en nuestros servidores en lugar de en tu computadora: guarda los archivos en la carpeta de tu cuenta (hasta 5 GB), ejecuta comandos en un entorno aislado con acceso a internet y trabaja en tu propio navegador con la [extensión de Æven](../using/browser.md#en-tu-propio-navegador). No puede abrir carpetas, terminales ni programas de tu computadora; para eso usa la aplicación de escritorio. Mientras la aplicación de escritorio está abierta, una conversación en la web [se ejecuta en tu computadora](../using/desktop-from-web.md) y puede usarlos. La [Política de privacidad](../legal/privacy.md) explica qué guarda Æven Web.

| | Aplicación de escritorio | Æven Web |
| --- | --- | --- |
| Tus carpetas y archivos | Sí | Solo los archivos de la carpeta de tu cuenta |
| Comandos y terminal | En tu computadora | En un entorno aislado en nuestros servidores |
| Las pestañas de tu propio navegador | Sí, con la extensión | Sí, con la extensión |
| Navegador junto a la conversación | Sí | No |
| Aplicaciones de tu computadora, teléfonos y simuladores | Sí | No |
| Conectores, memoria, skills, imágenes, video y películas Motion | Sí | Sí |
| Bots | Todos | Los que no necesitan nada de tu computadora |

## Iniciar sesión

Elige **Sign in** y continúa con la cuenta que ya usas: Google, Apple o X. Æven abre una ventana aparte para ese proveedor y luego vuelve a la aplicación.

Tu sesión queda iniciada en esa computadora. Cerrar sesión desde el menú de la cuenta termina la sesión; el siguiente inicio de sesión vuelve a preguntar al proveedor.

## Qué significa la primera pantalla

![Una sesión nueva en Æven: la marca Æven, un saludo y el compositor en la parte inferior](/img/app/new-session.png)

*Una sesión nueva. El compositor es toda la primera pantalla: una caja, y Æven espera.*

| Parte de la pantalla | Para qué sirve |
| --- | --- |
| El área de conversación | Donde escribes lo que quieres y lees lo que hace Æven |
| El control de carpeta | En qué carpeta de tu computadora puede trabajar Æven |
| La barra lateral izquierda | Tus conversaciones anteriores y los archivos de la carpeta actual |
| La barra lateral derecha | El navegador, los archivos y la terminal que Æven abre mientras trabaja |
| El menú de la cuenta | Tu plan, tus créditos, los ajustes y el cierre de sesión |

El control de carpeta muestra en qué carpeta está trabajando Æven. [Elige una carpeta](../using/choose-a-folder.md) es el paso siguiente.

## Actualizaciones

Æven busca una versión nueva poco después de arrancar y cada 30 minutos a partir de ahí. Cuando hay una versión nueva lista, se descarga en segundo plano y se instala al salir. **Check for Updates…** en el menú de la aplicación informa de lo que encontró.

## Ejecución en segundo plano

**Settings → General → Run in the background** está activado de forma predeterminada. Cerrar la última ventana deja Æven en marcha, así que el trabajo en curso y los [bots](../automation/automations.md) siguen adelante. Sal desde el menú de la aplicación o con el icono de la barra de menús para detenerlo del todo.
