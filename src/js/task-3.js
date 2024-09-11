const scoreEl = document.querySelector('.score');
const gameContainer = document.querySelector('.game__container');

let score = 0;

function createTarget() {
  const target = document.createElement('div');
  target.classList.add('target');

  target.style.top = `${Math.random() * 300}px`;
  target.style.left = `${Math.random() * 300}px`;

  target.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;
    target.remove();
  });

  gameContainer.appendChild(target);

  setTimeout(() => {
    target.remove();
  }, 1000);

  return target;
}

setInterval(() => {
  createTarget();
}, 1000);
