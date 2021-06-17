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

  catalogs.personsData = [
  	// {
  	// 	img: "",
  	// 	name: "Бенедетто ди Биндо",
  	// 	date: "2 июня 1448 — 11 января 1494",
  	// 	text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  	// 	attr: "diBindo",
  	// 	alt: "Бенедетто ди Биндо",
  	// },
  	{
  		img: './img/catalog-domeniko.jpg',
  		name: 'Доменико Гирландайо',
  		date: '2 июня 1448 — 11 января 1494',
  		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  		attr: 'girlandaio',
  		alt: 'Доменико Гирландайо',
  	},
  	{
  		img: './img/catalog-verrokkio.jpg',
  		name: 'Андреа Верроккьо',
  		date: '2 июня 1448 — 11 января 1494',
  		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  		attr: 'verrokkio',
  		alt: 'Андреа Верроккьо',
  	},
  	{
  		img: './img/french-01.jpg',
  		name: 'Дюмустье, Жоффруа',
  		date: '2 июня 1448 — 11 января 1494',
  		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  		attr: 'joffrua',
  		alt: 'Дюмустье, Жоффруа',
  	},
  	{
  		img: './img/french-02.png',
  		name: 'Косм II Дюмустье',
  		date: ' 1545 — 1605',
  		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  		attr: 'dumustie',
  		alt: 'Косм II Дюмустье',
  	},
  	{
  		img: './img/german-01.jpg',
  		name: 'А́льбрехт Дю́рер',
  		date: ' 1545 — 1605',
  		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  		attr: 'durer',
  		alt: 'А́льбрехт Дю́рер',
  	},
  	{
  		img: './img/german-02.jpg',
  		name: 'Эльсхаймер, Адам',
  		date: ' 1545 — 1605',
  		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  		attr: 'adam',
  		alt: 'Эльсхаймер, Адам',
  	},
  	{
  		img: './img/russian-01.jpg',
  		name: 'Иван Никитич Никитин',
  		date: ' 1545 — 1605',
  		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  		attr: 'nikitin',
  		alt: 'Иван Никитич Никитин',
  	},
  	{
  		img: './img/russian-02.jpg',
  		name: 'Иван Константинович Айвазовский',
  		date: ' 1545 — 1605',
  		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  		attr: 'aivaz',
  		alt: 'Иван Константинович Айвазовский',
  	},
  	{
  		img: './img/belgian-01.jpg',
  		name: 'Антонис (Антон) ван Дейк',
  		date: ' 1545 — 1605',
  		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  		attr: 'vanDeyk',
  		alt: 'Антонис (Антон) ван Дейк',
  	},
  	{
  		img: './img/belgian-02.jpg',
  		name: 'Галле, Луи',
  		date: ' 1545 — 1605',
  		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
  		attr: 'galle',
  		alt: 'Галле, Луи',
  	},
  ];

  catalogs.personElems = {
  	personImg: $('.person__img'),
  	personName: $('.person__name'),
  	personDate: $('.person__date'),
  	personStory: $('.person__story'),
  };

  catalogs.updateMarkup = function (elems, data) {
  	if (!data) {
  		data = catalogs.personsData[Math.floor(Math.random() * catalogs.personsData.length)];
  	}
  	elems.personImg.prop('src', data.img || '');
  	elems.personImg.prop('alt', data.alt || '');
  	elems.personName.text(data.name);
  	elems.personDate.text(data.date);
  	elems.personStory.text(data.text);
  };

  catalogs.showPersonByClick = function (list) {
  	list.on('click', function (e) {
  		let $target = $(e.target);
  		if ($target.prop('tagName') != 'BUTTON' || $target.hasClass('accordion-button')) return;

  		let dataID = $target.attr('data-id');
  		let person = catalogs.personsData.filter((item) => {
  			return item.attr == dataID;
  		});

  		catalogs.updateMarkup(catalogs.personElems, person[0]);
  		list.find('.catalog__item-text_active').removeClass('catalog__item-text_active');
  		$target.first().addClass('catalog__item-text_active');
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

  const select = document.querySelector('#galleryFilter');
  new Choices(select, {
  	searchEnabled: false,
  	itemSelectText: '',
  	// shouldSort: false,
  	// maxItemCount: 3,
  	// placeholder: false,
  });

  let gallerySwiper = new Swiper('#gallerySwiper', gallerySwiperSettings);
  dropDownBtnHandler();
  const $personList = $('#accordionPersons');
  catalogs.showPersonByClick($personList);

  const $personListFrench = $('#accordionPersonsFrench');
  catalogs.showPersonByClick($personListFrench);

  const $personListGerman = $('#accordionPersonsGerman');
  catalogs.showPersonByClick($personListGerman);

  const $personListRussian = $('#accordionPersonsRussian');
  catalogs.showPersonByClick($personListRussian);

  const $personListBelgian = $('#accordionPersonsBelgian');
  catalogs.showPersonByClick($personListBelgian);

  const $catalogNavs = $('#catalogNavs');
  catalogs.markActiveTab($catalogNavs);

  $('.catalog__nav-btn').each(function () {
  	$(this).on('click', function (e) {
  		let target = $(e.target);

  		let btnID = $(target).attr('id');
  		let tabContainerContent = $(`[data-target=${btnID}]`).find('.catalog__accordion');
  		let activePerson = tabContainerContent.find('.catalog__item-text_active').attr('data-id');
  		let person = catalogs.personsData.filter((item) => {
  			return item.attr == activePerson;
  		});
  		catalogs.updateMarkup(catalogs.personElems, person[0]);
  	});
  });

}());
