---
title: Skills
description: "Procedimientos que Aeven sigue igual cada vez: qué viene incluido, cómo importar los tuyos y quién puede iniciar una."
---

# Skills

Una skill es un procedimiento escrito: los pasos de una tarea que haces a menudo, con las instrucciones y los archivos que necesita. Se la enseñas a Aeven una vez y la próxima vez se ejecuta igual, en lugar de que vuelvas a explicar el formato, el orden y las excepciones.

Una skill es cómo hacer algo. Un [bot](../automation/automations.md) es cuando eso se ejecuta por su cuenta. Una skill que usa una cuenta necesita esa cuenta [conectada](../connections/connected-apps.md).

## Dónde están

**Settings → Skills** tiene dos vistas: **Skills**, las que tienes, y **Catalog**, las que vienen con Aeven. Escribe `/` en el cuadro de mensaje para ver qué puedes iniciar por su nombre.

Las skills integradas vienen con Aeven y están siempre disponibles. A propósito no aparecen en tu lista, porque no hay nada que desactivar.

## Skills que vienen con un conector

La mayoría de los conectores traen sus propias skills: la de Gmail sabe buscar y redactar correo, la de Drive sabe de Docs, Sheets, Slides y comentarios, la de GitHub sabe de repositorios, issues y pull requests, y los conectores de chat conocen sus propias herramientas. Aparecen dentro de los detalles del conector, se activan con el conector y no se pueden habilitar por separado: si desconectas el conector, desaparecen. Un conector que expone sus herramientas directamente, sin procedimientos incluidos, lo indica en su página.

El catálogo también incluye skills escritas para trabajo general. Búscalas, mira con qué frecuencia está instalada una y activa las que quieras; una skill del catálogo que activas se suma a tu biblioteca.

## Importar las tuyas

**Settings → Skills → Import skill** acepta:

- una URL de GitHub, un paquete npm o la forma abreviada `owner/repository` — Aeven descarga el archivo y importa todas las skills que contiene;
- un archivo: un `SKILL.md`, un paquete `.skill` o un ZIP con exactamente una skill dentro.

Importa solo skills en las que confíes. Una skill son instrucciones que Aeven seguirá con tus herramientas y tus archivos, y por eso la aplicación te pide confirmar qué estás incorporando.

Después de una importación, el resultado te dice qué ha llegado:

| Lo que dice | Lo que pasó |
| --- | --- |
| Added | Hay una nueva skill en tu biblioteca |
| Kept built in | Aeven ya responde a ese nombre con una skill propia o una anterior; la importación no la reemplazó |
| Some referenced files were not in the repository | La skill llegó sin archivos que menciona; aun así funciona con lo que vino |

## Skills instaladas por otro agente

Si Claude Code o Codex están instalados en este equipo, **Settings → Skills** muestra las skills que encuentra allí, agrupadas por agente. Si activas una, se copia a tu biblioteca; si la desactivas, se quita tu copia y la carpeta del otro agente queda como está. Una skill solo aparece cuando activarla realmente puede instalarla.

## Quién puede iniciar una skill

| Iniciada por | Cuándo |
| --- | --- |
| Tú, escribiendo `/name` | Siempre, para todas las skills de tu biblioteca |
| El modelo, cuando reconoce la tarea | Solo mientras **Model can start this skill** esté activado en esa skill |

Una importación toma su primer valor del ajuste propio de la skill, así que una skill que pidió no iniciarse automáticamente sigue así. Desactivarlo es la elección correcta para algo costoso o para un procedimiento que quieres dirigir tú.

## Ver qué hay dentro

Abre una skill para ver su **Source**, los archivos de su paquete y sus referencias. Esa es la respuesta honesta a «¿qué hará esto en realidad?»: léela antes de activar algo que hayas encontrado en internet.

## Cuando una skill necesita un programa

Algunas skills dependen de software en tu equipo. La primera vez que usas una, Aeven instala lo que necesita y muestra el progreso; si falla, indica qué paso ha fallado y ofrece volver a intentarlo en la página de la skill. El resto de la conversación sigue mientras tanto.

## Quitar una

**Remove skill** elimina tu copia de una skill importada, y el cambio se aplica desde el siguiente mensaje. Las skills integradas no se pueden quitar, y las skills de un conector se van con el conector.

## Relacionado

- [Conectores](../connections/connected-apps.md)
- [Lo que Aeven pregunta antes de actuar](./approvals.md)
- [Bots](../automation/automations.md)
