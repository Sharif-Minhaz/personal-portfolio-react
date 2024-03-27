import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ColorChanger() {
	const { changeTheme, theme } = useContext(ThemeContext);
	return (
		<div id="colors">
			<div className="icon">
				<button onClick={changeTheme}>
					{theme === "dark" ? (
						<FontAwesomeIcon icon={faSun} />
					) : (
						<FontAwesomeIcon icon={faMoon} />
					)}
				</button>
			</div>
		</div>
	);
}
