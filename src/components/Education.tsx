import { Heading } from ".";
import { educations } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";
import { motion } from "framer-motion";

interface IEducation {
	title: string;
	institute: string;
	timeSpan: string;
	description: string;
}

export default function Education() {
	const { ref } = useActiveLink("#summary");
	return (
		<section ref={ref} id="summary" className="sectionL section-part">
			<div className="container-fluid">
				<div className="row padding">
					<Heading baseTitle="SUMMARY" title="Education" />
					<div className="col-md-6 col-12">
						<div className="educationEx">
							{educations.slice(0, 2).map((education: IEducation, index: number) => (
								<motion.div
									initial={{ opacity: 0, y: -150 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: (index + 1) * 0.5 }}
									key={index}
									className="eduEx-section"
								>
									<div className="year">
										<span>{education.timeSpan}</span>
									</div>
									<div className="subject">{education.title}</div>
									<div className="institute">{education.institute}</div>
									<div className="description">{education.description}</div>
								</motion.div>
							))}
						</div>
					</div>
					<div className="col-md-6 col-12">
						<div className="educationEx experience">
							{educations.slice(2).map((education: IEducation, index: number) => (
								<motion.div
									initial={{ opacity: 0, y: -150 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: (index + 1) * 1.2 }}
									key={index}
									className="eduEx-section"
								>
									<div className="year">
										<span>{education.timeSpan}</span>
									</div>
									<div className="subject">{education.title}</div>
									<div className="institute">{education.institute}</div>
									<div className="description">{education.description}</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
