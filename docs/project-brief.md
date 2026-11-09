# Visión, alcance y reglas

## Concepto

Interpol Star es un juego educativo en español para practicar las capitales de los 27 países de la Unión Europea. El jugador es un agente de Interpol que sigue a un ladrón que ha robado uno de varios objetos históricos.

## Inicio

La pantalla inicial muestra una oficina nocturna y el ordenador del agente. El terminal anuncia un robo de alto perfil y pide iniciar la persecución. Al comenzar, el caso elige un ladrón y un objeto robado al azar.

## Una persecución

1. Se crea una ruta aleatoria de diez países distintos, seleccionados de los 27 estados miembros de la Unión Europea.
2. Cada parada muestra la capital del destino y tres opciones de país: el destino correcto y dos países distractores distintos.
3. Una respuesta incorrecta desactiva esa opción, marca un error para la puntuación y muestra un mensaje del equipo del país seleccionado. La pregunta permanece abierta para que se pruebe otra opción.
4. Una respuesta correcta permite avanzar con **Siguiente pista**. La primera pista dice que el sospechoso ha huido; las posteriores indican que sigue huyendo.
5. La puntuación cuenta cuántas paradas se acertaron a la primera. Cualquier error invalida la captura, aunque el jugador pueda corregirlo y completar la ruta.
6. Al resolver la décima parada aparece una pantalla final con la puntuación en formato «X de 10 puntos» y la ilustración correspondiente.

## Resultado

- **Captura:** solo se produce con diez respuestas correctas consecutivas, sin errores. Se muestra el JPG de ladrón capturado.
- **Fuga:** si hubo algún error se muestra «Efectivamente el ladrón pasó por aquí, pero hemos llegado tarde y no se ha podido atrapar al maleante.» junto a la puntuación y el JPG de fuga.
- Los nombres de `FEMALE_THIEVES` usan las ilustraciones femeninas. Los demás ladrones usan las ilustraciones generales.
- El botón de la pantalla final inicia una partida nueva y vuelve a sortear el ladrón, el objeto, la ruta y las opciones.

## Contenido aleatorio

- Ladrones: trece nombres definidos en `THIEF_NAMES`.
- Objetos: nueve entradas definidas en `STOLEN_OBJECTS`; cuando se conoce, la interfaz muestra su autor precedido por «de».
- Destinos: diez países sin repetir en cada ruta.
- Distractores: dos países que no son el destino de la parada actual.

Las listas completas y las convenciones se describen en [thieves.md](thieves.md), [stolen-objects.md](stolen-objects.md) y [countries-and-capitals.md](countries-and-capitals.md).

## Fuera del alcance actual

No hay mapa navegable, rutas con conexiones geográficas, vidas, inventario, persistencia de puntuaciones, multijugador, backend ni sonido. El traslado entre destinos se representa como una serie de preguntas.

## Tono y accesibilidad

La presentación combina una oficina de Interpol en pixel art con textos breves de aventura detectivesca. La interfaz está en español; las opciones son botones nativos y los resultados se anuncian con `aria-live`.
