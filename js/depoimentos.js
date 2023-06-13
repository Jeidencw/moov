const swiperDepoimentos = new Swiper('.slide__depoimentos', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    keyboard: {
        enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0:{
            slidesPerView: 1,
            slidesPerGroup: 1,
            autoplay: {
                delay: 2000,
            },
        },
        520:{
            slidesPerView: 2,
            slidesPerGroup: 2, 
        },
        950:{
            slidesPerView: 3, 
        },
    },
});
