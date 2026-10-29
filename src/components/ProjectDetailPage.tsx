import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, Navigate, useParams } from "react-router-dom";
import { basicInfo, projects } from "../constants";
import useSeoMetadata from "../hooks/useSeoMetadata";

export default function ProjectDetailPage() {
	const { slug } = useParams();
	const project = projects.find((item) => item.slug === slug);
	const title = project ? `${project.name} Case Study | ${basicInfo.name}` : "Project Not Found";
	const description =
		project?.description ?? "Explore project case studies by Sharif Md. Minhaz.";
	const path = `/projects/${slug ?? ""}`;

	useSeoMetadata({ title, description, path });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	if (!project) return <Navigate to="/projects" replace />;

	return (
		<main className="case-study">
			<div className="case-study__topbar">
				<Link className="project-back-link" to="/projects">
					<FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
					<span>All projects</span>
				</Link>
				<span>CASE STUDY / {project.slug.toUpperCase()}</span>
			</div>

			<header className="case-study__header">
				<p className="project-eyebrow">Selected work · Case study</p>
				<h1>{project.name}</h1>
				<p className="case-study__lead">{project.description}</p>
				<div className="project-tags project-tags--large">
					{project.tags.map((tag) => (
						<span key={tag.name}>{tag.name}</span>
					))}
				</div>
				<div className="case-study__actions">
					{project.live_link && (
						<a
							className="case-action case-action--primary"
							href={project.live_link}
							target="_blank"
							rel="noreferrer"
						>
							Visit live project{" "}
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
						</a>
					)}
					{project.source_code_link && (
						<a
							className="case-action"
							href={project.source_code_link}
							target="_blank"
							rel="noreferrer"
						>
							Source on GitHub <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
						</a>
					)}
				</div>
			</header>

			<figure className="case-study__hero-image">
				<img src={project.image} alt={`${project.name} application screenshot`} />
				<figcaption>{project.name} · Project interface</figcaption>
			</figure>

			<div className="case-study__body">
				<section className="case-study__section case-study__overview">
					<div className="case-study__section-label">
						<span>01</span> Overview
					</div>
					<div>
						<h2>What it is</h2>
						<p>{project.overview}</p>
					</div>
				</section>

				<section className="case-study__section">
					<div className="case-study__section-label">
						<span>02</span> Product
					</div>
					<div>
						<h2>Key features</h2>
						<ul className="case-study__list">
							{project.features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
					</div>
				</section>

				{project.engineeringHighlights?.length ? (
					<section className="case-study__section">
						<div className="case-study__section-label">
							<span>03</span> Build notes
						</div>
						<div>
							<h2>Engineering highlights</h2>
							<ul className="case-study__list">
								{project.engineeringHighlights.map((highlight) => (
									<li key={highlight}>{highlight}</li>
								))}
							</ul>
						</div>
					</section>
				) : null}

				{project.challenges?.length ? (
					<section className="case-study__section">
						<div className="case-study__section-label">
							<span>04</span> Decisions
						</div>
						<div>
							<h2>Challenges &amp; approach</h2>
							<div className="case-study__challenge-list">
								{project.challenges.map((item) => (
									<article key={item.challenge}>
										<h3>{item.challenge}</h3>
										<p>{item.solution}</p>
									</article>
								))}
							</div>
						</div>
					</section>
				) : null}

				<section className="case-study__section case-study__tech">
					<div className="case-study__section-label">
						<span>05</span> Stack
					</div>
					<div>
						<h2>Technologies</h2>
						<div className="project-tags project-tags--large">
							{project.tags.map((tag) => (
								<span key={tag.name}>{tag.name}</span>
							))}
						</div>
					</div>
				</section>
			</div>

			<footer className="case-study__footer">
				<Link to="/projects">
					<span>←</span> Back to all projects
				</Link>
				<Link to="/#contact">
					Discuss a project <span>↗</span>
				</Link>
			</footer>
		</main>
	);
}
