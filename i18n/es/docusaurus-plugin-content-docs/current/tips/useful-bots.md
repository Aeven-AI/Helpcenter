---
title: Bots que vale la pena configurar
description: Bots que se ganan su sitio —resumen de la mañana, orden en la bandeja de entrada, informes semanales, resúmenes del equipo, vigilantes— con la petición para crear cada uno y cómo hacer más útil cualquier bot.
---

# Bots que vale la pena configurar

Un bot es una petición que se vuelve a ejecutar sola. Los buenos sustituyen algo que ya haces cada semana, dejan el resultado donde lo vas a ver y se quedan callados cuando no hay nada que decir. Cada ejemplo es lo que escribes en **Bots → Nueva**; Aeven pregunta lo que le falta, muestra la tarea, el horario y los permisos, y no guarda nada hasta que confirmas. [Bots](../automation/automations.md)

**Se ejecuta en** indica dónde vive cada uno. Los bots que solo necesitan la web y tus cuentas conectadas se ejecutan en **Aeven Cloud** y siguen funcionando con tu computadora apagada. Los que necesitan tus archivos, tu navegador o tus aplicaciones se ejecutan en **tu computadora** mientras Aeven está abierto allí.

## Empezar el día

**Resumen de la mañana** — Aeven Cloud

> Cada día laborable a las 7:30, resúmeme las reuniones de hoy, los correos que necesitan respuesta mía y lo que vence esta semana. Menos de diez líneas, enviado por Telegram.

**Cumpleaños y fechas** — Aeven Cloud

> Cada lunes a las 8, enumera los cumpleaños, aniversarios y plazos de las próximas dos semanas según lo que sabes de las personas de mi vida y mi trabajo. No envíes nada si no hay ninguno.

## Mantén a raya la bandeja de entrada

**Clasificación** — Aeven Cloud

> Cada dos horas en días laborables, revisa el correo nuevo de mi Gmail del trabajo. Etiqueta boletines y recibos, marca con estrella lo que venga de un cliente y redacta respuestas a los que pueda contestar en dos frases. Nunca envíes.

**Facturas en una sola hoja** — Aeven Cloud

> El primer día de cada mes, busca en Gmail las facturas y recibos del mes anterior, guarda los adjuntos en la carpeta Finanzas de Google Drive y añade fecha, proveedor e importe a la hoja Gastos.

## Organiza la semana

**Informe del viernes** — Aeven Cloud

> Cada viernes a las 16:00, reúne lo que fusionamos y cerramos en GitHub esta semana, más las decisiones de #product en Slack, y escribe una actualización semanal de una página como documento de Google. Publica el enlace en #team.

**Resumen del equipo** — Aeven Cloud

> Cada tarde a las 18:00, resume los hilos más activos de #support y #sales en Slack: qué se preguntó, qué sigue abierto, quién espera a quién. Envíamelo como mensaje directo.

**Plan del lunes** — Aeven Cloud

> Cada lunes a las 7:00, mira el calendario de esta semana y mis tareas abiertas, señala los días demasiado cargados y sugiere qué reuniones podrían moverse. Envíamelo por Slack.

## Vigila los cambios

**Vigilante de precios o páginas** — Aeven Cloud

> Cada mañana a las 9, mira la página del Sony WH-1000XM6 en nuestras tres tiendas habituales. Avísame por Telegram solo si un precio baja de 300 €.

**Noticias de la competencia** — Aeven Cloud

> Cada miércoles, busca noticias, lanzamientos y cambios de precio de nuestros cuatro competidores desde la semana pasada. Tres puntos por competidor, con las fuentes enlazadas, enviado por correo.

**Un portal con tu sesión iniciada** — tu computadora

> Cada lunes, en mi propio Chrome, abre el portal del proveedor y descarga las facturas nuevas a la carpeta Facturas.

Este necesita tu navegador, así que se ejecuta en tu computadora mientras Aeven está abierto allí.

## Cuida tus archivos

**Limpieza de Descargas** — tu computadora

> Cada domingo por la noche, ordena mi carpeta Descargas: mueve documentos, imágenes e instaladores a subcarpetas por tipo y mes, y enumera lo que pese más de 1 GB sin borrarlo.

**Comprobación de la copia de seguridad** — tu computadora

> Cada noche a las 23:00, comprueba que la carpeta Proyectos se copió hoy al disco de respaldo y avísame solo si no fue así.

## Iniciado por otra cosa

Un bot con un **disparador entrante** tiene una dirección privada y una clave; cualquier cosa que publique en ella inicia una ejecución.

> Cuando el formulario de la web envíe un nuevo contacto, investiga la empresa, comprueba si ya les hemos escrito y publica en #sales un perfil breve con un primer mensaje sugerido.

Úsalo para formularios, alertas de monitorización u otro servicio que deba pasarle trabajo a Aeven.

## Cómo hacer más útil cualquier bot

- **Di cómo es "terminado".** "Menos de diez líneas", "una página", "tres puntos por competidor": un bot sin formato escribe ensayos.
- **Di adónde va el resultado.** Un mensaje para ti por Telegram o Slack, un documento de Google, un archivo en una carpeta, un canal. Un resultado que solo queda en la conversación de la ejecución es fácil de pasar por alto.
- **Di qué hacer cuando no hay nada nuevo.** "No envíes nada si no hay ninguno" evita que un bot se convierta en ruido.
- **Dale solo los permisos que necesita.** Un bot hace exactamente lo que confirmaste y nunca pregunta en mitad de la noche, así que lee los permisos y no solo la tarea. Vale la pena escribir "nunca envíes", "solo borradores" y "no borres" en la petición.
- **Pruébalo una vez con Ejecutar ahora** antes de fiarte del horario, y ajústalo en una conversación desde la página del bot.
- **Revisa Se ejecuta en.** Un bot que necesita tus archivos o tu navegador solo se ejecuta mientras Aeven está abierto en tu computadora; deja activado **Ejecutar en segundo plano**. Para mantener en tu equipo un bot que podría ejecutarse en la nube, elige **Ejecutar solo en mi ordenador**.
- **Empieza por las ideas.** **Bots → Nueva** tiene ideas agrupadas en Empezar el día, Planificar la semana, Mantente al día, Trabajo y dinero y Vida diaria, e **Ideas para ti** sugiere bots a partir de lo que Aeven ya sabe de ti.

## Relacionado

- [Bots](../automation/automations.md)
- [Combina funciones](./combine-features.md)
- [Conectores](../connections/connected-apps.md)
