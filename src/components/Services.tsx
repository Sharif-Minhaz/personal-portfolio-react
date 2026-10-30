import { IconDefinition, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services, servicesIntro } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";

interface IService {
	title: string;
	icon: IconDefinition;
	tone: string;
	description: string;
	tags: string[];
	logos: { name: string; image: string }[];
	action: string;
}

export default function Services() {
	const { ref } = useActiveLink("#services");
	return (
		<section ref={ref} id="services" className="section section--services">
			<div className="container">
				<div className="svc-head">
					<div className="svc-head__main">
						<h2>{servicesIntro.title}</h2>
						<p className="lead">{servicesIntro.lead}</p>
					</div>
					<p className="svc-head__aside">{servicesIntro.aside}</p>
				</div>
				<ul className="svc">
					{services.map((service: IService) => (
						<li key={service.title} className={`svc__card crop svc__card--${service.tone}`}>
							<div className="svc__top">
								<span className="svc__icon" aria-hidden="true">
									<FontAwesomeIcon icon={service.icon} />
								</span>
								<span className="svc__logos" aria-hidden="true">
									{service.logos.map((logo) => (
										<img
											key={logo.name}
											src={logo.image}
											alt=""
											width={44}
											height={44}
											loading="lazy"
											decoding="async"
										/>
									))}
								</span>
							</div>
							<h3>{service.title}</h3>
							<p>{service.description}</p>
							<ul className="svc__tags" aria-label={`Tools for ${service.title.toLowerCase()}`}>
								{service.tags.map((tag) => (
									<li key={tag}>{tag}</li>
								))}
							</ul>
							<a className="svc__go" href="#contact">
								<span className="svc__arrow" aria-hidden="true">
									<FontAwesomeIcon icon={faArrowRight} />
								</span>
								{service.action}
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
