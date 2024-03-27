import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
	theme: "",
	changeTheme: () => {},
});

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");

		setTheme(savedTheme ? savedTheme : "dark");
	}, []);
	useEffect(() => {
		localStorage.setItem("theme", theme);
		if (theme === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [theme]);

	const changeTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
