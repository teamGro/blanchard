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
    realism: [
      { name: 'Тинторетто', bg: '../img/dropdownBg.png' },
      { name: 'Фридрих', bg: '../img/dropdownBg.png' },
      { name: 'Леонардо', bg: '../img/dropdownBg.png' },
      { name: 'Верроккьо', bg: '../img/dropdownBg.png' },
    ],
    inpressionism: [
      { name: 'Тинторетто', bg: '../img/dropdownBg.png' },
      { name: 'Фридрих', bg: '../img/dropdownBg.png' },
      { name: 'Леонардо', bg: '../img/dropdownBg.png' },
      { name: 'Верроккьо', bg: '../img/dropdownBg.png' },
    ],
    postipressionism: [
      { name: 'Тинторетто', bg: '../img/dropdownBg.png' },
      { name: 'Фридрих', bg: '../img/dropdownBg.png' },
      { name: 'Леонардо', bg: '../img/dropdownBg.png' },
      { name: 'Верроккьо', bg: '../img/dropdownBg.png' },
    ],
    avangard: [
      { name: 'Тинторетто', bg: '../img/dropdownBg.png' },
      { name: 'Фридрих', bg: '../img/dropdownBg.png' },
      { name: 'Леонардо', bg: '../img/dropdownBg.png' },
      { name: 'Верроккьо', bg: '../img/dropdownBg.png' },
    ],
    futurism: [
      { name: 'Тинторетто', bg: '../img/dropdownBg.png' },
      { name: 'Фридрих', bg: '../img/dropdownBg.png' },
      { name: 'Леонардо', bg: '../img/dropdownBg.png' },
      { name: 'Верроккьо', bg: '../img/dropdownBg.png' },
    ],
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

      let mainList = $(this).closest('.dropdown-nav__list');
      if (mainList.find('.dropdown-nav__content').length) {
        mainList.find('.dropdown-nav__btn_active').removeClass('dropdown-nav__btn_active');
        mainList.find('.dropdown-nav__content').slideUp('100', function () {
          $(this).remove();
        });
      }

      $(this).addClass('dropdown-nav__btn_active');

      let type = $(this).attr('data-type');
      let dropDownList = `<ul class="dropdown-nav__content" data-simplebar>`;

      dropDownData[type].forEach((item) => {
        dropDownList += `<li class="dropdown-nav__content-item" style="background-image: url(${item.bg})" tabindex="0">${item.name}</li>`;
      });

      dropDownList += `</ul >`;
      $(this).parent().append(dropDownList).find('.dropdown-nav__content').slideDown('100');
    });

    $(document).on('click', (e) => {
      let target = $(e.target);
      if (target.closest('.dropdown-nav__list').length == 0) {
        $('.dropdown-nav__list').find('.dropdown-nav__btn_active').removeClass('dropdown-nav__btn_active');
        $('.dropdown-nav__list')
          .find('.dropdown-nav__content')
          .slideUp('100', function () {
            $(this).remove();
          });
      }
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
