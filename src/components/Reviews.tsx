import { Heading } from ".";
import { testimonials } from "../constants";
import { useActiveLink } from "../hooks/useActiveLink";
import SingleReview from "./SingleReview";

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
					<div className="col-12">
						<div
							id="testimonialSlide"
							className="carousel slide"
							data-bs-ride="carousel"
						>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="row">
										{testimonials
											.slice(0, 2)
											.map((review: IReview, index: number) => (
												<SingleReview
													key={index}
													index={index}
													review={review}
												/>
											))}
									</div>
								</div>
								<div className="carousel-item">
									<div className="row">
										{testimonials
											.slice(2, 4)
											.map((review: IReview, index: number) => (
												<SingleReview
													key={index}
													index={index}
													review={review}
												/>
											))}
									</div>
								</div>
								<div className="carousel-item">
									<div className="row">
										{testimonials
											.slice(4, 6)
											.map((review: IReview, index: number) => (
												<SingleReview
													key={index}
													index={index}
													review={review}
												/>
											))}
									</div>
								</div>
								<button
									className="carousel-control-prev"
									type="button"
									data-bs-target="#testimonialSlide"
									data-bs-slide="prev"
								>
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"
									></span>
								</button>
								<button
									className="carousel-control-next"
									type="button"
									data-bs-target="#testimonialSlide"
									data-bs-slide="next"
								>
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"
									></span>
								</button>
							</div>
							<div className="carousel-indicators">
								<button
									data-bs-target="#testimonialSlide"
									data-bs-slide-to="0"
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								></button>
								<button
									id="btn2"
									data-bs-target="#testimonialSlide"
									data-bs-slide-to="1"
									className="active2"
									aria-label="Slide 2"
								></button>
								<button
									id="btn3"
									data-bs-target="#testimonialSlide"
									data-bs-slide-to="2"
									className="active3"
									aria-label="Slide 3"
								></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
