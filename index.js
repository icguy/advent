$(() => {
	let $wrapper = $(".days-wrapper");
	let $monke = $("#monke");
	let $monkeImg = $monke.children("img");

	let nowDay = new Date().getDate();
	let isLive = window.location.href.includes("icguy.github.io");

	function isVisible(num) {
		return isLive
			? num <= nowDay
			: num !== 10;
	}

	function onDayClick(num) {
		if (!isVisible(num))
			return;
		$monkeImg.attr("src", "assets/a.jpg");
		$monke.addClass("visible");
	}

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
			$cell.on("click", () => { onDayClick(dayNum) });
			$row.append($cell);
		}
	}
});