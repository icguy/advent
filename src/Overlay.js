import { contentsByDay } from "./content";
import arrow from "./assets/arrow.png";

export default function Overlay({ num, onBack }) {
	let content = contentsByDay[num - 1];
	function handleImgClick(e) {
		let width = e.target.width;
		let x = e.clientX;
		if(x < width / 4 && num > 1)
			onBack(num - 1);
		else if (x > width * 3 / 4 && num < contentsByDay.length)
			onBack(num + 1);
	}
	return <div id="overlay">
		<img id="monkeImg" className="monke-content" src={content.imgSrc} onClick={e => handleImgClick(e)}></img>
		<img id="back" src={arrow} onClick={e => { onBack(); e.stopPropagation(); }}></img>
	</div>
}