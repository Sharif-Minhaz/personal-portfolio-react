import { IconDefinition, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services, servicesIntro } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";

interface IService {
	title: string;
	icon: IconDefinition;
	tone: string;
	description: string;
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
							<span className="svc__icon" aria-hidden="true">
								<FontAwesomeIcon icon={service.icon} />
							</span>
							<h3>{service.title}</h3>
							<p>{service.description}</p>
							<a
								className="svc__go"
								href="#contact"
								aria-label={`Discuss ${service.title.toLowerCase()}`}
							>
								<FontAwesomeIcon icon={faArrowRight} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
