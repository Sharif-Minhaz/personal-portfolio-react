import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/layouts/MainLayout";
import RootPage from "../pages/RootPage";
import LegalPage from "./LegalPage";
import ProjectsPage from "./ProjectsPage";
import ProjectDetailPage from "./ProjectDetailPage";

export default function Routers() {
	return (
		<AnimatePresence mode="wait">
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<RootPage />} />
					<Route path="projects" element={<ProjectsPage />} />
					<Route path="projects/:slug" element={<ProjectDetailPage />} />
				</Route>
				<Route path="/terms" element={<LegalPage page="terms" />} />
				<Route path="/disclaimer" element={<LegalPage page="disclaimer" />} />
			</Routes>
		</AnimatePresence>
	);
}
