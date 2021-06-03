import gallerySwiperSettings from "./gallery";
const select = document.querySelector("#galleryFilter");
new Choices(select, {
	searchEnabled: false,
	itemSelectText: "",
	// shouldSort: false,
	// maxItemCount: 3,
	// placeholder: false,
});

let gallerySwiper = new Swiper("#gallerySwiper", gallerySwiperSettings);

import dropDownBtnHandler from "./header";
dropDownBtnHandler();

import catalogs from "./catalog";
const $personList = $("#accordionPersons");
catalogs.showPersonByClick($personList);

const $personListFrench = $("#accordionPersonsFrench");
catalogs.showPersonByClick($personListFrench);

const $personListGerman = $("#accordionPersonsGerman");
catalogs.showPersonByClick($personListGerman);

const $personListRussian = $("#accordionPersonsRussian");
catalogs.showPersonByClick($personListRussian);

const $personListBelgian = $("#accordionPersonsBelgian");
catalogs.showPersonByClick($personListBelgian);

const $catalogNavs = $("#catalogNavs");
catalogs.markActiveTab($catalogNavs);
