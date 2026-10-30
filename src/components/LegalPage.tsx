import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Footer } from ".";
import { basicInfo, legalPages } from "../constants";

export default function LegalPage({ page }: { page: keyof typeof legalPages }) {
	const { title, updated, sections } = legalPages[page];

	useEffect(() => {
		// footer links are clicked from the bottom of the home page
		window.scrollTo(0, 0);
		const prevTitle = document.title;
		document.title = `${title} | ${basicInfo.name}`;
		// index.html canonical points to home; without this Google treats the page as a duplicate
		const canonical = document.querySelector('link[rel="canonical"]');
		const prevCanonical = canonical?.getAttribute("href");
		canonical?.setAttribute("href", `https://www.minhaz.bond/${page}`);
		return () => {
			document.title = prevTitle;
			if (prevCanonical) canonical?.setAttribute("href", prevCanonical);
		};
	}, [title, page]);

	return (
		<>
			<main id="main" className="page legal-page">
				<div className="container">
					<Link to="/" className="link page__back">
						<FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to Home
					</Link>
					<article className="legal">
						<h1>{title}</h1>
						<p className="legal__updated">Last updated: {updated}</p>
						{sections.map((section) => (
							<section key={section.heading}>
								<h2>{section.heading}</h2>
								{section.body.map((text) => (
									<p key={text}>{text}</p>
								))}
							</section>
						))}
					</article>
				</div>
			</main>
			<Footer />
		</>
	);
}
