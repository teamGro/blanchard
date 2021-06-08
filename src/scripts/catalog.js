let catalogs = {};

const personsData = [
	// {
	// 	img: "",
	// 	name: "Бенедетто ди Биндо",
	// 	date: "2 июня 1448 — 11 января 1494",
	// 	text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
	// 	attr: "diBindo",
	// 	alt: "Бенедетто ди Биндо",
	// },
	{
		img: "../img/catalog-domeniko.jpg",
		name: "Доменико Гирландайо",
		date: "2 июня 1448 — 11 января 1494",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
		attr: "girlandaio",
		alt: "Доменико Гирландайо",
	},
	{
		img: "../img/catalog-verrokkio.jpg",
		name: "Андреа Верроккьо",
		date: "2 июня 1448 — 11 января 1494",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
		attr: "verrokkio",
		alt: "Андреа Верроккьо",
	},
	{
		img: "../img/french-01.jpg",
		name: "Дюмустье, Жоффруа",
		date: "2 июня 1448 — 11 января 1494",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
		attr: "joffrua",
		alt: "Дюмустье, Жоффруа",
	},
	{
		img: "../img/french-02.png",
		name: "Косм II Дюмустье",
		date: " 1545 — 1605",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
		attr: "dumustie",
		alt: "Косм II Дюмустье",
	},
	{
		img: "../img/german-01.jpg",
		name: "А́льбрехт Дю́рер",
		date: " 1545 — 1605",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
		attr: "durer",
		alt: "А́льбрехт Дю́рер",
	},
	{
		img: "../img/german-02.jpg",
		name: "Эльсхаймер, Адам",
		date: " 1545 — 1605",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
		attr: "adam",
		alt: "Эльсхаймер, Адам",
	},
	{
		img: "../img/russian-01.jpg",
		name: "Иван Никитич Никитин",
		date: " 1545 — 1605",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
		attr: "nikitin",
		alt: "Иван Никитич Никитин",
	},
	{
		img: "../img/russian-02.jpg",
		name: "Иван Константинович Айвазовский",
		date: " 1545 — 1605",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
		attr: "aivaz",
		alt: "Иван Константинович Айвазовский",
	},
	{
		img: "../img/belgian-01.jpg",
		name: "Антонис (Антон) ван Дейк",
		date: " 1545 — 1605",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
		attr: "vanDeyk",
		alt: "Антонис (Антон) ван Дейк",
	},
	{
		img: "../img/belgian-02.jpg",
		name: "Галле, Луи",
		date: " 1545 — 1605",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex maiores necessitatibus accusamus deleniti magni quis incidunt corrupti voluptatibus nemo facere at unde, nobis non mollitia optio reprehenderit deserunt velit repudiandae nam! Id tenetur voluptatem iste saepe porro repellendus similique atque laboriosam officiis obcaecati? Dolorem illo iure dolore laborum praesentium atque necessitatibus similique labore ullam. Necessitatibus ad molestiae, itaque molestias, ut quas nam fuga aut delectus nostrum, illum voluptates reprehenderit commodi animi consequuntur debitis suscipit! Consequatur repellendus qui rem deserunt quasi fugiat consequuntur officiis ipsa?`,
		attr: "galle",
		alt: "Галле, Луи",
	},
];

const personElems = {
	personImg: $(".person__img"),
	personName: $(".person__name"),
	personDate: $(".person__date"),
	personStory: $(".person__story"),
};

function updateMarkup(elems, data) {
	if (!data) {
		data = personsData[Math.floor(Math.random() * personsData.length)];
	}

	elems.personImg.prop("src", data.img || "");
	elems.personImg.prop("alt", data.alt || "");
	elems.personName.text(data.name);
	elems.personDate.text(data.date);
	elems.personStory.text(data.text);
}

catalogs.showPersonByClick = function (list) {
	list.on("click", function (e) {
		let $target = $(e.target);
		if ($target.prop("tagName") != "BUTTON" || $target.hasClass("accordion-button")) return;

		$target = $target.parent();
		let dataID = $target.attr("data-id");
		let person = personsData.filter((item) => {
			return item.attr == dataID;
		});

		updateMarkup(personElems, person[0]);
		list.find(".catalog__item-text_active").removeClass("catalog__item-text_active");
		$target.first().addClass("catalog__item-text_active");
	});
};

catalogs.markActiveTab = function (list) {
	list.on("click", function (e) {
		let target = $(e.target);

		if (target.prop("tagName") != "BUTTON") return;

		if (target.hasClass("catalog__nav-btn_active")) return;

		target.closest("ul").find(".catalog__nav-btn_active").removeClass("catalog__nav-btn_active");
		target.addClass("catalog__nav-btn_active");
	});
};

export default catalogs;
