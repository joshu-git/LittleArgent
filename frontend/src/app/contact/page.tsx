"use client";

import { useState } from "react";
import { supabase } from "@/libs/supabase";

export default function ContactPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fieldClass =
		"w-full rounded-lg px-4 py-3 bg-card border border-border";

	async function submitMessage(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setSuccess(false);

		const { error } = await supabase
			.from("contact_messages")
			.insert([{ name, email, message }]);

		setLoading(false);

		if (error) {
			setError("Something went wrong. Please try again.");
			return;
		}

		setSuccess(true);
		setName("");
		setEmail("");
		setMessage("");
	}

	return (
		<main className="max-w-5xl mx-auto px-4 py-16 space-y-16">
			{/* HERO */}
			<section className="text-center space-y-4">
				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
					Contact
				</h1>
				<p className="text-lg max-w-2xl mx-auto text-text-muted">
					Want to work together or have a question? Send me a message
					below or email me directly.
				</p>
			</section>

			{/* FORM */}
			<section className="max-w-2xl mx-auto space-y-8">
				<form onSubmit={submitMessage} className="space-y-6">
					<input
						type="text"
						placeholder="Your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className={fieldClass}
					/>

					<input
						type="email"
						placeholder="Your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className={fieldClass}
					/>

					<textarea
						placeholder="Your message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						className={`${fieldClass} min-h-[160px]`}
					/>

					<button
						type="submit"
						disabled={loading}
						className="w-full px-4 py-3 rounded-lg bg-accent-button text-button-text font-semibold hover:bg-accent-button-hover transition-colors"
					>
						{loading ? "Sending…" : "Send Message"}
					</button>

					{success && (
						<p className="text-sm text-center text-text-muted">
							Message sent successfully.
						</p>
					)}

					{error && (
						<p className="text-sm text-center text-text-muted">
							{error}
						</p>
					)}
				</form>

				{/* DIRECT EMAIL */}
				<p className="text-sm text-center text-text-muted">
					Or email me directly at{" "}
					<a
						href="mailto:joshua.argent@email.com"
						className="underline hover:text-text transition"
					>
						joshua.argent@email.com
					</a>
				</p>
			</section>
		</main>
	);
}
