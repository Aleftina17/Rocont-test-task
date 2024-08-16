import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-about', {
	navigation: {
		nextEl: '.about .swiper-button-next',
		prevEl: '.about .swiper-button-prev',
	},
	spaceBetween: 8,
	slidesPerGroup: 1,
	slidesPerView: 1.3,
	loop: true,
	centeredSlides: false,
	breakpoints: {
		479: {
			slidesPerView: 1.9,
		},
		639: {
			slidesPerView: 2.5,
		},
		759: {
			loop: false,
			centeredSlides: true,
			slidesPerView: 'auto',
		},
	},
});
