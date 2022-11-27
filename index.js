let filenames = [
	"01.jpg",
	"02.jpg",
	"03.jpg",
	"04.jpg",
	"05.jpg",
	"06.jpg",
	"07.jpg",
	"08.jpg",
	"09.jpg",
	"10.jpg",
	"11.jpg",
	"12.jpg",
	"13.jpg",
	"14.jpg",
	"15.jpg",
	"16.jpg",
	"17.jpg",
	"18.jpg",
	"19.jpg",
	"20.jpg",
	"21.jpg",
	"22.jpg",
	"23.gif",
	"24.jpg"
];

function getFilename(num) {
	return filenames[num - 1];
}

$(() => {
	let $wrapper = $(".days-wrapper");
	let $overlay = $("#overlay");
	let $monkeImg = $("#monke");
	let $backArrow = $("#back");

	let nowDay = new Date().getDate();
	let nowMonth = new Date().getMonth();
	let isLive = window.location.href.includes("icguy.github.io");

	function isVisible(num) {
		if (isLive) {
			return nowMonth === 11 && num <= nowDay;
		}
		else {
			return num !== 10;
		}
	}

	function onDayClick(num) {
		if (!isVisible(num))
			return;

		$monkeImg.removeAttr("src");
		setTimeout(() => {
			$monkeImg.attr("src", `assets/days/${getFilename(num)}`);
			$overlay.addClass("visible");
			$overlay.addClass("front");
		});
	}

	function onBackClick() {
		$overlay.removeClass("visible");
		setTimeout(() => {
			$overlay.removeClass("front");
		}, 400);
	}

	$backArrow.on("click", () => onBackClick());

	for (let i = 0; i < 6; i++) {
		let $row = $(`<div class="row"></div>`);
		$wrapper.append($row);
		for (let j = 0; j < 4; j++) {
			let dayNum = i * 4 + j + 1;
			let classes = ["cell"];
			if (!isVisible(dayNum))
				classes.push("hidden");
			if (dayNum == 24)
				classes.push("rainbow");
			let $cell = $(`<div class="${classes.join(" ")}">${dayNum}</div>`);
			$cell.on("click", () => onDayClick(dayNum));
			$row.append($cell);
		}
	}
});