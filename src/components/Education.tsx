import { educations } from "../constants";

interface IEducation {
	title: string;
	institute: string;
	timeSpan: string;
	description: string;
	logo: string;
}

// Rendered inside the record section (Experience.tsx), which owns #summary
export default function Education() {
	return (
		<div className="record">
			<h3 className="record__label">Where I studied, 2012 to 2024</h3>
			<ol className="record__rows">
				{educations.map((education: IEducation) => (
					<li key={education.institute} className="record__row">
						<p className="record__date num">{education.timeSpan.replace(" - ", " to ")}</p>
						<div className="record__what">
							<img
								className="record__logo"
								src={education.logo}
								alt=""
								width={52}
								height={52}
								loading="lazy"
								decoding="async"
							/>
							<h4>{education.institute}</h4>
							<p className="record__where">{education.title}</p>
						</div>
						<p className="record__note">{education.description}</p>
					</li>
				))}
			</ol>
		</div>
	);
}
