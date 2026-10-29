// Writes server-rendered HTML for each route into dist so crawlers that don't run JS see real content.
import fs from "node:fs";

const { render, legalPages, basicInfo } = await import("../dist-ssr/entry-server.js");
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
	...Object.entries(legalPages).map(([slug, page]) => ({
		url: `/${slug}`,
		file: `dist/${slug}.html`,
		title: `${page.title} | ${basicInfo.name}`,
		description: page.description,
	})),
];

for (const { url, file, title, description } of routes) {
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
	}
	if (!html.includes('<div id="root"><'))
		throw new Error(`prerender produced empty root for ${url}`);
	fs.writeFileSync(file, html);
	console.log(`prerendered ${url} -> ${file}`);
}
