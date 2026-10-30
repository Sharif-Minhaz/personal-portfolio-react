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
	const [theme, setTheme] = useState("light");
	const [active, setActive] = useState("#home");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");

		setTheme(savedTheme ? savedTheme : "light");
	}, []);

	useEffect(() => {
		document.body.classList.toggle("dark", theme === "dark");
	}, [theme]);

	// persist only on a real toggle, so a remount cannot overwrite the saved choice with the default
	const changeTheme = () => {
		const next = theme === "dark" ? "light" : "dark";
		localStorage.setItem("theme", next);
		setTheme(next);
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
