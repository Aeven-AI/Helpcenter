---
title: Bots
description: Una tarea que se ejecuta sola — según un horario, cuando llega un correo o se acerca una reunión, con actividad en GitHub o cuando otro bot le pasa trabajo — cómo crearla, qué puede hacer y cómo detenerla.
---

# Bots

Un bot es una tarea que se repite por su cuenta: un resumen matinal, un repaso de la bandeja de entrada, la preparación de una reunión, un cierre semanal, una comprobación de una página que te importa. Lo describes una vez, con palabras; se activa según un horario o cuando pasa algo, deja una conversación con el resultado y te dice cuándo se ejecutó por última vez y cuándo lo hará la próxima.

## Crear uno

Abre **Bots** en la barra lateral. La página muestra tus bots, tus tableros y las **Ideas**; el compositor de abajo dice **Describe un bot nuevo**. Escoge una idea — rellena el compositor para que la cambies antes de enviarla — o describe tú la rutina: *«cada mañana de lunes a viernes, resúmeme el calendario de hoy y el correo que necesita mi atención»*.

Æven hace el resto en una conversación corta: pregunta lo que le falta (qué carpeta, qué cuenta, a qué hora, en qué zona horaria) y luego muestra la **tarea**, qué lo **activa**, los **conectores** que puede usar y los **permisos** que se propone usar. No se guarda nada hasta que confirmas, y puedes cambiar cualquiera de ellos en esa conversación antes de decir que sí.

Las **Ideas** son peticiones de trabajo que puedes adaptar, agrupadas en Para tu función, Empezar el día, Planificar la semana, Mantente al día, Trabajo y dinero y Vida diaria. **Para tu función** tiene un bot listo para marketing, ventas, soporte, selección de personal, finanzas, jefatura de gabinete, ingeniería y creación de contenido. **Ideas para ti** sugiere bots a partir de lo que Æven ya sabe de tu trabajo y tus rutinas; cuando hay poca memoria de la que tirar, hace primero algunas preguntas.

Los bots sacan mucho más partido de las cuentas conectadas. Las ideas que necesitan correo, calendario o GitHub están marcadas, y **Conectar cuentas** te lleva directo a ello. [Conectores](../connections/connected-apps.md)

## Qué activa un bot

Un bot puede tener más de una forma de activarse — por ejemplo, un horario semanal y un webhook. Su tarjeta muestra cada una.

| Se activa | Cómo funciona |
| --- | --- |
| Un horario | A las horas que elegiste; mira la tabla de abajo |
| Correo nuevo | Cuando llega correo a una cuenta de correo que añadiste, si quieres solo de un remitente o sobre un asunto. La primera comprobación solo anota lo que ya hay |
| Un evento del calendario | Un tiempo fijo antes o después de que empiece cada evento, o justo al empezar. Puede limitarse a eventos cuyo título contiene una palabra, con una persona concreta, con o sin invitados externos, o que aceptaste. Funciona con Google Calendar, Outlook Calendar y Microsoft 365 |
| Actividad en GitHub | Cuando un repositorio envía un evento — un issue nuevo, un pull request, una release publicada. Se puede limitar a algunos eventos, algunas acciones y un repositorio |
| Un disparador externo | Cuando otro servicio envía una petición a la dirección privada del bot con su clave |
| Otro bot | Cuando un bot con el que lo conectaste le pasa una tarea |

Si una reunión cambia de hora, el bot se activa a la nueva hora, y nunca dos veces por la misma reunión.

### Horarios

| Horario que puedes elegir | Se ejecuta |
| --- | --- |
| A diario a una hora | Todos los días a esa hora |
| Días laborables a una hora | De lunes a viernes |
| Cada día de la semana indicado | Una vez por semana |
| Una vez, en una fecha | Una sola ejecución |
| Cada cierto número de minutos | Con ese intervalo |
| Cada cierto número de horas, en un minuto concreto | Alineado con el reloj |
| En días elegidos del mes | En esas fechas |
| El primer, segundo, tercer o cuarto día de la semana indicado del mes | Ese día de la semana cada mes |
| Cada año en una fecha | Una vez al año |
| Un horario personalizado | Una expresión cron que escribes tú |

Cualquiera de ellos puede llevar una fecha de fin, tras la cual el bot se detiene solo. Un horario también puede empezar cada ejecución hasta 30 minutos más tarde — la tarjeta dice entonces *con hasta … de retraso* — para que varios bots previstos para el mismo minuto no empiecen todos a la vez.

### Mientras se ejecuta

Si un bot se activa mientras una ejecución sigue en marcha, hace una de tres cosas, que se muestra en **Mientras se ejecuta** en su página: la nueva activación **se omite** (lo predeterminado), **espera su turno** o **se ejecuta a la vez**. Pide otra en la conversación del bot.

## Cómo es una ejecución

Cada ejecución es una conversación normal, reunida con las demás ejecuciones en la barra lateral (**Opciones de vista → Mostrar ejecuciones**). Léela, sigue lo que hizo y responde en ella si quieres algo más — una ejecución no es un registro muerto.

Los archivos que produjo el bot se quedan en la carpeta que se le asignó. La tarjeta del bot muestra **Próxima ejecución** — o **Cuando se activa** para un bot sin horario — y **Último resultado**, y su lista de **Ejecuciones** guarda cada intento con lo que consiguió:

| Estado | Significado |
| --- | --- |
| En cola | Esperando su turno |
| En ejecución | Trabajando ahora |
| Terminada | Hecho, con el resultado en su conversación |
| Nada nuevo | Miró y no encontró nada que contar |
| No terminó | Se detuvo por un error, o informó de que la tarea no se podía hacer; la ejecución dice por qué |
| Omitida | No se ejecutó — la computadora estaba apagada o el horario ya no aplicaba |
| Detenida | La detuviste tú |

Las ejecuciones sin novedades no estorban: **Último resultado** muestra la última ejecución que hizo algo, y varias seguidas se agrupan en una fila como *5 ejecuciones sin novedades*. Una ejecución que cambió un archivo, o que se topó con una acción que no tenía permitida, nunca se archiva como nada nuevo.

Un bot también puede detenerse solo cuando su tarea lo dice — *«revisa el seguimiento del paquete cada mañana y para cuando se haya entregado»*. Su tarjeta dice entonces, por ejemplo, **Pausada por su ejecución de 08:00**, y **Reanudar** lo pone en marcha otra vez.

## Qué puede hacer un bot

Exactamente lo que confirmaste al crearlo: en qué carpeta trabaja, qué conectores puede usar y qué tipo de acción puede realizar.

- **Sus conectores.** Un bot usa solo las cuentas que se le dieron. Dentro de ellas actúa sin preguntar — al confirmar el bot las aprobaste — así que un bot que publica en Slack publica. Cualquier otra cuenta se rechaza, y la ejecución lo dice.
- **Todo lo demás.** El trabajo fuera de esos permisos no se hace, y la ejecución dice lo que dejó fuera en lugar de preguntarte a las tres de la mañana.
- **Aprobaciones guardadas.** Cuando permites algo a un bot, queda guardado en su página en **Aprobaciones guardadas**, con la fecha en que caduca — 30 días después. Pasado ese plazo, el bot vuelve a preguntar. **Revocar** retira una al instante.

Por eso el paso de confirmación importa aquí más que en ningún otro sitio — lee los conectores y los permisos, no solo la tarea.

## Controlar uno

En la página **Bots**, cada tarjeta tiene **Ejecutar ahora**, **Pausar** o **Reanudar**, y **Más** con **Editar** y **Eliminar**. Selecciona una tarjeta para abrir la página del bot: su horario, la próxima ejecución, el último resultado, la tarea completa, sus ejecuciones y una tarjeta **Avanzado**.

- **Ejecutar ahora** — iniciarlo en el momento, sin esperar a que se active. **Detener** termina una ejecución en curso.
- **Pausar** y **Reanudar** — detener las próximas ejecuciones y conservar todo lo demás.
- **Editar** — abre la página del bot con su compositor, que dice **Cambia este bot…**. Escribe solo el cambio — *«pásalo a las 7:00 y sáltate los fines de semana»* — y Æven te muestra la nueva versión antes de guardarla.
- **Eliminar** — detenerlo para siempre. Una ejecución en curso termina, su historial se conserva y los archivos que ya escribió se quedan en tu carpeta.

**Resumen** y **Ejecuciones**, arriba, alternan entre tus bots y las ejecuciones de todos ellos. **Borrar ejecuciones** vacía la lista de ejecuciones terminadas y archiva sus conversaciones fuera de la barra lateral. Una ejecución que sigue en curso se conserva, y el borrado no se puede deshacer.

## Reintentar una ejecución que falló

**Reintentar** vuelve a ejecutar la misma tarea. Lee antes la ejecución fallida: puede que ya haya cambiado algo fuera de Æven, y ejecutar los mismos pasos dos veces puede duplicar el efecto.

## Iniciar uno desde fuera

Los dos están en la tarjeta **Avanzado** del bot.

**Disparador externo.** **Crear webhook** da al bot una dirección privada y una clave. Cualquier cosa que pueda enviar una petición a esa dirección con la clave inicia una ejecución, lo que permite llegar a un bot desde un formulario, una alerta de monitorización u otro servicio. Trata la clave como una contraseña: **Nueva clave** la sustituye y rechaza las peticiones que aún usan la antigua, y **Quitar webhook** rechaza todas las peticiones hasta que crees uno nuevo.

**GitHub.** Un bot que se activa con actividad en GitHub muestra una **Payload URL** y un **Secreto**. En la configuración del repositorio, añade un webhook con esa payload URL, el tipo de contenido `application/json` y ese secreto. Di qué eventos y acciones importan al crear el bot — *«cuando se publique una release»* lo activa una vez por release, no con cada edición del borrador previa.

## Tableros: bots que trabajan juntos {#boards}

Un tablero agrupa bots que se pasan trabajo y comparten un presupuesto — un investigador que pasa sus hallazgos a un redactor, un redactor que pasa un borrador a un revisor.

Elige **Nuevo tablero** en **Tableros**. Æven pregunta qué bots forman parte de él, qué bot pasa trabajo a cuál, si quien envía espera el resultado y cuál es el presupuesto, y te muestra el tablero antes de guardarlo.

- **Pasar trabajo.** Un bot solo puede pasar una tarea a un bot con el que lo conectaste. Cuando quien envía espera, el resultado le vuelve como una ejecución nueva. Un bot también puede esperar a varios remitentes — empezando cuando todos le han pasado una tarea, o en cuanto lo hace el primero.
- **Presupuesto.** Un tablero puede limitar cuántas de sus ejecuciones van a la vez y cuántos tokens usa al día. Una ejecución que lo superaría se rechaza, y el tablero dice qué límite la paró.
- **Última cadena.** La tarjeta del tablero muestra la cadena de traspasos más reciente, cada uno como **En espera**, **En ejecución**, **Hecho**, **No terminó**, **Liberado** o **Rechazado**, con los tokens que usó. Detener una ejecución detiene el resto de su cadena.

**Eliminar tablero** quita solo el tablero; sus bots siguen ejecutándose por su cuenta.

## Dónde se ejecuta un bot

Cada bot muestra **Se ejecuta en**. Un bot que no necesita nada de tu computadora —solo la web y tus cuentas conectadas— se ejecuta en **Æven Cloud**, así que sigue funcionando con tu computadora apagada. Un bot que usa tus archivos, tu navegador o tus aplicaciones se ejecuta en **tu ordenador**, y su página dice cuál de ellos necesita.

Para cambiarlo, abre el bot y elige **Elegir dónde se ejecuta** en **Avanzado**. **Dónde se ejecuta este bot** muestra Æven Cloud y cada una de tus computadoras, con si está en línea y cuándo se vio por última vez; un lugar que el bot no puede usar dice qué necesita.

## Mientras Æven está cerrado {#mientras-aeven-está-cerrado}

Un bot que se ejecuta en tu computadora necesita Æven abierto allí. Con **Settings → General → Run in the background** activado —lo predeterminado—, cerrar la ventana no lo detiene; salir de la app sí. Una computadora que está en reposo a la hora programada ejecuta el bot al despertar, y un horario que venció mientras Æven estaba cerrado se recupera entonces en lugar de perderse. Si cerraste sesión, los horarios se mantienen pero no se ejecuta nada, y la página de Bots lo indica hasta que vuelvas a iniciar sesión.

## Relacionado

- [Bots que vale la pena configurar](../tips/useful-bots.md)
- [Conectores](../connections/connected-apps.md)
- [Skills](../using/skills.md)
- [Lo que Æven pregunta antes de actuar](../using/approvals.md)
- [Tus datos](../account/your-data.md)
