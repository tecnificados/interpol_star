# Diseño y arquitectura

## Dirección visual

- Oficina nocturna construida en CSS con estética pixel art: ciudad tras la ventana, estantería, escritorio y monitor CRT.
- Paleta oscura verde musgo con acentos verde lima y elementos cálidos de oficina.
- El monitor ocupa la mayor parte del espacio. En escritorio, la estantería queda a la izquierda y la ventana a la derecha; en móvil los elementos decorativos pasan a una franja sobre el monitor.
- La planta decorativa se oculta en pantallas estrechas para que no se superponga al ordenador.
- Las pantallas del juego se muestran dentro del CRT. No se genera scroll interno; las reglas responsive compactan contenido para ventanas pequeñas.
- El pie de página muestra la división en dos líneas y una franja negra inferior con el crédito del creador y sus enlaces.

## Archivos y recursos

- `index.html`: oficina inicial, terminal de bienvenida, pie de página y enlaces del crédito.
- `styles.css`: escena pixel art, monitor, estados de interacción, pantalla final y adaptación responsive.
- `script.js`: datos de juego, selección aleatoria, render de preguntas, evaluación y pantalla final.
- `assets/objects/`: nueve miniaturas de los objetos robados. Fuentes y licencias en [image-credits.md](image-credits.md).
- `images/`: cuatro ilustraciones JPG de captura/fuga proporcionadas para los desenlaces, con variantes generales y femeninas y escenarios integrados.

## Flujo técnico

Al pulsar **Iniciar persecución**, `startCase()` mezcla los 27 países y elige diez sin repetir. También selecciona un objeto de `STOLEN_OBJECTS` y un nombre de `THIEF_NAMES`. `renderQuestion()` muestra el número de parada, la capital del destino y tres opciones en orden aleatorio.

Si el jugador falla, `chooseCountry()` desactiva solo la opción elegida, marca que hubo un error y muestra el informe del equipo del país seleccionado. No cambia de parada hasta acertar. En una respuesta correcta muestra el informe del país de destino y habilita **Siguiente pista**. Un error previo sigue impidiendo la captura, aunque la respuesta se corrija.

Tras la respuesta correcta a la décima parada, `showFinalScreen()` muestra la puntuación de aciertos a la primera (X de 10), el desenlace y la imagen. `FEMALE_THIEVES` determina qué nombres usan las variantes femeninas.

## Reglas visuales importantes

- La miniatura del objeto se carga desde `assets/objects/` y aparece junto al título y autoría en la cabecera de la pregunta.
- El rótulo de pregunta y el resultado se ajustan a pantallas estrechas.
- El pie del caso usa el nombre aleatorio de esa persecución.
- El reloj se actualiza cada 30 segundos con la hora local del dispositivo.

## Ejecución

No hay compilación, paquetes ni dependencias JavaScript. Basta abrir `index.html` en un navegador moderno. Las fuentes Space Grotesk y DM Mono se solicitan a Google Fonts; si no hay conexión se usan fuentes de reserva. Las imágenes se guardan localmente.
