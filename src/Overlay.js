export default function Overlay({ isVisible, imgSrc }) {
	return <div id="overlay" className={isVisible ? "visible front" : ""}>
		<img id="monkeImg" className="monke-content" src={imgSrc}></img>
		<img id="back" src="assets/arrow.png"></img>
	</div>
}