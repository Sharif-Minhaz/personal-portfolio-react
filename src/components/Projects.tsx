import { projects } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github, play } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useActiveLink } from "../hooks/useActiveLink";
import { Heading } from ".";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ITag {
	name: string;
	color: string;
}

interface IProject {
	index: number;
	slug: string;
	name: string;
	description: string;
	tags: ITag[];
	image: string;
	source_code_link?: string;
	live_link?: string;
}

const ProjectCard = ({
	index,
	slug,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_link,
}: IProject) => {
	const navigate = useNavigate();
	const openProject = () => navigate(`/projects/${slug}`);
	const openExternalLink = (url: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		window.open(url, "_blank", "noopener,noreferrer");
	};
	const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			openProject();
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: -150 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: (index + 1) * 0.2 }}
			role="link"
			tabIndex={0}
			aria-label={`View ${name} project details`}
			onClick={openProject}
			onKeyDown={handleCardKeyDown}
			className="project-card-navigation"
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
					<img src={image} className="project-image" alt={`${name} project screenshot`} />

					{source_code_link && (
						<div className="actions">
							<button
								type="button"
								onClick={openExternalLink(source_code_link)}
								className="black-gradient github"
								aria-label={`Open ${name} source code`}
							>
								<img src={github} alt="source code" />
							</button>
						</div>
					)}

					{live_link && (
						<div className="actions actions-play">
							<button
								type="button"
								onClick={openExternalLink(live_link)}
								className="black-gradient play"
								aria-label={`Open ${name} live project`}
							>
								<img
									src={play}
									alt=""
									style={{ width: "35%", height: "35%", objectFit: "contain" }}
								/>
							</button>
						</div>
					)}
				</div>

				<div className="mt-3 tilt-text-container project-card-copy">
					<h3
						className="font-bold project-card-title"
						title={name}
						style={{ fontSize: "24px" }}
					>
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

				<div className="mt-2 d-flex flex-wrap gap-2 project-card-tags">
					{tags.map((tag: ITag) => (
						<p
							key={`${name}-${tag.name}`}
							className="glass-mini mb-0"
							style={{ fontSize: "13px", color: tag.color }}
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
				<div className="row padding projects-section-row">
					<Heading
						title="My Projects"
						baseTitle="PROJECTS"
						action={
							<div className="projects-index-link-wrap">
								<Link
									className="projects-index-link"
									to="/projects"
									onClick={() =>
										sessionStorage.setItem(
											"portfolio-scroll-before-projects",
											String(window.scrollY),
										)
									}
								>
									Browse all projects{" "}
									<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
								</Link>
							</div>
						}
					/>
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
