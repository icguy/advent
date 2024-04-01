let now = new Date();
let nowDay = new Date().getDate();
let liveAfter = new Date('2024-01-01T00:00:00+01:00');
let isLive = (window.location.href.includes("icguy.github.io") && !window.location.href.includes("?icdebug")) || window.location.href.includes("?live");

export function isVisible(num) {
	if (isLive) {
		return now >= liveAfter && num <= nowDay;
	}
	else {
		return true;
	}
}