import { contentsByDay } from "./content";
import arrow from "./assets/arrow.png";

export default function Overlay({ num, onBack }) {
	let content = contentsByDay[num - 1];
	return <div id="overlay">
		<img id="monkeImg" className="monke-content" src={content.imgSrc}></img>
		<img id="back" src={arrow} onClick={onBack}></img>
	</div>
}