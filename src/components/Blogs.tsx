import { GITHUB_LINK, blogs } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface IBlog {
	id: number;
	title: string;
	cover: string;
	publishedDate: string;
	body: string;
	url: string;
}

// the first sentence of a post, as its standfirst
const firstSentence = (text: string) => text.split(/(?<=\.)\s/)[0];

export default function Blogs() {
	const { ref } = useActiveLink("#blog");
	return (
		<section ref={ref} id="blog" className="section section--blog">
			<div className="container">
				<div className="head">
					<h2>Notes from DEV Inertia</h2>
					<div className="head__aside">
						<a
							className="btn"
							target="_blank"
							href="https://dev-inertia-blog.netlify.app/blog/1"
						>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
							All articles
						</a>
					</div>
				</div>
				<div className="posts">
					{blogs.map((blog: IBlog) => (
						<article key={blog.id} className="post">
							<div className="post__cover crop">
								<div
									className="post__frame"
									data-slot={`blog-${blog.id}`}
									data-alt={`Cover image for ${blog.title}`}
								>
									<img
										src={blog.cover}
										alt=""
										width={800}
										height={419}
										loading="lazy"
										decoding="async"
									/>
								</div>
							</div>
							<p className="post__meta">
								<time>{blog.publishedDate}</time>, by{" "}
								<a className="link" href={GITHUB_LINK}>
									Minhaz
								</a>
							</p>
							<h3>
								<a className="post__title" target="_blank" href={blog.url}>
									{blog.title}
								</a>
							</h3>
							<p className="post__body">{firstSentence(blog.body)}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
