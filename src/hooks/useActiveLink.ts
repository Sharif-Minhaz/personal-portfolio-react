import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useInView } from "react-intersection-observer";

export function useActiveLink(id: string) {
	const { handleActiveLink } = useContext(ThemeContext);
	const { ref, inView } = useInView({
		rootMargin: "-50% 0px -49.9% 0px",
		threshold: 0,
	});

	useEffect(() => {
		if (inView) {
			handleActiveLink(id);
		}
	}, [inView, handleActiveLink, id]);

	return { ref };
}
