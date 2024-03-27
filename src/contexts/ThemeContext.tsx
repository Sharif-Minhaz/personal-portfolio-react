import { createContext, useEffect, useState } from "react";

interface ThemeContextProps {
	active: string;
	theme: string;
	changeTheme: () => void;
	handleActiveLink: (link: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	active: "",
	theme: "",
	changeTheme: () => {},
	handleActiveLink: () => {},
});

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState("dark");
	const [active, setActive] = useState("#home");

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

	const handleActiveLink = (link: string) => {
		setActive(link);
	};

	return (
		<ThemeContext.Provider
			value={{
				active,
				theme,
				changeTheme,
				handleActiveLink,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
