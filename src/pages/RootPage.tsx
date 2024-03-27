import ScrollSpy from "react-ui-scrollspy";
import {
	About,
	Blogs,
	Contact,
	Education,
	Experience,
	Footer,
	Home,
	Projects,
	Reviews,
	Services,
	Skills,
} from "../components";

export default function RootPage() {
	return (
		<main>
			<ScrollSpy useBoxMethod={false}>
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
			</ScrollSpy>
			<Footer />
		</main>
	);
}
