function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + "%";
    });
}

// Trigger animation when section is in viewport
window.addEventListener('scroll', () => {
    const section = document.querySelector('.skills-section');
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if (position < screenPosition) {
        animateProgressBars();
    }
});