import { Heading } from ".";
import { testimonials } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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
	star: number;
	image: string;
}

export default function Reviews() {
	const { ref } = useActiveLink("#testimonial");
	return (
		<section ref={ref} id="testimonial" className="sectionL section-part">
			<div className="container-fluid">
				<div className="row padding">
					<Heading title="Reviews" baseTitle="RATINGS" />
					<div>
						<Swiper
							id="testimonialSlide"
							navigation={true}
							pagination={{ clickable: true }}
							spaceBetween={30}
							slidesPerView={1}
							breakpoints={{
								768: { slidesPerView: 2 },
							}}
						>
							<div>
								{testimonials.map((review: IReview, index: number) => (
									<SwiperSlide>
										<SingleReview key={index} review={review} />
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
				<img src={review.image} alt="Client" />
				<div className="address">
					<div className="name">{review.name}</div>
					<div className="profession">{review.designation}</div>
				</div>
			</div>
			<div className="des_client">
				<p>{review.testimonial}</p>
			</div>
			<div className="rate">
				{Array.from({ length: review.star }).map((_, index: number) => (
					<span key={index}>
						<FontAwesomeIcon icon={faStar} />
					</span>
				))}
			</div>
		</div>
	);
}
