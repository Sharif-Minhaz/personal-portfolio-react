import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../constants";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useLocation } from "react-router-dom";

interface ILink {
	id: string;
	title: string;
	icon: IconDefinition;
}

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const { active } = useContext(ThemeContext);
	const { pathname } = useLocation();
	const getSectionHref = (id: string) => (pathname === "/" ? id : `/${id}`);

	// the wordmark carries Home and the end button carries Contact; the rest sit in the bar
	const home = navLinks.find((link: ILink) => link.id === "#home");
	const contact = navLinks.find((link: ILink) => link.id === "#contact");
	const links = navLinks.filter((link: ILink) => link !== home && link !== contact);

	return (
		<header className="nav">
			<a className="skip" href="#main">
				Skip to content
			</a>
			<div className="container">
				<nav id="spy" className="nav__bar crop" aria-label="Sections">
					<a
						className="nav__mark"
						href={getSectionHref(home?.id ?? "#home")}
						aria-label="Sharif Md. Minhaz, back to the top"
					>
						<span id="first-part-name">Sharif </span>Md. Minhaz
					</a>
					<ul
						id="select-nav"
						className={`nav__links ${open ? "links-secondary-res" : ""}`}
					>
						{links.map((link: ILink) => (
							<li key={link.id}>
								<a
									className={`nav__link ${active === link.id ? "active-link" : ""}`}
									href={getSectionHref(link.id)}
									aria-current={active === link.id ? "true" : undefined}
									onClick={() => setOpen(false)}
								>
									{link.title}
								</a>
							</li>
						))}
					</ul>
					<div className="nav__end">
						{contact && (
							<a
								className={`btn btn--small btn--contact ${
									active === contact.id ? "active-link" : ""
								}`}
								href={getSectionHref(contact.id)}
							>
								{contact.title}
							</a>
						)}
						<button
							type="button"
							className="btn btn--small nav__toggle"
							id="nav-expand"
							aria-expanded={open}
							aria-controls="select-nav"
							onClick={() => setOpen((prev) => !prev)}
						>
							{open ? "Close" : "Menu"}
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
