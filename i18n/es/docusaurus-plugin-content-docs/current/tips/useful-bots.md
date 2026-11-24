---
title: Bots que vale la pena configurar
description: Bots que se ganan su sitio —resumen de la mañana, preparación de reuniones, orden en la bandeja de entrada, informes semanales, anuncios de releases, vigilantes, equipos de bots— con la petición para crear cada uno y cómo hacer más útil cualquier bot.
---

# Bots que vale la pena configurar

Un bot es una petición que se vuelve a ejecutar sola. Los buenos sustituyen algo que ya haces cada semana, dejan el resultado donde lo vas a ver y se quedan callados cuando no hay nada que decir. Cada ejemplo es lo que escribes en el compositor de la página **Bots**; Æven pregunta lo que le falta, muestra la tarea, qué lo activa, sus conectores y permisos, y no guarda nada hasta que confirmas. [Bots](../automation/automations.md)

**Se ejecuta en** indica dónde vive cada uno. Los bots que solo necesitan la web y tus cuentas conectadas se ejecutan en **Æven Cloud** y siguen funcionando con tu computadora apagada. Los que necesitan tus archivos, tu navegador o tus aplicaciones se ejecutan en **tu computadora** mientras Æven está abierto allí.

## Empezar el día

**Resumen de la mañana** — Æven Cloud

> Cada día laborable a las 7:30, resúmeme las reuniones de hoy, los correos que necesitan respuesta mía y lo que vence esta semana. Menos de diez líneas, enviado por Telegram.

**Preparar reuniones** — Æven Cloud

> Treinta minutos antes de cada reunión con un invitado externo, averigua quién viene, de qué hablamos con ellos por última vez por correo y qué hay de nuevo sobre su empresa. Mándame cinco puntos por Slack.

Este se activa con tu calendario en lugar de con un reloj, así que sigue a las reuniones que cambian de hora.

**Cumpleaños y fechas** — Æven Cloud

> Cada lunes a las 8, enumera los cumpleaños, aniversarios y plazos de las próximas dos semanas según lo que sabes de las personas de mi vida y mi trabajo. No envíes nada si no hay ninguno.

## Mantén a raya la bandeja de entrada

**Clasificación** — Æven Cloud

> Cada vez que llegue correo nuevo a mi buzón del trabajo, etiqueta boletines y recibos, marca con estrella lo que venga de un cliente y redacta respuestas a los que pueda contestar en dos frases. Nunca envíes.

Solo se activa cuando llega correo, así que un día tranquilo no cuesta nada.

**Facturas en una sola hoja** — Æven Cloud

> El primer día de cada mes, busca en Gmail las facturas y recibos del mes anterior, guarda los adjuntos en la carpeta Finanzas de Google Drive y añade fecha, proveedor e importe a la hoja Gastos.

## Organiza la semana

**Informe del viernes** — Æven Cloud

> Cada viernes a las 16:00, reúne lo que fusionamos y cerramos en GitHub esta semana, más las decisiones de #product en Slack, y escribe una actualización semanal de una página como documento de Google. Publica el enlace en #team.

**Resumen del equipo** — Æven Cloud

> Cada tarde a las 18:00, resume los hilos más activos de #support y #sales en Slack: qué se preguntó, qué sigue abierto, quién espera a quién. Envíamelo como mensaje directo.

**Plan del lunes** — Æven Cloud

> Cada lunes a las 7:00, mira el calendario de esta semana y mis tareas abiertas, señala los días demasiado cargados y sugiere qué reuniones podrían moverse. Envíamelo por Slack.

## Vigila los cambios

**Vigilante de precios o páginas** — Æven Cloud

> Cada mañana a las 9, mira la página del Sony WH-1000XM6 en nuestras tres tiendas habituales. Avísame por Telegram solo si un precio baja de 300 €.

**Noticias de la competencia** — Æven Cloud

> Cada miércoles, busca noticias, lanzamientos y cambios de precio de nuestros cuatro competidores desde la semana pasada. Tres puntos por competidor, con las fuentes enlazadas, enviado por correo.

**Un portal con tu sesión iniciada** — tu computadora

> Cada lunes, en mi propio Chrome, abre el portal del proveedor y descarga las facturas nuevas a la carpeta Facturas.

Este necesita tu navegador, así que se ejecuta en tu computadora mientras Æven está abierto allí.

## Cuida tus archivos

**Limpieza de Descargas** — tu computadora

> Cada domingo por la noche, ordena mi carpeta Descargas: mueve documentos, imágenes e instaladores a subcarpetas por tipo y mes, y enumera lo que pese más de 1 GB sin borrarlo.

**Comprobación de la copia de seguridad** — tu computadora

> Cada noche a las 23:00, comprueba que la carpeta Proyectos se copió hoy al disco de respaldo y avísame solo si no fue así.

## Activado por algo que pasa

**Anuncio de releases** — Æven Cloud

> Cuando se publique una release en el repositorio de nuestra app en GitHub, escribe un anuncio breve a partir de sus notas y publícalo en nuestro canal #announcements de Discord y en nuestro canal de Telegram.

La página del bot muestra después la payload URL y el secreto que hay que añadir como webhook en la configuración del repositorio. «Cuando se publique una release» importa: sin eso, el bot también se activa con cada borrador y cada edición antes de la publicación.

**Nuevo contacto** — Æven Cloud

> Cuando el formulario de la web envíe un nuevo contacto, investiga la empresa, comprueba si ya les hemos escrito y publica en #sales un perfil breve con un primer mensaje sugerido.

Un bot con un **disparador externo** tiene una dirección privada y una clave; cualquier cosa que publique en ella inicia una ejecución. Úsalo para formularios, alertas de monitorización u otro servicio que deba pasarle trabajo a Æven.

## Un equipo de bots

**Investigar, redactar, revisar** — Æven Cloud

> Crea un tablero: un bot investigador que reúna cada jueves las noticias de la semana sobre nuestro mercado, un bot redactor que las convierta en un borrador de newsletter en Notion y un bot revisor que compruebe el borrador con nuestra guía de estilo y se lo devuelva al redactor si necesita cambios. Mantén el tablero por debajo de 200.000 tokens al día.

Cada bot conserva sus propios conectores y permisos, solo pasa trabajo a los bots con los que lo conectaste, y la tarjeta del tablero muestra la última cadena. [Tableros](../automation/automations.md#boards)

## Cómo hacer más útil cualquier bot

- **Di cómo es "terminado".** "Menos de diez líneas", "una página", "tres puntos por competidor": un bot sin formato escribe ensayos.
- **Di adónde va el resultado.** Un mensaje para ti por Telegram o Slack, un documento de Google, un archivo en una carpeta, un canal. Un resultado que solo queda en la conversación de la ejecución es fácil de pasar por alto.
- **Di qué hacer cuando no hay nada nuevo.** "No envíes nada si no hay ninguno" evita que un bot se convierta en ruido; la ejecución se archiva como **Nada nuevo**, y varias seguidas se agrupan en una fila.
- **Di cuándo parar.** "Para cuando se haya entregado el paquete" permite que un bot se pause solo cuando termina su trabajo.
- **Actívalo con el evento, no con el reloj.** "Cuando llegue correo nuevo", "treinta minutos antes de cada reunión" o "cuando se publique una release" se ejecuta justo cuando hay algo que hacer, en lugar de comprobar cada hora.
- **Dale solo los conectores y permisos que necesita.** Un bot actúa con sus propios conectores sin preguntar y nunca pregunta en mitad de la noche, así que léelos y no solo la tarea. Vale la pena escribir "nunca envíes", "solo borradores" y "no borres" en la petición.
- **Pruébalo una vez con Ejecutar ahora** antes de fiarte del horario, y luego escribe cualquier cambio en **Cambia este bot…** en la página del bot.
- **Revisa Se ejecuta en.** Un bot que necesita tus archivos o tu navegador solo se ejecuta mientras Æven está abierto en tu computadora; deja activado **Ejecutar en segundo plano**. Para moverlo, abre el bot y elige **Elegir dónde se ejecuta**.
- **Empieza por las ideas.** La página **Bots** tiene ideas agrupadas en Para tu función, Empezar el día, Planificar la semana, Mantente al día, Trabajo y dinero y Vida diaria, e **Ideas para ti** sugiere bots a partir de lo que Æven ya sabe de ti.

## Relacionado

- [Bots](../automation/automations.md)
- [Combina funciones](./combine-features.md)
- [Conectores](../connections/connected-apps.md)
