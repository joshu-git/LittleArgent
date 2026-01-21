import Link from "next/link";

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="space-y-8">
			<h2 className="text-2xl font-bold">{title}</h2>
			{children}
		</section>
	);
}

function Card({ children }: { children: React.ReactNode }) {
	return <div className="bg-card p-6 hover-card space-y-3">{children}</div>;
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
					tennis players, built around a custom Elo based system and
					designed for real world usage.
				</p>

				<div className="flex flex-wrap gap-4 pt-2">
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
						<button
							className="px-3 py-1 bg-card border border-[var(--color-border)] rounded-md hover:bg-accent-soft transition-colors"
							style={{ color: "var(--color-text)" }}
						>
							GitHub
						</button>
					</a>

					<Link href="/projects">
						<button
							className="px-3 py-1 bg-card border border-[var(--color-border)] rounded-md hover:bg-accent-soft transition-colors"
							style={{ color: "var(--color-text)" }}
						>
							All Projects
						</button>
					</Link>
				</div>
			</section>

			{/* OVERVIEW */}
			<Section title="Overview">
				<div className="max-w-3xl space-y-4 text-text-muted leading-relaxed">
					<p>
						PingElo was built to solve a real problem in my college
						table tennis group: tracking rankings, determining
						relative skill levels, and running tournaments without
						spreadsheets or paid software.
					</p>
					<p>
						The platform is actively used by my group and is
						designed to support any collection of players who want a
						fair, automated, and competitive ranking system with
						minimal friction.
					</p>
				</div>
			</Section>

			{/* PROBLEM & CONSTRAINTS */}
			<Section title="Problem & Constraints">
				<div className="grid md:grid-cols-2 gap-8">
					<Card>
						<h3 className="text-lg font-semibold">Problem</h3>
						<p className="text-text-muted leading-relaxed">
							Rankings were previously managed manually, making it
							difficult to track progression, identify the
							strongest players, and host tournaments reliably.
							Existing tools either didn’t match the use case or
							locked basic functionality behind paid tiers.
						</p>
					</Card>

					<Card>
						<h3 className="text-lg font-semibold">Constraints</h3>
						<ul className="list-disc pl-5 text-text-muted space-y-1">
							<li>Solo developer</li>
							<li>No budget</li>
							<li>Real users from day one</li>
							<li>Evolving requirements as usage grew</li>
						</ul>
					</Card>
				</div>
			</Section>

			{/* SYSTEM ARCHITECTURE */}
			<Section title="System Architecture">
				<div className="grid md:grid-cols-2 gap-8">
					<Card>
						<h3 className="text-lg font-semibold">Architecture</h3>
						<p className="text-text-muted leading-relaxed">
							PingElo is a monorepo with a clear separation
							between frontend and backend. The frontend
							communicates through a typed API, with all
							validation and ranking logic enforced server side.
						</p>
					</Card>

					<Card>
						<h3 className="text-lg font-semibold">
							Technology Stack
						</h3>
						<ul className="list-disc pl-5 text-text-muted space-y-1">
							<li>Next.js + TypeScript (frontend)</li>
							<li>Express + TypeScript (backend)</li>
							<li>PostgreSQL via Supabase</li>
							<li>Vercel (frontend), Render (backend)</li>
						</ul>
					</Card>
				</div>
			</Section>

			{/* DATA MODEL */}
			<Section title="Core Data Model">
				<div className="grid md:grid-cols-3 gap-6">
					<Card>
						<h3 className="font-semibold">Players</h3>
						<p className="text-text-muted">
							Represents singles and doubles participants, with
							support for players who do not yet have accounts.
						</p>
					</Card>

					<Card>
						<h3 className="font-semibold">Matches & Rankings</h3>
						<p className="text-text-muted">
							Matches drive Elo changes, which are stored
							historically to allow leaderboards and progression
							tracking.
						</p>
					</Card>

					<Card>
						<h3 className="font-semibold">Groups & Tournaments</h3>
						<p className="text-text-muted">
							Groups isolate competition pools, while tournaments
							provide structured match organization.
						</p>
					</Card>
				</div>
			</Section>

			{/* ELO SYSTEM */}
			<Section title="Custom Elo System">
				<div className="grid md:grid-cols-2 gap-8">
					<Card>
						<p className="text-text-muted leading-relaxed">
							The Elo system was designed after researching chess
							and competitive ranking models. Rating changes
							depend not only on win/loss but also on relative Elo
							difference and point margin.
						</p>
					</Card>

					<Card>
						<ul className="list-disc pl-5 text-text-muted space-y-1">
							<li>Higher gains for upsets</li>
							<li>Lower changes for expected wins</li>
							<li>Reduced impact for close matches</li>
							<li>Separate ratings for singles and doubles</li>
						</ul>
					</Card>
				</div>
			</Section>

			{/* VALIDATION & PERMISSIONS */}
			<Section title="Validation, Permissions & Reliability">
				<div className="grid md:grid-cols-3 gap-6">
					<Card>
						<h3 className="font-semibold">Match Validation</h3>
						<ul className="list-disc pl-5 text-text-muted space-y-1">
							<li>Win by two enforcement</li>
							<li>Score format checks</li>
							<li>Group membership validation</li>
						</ul>
					</Card>

					<Card>
						<h3 className="font-semibold">Authentication</h3>
						<p className="text-text-muted">
							Authenticated users can create matches. Admins can
							submit and edit matches on behalf of players.
						</p>
					</Card>

					<Card>
						<h3 className="font-semibold">Roles</h3>
						<ul className="list-disc pl-5 text-text-muted space-y-1">
							<li>Players</li>
							<li>Group admins</li>
							<li>Managers (multi-group control)</li>
						</ul>
					</Card>
				</div>
			</Section>

			{/* PERFORMANCE */}
			<Section title="Performance & UX">
				<div className="grid md:grid-cols-2 gap-8">
					<Card>
						<ul className="list-disc pl-5 text-text-muted space-y-1">
							<li>Paginated API responses</li>
							<li>
								Infinite loading for matches and leaderboards
							</li>
							<li>Clear error responses</li>
						</ul>
					</Card>

					<Card>
						<p className="text-text-muted leading-relaxed">
							Actions are disabled until valid, providing
							immediate feedback and preventing invalid
							submissions before requests are made.
						</p>
					</Card>
				</div>
			</Section>

			{/* DATA & ANALYSIS */}
			<Section title="Data & Analysis">
				<div className="max-w-3xl space-y-4 text-text-muted leading-relaxed">
					<p>
						PingElo stores historical match and Elo data, enabling
						analysis of player progression, ranking stability, and
						competitive balance.
					</p>
					<p>
						I am exploring statistical analysis and trend modeling
						on this data before introducing more complex machine
						learning approaches.
					</p>
				</div>
			</Section>

			{/* REFLECTION */}
			<Section title="Reflection & Future Work">
				<div className="grid md:grid-cols-3 gap-6">
					<Card>
						<h3 className="font-semibold">Proudest Achievement</h3>
						<p className="text-text-muted">
							The Elo system and the flexible player model that
							allows participation without mandatory accounts.
						</p>
					</Card>

					<Card>
						<h3 className="font-semibold">What I’d Change</h3>
						<p className="text-text-muted">
							I would design groups and tournaments first to avoid
							later refactoring for scalability.
						</p>
					</Card>

					<Card>
						<h3 className="font-semibold">Next Steps</h3>
						<ul className="list-disc pl-5 text-text-muted space-y-1">
							<li>Complete manager dashboard</li>
							<li>Improve tournament tooling</li>
							<li>Add automated tests for Elo calculations</li>
						</ul>
					</Card>
				</div>
			</Section>
		</div>
	);
}
