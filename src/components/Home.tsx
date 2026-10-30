import { CSSProperties, PointerEvent, useRef, useState } from "react";
import { useActiveLink } from "../hooks/useActiveLink";
import { basicInfo, RESUME_LINK } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileContract } from "@fortawesome/free-solid-svg-icons";

// Hedvig Letters Serif metrics, in units of 1000 (read from the font file)
const guides = [
	{ name: "ascender", label: "Ascender 800" },
	{ name: "cap", label: "Cap height 700" },
	{ name: "x", label: "x-height 520" },
	{ name: "baseline", label: "Baseline 0" },
	{ name: "descender", label: "Descender −247" },
];

// the name is set with -0.03em tracking, so a glyph's box is 30 units short of its advance
const TRACKING_UNITS = 30;

interface IMeasure {
	ch: string;
	left: number;
	right: number;
	units: number;
}

export default function Home() {
	const { ref } = useActiveLink("#home");
	const frameRef = useRef<HTMLDivElement | null>(null);
	const [measure, setMeasure] = useState<IMeasure | null>(null);

	// the pointer measures the letter under it, in the font's own units
	const handleMeasure = (event: PointerEvent<HTMLSpanElement>) => {
		if (event.pointerType !== "mouse" || !frameRef.current) return;
		const letter = event.target as HTMLElement;
		const ch = letter.dataset.ch;
		if (!ch) return;
		const box = letter.getBoundingClientRect();
		const frame = frameRef.current.getBoundingClientRect();
		const size = parseFloat(getComputedStyle(letter).fontSize);
		setMeasure({
			ch,
			left: box.left - frame.left,
			right: box.right - frame.left,
			units: Math.round((box.width / size) * 1000 + TRACKING_UNITS),
		});
	};

	return (
		<section ref={ref} id="home" className="marquee">
			<div className="container marquee__inner">
				<div className="marquee__proof">
					<div className="marquee__frame crop crop--sheet" ref={frameRef}>
						{["tl", "tr", "bl", "br"].map((corner) => (
							<span key={corner} className={`space space--${corner}`} aria-hidden="true">
								x
							</span>
						))}
						<h1 className="marquee__name" aria-label={basicInfo.name}>
							<span
								id="pin"
								className="marquee__letters"
								onPointerMove={handleMeasure}
								onPointerLeave={() => setMeasure(null)}
							>
								{[...basicInfo.name].map((ch, index) =>
									ch === " " ? (
										" "
									) : (
										<span key={index} data-ch={ch}>
											{ch}
										</span>
									),
								)}
							</span>
						</h1>
						<div
							className={`measure ${measure ? "is-on" : ""}`}
							aria-hidden="true"
							style={
								measure
									? ({
											"--l": `${measure.left}px`,
											"--r": `${measure.right}px`,
										} as CSSProperties)
									: undefined
							}
						>
							<span className="measure__edge measure__edge--l" />
							<span className="measure__edge measure__edge--r" />
							<span className="measure__read">
								{measure ? `${measure.ch}, advance ${measure.units}` : ""}
							</span>
						</div>
					</div>
					<div className="marquee__guides" aria-hidden="true">
						{guides.map((guide) => (
							<div key={guide.name} className={`guide guide--${guide.name}`}>
								<span>{guide.label}</span>
							</div>
						))}
					</div>
					<p className="marquee__label" aria-hidden="true">
						<span>Hedvig Letters Serif, in units of 1000</span>
						<span>Point at a letter to measure it</span>
					</p>
				</div>
				<div className="marquee__foot">
					<p className="marquee__lead">
						Full-stack developer in Pirojpur, Bangladesh, open to new work.
					</p>
					<div className="marquee__actions">
						<a className="btn btn--primary" href="#contact">
							<FontAwesomeIcon icon={faEnvelope} />
							Hire me
						</a>
						<a className="btn" href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faFileContract} />
							View resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
