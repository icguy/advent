import { useState } from "react";
import Overlay from "./Overlay";
import Row from "./Row";

export default function App() {
	let rows = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16],
		[17, 18, 19, 20],
		[21, 22, 23, 24],
	];

	let [overlayNum, setOverlayNum] = useState(undefined);

	let overlay = overlayNum !== undefined ? <Overlay id="overlay" num={overlayNum} onBack={() => setOverlayNum(undefined)}></Overlay> : <></>;

	return <>
		<img id="bg" src="assets/bg.jpg"></img>
		{overlay}
		<div className="main">
			<div className="title">
				<img src="assets/star.png" className="star"></img>
				<span>KITEN BDAY!</span>
				<img src="assets/star.png" className="star"></img>
			</div>
			<div className="days-wrapper">
				{rows.map((r, i) => <Row key={i} nums={r} buttonClicked={num => setOverlayNum(num)}></Row>)}
			</div>
		</div>
	</>;
}