// Typing effect for header
const typingEl = document.getElementById('typing');
const text = "Hey, I'm <span class='red'>Abdul Moiz </span> 👋";
let i = 0;
function type() {
  if (i < text.length) {
    typingEl.innerHTML = text.slice(0, i+1);
    i++;
    setTimeout(type, 60);
  }
}
type();

// Fun moving dot game
const dot = document.getElementById('dot');
const gameArea = document.getElementById('game-area');
const scoreEl = document.getElementById('score');
let score = 0;

function randomPos(max) {
  return Math.floor(Math.random() * max);
}

dot.addEventListener('click', () => {
  score++;
  scoreEl.textContent = `Score: ${score}`;
  // Spread operator for fun: move dot with random style
  const [x, y] = [randomPos(gameArea.offsetWidth - 30), randomPos(gameArea.offsetHeight - 30)];
  Object.assign(dot.style, { left: x + 'px', top: y + 'px', ...{ filter: `hue-rotate(${score * 40}deg)` } });
});
// Initial random position
const [startX, startY] = [randomPos(gameArea.offsetWidth - 30), randomPos(gameArea.offsetHeight - 30)];
dot.style.left = startX + 'px';
dot.style.top = startY + 'px'; 