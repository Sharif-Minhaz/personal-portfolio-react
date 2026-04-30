import { useRef, useEffect, useState, MouseEvent } from "react";
import Typed from "typed.js";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useActiveLink } from "../hooks/useActiveLink";

export default function Home() {
	const el = useRef(null);
	const sectionRef = useRef<HTMLElement | null>(null);
	const [particlesReady, setParticlesReady] = useState(false);

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

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => setParticlesReady(true));
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
				{particlesReady && (
					<Particles
						id="hero-particles"
						className="hero-particles"
						options={{
							fullScreen: { enable: false },
							background: { color: { value: "transparent" } },
							fpsLimit: 60,
							particles: {
								number: { value: 90, density: { enable: true } },
								color: { value: ["#22d3ee", "#a855f7"] },
								opacity: { value: { min: 0.15, max: 0.55 } },
								size: { value: { min: 1, max: 2.5 } },
								move: {
									enable: true,
									speed: 0.6,
									direction: "none",
									random: true,
									outModes: { default: "out" },
								},
								links: {
									enable: true,
									distance: 140,
									color: "#22d3ee",
									opacity: 0.18,
									width: 1,
								},
							},
							interactivity: {
								events: {
									onHover: { enable: true, mode: "grab" },
								},
								modes: {
									grab: { distance: 160, links: { opacity: 0.45 } },
								},
							},
							detectRetina: true,
						}}
					/>
				)}
				<div className="hero-spotlight" aria-hidden="true" />
				<div className="row">
					<div className="col-12">
						<div className="details">
							<div className="status-badge">
								<span className="status-dot" />
								<span>Available for Work</span>
							</div>
							<div className="wlc-note">
								<span id="pin" className="text-gradient">
									Welcome
								</span>
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
