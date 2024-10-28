import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading } from ".";
import { technologies } from "../constants";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { useActiveLink } from "../hooks/useActiveLink";
import { motion } from "framer-motion";

export default function Skills() {
	const { ref } = useActiveLink("#summary");
	return (
		<section ref={ref} id="summary" className="sectionD section-part">
			<div className="container-fluid">
				<section className="row padding">
					<Heading baseTitle="SKILLS" title="Technologies" />
					<div className="technology">
						{technologies.map((tech, index: number) => (
							<motion.div
								initial={{ opacity: 0, y: -50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ ease: "easeOut", delay: (index + 0.1) * 0.15 }}
								key={tech.name}
								className="hexagon black-gradient"
								id="hexagon"
							>
								<img
									draggable={false}
									className="body"
									src={tech.icon}
									alt={tech.name}
									title={tech.name}
								/>
							</motion.div>
						))}
					</div>
					<div className="col-12 mt-2">
						<div className="downloadCv-btn2">
							<a
								target="_blank"
								href="https://drive.google.com/file/d/1g_eiw3wrZaRNeTAyMQx97gAROvzBMv63/view?usp=sharing"
								download
							>
								<button>
									View Resume{" "}
									<FontAwesomeIcon className="ms-1" icon={faFileContract} />
								</button>
							</a>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
