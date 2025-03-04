document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");
    const fadeInElements = document.querySelectorAll(".fade-in");
    
    function handleScroll() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            aboutSection.classList.add("visible");
            fadeInElements.forEach(el => el.classList.add("visible"));
        }
    }
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load to check if section is already in view
});
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bg-music");

    // Create a music control button
    const musicBtn = document.createElement("button");
    musicBtn.innerHTML = "🔊";
    musicBtn.id = "musicBtn";
    document.body.appendChild(musicBtn);

    // Toggle music on button click
    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.innerHTML = "🔊";
        } else {
            bgMusic.pause();
            musicBtn.innerHTML = "🔇";
        }
    });
});
