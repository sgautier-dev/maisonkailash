import type { ComponentType, SVGProps } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	CurrencyEuroIcon,
	GlobeAsiaAustraliaIcon,
	HeartIcon,
	MapPinIcon,
	SparklesIcon,
	SunIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline"

import NewsletterSignup from "@/components/NewsletterSignup"
import Reveal from "@/components/Reveal"
import { getEventShortDateLabel } from "@/lib/eventDate"
import sejourIndeImage from "@/images/sejour-inde.jpeg"
import sejourInde2Image from "@/images/sejour-inde2.jpeg"
import sejourInde5Image from "@/images/sejour-inde5.jpeg"
import sejourMaurice3Image from "@/images/sejour-maurice3.jpeg"
import sejourMaurice4Image from "@/images/sejour-maurice4.jpeg"
import sejourMaurice5Image from "@/images/sejour-maurice5.jpeg"
import sejourMaurice7Image from "@/images/sejour-maurice7.jpeg"
import sejourRodriguesImage from "@/images/sejour-rodrigues.jpeg"
import sejourRodrigues2Image from "@/images/sejour-rodrigues2.jpeg"
import { getRetreats, type Retreat } from "@/sanity/queries"
import { urlForImage } from "@/sanity/image"

export const metadata: Metadata = {
	title: "Séjours et retraites bien-être",
	description:
		"Découvrez les séjours bien-être proposés ou accueillis par Maison Kailash : cures ayurvédiques, retraites, voyages de ressourcement et immersions autour du yoga.",
	alternates: {
		canonical: "/sejours-bien-etre/",
	},
}

type RetreatTheme = {
	name: string
	description: string
	icon: ComponentType<SVGProps<SVGSVGElement>>
}

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

export default async function SejoursBienEtrePage() {
	const retreats = await getRetreats()

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
										href="#sejours"
										className="btn-primary px-5 py-3 text-sm"
									>
										Voir les séjours
									</Link>
									<Link
										href="#sejours-newsletter"
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

			<section id="sejours" className="section-padding bg-background">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Agenda</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Séjours et retraites
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Les séjours ouverts, complets ou passés sont regroupés ici pour
								garder une vision claire des propositions Maison Kailash.
							</p>
						</div>
					</Reveal>

					{retreats.length > 0 ? (
						<div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
							{retreats.map((retreat, index) => (
								<Reveal
									key={retreat._id}
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
									Inscrivez-vous à la newsletter pour recevoir les annonces.
								</p>
								<div className="mt-8">
									<NewsletterSignup
										id="sejours-newsletter"
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
		</main>
	)
}

function RetreatCard({ retreat }: { retreat: Retreat }) {
	const imageSrc = retreat.mainImage
		? urlForImage(retreat.mainImage).width(900).auto("format").url()
		: sejourIndeImage

	const imageAlt = retreat.mainImage?.alt ?? retreat.title
	const dateLabel = getEventShortDateLabel(retreat)

	return (
		<article className="group h-full">
			<Link
				href={`/sejours-bien-etre/${retreat.slug}/`}
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

					{retreat.status === "past" || retreat.status === "full" ? (
						<span className="absolute left-0 top-5 rounded-r-full bg-mk-saffron px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-soft">
							{retreat.status === "past" ? "Archive" : "Complet"}
						</span>
					) : null}
				</div>

				<div className="flex flex-1 flex-col p-6">
					<div className="flex flex-wrap items-center gap-3">
						<span className="text-xs font-semibold tracking-[0.12em] text-mk-green uppercase">
							{retreat.destination}
						</span>

						{dateLabel ? (
							<span className="rounded-pill bg-mk-mint/40 px-3 py-1 text-xs font-semibold text-mk-green">
								{dateLabel}
							</span>
						) : null}
					</div>

					<h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-mk-green">
						{retreat.title}
					</h3>

					<p className="mt-4 line-clamp-3 text-sm/6 text-muted">
						{retreat.excerpt}
					</p>

					<dl className="mt-5 min-h-24 space-y-3 text-sm/6 text-muted">
						{retreat.teacher ? (
							<div className="flex gap-3">
								<UserGroupIcon
									aria-hidden="true"
									className="mt-0.5 size-5 shrink-0 text-mk-green"
								/>
								<div>
									<dt className="sr-only">Intervenant</dt>
									<dd>{retreat.teacher}</dd>
								</div>
							</div>
						) : null}

						{retreat.location ? (
							<div className="flex gap-3">
								<MapPinIcon
									aria-hidden="true"
									className="mt-0.5 size-5 shrink-0 text-mk-green"
								/>
								<div>
									<dt className="sr-only">Lieu</dt>
									<dd>{retreat.location}</dd>
								</div>
							</div>
						) : null}

						{retreat.price ? (
							<div className="flex gap-3">
								<CurrencyEuroIcon
									aria-hidden="true"
									className="mt-0.5 size-5 shrink-0 text-mk-green"
								/>
								<div>
									<dt className="sr-only">Tarif</dt>
									<dd>{retreat.price}</dd>
								</div>
							</div>
						) : null}

						{retreat.bookingText ? (
							<div className="flex gap-3">
								<SparklesIcon
									aria-hidden="true"
									className="mt-0.5 size-5 shrink-0 text-mk-green"
								/>
								<div className="min-w-0">
									<dt className="sr-only">Information</dt>
									<dd className="line-clamp-2">{retreat.bookingText}</dd>
								</div>
							</div>
						) : null}
					</dl>

					<p className="mt-auto pt-6 text-sm font-semibold text-mk-green group-hover:text-mk-saffron-text">
						{retreat.status === "past"
							? "Consulter l'archive"
							: "Voir les détails"}
					</p>
				</div>
			</Link>
		</article>
	)
}
