import { useEffect } from "react";

interface SeoMetadata {
	title: string;
	description: string;
	path: string;
	type?: string;
}

export default function useSeoMetadata({
	title,
	description,
	path,
	type = "website",
}: SeoMetadata) {
	useEffect(() => {
		document.title = title;
		const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
		if (canonical) canonical.href = `https://www.minhaz.bond${path}`;

		const metadata: Record<string, string> = {
			"meta[name=description]": description,
			'meta[property="og:title"]': title,
			'meta[property="og:description"]': description,
			'meta[property="og:url"]': `https://www.minhaz.bond${path}`,
			'meta[property="og:type"]': type,
			'meta[name="twitter:title"]': title,
			'meta[name="twitter:description"]': description,
			'meta[name="twitter:url"]': `https://www.minhaz.bond${path}`,
		};

		for (const [selector, content] of Object.entries(metadata)) {
			const element = document.querySelector<HTMLMetaElement>(selector);
			if (element) element.content = content;
		}
	}, [description, path, title, type]);
}
