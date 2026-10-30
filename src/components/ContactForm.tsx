import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
				import.meta.env.VITE_EMAIL_PUBLIC_KEY,
			)
			.then(() => {
				setForm(initialData);
				toast.success("Thank you. I will get back to you ASAP");
			})
			.catch((err) => {
				console.log(err);
				toast.error("Failed to send mail.", err.message);
			})
			.finally(() => setLoading(false));
	};

	return (
		<div className="contact__form crop crop--sheet">
			<form className="form" onSubmit={handleSubmit}>
				<div className="form__pair">
					<div className="field">
						<label htmlFor="textBox">Name</label>
						<input
							disabled={loading}
							type="text"
							id="textBox"
							name="name"
							autoComplete="name"
							value={form.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="field">
						<label htmlFor="email">Email</label>
						<input
							disabled={loading}
							type="email"
							onChange={handleChange}
							name="email"
							autoComplete="email"
							value={form.email}
							id="email"
							required
						/>
					</div>
				</div>
				<div className="field">
					<label htmlFor="msg">Describe your needs</label>
					<textarea
						name="message"
						disabled={loading}
						value={form.message}
						id="msg"
						rows={6}
						onChange={handleChange}
						required
					></textarea>
				</div>
				<div className="form__foot">
					<button
						className="btn btn--ink"
						disabled={loading}
						aria-busy={loading}
						type="submit"
					>
						<FontAwesomeIcon icon={faPaperPlane} />
						{loading ? "Sending…" : "Send message"}
					</button>
				</div>
			</form>
		</div>
	);
}
