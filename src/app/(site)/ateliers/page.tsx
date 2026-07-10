import type { ComponentType, SVGProps } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	CalendarDaysIcon,
	CurrencyEuroIcon,
	SparklesIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import NewsletterSignup from "@/components/NewsletterSignup"
import Reveal from "@/components/Reveal"
import atelierHeroImage from "@/images/atelier-kailash.jpg"
import atelierRoomImage from "@/images/atelier-kailash2.jpg"
import { getWorkshops, type Workshop } from "@/sanity/queries"
import { urlForImage } from "@/sanity/image"
import { getEventShortDateLabel } from "@/lib/eventDate"

export const metadata: Metadata = {
	title: "Ateliers, stages et rencontres à La Réunion",
	description:
		"Découvrez les ateliers, stages, conférences et rencontres proposés ponctuellement par Maison Kailash à La Réunion.",
	alternates: {
		canonical: "/ateliers/",
	},
}

type WorkshopTheme = {
	name: string
	description: string
	icon: ComponentType<SVGProps<SVGSVGElement>>
}

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

export default async function AteliersPage() {
	const workshops = await getWorkshops()

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
									prochains rendez-vous seront publiés ici, et les archives
									restent visibles pour donner un aperçu de l&apos;esprit des
									rencontres accueillies.
								</p>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link
										href="#ateliers"
										className="btn-primary px-5 py-3 text-sm"
									>
										Voir les ateliers
									</Link>
									<Link
										href="/contact-acces/"
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

			<section id="ateliers" className="section-padding bg-surface">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Agenda</p>
							<h2 className="heading-section mt-2 text-foreground">
								Ateliers et stages
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Les prochains rendez-vous apparaissent en premier. Les ateliers
								passés restent consultables avec la mention Archive.
							</p>
						</div>
					</Reveal>

					{workshops.length > 0 ? (
						<div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
							{workshops.map((workshop, index) => (
								<Reveal
									key={workshop._id}
									delay={index % 2 === 1 ? "md" : "sm"}
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
									ici. Vous pouvez aussi vous inscrire à la newsletter pour
									recevoir les annonces.
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

function WorkshopCard({ workshop }: { workshop: Workshop }) {
	const imageSrc = workshop.mainImage
		? urlForImage(workshop.mainImage).width(900).auto("format").url()
		: atelierRoomImage

	const imageAlt = workshop.mainImage?.alt ?? workshop.title
	const dateLabel = getEventShortDateLabel(workshop)

	return (
		<article className="group h-full">
			<Link
				href={`/ateliers/${workshop.slug}/`}
				className="content-card flex h-full flex-col overflow-hidden p-0"
			>
				<div className="relative aspect-4/3 bg-background">
					<div className="absolute inset-5">
						<Image
							src={imageSrc}
							alt={imageAlt}
							fill
							sizes="(min-width: 1280px) 26rem, (min-width: 768px) 50vw, 100vw"
							className="object-contain transition duration-300 group-hover:scale-[1.02]"
						/>
					</div>

					{workshop.status === "past" || workshop.status === "full" ? (
						<span className="absolute left-0 top-5 rounded-r-full bg-mk-saffron px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-soft">
							{workshop.status === "past" ? "Archive" : "Complet"}
						</span>
					) : null}
				</div>

				<div className="flex flex-1 flex-col p-6">
					<div className="flex flex-wrap items-center gap-3">
						<span className="text-xs font-semibold tracking-[0.12em] text-mk-green uppercase">
							{workshop.category}
						</span>

						{dateLabel ? (
							<span className="rounded-pill bg-mk-mint/40 px-3 py-1 text-xs font-semibold text-mk-green">
								{dateLabel}
							</span>
						) : null}
					</div>

					<h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-mk-green">
						{workshop.title}
					</h3>

					<dl className="mt-5 min-h-24 space-y-3 text-sm/6 text-muted">
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

						{workshop.price ? (
							<div className="flex gap-3">
								<CurrencyEuroIcon
									aria-hidden="true"
									className="mt-0.5 size-5 shrink-0 text-mk-green"
								/>
								<div>
									<dt className="sr-only">Tarif</dt>
									<dd>{workshop.price}</dd>
								</div>
							</div>
						) : null}

						{workshop.bookingText ? (
							<div className="flex gap-3">
								<SparklesIcon
									aria-hidden="true"
									className="mt-0.5 size-5 shrink-0 text-mk-green"
								/>
								<div className="min-w-0">
									<dt className="sr-only">Information</dt>
									<dd className="line-clamp-2">{workshop.bookingText}</dd>
								</div>
							</div>
						) : null}
					</dl>

					<p className="mt-auto pt-6 text-sm font-semibold text-mk-green group-hover:text-mk-saffron-text">
						{workshop.status === "past"
							? "Consulter l'archive"
							: "Voir les détails"}
					</p>
				</div>
			</Link>
		</article>
	)
}
