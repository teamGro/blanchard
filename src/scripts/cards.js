function showEvents(btn) {
  // if ($(window).width() < 767) {
  //     btn.addClass('events__btn_hidden');
  //     $('.events__item_hidden').removeClass('visually-hidden');
  //     return;
  // }
  btn.on('click', function () {

      //$('.events__item_hidden').slideDown();
      $('.events__item_hidden').removeClass('visually-hidden');
      $(this).addClass('events__btn_hidden');
  })
}

export default showEvents;