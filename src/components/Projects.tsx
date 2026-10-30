import { ProjectFigure, ProjectScreen, projects } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faChevronDown,
	faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useActiveLink } from "../hooks/useActiveLink";
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
	category?: string;
	description: string;
	tags: ITag[];
	image: string;
	screens?: ProjectScreen[];
	figures?: ProjectFigure[];
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
	screens,
	figures,
	source_code_link,
	live_link,
}: IProject) => {
	const navigate = useNavigate();
	const [shown, setShown] = useState(0);
	const openProject = () => navigate(`/projects/${slug}`);
	const openExternalLink =
		(url: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
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
	const showScreen =
		(next: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation();
			setShown(next);
		};
	// warm the full-size screen before the click lands
	const preloadScreen = (src: string) => () => {
		new Image().src = src;
	};
	const lead = index === 0;
	const screen = lead ? screens?.[shown] : undefined;

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
						key={screen?.image ?? image}
						src={screen?.image ?? image}
						alt={
							screen
								? `${name}, the ${screen.label.toLowerCase()} screen`
								: `${name} project screenshot`
						}
						width={screen ? 1280 : 1365}
						height={screen ? 800 : 767}
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>

			{screen && screens && (
				<div className="work__reel">
					<p className="work__caption" aria-live="polite">
						{screen.caption}
					</p>
					<div
						className="work__thumbs"
						role="group"
						aria-label={`${name} screens`}
					>
						{screens.map((item, itemIndex) => (
							<button
								type="button"
								key={item.label}
								className="work__thumb"
								aria-pressed={itemIndex === shown}
								onClick={showScreen(itemIndex)}
								onPointerEnter={preloadScreen(item.image)}
								onFocus={preloadScreen(item.image)}
							>
								<img
									src={item.thumb ?? item.image}
									alt=""
									width={320}
									height={200}
									loading="lazy"
									decoding="async"
								/>
								<span>{item.label}</span>
							</button>
						))}
					</div>
				</div>
			)}

			<div className="work__text">
				<h3>{name}</h3>
				<p className="work__meta">{category ?? "Web Development"}</p>
				<p className="work__desc">{description}</p>
				{lead && figures && (
					<dl className="work__figures">
						{figures.map((figure) => (
							<div key={figure.label}>
								<dt>{figure.label}</dt>
								<dd>{figure.value}</dd>
							</div>
						))}
					</dl>
				)}
				<p className="work__stack">
					{tags.map((tag: ITag) => tag.name).join(", ")}
				</p>
				{(source_code_link || live_link) && (
					<div className="work__actions">
						{source_code_link && (
							<button
								type="button"
								onClick={openExternalLink(source_code_link)}
								className="btn btn--small"
								aria-label={`Open ${name} source code`}
							>
								<FontAwesomeIcon icon={faGithub} />
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
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
								Live site
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default function Projects() {
	const { ref } = useActiveLink("#portfolio");
	const [projectData, setProjectData] = useState(projects.slice(0, 7));

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
							<FontAwesomeIcon icon={faTableCellsLarge} />
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
					{projectData.slice(1).map((project, index) => (
						<div key={project.slug} className="bento__tile">
							<ProjectCard index={index + 1} {...project} />
						</div>
					))}
				</div>
				{projectData.length !== projects.length && (
					<div className="work__more">
						<button type="button" className="btn" onClick={handleLoadMore}>
							<FontAwesomeIcon icon={faChevronDown} />
							Load more projects
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
