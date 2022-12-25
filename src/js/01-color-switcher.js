function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const DELAY = 1000;

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.setAttribute('disabled', true);
let intervalId = null;

function newColorBody() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');
  intervalId = setInterval(() => {
    newColorBody();
  }, DELAY);
});

refs.stopBtn.addEventListener('click', () => {
  refs.stopBtn.setAttribute('disabled', true);
  refs.startBtn.removeAttribute('disabled');
  clearInterval(intervalId);
});
