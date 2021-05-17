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

function updateMarkup(elems, data){
  elems.personImg.prop('src', data.img || '') ;
  elems.personImg.prop('alt', data.alt || '') ;
  elems.personName.text(data.name);
  elems.personDate.text(data.date);
  elems.personStory.text(data.text)
}

function showPersonByClick(list){
  list.on('click', function(e){
    let $target = $(e.target);
    if($target.prop('tagName') != 'LI') return;

    let dataID = $target.attr('data-id');
    let person = personsData.filter( item => {
      return item.attr == dataID;
    });

    console.log(person);
    updateMarkup(personElems, person[0]);
  })
}

export default showPersonByClick;