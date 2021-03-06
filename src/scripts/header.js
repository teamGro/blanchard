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

export default dropDownBtnHandler;
