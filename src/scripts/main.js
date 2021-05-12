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
