// Writes server-rendered HTML for each route into dist so crawlers that don't run JS see real content.
import fs from "node:fs";
import path from "node:path";

const { render, legalPages, basicInfo, projects } = await import("../dist-ssr/entry-server.js");
const template = fs.readFileSync("dist/index.html", "utf8");
const SITE = "https://www.minhaz.bond";

const escapeHtml = (value) =>
	value
		.replaceAll("&", "&amp;")
		.replaceAll('"', "&quot;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");

const replaceMeta = (html, attribute, name, content) => {
	const pattern = new RegExp(`(<meta\\s+${attribute}="${name}"\\s+content=")[^"]*("\\s*\\/?>)`);
	const updated = html.replace(
		pattern,
		(_, prefix, suffix) => `${prefix}${escapeHtml(content)}${suffix}`,
	);
	if (updated === html) throw new Error(`Missing ${attribute}=${name} metadata`);
	return updated;
};

const routes = [
	{ url: "/", file: "dist/index.html" },
	{
		url: "/projects",
		file: "dist/projects.html",
		title: `Selected Projects | ${basicInfo.name}`,
		description:
			"Explore full-stack web applications, platforms, and interfaces built by Sharif Md. Minhaz, with case studies filtered by technology.",
	},
	...projects.map((project) => ({
		url: `/projects/${project.slug}`,
		file: `dist/projects/${project.slug}.html`,
		title: `${project.name} Case Study | ${basicInfo.name}`,
		description: project.description,
		project,
	})),
	...Object.entries(legalPages).map(([slug, page]) => ({
		url: `/${slug}`,
		file: `dist/${slug}.html`,
		title: `${page.title} | ${basicInfo.name}`,
		description: page.description,
	})),
];

for (const { url, file, title, description, project } of routes) {
	let html = template.replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
	if (title) {
		html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
		html = html.replace(
			`<link rel="canonical" href="${SITE}/" />`,
			`<link rel="canonical" href="${SITE}${url}" />`,
		);
		html = replaceMeta(html, "name", "description", description);
		html = replaceMeta(html, "property", "og:title", title);
		html = replaceMeta(html, "property", "og:description", description);
		html = replaceMeta(html, "property", "og:url", `${SITE}${url}`);
		html = replaceMeta(html, "property", "og:type", "website");
		html = replaceMeta(html, "name", "twitter:title", title);
		html = replaceMeta(html, "name", "twitter:description", description);
		html = replaceMeta(html, "name", "twitter:url", `${SITE}${url}`);
		if (project) {
			const projectSchema = {
				"@context": "https://schema.org",
				"@graph": [
					{
						"@type": "WebPage",
						"@id": `${SITE}${url}#webpage`,
						url: `${SITE}${url}`,
						name: title,
						description,
						mainEntity: { "@id": `${SITE}${url}#project` },
					},
					{
						"@type": "CreativeWork",
						"@id": `${SITE}${url}#project`,
						name: project.name,
						description,
						url: `${SITE}${url}`,
						image: new URL(project.image, SITE).href,
						creator: { "@type": "Person", name: basicInfo.name, url: SITE },
						keywords: project.tags.map((tag) => tag.name),
					},
				],
			};
			const jsonLd = JSON.stringify(projectSchema).replaceAll("<", "\\u003c");
			html = html.replace(
				/<script type="application\/ld\+json">[\s\S]*?<\/script>/,
				`<script type="application/ld+json">${jsonLd}</script>`,
			);
		}
	}
	if (!html.includes('<div id="root"><'))
		throw new Error(`prerender produced empty root for ${url}`);
	fs.mkdirSync(path.dirname(file), { recursive: true });
	fs.writeFileSync(file, html);
	console.log(`prerendered ${url} -> ${file}`);
}
