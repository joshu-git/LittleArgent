"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [open, setOpen] = useState(false);

	const navLinks = [
		{ href: "/projects", label: "Projects" },
		{ href: "/skills", label: "Skills" },
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header className="bg-card sticky top-0 z-50 border-b border-divider">
			<div className="container py-4 flex items-center justify-between">
				{/* Identity */}
				<Link href="/" className="flex flex-col leading-tight">
					<span className="text-lg font-semibold tracking-tight text-text">
						Joshua Argent
					</span>
					<span className="text-xs text-text-subtle">
						Full Stack Web Developer
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-text-muted hover:text-text transition-colors"
						>
							{link.label}
						</Link>
					))}

					<Link
						href="/resume.pdf"
						className="px-3 py-1.5 rounded-full border border-border text-text-muted hover:text-text hover:border-border-strong transition-colors"
					>
						Resume
					</Link>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 text-text"
					onClick={() => setOpen((v) => !v)}
					aria-label={open ? "Close menu" : "Open menu"}
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			{/* Mobile Navigation */}
			<nav
				className={`md:hidden bg-card overflow-hidden transition-[max-height] duration-300 ease-standard ${
					open
						? "max-h-80 py-4 pointer-events-auto"
						: "max-h-0 pointer-events-none"
				}`}
				aria-hidden={!open}
			>
				<div className="flex flex-col gap-3 px-4">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm text-text-muted hover:text-text transition-colors"
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}

					<Link
						href="/resume.pdf"
						onClick={() => setOpen(false)}
						className="mt-2 text-sm font-medium text-accent"
					>
						View Resume
					</Link>
				</div>
			</nav>
		</header>
	);
}
