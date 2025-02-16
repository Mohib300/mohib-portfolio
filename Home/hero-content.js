window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Text Animation with Color Change
const textElement = document.querySelector(".changing-text");
const textArray = ["I am a Developer", "I am a Designer", "I am a Gamer"];
const colors = ["red", "blue", "yellow"];
let index = 0;

function changeText() {
    textElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        textElement.textContent = textArray[index]; // Change text
        textElement.style.color = colors[index]; // Change color
        textElement.style.opacity = 1; // Fade in
        index = (index + 1) % textArray.length; // Loop back
    }, 500);
}

setInterval(changeText, 2000); // Change every 2 seconds
const bgMusic = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");
    let isPlaying = false;

    musicBtn.addEventListener("click", () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        } else {
            bgMusic.play();
            musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });
