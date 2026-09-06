// NAVEGACAO
const nav = document.querySelector('nav');
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#main-menu');
const toggleIcon = toggle.querySelector('i');

function closeMenu() {
    menu.classList.remove('is-open');
    document.body.classList.remove('overflow-hidden');
    toggleIcon.classList.replace('fa-xmark', 'fa-bars');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
}

toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    document.body.classList.toggle('overflow-hidden', isOpen);
    toggleIcon.classList.toggle('fa-bars', !isOpen);
    toggleIcon.classList.toggle('fa-xmark', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) {
        closeMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        closeMenu();
    }
});
