let filenames = [
	"01.mp4",
	"02.mp4",
	"03.mp4",
	"04.mp4",
	"05.mp4",
	"06.mp4",
	"07.mp4",
	"08.mp4",
	"09.mp4",
	"10.mp4",
	"11.mp4",
	"12.mp4",
	"13.mp4",
	"14.mp4",
	"15.mp4",
	"16.mp4",
	"17.mp4",
	"18.mp4",
	"19.mp4",
	"20.mp4",
	"21.mp4",
	"22.mp4",
	"23.mp4",
	"24.mp4"
];

let hasSound = [20];

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
	let isLive = window.location.href.includes("icguy.github.io") && !window.location.href.includes("?icdebug");

	function isVisible(num) {
		if (isLive) {
			return nowMonth === 11 && num <= nowDay;
		}
		else {
			return true;
		}
	}

	function onDayClick(num) {
		if (!isVisible(num))
			return;

		$monkeImg.removeAttr("src");
		setTimeout(() => {
			$monkeImg.attr("src", `assets/days/${getFilename(num)}`);
			$monkeImg.attr("muted", !hasSound.includes(num));
			$monkeImg.attr("playsinline", !hasSound.includes(num));
			$overlay.addClass("visible");
			$overlay.addClass("front");
		});
	}

	function onBackClick() {
		$overlay.removeClass("visible");
		$monkeImg[0].pause();
		$monkeImg[0].currentTime = 0;
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
			let $cell = $(`<button class="${classes.join(" ")}">${dayNum}</button>`);
			$cell.on("click", () => onDayClick(dayNum));
			$row.append($cell);
		}
	}
});