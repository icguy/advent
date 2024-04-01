export default function Button({ num, visible, onClick }) {
	let classes = ["cell"];
	// if (num === 24) classes.push("rainbow");
	if (!visible) classes.push("hidden");
	return <button className={classes.join(" ")} onClick={() => onClick(num)}>{num}</button>;
}