# Interpol Star

Juego web educativo de detectives para practicar las capitales de los 27 países de la Unión Europea. El jugador trabaja desde una oficina de Interpol para perseguir a un ladrón por una ruta aleatoria de diez países.

## Acceso en línea

Puedes jugar desde [Interpol Star](https://tecnificados.github.io/interpol_star/).

## Cómo jugar

1. Abre `index.html` en un navegador moderno.
2. Pulsa **Iniciar persecución** en el ordenador de la oficina.
3. Lee la capital de la pista y elige uno de los tres países.
4. Si fallas, la opción elegida se desactiva y puedes probar otra. La pregunta no avanza hasta acertarla.
5. Resuelve las diez paradas. Para atrapar al ladrón debes acertar las diez a la primera, sin errores.

Al terminar, la pantalla muestra tu puntuación —respuestas acertadas a la primera, de 10— y la ilustración de captura o fuga. La ruta, el ladrón, el objeto robado y las opciones se eligen aleatoriamente en cada partida; la ruta no repite países.

## Tecnologías y ejecución

HTML, CSS y JavaScript nativos. No requiere instalación, dependencias ni servidor: abre `index.html`. Las fuentes de Google Fonts se cargan desde internet cuando está disponible la conexión; el juego tiene fuentes de reserva y sus imágenes están guardadas localmente.

## Estructura

- `index.html`: estructura de la oficina, terminal de bienvenida y pie de página.
- `styles.css`: escena pixel art, monitor, pantallas de juego y diseño responsive.
- `script.js`: países, capitales, objetos, autores, ladrones y flujo de la partida.
- `assets/objects/`: miniaturas de los nueve objetos robados.
- `images/`: ilustraciones de captura y fuga, incluidas las variantes femeninas.
- `docs/`: alcance, reglas, contenidos, diseño y créditos de imágenes.

## Documentación

Empieza por [`docs/README.md`](docs/README.md), el índice de la documentación del proyecto.
