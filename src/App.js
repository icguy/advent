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

	return <>
		<img id="bg" src="assets/bg.jpg"></img>
		<Overlay id="overlay"></Overlay>
		<div className="main">
			<div className="title">
				<img src="assets/star.png" className="star"></img>
				<span>KITEN ADVENT!</span>
				<img src="assets/star.png" className="star"></img>
			</div>
			<div className="days-wrapper">
				{rows.map((r, i) => <Row key={i} nums={r}></Row>)}
			</div>
		</div>
	</>;
}