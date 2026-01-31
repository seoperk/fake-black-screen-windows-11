// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in sections sequentially
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((sec, i) => {
        setTimeout(() => {
            sec.classList.add('visible');
        }, i * 180);
    });
});
