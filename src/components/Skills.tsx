import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading } from ".";
import { technologies } from "../constants";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useActiveLink } from "../hooks/useActiveLink";

export default function Skills() {
	const { ref } = useActiveLink("#summary");
	return (
		<section ref={ref} id="summary" className="sectionD section-part">
			<div className="container-fluid">
				<section className="row padding">
					<Heading baseTitle="SKILLS" title="Technology" />
					<div className="technology">
						{technologies.map((tech) => (
							<div key={tech.name} className="hexagon black-gradient" id="hexagon">
								<img
									draggable={false}
									className="body"
									src={tech.icon}
									alt={tech.name}
								/>
							</div>
						))}
					</div>
					<div className="col-12">
						<div className="downloadCv-btn2">
							<a href="./SHARIF_MD._MINHAZ.pdf" download>
								<button>
									Download CV <FontAwesomeIcon icon={faDownload} />
								</button>
							</a>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
