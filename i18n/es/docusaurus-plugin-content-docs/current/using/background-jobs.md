---
title: Trabajo que sigue en marcha
description: La lista de trabajos — comandos largos, subagentes y flujos de trabajo que se ejecutan mientras tú sigues con lo tuyo, y cómo detener uno.
---

# Trabajo que sigue en marcha

Una tarea rara vez es un solo paso. Aeven ejecuta comandos, le pasa parte del trabajo a un agente de apoyo y encadena pasos en un flujo de trabajo, y nada de eso tiene que dejar la conversación quieta. La lista **Jobs** muestra lo que se está ejecutando ahora mismo y lo que acaba de terminar.

## Qué aparece ahí

| Tipo | Qué es |
| --- | --- |
| Bash | Un comando que se ejecuta en tu computadora |
| PowerShell | Lo mismo, en Windows |
| Subagent | Un agente auxiliar que trabaja en su propia parte de la tarea |
| Workflow | Varios auxiliares que avanzan juntos por fases |

Cada fila es un trabajo. Despliega la fila para ver el comando que ejecuta, su salida hasta ahora, su progreso y, cuando termina, su resultado.

## Seguir uno

Un trabajo en ejecución muestra cuánto tiempo lleva. Mientras se ejecuta puedes seguir preguntando, abrir otra conversación o dejarlo tranquilo — el trabajo informa en la conversación que lo inició, que es donde corresponde su resultado.

## Detener uno

**Stop job** lo termina de inmediato. Un trabajo detenido no se puede reanudar; vuelve a pedir el trabajo y empieza desde el principio. Aeven te pide confirmación, porque un comando a medio terminar puede dejar cosas atrás.

## Cuando termina

La lista conserva los trabajos terminados con su resultado: **Done**, **Stopped** o **Failed**, cuánto tardó cada uno y cuándo. **Clear** vacía la sección de terminados; las conversaciones a las que pertenecían quedan intactas.

## Relacionado

- [Lo que Aeven pregunta antes de actuar](approvals.md)
- [Solucionar un problema](../help/troubleshooting.md)
