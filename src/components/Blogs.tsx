import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading } from ".";
import { GITHUB_LINK, blogs } from "../constants";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { useActiveLink } from "../hooks/useActiveLink";
import { motion } from "framer-motion";

interface IBlog {
	id: number;
	title: string;
	cover: string;
	publishedDate: string;
	body: string;
	url: string;
}

export default function Blogs() {
	const { ref } = useActiveLink("#blog");
	return (
		<section ref={ref} id="blog" className="sectionD section-part">
			<div className="container-fluid">
				<div className="row padding">
					<div className="col-12">
						<Heading baseTitle="BLOGS" title="My Blog" />
					</div>
					{blogs.map((blog: IBlog, index: number) => (
						<motion.div
							initial={{ opacity: 0, y: -150 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: (index + 1) * 0.7 }}
							key={blog.id}
							className="col-md-6 col-12"
						>
							<div className="blog-container">
								<div className="blog-img">
									<img src={blog.cover} alt="blog1" />
									<div className="float-text">
										<p>{blog.title}</p>
										<a target="_blank" href={blog.url}>
											<span>Details</span>
										</a>
									</div>
								</div>
								<div className="blog-des">
									<div className="blog-heading">
										<a href={blog.url}>
											<h3 className="line-clamp-2" title={blog.title}>
												{blog.title}
											</h3>
										</a>
									</div>
									<div className="timeAndDate">
										<p>
											{blog.publishedDate}{" "}
											<span>
												<a href={GITHUB_LINK}>Minhaz</a>
											</span>
										</p>
									</div>
									<div className="blog-txt">
										<p>{blog.body}</p>
										<div className="readMore">
											<a target="_blank" href={blog.url}>
												<span className="txt-btn" data-state="close">
													Read more
												</span>
												<FontAwesomeIcon
													color="#ff6347"
													icon={faChevronRight}
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				<div className="downloadCv-btn2" style={{ marginTop: "30px" }}>
					<a target="_blank" href="https://dev-inertia-blog.netlify.app/blog/1">
						<button>
							<span className="inline-block mr-2">Read More</span>
							<FontAwesomeIcon icon={faMedium} />
						</button>
					</a>
				</div>
			</div>
		</section>
	);
}
