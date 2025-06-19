
const profileImage = document.getElementById('profileImage');
const changeProfilePic = document.getElementById('changeProfilePic');
let currentImageIndex = 0;

const profileImages = [
    'https://picsum.photos/200/200',
    'https://picsum.photos/201/200',
    'https://picsum.photos/202/200',
    'https://picsum.photos/203/200'
];

function changeProfilePicture() {
    currentImageIndex = (currentImageIndex + 1) % profileImages.length;
    profileImage.style.opacity = '0';
    
    setTimeout(() => {
        profileImage.src = profileImages[currentImageIndex];
        profileImage.style.opacity = '1';
    }, 300);
}

changeProfilePic.addEventListener('click', changeProfilePicture);


const skillLevel = document.getElementById('skillLevel');
const skillValue = document.getElementById('skillValue');

skillLevel.addEventListener('input', function() {
    skillValue.textContent = `${this.value}/10`;
    

    const value = parseInt(this.value);
    if (value < 4) {
        skillValue.style.color = '#ff6b6b';
    } else if (value < 7) {
        skillValue.style.color = '#feca57';
    } else {
        skillValue.style.color = '#1dd1a1';
    }
});


const randomFact = document.getElementById('randomFact');
const factDisplay = document.getElementById('factDisplay');

const funFacts = [
    "I can solve a Rubik's cube in under 2 minutes! 🎲",
    "I've visited 4 different countries! 🌍",
    "I can speak 3 languages fluently! 🗣️",
    "I cant STFU ",
    "I'm not a certified scuba diver! 🤿",
];

function dropRandomFact() {
    factDisplay.style.animation = 'none';
    factDisplay.offsetHeight; 
    factDisplay.style.animation = 'bounce 0.5s ease';
    
  
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factDisplay.textContent = funFacts[randomIndex];
}

randomFact.addEventListener('click', dropRandomFact);

const skillsList = document.querySelectorAll('.skills-list li');

skillsList.forEach(skill => {
    skill.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
        this.style.transition = 'transform 0.3s ease';
    });

    skill.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}


window.addEventListener('load', createConfetti); 