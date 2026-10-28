import { getAge } from "../utils";
import {
	faUser,
	faHouseUser,
	faCog,
	faIdBadge,
	faBriefcase,
	faMugHot,
	faBlog,
	faAddressBook,
	faTasks,
	faSmileBeam,
	faBuilding,
	faBusinessTime,
	faObjectGroup,
	faLaptopCode,
	faServer,
	faBugSlash,
	faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faFigma,
	faGithub,
	faLinkedin,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
	css,
	next,
	python,
	git,
	html,
	javascript,
	mongodb,
	nodejs,
	reactjs,
	redux,
	tailwind,
	typescript,
	express,
	mediaid,
	titan,
	admin,
	coffee,
	eCom,
	blog1,
	blog2,
	hono,
	mui,
	puppeteer,
	shadcn,
	flask,
	bun,
	devInertia,
	ldpan,
	treker,
	chatVerse,
	bunShop,
	nestjs,
	salePos,
	ecomPos,
	electron,
	rbs,
	diu,
} from "../assets";

export const GITHUB_LINK = "https://github.com/Sharif-Minhaz";
export const RESUME_LINK = import.meta.env.VITE_CV_URL;

export const navLinks = [
	{
		id: "#home",
		title: "Home",
		icon: faHouseUser,
	},
	{
		id: "#aboutme",
		title: "About Me",
		icon: faUser,
	},
	{
		id: "#services",
		title: "Services",
		icon: faCog,
	},
	{
		id: "#summary",
		title: "Summary",
		icon: faIdBadge,
	},
	{
		id: "#portfolio",
		title: "Portfolio",
		icon: faBriefcase,
	},
	{
		id: "#testimonial",
		title: "Testimonial",
		icon: faMugHot,
	},
	{
		id: "#blog",
		title: "My Blog",
		icon: faBlog,
	},
	{
		id: "#contact",
		title: "Contact",
		icon: faAddressBook,
	},
];

export const basicInfo = {
	name: "Sharif Md. Minhaz",
	address: "Pirojpur, Barishal, Bangladesh",
	email: "smmr.career@gmail.com",
	age: getAge("2001-10-06"),
	moto1: "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Next.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
	moto2: "Delivering work within time and budget which meets the client’s requirements is my moto. With attention to detail and effective communication, I strive to exceed expectations and foster long-term client satisfaction.",
	mobile1: "+880 1308673831",
	mobile2: "+880 1608566474",
};

export const workingHistory = [
	{
		title: "Experience",
		count: "2",
		icon: faBusinessTime,
	},
	{
		title: "Finished Projects",
		count: "15",
		icon: faTasks,
	},
	{
		title: "Satisfied Peoples",
		count: "10",
		icon: faSmileBeam,
	},
	{
		title: "Company",
		count: "2",
		icon: faBuilding,
	},
];

export const services = [
	{
		title: "Web Design",
		icon: faObjectGroup,
		description:
			"Get a stunning static website crafted from scratch using HTML, CSS, and Js or modern frameworks like React, Next.js, and Astro. I provide customizable and optimized codebases tailored to your unique needs.",
	},
	{
		title: "Web Development",
		icon: faLaptopCode,
		description:
			"Elevate your online presence with expert web development services with dynamic and responsive web applications using the latest technologies like React, Next, Express, Mongodb, Flask and best practices.",
	},
	{
		title: "API Development",
		icon: faServer,
		description:
			"Unlock the power of data and functionality with my API development services. From designing robust APIs to implementing scalable solutions, I will help you build the backbone of your digital ecosystem.",
	},
	{
		title: "PSD to HTML",
		icon: faFileCircleCheck,
		description:
			"Transform your design concepts into pixel-perfect HTML websites. My PSD to HTML service ensures seamless conversion with attention to detail, resulting in visually appealing and functional web pages.",
	},
	{
		title: "Figma to HTML",
		icon: faFigma,
		description:
			"Bring your Figma designs to life with my Figma to HTML conversion service. I will meticulously translate your design files into clean, semantic HTML code, preserving design integrity and fidelity.",
	},
	{
		title: "Code Review (MERN)",
		icon: faBugSlash,
		description:
			"Ensure code quality and maintainability with my comprehensive code review service. I will conduct thorough evaluations of your codebase, providing actionable feedback and recommendations for improvement.",
	},
];

export const educations = [
	{
		title: "FSIT",
		institute: "Daffodil International University",
		timeSpan: "2020 - 2024",
		description:
			"Being established in 2002, Daffodil International University has become a prominent private university in Bangladesh, fostering education and innovation for more than 20000 students.",
	},
	{
		title: "Science",
		institute: "Residential Laboratory College",
		timeSpan: "2017 - 2019",
		description:
			"Residential Laboratory College, since its establishment in 2009, has been playing distinct and unique role for the dissemination of modern, dynamic and quality.",
	},
	{
		title: "Science",
		institute: "K.M. Latif Institution",
		timeSpan: "2012 - 2017",
		description:
			"K.M. Latif Institution is an educational establishment that is located at 22 Mathbaria Mathbaria Pirojpur. Its Educational Institute Identification Number or EIIN, is 102724. On 01 January.",
	},
];

export const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "Express",
		icon: express,
	},
	{
		name: "Next Js",
		icon: next,
	},
	{
		name: "Shadcn/ui",
		icon: shadcn,
	},
	{
		name: "Hono Js",
		icon: hono,
	},
	{
		name: "Bun Js",
		icon: bun,
	},
	{
		name: "Flask",
		icon: flask,
	},
	{
		name: "Puppeteer",
		icon: puppeteer,
	},
	{
		name: "MUI",
		icon: mui,
	},
	{
		name: "Nest Js",
		icon: nestjs,
	},
	{
		name: "Electron",
		icon: electron,
	},
];

export const socialLinks = [
	{
		id: "gmail",
		title: "Gmail",
		link: "mailto:smmr.career@gmail.com?subject=About work",
		icon: "/social/gmail.svg",
	},
	{
		id: "github",
		title: "Github",
		link: "https://github.com/Sharif-Minhaz",
		icon: "/social/github.svg",
	},
	{
		id: "linked-in",
		title: "Linked In",
		link: "https://www.linkedin.com/in/minhaz-rabbi-614724205/",
		icon: "/social/linkedin.svg",
	},
	{
		id: "facebook",
		title: "Facebook",
		link: "https://www.facebook.com/sharif.mdminhaz/",
		icon: "/social/facebook.svg",
	},
];

export const sidebarSocials = [
	{
		id: "facebook-link-nav",
		title: "facebook",
		link: "https://www.facebook.com/sharif.mdminhaz",
		icon: faFacebook,
	},
	{
		id: "twitter-link-nav",
		title: "x",
		link: "https://twitter.com/rabbi_minhaz",
		icon: faXTwitter,
	},
	{
		id: "github-link-nav",
		title: "github",
		link: "https://github.com/Sharif-Minhaz",
		icon: faGithub,
	},
	{
		id: "linkedin-link-nav",
		title: "linkedin",
		link: "https://www.linkedin.com/in/minhaz-rabbi-614724205/",
		icon: faLinkedin,
	},
];

export const experiences = [
	{
		title: "Jr. Software Engineer",
		company_name: "Right Brain Solution Ltd.",
		icon: rbs,
		iconBg: "#E6DEDD",
		date: "Nov 2024 - Present",
		points: [
			"Designed and implemented robust, scalable, and efficient server-side applications, APIs, and databases using Javascript.",
			"Managed and optimized databases (e.g. MongoDB) to ensure data integrity, performance, and security.",
			"Integrated third-party services and APIs to enhance the functionality of web applications, streamlining processes and improving user experiences.",
			" Conducted thorough testing, debugging, and code optimization to improve application performance, security, and overall reliability.",
		],
	},
	{
		title: "Full Stack Developer (Internship)",
		company_name: "Int. Affairs Office, DIU",
		icon: diu,
		iconBg: "#E6DEDD",
		date: "July - November 2023",
		points: [
			"Developed and maintained front-end web components using HTML, CSS, and JavaScript to ensure responsive and visually appealing websites.",
			"Collaborated with content creators to integrate and update website content, ensuring consistent quality and relevance.",
			"Resolved technical issues and optimized web performance through systematic debugging and problem-solving.",
			"Worked closely with cross-functional teams, including designers and back-end developers, to implement design concepts and integrate web features seamlessly.",
		],
	},
];

export const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Minhaz proved me wrong.",
		name: "Kelly Kennedy",
		designation: "CFO",
		star: 5,
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/men/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Minhaz does. Like it very much",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		star: 5,
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Minhaz optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Carl Coleman",
		designation: "CTO",
		star: 5,
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		testimonial:
			"Job done perfectly before the deadline. Code was optimized and scalable too. We will work soon.",
		name: "Harry Kane",
		designation: "CEO",
		star: 5,
		company: "CoreDamn Enterprises",
		image: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		testimonial:
			"Minhaz's attention to detail and dedication to delivering high-quality work is unparalleled. Highly recommend!",
		name: "Emily Johnson",
		designation: "CTO",
		star: 5,
		company: "GHI Solutions",
		image: "https://randomuser.me/api/portraits/men/8.jpg",
	},
	{
		testimonial:
			"Working with Minhaz was a pleasure from start to finish. His expertise and professionalism are commendable.",
		name: "Michael Smith",
		designation: "CEO",
		company: "JKL Enterprises",
		star: 5,
		image: "https://randomuser.me/api/portraits/men/9.jpg",
	},
];

export const TECH_COLORS = {
	NEXTJS: { name: "nextjs", color: "#a9a9a9" },
	REACT: { name: "react", color: "#5ed3f3" },
	TAILWIND: { name: "tailwind", color: "#66dfcf" },
	TYPESCRIPT: { name: "typescript", color: "#00a2ff" },
	MONGODB: { name: "mongodb", color: "#12a54f" },
	REDUX: { name: "redux", color: "#7248b6" },
	EXPRESS: { name: "express", color: "#7e7e7e" },
	FRAMER_MOTION: { name: "framer-motion", color: "hotpink" },
	EJS: { name: "ejs", color: "#8ba438" },
	SCSS: { name: "scss", color: "#c66394" },
	ASTRO: { name: "astro", color: "#ff6600" },
	FIREBASE: { name: "firebase", color: "#ffb700" },
	HONOJS: { name: "honojs", color: "#ff9958" },
	POSTGRESQL: { name: "postgresql", color: "#1972b6" },
	BUN: { name: "bun", color: "#f3e9d8" },
	HTML: { name: "html", color: "#dd4b25" },
	CSS: { name: "css", color: "#006ab2" },
	JS: { name: "js", color: "#efd81d" },
	JQUERY: { name: "jQuery", color: "#0865a7" },
	BOOTSTRAP: { name: "bootstrap", color: "#efa3d6" },
	SOCKET_IO: { name: "socket.io", color: "#adadad" },
	ELECTRON: { name: "electron", color: "#dd4b25" },
	MANTINE: { name: "mantine", color: "#006ab2" },
	ELECTRON_FORGE: { name: "electron-forge", color: "#efa3d6" },
} as const;

export const projects = [
	{
		name: "LDPAN",
		description:
			"A localized web-based platform that serves as a disaster preparedness and assistance network.",
		tags: [
			{ ...TECH_COLORS.NEXTJS },
			{ ...TECH_COLORS.TAILWIND },
			{ ...TECH_COLORS.TYPESCRIPT },
			{ ...TECH_COLORS.MONGODB },
		],
		image: ldpan,
		source_code_link:
			"https://github.com/Sharif-Minhaz/Localized-Disaster-Preparedness-and-Assistance-Network",
		live_link: "https://ldpan-v4.vercel.app/",
	},
	{
		name: "Titan Settlers",
		description:
			"The project aims to educate and inspire the next generation of space enthusiasts through an engaging missions-based game.",
		tags: [
			{ ...TECH_COLORS.REACT },
			{ ...TECH_COLORS.FRAMER_MOTION },
			{ ...TECH_COLORS.TAILWIND },
		],
		image: titan,
		source_code_link: "https://github.com/Sharif-Minhaz/Titan-Settlers",
		live_link: "https://titan-settlers.vercel.app/",
	},
	{
		name: "MediAid",
		description:
			"A medicine donation platform, where people can donate their unused medicine and can get medicine by applying.",
		tags: [{ ...TECH_COLORS.REACT }, { ...TECH_COLORS.REDUX }, { ...TECH_COLORS.EXPRESS }],
		image: mediaid,
		source_code_link: "https://github.com/Sharif-Minhaz/MediAid",
		live_link: "https://mediaid-online-platform.netlify.app/",
	},
	{
		name: "Cafe Vista",
		description:
			"A coffee shop management system with two category of user availability. Focused on the backend system most.",
		tags: [
			{ ...TECH_COLORS.EJS },
			{ ...TECH_COLORS.MONGODB },
			{ ...TECH_COLORS.EXPRESS },
			{ ...TECH_COLORS.SCSS },
		],
		image: coffee,
		source_code_link: "https://github.com/Sharif-Minhaz/Cafe-Vista",
		live_link: "https://coffee-shop-xrhs.onrender.com/",
	},
	{
		name: "DEV Inertia",
		description:
			"DEV Inertia is a blog publishing platform for publishing .md, .mdx or general purpose blogs.",
		tags: [
			{ ...TECH_COLORS.ASTRO },
			{ ...TECH_COLORS.TAILWIND },
			{ ...TECH_COLORS.TYPESCRIPT },
		],
		image: devInertia,
		source_code_link: "https://github.com/Sharif-Minhaz/DevInertia-Blog",
		live_link: "https://dev-inertia-blog.netlify.app/",
	},
	{
		name: "Treker",
		description:
			"Tour management app using mern stack developed for smoother user experience througout the booking to ending of the tour.",
		tags: [{ ...TECH_COLORS.FIREBASE }, { ...TECH_COLORS.EXPRESS }, { ...TECH_COLORS.REACT }],
		image: treker,
		source_code_link: "https://github.com/Sharif-Minhaz/Treker",
		live_link: "https://travel-assistant-v1.netlify.app/",
	},
	{
		name: "Bun Shop",
		description:
			"Bun shop is a full-stack bun selling platform with online payment system (sslcommerz) integrated for order management.",
		tags: [
			{ ...TECH_COLORS.HONOJS },
			{ ...TECH_COLORS.NEXTJS },
			{ ...TECH_COLORS.POSTGRESQL },
			{ ...TECH_COLORS.BUN },
		],
		image: bunShop,
		source_code_link: "https://github.com/Sharif-Minhaz/next-bun-shop-frontend",
		live_link: "https://next-bun-shop-frontend.vercel.app",
	},
	{
		name: "Admin Dashboard",
		description: "A html Admin-dashboard template created with html, css. js and jquery.",
		tags: [
			{ ...TECH_COLORS.HTML },
			{ ...TECH_COLORS.CSS },
			{ ...TECH_COLORS.JS },
			{ ...TECH_COLORS.BOOTSTRAP },
		],
		image: admin,
		source_code_link: "https://github.com/Sharif-Minhaz/Admin-Dashboard",
		live_link: "https://sharif-minhaz.github.io/Admin-Dashboard/",
	},
	{
		name: "ChatVerse",
		description:
			"A modern, secure chat app for seamless communication in real-time using socket.io.",
		tags: [
			{ ...TECH_COLORS.EXPRESS },
			{ ...TECH_COLORS.REACT },
			{ ...TECH_COLORS.SOCKET_IO },
			{ ...TECH_COLORS.MONGODB },
		],
		image: chatVerse,
		source_code_link: "https://github.com/Sharif-Minhaz/ChatVerse",
		live_link: "https://chatverse-9vo5.onrender.com",
	},
	{
		name: "E-Commerce Template",
		description: "E-commerce web project for managing products orders and shopping cart.",
		tags: [
			{ ...TECH_COLORS.HTML },
			{ ...TECH_COLORS.CSS },
			{ ...TECH_COLORS.JS },
			{ ...TECH_COLORS.BOOTSTRAP },
		],
		image: eCom,
		source_code_link: "https://github.com/Sharif-Minhaz/E-Commerce-website",
		live_link: "https://sharif-minhaz.github.io/E-Commerce-website/",
	},
	{
		name: "E-Com Guard",
		description:
			"A web based ecommerce and POS system that provides a user-friendly interface for managing sales and inventory.",
		tags: [
			{ ...TECH_COLORS.NEXTJS },
			{ ...TECH_COLORS.TAILWIND },
			{ ...TECH_COLORS.MONGODB },
			{ ...TECH_COLORS.TYPESCRIPT },
		],
		image: ecomPos,
	},
	{
		name: "POS System",
		description:
			"A cross-platform POS system built with Electron Forge that supports both offline (SQLite-based) and online (API-driven) operations.",
		tags: [
			{ ...TECH_COLORS.ELECTRON },
			{ ...TECH_COLORS.MANTINE },
			{ ...TECH_COLORS.REACT },
			{ ...TECH_COLORS.ELECTRON_FORGE },
		],
		image: salePos,
	},
];

export const blogs = [
	{
		id: 1,
		title: "Unleashing the Power of Progressive Web Apps: The Future of Web Development",
		url: "https://dev-inertia-blog.netlify.app/blog/view/unleashing-the-power-of-progressive-web-apps-the-future-of-web-development",
		cover: blog1,
		publishedDate: "March 27, 2024",
		body: "In the current swiftly transforming digital sphere, providing a top-notch user experience is crucial. With people depending more and more on mobile gadgets and seeking quick, effortless interactions, developers are continuously striving to find ground-breaking techniques that fuse native apps with web experiences. This is where Progressive Web Apps (PWAs) come in as revolutionary tools for web development.",
	},
	{
		id: 2,
		title: "Building Robust REST APIs with Python Flask: A Guide for Developers",
		cover: blog2,
		url: "https://dev-inertia-blog.netlify.app/blog/view/building-robust-rest-apis-with-python-flask-a-guide-for-developers",
		publishedDate: "March 27, 2024",
		body: "In the realm of web development, creating robust and efficient RESTful APIs is essential for building scalable and interoperable applications. With the rise in demand for dynamic web services, developers are turning to lightweight frameworks like Flask to streamline the development process and deliver powerful APIs with minimal overhead. In this guide, we’ll explore how to leverage Python Flask to build RESTful APIs that meet the needs of modern web applications.",
	},
];

const LEGAL_UPDATED = "October 28, 2026";

export const legalPages = {
	terms: {
		title: "Terms & Policy",
		updated: LEGAL_UPDATED,
		sections: [
			{
				heading: "About This Website",
				body: [
					`This website (minhaz.bond) is the personal portfolio of ${basicInfo.name}, a web developer based in ${basicInfo.address}. By using this website you agree to these terms. If you do not agree, please do not use the site.`,
				],
			},
			{
				heading: "Use of the Website",
				body: [
					"You may browse, read and share links to this website for personal and non-commercial purposes.",
					"You may not copy, republish or resell the design, source code, images, resume or written content of this website as your own without written permission.",
					"You may not attempt to disrupt the website, abuse the contact form, or send spam or malicious content through it.",
				],
			},
			{
				heading: "Intellectual Property",
				body: [
					`Unless stated otherwise, the content, design and code of this website are © 2021-${new Date().getFullYear()} ${basicInfo.name}. All rights reserved.`,
					"Logos, brand names and trademarks of technologies, companies and clients shown on this website belong to their respective owners and are used only to describe skills, tools and past work.",
				],
			},
			{
				heading: "Information I Collect",
				body: [
					"This website does not require an account and does not use advertising or analytics tracking cookies.",
					"When you use the contact form, the name, email address and message you enter are sent to my email inbox through EmailJS, a third-party email delivery service. I use this information only to reply to you and to discuss possible work. I do not sell or share it for marketing.",
					"Your theme preference (light or dark mode) is saved in your browser's local storage so the site remembers your choice. It never leaves your device and you can clear it from your browser settings at any time.",
					"The hosting provider may keep standard server logs (such as IP address, browser type and pages visited) for security and performance purposes.",
				],
			},
			{
				heading: "Third-Party Services and Links",
				body: [
					"This website links to external sites such as GitHub, LinkedIn, X (Twitter), Facebook, blog platforms and live project demos. Those sites have their own terms and privacy policies, and I am not responsible for their content or practices.",
				],
			},
			{
				heading: "Your Rights",
				body: [
					`You can ask me to see, correct or delete any message or personal information you sent through the contact form by emailing ${basicInfo.email}.`,
				],
			},
			{
				heading: "Services and Work Agreements",
				body: [
					"Services listed on this website are a general description of what I offer. Any paid work is governed by a separate agreement or proposal agreed between me and the client, which takes priority over these terms.",
				],
			},
			{
				heading: "Changes to These Terms",
				body: [
					'I may update these terms from time to time. The "Last updated" date at the top of this page shows when they were last changed. Continued use of the website means you accept the updated terms.',
				],
			},
			{
				heading: "Governing Law",
				body: ["These terms are governed by the laws of Bangladesh."],
			},
			{
				heading: "Contact",
				body: [
					`Questions about these terms? Email ${basicInfo.email} or call ${basicInfo.mobile1}.`,
				],
			},
		],
	},
	disclaimer: {
		title: "Disclaimer",
		updated: LEGAL_UPDATED,
		sections: [
			{
				heading: "General Information",
				body: [
					`The information on this website is provided by ${basicInfo.name} for general and informational purposes only. While I try to keep it accurate and up to date, I make no guarantees about its completeness, accuracy or reliability.`,
				],
			},
			{
				heading: "No Professional Advice",
				body: [
					"Blog posts, code samples and technical content on or linked from this website reflect my personal experience and opinions. They are not professional, legal or financial advice. Use any code or guidance at your own risk and test it before using it in production.",
				],
			},
			{
				heading: "Portfolio and Experience",
				body: [
					"Projects, experience, statistics (such as years of experience, finished projects and satisfied clients) and skills shown on this website describe my own work and are summarised for presentation. Some projects may have been built with teams, for clients, or as learning exercises.",
					"Opinions expressed here are my own and do not represent the views of any current or past employer, client or organisation.",
				],
			},
			{
				heading: "Testimonials",
				body: [
					"Testimonials reflect the personal experiences of individual clients and colleagues. They do not guarantee that you will get the same results.",
				],
			},
			{
				heading: "External Links",
				body: [
					"This website contains links to third-party websites, live project demos and blog platforms. I do not control these sites and am not responsible for their content, availability or privacy practices. A link does not imply endorsement.",
				],
			},
			{
				heading: "Trademarks",
				body: [
					"All product names, logos and brands mentioned on this website are the property of their respective owners. Their use does not imply any affiliation with or endorsement by them.",
				],
			},
			{
				heading: "Limitation of Liability",
				body: [
					"I am not liable for any loss or damage arising from the use of this website or the information on it. Availability for work, as shown on this website, may change without notice.",
				],
			},
			{
				heading: "Contact",
				body: [`If you have any questions about this disclaimer, email ${basicInfo.email}.`],
			},
		],
	},
};
