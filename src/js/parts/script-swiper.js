import Swiper from 'swiper/bundle';

const albumsSwiper = new Swiper('.albums-swiper', {
    navigation: {
        nextEl: '.albums-wrapper-next-arrow',
        prevEl: '.albums-wrapper-prev-arrow',
    },
    loop: true,
    slidesPerView: 1,

    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 80
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 100
        }
    }
});

const gallerySwiper = new Swiper('.gallery-swiper', {
    slidesPerView: 'auto',
    loop: true,
});

const videoSwiper = new Swiper('.video-swiper', {
    navigation: {
        nextEl: '.video-wrapper-next-arrow',
        prevEl: '.video-wrapper-prev-arrow',
    },
    loop: true,
});
