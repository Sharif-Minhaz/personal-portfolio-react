import { ContactForm } from ".";
import { basicInfo, socialLinks } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";

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
							<dt>Email</dt>
							<dd>
								<a className="link" href={`mailto:${basicInfo.email}`}>
									{basicInfo.email}
								</a>
							</dd>
						</div>
						<div>
							<dt>Phone</dt>
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
							<dt>Address</dt>
							<dd>{basicInfo.address}</dd>
						</div>
						<div>
							<dt>Elsewhere</dt>
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
