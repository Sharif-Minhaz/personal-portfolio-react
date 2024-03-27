import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ColorChanger() {
	return (
		<div id="colors">
			<div className="icon">
				<button onClick={() => alert("pressed")}>
					<FontAwesomeIcon icon={faSun} />
				</button>
			</div>
		</div>
	);
}
