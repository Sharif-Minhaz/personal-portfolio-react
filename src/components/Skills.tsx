import { techGroups, technologies } from "../constants";

// Rendered inside the record section (Experience.tsx), which owns #summary.
// The toolkit as three specimen sheets, read at a glance; any tool not in a group lands in the last sheet.
export default function Skills() {
	const grouped = new Set(techGroups.flatMap((group) => group.tools));
	const groups = techGroups.map((group, index) => ({
		title: group.title,
		tools: [
			...group.tools.flatMap((name) => technologies.filter((tech) => tech.name === name)),
			...(index === techGroups.length - 1
				? technologies.filter((tech) => !grouped.has(tech.name))
				: []),
		],
	}));

	return (
		<div className="record record--tools">
			<h3 className="record__label">The toolkit, sorted by what each tool does</h3>
			<div className="kit">
				{groups.map((group) => (
					<section
						key={group.title}
						className="kit__sheet crop"
						style={{ gridColumn: `span ${group.tools.length >= 9 ? 5 : group.tools.length >= 5 ? 4 : 3}` }}
						aria-label={group.title}
					>
						<header className="kit__head">
							<h4>{group.title}</h4>
							<span className="num">{group.tools.length}</span>
						</header>
						<ul className="kit__list">
							{group.tools.map((tech) => (
								<li key={tech.name}>
									<img
										draggable={false}
										src={tech.icon}
										alt=""
										width={28}
										height={28}
										loading="lazy"
										decoding="async"
									/>
									{tech.name}
								</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</div>
	);
}
