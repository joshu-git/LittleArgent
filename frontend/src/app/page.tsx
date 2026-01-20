import Link from "next/link";
import {
	SiNextdotjs,
	SiTypescript,
	SiExpress,
	SiPostgresql,
	SiTailwindcss,
	SiNodedotjs,
	SiVercel,
	SiNetlify,
} from "react-icons/si";
import type { ReactNode } from "react";

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

function Skill({ name, icon }: { name: string; icon?: ReactNode }) {
	return (
		<div className="flex items-center gap-2 px-4 py-2 bg-card-soft rounded-md text-sm font-medium text-text-subtle hover:bg-accent-soft transition-colors">
			{icon && icon}
			<span>{name}</span>
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

			<div className="flex gap-3 pt-4 flex-wrap">
				<Link href={href}>
					<button
						className="px-4 py-2 bg-card border border-[var(--color-border)] rounded-md hover:bg-accent-soft transition-colors"
						style={{ color: "var(--color-text)" }}
					>
						Details
					</button>
				</Link>

				{github && (
					<a href={github} target="_blank" rel="noopener noreferrer">
						<button
							className="px-4 py-2 bg-card border border-[var(--color-border)] rounded-md hover:bg-accent-soft transition-colors"
							style={{ color: "var(--color-text)" }}
						>
							GitHub
						</button>
					</a>
				)}

				{live && (
					<a href={live} target="_blank" rel="noopener noreferrer">
						<button className="bg-accent-button text-button-text px-3 py-1 rounded-md text-sm hover:brightness-110 transition">
							Live
						</button>
					</a>
				)}
			</div>
		</div>
	);
}

export default function HomePage() {
	return (
		<div className="container py-16 space-y-16 md:space-y-20">
			{/* HERO */}
			<section className="max-w-3xl space-y-4 md:space-y-6">
				<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
					Full Stack Web Developer
				</h1>

				<p className="text-lg md:text-xl">
					Building scalable web applications and automation systems.
				</p>

				<p className="text-text-muted max-w-2xl leading-relaxed">
					I’m Joshua Argent. I build full-stack applications with a
					strong focus on automating workflows, extracting insights
					from data, and reducing manual processes.
				</p>

				<div className="flex flex-wrap gap-4 pt-4">
					<Link href="/projects">
						<button className="px-3 py-1 rounded-md border border-[var(--color-border)] bg-card text-[var(--color-text)] hover:bg-accent-soft transition-colors text-sm">
							View Projects
						</button>
					</Link>

					<Link
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button
							className="px-4 py-2 bg-card border border-[var(--color-border)] rounded-md hover:bg-accent-soft transition-colors"
							style={{ color: "var(--color-text)" }}
						>
							Resume
						</button>
					</Link>

					<a
						href="https://github.com/joshu-git"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button
							className="px-4 py-2 bg-card border border-[var(--color-border)] rounded-md hover:bg-accent-soft transition-colors"
							style={{ color: "var(--color-text)" }}
						>
							GitHub
						</button>
					</a>
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

			{/* SKILLS */}
			<section className="space-y-4">
				<h2 className="text-2xl font-bold">Core Skills</h2>
				<div className="flex flex-wrap gap-3">
					<Skill name="Next.js" icon={<SiNextdotjs size={18} />} />
					<Skill
						name="TypeScript"
						icon={<SiTypescript size={18} />}
					/>
					<Skill name="Express" icon={<SiExpress size={18} />} />
					<Skill
						name="PostgreSQL"
						icon={<SiPostgresql size={18} />}
					/>
					<Skill
						name="Tailwind CSS"
						icon={<SiTailwindcss size={18} />}
					/>
					<Skill name="Node.js" icon={<SiNodedotjs size={18} />} />
					<Skill name="Vercel" icon={<SiVercel size={18} />} />
					<Skill name="Netlify" icon={<SiNetlify size={18} />} />
				</div>
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
						stack="Next.js • TypeScript • Express • PostgreSQL"
						href="/projects/argentflows"
						live="https://argentflows.vercel.app"
					/>

					<ProjectPreview
						title="LittleFlows"
						description="A productivity focused social platform designed to reduce noise and encourage intentional usage."
						stack="Next.js • TypeScript • Express • PostgreSQL"
						href="/projects/littleflows"
						live="https://littleflows.vercel.app"
					/>

					<ProjectPreview
						title="PingElo"
						description="Open source ranked table tennis platform for tracking matches and leaderboards."
						stack="Next.js • TypeScript • Express • PostgreSQL"
						href="/projects/pingelo"
						live="https://pingelo.vercel.app"
						github="https://github.com/joshu-git/pingelo"
					/>

					<ProjectPreview
						title="YearlyGo"
						description="Open source accountability tracker for achieving group goals over a year."
						stack="Next.js • TypeScript • Express • PostgreSQL"
						href="/projects/yearlygo"
						live="https://yearlygo.vercel.app"
						github="https://github.com/joshu-git/yearlygo"
					/>
				</div>
			</section>
		</div>
	);
}
