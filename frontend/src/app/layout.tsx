import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Joshua Argent | Full Stack Developer",
		template: "%s | Joshua Argent",
	},
	description:
		"Full stack developer building modern web applications with TypeScript, Next.js, Express, and PostgreSQL.",
	keywords: [
		"Joshua Argent",
		"full stack developer",
		"Next.js developer",
		"TypeScript developer",
		"Express developer",
		"PostgreSQL developer",
		"web developer portfolio",
	],
	metadataBase: new URL("https://littleargent.com"),
	openGraph: {
		title: "Joshua Argent | Full Stack Developer",
		description:
			"Full stack developer specializing in modern TypeScript, Next.js, Express, and PostgreSQL applications.",
		url: "https://littleargent.com",
		siteName: "Joshua Argent",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Joshua Argent | Full Stack Developer",
		description:
			"Full stack developer building modern web applications with TypeScript and Next.js.",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Set theme BEFORE first paint to avoid flash */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
(function () {
    try {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") {
            document.documentElement.setAttribute("data-theme", stored);
            return;
        }
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    } catch (e) {}
})();
            `,
					}}
				/>
			</head>

			<body className="flex min-h-screen flex-col">
				<Header />

				<main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
					{children}
				</main>

				<Footer />

				<CookieConsent />
			</body>
		</html>
	);
}
