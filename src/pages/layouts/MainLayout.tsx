import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

export default function MainLayout() {
	return (
		<>
			<div className="bg-blobs" aria-hidden="true">
				<span className="blob blob-1" />
				<span className="blob blob-2" />
				<span className="blob blob-3" />
			</div>
			<Navbar />
			<Outlet />
		</>
	);
}
