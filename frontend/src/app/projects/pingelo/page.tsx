import Link from "next/link";

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="space-y-6">
			<h2 className="text-2xl font-bold">{title}</h2>
			<div className="space-y-4 text-text-muted leading-relaxed">
				{children}
			</div>
		</section>
	);
}

function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-card p-6 rounded-lg border border-[var(--color-border)]">
			{children}
		</div>
	);
}

export default function PingEloProjectPage() {
	return (
		<div className="container py-16 space-y-20">
			{/* HEADER */}
			<section className="max-w-3xl space-y-6">
				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
					PingElo
				</h1>

				<p className="text-lg">
					A free competitive ranking platform for groups of table
					tennis players, built around a custom Elo-based system and
					designed for real-world usage.
				</p>

				<div className="flex gap-4 flex-wrap pt-2">
					<a
						href="https://pingelo.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="px-4 py-2 bg-accent-button text-button-text rounded-lg font-semibold hover:bg-accent-button-hover transition-colors">
							Live Site
						</button>
					</a>

					<a
						href="https://github.com/joshu-git/pingelo"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="px-3 py-1 bg-card border border-[var(--color-border)] rounded-md hover:bg-accent-soft transition-colors">
							GitHub
						</button>
					</a>

					<Link href="/projects">
						<button className="px-3 py-1 bg-card border border-[var(--color-border)] rounded-md hover:bg-accent-soft transition-colors">
							← All Projects
						</button>
					</Link>
				</div>
			</section>

			{/* OVERVIEW */}
			<Section title="Overview">
				<p>
					PingElo was built to solve a real problem in my college
					table tennis group: tracking rankings and running informal
					tournaments without spreadsheets or paid tools. The
					application is actively used and designed to support any
					group of players who want a lightweight, fair, and automated
					competitive system.
				</p>
			</Section>

			{/* PROBLEM + CONSTRAINTS */}
			<section className="grid md:grid-cols-2 gap-8">
				<Card>
					<h3 className="text-xl font-semibold mb-3">
						Problem & Motivation
					</h3>
					<p>
						Rankings were previously managed manually, which made it
						difficult to determine relative skill levels and
						frustrating to organize tournaments. Existing solutions
						either didn’t fit the use case or required paid tiers
						for basic functionality.
					</p>
					<p className="mt-3">
						The goal was to build a free system that could
						automatically enforce match rules, update rankings
						fairly, and remain usable even when not every
						participant wanted to create an account.
					</p>
				</Card>

				<Card>
					<h3 className="text-xl font-semibold mb-3">Constraints</h3>
					<ul className="list-disc pl-5 space-y-1">
						<li>Solo developer</li>
						<li>No budget</li>
						<li>Real users from the start</li>
						<li>Evolving requirements as usage grew</li>
					</ul>
				</Card>
			</section>

			{/* SYSTEM */}
			<Section title="System Overview">
				<p>
					PingElo is a monorepo with a clear separation between
					frontend and backend. The frontend communicates exclusively
					with a backend API; all ranking logic and data integrity
					checks are enforced server-side.
				</p>

				<div className="grid md:grid-cols-2 gap-4">
					<Card>
						<ul className="space-y-2">
							<li>
								<strong>Frontend:</strong> Next.js (TypeScript)
							</li>
							<li>
								<strong>Backend:</strong> Express (TypeScript)
							</li>
							<li>
								<strong>Database:</strong> PostgreSQL (Supabase)
							</li>
						</ul>
					</Card>

					<Card>
						<ul className="space-y-2">
							<li>
								<strong>Hosting:</strong> Vercel (frontend),
								Render (backend)
							</li>
							<li>
								<strong>Architecture:</strong> API-driven
							</li>
						</ul>
					</Card>
				</div>
			</Section>

			{/* DATA MODEL */}
			<Section title="Core Data Model">
				<div className="grid md:grid-cols-2 gap-4">
					<Card>
						<ul className="space-y-2">
							<li>
								<strong>Players</strong>
							</li>
							<li>
								<strong>Matches</strong>
							</li>
							<li>
								<strong>Groups</strong>
							</li>
						</ul>
					</Card>
					<Card>
						<ul className="space-y-2">
							<li>
								<strong>Rankings / Elo</strong>
							</li>
							<li>
								<strong>Tournaments</strong>
							</li>
						</ul>
					</Card>
				</div>
			</Section>

			{/* KEY DECISIONS */}
			<Section title="Key Technical Decisions">
				<Card>
					<h3 className="font-semibold text-lg mb-2">
						Custom Elo System
					</h3>
					<ul className="list-disc pl-5 space-y-1">
						<li>Relative Elo difference</li>
						<li>Point difference</li>
						<li>Match closeness</li>
					</ul>
				</Card>

				<Card>
					<h3 className="font-semibold text-lg mb-2">
						Server-Side Validation
					</h3>
					<ul className="list-disc pl-5 space-y-1">
						<li>Win by two enforcement</li>
						<li>Group isolation</li>
						<li>Permission checks</li>
					</ul>
				</Card>

				<Card>
					<h3 className="font-semibold text-lg mb-2">
						Players Without Accounts
					</h3>
					<p>
						Admins can create players without requiring sign-up.
						Players can later claim their profile via a claim code,
						reducing onboarding friction.
					</p>
				</Card>
			</Section>

			{/* PERFORMANCE */}
			<Section title="Performance & Reliability">
				<ul className="list-disc pl-5 space-y-1">
					<li>Paginated leaderboards and matches</li>
					<li>Infinite loading</li>
					<li>Backend error responses</li>
					<li>Frontend validation and feedback</li>
				</ul>
			</Section>

			{/* DATA */}
			<Section title="Data & Analysis">
				<p>
					PingElo stores historical match and rating data, enabling
					analysis of ranking stability, player progression, and match
					outcomes.
				</p>
				<p>
					I am exploring simple statistical models and trend analysis
					to understand performance patterns before introducing more
					complex machine learning approaches.
				</p>
			</Section>

			{/* REFLECTION */}
			<Section title="Reflection">
				<Card>
					<h3 className="font-semibold mb-1">
						What I’m Most Proud Of
					</h3>
					<p>
						The Elo system and the flexible player model that allows
						participation without mandatory accounts.
					</p>
				</Card>

				<Card>
					<h3 className="font-semibold mb-1">
						What I’d Do Differently
					</h3>
					<p>
						I would design groups and tournaments first to avoid
						later refactoring for scalability.
					</p>
				</Card>

				<Card>
					<h3 className="font-semibold mb-1">What’s Next</h3>
					<ul className="list-disc pl-5 space-y-1">
						<li>Finish manager dashboard</li>
						<li>Improve tournaments</li>
						<li>Add Elo calculation tests</li>
					</ul>
				</Card>
			</Section>
		</div>
	);
}
