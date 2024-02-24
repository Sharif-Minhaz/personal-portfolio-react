import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { ColorChanger, Routers } from "./components";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Toaster } from "sonner";

function App() {
	return (
		<>
			<Routers />
			{/* scroll to top */}
			<a href="#home" className="d-none">
				<span className="bottom-to-top" title="Back to Top">
					<FontAwesomeIcon icon={faChevronUp} />
				</span>
			</a>
			{/* color changer */}
			<ColorChanger />
			<Toaster />
		</>
	);
}

export default App;
