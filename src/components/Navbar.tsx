import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import sharifMdMinhaz from "../assets/images/sharif-md-minhaz.jpg";
import { basicInfo, navLinks, sidebarSocials } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface ILink {
	id: string;
	title: string;
	icon: IconDefinition;
}

interface ISocial {
	id: string;
	title: string;
	link: string;
	icon: IconDefinition;
}

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<nav id="spy" className="main-nav">
				<div className="aside-content">
					<div className="profile dark-theme">
						<div className="image">
							<img
								className="rounded-circle"
								src={sharifMdMinhaz}
								alt="Profile-picture"
							/>
						</div>
						<div className="name">{basicInfo.name}</div>
					</div>
					<div className="links nav-pills">
						{navLinks.map((link: ILink) => (
							<a
								key={link.id}
								className={`nav-link u-link`}
								href={link.id}
								data-to-scrollspy-id={link.id.split("#")[1]} //#home -> home
							>
								<span>
									<FontAwesomeIcon icon={link.icon} />
								</span>
								{link.title}
							</a>
						))}
					</div>
					<div className="social-media">
						{sidebarSocials.map((social: ISocial) => (
							<a
								key={social.title}
								href={social.link}
								data-bs-toggle="tooltip"
								data-bs-placement="top"
								title={social.title}
							>
								<FontAwesomeIcon icon={social.icon} />
							</a>
						))}
					</div>
				</div>
			</nav>
			{/* <!-- mobile-nav start --> */}
			<nav className="secondary-nav">
				<div className="nav-header">
					<div className="small-img">
						<a href="#aboutme">
							<img
								src={sharifMdMinhaz}
								className="rounded-circle"
								width="40px"
								alt="profile"
							/>
						</a>
						<h3>
							<span id="first-part-name">Sharif </span>Md. Minhaz
						</h3>
					</div>
					<div className="profile-section">
						<div className="social-media-mo">
							{sidebarSocials.slice(0, 3).map((social: ISocial) => (
								<a key={social.id} id={social.id} href={social.link}>
									<span>
										<FontAwesomeIcon
											title={social.title}
											data-bs-toggle="tooltip"
											data-bs-placement="bottom"
											icon={social.icon}
										/>
									</span>
								</a>
							))}
						</div>
						<div
							className={`navBtn ${open ? "change" : ""}`}
							id="nav-expand"
							onClick={() => setOpen((prev) => !prev)}
						>
							{["bar1", "bar2", "bar3"].map((bar: string) => (
								<span key={bar} className={bar} />
							))}
						</div>
					</div>
				</div>
			</nav>
			<div className="nav-all-links">
				<div
					id="select-nav"
					className={`links nav-pills links-secondary ${
						open ? "links-secondary-res" : ""
					}`}
				>
					{navLinks.map((link: ILink) => (
						<a
							data-to-scrollspy-id={link.id.split("#")[1]}
							key={link.id}
							className="nav-link u-link"
							href={link.id}
						>
							<span>
								<FontAwesomeIcon icon={link.icon} />
							</span>
							<span className="dh-H">{link.title}</span>
						</a>
					))}
				</div>
			</div>
		</>
	);
}
