import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Heading } from ".";
import { services } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActiveLink } from "../hooks/useActiveLink";
import { motion } from "framer-motion";

interface IService {
	title: string;
	icon: IconDefinition;
	description: string;
}

export default function Services() {
	const { ref } = useActiveLink("#services");
	return (
		<section ref={ref} id="services" className="sectionD section-part">
			<div className="container-fluid">
				<div className="row padding">
					<Heading baseTitle="SERVICES" title="What I Do" />
					<div className="col-md-6 col-12">
						<div className="service-side-1">
							{services.slice(0, 3).map((service: IService, index: number) => (
								<motion.div
									initial={{ opacity: 0, y: -150 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: (index + 1) * 0.2 }}
									key={index}
									className="service-div"
								>
									<div className="service-icon">
										<span>
											<FontAwesomeIcon icon={service.icon} />
										</span>
									</div>
									<div className="service-details">
										<h2>{service.title}</h2>
										<p>{service.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
					<div className="col-md-6 col-12">
						<div className="service-side-2">
							{services.slice(3, 6).map((service: IService, index: number) => (
								<motion.div
									initial={{ opacity: 0, y: -150 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: (index + 1) * 0.3 }}
									key={index}
									className="service-div"
								>
									<div className="service-icon">
										<span>
											<FontAwesomeIcon icon={service.icon} />
										</span>
									</div>
									<div className="service-details">
										<h2>{service.title}</h2>
										<p>{service.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
