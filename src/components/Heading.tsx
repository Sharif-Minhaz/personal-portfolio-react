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
				<h2>
					{smBaseTitle ? (
						smBaseTitle
					) : (
						<>
							{baseTitle} <span className="me">{extraBaseTitle}</span>
						</>
					)}
				</h2>
				<motion.p
					initial={{ opacity: 0, y: 50, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true }}
				>
					{title} <span className="extra">{extraTitle}</span>
					<span className="underline"></span>
				</motion.p>
				{action}
			</div>
		</div>
	);
}
