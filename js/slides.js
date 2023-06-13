const swiper = new Swiper('.slide__content', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
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
});
