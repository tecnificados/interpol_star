const COUNTRIES = [
  { country: 'Alemania', capital: 'Berlín' },
  { country: 'Austria', capital: 'Viena' },
  { country: 'Bélgica', capital: 'Bruselas' },
  { country: 'Bulgaria', capital: 'Sofía' },
  { country: 'Chipre', capital: 'Nicosia' },
  { country: 'Croacia', capital: 'Zagreb' },
  { country: 'Dinamarca', capital: 'Copenhague' },
  { country: 'Eslovaquia', capital: 'Bratislava' },
  { country: 'Eslovenia', capital: 'Liubliana' },
  { country: 'España', capital: 'Madrid' },
  { country: 'Estonia', capital: 'Tallin' },
  { country: 'Finlandia', capital: 'Helsinki' },
  { country: 'Francia', capital: 'París' },
  { country: 'Grecia', capital: 'Atenas' },
  { country: 'Hungría', capital: 'Budapest' },
  { country: 'Irlanda', capital: 'Dublín' },
  { country: 'Italia', capital: 'Roma' },
  { country: 'Letonia', capital: 'Riga' },
  { country: 'Lituania', capital: 'Vilna' },
  { country: 'Luxemburgo', capital: 'Luxemburgo' },
  { country: 'Malta', capital: 'La Valeta' },
  { country: 'Países Bajos', capital: 'Ámsterdam' },
  { country: 'Polonia', capital: 'Varsovia' },
  { country: 'Portugal', capital: 'Lisboa' },
  { country: 'Chequia', capital: 'Praga' },
  { country: 'Rumanía', capital: 'Bucarest' },
  { country: 'Suecia', capital: 'Estocolmo' },
];

const ROUTE_LENGTH = 10;
const STOLEN_OBJECTS = [
  { name: 'La Mona Lisa', author: 'Leonardo da Vinci', image: 'assets/objects/mona-lisa.jpg' },
  { name: 'El grito', author: 'Edvard Munch', image: 'assets/objects/the-scream.jpg' },
  { name: 'El concierto', author: 'Johannes Vermeer', image: 'assets/objects/the-concert.jpg' },
  { name: 'La tormenta en el mar de Galilea', author: 'Rembrandt van Rijn', image: 'assets/objects/storm-galilee.jpg' },
  { name: 'El Huevo de Fabergé «Tercer Huevo Imperial»', author: 'August Holmström (maestro orfebre)', image: 'assets/objects/faberge-third-egg.jpg' },
  { name: 'La Salera de Francisco I', author: 'Benvenuto Cellini', image: 'assets/objects/saliera-cellini.jpg' },
  { name: 'El Diamante Hope', image: 'assets/objects/hope-diamond.jpg' },
  { name: 'El Códice Calixtino', author: 'Aymeric Picaud (atribución discutida)', image: 'assets/objects/codex-calixtinus.jpg' },
  { name: 'El busto de Nefertiti', author: 'Tutmose (atribución)', image: 'assets/objects/nefertiti-bust.jpg' },
];
const THIEF_NAMES = [
  'Alfredo Pillastre',
  'Susana Torio',
  'Armando Bronca',
  'Aitor Menta',
  'Alba Aricoque',
  'Esteban Coocupado',
  'Rebeca Bezona',
  'Dolores Fuertes de Barriga',
  'Elena Nito del Bosque',
  'Chema Pamundi',
  'Carmelo Coton',
  'Estela Gartija',
  'Ricardo Borriquero',
];
const FEMALE_THIEVES = new Set([
  'Susana Torio',
  'Alba Aricoque',
  'Rebeca Bezona',
  'Dolores Fuertes de Barriga',
  'Elena Nito del Bosque',
  'Estela Gartija',
]);
const screenContent = document.querySelector('#screen-content');
const startButton = document.querySelector('#start-case');
const clock = document.querySelector('#clock');
let route = [];
let stopIndex = 0;
let cleanAnswers = 0;
let hadAnyError = false;
let currentQuestionHadError = false;
let stolenObject = '';
let activeThief = '';

function updateClock() {
  clock.textContent = new Intl.DateTimeFormat('es-ES', {
    hour: '2-digit', minute: '2-digit', hour12: false,
  }).format(new Date());
}

function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function startCase() {
  route = shuffled(COUNTRIES).slice(0, ROUTE_LENGTH);
  stolenObject = STOLEN_OBJECTS[Math.floor(Math.random() * STOLEN_OBJECTS.length)];
  activeThief = THIEF_NAMES[Math.floor(Math.random() * THIEF_NAMES.length)];
  stopIndex = 0;
  cleanAnswers = 0;
  hadAnyError = false;
  currentQuestionHadError = false;
  renderQuestion();
}

function renderQuestion() {
  const target = route[stopIndex];
  const options = shuffled([target, ...shuffled(COUNTRIES.filter((item) => item.country !== target.country)).slice(0, 2)]);

  screenContent.className = 'screen-content case-content';
  screenContent.innerHTML = `
    <div class="case-header">
      <div class="case-heading">
        <div class="screen-eyebrow"><span class="live-dot"></span> RED SEGURA · CASO ACTIVO</div>
        <div class="screen-logo">I<span>★</span></div>
        <div class="case-kicker">EXPEDIENTE #AR-042 · PARADA ${stopIndex + 1} DE ${ROUTE_LENGTH}</div>
        <h1 class="case-title">¡Han robado<br><strong>${stolenObject.name}!</strong></h1>
        ${stolenObject.author ? `<div class="item-author">de ${stolenObject.author}</div>` : ''}
      </div>
      <img class="object-thumb" src="${stolenObject.image}" alt="Miniatura de ${stolenObject.name}">
    </div>
    <p class="case-copy">${activeThief} ${stopIndex === 0 ? 'ha huido' : 'sigue huyendo'}. La última señal de su ruta apunta a la capital:</p>
    <div class="clue-card"><div class="clue-label">DESTINO DETECTADO · CAPITAL</div><div class="clue-capital">${target.capital}</div></div>
    <div class="options-label">¿EN QUÉ PAÍS LO ESPERAMOS?</div>
    <div class="options" role="group" aria-label="Elige el país de la parada ${stopIndex + 1}">
      ${options.map(({ country }) => `<button class="option-button" data-country="${country}" type="button">${country}</button>`).join('')}
    </div>
    <p class="case-result" id="case-result" aria-live="polite"></p>
    <div class="screen-footer"><span>AGENTE EN SERVICIO</span><span>OBJETIVO: ${activeThief.toUpperCase()}</span></div>
  `;

  screenContent.querySelectorAll('.option-button').forEach((button) => {
    button.addEventListener('click', () => chooseCountry(button, target));
  });
}

function chooseCountry(selectedButton, target) {
  const buttons = [...screenContent.querySelectorAll('.option-button')];
  const result = screenContent.querySelector('#case-result');
  const correct = selectedButton.dataset.country === target.country;
  if (!correct) {
    hadAnyError = true;
    currentQuestionHadError = true;
    selectedButton.disabled = true;
    selectedButton.classList.add('wrong');
    result.textContent = `Nuestro equipo de ${selectedButton.dataset.country} nos dice que no hay ni rastro del ladrón.`;
    return;
  }

  if (!currentQuestionHadError) cleanAnswers += 1;
  buttons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.country === target.country) button.classList.add('correct');
  });

  const isFinalStop = stopIndex === ROUTE_LENGTH - 1;
  if (isFinalStop) {
    showFinalScreen();
    return;
  }

  result.textContent = `Nuestro equipo de ${target.country} nos confirma que ha pasado por allí, pero ya se ha movido.`;
  result.classList.add('success');

  const advance = document.createElement('button');
  advance.className = 'retry-button';
  advance.type = 'button';
  if (stopIndex < ROUTE_LENGTH - 1) {
    advance.textContent = 'SIGUIENTE PISTA →';
    advance.addEventListener('click', () => {
      stopIndex += 1;
      currentQuestionHadError = false;
      renderQuestion();
    });
  } else {
    advance.textContent = 'NUEVA PERSECUCIÓN ↻';
    advance.setAttribute('aria-label', 'Empezar una nueva persecución');
    advance.addEventListener('click', startCase);
  }
  result.after(advance);
}

function showFinalScreen() {
  const caught = !hadAnyError;
  const isFemaleThief = FEMALE_THIEVES.has(activeThief);
  const image = caught
    ? isFemaleThief ? 'images/thief_female_trapped_jail.jpg' : 'images/thief_trapped.jpg'
    : isFemaleThief ? 'images/thief_female_scapped.jpg' : 'images/thief_escaped.jpg';
  const imageAlt = caught
    ? isFemaleThief ? 'La ladrona ha sido atrapada' : 'El ladrón ha sido atrapado'
    : isFemaleThief ? 'La ladrona ha conseguido escapar' : 'El ladrón ha conseguido escapar';
  const message = caught
    ? `¡Has atrapado a ${activeThief}!`
    : 'Efectivamente el ladrón pasó por aquí, pero hemos llegado tarde y no se ha podido atrapar al maleante.';

  screenContent.className = 'screen-content case-content final-screen';
  screenContent.innerHTML = `
    <div class="screen-eyebrow"><span class="live-dot"></span> RED SEGURA · INFORME FINAL</div>
    <h1 class="final-title">${caught ? 'MALEANTE CAPTURADO' : 'PERSECUCIÓN FINALIZADA'}</h1>
    <img class="final-result-image" src="${image}" alt="${imageAlt}">
    <div class="final-score-label">PUNTUACIÓN</div>
    <div class="final-score"><strong>${cleanAnswers}</strong><span>de ${ROUTE_LENGTH} puntos</span></div>
    <p class="final-message ${caught ? 'success' : 'failure'}">${message}</p>
    <button class="retry-button final-retry" type="button">NUEVA PERSECUCIÓN ↻</button>
    <div class="screen-footer"><span>CASO #AR-042 CERRADO</span><span>${activeThief.toUpperCase()}</span></div>
  `;
  screenContent.querySelector('.final-retry').addEventListener('click', startCase);
}

startButton.addEventListener('click', startCase);
updateClock();
setInterval(updateClock, 30_000);
