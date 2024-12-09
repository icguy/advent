let now = new Date();
let nowDay = new Date().getDate();
let liveAfter = new Date('2024-01-01T00:00:00+01:00');

const isGithub = window.location.href.includes("icguy.github.io");
const isDebug = window.location.href.includes("?icdebug");
const forceLive = window.location.href.includes("?live");
let isLive = (isGithub && !isDebug) || forceLive;

export function isVisible(num) {
	if (isLive) {
		return now >= liveAfter && num <= nowDay;
	}
	else {
		return true;
	}
}