$(() => {
	let $wrapper = $(".days-wrapper");

	let nowDay = new Date().getDate();

	for(let i = 0; i < 6; i++) {
		let $row = $(`<div class="row"></div>`);
		$wrapper.append($row);
		for(let j = 0; j < 4; j++) {
			let dayNum = i * 4 + j + 1;
			let classes = ["cell"];
			if(dayNum > nowDay)
				classes.push("hidden");
			if(dayNum == 24)
				classes.push("rainbow");
			let $cell = $(`<div class="${classes.join(" ")}">${dayNum}</div>`);
			$row.append($cell);
		}
	}
});