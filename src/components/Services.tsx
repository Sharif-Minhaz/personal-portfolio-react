import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { services } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";

interface IService {
	title: string;
	icon: IconDefinition;
	description: string;
}

export default function Services() {
	const { ref } = useActiveLink("#services");
	return (
		<section ref={ref} id="services" className="section section--services">
			<div className="container">
				<div className="head">
					<h2>What clients hire me to build</h2>
					<p className="head__aside lead">
						From one static page to a full-stack app, and a second pair of eyes on
						code.
					</p>
				</div>
				<ol className="services">
					{services.map((service: IService) => (
						<li key={service.title} className="services__row">
							<h3>{service.title}</h3>
							<p>{service.description}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
