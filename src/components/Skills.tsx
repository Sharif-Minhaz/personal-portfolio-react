import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { techGroups, technologies, toolkitIntro } from "../constants";

// Rendered inside the record section (Experience.tsx), which owns #summary.
// The toolkit as three tinted cards, one hue each; any tool not in a group lands in the last card.
export default function Skills() {
	const grouped = new Set(techGroups.flatMap((group) => group.tools));
	const groups = techGroups.map((group, index) => ({
		...group,
		items: [
			...group.tools.flatMap((name) => technologies.filter((tech) => tech.name === name)),
			...(index === techGroups.length - 1
				? technologies.filter((tech) => !grouped.has(tech.name))
				: []),
		],
	}));

	return (
		<div className="toolkit">
			<header className="toolkit__intro">
				<h3>{toolkitIntro.title}</h3>
				<p className="lead">{toolkitIntro.lead}</p>
			</header>
			<div className="toolkit__cards">
				{groups.map((group) => {
					const roles: Record<string, string> = "roles" in group ? group.roles ?? {} : {};
					const listed = Object.keys(roles).length > 0;
					return (
						<section
							key={group.title}
							className={`kitcard crop kitcard--${group.tone}`}
							aria-label={group.title}
						>
							<header className="kitcard__head">
								<span className="kitcard__icon" aria-hidden="true">
									<FontAwesomeIcon icon={group.icon} />
								</span>
								<div className="kitcard__title">
									<h4>{group.title}</h4>
									<p>{group.description}</p>
								</div>
								<span className="kitcard__count num">{group.items.length}</span>
							</header>
							<ul className={`kitcard__tools ${listed ? "kitcard__tools--rows" : ""}`}>
								{group.items.map((tech) => (
									<li key={tech.name}>
										<img
											draggable={false}
											src={tech.icon}
											alt=""
											width={32}
											height={32}
											loading="lazy"
											decoding="async"
										/>
										<span className="kitcard__name">{tech.name}</span>
										{roles[tech.name] && (
											<span className="kitcard__role">{roles[tech.name]}</span>
										)}
									</li>
								))}
							</ul>
						</section>
					);
				})}
			</div>
		</div>
	);
}
