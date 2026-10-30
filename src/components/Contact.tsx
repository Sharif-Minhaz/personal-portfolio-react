import { ContactForm } from ".";
import { basicInfo, socialLinks } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	IconDefinition,
	faEnvelope,
	faLocationDot,
	faPhone,
	faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// brand marks for the contact links, by their id in constants
const socialIcons: Record<string, IconDefinition> = {
	gmail: faEnvelope,
	github: faGithub,
	"linked-in": faLinkedin,
	facebook: faFacebook,
};

interface ISocial {
	id: string;
	link: string;
	title: string;
	icon: string;
}

const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export default function Contact() {
	const { ref } = useActiveLink("#contact");

	return (
		<section ref={ref} id="contact" className="section section--contact">
			<div className="container contact">
				<div className="contact__details">
					<h2>Tell me what you need built</h2>
					<dl className="facts">
						<div>
							<dt>
								<FontAwesomeIcon icon={faEnvelope} /> Email
							</dt>
							<dd>
								<a className="link" href={`mailto:${basicInfo.email}`}>
									{basicInfo.email}
								</a>
							</dd>
						</div>
						<div>
							<dt>
								<FontAwesomeIcon icon={faPhone} /> Phone
							</dt>
							<dd className="num">
								<a className="link" href={telHref(basicInfo.mobile1)}>
									{basicInfo.mobile1}
								</a>
								<br />
								<a className="link" href={telHref(basicInfo.mobile2)}>
									{basicInfo.mobile2}
								</a>
							</dd>
						</div>
						<div>
							<dt>
								<FontAwesomeIcon icon={faLocationDot} /> Address
							</dt>
							<dd>{basicInfo.address}</dd>
						</div>
						<div>
							<dt>
								<FontAwesomeIcon icon={faShareNodes} /> Elsewhere
							</dt>
							<dd>
								<ul className="contact__socials">
									{socialLinks.map((link: ISocial) => (
										<li key={link.id}>
											<a
												className="link"
												href={link.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												{socialIcons[link.id] && <FontAwesomeIcon icon={socialIcons[link.id]} />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</dd>
						</div>
					</dl>
				</div>
				<ContactForm />
			</div>
		</section>
	);
}
