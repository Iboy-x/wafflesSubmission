// Theme toggling functionality
const themeToggle = document.getElementById('themeToggle');
let isDarkTheme = false;

function toggleTheme() {
    const root = document.documentElement;
    if (isDarkTheme) {
        root.style.setProperty('--background-color', '#f8f9fa');
        root.style.setProperty('--text-color', '#2d3436');
        root.style.setProperty('--primary-color', '#6c63ff');
    } else {
        root.style.setProperty('--background-color', '#2d3436');
        root.style.setProperty('--text-color', '#f8f9fa');
        root.style.setProperty('--primary-color', '#ff6b6b');
    }
    isDarkTheme = !isDarkTheme;
}

themeToggle.addEventListener('click', toggleTheme);

// Project details functionality
function showProjectDetails(projectId) {
    const projectDetails = {
        1: {
            title: 'Cool Project 1',
            description: 'This is a super cool project that I worked on! It uses the latest tech and has amazing features. 🚀',
            tech: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        2: {
            title: 'Awesome Project 2',
            description: 'Another amazing project that showcases my skills in web development. It has a beautiful UI and great UX! 🎨',
            tech: ['Vue.js', 'Node.js', 'MongoDB', 'Express']
        }
    };

    const project = projectDetails[projectId];
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <h3>Technologies Used:</h3>
            <ul>
                ${project.tech.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
            <button onclick="this.parentElement.parentElement.remove()" class="fun-button">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <h3>Thanks for reaching out, ${name}! 🎉</h3>
        <p>I'll get back to you at ${email} soon!</p>
    `;

    // Replace form with success message
    contactForm.innerHTML = '';
    contactForm.appendChild(successMessage);

    // Add some fun animation
    successMessage.style.animation = 'fadeIn 0.5s ease-in';
});

// Add some fun cursor effects
document.addEventListener('mousemove', function(e) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    document.body.appendChild(cursor);

    // Remove the cursor trail after animation
    setTimeout(() => {
        cursor.remove();
    }, 1000);
}); 