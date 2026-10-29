import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HeroParticles() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		let mounted = true;
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			if (mounted) setReady(true);
		});

		return () => {
			mounted = false;
		};
	}, []);

	if (!ready) return null;

	return (
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
	);
}
