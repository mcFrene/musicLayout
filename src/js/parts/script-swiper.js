import Swiper from 'swiper/bundle';

const albumsSwiper = new Swiper('.albums-swiper', {
    navigation: {
        nextEl: '.albums-wrapper-next-arrow',
        prevEl: '.albums-wrapper-prev-arrow',
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 130,
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
