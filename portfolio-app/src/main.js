import './style.css'

// Import image using relative path from current file
import madhuImg from './images/madhu.png'

function initializeApp() {
    const heroImage = document.querySelector('.hero-image img')
    if (heroImage) {
        heroImage.src = madhuImg
        heroImage.setAttribute('alt', 'Front-end Architect & AI Evangelist')
    }

    const navToggle = document.querySelector('.nav-toggle')
    const navLinks = document.querySelector('.nav-links')

    navToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active')
    })

    navLinks?.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('active')
        }
    })

    const sections = Array.from(document.getElementsByTagName('section'))
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        },
        {
            threshold: 0.1,
            rootMargin: '50px'
        }
    )

    sections.forEach(section => observer.observe(section))
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp)
} else {
    initializeApp()
}