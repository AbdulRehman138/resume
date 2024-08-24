document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight current section in navigation
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLi = document.querySelectorAll('nav ul li');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('current');
            if (li.querySelector('a').getAttribute('href') === `#${current}`) {
                li.classList.add('current');
            }
        });
    });
});