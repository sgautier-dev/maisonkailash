import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"

import { footerNavigation, mainNavigation } from "@/lib/navigation"
import {
	getRetreatNavigationLinks,
	getWorkshopNavigationLinks,
} from "@/sanity/queries"

export const metadata: Metadata = {
	title: "Plan du site",
	description:
		"Retrouvez toutes les rubriques et les pages disponibles sur le site Maison Kailash.",
	alternates: {
		canonical: "/sitemap/",
	},
}

type SiteLink = {
	name: string
	href: string
}

type SiteMapCardProps = {
	title: string
	href?: string
	children: ReactNode
}

function SiteMapCard({ title, href, children }: SiteMapCardProps) {
	return (
		<section className="content-card">
			<h2 className="text-xl font-semibold text-foreground">
				{href ? (
					<Link href={href} className="hover:text-mk-green">
						{title}
					</Link>
				) : (
					title
				)}
			</h2>
			<div className="mt-5 space-y-6">{children}</div>
		</section>
	)
}

function LinkList({ links }: { links: readonly SiteLink[] }) {
	return (
		<ul className="space-y-2">
			{links.map((link) => (
				<li key={link.href}>
					<Link
						href={link.href}
						className="text-base/7 text-muted hover:text-mk-green"
					>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default async function SiteMapPage() {
	const [workshopResult, retreatResult] = await Promise.allSettled([
		getWorkshopNavigationLinks(),
		getRetreatNavigationLinks(),
	])

	const workshopLinks =
		workshopResult.status === "fulfilled" ? workshopResult.value : []

	const retreatLinks =
		retreatResult.status === "fulfilled" ? retreatResult.value : []

	return (
		<main>
			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="mx-auto max-w-4xl text-center">
						<p className="eyebrow">Navigation</p>
						<h1 className="heading-display mt-4 text-mk-green">Plan du site</h1>
						<p className="mt-8 text-lg/8 text-muted">
							Retrouvez ici les principales rubriques, les soins, les cours, les
							ateliers et les séjours proposés par Maison Kailash.
						</p>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<nav
						aria-label="Plan du site Maison Kailash"
						className="grid gap-6 lg:grid-cols-2"
					>
						<SiteMapCard title="Accueil" href="/">
							<LinkList
								links={[
									{
										name: "Contact & accès",
										href: "/contact-acces/",
									},
								]}
							/>
						</SiteMapCard>

						{mainNavigation.map((section) => {
							const dynamicLinks =
								section.href === "/ateliers/"
									? workshopLinks
									: section.href === "/sejours-bien-etre/"
										? retreatLinks
										: []

							return (
								<SiteMapCard
									key={section.href}
									title={section.name}
									href={section.href}
								>
									{section.children?.map((child) =>
										child.type === "group" ? (
											<div key={child.name}>
												<h3 className="text-sm font-semibold tracking-wide text-mk-green uppercase">
													{child.name}
												</h3>
												<div className="mt-3">
													<LinkList links={child.children} />
												</div>
											</div>
										) : (
											<LinkList key={child.href} links={[child]} />
										),
									)}

									{dynamicLinks.length > 0 ? (
										<div>
											<h3 className="text-sm font-semibold tracking-wide text-mk-green uppercase">
												{section.href === "/ateliers/"
													? "Ateliers publiés"
													: "Séjours publiés"}
											</h3>
											<div className="mt-3">
												<LinkList links={dynamicLinks} />
											</div>
										</div>
									) : null}

									{!section.children?.length && dynamicLinks.length === 0 ? (
										<p className="text-base/7 text-muted">
											<Link href={section.href} className="hover:text-mk-green">
												Accéder à la rubrique
											</Link>
										</p>
									) : null}
								</SiteMapCard>
							)
						})}

						<SiteMapCard title="Informations">
							<LinkList
								links={[
									...footerNavigation.utility,
									...footerNavigation.legal.filter(
										(link) => link.href !== "/sitemap/",
									),
								]}
							/>
						</SiteMapCard>
					</nav>
				</div>
			</section>
		</main>
	)
}
