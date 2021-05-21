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
      { name: 'Тинторетто', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Фридрих', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Леонардо', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Верроккьо', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
    ],
    inpressionism: [
      { name: 'Тинторетто', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Фридрих', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Леонардо', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Верроккьо', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
    ],
    postipressionism: [
      { name: 'Тинторетто', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Фридрих', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Леонардо', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Верроккьо', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
    ],
    avangard: [
      { name: 'Тинторетто', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Фридрих', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Леонардо', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Верроккьо', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
    ],
    futurism: [
      { name: 'Тинторетто', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Фридрих', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Леонардо', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
      { name: 'Верроккьо', bg: '../img/dropdownBg.png', cls: 'dropdown-nav__content-item_bg' },
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
          .slideUp('', function () {
            $(this).remove();
          });

        return;
      }

      let mainList = $(this).closest('.dropdown-nav__list');
      if (mainList.find('.dropdown-nav__content').length) {
        mainList.find('.dropdown-nav__btn_active').removeClass('dropdown-nav__btn_active');
        mainList.find('.dropdown-nav__content').slideUp('', function () {
          $(this).remove();
        });
      }

      $(this).addClass('dropdown-nav__btn_active');

      let type = $(this).attr('data-type');
      // if($(this).parent().find('.dropdown-nav__content').length != 0) {
      //   $(this).parent().find('.dropdown-nav__content').slideDown('');
      //   return;
      // }

      let dropDownList = `<ul class="dropdown-nav__content" data-simplebar>`;

      dropDownData[type].forEach((item) => {
        dropDownList += `<li class="dropdown-nav__content-item ${item.cls}" tabindex="0">${item.name}</li>`;
      });

      dropDownList += `</ul >`;
      $(this).parent().append(dropDownList).find('.dropdown-nav__content').slideDown('');
    });

    $(document).on('click', (e) => {
      let target = $(e.target);
      if (target.closest('.dropdown-nav__list').length == 0) {
        $('.dropdown-nav__list').find('.dropdown-nav__btn_active').removeClass('dropdown-nav__btn_active');
        $('.dropdown-nav__list')
          .find('.dropdown-nav__content')
          .slideUp('', function () {
            $(this).remove();
          });
      }
    });
  }

  let catalogs = {};

  const personsData = [
    {
      img: '',
      name: 'Бенедетто ди Биндо',
      date: '2 июня 1448 — 11 января 1494',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
      attr: 'diBindo',
      alt: 'Бенедетто ди Биндо'
    },
    {
      img: '../img/catalog-domeniko.jpg',
      name: 'Доменико Гирландайо',
      date: '2 июня 1448 — 11 января 1494',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
      attr: 'girlandaio',
      alt: 'Доменико Гирландайо'
    },
    {
      img: '../img/catalog-verrokkio.jpg',
      name: 'Андреа Верроккьо',
      date: '2 июня 1448 — 11 января 1494',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
      attr: 'verrokkio',
      alt: 'Андреа Верроккьо'
    }
  ];

  const personElems = {
    personImg: $('.person__img'),
    personName: $('.person__name'),
    personDate: $('.person__date'),
    personStory: $('.person__story')
  };

  function updateMarkup(elems, data) {
    elems.personImg.prop('src', data.img || '');
    elems.personImg.prop('alt', data.alt || '');
    elems.personName.text(data.name);
    elems.personDate.text(data.date);
    elems.personStory.text(data.text);
  }

  catalogs.showPersonByClick = function (list) {
    list.on('click', function (e) {
      let $target = $(e.target);
      if ($target.prop('tagName') != 'LI') return;

      let dataID = $target.attr('data-id');
      let person = personsData.filter(item => {
        return item.attr == dataID;
      });

      console.log(person);
      updateMarkup(personElems, person[0]);
    });
  };

  catalogs.markActiveTab = function (list) {
    list.on('click', function (e) {
      let target = $(e.target);

      if (target.prop('tagName') != 'BUTTON') return;

      if (target.hasClass('catalog__nav-btn_active')) return;

      target.closest('ul').find('.catalog__nav-btn_active').removeClass('catalog__nav-btn_active');
      target.addClass('catalog__nav-btn_active');
    });
  };

  const select = document.querySelector("#galleryFilter");
  new Choices(select, {
  	searchEnabled: false,
  	itemSelectText: "",
  	// shouldSort: false,
  	// maxItemCount: 3,
  	// placeholder: false,
  });

  let gallerySwiper = new Swiper("#gallerySwiper", gallerySwiperSettings);
  dropDownBtnHandler();
  const $personList = $("#accordionPersons");
  catalogs.showPersonByClick($personList);
  const $catalogNavs = $("#catalogNavs");
  catalogs.markActiveTab($catalogNavs);

}());
