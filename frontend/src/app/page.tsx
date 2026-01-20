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
			<p className="text-sm text-text-muted leading-relaxed">
				{description}
			</p>
		</div>
	);
}

function ProjectPreview({
	title,
	description,
	stack,
	href,
	github,
	live,
}: {
	title: string;
	description: string;
	stack: string;
	href: string;
	github?: string;
	live?: string;
}) {
	return (
		<div className="bg-card p-6 hover-card flex flex-col justify-between">
			<div>
				<h3 className="text-xl font-semibold">{title}</h3>
				<p className="text-sm text-text-muted mt-2 leading-relaxed">
					{description}
				</p>
				<p className="text-xs text-text-subtle mt-3">{stack}</p>
			</div>

			<div className="flex gap-3 pt-4">
				<Link href={href}>
					<button className="bg-card border border-[var(--color-border)] text-sm">
						Details
					</button>
				</Link>

				{github && (
					<a href={github} target="_blank" rel="noopener noreferrer">
						<button className="bg-card border border-[var(--color-border)] text-sm">
							GitHub
						</button>
					</a>
				)}

				{live && (
					<a href={live} target="_blank" rel="noopener noreferrer">
						<button className="text-sm">Live</button>
					</a>
				)}
			</div>
		</div>
	);
}

export default function HomePage() {
	return (
		<div className="container py-16 space-y-20">
			{/* HERO */}
			<section className="max-w-3xl space-y-4 md:space-y-6">
				<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
					Full Stack Web Developer
				</h1>

				<p className="text-lg md:text-xl">
					Building scalable web applications and automation systems.
				</p>

				<p className="text-text-muted max-w-2xl leading-relaxed">
					I’m Joshua Argent. I build full stack applications with
					Next.js, Express, and PostgreSQL, with a strong focus on
					automating workflows, extracting insights from data, and
					reducing manual processes.
				</p>

				<div className="flex flex-wrap gap-4 pt-4">
					<Link href="/projects">
						<button className="px-4 py-2 bg-accent-button text-button-text rounded-md">
							View Projects
						</button>
					</Link>

					<Link
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="px-4 py-2 bg-card border border-[var(--color-border)] rounded-md">
							Resume
						</button>
					</Link>
				</div>
			</section>

			{/* VALUE PROPOSITION */}
			<section className="grid md:grid-cols-3 gap-6">
				<ValueProp
					title="End to End Systems"
					description="From frontend UX to backend APIs, database design, integrations, and deployment."
				/>
				<ValueProp
					title="Automation & Data Focus"
					description="Building systems for scraping, analysis, and workflow automation."
				/>
				<ValueProp
					title="Production Ready Engineering"
					description="Authentication, validation, error handling, and performance built in."
				/>
			</section>

			{/* PROJECTS */}
			<section className="space-y-10">
				<div className="flex justify-between items-end">
					<h2 className="text-3xl font-bold">Featured Projects</h2>
					<Link href="/projects" className="text-sm font-medium">
						View All
					</Link>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					<ProjectPreview
						title="ArgentFlows"
						description="Business automation platform focused on scraping, data analysis, and workflow optimization."
						stack="Next.js • Express • PostgreSQL • Automation"
						href="/projects/argentflows"
						live="https://argentflows.vercel.app"
					/>

					<ProjectPreview
						title="LittleFlows"
						description="A productivity focused social platform designed to reduce noise and encourage intentional usage."
						stack="Next.js • TypeScript • PostgreSQL"
						href="/projects/littleflows"
						live="https://littleflows.vercel.app"
					/>

					<ProjectPreview
						title="PingElo"
						description="Open-source ranked table tennis platform for tracking matches and leaderboards."
						stack="Next.js • TypeScript • PostgreSQL • Open Source"
						href="/projects/pingelo"
						live="https://pingelo.vercel.app"
						github="https://github.com/joshu-git/pingelo"
					/>

					<ProjectPreview
						title="Project Four"
						description="Backend-heavy system implementing APIs, validation, and complex business logic."
						stack="Express • PostgreSQL • TypeScript"
						href="/projects/project-four"
					/>
				</div>
			</section>
		</div>
	);
}
