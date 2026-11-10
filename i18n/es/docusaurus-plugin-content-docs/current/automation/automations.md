---
title: Bots
description: Una tarea que se ejecuta sola según un horario — cómo crearla, cuándo se ejecuta, qué puede hacer y cómo detenerla.
---

# Bots

Un bot es una tarea que se repite por su cuenta: un resumen matinal, un repaso de la bandeja de entrada, un cierre semanal, una comprobación de una página que te importa. Lo describes una vez, con palabras; se ejecuta según su horario, deja una conversación con el resultado y te dice cuándo se ejecutó por última vez y cuándo lo hará la próxima.

## Crear uno

Abre **Bots** en la barra lateral y elige **New**. Después, escoge una idea o describe la rutina en el compositor — *«cada mañana de lunes a viernes, resúmeme el calendario de hoy y el correo que necesita mi atención»*.

Aeven hace el resto en una conversación corta: pregunta lo que le falta (qué carpeta, qué cuenta, a qué hora, en qué zona horaria) y luego muestra lo que se propone usar — sus **task**, **schedule** y **permissions**. No se guarda nada hasta que confirmas, y puedes cambiar cualquiera de los tres en esa conversación antes de decir que sí.

Las **Ideas** son peticiones de trabajo que puedes adaptar, agrupadas en Start the day, Plan the week, Stay informed, Work and money y Everyday life. **Ideas for you** sugiere bots a partir de lo que Aeven ya sabe de tu trabajo y tus rutinas; cuando hay poca memoria de la que tirar, hace primero algunas preguntas.

Los bots sacan mucho más partido de las cuentas conectadas. Las ideas que necesitan correo, calendario o GitHub están marcadas, y **Connect accounts** te lleva directo a ello. [Conectores](../connections/connected-apps.md)

## Cuándo se ejecuta

| Horario que puedes elegir | Se ejecuta |
| --- | --- |
| Daily at a time | Todos los días a esa hora |
| Weekdays at a time | De lunes a viernes |
| Every named weekday | Una vez a la semana |
| Once, on a date | Una sola vez, en una fecha |
| Every so many minutes | Con ese intervalo |
| Every so many hours, at a given minute past | Alineado con el reloj |
| On chosen days of the month | Esos días |
| On the first, second, third or fourth named weekday of the month | Ese día de la semana, cada mes |
| Every year on a date | Una vez al año |
| A custom schedule | Una expresión cron que escribes tú |

Cualquiera de ellos puede llevar una fecha de fin, después de la cual el bot se detiene solo.

## Cómo es una ejecución

Cada ejecución es una conversación normal, abierta para ti en la barra lateral. Léela, sigue lo que hizo y respóndele si quieres algo más — una ejecución no es un registro muerto.

Los archivos que produce el bot se quedan en la carpeta que le diste. La fila del bot muestra **Next run** y **Last result**, y su lista **Runs** guarda cada intento con lo que alcanzó:

| Estado | Significado |
| --- | --- |
| Queued | Esperando su turno |
| Running | Trabajando ahora |
| Finished | Hecha, con el resultado en su conversación |
| Didn't finish | Se detuvo por un error; la conversación dice por qué |
| Skipped | No se ejecutó — la computadora estaba apagada o el horario ya no se aplicaba |
| Stopped | La detuviste tú |

## Qué puede hacer un bot

Exactamente lo que confirmaste al crearlo: en qué carpeta trabaja, qué cuentas puede usar y qué tipo de acción puede tomar. El trabajo fuera de esos permisos no se hace, y la ejecución dice qué dejó fuera en lugar de preguntártelo a las tres de la mañana. Por eso el paso de confirmación importa aquí más que en ningún otro sitio — lee los permisos, no solo la tarea.

## Controlar uno

Abre un bot para:

- **Run now** — iniciarlo de inmediato, sin esperar al horario.
- **Pause** y **Resume** — detener las próximas ejecuciones y conservar todo lo demás.
- **Adjust** — cambiar la tarea, el horario o los permisos, de nuevo como una conversación que te muestra el cambio antes de guardarlo.
- **Delete** — detenerlo para siempre. La ejecución en curso termina, su historial se conserva y los archivos que ya escribió se quedan en tu carpeta.

**Clear runs** vacía de la lista las ejecuciones terminadas y archiva sus conversaciones fuera de la barra lateral. La ejecución que siga en curso se conserva, y la limpieza no se puede deshacer.

## Reintentar una ejecución que falló

**Retry** vuelve a ejecutar la misma tarea. Lee antes la ejecución fallida: puede que ya haya cambiado algo fuera de Aeven, y hacer los mismos pasos dos veces puede duplicar el efecto.

## Iniciar uno desde fuera

Un bot puede llevar un **inbound trigger** — una dirección privada y una clave. Cualquier cosa que pueda enviar una petición a esa dirección con la clave inicia una ejecución, lo que hace que un bot sea accesible desde un formulario, una alerta de monitorización u otro servicio. Trata la clave como una contraseña: **New key** la sustituye y rechaza las peticiones que sigan usando la anterior, y quitar el disparador rechaza todas las peticiones hasta que crees uno nuevo.

## Dónde se ejecuta un bot

Cada tarjeta de bot muestra **Se ejecuta en**. Un bot que no necesita nada de tu computadora —solo la web y tus cuentas conectadas— se ejecuta en **Aeven Cloud**, así que sigue funcionando con tu computadora apagada. Un bot que usa tus archivos, tu navegador o tus aplicaciones se ejecuta en **tu computadora**, y la tarjeta dice cuál de ellos necesita. Para mantener en tu equipo un bot que podría ejecutarse en la nube, ábrelo y elige **Ejecutar solo en mi ordenador**; **Permitir Aeven Cloud** lo deshace.

## Mientras Aeven está cerrado

Un bot que se ejecuta en tu computadora necesita que Aeven esté en marcha allí. Con **Settings → General → Run in the background** activado — lo predeterminado —, cerrar la ventana no lo detiene; salir de la aplicación sí. Una computadora que está dormida a la hora programada ejecuta el bot en cuanto se despierta, y un horario que venció mientras Aeven estaba cerrado se recupera entonces en lugar de perderse. Si has cerrado sesión, los horarios siguen ahí pero no se ejecuta nada, y la página de Bots lo indica hasta que vuelvas a iniciar sesión.

## Relacionado

- [Bots que vale la pena configurar](../tips/useful-bots.md)
- [Conectores](../connections/connected-apps.md)
- [Skills](../using/skills.md)
- [Lo que Aeven pregunta antes de actuar](../using/approvals.md)
- [Tus datos](../account/your-data.md)
