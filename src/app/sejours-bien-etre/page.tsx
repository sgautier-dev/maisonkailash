import type { ComponentType, SVGProps } from "react"
import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import {
	ArchiveBoxIcon,
	GlobeAsiaAustraliaIcon,
	HeartIcon,
	MapPinIcon,
	SparklesIcon,
	SunIcon,
} from "@heroicons/react/24/outline"

import Reveal from "@/components/Reveal"
import sejourIndeImage from "@/images/sejour-inde.jpeg"
import sejourInde2Image from "@/images/sejour-inde2.jpeg"
import sejourInde3Image from "@/images/sejour-inde3.jpeg"
import sejourInde5Image from "@/images/sejour-inde5.jpeg"
import sejourMaurice3Image from "@/images/sejour-maurice3.jpeg"
import sejourMaurice4Image from "@/images/sejour-maurice4.jpeg"
import sejourMaurice5Image from "@/images/sejour-maurice5.jpeg"
import sejourMaurice7Image from "@/images/sejour-maurice7.jpeg"
import sejourRodriguesImage from "@/images/sejour-rodrigues.jpeg"
import sejourRodrigues2Image from "@/images/sejour-rodrigues2.jpeg"
import NewsletterSignup from "@/components/NewsletterSignup"

export const metadata: Metadata = {
	title: "Séjours et retraites bien-être",
	description:
		"Découvrez les séjours bien-être proposés ou accueillis par Maison Kailash : cures ayurvédiques, retraites, voyages de ressourcement et immersions autour du yoga.",
	alternates: {
		canonical: "/sejours-bien-etre/",
	},
}

type RetreatStatus = "open" | "full" | "past" | "draft"

type Retreat = {
	title: string
	slug: string
	status: RetreatStatus
	destination: string
	dateLabel: string
	shortDescription: string
	image: StaticImageData
	imageAlt: string
	href?: string
}

type RetreatTheme = {
	name: string
	description: string
	icon: ComponentType<SVGProps<SVGSVGElement>>
}

const upcomingRetreats: readonly Retreat[] = []

const archivedRetreats: readonly Retreat[] = [
	{
		title: "Cure Panchakarma en Inde du Sud",
		slug: "cure-ayurvedique-inde",
		status: "past",
		destination: "Inde du Sud",
		dateLabel: "Archive 2024",
		shortDescription:
			"Une immersion ayurvédique dédiée au repos, aux soins traditionnels et au retour à l'équilibre dans le cadre d'une cure Panchakarma.",
		image: sejourInde3Image,
		imageAlt: "Cure ayurvédique Panchakarma en Inde du Sud",
		href: "/sejours-bien-etre/cure-ayurvedique-inde/",
	},
]

const heroImages = [
	{
		src: sejourIndeImage,
		alt: "Séjour bien-être en Inde",
		className: "aspect-4/3",
	},
	{
		src: sejourMaurice3Image,
		alt: "Séjour bien-être à Maurice",
		className: "aspect-3/4",
	},
	{
		src: sejourRodriguesImage,
		alt: "Séjour bien-être à Rodrigues",
		className: "aspect-4/3",
	},
	{
		src: sejourInde2Image,
		alt: "Voyage de ressourcement en Inde",
		className: "aspect-3/4",
	},
	{
		src: sejourMaurice5Image,
		alt: "Immersion bien-être à Maurice",
		className: "aspect-4/3",
	},
]

const retreatThemes: readonly RetreatTheme[] = [
	{
		name: "Sortir du quotidien",
		description:
			"Les séjours offrent un temps hors des habitudes, pour ralentir, se déposer et retrouver de l'espace intérieur.",
		icon: SunIcon,
	},
	{
		name: "Pratiques & soins",
		description:
			"Yoga, méditation, soins ayurvédiques, temps de repos et accompagnement peuvent se combiner selon l'esprit du séjour.",
		icon: HeartIcon,
	},
	{
		name: "Immersion & transmission",
		description:
			"Chaque voyage est pensé comme une expérience sensible, reliée à un lieu, une pratique et une qualité de présence.",
		icon: SparklesIcon,
	},
]

export default function SejoursBienEtrePage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Séjours bien-être</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Un temps pour vous hors du quotidien
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Maison Kailash imagine et relaie des séjours de ressourcement
									pour prendre soin du corps, ralentir le rythme et renouer avec
									une qualité de présence.
								</p>
								<p className="mt-5 text-base/7 text-muted">
									Inde, Maurice, Rodrigues ou autres destinations : ces
									immersions prolongent l&apos;esprit de Kailash au-delà du
									lieu, autour du yoga, de l&apos;ayurvéda, de la méditation et
									du mieux-être.
								</p>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link
										href="#prochains-sejours"
										className="btn-primary px-5 py-3 text-sm"
									>
										Voir les séjours
									</Link>
									<Link
										href="/accueil/contact-acces/"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Être informé
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="grid grid-cols-3 gap-4 sm:gap-6">
								<div className="space-y-4 pt-12 sm:space-y-6">
									<div className="media-frame">
										<Image
											src={heroImages[0].src}
											alt={heroImages[0].alt}
											sizes="(min-width: 1024px) 18vw, 33vw"
											className={`${heroImages[0].className} w-full object-cover`}
											priority
										/>
									</div>
								</div>

								<div className="space-y-4 sm:space-y-6">
									{heroImages.slice(1, 3).map((image) => (
										<div key={image.alt} className="media-frame">
											<Image
												src={image.src}
												alt={image.alt}
												sizes="(min-width: 1024px) 18vw, 33vw"
												className={`${image.className} w-full object-cover`}
											/>
										</div>
									))}
								</div>

								<div className="space-y-4 pt-8 sm:space-y-6 sm:pt-16">
									{heroImages.slice(3).map((image) => (
										<div key={image.alt} className="media-frame">
											<Image
												src={image.src}
												alt={image.alt}
												sizes="(min-width: 1024px) 18vw, 33vw"
												className={`${image.className} w-full object-cover`}
											/>
										</div>
									))}
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<Reveal>
							<div>
								<p className="eyebrow">L&apos;esprit des séjours</p>
								<h2 className="heading-section mt-2 text-foreground">
									Des immersions pour retrouver du souffle
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Les séjours bien-être proposent un temps plus long qu&apos;une
									séance ou un atelier. Ils invitent à quitter le rythme
									habituel pour se reconnecter au corps, à la nature, à la
									pratique et à soi-même.
								</p>
								<p>
									Selon les formats, ils peuvent associer pratiques corporelles,
									méditation, soins, accompagnement, découverte d&apos;un lieu
									et temps de repos.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section id="prochains-sejours" className="section-padding bg-background">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Agenda</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Prochains séjours
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Les prochains séjours seront annoncés ici dès leur ouverture.
							</p>
						</div>
					</Reveal>

					{upcomingRetreats.length > 0 ? (
						<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
							{upcomingRetreats.map((retreat, index) => (
								<Reveal
									key={retreat.slug}
									delay={index % 3 === 2 ? "lg" : index % 3 === 1 ? "md" : "sm"}
								>
									<RetreatCard retreat={retreat} />
								</Reveal>
							))}
						</div>
					) : (
						<Reveal delay="sm">
							<div className="mx-auto mt-14 max-w-3xl rounded-panel bg-surface p-8 text-center shadow-card sm:p-10">
								<GlobeAsiaAustraliaIcon
									aria-hidden="true"
									className="mx-auto size-10 text-mk-green"
								/>
								<h3 className="mt-6 text-2xl font-semibold text-foreground">
									Aucun séjour programmé pour le moment
								</h3>
								<p className="mt-4 text-base/7 text-muted">
									Les prochains voyages, cures et retraites seront publiés ici.
									Vous pouvez contacter Maison Kailash pour être informé des
									projets à venir.
								</p>
								<div className="mt-8">
									<NewsletterSignup
										id="retreats-newsletter"
										title="Inscription à la newsletter"
										description="Inscrivez-vous à la newsletter Maison Kailash pour recevoir les annonces des prochains voyages, cures et retraites bien-être."
									/>
								</div>
							</div>
						</Reveal>
					)}
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
						<Reveal>
							<div>
								<p className="eyebrow">Ce que l&apos;on cultive</p>
								<h2 className="heading-section mt-2 text-foreground">
									Un voyage intérieur autant qu&apos;extérieur
								</h2>
								<div className="mt-10 grid gap-8">
									{retreatThemes.map((theme) => (
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
							<div className="grid grid-cols-2 gap-4 sm:gap-6">
								<div className="space-y-4 sm:space-y-6">
									<div className="media-frame">
										<Image
											src={sejourMaurice7Image}
											alt="Séjour bien-être dans l'océan Indien"
											sizes="(min-width: 1024px) 19vw, 50vw"
											className="aspect-3/2 w-full object-cover"
										/>
									</div>
									<div className="media-frame">
										<Image
											src={sejourRodrigues2Image}
											alt="Paysage de séjour à Rodrigues"
											sizes="(min-width: 1024px) 19vw, 50vw"
											className="aspect-4/3 w-full object-cover"
										/>
									</div>
								</div>
								<div className="space-y-4 pt-10 sm:space-y-6">
									<div className="media-frame">
										<Image
											src={sejourInde5Image}
											alt="Immersion en Inde"
											sizes="(min-width: 1024px) 19vw, 50vw"
											className="aspect-4/3 w-full object-cover"
										/>
									</div>
									<div className="media-frame">
										<Image
											src={sejourMaurice4Image}
											alt="Nature et voyage de ressourcement"
											sizes="(min-width: 1024px) 19vw, 50vw"
											className="aspect-3/2 w-full object-cover"
										/>
									</div>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Archives</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Séjours passés
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Certains séjours restent visibles pour conserver la mémoire
									des voyages organisés ou relayés par Maison Kailash.
								</p>
							</div>
						</Reveal>

						<div className="grid gap-8">
							{archivedRetreats.map((retreat) => (
								<Reveal key={retreat.slug} delay="sm">
									<RetreatCard retreat={retreat} variant="horizontal" />
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

function getStatusLabel(status: RetreatStatus) {
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

function RetreatCard({
	retreat,
	variant = "default",
}: {
	retreat: Retreat
	variant?: "default" | "horizontal"
}) {
	const content = (
		<>
			<div
				className={
					variant === "horizontal"
						? "media-frame relative min-h-72 shadow-none lg:min-h-0 lg:w-80 lg:shrink-0 lg:self-stretch"
						: "media-frame shadow-none"
				}
			>
				{variant === "horizontal" ? (
					<Image
						src={retreat.image}
						alt={retreat.imageAlt}
						fill
						sizes="(min-width: 1024px) 20rem, 100vw"
						className="object-cover object-center"
					/>
				) : (
					<Image
						src={retreat.image}
						alt={retreat.imageAlt}
						sizes="(min-width: 1024px) 33vw, 100vw"
						className="aspect-3/2 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
					/>
				)}
			</div>

			<div
				className={variant === "horizontal" ? "flex grow flex-col p-6" : "p-6"}
			>
				<div className="flex flex-wrap items-center gap-3">
					<span className="rounded-full bg-mk-saffron-soft px-3 py-1 text-xs font-semibold text-mk-saffron-text">
						{getStatusLabel(retreat.status)}
					</span>
					<span className="text-xs font-semibold tracking-[0.12em] text-mk-green uppercase">
						{retreat.destination}
					</span>
				</div>

				<h3 className="mt-4 text-2xl font-semibold text-foreground group-hover:text-mk-green">
					{retreat.title}
				</h3>
				<p className="mt-4 text-base/7 text-muted">
					{retreat.shortDescription}
				</p>

				<dl className="mt-6 space-y-3 text-sm/6 text-muted">
					<div className="flex gap-3">
						<ArchiveBoxIcon
							aria-hidden="true"
							className="mt-0.5 size-5 shrink-0 text-mk-green"
						/>
						<div>
							<dt className="sr-only">Statut</dt>
							<dd>{retreat.dateLabel}</dd>
						</div>
					</div>
					<div className="flex gap-3">
						<MapPinIcon
							aria-hidden="true"
							className="mt-0.5 size-5 shrink-0 text-mk-green"
						/>
						<div>
							<dt className="sr-only">Destination</dt>
							<dd>{retreat.destination}</dd>
						</div>
					</div>
				</dl>

				{retreat.href ? (
					<p className="mt-6 text-sm font-semibold text-mk-green group-hover:text-mk-saffron-text">
						Consulter l&apos;archive
					</p>
				) : null}
			</div>
		</>
	)

	if (!retreat.href) {
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
				href={retreat.href}
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
