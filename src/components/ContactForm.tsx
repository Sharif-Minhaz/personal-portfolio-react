import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const initialData = { name: "", message: "", email: "" };

export default function ContactForm() {
	const [form, setForm] = useState(initialData);
	const [loading, setLoading] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.name || !form.email || !form.message)
			return toast.error("Please fill out all the form data.");

		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Minhaz",
					from_email: form.email,
					to_email: "smmr.career@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_EMAIL_PUBLIC_KEY
			)
			.then(() => {
				setForm(initialData);
				toast.success("Thank you. I will get back to you ASAP");
			})
			.catch((err) => {
				toast.error("Failed to send mail.", err.message);
			})
			.finally(() => setLoading(false));
	};

	return (
		<div className="col-md-8 col-12">
			<div className="messages-box">
				<h3>Describe Your Needs</h3>
				<form className="row" onSubmit={handleSubmit}>
					<div className="col-md-6 col-12">
						<input
							disabled={loading}
							type="text"
							id="textBox"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Name"
							required
						/>
					</div>
					<div className="col-md-6 col-12">
						<input
							disabled={loading}
							type="email"
							onChange={handleChange}
							name="email"
							value={form.email}
							id="email"
							placeholder="Email"
							required
						/>
					</div>
					<div className="col-12">
						<textarea
							name="message"
							disabled={loading}
							value={form.message}
							id="msg"
							rows={5}
							onChange={handleChange}
							placeholder="Write in details about your needs...."
							required
						></textarea>
					</div>
					<div className="col-12 adjustment">
						<button disabled={loading} type="submit">
							Send Message <FontAwesomeIcon icon={faPaperPlane} />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
