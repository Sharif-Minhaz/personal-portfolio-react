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
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faGithub,
	faJs,
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
	damex,
	mediaid,
	titan,
	admin,
	coffee,
	eCom,
	blog1,
	blog2,
} from "../assets";

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
	moto1: "I will help you build brand for your business at an affordable price. Many clients have procured exceptional results while working with our dedicated team. When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	moto2: "Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.",
	mobile1: "+880 1308673831",
	mobile2: "+880 1308566474",
};

export const workingHistory = [
	{
		title: "Members",
		count: "4+",
		icon: faUser,
	},
	{
		title: "Finished Projects",
		count: "10+",
		icon: faTasks,
	},
	{
		title: "Satisfied Peoples",
		count: "100+",
		icon: faSmileBeam,
	},
	{
		title: "Branches",
		count: "2+",
		icon: faBuilding,
	},
];

export const services = [
	{ title: "JS Programming", icon: faJs },
	{ title: "JS Programming", icon: faJs },
	{ title: "JS Programming", icon: faJs },
	{ title: "JS Programming", icon: faJs },
	{ title: "JS Programming", icon: faJs },
	{ title: "JS Programming", icon: faJs },
];

export const educations = [
	{
		title: "Science",
		institute: "Residential Laboratory College",
		timeSpan: "2017 - 2019",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam quae voluptatum animi debitis aut.",
	},
	{
		title: "Science",
		institute: "Residential Laboratory College",
		timeSpan: "2017 - 2019",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam quae voluptatum animi debitis aut.",
	},
	{
		title: "Science",
		institute: "Residential Laboratory College",
		timeSpan: "2017 - 2019",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam quae voluptatum animi debitis aut.",
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
		title: "Backend Developer",
		company_name: "Stylon",
		icon: stylon,
		iconBg: "#E6DEDD",
		date: "Jan 2022 - Present",
		points: [
			"Designed and implemented robust, scalable, and efficient server-side applications, APIs, and databases using Javascript.",
			"Managed and optimized databases (e.g. MongoDB) to ensure data integrity, performance, and security.",
			"Integrated third-party services and APIs to enhance the functionality of web applications, streamlining processes and improving user experiences.",
			" Conducted thorough testing, debugging, and code optimization to improve application performance, security, and overall reliability.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Damex",
		icon: damex,
		iconBg: "#E6DEDD",
		date: "July 2023 - Present",
		points: [
			"Developing and maintaining web applications using MERN stack related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

export const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Minhaz proved me wrong.",
		name: "Kelly Kennedy",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/men/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Minhaz does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Minhaz optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Carl Coleman",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/men/6.jpg",
	},
];

export const projects = [
	{
		name: "Titan Settlers",
		description:
			"The project aims to educate and inspire the next generation of space enthusiasts through an engaging missions-based game.",
		tags: [
			{
				name: "react",
				color: "blue",
			},
			{
				name: "framer-motion",
				color: "pink",
			},
			{
				name: "tailwind",
				color: "blue",
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
				color: "blue",
			},
			{
				name: "redux",
				color: "",
			},
			{
				name: "express",
				color: "red",
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
				color: "red",
			},
			{
				name: "mongodb",
				color: "green",
			},
			{
				name: "scss",
				color: "pink",
			},
		],
		image: coffee,
		source_code_link: "https://github.com/Sharif-Minhaz/Cafe-Vista",
		live_link: "https://coffee-shop-xrhs.onrender.com/",
	},
	{
		name: "Admin Dashboard",
		description: "A html Admin-dashboard template created with html, css. js and jquery.",
		tags: [
			{
				name: "html",
				color: "red",
			},
			{
				name: "css",
				color: "blue",
			},
			{
				name: "jQuery",
				color: "blue",
			},
		],
		image: admin,
		source_code_link: "https://github.com/Sharif-Minhaz/Admin-Dashboard",
		live_link: "https://sharif-minhaz.github.io/Admin-Dashboard/",
	},
	{
		name: "E-Commerce",
		description: "E-commerce web project for managing products orders and shopping cart.",
		tags: [
			{
				name: "html",
				color: "red",
			},
			{
				name: "css",
				color: "blue",
			},
			{
				name: "js",
				color: "red",
			},
		],
		image: eCom,
		source_code_link: "https://github.com/Sharif-Minhaz/E-Commerce-website",
		live_link: "https://sharif-minhaz.github.io/E-Commerce-website/",
	},
];

export const blogs = [
	{
		title: "How to forget pain",
		cover: blog1,
		publishedDate: "June 21, 2021",
		body: "Lorem ipsum dolor sit, amet consectetur. Delenitiuer magnam fugiat, ad iure velit reiciendis unde et qui. Lorem ipsumert dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem, accusantium dolorem nostrum delectus odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.",
	},
	{
		title: "How to forget pain",
		cover: blog2,
		publishedDate: "June 21, 2021",
		body: "Lorem ipsum dolor sit, amet consectetur. Delenitiuer magnam fugiat, ad iure velit reiciendis unde et qui. Lorem ipsumert dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem, accusantium dolorem nostrum delectus odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.",
	},
];
