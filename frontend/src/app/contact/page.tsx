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
		<div className="container py-20">
			<section className="max-w-xl mx-auto space-y-10">
				{/* HEADER */}
				<div className="space-y-4 text-center">
					<h1 className="text-4xl font-extrabold tracking-tight">
						Contact
					</h1>
					<p className="text-text-muted leading-relaxed">
						If you’d like to work together or have a question, send
						me a message below.
					</p>
				</div>

				{/* FORM */}
				<form
					onSubmit={submitMessage}
					className="bg-card p-8 rounded-xl hover-card space-y-6"
				>
					<div className="space-y-2">
						<label className="text-sm font-medium">Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className="
								w-full px-4 py-3 rounded-md
								bg-transparent
								border border-[var(--color-border)]
								focus:outline-none
								focus:border-accent
								transition
							"
						/>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="
								w-full px-4 py-3 rounded-md
								bg-transparent
								border border-[var(--color-border)]
								focus:outline-none
								focus:border-accent
								transition
							"
						/>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Message</label>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							className="
								w-full px-4 py-3 rounded-md min-h-[140px]
								bg-transparent
								border border-[var(--color-border)]
								focus:outline-none
								focus:border-accent
								transition
							"
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="
							w-full py-3
							bg-accent-button
							text-button-text
							rounded-lg
							font-semibold
							hover:bg-accent-button-hover
							transition-colors
						"
					>
						{loading ? "Sending…" : "Send Message"}
					</button>

					{success && (
						<p className="text-sm text-green-500 text-center">
							Message sent successfully.
						</p>
					)}

					{error && (
						<p className="text-sm text-red-500 text-center">
							{error}
						</p>
					)}
				</form>

				{/* EMAIL FALLBACK */}
				<p className="text-sm text-center text-text-muted">
					Or email me directly at{" "}
					<a
						href="mailto:joshua.argent@email.com"
						className="underline hover:text-accent transition"
					>
						joshua.argent@email.com
					</a>
				</p>
			</section>
		</div>
	);
}
