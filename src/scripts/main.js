import gallerySwiperSettings from './gallery';
const select = document.querySelector('#galleryFilter');
new Choices(select, {
	searchEnabled: false,
	itemSelectText: '',
	// shouldSort: false,
	// maxItemCount: 3,
	// placeholder: false,
});

let gallerySwiper = new Swiper('#gallerySwiper', gallerySwiperSettings);

import dropDownBtnHandler from './header';
dropDownBtnHandler();

import catalogs from './catalog';
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

//
import showEvents from './cards';
const $eventsBtn = $('#eventsBtn');
let eventsSlider = null;
showEvents($eventsBtn);
// showOrHideEvents($('.events__item'), 1, 1024);
// $(window).on('resize', () => {
//   showOrHideEvents($('.events__item'), 2, 1024);
// });
