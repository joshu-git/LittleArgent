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

		const { error } = await supabase.from("contact_messages").insert([
			{
				name,
				email,
				message,
			},
		]);

		setLoading(false);

		if (error) {
			console.error(error);
			setError("Something went wrong. Please try again.");
			return;
		}

		setSuccess(true);
		setName("");
		setEmail("");
		setMessage("");
	}

	return (
		<div className="container py-16 space-y-12">
			{/* PAGE INTRO */}
			<section className="max-w-2xl space-y-4">
				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
					Get in touch
				</h1>

				<p className="text-text-muted leading-relaxed">
					Have a question, opportunity, or just want to chat about a
					project? Drop me a message and I’ll get back to you.
				</p>
			</section>

			{/* FORM */}
			<section className="max-w-2xl">
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
							placeholder="Your name"
							required
							className="
								w-full px-4 py-3 rounded-md
								bg-card-soft
								border border-[var(--color-border)]
								focus:outline-none focus:ring-2 focus:ring-accent-soft
							"
						/>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="argentjackjoshua@outlook.com"
							required
							className="
								w-full px-4 py-3 rounded-md
								bg-card-soft
								border border-[var(--color-border)]
								focus:outline-none focus:ring-2 focus:ring-accent-soft
							"
						/>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Message</label>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Tell me what you’re thinking…"
							required
							className="
								w-full px-4 py-3 rounded-md min-h-[140px]
								bg-card-soft
								border border-[var(--color-border)]
								focus:outline-none focus:ring-2 focus:ring-accent-soft
							"
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="
							px-6 py-3
							bg-accent-button
							text-button-text
							rounded-lg
							font-semibold
							hover:bg-accent-button-hover
							transition-colors
						"
					>
						{loading ? "Sending…" : "Send message"}
					</button>

					{success && (
						<p className="text-sm text-green-500">
							Message sent successfully.
						</p>
					)}

					{error && <p className="text-sm text-red-500">{error}</p>}
				</form>
			</section>
		</div>
	);
}
