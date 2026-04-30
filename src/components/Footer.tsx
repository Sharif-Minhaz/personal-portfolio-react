export default function Footer() {
	return (
		<footer className="sectionD container-fluid padding glass-shell">
			<div className="row">
				<div className="col-md-6 col-12 main-footer-text">
					<span>
						Copyright © 2021-{new Date().getFullYear()}{" "}
						<a className="footer-name text-gradient" href="https://github.com/Sharif-Minhaz">
							Sharif
						</a>
						.
					</span>{" "}
					All Rights Reserved.
				</div>
				<div className="col-md-6 col-12 text-end">
					<a href="#" title="Terms & Policy">
						Terms & Policy{" "}
					</a>
					<span>|</span>
					<a href="#" title="Disclaimer">
						Disclaimer
					</a>
				</div>
			</div>
		</footer>
	);
}
