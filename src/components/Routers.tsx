import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/layouts/MainLayout";
import RootPage from "../pages/RootPage";
import LegalPage from "./LegalPage";

export default function Routers() {
	return (
		<AnimatePresence mode="wait">
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<RootPage />} />
				</Route>
				<Route path="/terms" element={<LegalPage page="terms" />} />
				<Route path="/disclaimer" element={<LegalPage page="disclaimer" />} />
			</Routes>
		</AnimatePresence>
	);
}
