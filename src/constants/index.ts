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
	stylon,
	corelab,
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
} from "../assets";

export const GITHUB_LINK = "https://github.com/Sharif-Minhaz";

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
		count: "1",
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
		count: "1",
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
		title: "Science",
		institute: "K.M. Latif Institution",
		timeSpan: "2012 - 2017",
		description:
			"TK.m. Latif Institution is an educational establishment that is located at 22 Mathbaria Mathbaria Pirojpur. Its Educational Institute Identification Number or EIIN, is 102724. On 01 January.",
	},
	{
		title: "Science",
		institute: "Residential Laboratory College",
		timeSpan: "2017 - 2019",
		description:
			"Residential Laboratory College, since its establishment in 2009, has been playing distinct and unique role for the dissemination of modern, dynamic and quality.",
	},
	{
		title: "FSIT",
		institute: "Daffodil International University",
		timeSpan: "2020 - 2024",
		description:
			"Being established in 2002, Daffodil International University has become a prominent private university in Bangladesh, fostering education and innovation for more than 20000 students.",
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
		title: "Jr. Web Designer",
		company_name: "CorelabIT",
		icon: corelab,
		iconBg: "#E6DEDD",
		date: "July 2020 - February 2021",
		points: [
			"Developed and maintained front-end web components using HTML, CSS, and JavaScript to ensure responsive and visually appealing websites.",
			"Collaborated with content creators to integrate and update website content, ensuring consistent quality and relevance.",
			"Resolved technical issues and optimized web performance through systematic debugging and problem-solving.",
			"Worked closely with cross-functional teams, including designers and back-end developers, to implement design concepts and integrate web features seamlessly.",
		],
	},
	{
		title: "Software Engineer",
		company_name: "StylOn",
		icon: stylon,
		iconBg: "#E6DEDD",
		date: "Nov 2022 - Jul 2023",
		points: [
			"Designed and implemented robust, scalable, and efficient server-side applications, APIs, and databases using Javascript.",
			"Managed and optimized databases (e.g. MongoDB) to ensure data integrity, performance, and security.",
			"Integrated third-party services and APIs to enhance the functionality of web applications, streamlining processes and improving user experiences.",
			" Conducted thorough testing, debugging, and code optimization to improve application performance, security, and overall reliability.",
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

export const projects = [
	{
		name: "LDPAN",
		description:
			"A localized web-based platform that serves as a disaster preparedness and assistance network.",
		tags: [
			{
				name: "nextjs",
				color: "#a9a9a9",
			},
			{
				name: "tailwind",
				color: "#66dfcf",
			},
			{
				name: "typescript",
				color: "#00a2ff",
			},
			{
				name: "mongodb",
				color: "#12a54f",
			},
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
			{
				name: "react",
				color: "#5ed3f3",
			},
			{
				name: "framer-motion",
				color: "hotpink",
			},
			{
				name: "tailwind",
				color: "#66dfcf",
			},
		],
		image: titan,
		source_code_link: "https://github.com/Sharif-Minhaz/Titan-Settlers",
		live_link: "https://titan-settlers.vercel.app/",
	},
	{
		name: "MediAid",
		description:
			"A medicine donation platform, where people can donate their unused medicine and can get medicine by applying.",
		tags: [
			{
				name: "react",
				color: "#5ed3f3",
			},
			{
				name: "redux",
				color: "#7248b6",
			},
			{
				name: "express",
				color: "#7e7e7e",
			},
		],
		image: mediaid,
		source_code_link: "https://github.com/Sharif-Minhaz/MediAid",
		live_link: "https://mediaid-online-platform.netlify.app/",
	},
	{
		name: "Cafe Vista",
		description:
			"A coffee shop management system with two category of user availability. Focused on the backend system most.",
		tags: [
			{
				name: "ejs",
				color: "#8ba438",
			},
			{
				name: "mongodb",
				color: "#12a54f",
			},
			{
				name: "scss",
				color: "#c66394",
			},
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
			{
				name: "astro",
				color: "#ff6600",
			},
			{
				name: "tailwind",
				color: "#66dfcf",
			},
			{
				name: "typescript",
				color: "#00a2ff",
			},
		],
		image: devInertia,
		source_code_link: "https://github.com/Sharif-Minhaz/DevInertia-Blog",
		live_link: "https://dev-inertia-blog.netlify.app/",
	},
	{
		name: "Treker",
		description:
			"Tour management app using mern stack developed for smoother user experience througout the booking to ending of the tour.",
		tags: [
			{
				name: "firebase",
				color: "#ffb700",
			},
			{
				name: "express",
				color: "#7e7e7e",
			},
			{
				name: "react",
				color: "#5ed3f3",
			},
		],
		image: treker,
		source_code_link: "https://github.com/Sharif-Minhaz/Treker",
		live_link: "https://travel-assistant-v1.netlify.app/",
	},
	{
		name: "Admin Dashboard",
		description: "A html Admin-dashboard template created with html, css. js and jquery.",
		tags: [
			{
				name: "html",
				color: "#dd4b25",
			},
			{
				name: "css",
				color: "#006ab2",
			},
			{
				name: "jQuery",
				color: "#0865a7",
			},
			{
				name: "bootstrap",
				color: "#efa3d6",
			},
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
			{
				name: "express",
				color: "#7e7e7e",
			},
			{
				name: "react",
				color: "#5ed3f3",
			},
			{
				name: "socket.io",
				color: "#adadad",
			},
			{
				name: "mongodb",
				color: "#12a54f",
			},
		],
		image: chatVerse,
		source_code_link: "https://github.com/Sharif-Minhaz/ChatVerse",
		live_link: "https://chatverse-9vo5.onrender.com",
	},
	{
		name: "E-Commerce",
		description: "E-commerce web project for managing products orders and shopping cart.",
		tags: [
			{
				name: "html",
				color: "#dd4b25",
			},
			{
				name: "css",
				color: "#006ab2",
			},
			{
				name: "js",
				color: "#efd81d",
			},
			{
				name: "bootstrap",
				color: "#efa3d6",
			},
		],
		image: eCom,
		source_code_link: "https://github.com/Sharif-Minhaz/E-Commerce-website",
		live_link: "https://sharif-minhaz.github.io/E-Commerce-website/",
	},
];

export const blogs = [
	{
		id: 1,
		title: "Unleashing the Power of Progressive Web Apps: The Future of Web Development",
		url: "https://medium.com/@smmr.career/unleashing-the-power-of-progressive-web-apps-the-future-of-web-development-ac4a092b7b6e",
		cover: blog1,
		publishedDate: "March 27, 2024",
		body: "In the current swiftly transforming digital sphere, providing a top-notch user experience is crucial. With people depending more and more on mobile gadgets and seeking quick, effortless interactions, developers are continuously striving to find ground-breaking techniques that fuse native apps with web experiences. This is where Progressive Web Apps (PWAs) come in as revolutionary tools for web development.",
	},
	{
		id: 2,
		title: "Building Robust REST APIs with Python Flask: A Guide for Developers",
		cover: blog2,
		url: "https://medium.com/@smmr.career/building-robust-rest-apis-with-python-flask-a-guide-for-developers-b809a19bd57c",
		publishedDate: "March 27, 2024",
		body: "In the realm of web development, creating robust and efficient RESTful APIs is essential for building scalable and interoperable applications. With the rise in demand for dynamic web services, developers are turning to lightweight frameworks like Flask to streamline the development process and deliver powerful APIs with minimal overhead. In this guide, we’ll explore how to leverage Python Flask to build RESTful APIs that meet the needs of modern web applications.",
	},
];
