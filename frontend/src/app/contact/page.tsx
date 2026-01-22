"use client";

import { useState } from "react";
import { supabase } from "@/libs/supabase";
import Link from "next/link";

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
		<div className="w-full flex justify-center mt-10 px-4">
			<form
				onSubmit={submitMessage}
				className="
					w-full
					max-w-md
					sm:max-w-lg
					md:max-w-xl
					bg-black/40
					border border-white/10
					rounded-xl
					p-6
					flex flex-col gap-4
					shadow-lg
				"
			>
				<h1 className="text-2xl font-bold text-center mb-1">Contact</h1>

				<p className="text-sm text-white/70 text-center mb-3">
					Send me a message and I’ll get back to you.
				</p>

				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="bg-black/60 border border-white/20 rounded-lg p-3"
					required
				/>

				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="bg-black/60 border border-white/20 rounded-lg p-3"
					required
				/>

				<textarea
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="bg-black/60 border border-white/20 rounded-lg p-3 min-h-[120px]"
					required
				/>

				<button
					type="submit"
					disabled={loading}
					className="
						w-full py-3 bg-purple-600
						hover:bg-purple-700
						rounded-lg font-semibold
						transition
					"
				>
					{loading ? "Sending..." : "Send Message"}
				</button>

				{success && (
					<p className="text-green-400 text-sm text-center">
						Message sent successfully.
					</p>
				)}

				{error && (
					<p className="text-red-400 text-sm text-center">{error}</p>
				)}

				<div className="text-center text-sm text-white/60 mt-2">
					Or reach out via{" "}
					<a
						href="mailto:argentjackjoshua@outlook.com"
						className="underline hover:text-white"
					>
						email
					</a>
				</div>

				<Link
					href="/"
					className="
						w-full text-center py-2
						border border-white/20
						rounded-lg
						hover:bg-white/10
						transition
					"
				>
					Back to home
				</Link>
			</form>
		</div>
	);
}
