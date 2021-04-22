(function () {
  'use strict';

  const gallerySwiperSettings = {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },
      1600: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
      },
    },
  };

  const select = document.querySelector('#galleryFilter');
  new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
  });

  let gallerySwiper = new Swiper('#gallerySwiper', gallerySwiperSettings);

}());
