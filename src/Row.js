import Button from "./Button";
import { isVisible } from "./visible-utils";

export default function Row({ nums, buttonClicked }) {
	let buttons = nums.map(n => {
		return <Button
			key={n}
			num={n}
			visible={isVisible(n)}
			onClick={n => buttonClicked(n)}>
		</Button>
	});
	return <div className="row">{buttons}</div>;
}