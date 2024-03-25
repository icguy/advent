export default function Button({num}) {
	return <button className={"cell " + (num === 24 ? "rainbow" : "")}>{num}</button>;
}