const numStars = 100; // Número de estrelas
const backgroundContainer = document.getElementById('background-container');

// Gerar estrelas
for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 3}s, ${Math.random() * 5}s`;
    backgroundContainer.appendChild(star);
}
