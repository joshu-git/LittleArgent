import Link from "next/link";

export default function PingEloProjectPage() {
	return (
		<div className="container py-16">
			<article className="prose space-y-12">
				{/* HEADER */}
				<header className="space-y-4">
					<h1>PingElo</h1>
					<p>
						A free competitive ranking platform for groups of table
						tennis players, built around a custom Elo-based system
						and designed for real-world usage.
					</p>

					<div className="flex gap-4 flex-wrap pt-4">
						<a
							href="https://pingelo.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>Live Site</button>
						</a>

						<a
							href="https://github.com/joshu-git/pingelo"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="bg-card border border-[var(--color-border)] text-[var(--color-text)]">
								GitHub
							</button>
						</a>

						<Link href="/projects">
							<button className="bg-card border border-[var(--color-border)] text-[var(--color-text)]">
								← All Projects
							</button>
						</Link>
					</div>
				</header>

				<div className="divider" />

				{/* OVERVIEW */}
				<section>
					<h2>Overview</h2>
					<p>
						PingElo was built to solve a real problem in my college
						table tennis group: tracking rankings and running
						informal tournaments without spreadsheets or paid tools.
						The application is actively used and designed to support
						any group of players who want a lightweight, fair, and
						automated competitive system.
					</p>
				</section>

				<div className="divider" />

				{/* PROBLEM */}
				<section>
					<h2>Problem & Motivation</h2>
					<p>
						Rankings were previously managed manually, which made it
						difficult to determine relative skill levels and
						frustrating to organize tournaments. Existing solutions
						either didn’t fit the use case or required paid tiers
						for basic functionality.
					</p>
					<p>
						The goal was to build a free system that could
						automatically enforce match rules, update rankings
						fairly, and remain usable even when not every
						participant wanted to create an account.
					</p>
				</section>

				<div className="divider" />

				{/* CONSTRAINTS */}
				<section>
					<h2>Constraints</h2>
					<ul>
						<li>Solo developer</li>
						<li>No budget</li>
						<li>Real users from the start</li>
						<li>Evolving requirements as usage grew</li>
					</ul>
				</section>

				<div className="divider" />

				{/* SYSTEM OVERVIEW */}
				<section>
					<h2>System Overview</h2>
					<p>
						PingElo is a monorepo with a clear separation between
						frontend and backend. The frontend communicates
						exclusively with a backend API; all ranking logic and
						data integrity checks are enforced server-side.
					</p>

					<ul>
						<li>
							<strong>Frontend:</strong> Next.js (TypeScript) —
							UI, leaderboards, dashboards, client-side validation
							feedback
						</li>
						<li>
							<strong>Backend:</strong> Express (TypeScript) —
							authentication, authorization, match validation, Elo
							calculation
						</li>
						<li>
							<strong>Database:</strong> PostgreSQL (Supabase)
						</li>
						<li>
							<strong>Hosting:</strong> Vercel (frontend), Render
							(backend)
						</li>
					</ul>
				</section>

				<div className="divider" />

				{/* DATA MODEL */}
				<section>
					<h2>Core Data Model</h2>
					<ul>
						<li>
							<strong>Players:</strong> Participants in matches
							(accounts optional)
						</li>
						<li>
							<strong>Matches:</strong> Singles and doubles
							matches with strict validation rules
						</li>
						<li>
							<strong>Groups:</strong> Isolated competitive spaces
							(e.g. a club or school group)
						</li>
						<li>
							<strong>Rankings / Elo:</strong> Derived values
							based on match history
						</li>
						<li>
							<strong>Tournaments:</strong> Structured sets of
							matches within a group
						</li>
					</ul>
				</section>

				<div className="divider" />

				{/* KEY DECISIONS */}
				<section>
					<h2>Key Technical Decisions</h2>

					<h3>Custom Elo System</h3>
					<p>
						I implemented the Elo system myself after researching
						established models (inspired by chess). Rating
						adjustments take into account:
					</p>
					<ul>
						<li>Relative Elo difference between players</li>
						<li>Point difference in the match</li>
						<li>
							Match closeness (smaller changes for closer games)
						</li>
					</ul>
					<p>
						This results in more stable and realistic rankings,
						especially when skill levels vary significantly.
					</p>

					<h3>Server-Side Validation</h3>
					<p>
						All critical rules are enforced on the backend to ensure
						data integrity:
					</p>
					<ul>
						<li>Matches must be won by two points</li>
						<li>All players must belong to the same group</li>
						<li>
							Only match participants or admins can submit or
							modify results
						</li>
					</ul>

					<h3>Players Without Accounts</h3>
					<p>
						Admins can create players without requiring sign-up.
						When a player later creates an account, they can claim
						their existing profile via a claim code. This
						significantly reduced friction for casual groups.
					</p>
				</section>

				<div className="divider" />

				{/* AUTH */}
				<section>
					<h2>Authentication & Authorization</h2>
					<ul>
						<li>
							Authenticated players can submit matches they
							participate in
						</li>
						<li>
							Admins can edit and delete matches within their
							group
						</li>
						<li>Managers can oversee and manage multiple groups</li>
					</ul>
					<p>
						All dashboards are permission-aware and scoped to
						prevent unauthorized changes.
					</p>
				</section>

				<div className="divider" />

				{/* PERFORMANCE */}
				<section>
					<h2>Performance & Reliability</h2>
					<ul>
						<li>
							Leaderboards and match history load 50 items at a
							time
						</li>
						<li>Infinite loading avoids heavy initial queries</li>
						<li>Structured error responses from the backend</li>
						<li>
							Frontend disables invalid actions and clearly
							communicates errors
						</li>
					</ul>
				</section>

				<div className="divider" />

				{/* DATA & ANALYSIS */}
				<section>
					<h2>Data & Analysis</h2>
					<p>
						PingElo stores historical match and rating data, which
						enables analysis of ranking stability, player
						progression, and match outcomes over time.
					</p>
					<p>
						I am currently exploring simple analytical and
						statistical models (such as baseline probability
						estimates and trend analysis) to better understand
						performance patterns and experiment with match outcome
						prediction. The focus is on interpretability and
						correctness before introducing more complex machine
						learning approaches.
					</p>
				</section>

				<div className="divider" />

				{/* REFLECTION */}
				<section>
					<h2>Reflection</h2>

					<h3>What I’m Most Proud Of</h3>
					<p>
						The Elo system and its integration with real-world match
						rules, as well as the player model that allows
						participation without mandatory accounts.
					</p>

					<h3>What I’d Do Differently</h3>
					<p>
						If starting again, I would design groups and tournaments
						first before implementing match storage and ranking
						logic. Initially optimizing for a single group made
						later scalability more difficult and required
						refactoring.
					</p>

					<h3>What’s Next</h3>
					<ul>
						<li>Finish the manager dashboard</li>
						<li>Improve tournament workflows</li>
						<li>Add tests around Elo calculations</li>
					</ul>
				</section>
			</article>
		</div>
	);
}
