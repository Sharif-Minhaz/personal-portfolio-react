import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useInView } from "react-intersection-observer";

export function useActiveLink(id: string) {
	const { handleActiveLink } = useContext(ThemeContext);
	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			handleActiveLink(id);
		}
	}, [inView, handleActiveLink, id]);

	return { ref };
}
