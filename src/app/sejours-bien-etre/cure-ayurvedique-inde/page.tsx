import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	ArchiveBoxIcon,
	CalendarDaysIcon,
	CheckCircleIcon,
	CurrencyEuroIcon,
	GlobeAsiaAustraliaIcon,
	MapPinIcon,
	SparklesIcon,
	XCircleIcon,
} from "@heroicons/react/24/outline"

import NewsletterSignup from "@/components/NewsletterSignup"
import Reveal from "@/components/Reveal"
import sejourIndeImage from "@/images/sejour-inde.jpeg"
import sejourInde2Image from "@/images/sejour-inde2.jpeg"
import sejourInde3Image from "@/images/sejour-inde3.jpeg"
import sejourInde5Image from "@/images/sejour-inde5.jpeg"

export const metadata: Metadata = {
	title: "Cure Panchakarma en Inde du Sud",
	description:
		"Archive Maison Kailash : cure Panchakarma en Inde du Sud, au cœur du Tamil Nadu, avec yoga, méditation, soins ayurvédiques et excursions.",
	alternates: {
		canonical: "/sejours-bien-etre/cure-ayurvedique-inde/",
	},
}

const details = [
	{
		label: "Statut",
		value: "Archive 2024",
		icon: ArchiveBoxIcon,
	},
	{
		label: "Dates",
		value: "Du 19 juillet au 3 août 2024",
		icon: CalendarDaysIcon,
	},
	{
		label: "Durée",
		value: "14 jours, dont 10 jours de cure Panchakarma",
		icon: SparklesIcon,
	},
	{
		label: "Destination",
		value: "Tamil Nadu, Inde du Sud",
		icon: MapPinIcon,
	},
	{
		label: "Tarif",
		value: "3180 € par personne, tout compris",
		icon: CurrencyEuroIcon,
	},
	{
		label: "Statut initial",
		value: "Séjour complet",
		icon: GlobeAsiaAustraliaIcon,
	},
]

const included = [
	"Vol aller-retour et assurance",
	"Transferts depuis et vers l'aéroport de Chennai",
	"Hébergement en chambre Deluxe individuelle",
	"Pension complète avec repas sattviques végétariens",
	"Cure Panchakarma complète de 10 jours encadrée par un médecin ayurvédique",
	"Cours de yoga, sessions de méditation, visites, pujas et accompagnement de l'équipe Kailash",
]

const notIncluded = [
	"Frais de visa pour l'Inde",
	"Éventuelles sorties ou visites hors programme",
]

export default function CureAyurvediqueIndePage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Archive séjour</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Cure Panchakarma en Inde du Sud
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Une immersion ayurvédique au cœur du Tamil Nadu, pensée comme
									un temps de repos, de soins traditionnels, de yoga, de
									méditation et de reconnexion à soi.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Archive 2024
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Inde du Sud
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Panchakarma
									</span>
								</div>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link
										href="/sejours-bien-etre/"
										className="btn-primary px-5 py-3 text-sm"
									>
										Retour aux séjours
									</Link>
									<Link
										href="#newsletter"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Recevoir les prochains séjours
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={sejourInde3Image}
									alt="Cure ayurvédique Panchakarma en Inde du Sud"
									priority
									sizes="(min-width: 1024px) 48vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<Reveal className="order-2 lg:order-1">
							<div className="grid grid-cols-2 gap-4 sm:gap-6">
								<div className="space-y-4 sm:space-y-6">
									<div className="media-frame">
										<Image
											src={sejourIndeImage}
											alt="Séjour bien-être en Inde du Sud"
											sizes="(min-width: 1024px) 20vw, 50vw"
											className="aspect-4/3 w-full object-cover"
										/>
									</div>
									<div className="media-frame">
										<Image
											src={sejourInde5Image}
											alt="Immersion ayurvédique en Inde"
											sizes="(min-width: 1024px) 20vw, 50vw"
											className="aspect-4/3 w-full object-cover"
										/>
									</div>
								</div>
								<div className="space-y-4 pt-10 sm:space-y-6">
									<div className="media-frame">
										<Image
											src={sejourInde2Image}
											alt="Voyage de ressourcement au Tamil Nadu"
											sizes="(min-width: 1024px) 20vw, 50vw"
											className="aspect-3/4 w-full object-cover"
										/>
									</div>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Le séjour</p>
								<h2 className="heading-section mt-2 text-mk-green">
									14 jours au cœur du Tamil Nadu
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Ce séjour proposait une cure ayurvédique authentique au pied
										du Mont Sacré Arunachala, dans un environnement paisible et
										propice au ressourcement.
									</p>
									<p>
										La cure Panchakarma de 10 jours comprenait une consultation
										initiale avec un médecin, un plan de traitement personnalisé,
										des remèdes à base de plantes ainsi que des traitements et
										thérapies quotidiens.
									</p>
									<p>
										L’immersion associait soins ayurvédiques, yoga, méditation,
										promenades dans la nature, cérémonies puja et excursions
										guidées.
									</p>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Informations</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Détails de l’archive
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Cette page conserve la mémoire du séjour. Il n’est plus ouvert
									à l’inscription.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="grid gap-5 sm:grid-cols-2">
								{details.map((detail) => (
									<div key={detail.label} className="content-card">
										<detail.icon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-lg font-semibold text-foreground">
											{detail.label}
										</h3>
										<p className="mt-3 text-base/7 text-muted">
											{detail.value}
										</p>
									</div>
								))}
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Tarif</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Ce que comprenait le séjour
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Le tarif annoncé était de 3180 € par personne, sous réserve du
									coût définitif des vols.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-8">
								<div className="content-card">
									<h3 className="text-xl font-semibold text-foreground">
										Le tarif comprenait
									</h3>
									<ul className="mt-6 space-y-4">
										{included.map((item) => (
											<li key={item} className="flex gap-3 text-base/7 text-muted">
												<CheckCircleIcon
													aria-hidden="true"
													className="mt-1 size-5 shrink-0 text-mk-green"
												/>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="content-card">
									<h3 className="text-xl font-semibold text-foreground">
										Le tarif ne comprenait pas
									</h3>
									<ul className="mt-6 space-y-4">
										{notIncluded.map((item) => (
											<li key={item} className="flex gap-3 text-base/7 text-muted">
												<XCircleIcon
													aria-hidden="true"
													className="mt-1 size-5 shrink-0 text-mk-saffron-text"
												/>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Expériences</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Pratiques, cérémonies et excursions
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Le programme incluait des cérémonies de feu et puja, une visite
									guidée du temple Arunachalesvara du 9e siècle, l’exploration
									des grottes du Mont Arunachala et une promenade guidée autour
									de la montagne.
								</p>
								<p>
									Les participants étaient hébergés en chambre Deluxe
									individuelle, avec trois repas sattviques végétariens par jour,
									thés, eaux filtrées et jus frais.
								</p>
								<p>
									L’intention du séjour était d’ouvrir un temps rare de
									ressourcement, de revitalisation, de connexion à soi et à la
									spiritualité de l’Inde.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section id="newsletter" className="section-padding bg-surface">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-3xl rounded-panel bg-background p-8 text-center shadow-card sm:p-10">
							<GlobeAsiaAustraliaIcon
								aria-hidden="true"
								className="mx-auto size-10 text-mk-green"
							/>
							<h2 className="mt-6 text-2xl font-semibold text-foreground">
								Recevoir les prochains séjours
							</h2>
							<p className="mt-4 text-base/7 text-muted">
								Inscrivez-vous à la newsletter Maison Kailash pour recevoir les
								annonces des prochains voyages, cures et retraites bien-être.
							</p>
							<div className="mt-8">
								<NewsletterSignup
									id="cure-ayurvedique-inde-newsletter"
									title="Inscription à la newsletter"
									description="Recevez les prochaines dates de séjours et retraites Maison Kailash."
								/>
							</div>
						</div>
					</Reveal>
				</div>
			</section>
		</main>
	)
}