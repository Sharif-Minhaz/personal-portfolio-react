import { lazy, Suspense, useRef, useEffect, useState, MouseEvent } from "react";
import { useActiveLink } from "../hooks/useActiveLink";
import { basicInfo } from "../constants";

const HeroParticles = lazy(() => import("./HeroParticles"));

export default function Home() {
	const el = useRef(null);
	const sectionRef = useRef<HTMLElement | null>(null);
	const [showParticles, setShowParticles] = useState(false);

	const { ref } = useActiveLink("#home");

	useEffect(() => {
		let typed: { destroy: () => void } | undefined;
		let cancelled = false;

		import("typed.js").then(({ default: Typed }) => {
			if (cancelled || !el.current) return;
			typed = new Typed(el.current, {
				strings: ["Full-Stack Developer.", "Web Developer.", "Quick Learner."],
				typeSpeed: 80,
				backDelay: 1200,
				backSpeed: 50,
				cursorChar: "|",
				loop: true,
			});
		});

		return () => {
			cancelled = true;
			typed?.destroy();
		};
	}, []);

	useEffect(() => {
		const timer = window.setTimeout(() => setShowParticles(true), 1500);
		return () => window.clearTimeout(timer);
	}, []);

	const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
		const node = sectionRef.current;
		if (!node) return;
		const rect = node.getBoundingClientRect();
		node.style.setProperty("--mx", `${e.clientX - rect.left}px`);
		node.style.setProperty("--my", `${e.clientY - rect.top}px`);
	};

	const setRefs = (node: HTMLElement | null) => {
		sectionRef.current = node;
		if (typeof ref === "function") ref(node);
	};

	return (
		<section ref={setRefs} id="home" className="section-part" onMouseMove={handleMouseMove}>
			<div className="container-fluid transparent-bg">
				{showParticles && (
					<Suspense fallback={null}>
						<HeroParticles />
					</Suspense>
				)}
				<div className="hero-spotlight" aria-hidden="true" />
				<div className="row">
					<div className="col-12">
						<div className="details">
							<div className="status-badge">
								<span className="status-dot" />
								<span>Available for Work</span>
							</div>
							<h1 className="wlc-note">
								<span id="pin" className="text-gradient">
									{basicInfo.name}
								</span>
							</h1>
							<div className="type">
								<h2 className="typed_js" ref={el}></h2>
							</div>
							<div className="location">
								<span className="main-loc">
									Based in Pirojpur, Barishal,{" "}
									<span className="full-loc">Bangladesh.</span>
									<span className="short-loc">BD.</span>
								</span>
							</div>
							<div className="hero-ctas">
								<a href="#contact">
									<button className="btn-gradient">Hire Me</button>
								</a>
								<a href="#portfolio">
									<button className="btn-ghost">View Work</button>
								</a>
							</div>
						</div>
						<a
							href="#aboutme"
							className="scroll-indicator"
							aria-label="Scroll to next section"
						>
							<span className="scroll-mouse">
								<span className="scroll-wheel" />
							</span>
							<span className="scroll-text">Scroll</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
