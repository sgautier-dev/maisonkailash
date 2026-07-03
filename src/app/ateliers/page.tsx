import type { ComponentType, SVGProps } from "react"
import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import {
	ArchiveBoxIcon,
	CalendarDaysIcon,
	MapPinIcon,
	SparklesIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import atelierHeroImage from "@/images/atelier-kailash.jpg"
import atelierRoomImage from "@/images/atelier-kailash2.jpg"
import yogiAshokanandaImage from "@/images/yogi-ashokananda-kailash.jpg"
import NewsletterSignup from "@/components/NewsletterSignup"

export const metadata: Metadata = {
	title: "Ateliers, stages et rencontres à La Réunion",
	description:
		"Découvrez les ateliers, stages, conférences et rencontres proposés ponctuellement par Maison Kailash à La Réunion.",
	alternates: {
		canonical: "/ateliers/",
	},
}

type WorkshopStatus = "open" | "full" | "past" | "draft"

type Workshop = {
	title: string
	slug: string
	status: WorkshopStatus
	category: string
	dateLabel: string
	location: string
	teacher?: string
	shortDescription: string
	image: StaticImageData
	imageAlt: string
	href?: string
}

type WorkshopTheme = {
	name: string
	description: string
	icon: ComponentType<SVGProps<SVGSVGElement>>
}

const upcomingWorkshops: readonly Workshop[] = []

const archivedWorkshops: readonly Workshop[] = [
	{
		title: "Méditation avec Yogi Ashokananda",
		slug: "meditation-yogi-ashokananda",
		status: "past",
		category: "Méditation",
		dateLabel: "Archive",
		location: "Maison Kailash, Saint-Gilles les Hauts",
		teacher: "Yogi Ashokananda",
		shortDescription:
			"Un temps de pratique et de transmission autour de la méditation et des enseignements de Yogi Ashokananda.",
		image: yogiAshokanandaImage,
		imageAlt: "Méditation avec Yogi Ashokananda à Maison Kailash",
		href: "/ateliers/meditation-yogi-ashokananda/",
	},
]

const workshopThemes: readonly WorkshopTheme[] = [
	{
		name: "Yoga & méditation",
		description:
			"Des rendez-vous ponctuels pour approfondir la pratique, le souffle, la concentration et la présence.",
		icon: SparklesIcon,
	},
	{
		name: "Stages & pratiques invitées",
		description:
			"Maison Kailash accueille des intervenants et pratiques complémentaires dans un cadre calme et chaleureux.",
		icon: UserGroupIcon,
	},
	{
		name: "Rencontres & conférences",
		description:
			"Des temps d'échange autour de la santé holistique, de la conscience corporelle et du mieux-être.",
		icon: CalendarDaysIcon,
	},
]

function getStatusLabel(status: WorkshopStatus) {
	switch (status) {
		case "open":
			return "Inscriptions ouvertes"
		case "full":
			return "Complet"
		case "past":
			return "Archive"
		case "draft":
			return "Bientôt"
	}
}

export default function AteliersPage() {
	return (
		<main>
			<section className="relative overflow-hidden bg-background">
				<div className="section-container">
					<div className="relative z-10 py-16 lg:w-full lg:max-w-2xl lg:py-28">
						<div
							aria-hidden="true"
							className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 bg-background [clip-path:polygon(0_0,90%_0,50%_100%,0_100%)] lg:block"
						/>

						<Reveal>
							<div className="relative max-w-2xl lg:max-w-xl">
								<p className="eyebrow">Ateliers & stages</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Des rencontres pour approfondir la pratique
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Maison Kailash accueille ponctuellement des ateliers, stages,
									conférences et rencontres autour du yoga, de la méditation, du
									souffle et de la santé holistique.
								</p>
								<p className="mt-5 text-base/7 text-muted">
									Cette rubrique est pensée comme un agenda vivant : les
									prochains rendez-vous seront publiés ici, avec les
									informations pratiques pour réserver ou contacter
									l&apos;équipe.
								</p>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link
										href="#prochains-ateliers"
										className="btn-primary px-5 py-3 text-sm"
									>
										Voir les ateliers
									</Link>
									<Link
										href="/accueil/contact-acces/"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Proposer un atelier
									</Link>
								</div>
							</div>
						</Reveal>
					</div>
				</div>

				<div className="bg-surface lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						src={atelierHeroImage}
						alt="Atelier à Maison Kailash"
						sizes="(min-width: 1024px) 50vw, 100vw"
						className="aspect-3/2 w-full object-cover lg:aspect-auto lg:h-full"
						priority
					/>
				</div>
			</section>

			<section id="prochains-ateliers" className="section-padding bg-surface">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Agenda</p>
							<h2 className="heading-section mt-2 text-foreground">
								Prochains ateliers
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Les nouveaux rendez-vous seront annoncés ici dès leur
								validation.
							</p>
						</div>
					</Reveal>

					{upcomingWorkshops.length > 0 ? (
						<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
							{upcomingWorkshops.map((workshop, index) => (
								<Reveal
									key={workshop.slug}
									delay={index % 3 === 2 ? "lg" : index % 3 === 1 ? "md" : "sm"}
								>
									<WorkshopCard workshop={workshop} />
								</Reveal>
							))}
						</div>
					) : (
						<Reveal delay="sm">
							<div className="mx-auto mt-14 max-w-3xl rounded-panel bg-background p-8 text-center shadow-card sm:p-10">
								<CalendarDaysIcon
									aria-hidden="true"
									className="mx-auto size-10 text-mk-green"
								/>
								<h3 className="mt-6 text-2xl font-semibold text-foreground">
									Aucun atelier programmé pour le moment
								</h3>
								<p className="mt-4 text-base/7 text-muted">
									Les prochains ateliers, stages ou conférences seront publiés
									ici. Vous pouvez aussi contacter Maison Kailash pour connaître
									les projets à venir.
								</p>
								<div className="mt-8">
									<NewsletterSignup
										id="workshops-newsletter"
										title="Inscription à la newsletter"
										description="Inscrivez-vous à la newsletter Maison Kailash pour recevoir les annonces des prochains ateliers, stages et conférences."
									/>
								</div>
							</div>
						</Reveal>
					)}
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Archives</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Ateliers passés
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Certains événements passés restent visibles pour conserver la
									mémoire des rencontres accueillies à Maison Kailash et donner
									un aperçu de l&apos;esprit des ateliers.
								</p>
							</div>
						</Reveal>

						<div className="grid gap-8">
							{archivedWorkshops.map((workshop) => (
								<Reveal key={workshop.slug} delay="sm">
									<WorkshopCard workshop={workshop} variant="horizontal" />
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
						<Reveal>
							<div>
								<p className="eyebrow">Ce que nous accueillons</p>
								<h2 className="heading-section mt-2 text-foreground">
									Un lieu ouvert aux pratiques sensibles et exigeantes
								</h2>
								<div className="mt-10 grid gap-8">
									{workshopThemes.map((theme) => (
										<div key={theme.name} className="flex gap-5">
											<div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mk-green text-white">
												<theme.icon aria-hidden="true" className="size-6" />
											</div>
											<div>
												<h3 className="text-lg font-semibold text-foreground">
													{theme.name}
												</h3>
												<p className="mt-2 text-base/7 text-muted">
													{theme.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={atelierRoomImage}
									alt="Espace d'atelier à Maison Kailash"
									sizes="(min-width: 1024px) 38vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<LocationCta />
		</main>
	)
}

function WorkshopCard({
	workshop,
	variant = "default",
}: {
	workshop: Workshop
	variant?: "default" | "horizontal"
}) {
	const content = (
		<>
			<div
				className={
					variant === "horizontal"
						? "media-frame shadow-none lg:w-56 lg:shrink-0"
						: "media-frame shadow-none"
				}
			>
				<Image
					src={workshop.image}
					alt={workshop.imageAlt}
					sizes={
						variant === "horizontal"
							? "(min-width: 1024px) 14rem, 100vw"
							: "(min-width: 1024px) 33vw, 100vw"
					}
					className={
						variant === "horizontal"
							? "aspect-4/5 w-full object-cover"
							: "aspect-3/2 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
					}
				/>
			</div>

			<div
				className={variant === "horizontal" ? "flex grow flex-col p-6" : "p-6"}
			>
				<div className="flex flex-wrap items-center gap-3">
					<span className="rounded-full bg-mk-saffron-soft px-3 py-1 text-xs font-semibold text-mk-saffron-text">
						{getStatusLabel(workshop.status)}
					</span>
					<span className="text-xs font-semibold tracking-[0.12em] text-mk-green uppercase">
						{workshop.category}
					</span>
				</div>

				<h3 className="mt-4 text-2xl font-semibold text-foreground group-hover:text-mk-green">
					{workshop.title}
				</h3>
				<p className="mt-4 text-base/7 text-muted">
					{workshop.shortDescription}
				</p>

				<dl className="mt-6 space-y-3 text-sm/6 text-muted">
					<div className="flex gap-3">
						<ArchiveBoxIcon
							aria-hidden="true"
							className="mt-0.5 size-5 shrink-0 text-mk-green"
						/>
						<div>
							<dt className="sr-only">Date</dt>
							<dd>{workshop.dateLabel}</dd>
						</div>
					</div>
					{workshop.teacher ? (
						<div className="flex gap-3">
							<UserGroupIcon
								aria-hidden="true"
								className="mt-0.5 size-5 shrink-0 text-mk-green"
							/>
							<div>
								<dt className="sr-only">Intervenant</dt>
								<dd>{workshop.teacher}</dd>
							</div>
						</div>
					) : null}
					<div className="flex gap-3">
						<MapPinIcon
							aria-hidden="true"
							className="mt-0.5 size-5 shrink-0 text-mk-green"
						/>
						<div>
							<dt className="sr-only">Lieu</dt>
							<dd>{workshop.location}</dd>
						</div>
					</div>
				</dl>

				{workshop.href ? (
					<p className="mt-6 text-sm font-semibold text-mk-green group-hover:text-mk-saffron-text">
						Consulter l&apos;archive
					</p>
				) : null}
			</div>
		</>
	)

	if (!workshop.href) {
		return (
			<article
				className={
					variant === "horizontal"
						? "content-card flex h-full flex-col p-0 lg:flex-row"
						: "content-card h-full p-0"
				}
			>
				{content}
			</article>
		)
	}

	return (
		<article className="group h-full">
			<Link
				href={workshop.href}
				className={
					variant === "horizontal"
						? "content-card flex h-full flex-col p-0 lg:flex-row"
						: "content-card flex h-full flex-col p-0"
				}
			>
				{content}
			</Link>
		</article>
	)
}
