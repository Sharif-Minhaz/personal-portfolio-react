import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import sharifMdMinhaz from "../assets/images/sharif-md-minhaz.jpg";
import { basicInfo, navLinks, sidebarSocials } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

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
	const { active } = useContext(ThemeContext);

	return (
		<>
			<nav id="spy" className="main-nav">
				<div className="aside-content">
					<div className="profile dark-theme">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 2 }}
							className="image"
						>
							<img
								className="rounded-circle"
								src={sharifMdMinhaz}
								alt="Profile-picture"
							/>
						</motion.div>
						<div className="name">{basicInfo.name}</div>
					</div>
					<div className="links nav-pills">
						{navLinks.map((link: ILink, index: number) => (
							<motion.a
								initial={{ opacity: 0, y: -20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: (index + 0.1) * 0.1 }}
								key={link.id}
								className={`nav-link u-link ${
									active === link.id ? "active-link" : ""
								}`}
								href={link.id}
							>
								<span>
									<FontAwesomeIcon icon={link.icon} />
								</span>
								{link.title}
							</motion.a>
						))}
					</div>
					<div className="social-media">
						{sidebarSocials.map((social: ISocial, index: number) => (
							<motion.a
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: (index + 0.1) * 0.1 }}
								key={social.title}
								href={social.link}
								title={social.title}
							>
								<FontAwesomeIcon icon={social.icon} />
							</motion.a>
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
							{sidebarSocials.slice(0, 3).map((social: ISocial, index: number) => (
								<motion.a
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: (index + 0.1) * 0.1 }}
									key={social.id}
									id={social.id}
									href={social.link}
								>
									<span>
										<FontAwesomeIcon
											title={social.title}
											data-bs-toggle="tooltip"
											data-bs-placement="bottom"
											icon={social.icon}
										/>
									</span>
								</motion.a>
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
					{navLinks.map((link: ILink, index: number) => (
						<motion.a
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: (index + 0.1) * 0.1 }}
							key={link.id}
							className={`nav-link u-link ${active === link.id ? "active-link" : ""}`}
							href={link.id}
						>
							<span>
								<FontAwesomeIcon icon={link.icon} />
							</span>
							<span className="dh-H">{link.title}</span>
						</motion.a>
					))}
				</div>
			</div>
		</>
	);
}
