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
		<div className="container py-16 space-y-14">
			{/* HEADER */}
			<section className="max-w-3xl space-y-4">
				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
					Get in touch
				</h1>
				<p className="text-text-muted leading-relaxed">
					Questions, opportunities, or ideas you want to explore? Send
					a message or reach out directly.
				</p>
			</section>

			{/* CONTENT */}
			<section className="grid md:grid-cols-2 gap-10 items-start">
				{/* LEFT: CONTACT INFO */}
				<div className="space-y-6">
					<div className="bg-card p-6 hover-card space-y-3">
						<h2 className="text-xl font-semibold">
							Email me directly
						</h2>
						<p className="text-sm text-text-muted leading-relaxed">
							If you prefer not to use forms, feel free to email
							me directly. I usually reply within 24 hours.
						</p>

						<a
							href="mailto:joshua.argent@email.com"
							className="inline-block"
						>
							<button className="px-4 py-2 bg-accent-button text-button-text rounded-lg font-semibold hover:bg-accent-button-hover transition-colors">
								argentjackjoshua@outlook.com
							</button>
						</a>
					</div>

					<div className="bg-card-soft p-6 rounded-xl space-y-2">
						<p className="text-sm text-text-subtle">
							I’m especially interested in:
						</p>
						<ul className="list-disc pl-5 text-sm text-text-muted space-y-1">
							<li>Full stack web roles</li>
							<li>Automation & internal tooling</li>
							<li>Data-driven systems</li>
						</ul>
					</div>
				</div>

				{/* RIGHT: FORM */}
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
								bg-card-soft
								border border-[var(--color-border)]
								focus:outline-none
								focus:ring-2 focus:ring-accent-soft
								focus:border-transparent
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
								bg-card-soft
								border border-[var(--color-border)]
								focus:outline-none
								focus:ring-2 focus:ring-accent-soft
								focus:border-transparent
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
								bg-card-soft
								border border-[var(--color-border)]
								focus:outline-none
								focus:ring-2 focus:ring-accent-soft
								focus:border-transparent
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
