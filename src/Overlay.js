import { contentsByDay } from "./content";

export default function Overlay({ num, onBack }) {
	let content = contentsByDay[num - 1];
	return <div id="overlay">
		<img id="monkeImg" className="monke-content" src={content.imgSrc}></img>
		<img id="back" src="assets/arrow.png" onClick={onBack}></img>
		<div className="link-container">
			<a href={content.url} target="_blank">{content.text}</a>
		</div>
	</div>
}