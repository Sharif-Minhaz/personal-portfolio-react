import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { useActiveLink } from "../hooks/useActiveLink";

export default function Home() {
	const el = useRef(null);

	const { ref } = useActiveLink("#home");

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["I'm Sharif Md. Minhaz.", "I'm a Web Developer.", "I'm a Quick Learner."],
			typeSpeed: 80,
			backDelay: 1200,
			backSpeed: 50,
			cursorChar: "|",
			loop: true,
		});

		return () => typed.destroy();
	}, []);

	return (
		<section ref={ref} id="home" className="section-part">
			<div className="container-fluid transparent-bg">
				<div className="row">
					<div className="col-12">
						<div className="details">
							<div className="wlc-note">
								<span id="pin">Welcome</span>
							</div>
							<div className="type">
								<h2 className="typed_js" ref={el}></h2>
							</div>
							<div className="location">
								<span className="main-loc">
									Based in Pirojpur, Barishal,
									<span className="full-loc">Bangladesh.</span>
									<span className="short-loc">BD.</span>
								</span>
							</div>
							<div className="hire-btn">
								<a href="#contact">
									<button>Hire Me</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
