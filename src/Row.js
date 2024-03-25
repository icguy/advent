import Button from "./Button";

export default function Row({ nums }) {
	return <div className="row">
		{nums.map(n => <Button key={n} num={n}></Button>)}
	</div>;
}