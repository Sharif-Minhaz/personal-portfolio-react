import { Link } from "react-router-dom";
import { basicInfo, sidebarSocials } from "../constants";

export default function Footer() {
	return (
		<footer className="colophon">
			<div className="container colophon__inner">
				<p className="colophon__text">
					<a className="colophon__name" href="https://github.com/Sharif-Minhaz">
						{basicInfo.name}
					</a>
					, a full-stack developer in {basicInfo.address}. Set in Hedvig Letters Serif and
					Geist. Built with React and Vite. © 2021 to {new Date().getFullYear()}.
				</p>
				<ul className="colophon__links">
					{sidebarSocials.map((social) => (
						<li key={social.id}>
							<a
								className="link"
								id={social.id}
								href={social.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{social.title === "x" ? "X" : social.title[0].toUpperCase() + social.title.slice(1)}
							</a>
						</li>
					))}
					<li>
						<Link className="link" to="/terms">
							Terms &amp; Policy
						</Link>
					</li>
					<li>
						<Link className="link" to="/disclaimer">
							Disclaimer
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
