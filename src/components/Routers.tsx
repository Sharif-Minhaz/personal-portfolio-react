import { AnimatePresence } from "framer-motion";
import { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import MainLayout from "../pages/layouts/MainLayout";
import RootPage from "../pages/RootPage";
import LegalPage from "./LegalPage";
import ProjectsPage from "./ProjectsPage";
import ProjectDetailPage from "./ProjectDetailPage";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function restorePortfolioScroll(top: number, attempts = 0) {
	const homeIsMounted =
		Boolean(document.querySelector("#home")) &&
		!document.querySelector(".project-catalogue, .case-study, .legal-page");
	const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
	if (homeIsMounted && (top <= maxScroll || attempts >= 180)) {
		window.scrollTo({ top: Math.min(top, maxScroll), behavior: "instant" });
		sessionStorage.removeItem("portfolio-scroll-before-projects");
		return;
	}
	if (attempts < 180) {
		requestAnimationFrame(() => restorePortfolioScroll(top, attempts + 1));
	}
}

function RouteScrollRestoration() {
	const location = useLocation();
	const navigationType = useNavigationType();

	useIsomorphicLayoutEffect(() => {
		if (navigationType === "POP") {
			if (location.pathname === "/") {
				const savedPosition = sessionStorage.getItem("portfolio-scroll-before-projects");
				if (savedPosition !== null) {
					requestAnimationFrame(() => restorePortfolioScroll(Number(savedPosition)));
				}
			}
			return;
		}

		requestAnimationFrame(() => {
			if (location.hash) {
				document
					.getElementById(decodeURIComponent(location.hash.slice(1)))
					?.scrollIntoView({ behavior: "instant" });
				return;
			}

			window.scrollTo({ top: 0, behavior: "instant" });
		});
	}, [location.hash, location.key, navigationType]);

	return null;
}

export default function Routers() {
	return (
		<AnimatePresence mode="wait">
			<RouteScrollRestoration />
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
