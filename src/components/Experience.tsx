import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { experiences, RESUME_LINK } from "../constants";
import { Education, Skills } from ".";
import { useActiveLink } from "../hooks/useActiveLink";

interface IExperience {
	date: string;
	iconBg: string;
	icon: string;
	company_name: string;
	title: string;
	points: string[];
}

const ExperienceRow = ({ experience }: { experience: IExperience }) => (
	<li className="record__row">
		<p className="record__date num">{experience.date.replace(" - ", " to ")}</p>
		<div className="record__what">
			<img
				className="record__logo"
				src={experience.icon}
				alt=""
				width={52}
				height={52}
				loading="lazy"
				decoding="async"
			/>
			<h4>{experience.title}</h4>
			<p className="record__where">{experience.company_name}</p>
		</div>
		<ul className="record__points">
			{experience.points.map((point: string, index: number) => (
				<li key={`experience-point-${index}`}>{point.trim()}</li>
			))}
		</ul>
	</li>
);

// One section for the record: work, study and tools (all three used to share id="summary")
const Experience = () => {
	const { ref } = useActiveLink("#summary");
	return (
		<section ref={ref} id="summary" className="section section--record">
			<div className="container">
				<div className="head">
					<h2>Two jobs, three schools, a toolbox</h2>
					<div className="head__aside">
						<a className="btn" target="_blank" href={RESUME_LINK} download>
							<FontAwesomeIcon icon={faFileContract} aria-hidden="true" /> View resume
						</a>
					</div>
				</div>

				<div className="record">
					<h3 className="record__label">Where I’ve worked</h3>
					<ol className="record__rows">
						{experiences.map((experience, index) => (
							<ExperienceRow experience={experience} key={index} />
						))}
					</ol>
				</div>

				<Education />
				<Skills />
			</div>
		</section>
	);
};

export default Experience;
