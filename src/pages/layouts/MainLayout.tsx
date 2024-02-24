import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components";

export default function MainLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}
