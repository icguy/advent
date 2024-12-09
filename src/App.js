import { useState } from "react";
import Overlay from "./Overlay";
import Row from "./Row";
import star from "./assets/star.png";
import background from "./assets/bg.jpg";

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
		<img id="bg" src={background}></img>
		{overlay}
		<div className="main">
			<div className="title">
				<img src={star} className="star"></img>
				<span>BLUREH XMOS!</span>
				<img src={star} className="star"></img>
			</div>
			<div className="days-wrapper">
				{rows.map((r, i) => <Row key={i} nums={r} buttonClicked={num => setOverlayNum(num)}></Row>)}
			</div>
		</div>
	</>;
}