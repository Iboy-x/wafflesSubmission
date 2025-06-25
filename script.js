// Typing effect for header (only on index.html)
const typingEl = document.getElementById('typing');
if (typingEl) {
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
}

// Fun moving dot game (only on index.html)
const dot = document.getElementById('dot');
const gameArea = document.getElementById('game-area');
const scoreEl = document.getElementById('score');
if (dot && gameArea && scoreEl) {
  let score = 0;
  function randomPos(max) {
    return Math.floor(Math.random() * max);
  }
  dot.addEventListener('click', () => {
    score++;
    scoreEl.textContent = `Score: ${score}`;
    // Sspreading dot move
    const [x, y] = [randomPos(gameArea.offsetWidth - 30), randomPos(gameArea.offsetHeight - 30)];
    Object.assign(dot.style, { left: x + 'px', top: y + 'px', ...{ filter: `hue-rotate(${score * 40}deg)` } });
  });
  // Initial random position
  const [startX, startY] = [randomPos(gameArea.offsetWidth - 30), randomPos(gameArea.offsetHeight - 30)];
  dot.style.left = startX + 'px';
  dot.style.top = startY + 'px';
}

// Extra Fun Features (only on blog.html)
const musicToggle = document.getElementById('music-toggle');
const musicStatus = document.getElementById('music-status');
const quoteBtn = document.getElementById('quote-btn');
const quoteDisplay = document.getElementById('quote-display');
const funBtn = document.getElementById('fun-btn');

if (musicToggle && musicStatus && quoteBtn && quoteDisplay && funBtn) {
  // bg music
  const music = new Audio('background.mp3'); 
  music.loop = true;
  let isPlaying = false;
  musicToggle.addEventListener('click', () => {
    if (!isPlaying) {
      music.play();
      musicToggle.textContent = 'Pause Music';
      musicStatus.textContent = '🎵 Playing';
    } else {
      music.pause();
      musicToggle.textContent = 'Play Music';
      musicStatus.textContent = '';
    }
    isPlaying = !isPlaying;
  });
  // Quote/Fact Generator
  const quotes = [
    "Code is like humor. When you have to explain it, it's bad.",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "you are 18 or less rn.",
    "Debugging: Being the detective in a crime movie where you are also the murderer.",
    "There are 10 types of people: those who understand binary and those who don't.",
    "Fact: You are in the earth right now",
    "Fact: You just touched yourself right now few moments back."
  ];
  quoteBtn.addEventListener('click', () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = random;
  });
  // Fun Alert / Easter Egg
  funBtn.addEventListener('click', () => {
    alert('You were rick rolled 🎉\nNow go break some code (on purpose)!');
  });
}

// Theme Switcher (only on index.html)
const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
  let dark = true;
  themeBtn.addEventListener('click', () => {
    if (dark) {
      document.body.style.background = '#fff';
      document.body.style.color = '#18181a';
      themeBtn.textContent = 'Switch to Dark Theme';
    } else {
      document.body.style.background = '#18181a';
      document.body.style.color = '#fff';
      themeBtn.textContent = 'Switch Theme';
    }
    dark = !dark;
  });
} 
