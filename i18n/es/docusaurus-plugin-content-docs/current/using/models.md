---
title: Elegir un modelo
description: Elige qué modelo de IA responde, qué significa la diferencia en la práctica y qué hacer cuando uno no está disponible.
---

# Elegir un modelo

Aeven no está atado a un solo modelo de IA. Un modelo es el motor que lee tu petición y escribe la respuesta; Aeven decide cómo componerse a su alrededor, y tú decides cuál responde.

## Empieza por los modelos de Aeven

Los modelos de Aeven vienen incluidos con la aplicación y no necesitan configuración: responden en cuanto inicias sesión, y los créditos de tu plan pagan lo que usas. Son la opción predeterminada recomendada: están ajustados a cómo funciona Aeven, con sus herramientas, sus aprobaciones y las conversaciones largas, así que una tarea que usa varios pasos y unos cuantos archivos se comporta como describen el resto de estas páginas.

Si un modelo es todo lo que quieres de Aeven, no hace falta que abras la siguiente sección de esta página.

## Dónde está la elección

El modelo se elige en el cuadro de mensaje, no en una pantalla de ajustes: pertenece a lo que estás a punto de preguntar. El control muestra el modelo que responde en este momento:

![El control de modelo en el cuadro de mensaje, abierto: Model y Effort](/img/app/model-menu.png)

*Model, y cuánto debe esforzarse en pensar.*

- **Model** elige quién responde. El cambio se aplica a tu siguiente mensaje; una conversación que ya empezaste mantiene su modelo hasta que lo cambies allí.
- **Effort** es cuánto razonamiento dedica el modelo antes de responder. Más alto es más lento y mejor en preguntas difíciles; más bajo es más rápido en las pequeñas.

**Settings → Models** es donde un modelo se conecta en lugar de elegirse: tu propia clave, un endpoint o una dirección local, como se explica abajo.

El nombre del modelo que responde se ve en la conversación, así puedes saber cuál produjo un resultado que te gustó.

## Tu propio proveedor

Tu propia clave es una forma de primera clase de usar Aeven, no una solución provisional. Si tu cuenta está configurada con tu propia clave de API, un endpoint compatible con OpenAI o un modelo al que estás suscrito en otro sitio, **Settings → Models** acepta la clave o la dirección y el nombre del modelo. Basta con guardar; no hace falta reiniciar.

Ejecutar un modelo en tu propia máquina también cuenta como tu propio proveedor: apunta Aeven a su dirección local y responde desde ahí. Las conversaciones, la memoria y las conexiones se quedan donde estaban: pertenecen a Aeven, no al modelo.

## Cuando un modelo no está disponible

Un mensaje que falla normalmente explica por qué: una clave caducada, un límite del plan alcanzado o una caída del servicio. [Solucionar un problema](../help/troubleshooting.md) enumera los casos habituales y qué hacer.

## Relacionado

- [Cuenta, planes y créditos](../account/plans-and-credits.md)
- [Lo que Aeven recuerda](./memory.md)
