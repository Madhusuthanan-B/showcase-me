const sections = Array.from(document.getElementsByTagName('section'));
        
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: '50px'
});

sections.forEach(section => observer.observe(section));

document.querySelector('.nav-links').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
    }
});