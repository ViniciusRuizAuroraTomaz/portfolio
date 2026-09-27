// NAVEGACAO
const nav = document.querySelector('nav');
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#main-menu');
const toggleIcon = toggle.querySelector('i');

function closeMenu() {
    if (!menu) return;

    menu.classList.remove('is-open');
    document.body.classList.remove('overflow-hidden');
    toggleIcon.classList.replace('fa-xmark', 'fa-bars');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
}

if (toggle && menu && toggleIcon) {
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
}

document.addEventListener('click', (event) => {
    if (nav && !nav.contains(event.target)) {
        closeMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        closeMenu();
    }
});

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const nome = formData.get('nome')?.toString().trim() || 'Cliente';
        const email = formData.get('email')?.toString().trim() || '';
        const assunto = formData.get('assunto')?.toString().trim() || 'Contato';
        const mensagem = formData.get('mensagem')?.toString().trim() || '';

        const body = [
            `Nome: ${nome}`,
            `Email: ${email}`,
            '',
            'Mensagem:',
            mensagem
        ].join('\n');

        const mailtoLink = `mailto:viniciusauroratomaz@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        contactForm.reset();
    });
}


