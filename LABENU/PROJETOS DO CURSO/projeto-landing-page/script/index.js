const abreMenu = document.querySelector('#menuBurguer');

abreMenu.addEventListener('click', () => {
    const navbar = document.querySelector('#navbar');
    navbar.classList.toggle('active');
    abreMenu.classList.toggle('ativo');
});

abreConta.addEventListener('click', () => {
    overlay.classList.add('active');
    conta.classList.add('active');
})


fechaConta.addEventListener('click', () => {
    overlay.classList.remove('active');
    conta.classList.remove('active');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    conta.classList.remove('active');
})