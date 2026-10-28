import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";

const container = document.getElementById("root")!;
const app = (
	<StrictMode>
		<BrowserRouter>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</BrowserRouter>
	</StrictMode>
);

// production HTML is prerendered (scripts/prerender.mjs); the dev server serves an empty root
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
