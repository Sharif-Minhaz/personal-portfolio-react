import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, Navigate, useParams } from "react-router-dom";
import { basicInfo, projects } from "../constants";
import { Footer } from ".";
import useSeoMetadata from "../hooks/useSeoMetadata";

export default function ProjectDetailPage() {
	const { slug } = useParams();
	const project = projects.find((item) => item.slug === slug);
	const title = project ? `${project.name} Case Study | ${basicInfo.name}` : "Project Not Found";
	const description = project?.description ?? "Explore project case studies by Sharif Md. Minhaz.";
	const path = `/projects/${slug ?? ""}`;

	useSeoMetadata({ title, description, path });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	if (!project) return <Navigate to="/projects" replace />;

	return (
		<>
			<main id="main" className="page case-study">
				<div className="container">
					<Link className="link page__back" to="/projects">
						<FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
						All projects
					</Link>

					<header className="case__head">
						<h1>{project.name}</h1>
						<p className="lead">{project.description}</p>
						<p className="case__stack">
							{project.category ?? "Web Development"}. Built with{" "}
							{project.tags.map((tag) => tag.name).join(", ")}.
						</p>
						<div className="case__actions">
							{project.live_link && (
								<a
									className="btn btn--primary"
									href={project.live_link}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
									Visit live project
								</a>
							)}
							{project.source_code_link && (
								<a className="btn" href={project.source_code_link} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faGithub} aria-hidden="true" /> Source on GitHub
								</a>
							)}
						</div>
					</header>

					<figure className="case__figure">
						<div className="case__sheet crop crop--sheet">
							<div
								className="case__frame"
								data-slot={`case-${project.slug}`}
								data-kind="product"
								data-alt={`${project.name}, its main screen`}
							>
								<img
									src={project.image}
									alt={`${project.name} application screenshot`}
									width={1365}
									height={767}
									// React 18.2 has no fetchPriority prop; the lowercase attribute reaches the DOM as is
									{...{ fetchpriority: "high" }}
								/>
							</div>
						</div>
						<figcaption>The {project.name} interface.</figcaption>
					</figure>

					<section className="case__section">
						<h2>Overview</h2>
						<p>{project.overview}</p>
					</section>

					<section className="case__section">
						<h2>Key features</h2>
						<ul className="case__list">
							{project.features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
					</section>

					{project.engineeringHighlights?.length ? (
						<section className="case__section">
							<h2>Engineering highlights</h2>
							<ul className="case__list">
								{project.engineeringHighlights.map((highlight) => (
									<li key={highlight}>{highlight}</li>
								))}
							</ul>
						</section>
					) : null}

					{project.challenges?.length ? (
						<section className="case__section">
							<h2>Challenges and approach</h2>
							<div className="case__challenges">
								{project.challenges.map((item) => (
									<article key={item.challenge}>
										<h3>{item.challenge}</h3>
										<p>{item.solution}</p>
									</article>
								))}
							</div>
						</section>
					) : null}

					<footer className="case__foot">
						<Link className="btn" to="/projects">
							Back to all projects
						</Link>
						<Link className="btn btn--ink" to="/#contact">
							Discuss a project
						</Link>
					</footer>
				</div>
			</main>
			<Footer />
		</>
	);
}
