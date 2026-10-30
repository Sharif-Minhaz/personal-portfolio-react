import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import { Footer } from ".";
import useSeoMetadata from "../hooks/useSeoMetadata";

const PAGE_TITLE = "Selected Projects | Sharif Md. Minhaz";
const PAGE_DESCRIPTION =
	"Explore full-stack web applications, platforms, and interfaces built by Sharif Md. Minhaz, with case studies filtered by technology.";

export default function ProjectsPage() {
	const [search, setSearch] = useState("");
	const [technology, setTechnology] = useState("all");
	const [category, setCategory] = useState("all");
	const technologies = useMemo(
		() => [...new Set(projects.flatMap((project) => project.tags.map((tag) => tag.name)))].sort(),
		[],
	);
	const categories = useMemo(
		() => [...new Set(projects.map((project) => project.category ?? "Web Development"))].sort(),
		[],
	);
	const visibleProjects = projects.filter((project) => {
		const matchesTechnology =
			technology === "all" || project.tags.some((tag) => tag.name === technology);
		const projectCategory = project.category ?? "Web Development";
		const matchesCategory = category === "all" || projectCategory === category;
		const searchableText = [
			project.name,
			project.description,
			project.category ?? "Web Development",
			...project.tags.map((tag) => tag.name),
		]
			.join(" ")
			.toLowerCase();
		return (
			matchesTechnology && matchesCategory && searchableText.includes(search.trim().toLowerCase())
		);
	});

	useSeoMetadata({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: "/projects" });

	const resetFilters = () => {
		setSearch("");
		setTechnology("all");
		setCategory("all");
	};

	return (
		<>
			<main id="main" className="page project-catalogue">
				<div className="container">
					<Link className="link page__back" to="/#portfolio">
						<FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
						Back to portfolio
					</Link>

					<header className="page__intro">
						<h1>Every project, from forecasting to point of sale.</h1>
						<p className="lead">
							A selection of web applications, commerce tools, and experiments. Open a case study
							for project context, features, technologies, and implementation notes.
						</p>
					</header>

					<section aria-label="Browse projects">
						<div className="filters">
							<label>
								Search projects
								<input
									type="search"
									value={search}
									placeholder="Name, purpose, or technology"
									onChange={(event) => setSearch(event.target.value)}
								/>
							</label>
							<label>
								Technology
								<select value={technology} onChange={(event) => setTechnology(event.target.value)}>
									<option value="all">All technologies</option>
									{technologies.map((tag) => (
										<option key={tag} value={tag}>
											{tag}
										</option>
									))}
								</select>
							</label>
							<label>
								Category
								<select value={category} onChange={(event) => setCategory(event.target.value)}>
									<option value="all">All categories</option>
									{categories.map((item) => (
										<option key={item} value={item}>
											{item}
										</option>
									))}
								</select>
							</label>
							<button className="btn" type="button" onClick={resetFilters}>
								<FontAwesomeIcon icon={faRotateLeft} aria-hidden="true" />
								Reset
							</button>
						</div>

						<p className="filters__count" aria-live="polite">
							{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
							{category === "all" ? "" : ` in ${category}`}
						</p>

						{visibleProjects.length ? (
							<div className="tiles">
								{visibleProjects.map((project) => (
									<Link
										className="tile"
										key={project.slug}
										to={`/projects/${project.slug}`}
										aria-label={`Open ${project.name} case study`}
									>
										<div
											className="tile__frame"
											data-slot={`tile-${project.slug}`}
											data-kind="product"
											data-alt={`${project.name}, a screenshot of the main screen`}
										>
											<img
												src={project.image}
												alt={`${project.name} project screenshot`}
												width={1365}
												height={767}
												loading="lazy"
												decoding="async"
											/>
										</div>
										<h2>{project.name}</h2>
										<p className="tile__meta">{project.category ?? "Web Development"}</p>
										<p>{project.description}</p>
										<p className="tile__stack">{project.tags.map((tag) => tag.name).join(", ")}</p>
									</Link>
								))}
							</div>
						) : (
							<div className="empty">
								<p>No projects match those filters.</p>
								<button className="btn" type="button" onClick={resetFilters}>
									Clear filters
								</button>
							</div>
						)}
					</section>

					<footer className="case__foot">
						<p>Have a project in mind?</p>
						<Link className="btn btn--ink" to="/#contact">
							Get in touch
						</Link>
					</footer>
				</div>
			</main>
			<Footer />
		</>
	);
}
