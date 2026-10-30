import { projects } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";
import { CSSProperties, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ITag {
	name: string;
	color: string;
}

interface IProject {
	index: number;
	slug: string;
	name: string;
	category?: string;
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
	category,
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
		if (event.target !== event.currentTarget) return;
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			openProject();
		}
	};
	const lead = index === 0;

	return (
		<div
			role="link"
			tabIndex={0}
			aria-label={`View ${name} project details`}
			onClick={openProject}
			onKeyDown={handleCardKeyDown}
			className={`work__item ${lead ? "work__item--lead" : ""}`}
		>
			<div className={`work__shot crop ${lead ? "crop--sheet" : ""}`}>
				<div
					className="work__frame"
					data-slot={`project-${slug}`}
					data-kind="product"
					data-alt={`${name}, a screenshot of the main screen`}
				>
					<img
						src={image}
						alt={`${name} project screenshot`}
						width={1365}
						height={767}
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>

			<div className="work__text">
				<h3>{name}</h3>
				<p className="work__meta">{category ?? "Web Development"}</p>
				<p className="work__desc">{description}</p>
				<p className="work__stack">{tags.map((tag: ITag) => tag.name).join(", ")}</p>
				{(source_code_link || live_link) && (
					<div className="work__actions">
						{source_code_link && (
							<button
								type="button"
								onClick={openExternalLink(source_code_link)}
								className="btn btn--small"
								aria-label={`Open ${name} source code`}
							>
								Source
							</button>
						)}
						{live_link && (
							<button
								type="button"
								onClick={openExternalLink(live_link)}
								className="btn btn--small"
								aria-label={`Open ${name} live project`}
							>
								Live site
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

// spans on twelve columns: a wide pair first (7 and 5), then rows of three; a last pair swaps to 5 and 7
const bentoSpan = (index: number, count: number) => {
	if (index === 0) return 7;
	if (index === 1) return 5;
	const rest = count - 2;
	const position = index - 2;
	const tail = rest % 3;
	if (tail === 2 && position >= rest - 2) return position === rest - 2 ? 5 : 7;
	if (tail === 1 && position === rest - 1) return 12;
	return 4;
};

export default function Projects() {
	const { ref } = useActiveLink("#portfolio");
	const [projectData, setProjectData] = useState(projects.slice(0, 6));

	const handleLoadMore = () => {
		setProjectData((prev) => projects.slice(0, prev.length + 3));
	};

	return (
		<section ref={ref} id="portfolio" className="section section--work">
			<div className="container">
				<div className="head">
					<h2>Work, from forecasting to point of sale</h2>
					<div className="head__aside">
						<Link
							className="btn"
							to="/projects"
							onClick={() =>
								sessionStorage.setItem(
									"portfolio-scroll-before-projects",
									String(window.scrollY),
								)
							}
						>
							Browse all projects
						</Link>
					</div>
				</div>
				<div className="work">
					{projectData.slice(0, 1).map((project) => (
						<ProjectCard key={project.slug} index={0} {...project} />
					))}
				</div>
				<div className="bento">
					{projectData.slice(1).map((project, index, rest) => (
						<div
							key={project.slug}
							className="bento__tile"
							style={{ "--span": bentoSpan(index, rest.length) } as CSSProperties}
						>
							<ProjectCard index={index + 1} {...project} />
						</div>
					))}
				</div>
				{projectData.length !== projects.length && (
					<div className="work__more">
						<button type="button" className="btn" onClick={handleLoadMore}>
							Load more projects
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
