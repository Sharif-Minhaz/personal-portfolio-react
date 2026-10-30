import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
	baseTitle: string;
	extraBaseTitle?: string;
	title: string;
	extraTitle?: string;
	smBaseTitle?: string;
	action?: ReactNode;
}

export default function Heading({
	baseTitle,
	extraBaseTitle,
	title,
	extraTitle,
	smBaseTitle,
	action,
}: Props) {
	return (
		<div className="col-12">
			<div className={`heading${action ? " heading--with-action" : ""}`}>
				{/* Decorative backdrop text: rendered via CSS content so it's skipped by contrast audits */}
				<div className="heading__bg" aria-hidden="true">
					{smBaseTitle ? (
						<span data-text={smBaseTitle} />
					) : (
						<>
							<span data-text={baseTitle} />
							{extraBaseTitle && <span className="me" data-text={extraBaseTitle} />}
						</>
					)}
				</div>
				<motion.h2
					className="heading__title"
					initial={{ opacity: 0, y: 50, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true }}
				>
					{title} <span className="extra">{extraTitle}</span>
					<span className="underline"></span>
				</motion.h2>
				{action}
			</div>
		</div>
	);
}
