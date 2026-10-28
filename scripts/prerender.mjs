// Writes server-rendered HTML for each route into dist so crawlers that don't run JS see real content.
import fs from "node:fs";

const { render, legalPages, basicInfo } = await import("../dist-ssr/entry-server.js");
const template = fs.readFileSync("dist/index.html", "utf8");
const SITE = "https://www.minhaz.bond";

const routes = [
	{ url: "/", file: "dist/index.html" },
	...Object.entries(legalPages).map(([slug, page]) => ({
		url: `/${slug}`,
		file: `dist/${slug}.html`,
		title: `${page.title} | ${basicInfo.name}`,
	})),
];

for (const { url, file, title } of routes) {
	let html = template.replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
	if (title) {
		html = html
			.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
			.replace(`<link rel="canonical" href="${SITE}/" />`, `<link rel="canonical" href="${SITE}${url}" />`);
	}
	if (!html.includes('<div id="root"><')) throw new Error(`prerender produced empty root for ${url}`);
	fs.writeFileSync(file, html);
	console.log(`prerendered ${url} -> ${file}`);
}
