import { testimonials } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";

export interface IReview {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	relation: string;
	image: string;
	source: string;
}

export default function Reviews() {
	const { ref } = useActiveLink("#testimonial");
	return (
		<section ref={ref} id="testimonial" className="section band band--ink">
			<div className="container">
				<h2 className="visually-hidden">Recommendation</h2>
				<div id="testimonialSlide" className="reviews">
					{testimonials.map((review: IReview) => (
						<SingleReview key={review.name} review={review} />
					))}
				</div>
			</div>
		</section>
	);
}

function SingleReview({ review }: { review: IReview }) {
	return (
		<figure className="review">
			<blockquote className="review__quote">
				<p>“{review.testimonial}”</p>
			</blockquote>
			<figcaption className="review__by">
				<img
					src={review.image}
					alt=""
					width={64}
					height={64}
					loading="lazy"
					decoding="async"
				/>
				<span className="review__name">{review.name}</span>
				<span>
					{review.designation}, {review.company}
				</span>
				<span className="review__relation">{review.relation}</span>
				<a
					className="link"
					href={review.source}
					target="_blank"
					rel="noopener noreferrer"
				>
					Read it on LinkedIn
				</a>
			</figcaption>
		</figure>
	);
}
