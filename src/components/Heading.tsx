import { motion } from "framer-motion";

interface Props {
	baseTitle: string;
	extraBaseTitle?: string;
	title: string;
	extraTitle?: string;
	smBaseTitle?: string;
}

export default function Heading({
	baseTitle,
	extraBaseTitle,
	title,
	extraTitle,
	smBaseTitle,
}: Props) {
	return (
		<div className="col-12">
			<div className="heading">
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
			</div>
		</div>
	);
}
