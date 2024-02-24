import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IReview } from "./Reviews";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function SingleReview({ index, review }: { index: number; review: IReview }) {
	return (
		<div key={index} className="col-xl-6 col-md col-12">
			<div className="clients-testimonial">
				<div className="identity">
					<img src={review.image} alt="Client" />
					<div className="address">
						<div className="name">{review.name}</div>
						<div className="profession">{review.designation}</div>
					</div>
				</div>
				<div className="des_client">
					<span>{review.testimonial}</span>
				</div>
				<div className="rate">
					{Array.from({
						length: review.star,
					}).map((_: unknown, index: number) => (
						<span key={index}>
							<FontAwesomeIcon icon={faStar} />
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
