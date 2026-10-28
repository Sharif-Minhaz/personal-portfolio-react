import { Heading } from ".";
import { testimonials } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Install Swiper modules
SwiperCore.use([Navigation]);

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
		<section ref={ref} id="testimonial" className="sectionL section-part">
			<div className="container-fluid">
				<div className="row padding">
					<Heading title="Reviews" baseTitle="REVIEWS" />
					<div>
						<Swiper
							id="testimonialSlide"
							navigation={testimonials.length > 1}
							pagination={{ clickable: true }}
							spaceBetween={30}
							slidesPerView={1}
							breakpoints={{
								768: { slidesPerView: Math.min(2, testimonials.length) },
							}}
						>
							<div>
								{testimonials.map((review: IReview, index: number) => (
									<SwiperSlide key={index}>
										<SingleReview review={review} />
									</SwiperSlide>
								))}
							</div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
}

function SingleReview({ review }: { review: IReview }) {
	return (
		<div className="clients-testimonial">
			<div className="identity">
				<img src={review.image} alt={review.name} />
				<div className="address">
					<div className="name">{review.name}</div>
					<div className="profession">
						{review.designation}, {review.company}
					</div>
				</div>
			</div>
			<div className="des_client">
				<p>{review.testimonial}</p>
			</div>
			<div className="rate">
				<small>{review.relation}</small>
				<br />
				<a href={review.source} target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin} /> View on LinkedIn
				</a>
			</div>
		</div>
	);
}
