import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactForm, Heading } from ".";
import { basicInfo, socialLinks } from "../constants";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Tilt } from "react-tilt";

interface ISocial {
	id: string;
	link: string;
	title: string;
	icon: string;
}

export default function Contact() {
	return (
		<section id="contact" className="sectionL section-part">
			<div className="container-fluid">
				<div className="row padding">
					<Heading baseTitle="CONTACT" title="Get in Touch" />
					<div className="col-md-4 col-12">
						<div className="contact-container">
							<h3>Address</h3>
							<div className="address">{basicInfo.address}</div>
							<div className="contact-info">
								<div className="phone">
									<span>
										<FontAwesomeIcon icon={faPhone} />
									</span>
									<span>{basicInfo.mobile1}</span>
								</div>
								<div className="mobile">
									<span>
										<FontAwesomeIcon icon={faPhone} />
									</span>
									<span>{basicInfo.mobile2}</span>
								</div>
								<div className="mail">
									<span>
										<FontAwesomeIcon icon={faEnvelope} />
									</span>
									<span className="ms-1">{basicInfo.email}</span>
								</div>
							</div>
							<div className="follow-me">
								<h3>Follow me</h3>
								<div className="social-media-2">
									{socialLinks.map((link: ISocial) => (
										<Tilt key={link.id}>
											<div
												onClick={() => window.open(link.link, "_blank")}
												className="tilt-div"
											>
												<img
													draggable={false}
													src={link.icon}
													alt={link.title}
												/>
											</div>
										</Tilt>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* -------------- contact form ------------ */}
					<ContactForm />
				</div>
			</div>
		</section>
	);
}
