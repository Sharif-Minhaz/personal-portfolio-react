import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Footer, Heading } from ".";
import { basicInfo, legalPages } from "../constants";

export default function LegalPage({ page }: { page: keyof typeof legalPages }) {
	const { title, updated, sections } = legalPages[page];

	useEffect(() => {
		// footer links are clicked from the bottom of the home page
		window.scrollTo(0, 0);
		const prevTitle = document.title;
		document.title = `${title} | ${basicInfo.name}`;
		return () => {
			document.title = prevTitle;
		};
	}, [title]);

	return (
		<main className="legal-page">
			<section className="sectionL section-part">
				<div className="container">
					<div className="row padding">
						<div className="col-12">
							<Link to="/" className="legal-back">
								<FontAwesomeIcon icon={faArrowLeft} /> Back to Home
							</Link>
						</div>
						<Heading baseTitle={title.toUpperCase()} title={title} />
						<div className="col-12">
							<div className="glass-card legal-content">
								<p className="legal-updated">Last updated: {updated}</p>
								{sections.map((section) => (
									<div key={section.heading}>
										<h3>{section.heading}</h3>
										{section.body.map((text) => (
											<p key={text}>{text}</p>
										))}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
