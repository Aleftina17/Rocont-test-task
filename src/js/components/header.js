const burgerBtn = document.querySelector('.btn--burger')
const mobileMenu = document.querySelector('.header__menu-mob')
const body = document.querySelector('body')

document.addEventListener("DOMContentLoaded", function() {
    if (window.matchMedia("(max-width: 640px)").matches) {
        let header = document.querySelector('.header');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('close')
    mobileMenu.classList.toggle('open')
    body.classList.toggle('locked')
})