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

  let dropDownData = {
    realism: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
    inpressionism: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
    postipressionism: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
    avangard: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
    futurism: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
  };

  let dropDownBtn = $('.dropdown-nav__btn');
  function dropDownBtnHandler() {
    dropDownBtn.on('click', function () {
      if ($(this).hasClass('dropdown-nav__btn_active')) {
        $(this).removeClass('dropdown-nav__btn_active');
        $(this)
          .parent()
          .find('.dropdown-nav__content')
          .slideUp('100', function () {
            $(this).remove();
          });

        return;
      }
      $(this).addClass('dropdown-nav__btn_active');

      let type = $(this).attr('data-type');
      let dropDownList = `<ul class="dropdown-nav__content" data-simplebar>`;

      dropDownData[type].forEach((item) => {
        dropDownList += `<li class="dropdown-nav__content-item">${item}</li>`;
      });

      dropDownList += `</ul >`;
      $(this).parent().append(dropDownList).find('.dropdown-nav__content').slideDown('100');
    });
  }

  const select = document.querySelector('#galleryFilter');
  new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
  });

  let gallerySwiper = new Swiper('#gallerySwiper', gallerySwiperSettings);
  dropDownBtnHandler();

}());
