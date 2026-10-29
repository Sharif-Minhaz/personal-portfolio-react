import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";

export { legalPages, basicInfo, projects } from "./constants";

export function render(url: string) {
	return renderToString(
		<StrictMode>
			<StaticRouter location={url}>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</StaticRouter>
		</StrictMode>,
	);
}
