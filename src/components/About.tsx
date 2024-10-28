import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading } from ".";
import { basicInfo, workingHistory } from "../constants";
import { IconDefinition, faFileContract } from "@fortawesome/free-solid-svg-icons";
import NumberScroller from "react-number-scroller";
import { useActiveLink } from "../hooks/useActiveLink";

interface IHistory {
	title: string;
	count: string;
	icon: IconDefinition;
}

export default function About() {
	const { ref } = useActiveLink("#aboutme");
	return (
		<section ref={ref} id="aboutme" className="sectionL section-part">
			<div className="container-fluid">
				<div className="row padding">
					<Heading
						baseTitle="ABOUT"
						extraBaseTitle="ME"
						title="Know Me"
						extraTitle="More"
					/>
					<div className="col-md-8 col-12">
						<div className="short-des">
							<h2>
								I'm <span className="myName">{basicInfo.name}</span>, a Web
								Developer.
							</h2>
							<p>{basicInfo.moto1}</p>
							<p>{basicInfo.moto2}</p>
						</div>
					</div>
					<div className="col-md-4 col-12">
						<div className="basic-info">
							<ul>
								<li>
									<span>Name: </span>
									{basicInfo.name}
								</li>
								<li>
									<span>Email: </span>
									<a
										href={`mailto:${basicInfo.email}`}
										target="_blank"
										className="email"
									>
										{basicInfo.email}
									</a>
								</li>
								<li>
									<span>Age: </span>
									{basicInfo.age}
								</li>
								<li>
									<span>From: </span>
									{basicInfo.address}
								</li>
							</ul>
							<a
								target="_blank"
								href="https://drive.google.com/file/d/1g_eiw3wrZaRNeTAyMQx97gAROvzBMv63/view?usp=sharing"
								download
							>
								<button>
									View Resume{" "}
									<FontAwesomeIcon className="ms-1" icon={faFileContract} />
								</button>
							</a>
						</div>
					</div>
					<div className="col-12">
						<div className="count-js">
							<div className="row count-base">
								{workingHistory.map((history: IHistory) => (
									<div
										key={history.title}
										className="col-lg-3 col-md-6 col-6 py-4"
									>
										<p className="count_icons">
											<FontAwesomeIcon icon={history.icon} />
										</p>
										<h2 className="numscroller number">
											<NumberScroller
												from={0}
												to={Number(history.count)}
												renderFrequency={30}
											/>
										</h2>
										<h3 className="mb-0">{history.title}</h3>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
