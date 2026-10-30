import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { basicInfo, RESUME_LINK, workingHistory } from "../constants";
import { IconDefinition, faFileContract } from "@fortawesome/free-solid-svg-icons";
import { useActiveLink } from "../hooks/useActiveLink";
import sharifMdMinhaz from "../assets/images/sharif-md-minhaz.webp";

interface IHistory {
	title: string;
	count: string;
	icon: IconDefinition;
}

export default function About() {
	const { ref } = useActiveLink("#aboutme");
	return (
		<section ref={ref} id="aboutme" className="section section--about">
			<div className="container about">
				<figure className="about__portrait crop crop--sheet">
					<div
						className="about__photo"
						data-slot="portrait"
						data-alt="Sharif Md. Minhaz, a head-and-shoulders portrait"
					>
						<img
							src={sharifMdMinhaz}
							alt="Sharif Md. Minhaz"
							width={400}
							height={400}
							loading="lazy"
							decoding="async"
						/>
					</div>
				</figure>

				<div className="about__text">
					<h2>On time, on budget, in touch</h2>
					<p className="lead">{basicInfo.moto1}</p>
					<p>{basicInfo.moto2}</p>
				</div>

				<div className="about__facts">
					<dl className="facts">
						<div>
							<dt>Name</dt>
							<dd>{basicInfo.name}</dd>
						</div>
						<div>
							<dt>Email</dt>
							<dd>
								<a
									href={`mailto:${basicInfo.email}`}
									target="_blank"
									className="link email"
								>
									{basicInfo.email}
								</a>
							</dd>
						</div>
						<div>
							<dt>Age</dt>
							<dd className="num">{basicInfo.age}</dd>
						</div>
						<div>
							<dt>From</dt>
							<dd>{basicInfo.address}</dd>
						</div>
					</dl>
					<a className="btn" target="_blank" href={RESUME_LINK} download>
						View resume <FontAwesomeIcon icon={faFileContract} aria-hidden="true" />
					</a>
				</div>

				<ul className="about__figures">
					{workingHistory.map((history: IHistory) => (
						<li key={history.title}>
							<b className="num">{history.count}+</b>
							<span>{history.title}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
