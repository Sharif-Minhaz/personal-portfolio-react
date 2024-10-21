import { projects } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github, play } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useActiveLink } from "../hooks/useActiveLink";
import { Heading } from ".";
import { useState } from "react";

interface ITag {
	name: string;
	color: string;
}

interface IProject {
	index: number;
	name: string;
	description: string;
	tags: ITag[];
	image: string;
	source_code_link: string;
	live_link: string;
}

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_link,
}: IProject) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -150 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: (index + 1) * 0.2 }}
		>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="tilt-container"
			>
				<div className="tilt-body">
					<img src={image} className="project-image" alt="project_image" />

					<div className="actions">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient github"
						>
							<img src={github} alt="source code" />
						</div>
					</div>

					<div className="actions actions-play">
						<div
							onClick={() => window.open(live_link, "_blank")}
							className="black-gradient play"
						>
							<img
								src={play}
								alt="source code"
								style={{ width: "35%", height: "35%", objectFit: "contain" }}
							/>
						</div>
					</div>
				</div>

				<div className="mt-3 tilt-text-container">
					<h3 className="font-bold" title={name} style={{ fontSize: "24px" }}>
						{name}
					</h3>
					<p
						className="mt-2 line-clamp-3"
						title={description}
						style={{ fontSize: "14px", height: "63px" }}
					>
						{description}
					</p>
				</div>

				<div className="mt-2 d-flex flex-wrap gap-2">
					{tags.map((tag: ITag) => (
						<p
							key={`${name}-${tag.name}`}
							style={{ fontSize: "14px", color: tag.color }}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

export default function Projects() {
	const { ref } = useActiveLink("#portfolio");
	const [projectData, setProjectData] = useState(projects.slice(0, 6));

	const handleLoadMore = () => {
		setProjectData((prev) => projects.slice(0, prev.length + 3));
	};

	return (
		<section ref={ref} id="portfolio" className="sectionD section-part">
			<div className="container-fluid">
				<div className="row padding">
					<Heading title="My Projects" baseTitle="PROJECTS" />
					<div className="col-12 p-0">
						<div className="row d-flex flex-wrap row-gap-4">
							{projectData.map((project, index) => (
								<div key={project.name} className="col-12 col-sm-6 col-md-4">
									<ProjectCard
										key={`project-${index}`}
										index={index}
										{...project}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				{projectData.length !== projects.length && (
					<div className="downloadCv-btn2" style={{ marginTop: "20px" }}>
						<button className="primary-btn" onClick={handleLoadMore}>
							<span className="inline-block mr-2">Load More</span>
							<FontAwesomeIcon icon={faGithub} />
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
