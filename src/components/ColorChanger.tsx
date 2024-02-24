import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ColorChanger() {
	return (
		<div id="colors">
			<div className="icon">
				<button onClick={() => alert("pressed")}>
					<FontAwesomeIcon icon={faCog} />
				</button>
			</div>
			<div className="other-colors">
				<h4>Choose Color</h4>
				<div className="four-color">
					<span data-color="red" id="red"></span>
					<span data-color="pink" id="pink"></span>
					<span data-color="blue" id="blue"></span>
					<span data-color="cyan" id="cyan"></span>
				</div>
				<div className="four-color">
					<span data-color="purple" id="purple"></span>
					<span data-color="green" id="green"></span>
					<span data-color="lightGreen" id="lightGreen"></span>
					<span data-color="yellow" id="yellow"></span>
				</div>
				<div title="Mode" id="toggler">
					<input id="toggle" type="checkbox" checked />
				</div>
				<div id="default" className="default">
					Default Color
				</div>
			</div>
		</div>
	);
}
