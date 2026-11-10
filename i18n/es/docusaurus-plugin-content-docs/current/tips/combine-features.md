---
title: Combina funciones
description: "La verdadera fuerza de Aeven es encadenar: un correo convertido en película y luego en un chat de equipo, una pantalla del teléfono convertida en un informe de error. Peticiones listas para usar que combinan varias funciones de una vez."
---

# Combina funciones

Cada función por separado te ahorra unos minutos. Encadenadas, sustituyen una tarde. No hace falta dividir el trabajo en pasos: describe el trabajo completo en un mensaje y Aeven lee, crea, comprueba y entrega en orden. Se detiene a preguntarte antes de que algo salga en tu nombre.

Cada ejemplo es una petición que puedes pegar y adaptar. Las flechas indican qué funciones encadena.

## Una película a partir del correo de un cliente, compartida con el equipo

> Lee el último correo de Northwind sobre su campaña de primavera. Haz una película Motion de 30 segundos que presente los tres puntos clave, con su logo del adjunto. Luego publica el MP4 en #marketing en Slack y en nuestro grupo de equipo de Telegram con un resumen de dos líneas.

**Correo → adjuntos → Motion → Slack y Telegram.** Aeven encuentra el correo, toma el logo, escribe y reproduce la película en la conversación, genera el MP4 y redacta las dos publicaciones. Ves cada publicación antes de que se envíe. Mira primero la película y pide cambios —"más corta", "cifras más grandes", "subtítulos en neerlandés"— antes de dar el visto bueno.

## Prepara las reuniones de mañana

> Mira mi calendario de mañana. Para cada reunión con alguien de fuera de la empresa, reúne el último hilo de correo con esa persona y lo que recuerdes de ella, y escribe un resumen de una página por reunión en un documento de Google.

**Calendario → correo → memoria → Docs.** La memoria es lo que hace bueno este resultado: aporta el contexto de conversaciones anteriores —quién decidió qué, qué le importa, un cumpleaños que se acerca.

## Un error en el teléfono, informado con pruebas

> Abre nuestra app en el simulador de iPhone, regístrate con una dirección de prueba y ve a Ajustes. Si falla la subida del avatar, haz capturas de cada paso y abre una incidencia en el repositorio de GitHub de la app con los pasos y las capturas.

**Teléfonos y simuladores → capturas → GitHub.** Funciona igual con un emulador de Android.

## De la investigación a la presentación

> Investiga a los cinco mayores competidores de nuestro producto: precios, posicionamiento, últimos lanzamientos. Pon los hallazgos en una hoja de cálculo con fuentes, grafica la comparación de precios y crea una presentación de diez diapositivas. Redacta un correo a Sam con la presentación adjunta.

**Búsqueda web → ayudantes en paralelo → hoja de cálculo y gráfico → diapositivas → borrador de correo.** Para una investigación grande, Aeven la reparte entre varios ayudantes que trabajan a la vez; la [lista de tareas](../using/background-jobs.md) los muestra.

## A través de una web que solo tú puedes abrir

> En mi propio Chrome, entra en el portal del proveedor, descarga todas las facturas de octubre, guárdalas en la carpeta Facturas y haz una hoja de cálculo con fecha, número e importe.

**Tu navegador → archivos → hoja de cálculo.** La extensión trabaja en tu navegador con tus sesiones, así que Aeven llega a sitios que no tienen conector. Pregunta antes de enviar un formulario o confirmar algo.

## Un programa sin conector

> Abre mi programa de contabilidad, exporta en PDF la cuenta de resultados del tercer trimestre, resume los tres cambios más grandes respecto al segundo y redacta un mensaje para mi contable por WhatsApp.

**Control del equipo → lectura de PDF → análisis → WhatsApp.** El control del equipo maneja cualquier aplicación de tu computadora a través de sus ventanas: el camino para programas de escritorio sin conector ni web.

## Ponte al día con un grupo muy activo

> Resume lo que pasó esta semana en el grupo de WhatsApp de la familia, enumera lo que alguien me preguntó directamente y redacta respuestas breves que pueda enviar.

**WhatsApp o Telegram → resumen → borradores.** No se envía nada hasta que apruebas cada respuesta.

## Escríbelo y haz que suene a ti

> Redacta una respuesta a la queja de Anna por el retraso en la entrega: discúlpate, explica el retraso del transportista y ofrece envío gratis en el próximo pedido. Luego pásalo por el humanizer para que suene a mí y guárdalo como borrador en Gmail.

**Correo → redacción → skill humanizer → borrador.** El [humanizer](./skill-catalog.md) quita los rasgos que hacen que un texto suene escrito por una máquina, sin cambiar lo que dice.

## Averigua cómo funciona algo

> En esta carpeta hay una app de Electron que instalé. Averigua qué envía a sus servidores y dónde guarda mis datos. Escríbelo en un informe breve.

**Archivos → skill de ingeniería inversa → informe.** Las skills de ingeniería inversa leen el propio software publicado —paquetes de aplicaciones, binarios, bases de datos, capturas de red— cuando no hay código fuente que leer.

## Haz que funcione solo

Cualquiera de estas peticiones puede convertirse en un bot: cuando una ejecución salga bien, di *"convierte esto en un bot que se ejecute cada lunes a las 8"*. Aeven convierte la conversación en una tarea programada, te muestra lo que hará y qué cuentas puede usar, y espera tu sí. [Bots que vale la pena configurar](./useful-bots.md)

## Consejos para que las cadenas funcionen

- **Di adónde va el resultado.** "Guárdalo en la carpeta Informes", "publícalo en #team", "como documento de Google"; si no, el resultado se queda en la conversación.
- **Nombra las cuentas cuando tengas varias.** "Desde mi Gmail del trabajo", "en el Slack de Acme".
- **Pide un paso de revisión.** "Enséñame la película antes de publicarla" o "enumera las facturas antes de crear la hoja" pone una pausa justo donde la quieres.
- **Corrige sobre la marcha.** Una cadena sigue siendo una conversación: cambia un eslabón —"usa el segundo logo", "sáltate Telegram"— y Aeven rehace solo lo que depende de él.
- **Conserva lo que funcionó.** "Recuerda que Northwind quiere subtítulos en neerlandés" lo guarda para la próxima vez, y Aeven aprende por sí mismo los procedimientos que salieron bien.

## Relacionado

- [Todo lo que Aeven puede hacer](./everything-aeven-can-do.md)
- [Conectores](../connections/connected-apps.md)
- [Qué te pregunta Aeven primero](../using/approvals.md)
