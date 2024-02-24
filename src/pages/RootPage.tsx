import {
	About,
	Blogs,
	Contact,
	Education,
	Experience,
	Home,
	Projects,
	Reviews,
	Services,
	Skills,
} from "../components";

export default function RootPage() {
	return (
		<main>
			<Home />
			<About />
			<Services />
			<Education />
			<Skills />
			<Experience />
			<Projects />
			<Reviews />
			<Blogs />
			<Contact />
		</main>
	);
}
