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
	faServer,
	faDesktop,
	faDatabase,
	faTerminal,
	faTabletScreenButton,
	faCloud,
	faBrain,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
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
	ecomGuard,
	electron,
	supabase,
	mysql,
	linux,
	kmLatif,
	rlc,
	playwright,
	postgresql,
	docker,
	nginx,
	vercel,
	ollama,
	apple,
	pageSentiment,
	salesMl,
	salesMlOverview,
	salesMlOverviewThumb,
	salesMlForecast,
	salesMlForecastThumb,
	salesMlSegments,
	salesMlSegmentsThumb,
	salesMlColdStart,
	salesMlColdStartThumb,
	salesMlDark,
	salesMlDarkThumb,
	rbs,
	diu,
	arfinHayet,
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
		id: "#services",
		title: "Services",
		icon: faCog,
	},
	{
		id: "#portfolio",
		title: "Portfolio",
		icon: faBriefcase,
	},
	{
		id: "#aboutme",
		title: "About Me",
		icon: faUser,
	},
	{
		id: "#summary",
		title: "Summary",
		icon: faIdBadge,
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
	moto1: "I’m a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Next.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let’s work together to bring your ideas to life!",
	moto2: "Delivering work within time and budget which meets the client’s requirements is my moto. With attention to detail and effective communication, I strive to exceed expectations and foster long-term client satisfaction.",
	mobile1: "+880 1308673831",
	mobile2: "+880 1608566474",
};

export const workingHistory = [
	{
		title: "Years of experience",
		count: "2",
		icon: faBusinessTime,
	},
	{
		title: "Finished Projects",
		count: "15",
		icon: faTasks,
	},
	{
		title: "Satisfied people",
		count: "10",
		icon: faSmileBeam,
	},
	{
		title: "Companies",
		count: "2",
		icon: faBuilding,
	},
];

export const servicesIntro = {
	title: "Services I offer",
	lead: "I help turn ideas into real products, from scalable web applications to desktop tools and AI integrations.",
	aside:
		"I focus on building practical, high-quality solutions that solve real problems, using modern tools and best practices.",
};

// tags name the tools each service is built with; logos fan out in the card's corner
export const services = [
	{
		title: "Web Application Development",
		icon: faDesktop,
		tone: "web",
		description:
			"Modern, responsive and scalable web applications using React, Next.js, Node.js and more.",
		tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
		logos: [
			{ name: "React", image: reactjs },
			{ name: "Next.js", image: next },
			{ name: "Tailwind CSS", image: tailwind },
		],
		action: "Build modern web apps",
	},
	{
		title: "Backend & API Development",
		icon: faServer,
		tone: "api",
		description:
			"REST APIs and backend systems built with Node.js, NestJS, Express and a range of databases.",
		tags: ["Node.js", "NestJS", "Express", "MongoDB", "PostgreSQL"],
		logos: [
			{ name: "Node.js", image: nodejs },
			{ name: "NestJS", image: nestjs },
			{ name: "Express", image: express },
		],
		action: "Build robust APIs",
	},
	{
		title: "Desktop & Cross-platform Apps",
		icon: faTabletScreenButton,
		tone: "desktop",
		description:
			"Custom desktop applications with Electron.js and tools for Windows, macOS and Linux.",
		tags: ["Electron", "Windows", "macOS", "Linux"],
		logos: [
			{ name: "Electron", image: electron },
			{ name: "macOS", image: apple },
			{ name: "Linux", image: linux },
		],
		action: "Desktop solutions",
	},
	{
		title: "Database Design & Optimization",
		icon: faDatabase,
		tone: "data",
		description:
			"Efficient database schema design, data modelling and performance optimization.",
		tags: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
		logos: [
			{ name: "MongoDB", image: mongodb },
			{ name: "MySQL", image: mysql },
			{ name: "PostgreSQL", image: postgresql },
		],
		action: "Design better data systems",
	},
	{
		title: "DevOps & Deployment",
		icon: faCloud,
		tone: "devops",
		description:
			"Deploy and maintain applications on AWS, Vercel, Render, Nginx, Docker and set up CI/CD pipelines.",
		tags: ["AWS", "Vercel", "Docker", "Nginx", "CI/CD"],
		logos: [
			{ name: "Docker", image: docker },
			{ name: "Nginx", image: nginx },
			{ name: "Vercel", image: vercel },
		],
		action: "Deploy with confidence",
	},
	{
		title: "AI Integration & Automation",
		icon: faBrain,
		tone: "ai",
		description:
			"Integrate AI models (OpenAI, Ollama, LM Studio, RAG) and build automation tools to improve productivity and business workflows.",
		tags: ["OpenAI", "Ollama", "RAG", "Python", "Automation"],
		logos: [
			{ name: "Python", image: python },
			{ name: "Ollama", image: ollama },
		],
		action: "Automate with AI",
	},
];

export const educations = [
	{
		title: "FSIT",
		institute: "Daffodil International University",
		logo: diu,
		timeSpan: "2020 - 2024",
		description:
			"Being established in 2002, Daffodil International University has become a prominent private university in Bangladesh, fostering education and innovation for more than 20000 students.",
	},
	{
		title: "Science",
		institute: "Residential Laboratory College",
		logo: rlc,
		timeSpan: "2017 - 2019",
		description:
			"Residential Laboratory College, since its establishment in 2009, has been playing distinct and unique role for the dissemination of modern, dynamic and quality.",
	},
	{
		title: "Science",
		institute: "K.M. Latif Institution",
		logo: kmLatif,
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
	{
		name: "Supabase",
		icon: supabase,
	},
	{
		name: "MySQL",
		icon: mysql,
	},
	{
		name: "Linux",
		icon: linux,
	},
	{
		name: "Playwright",
		icon: playwright,
	},
];

// how the technologies read on the page: grouped by what each one does
export const toolkitIntro = {
	title: "Technologies I work with",
	lead: "The tools and technologies I use to build, design, and ship products.",
};

export const techGroups = [
	{
		title: "Front end",
		tone: "front",
		icon: faDesktop,
		description: "Build modern, responsive and interactive user interfaces.",
		tools: [
			"HTML 5",
			"CSS 3",
			"JavaScript",
			"TypeScript",
			"React JS",
			"Next Js",
			"Redux Toolkit",
			"Tailwind CSS",
			"Shadcn/ui",
			"MUI",
		],
	},
	{
		title: "Back end and data",
		tone: "back",
		icon: faDatabase,
		description: "Build scalable APIs, handle data and integrate services.",
		tools: [
			"Node JS",
			"Express",
			"Nest Js",
			"Hono Js",
			"Bun Js",
			"Python",
			"Flask",
			"MongoDB",
			"Supabase",
			"MySQL",
		],
	},
	{
		title: "Tooling and desktop",
		tone: "tool",
		icon: faTerminal,
		description: "Tools for development, automation and desktop applications.",
		tools: ["git", "Linux", "Puppeteer", "Playwright", "Electron"],
		roles: {
			git: "Version control",
			Linux: "Operating system",
			Puppeteer: "Automation",
			Playwright: "Testing",
			Electron: "Desktop apps",
		} as Record<string, string>,
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
		link: "https://www.linkedin.com/in/minhaz-sharif",
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
		link: "https://www.linkedin.com/in/minhaz-sharif",
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
			"Minhaz is a great developer to work with. We are currently working on projects together and have a great understanding. He handles technical difficulties very efficiently, and I really enjoy working with him.",
		name: "Arfin Hayet",
		designation: "Senior Software Engineer",
		company: "Noor AI",
		relation: "Worked with Minhaz on the same team · February 9, 2026",
		image: arfinHayet,
		source:
			"https://www.linkedin.com/in/minhaz-sharif/details/recommendations/",
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
	PYTHON: { name: "python", color: "#4b8bbe" },
	FLASK: { name: "flask", color: "#b8b8b8" },
	VUE: { name: "vue", color: "#42b883" },
	SCIKIT_LEARN: { name: "scikit-learn", color: "#f49b42" },
	TF_IDF: { name: "tf-idf", color: "#65d6c3" },
	LOGISTIC_REGRESSION: { name: "logistic regression", color: "#7d8fea" },
	SQLITE: { name: "sqlite", color: "#80a7d8" },
	FACEBOOK_GRAPH_API: { name: "facebook graph api", color: "#4d8fe8" },
	PANDAS: { name: "pandas", color: "#8a72c7" },
	RECHARTS: { name: "recharts", color: "#e87452" },
	JOBLIB: { name: "joblib", color: "#53a88b" },
	UV: { name: "uv", color: "#d2a856" },
} as const;

export interface ProjectChallenge {
	challenge: string;
	solution: string;
}

export interface ProjectScreen {
	label: string;
	caption: string;
	image: string;
	thumb: string;
}

export interface ProjectFigure {
	value: string;
	label: string;
}

export interface PortfolioProject {
	slug: string;
	name: string;
	category?: string;
	description: string;
	overview: string;
	features: string[];
	engineeringHighlights?: string[];
	challenges?: ProjectChallenge[];
	tags: { name: string; color: string }[];
	image: string;
	screens?: ProjectScreen[];
	figures?: ProjectFigure[];
	source_code_link?: string;
	live_link?: string;
}

export const projects: PortfolioProject[] = [
	{
		slug: "sales-ml",
		name: "SalesML",
		category: "AI & Data",
		description:
			"E-commerce revenue forecasting, customer segmentation, and cold-start planning on Brazil's Olist dataset.",
		overview:
			"SalesML is an end-to-end analytics project built on the public Olist Brazilian e-commerce dataset (2016–2018). A reproducible Python pipeline cleans and audits order data, forecasts weekly revenue, segments customers by purchasing behavior, and serves the saved models through a Flask API to a React dashboard. It also includes a cold-start estimator for stores without sales history. The project emphasizes honest evaluation and communicating uncertainty instead of presenting model output as certainty.",
		features: [
			"Overview dashboard reports revenue, orders, unique customers, average order value, repeat-customer rate, and the usable data window.",
			"Cleaning audit shows which rows were removed, why they were removed, and which extreme prices were retained rather than silently discarded.",
			"Forecast view compares nine baseline, statistical, and machine-learning approaches and presents up to 12 weeks of predictions with uncertainty bands.",
			"Walk-forward backtesting evaluates forecasts on later time periods, with model comparisons, error metrics, and confidence intervals.",
			"Customer segmentation groups shoppers using recency, frequency, and monetary value, then pairs segments with suggested actions.",
			"A customer-classification form applies the saved segmentation pipeline to new RFM values and reports segment affinity as a distance-based score.",
			"Cold-start scenarios estimate revenue from visitors, conversion rate, average order value, and optional traffic growth when a store has no history.",
			"Dashboard charts can switch to tables, and the interface includes separate light and dark palettes.",
		],
		engineeringHighlights: [
			"Uses 98,199 orders and 94,983 unique customers; automatically selects 84 complete weeks from 2017-01-09 through 2018-08-13 and excludes incomplete edges.",
			"Compares nine forecasting methods over 21 expanding-window folds with a 12-week horizon, avoiding random splits that would leak future information.",
			"The README reports best-model MAE of R$40.0k per week (about 17.5% MAPE), 9.7% better than the naive baseline on this historical dataset.",
			"The top six model confidence intervals overlap, so the README does not claim a clear winner over a four-week moving average.",
			"Prediction intervals reached 57% coverage against an 80% target; the dashboard surfaces that calibration shortfall rather than hiding it.",
			"RFM preprocessing and KMeans are persisted together in a scikit-learn Pipeline using joblib; training is separate from API serving.",
			"The backend uses Python, pandas, scikit-learn, Flask, and uv; the frontend uses React, TypeScript, Tailwind CSS, Vite, and Recharts.",
		],
		challenges: [
			{
				challenge:
					"The source export contains partial periods and canceled or unavailable orders that can distort revenue and forecasts.",
				solution:
					"The pipeline records a cleaning audit, excludes non-sales, validates amounts, and detects the complete weekly history from the data instead of hard-coding its date range.",
			},
			{
				challenge:
					"In-sample evaluation made the earlier Random Forest result look much stronger than its performance on unseen periods.",
				solution:
					"The updated pipeline compares nine models with expanding-window walk-forward backtesting and a naive baseline; it reports the overlapping confidence intervals and known limitations.",
			},
			{
				challenge:
					"A new store has no sales history for a trained forecasting model to use.",
				solution:
					"The cold-start view uses explicit visitor, conversion, and average-order-value assumptions to show low/base/high scenarios rather than pretending a history-based forecast is possible.",
			},
		],
		tags: [
			{ ...TECH_COLORS.PYTHON },
			{ ...TECH_COLORS.SCIKIT_LEARN },
			{ ...TECH_COLORS.PANDAS },
			{ ...TECH_COLORS.FLASK },
			{ ...TECH_COLORS.REACT },
			{ ...TECH_COLORS.TYPESCRIPT },
			{ ...TECH_COLORS.TAILWIND },
			{ ...TECH_COLORS.RECHARTS },
			{ ...TECH_COLORS.JOBLIB },
			{ ...TECH_COLORS.UV },
		],
		image: salesMl,
		// screens and figures come from the project's README
		screens: [
			{
				label: "Overview",
				caption:
					"KPIs, weekly revenue and the cleaning audit, data quality first",
				image: salesMlOverview,
				thumb: salesMlOverviewThumb,
			},
			{
				label: "Forecast",
				caption:
					"A 12-week forecast with its 80% band and the model leaderboard",
				image: salesMlForecast,
				thumb: salesMlForecastThumb,
			},
			{
				label: "Segments",
				caption: "Four RFM segments, each with the action it calls for",
				image: salesMlSegments,
				thumb: salesMlSegmentsThumb,
			},
			{
				label: "Cold start",
				caption: "Funnel scenarios for a store with no sales history yet",
				image: salesMlColdStart,
				thumb: salesMlColdStartThumb,
			},
			{
				label: "Dark mode",
				caption:
					"Separate light and dark palettes, both checked for colour-blind safety",
				image: salesMlDark,
				thumb: salesMlDarkThumb,
			},
		],
		figures: [
			{ value: "98,199", label: "real orders, cleaned with an audit trail" },
			{ value: "9", label: "models compared over 21 walk-forward folds" },
			{ value: "34%", label: "of customers bring in 61% of revenue" },
		],
		source_code_link: "https://github.com/Sharif-Minhaz/sales-ml",
	},
	{
		slug: "page-sentiment",
		name: "Page Sentiment",
		category: "AI & Data",
		description:
			"A Facebook Page comment sentiment dashboard using a TF-IDF and Logistic Regression model trained on Sentiment140.",
		overview:
			"Page Sentiment is a dashboard for reviewing the sentiment of comments on a Facebook Page. It fetches the latest comments on demand, runs them through a classical text-classification pipeline, and summarizes positive, neutral, and negative results in charts and tables. The backend is Flask/Python, the dashboard is Vue, and the saved scikit-learn Pipeline keeps text vectorization and classification together at prediction time.",
		features: [
			"Fetches the latest comments from a configured Facebook Page when the user requests an update; it does not rely on background workers, webhooks, or cron jobs.",
			"Summarizes classified comments with headline totals and positive, neutral, and negative proportions.",
			"Shows sentiment distribution and comment activity over time with labeled dashboard charts.",
			"Surfaces the most negative comments first in a needs-attention view to help prioritize replies.",
			"Breaks sentiment down by post so page owners can compare comment patterns across posts.",
			"Includes a try-the-model control for entering text and viewing the classifier's prediction.",
			"Displays model insights, learned positive/negative terms, training configuration, and evaluation context.",
			"Supports light and dark dashboard themes with a diverging positive/negative palette and neutral midpoint.",
		],
		engineeringHighlights: [
			"Trains on Sentiment140, a 1.6-million-tweet dataset; the documented default trains on a random 200,000-row sample for iteration speed.",
			"Compares unigram and bigram TF-IDF feature configurations; the README reports 80.2% held-out test accuracy for the current 200k-sample model.",
			"Saves the vectorizer and classifier together in a scikit-learn Pipeline so prediction uses the same vocabulary learned during training.",
			"Uses a probability band from 0.40 to 0.60 to report neutral sentiment, since the source dataset itself is binary-labeled.",
			"Separates data preparation, model training, prediction, Facebook API access, SQLite persistence, and Flask routes into backend modules.",
			"The Vue/Vite frontend proxies API requests during development and can build into the Flask service for single-process deployment.",
		],
		challenges: [
			{
				challenge:
					"A binary training dataset cannot directly label neutral comments.",
				solution:
					"The prediction layer applies a documented 0.40–0.60 probability band as a calibration rule and returns neutral for predictions in that range.",
			},
			{
				challenge:
					"Single-word features miss meaning that depends on negation, such as 'not happy'.",
				solution:
					"The README compares bigram TF-IDF configurations, which can retain phrases such as 'not bad' as combined features; stopword removal is adjusted so negation terms are not discarded.",
			},
			{
				challenge:
					"English-only training data is not reliable for Bangla, Banglish, or sarcasm.",
				solution:
					"The project documents these limitations explicitly; non-English or empty cleaned input is treated as neutral with zero confidence rather than presented as a confident classification.",
			},
		],
		tags: [
			{ ...TECH_COLORS.PYTHON },
			{ ...TECH_COLORS.FLASK },
			{ ...TECH_COLORS.VUE },
			{ ...TECH_COLORS.SCIKIT_LEARN },
			{ ...TECH_COLORS.TF_IDF },
			{ ...TECH_COLORS.LOGISTIC_REGRESSION },
			{ ...TECH_COLORS.SQLITE },
			{ ...TECH_COLORS.FACEBOOK_GRAPH_API },
		],
		image: pageSentiment,
		source_code_link:
			"https://github.com/Sharif-Minhaz/sentiment-analysis-fb-page",
	},
	{
		slug: "ldpan",
		name: "LDPAN",
		description:
			"A localized web-based platform that serves as a disaster preparedness and assistance network.",
		overview:
			"LDPAN is a community-focused emergency preparedness concept built around a practical problem: people affected by disasters need timely information, clear safety guidance, and a way to coordinate local help. The platform brings residents, volunteers, and local authorities together so communities can find resources and organize support before and during an emergency.",
		features: [
			"Emergency alerts pair hazard updates with safety instructions to help people understand what action to take.",
			"A resource map helps people locate shelters, medical facilities, relief centers, and emergency supply points.",
			"Community and volunteer coordination gives local groups a shared place to offer and organize assistance.",
			"Preparedness plans help households and communities think through actions before a disaster occurs.",
			"Communication tools support information sharing between residents, volunteers, and local authorities.",
			"Localized language support and downloadable guidance are intended to keep essential information accessible.",
			"The repository describes data analysis of historical disaster information as a way to support future planning.",
		],
		engineeringHighlights: [
			"The application is organized as a Next.js project with TypeScript, as reflected by its repository configuration and project stack.",
			"The README frames the product around emergency communication and community-level resource coordination.",
			"The feature set includes support for localized language and offline access to preparedness material.",
		],
		challenges: [
			{
				challenge:
					"Disaster information and local assistance can be spread across disconnected channels.",
				solution:
					"LDPAN groups alerts, local resources, preparedness guidance, and volunteer coordination into a shared platform concept.",
			},
			{
				challenge:
					"A single-language, always-online experience can exclude people during an emergency.",
				solution:
					"The README identifies localized language support and offline access to essential information as product requirements.",
			},
		],
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
		slug: "titan-settlers",
		name: "Titan Settlers",
		description:
			"The project aims to educate and inspire the next generation of space enthusiasts through an engaging missions-based game.",
		overview:
			"Titan Settlers is an educational missions-based game created for NASA Space Apps Challenge 2023. It turns the difficulties of exploring Saturn's largest moon into interactive scenarios, introducing players to hazards, landing, communications, radiation, and resource constraints through play rather than a static explainer.",
		features: [
			"A sequence of missions introduces the context of space exploration and the environment around Titan.",
			"A landing mission asks players to manage parachute timing and suit selection for Titan's dense atmosphere and higher pressure.",
			"A communications mission explores how Titan's ionosphere can complicate sending signals back to Earth.",
			"Radiation and laboratory missions use interactive tasks to introduce astronaut protection and research facilities.",
			"A NASA API-powered quiz adds a knowledge-check activity to the game.",
			"The README also describes additional concepts, including resource-management and training missions, as still in development.",
		],
		engineeringHighlights: [
			"The repository documents an Agile development process and a monolithic application architecture.",
			"The project was built collaboratively for NASA Space Apps Challenge 2023.",
			"Mission content is presented through interactive game flows and supporting visual assets.",
		],
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
		slug: "mediaid",
		name: "MediAid",
		description:
			"A medicine donation platform, where people can donate their unused medicine and can get medicine by applying.",
		overview:
			"MediAid is a donation platform intended to connect people and organizations with unused or unexpired medicine to people who need access to it. The user journey is centered on offering a donation, reviewing the medicine details, and applying for an available donation. Its repository separates the client and server applications.",
		features: [
			"Individuals and organizations can submit unused or unexpired medicines for donation.",
			"People seeking medicine can browse opportunities and submit an application with supporting details.",
			"Donation requests can be reviewed before acceptance, helping the platform apply its stated requirements.",
			"The project README describes separate client and server setup, with environment configuration for both.",
			"The interface includes user profile and donation-related flows, based on the repository README and screenshots.",
		],
		engineeringHighlights: [
			"The repository is split into client and server applications and is described as a MERN-stack project.",
			"The documented setup requires separate environment configuration for the client and server.",
			"The README describes a review step for donation requests before they are accepted.",
		],
		tags: [
			{ ...TECH_COLORS.REACT },
			{ ...TECH_COLORS.REDUX },
			{ ...TECH_COLORS.EXPRESS },
		],
		image: mediaid,
		source_code_link: "https://github.com/Sharif-Minhaz/MediAid",
		live_link: "https://mediaid-online-platform.netlify.app/",
	},
	{
		slug: "cafe-vista",
		name: "Cafe Vista",
		description:
			"A coffee shop management system with two category of user availability. Focused on the backend system most.",
		overview:
			"Cafe Vista is a coffee shop management application with distinct customer and administrator experiences. Customers can browse the menu and use ordering and reservation flows, while the project also includes blog content and administration views. The README notes that the work focused primarily on the backend, with EJS templates used for the frontend.",
		features: [
			"Separates customer-facing workflows from administrator functionality.",
			"Supports coffee shop ordering, including menu, cart, and checkout screens shown in the repository.",
			"Includes a table reservation experience for customers.",
			"Provides coffee and shop blog pages as part of the customer-facing site.",
			"Includes administration screens for managing shop operations.",
			"Uses server-rendered EJS views with a Node.js and Express backend.",
		],
		engineeringHighlights: [
			"Backend-focused implementation built with Express, MongoDB, and Mongoose.",
			"The README identifies customer and admin as the two account categories.",
			"The project includes separate route, controller, model, middleware, and view areas.",
		],
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
		slug: "dev-inertia",
		name: "DEV Inertia",
		description:
			"DEV Inertia is a blog publishing platform for publishing .md, .mdx or general purpose blogs.",
		overview:
			"DEV Inertia is a publishing platform for Markdown, MDX, and general-purpose blog content. The repository is built with Astro and describes content collections for organizing posts, giving the site a content-first structure that can publish articles while keeping page delivery lightweight.",
		features: [
			"Publishes long-form articles authored in Markdown and MDX.",
			"Uses Astro content collections to retrieve and organize blog entries.",
			"The repository README lists canonical URLs and Open Graph metadata for page sharing.",
			"Includes sitemap and RSS feed support to help readers and crawlers discover new posts.",
			"Supports standard Astro development, production build, and preview workflows.",
		],
		engineeringHighlights: [
			"Uses Astro with content collections and Markdown/MDX content sources.",
			"The README calls out canonical/Open Graph metadata, sitemap generation, and RSS as built-in publishing features.",
			"The project is based on a minimal blog theme that is intended to be customized.",
		],
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
		slug: "treker",
		name: "Treker",
		description:
			"Tour management app using mern stack developed for smoother user experience througout the booking to ending of the tour.",
		overview:
			"Treker is a travel and tour-management application focused on the customer journey from choosing a trip through booking and completing it. The public repository summary identifies it as a MERN-stack project and links a live deployment. The currently available README is brief, so this page limits feature claims to that documented scope.",
		features: [
			"Presents a travel booking experience designed to guide users from trip discovery into a booking.",
			"Supports tour-management workflows across the booking and trip lifecycle, as described in the project summary.",
			"The repository identifies the application as a MERN-stack travel project.",
			"The public project summary links a live deployment for exploring the current application.",
		],
		tags: [
			{ ...TECH_COLORS.FIREBASE },
			{ ...TECH_COLORS.EXPRESS },
			{ ...TECH_COLORS.REACT },
		],
		image: treker,
		source_code_link: "https://github.com/Sharif-Minhaz/Treker",
		live_link: "https://travel-assistant-v1.netlify.app/",
	},
	{
		slug: "bun-shop",
		name: "Bun Shop",
		description:
			"Bun shop is a full-stack bun selling platform with online payment system (sslcommerz) integrated for order management.",
		overview:
			"Bun Shop is a full-stack online storefront for selling buns and managing orders. Its repository describes a frontend connected to separate backend and payment-service repositories, with SSLCommerz integration. The README screenshots show product browsing, cart, checkout, product administration, and dashboard areas.",
		features: [
			"Product browsing pages present the shop's bun catalogue.",
			"Cart and checkout screens support the purchase flow from selected products to order submission.",
			"SSLCommerz integration supports online payment; the payment API is maintained as a separate repository.",
			"The README screenshots show product editing and deletion workflows for shop administration.",
			"Dashboard views provide a central place to manage shop activity.",
			"Separate user and administrator demo accounts are described in the README; public credentials are intentionally not reproduced here.",
		],
		engineeringHighlights: [
			"The frontend, backend, and SSLCommerz payment service are split across separate repositories.",
			"The frontend is a Next.js application using TypeScript, with Tailwind CSS and shadcn/ui listed in its repository topics.",
			"The README notes that backend and payment services run on a free hosting tier and may have a slower first response.",
		],
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
		slug: "admin-dashboard",
		name: "Admin Dashboard",
		description:
			"A html Admin-dashboard template created with html, css. js and jquery.",
		overview:
			"Admin Dashboard is a static HTML template for common administration interfaces. Its repository organizes the interface into focused areas such as dashboard, forms, charts, tables, maps, authentication, and widgets, making it a starting point for a wider admin UI rather than a single-purpose screen.",
		features: [
			"Dashboard and widget pages provide a starting point for operational summaries.",
			"Forms and text-document sections cover common data-entry and content-management UI patterns.",
			"Charts, tables, and maps offer distinct layouts for presenting structured information.",
			"Authentication-related pages are included in the repository structure.",
			"Built as a static front-end template with HTML, CSS, JavaScript, and jQuery.",
		],
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
		slug: "chatverse",
		name: "ChatVerse",
		description:
			"A modern, secure chat app for seamless communication in real-time using socket.io.",
		overview:
			"ChatVerse is a real-time chat application built around Socket.IO. Its repository is split into client and server directories, and the project description highlights seamless communication as its central use case. The currently published repository summary is brief, so the case study avoids claiming undocumented messaging or account features.",
		features: [
			"Real-time communication is the core product workflow.",
			"The project description identifies Socket.IO as the technology used for realtime messaging.",
			"A client/server repository structure separates the application interface from its server component.",
			"The live deployment is available to preview the current application state.",
		],
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
		slug: "e-commerce-template",
		name: "E-Commerce Template",
		description:
			"E-commerce web project for managing products orders and shopping cart.",
		overview:
			"E-Commerce Template is a front-end shopping site centered on product browsing, orders, and a shopping cart. Its public repository describes it as an HTML, CSS, and JavaScript project and links a GitHub Pages deployment. The README provides only a short product summary, so details here stay within that scope.",
		features: [
			"Product pages and shopping layouts form the main storefront experience.",
			"The project is described as supporting product and order management with a shopping cart.",
			"The public repository is a front-end implementation using HTML, CSS, and JavaScript.",
			"A live GitHub Pages link is available from the case-study actions.",
		],
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
		slug: "e-com-guard",
		name: "E-Com Guard",
		description:
			"A multi-vendor marketplace and point-of-sale system for shops in Bangladesh, in English and Bangla.",
		overview:
			"E-Com Guard is a multi-vendor e-commerce marketplace with point-of-sale tooling, built for shops in Bangladesh. Shoppers browse verified vendors, brands and categories, see prices in taka with their discounts, and switch the interface between English and Bangla. Vendors and staff sign in to a dashboard to manage sales and inventory.",
		features: [
			"A marketplace of verified vendor shops, browsable by shop, brand and category.",
			"An English and Bangla language switch across the storefront.",
			"Product pages with taka pricing, the discount shown as a percentage, live stock counts, SKU, specifications and warranty details.",
			"Cart and wishlist on every product, plus customer reviews that open once a shopper is signed in.",
			"Storefront sections for deals, new arrivals, wholesale pricing and featured collections in a carousel.",
			"A newsletter sign-up offering 10% off the first order.",
			"Account login that leads to a dashboard for managing sales and inventory.",
		],
		tags: [
			{ ...TECH_COLORS.NEXTJS },
			{ ...TECH_COLORS.TAILWIND },
			{ ...TECH_COLORS.MONGODB },
			{ ...TECH_COLORS.TYPESCRIPT },
		],
		image: ecomGuard,
		source_code_link: "https://github.com/Sharif-Minhaz/ecom-guard",
		live_link: "https://ecom-guard.vercel.app/",
	},
	{
		slug: "pos-system",
		name: "POS System",
		description:
			"A cross-platform POS system built with Electron Forge that supports both offline (SQLite-based) and online (API-driven) operations.",
		overview:
			"POS System is a cross-platform desktop point-of-sale application. The portfolio description highlights two operating modes: offline transactions backed by SQLite and online, API-driven operation. Electron Forge and the listed React/Mantine stack identify it as a desktop application built with a web UI. No public repository is linked for further implementation details.",
		features: [
			"Runs as a cross-platform desktop point-of-sale application using Electron Forge.",
			"Supports an offline mode backed by SQLite for local operation.",
			"Supports an online mode that communicates through an API.",
			"The portfolio lists React, Mantine, and Electron Forge among the technologies used.",
			"A public repository and further workflow documentation are not currently linked.",
		],
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
		title:
			"Unleashing the Power of Progressive Web Apps: The Future of Web Development",
		url: "https://dev-inertia-blog.netlify.app/blog/view/unleashing-the-power-of-progressive-web-apps-the-future-of-web-development",
		cover: blog1,
		publishedDate: "March 27, 2024",
		body: "In the current swiftly transforming digital sphere, providing a top-notch user experience is crucial. With people depending more and more on mobile gadgets and seeking quick, effortless interactions, developers are continuously striving to find ground-breaking techniques that fuse native apps with web experiences. This is where Progressive Web Apps (PWAs) come in as revolutionary tools for web development.",
	},
	{
		id: 2,
		title:
			"Building Robust REST APIs with Python Flask: A Guide for Developers",
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
		description:
			"Read the terms and privacy details for using Sharif Md. Minhaz's personal portfolio website.",
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
		description:
			"Review the accuracy, external links, and project information disclaimer for Sharif Md. Minhaz's portfolio.",
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
				body: [
					`If you have any questions about this disclaimer, email ${basicInfo.email}.`,
				],
			},
		],
	},
};
