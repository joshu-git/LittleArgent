import Link from "next/link";

function ValueProp({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="bg-card p-6 hover-card space-y-2">
			<h3 className="font-semibold text-lg">{title}</h3>
			<p className="text-sm text-text-muted">{description}</p>
		</div>
	);
}

function ProjectPreview({
	title,
	description,
	stack,
	href,
}: {
	title: string;
	description: string;
	stack: string;
	href: string;
}) {
	return (
		<Link href={href} className="block bg-card p-6 hover-card">
			<h3 className="text-xl font-semibold">{title}</h3>
			<p className="text-sm text-text-muted mt-2">{description}</p>
			<p className="text-xs text-text-subtle mt-3">{stack}</p>
		</Link>
	);
}

export default function HomePage() {
	return (
		<div className="container py-24 space-y-32">
			{/* HERO */}
			<section className="max-w-3xl space-y-6">
				<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
					Full Stack Web Developer
				</h1>

				<p className="text-lg md:text-xl">
					I’m Joshua Argent. I build reliable, scalable web
					applications using modern JavaScript and TypeScript.
				</p>

				<p className="text-text-muted max-w-2xl">
					My core stack includes Next.js, Express, and PostgreSQL. I
					deploy production apps using Vercel, Render, and Netlify,
					and I’m currently learning machine learning fundamentals.
				</p>

				<div className="flex gap-4 pt-4">
					<Link href="/projects">
						<button>View Projects</button>
					</Link>
					<Link href="/contact">
						<button className="bg-card border border-[var(--color-border)]">
							Contact Me
						</button>
					</Link>
				</div>
			</section>

			{/* VALUE */}
			<section className="grid md:grid-cols-3 gap-6">
				<ValueProp
					title="End-to-End Development"
					description="Frontend, backend, databases, and deployment handled end to end."
				/>
				<ValueProp
					title="Production Focused"
					description="Clean architecture, authentication, validation, and performance."
				/>
				<ValueProp
					title="Modern Tooling"
					description="Next.js, TypeScript, Express, PostgreSQL, cloud platforms."
				/>
			</section>

			{/* PROJECT PREVIEW */}
			<section className="space-y-8">
				<div className="flex justify-between items-end">
					<h2 className="text-3xl font-bold">Selected Projects</h2>
					<Link href="/projects" className="text-sm font-medium">
						View all →
					</Link>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					<ProjectPreview
						title="Project One"
						description="Full-stack web application solving a real-world problem."
						stack="Next.js • Express • PostgreSQL"
						href="/projects/project-one"
					/>
					<ProjectPreview
						title="Project Two"
						description="Backend-heavy application with REST APIs and authentication."
						stack="TypeScript • Express • PostgreSQL"
						href="/projects/project-two"
					/>
					<ProjectPreview
						title="Project Three"
						description="Frontend-focused app emphasizing UX and performance."
						stack="Next.js • TypeScript • Tailwind"
						href="/projects/project-three"
					/>
					<ProjectPreview
						title="Project Four"
						description="Data-driven application with complex business logic."
						stack="PostgreSQL • APIs • TypeScript"
						href="/projects/project-four"
					/>
				</div>
			</section>
		</div>
	);
}
