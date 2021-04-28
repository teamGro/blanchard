let dropDownData = {
  realism: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
  inpressionism: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
  postipressionism: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
  avangard: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
  futurism: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
};

let markup = `
  
`;

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

export default dropDownBtnHandler;
