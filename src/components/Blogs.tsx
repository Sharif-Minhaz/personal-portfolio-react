import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading } from ".";
import { blogs } from "../constants";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface IBlog {
	id: number;
	title: string;
	cover: string;
	publishedDate: string;
	body: string;
}

export default function Blogs() {
	return (
		<section id="blog" className="sectionD section-part">
			<div className="container-fluid">
				<div className="row padding">
					<div className="col-12">
						<Heading baseTitle="BLOGS" title="My Blog" />
					</div>
					{blogs.map((blog: IBlog) => (
						<div className="col-md-6 col-12">
							<div className="blog-container">
								<div className="blog-img">
									<img src={blog.cover} alt="blog1" />
									<div className="float-text">
										<p>Explore Nature</p>
										<span>Details</span>
									</div>
								</div>
								<div className="blog-des">
									<div className="blog-heading">
										<h3>{blog.title}</h3>
									</div>
									<div className="timeAndDate">
										<p>
											{blog.publishedDate}{" "}
											<span>
												<a href="#">Minhaz</a>
											</span>
										</p>
									</div>
									<div className="blog-txt">
										<p>{blog.body}</p>
										<div className="readMore">
											<Link to="/">
												<div
													className="innerReadMe"
													onClick={() => "readMore(0);"}
												>
													<span className="txt-btn" data-state="close">
														Read more
													</span>
													<FontAwesomeIcon
														color="#ff6347"
														icon={faChevronRight}
													/>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
