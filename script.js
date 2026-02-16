// Typing effect for the main message
const mainMessage = document.getElementById('main-message');
const text = mainMessage.innerHTML;
mainMessage.innerHTML = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        mainMessage.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Adjust speed here
    }
}
typeWriter();

// Reveal more content button
const revealBtn = document.getElementById('reveal-btn');
const hiddenContent = document.getElementById('hidden-content');
revealBtn.addEventListener('click', () => {
    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        revealBtn.textContent = 'Hide Extra Love 💔';
    } else {
        hiddenContent.style.display = 'none';
        revealBtn.textContent = 'Reveal More Love 💖';
    }
});

// Music play/pause toggle
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = 'Pause Music ⏸️';
    } else {
        bgMusic.pause();
        musicBtn.textContent = 'Play Music 🎵';
    }
});

// Confetti on shooting star click
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}