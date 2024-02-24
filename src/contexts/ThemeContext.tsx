import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
	theme: "",
	mode: "",
	changeTheme: () => {},
	changeMode: () => {},
});

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState("red");
	const [mode, setMode] = useState("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const savedMode = localStorage.getItem("mode");

		setTheme(savedTheme ? savedTheme : "light");
		setMode(savedMode ? savedMode : "en");
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		if (theme === "red") {
			document.body.classList.add("red");
		} else {
			document.body.classList.remove("blue");
		}
	}, [theme]);

	useEffect(() => {
		localStorage.setItem("mode", mode);
		if (mode === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [mode]);

	const changeMode = () => {
		setMode(mode === "dark" ? "light" : "dark");
	};

	const changeTheme = () => {
		setTheme(theme === "red" ? "blue" : "red");
	};

	return (
		<ThemeContext.Provider
			value={{
				mode,
				theme,
				changeTheme,
				changeMode,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
