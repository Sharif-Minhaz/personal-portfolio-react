import {
	About,
	Blogs,
	Contact,
	Experience,
	Footer,
	Home,
	Projects,
	Reviews,
	Services,
} from "../components";

// Education and Skills render inside Experience: the record is one section (#summary)
export default function RootPage() {
	return (
		<main id="main">
			<Home />
			<Services />
			<Projects />
			<About />
			<Experience />
			<Reviews />
			<Blogs />
			<Contact />
			<Footer />
		</main>
	);
}
