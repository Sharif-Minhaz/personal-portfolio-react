import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faArrowUpRightFromSquare,
	faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import useSeoMetadata from "../hooks/useSeoMetadata";

const PAGE_TITLE = "Selected Projects | Sharif Md. Minhaz";
const PAGE_DESCRIPTION =
	"Explore full-stack web applications, platforms, and interfaces built by Sharif Md. Minhaz, with case studies filtered by technology.";

export default function ProjectsPage() {
	const [search, setSearch] = useState("");
	const [technology, setTechnology] = useState("all");
	const technologies = useMemo(
		() =>
			[...new Set(projects.flatMap((project) => project.tags.map((tag) => tag.name)))].sort(),
		[],
	);
	const visibleProjects = projects.filter((project) => {
		const matchesTechnology =
			technology === "all" || project.tags.some((tag) => tag.name === technology);
		const searchableText = [
			project.name,
			project.description,
			...project.tags.map((tag) => tag.name),
		]
			.join(" ")
			.toLowerCase();
		return matchesTechnology && searchableText.includes(search.trim().toLowerCase());
	});

	useSeoMetadata({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: "/projects" });

	const resetFilters = () => {
		setSearch("");
		setTechnology("all");
	};

	return (
		<main className="project-catalogue">
			<div className="project-catalogue__topbar">
				<Link className="project-back-link" to="/#portfolio">
					<FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
					<span>Back to portfolio</span>
				</Link>
				<span className="project-catalogue__index">WORK INDEX / 01—{projects.length}</span>
			</div>

			<header className="project-catalogue__intro">
				<p className="project-eyebrow">Selected work · 2021—2026</p>
				<h1>Projects built to solve real problems.</h1>
				<p className="project-catalogue__lead">
					A selection of web applications, commerce tools, and experiments. Open a case
					study for project context, features, technologies, and implementation notes.
				</p>
			</header>

			<section className="project-browser" aria-label="Browse projects">
				<div className="project-browser__controls">
					<label className="project-search">
						<span>Search projects</span>
						<input
							type="search"
							value={search}
							placeholder="Name, purpose, or technology"
							onChange={(event) => setSearch(event.target.value)}
						/>
					</label>
					<label className="project-filter">
						<span>Technology</span>
						<select
							value={technology}
							onChange={(event) => setTechnology(event.target.value)}
						>
							<option value="all">All technologies</option>
							{technologies.map((tag) => (
								<option key={tag} value={tag}>
									{tag}
								</option>
							))}
						</select>
					</label>
					<button className="project-reset" type="button" onClick={resetFilters}>
						<FontAwesomeIcon icon={faRotateLeft} aria-hidden="true" />
						<span>Reset</span>
					</button>
				</div>

				<div className="project-browser__summary" aria-live="polite">
					<span>{String(visibleProjects.length).padStart(2, "0")} projects</span>
					<span>{technology === "all" ? "All technologies" : technology}</span>
				</div>

				{visibleProjects.length ? (
					<div className="project-grid">
						{visibleProjects.map((project, index) => (
							<Link
								className="project-tile"
								key={project.slug}
								to={`/projects/${project.slug}`}
								aria-label={`Open ${project.name} case study`}
								style={{ "--tile-order": index } as CSSProperties}
							>
								<div className="project-tile__image-link">
									<img
										src={project.image}
										alt={`${project.name} project screenshot`}
									/>
									<span className="project-tile__number">
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>
								<div className="project-tile__body">
									<div className="project-tile__title-row">
										<h2>{project.name}</h2>
										<span className="project-tile__open" aria-hidden="true">
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												aria-hidden="true"
											/>
										</span>
									</div>
									<p>{project.description}</p>
									<div className="project-tags">
										{project.tags.map((tag) => (
											<span key={tag.name}>{tag.name}</span>
										))}
									</div>
								</div>
							</Link>
						))}
					</div>
				) : (
					<div className="project-empty">
						<p>No projects match those filters.</p>
						<button type="button" onClick={resetFilters}>
							Clear filters
						</button>
					</div>
				)}
			</section>
			<footer className="project-page-footer">
				<Link to="/#contact">
					Have a project in mind? <span>Get in touch ↗</span>
				</Link>
				<span>Sharif Md. Minhaz · Bangladesh</span>
			</footer>
		</main>
	);
}
