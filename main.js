const openModalButton = document.getElementById('open-me'); // EMOJI
const poop = document.getElementById('poop');

const windowHeight = window.innerHeight / 2;

let idleTime = 0;

poop.style.bottom = `${windowHeight}px`;

setTimeout(() => {
  poop.style.bottom = '0';
}, 10000);

function timerInc() {
  idleTime = idleTime + 1;
  console.log(idleTime);
  if (idleTime > 1) {
    console.log('sleep');
    openModalButton.textContent = '😴';
  }
}

openModalButton.addEventListener('click', (e) => {
  idleTime = 0;
  openModalButton.textContent = '😖';
  setTimeout(() => {
    idleTime = 0;
    openModalButton.textContent = '🤕';
  }, 500);
});

openModalButton.addEventListener('mouseenter', (e) => {
  idleTime = 0;
  openModalButton.textContent = '😳';
});

window.addEventListener('mousemove', () => {
  idleTime = 0;
});

setInterval(timerInc, 1000);
