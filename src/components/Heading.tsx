interface Props {
	baseTitle: string;
	extraBaseTitle?: string;
	title: string;
	extraTitle?: string;
}

export default function Heading({ baseTitle, extraBaseTitle, title, extraTitle }: Props) {
	return (
		<div className="col-12">
			<div className="heading">
				<h2>
					{baseTitle} <span className="me">{extraBaseTitle}</span>
				</h2>
				<p>
					{title} <span className="extra">{extraTitle}</span>
					<span className="underline"></span>
				</p>
			</div>
		</div>
	);
}
