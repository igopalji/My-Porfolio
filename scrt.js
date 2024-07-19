document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('hidden');
});

document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.closest('section');
        section.classList.toggle('expand');
    });
});
