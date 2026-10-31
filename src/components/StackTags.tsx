import type { CSSProperties } from "react";
import { languageTags } from "../constants";

interface IStackTags {
	tags: { name: string; color: string }[];
	label: string;
	className?: string;
}

// a project's stack as pills, each tinted by its own colour; languages lead, filled
const StackTags = ({ tags, label, className = "" }: IStackTags) => {
	const isLanguage = (name: string) => languageTags.includes(name);
	const ordered = [
		...tags.filter((tag) => isLanguage(tag.name)),
		...tags.filter((tag) => !isLanguage(tag.name)),
	];

	return (
		<ul className={`stack ${className}`.trim()} aria-label={label}>
			{ordered.map((tag) => (
				<li
					key={tag.name}
					className={isLanguage(tag.name) ? "stack__lang" : undefined}
					style={{ "--tone": tag.color } as CSSProperties}
				>
					{tag.name}
				</li>
			))}
		</ul>
	);
};

export default StackTags;
