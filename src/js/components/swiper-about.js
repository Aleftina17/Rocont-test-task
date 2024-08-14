import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-about', {
	navigation: {
        nextEl: '.about .swiper-button-next',
        prevEl: '.about .swiper-button-prev',
	},
    slidesPerView: "auto",
    spaceBetween: 8,
});