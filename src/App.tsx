import "./App.css";
import { ColorChanger, Routers } from "./components";

function App() {
	return (
		<>
			<Routers />
			{/* scroll to top */}
			<a href="#home" className="d-none">
				<span className="bottom-to-top" title="Back to Top">
					<i className="fas fa-chevron-up"></i>
				</span>
			</a>
			{/* color changer */}
			<ColorChanger />
		</>
	);
}

export default App;
