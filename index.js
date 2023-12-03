let filenames = [
	"01.mp4",
	"02.mp4",
	"03.mp4",
	"04.jpg",
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
	"22.jpg",
	"23.mp4",
	"24.mp4"
];

let hasSound = [];

function getFilename(num) {
	return filenames[num - 1];
}

function isVideo(filename) {
	return filename.endsWith(".mp4");
}

$(() => {
	let $wrapper = $(".days-wrapper");
	let $overlay = $("#overlay");
	let $monkeVid = $("#monkeVid");
	let $monkeImg = $("#monkeImg");
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

		let filename = getFilename(num);
		let assetPath = `assets/days/${getFilename(num)}`;
		if (isVideo(filename)) {
			$monkeVid.show();
			$monkeImg.hide();
			$monkeVid.removeAttr("src");
			setTimeout(() => {
				$monkeVid.attr("src", assetPath);
				$monkeVid.attr("muted", !hasSound.includes(num));
				$monkeVid.attr("playsinline", !hasSound.includes(num));
				$overlay.addClass("visible");
				$overlay.addClass("front");
			});
		}
		else {
			$monkeVid.hide();
			$monkeImg.show();
			$monkeImg.attr("src", assetPath);
			$overlay.addClass("visible");
			$overlay.addClass("front");
		}
	}

	function onBackClick() {
		$overlay.removeClass("visible");
		$monkeVid[0].pause();
		$monkeVid[0].currentTime = 0;
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