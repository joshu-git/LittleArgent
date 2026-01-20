"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
	const [theme, setTheme] = useState<"light" | "dark">(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("theme");
			if (saved === "light" || saved === "dark") return saved;

			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			return prefersDark ? "dark" : "light";
		}
		return "dark";
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		const onStorage = (e: StorageEvent) => {
			if (
				e.key === "theme" &&
				(e.newValue === "light" || e.newValue === "dark")
			) {
				setTheme(e.newValue);
				document.documentElement.setAttribute("data-theme", e.newValue);
			}
		};

		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, []);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<footer className="bg-card mt-auto rounded-none">
			<div className="container py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				{/* Left: Name */}
				<Link
					href="/"
					className="text-lg font-semibold tracking-tight text-text"
				>
					Joshua Argent
				</Link>

				{/* Center: Social / Contact */}
				<div className="flex items-center gap-4 text-sm">
					<a
						href="github.com/joshu-git"
						target="_blank"
						rel="noopener noreferrer"
						className="text-text-muted hover:text-text transition-colors"
					>
						GitHub
					</a>
					<a
						href="argentjackjoshua@outlook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-text-muted hover:text-text transition-colors"
					>
						Email
					</a>
				</div>

				{/* Right: Meta + Theme */}
				<div className="flex items-center gap-4">
					<span className="text-xs text-text-subtle">
						© {new Date().getFullYear()}
					</span>

					<button
						onClick={toggleTheme}
						className="px-3 py-1 text-xs rounded-full border border-border text-text-muted hover:text-text hover:border-border-strong transition-colors"
					>
						{theme === "light" ? "Light" : "Dark"}
					</button>
				</div>
			</div>
		</footer>
	);
}
