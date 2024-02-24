import { Heading } from ".";
import { educations } from "../constants";

interface IEducation {
	title: string;
	institute: string;
	timeSpan: string;
	description: string;
}

export default function Education() {
	return (
		<section id="summary" className="sectionL section-part">
			<div className="container-fluid">
				<div className="row padding">
					<Heading baseTitle="SUMMARY" title="Resume" />
					<div className="col-md-6 col-12">
						<div className="educationEx">
							{educations.slice(0, 2).map((education: IEducation) => (
								<div key={education.title} className="eduEx-section">
									<div className="year">
										<span>{education.timeSpan}</span>
									</div>
									<div className="subject">{education.title}</div>
									<div className="institute">{education.institute}</div>
									<div className="description">{education.description}</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-md-6 col-12">
						<div className="educationEx experience">
							{educations.slice(2).map((education: IEducation) => (
								<div key={education.title} className="eduEx-section">
									<div className="year">
										<span>{education.timeSpan}</span>
									</div>
									<div className="subject">{education.title}</div>
									<div className="institute">{education.institute}</div>
									<div className="description">{education.description}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
