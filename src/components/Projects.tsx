import { projects } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils";
import { github, play } from "../assets";

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
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
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

					<div className="actions">
						<div
							onClick={() => window.open(live_link, "_blank")}
							className="black-gradient play mt-5"
						>
							<img
								src={play}
								alt="source code"
								style={{ width: "35%", height: "35%", objectFit: "contain" }}
							/>
						</div>
					</div>
				</div>

				<div className="mt-3">
					<h3 className="text-white font-bold" style={{ fontSize: "24px" }}>
						{name}
					</h3>
					<p className="mt-2 text-light" style={{ fontSize: "14px" }}>
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
	return (
		<section id="portfolio" className="sectionD section-part">
			<div className="container-fluid">
				<div className="row padding">
					<div className="col-12">
						<div className="heading">
							<h2>PORTFOLIO</h2>
							<h2 style={{ color: "var(--sectionD-heading)" }}>PROJECT</h2>
							<p>
								My Projects
								<span className="underline" />
							</p>
						</div>
					</div>
					<div className="col-12 p-0">
						<div className="row d-flex flex-wrap row-gap-4">
							{projects.map((project, index) => (
								<div className="col-12 col-sm-6 col-md-4">
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
			</div>
		</section>
	);
}
