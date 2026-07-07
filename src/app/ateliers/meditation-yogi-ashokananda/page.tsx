import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	CalendarDaysIcon,
	ClockIcon,
	CurrencyEuroIcon,
	LanguageIcon,
	MapPinIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline"

import NewsletterSignup from "@/components/NewsletterSignup"
import Reveal from "@/components/Reveal"
import yogiDetailsImage from "@/images/yogi-ashokananda-kailash2.jpg"
import yogiAshokanandaImage from "@/images/yogi-ashokananda-kailash.jpg"

export const metadata: Metadata = {
	title: "Méditation avec Yogi Ashokananda à La Réunion",
	description:
		"Archive Maison Kailash : méditation avec Yogi Ashokananda autour des cinq éléments, du souffle, des chakras et de la présence consciente.",
	alternates: {
		canonical: "/ateliers/meditation-yogi-ashokananda/",
	},
}

const details = [
	{
		label: "Date",
		value: "Jeudi 28 mai 2026",
		icon: CalendarDaysIcon,
	},
	{
		label: "Horaire",
		value: "18h00 - 19h30",
		icon: ClockIcon,
	},
	{
		label: "Lieu",
		value: "Maison Kailash, Éperon - Saint-Gilles les Hauts",
		icon: MapPinIcon,
	},
	{
		label: "Tarif",
		value: "35 €",
		icon: CurrencyEuroIcon,
	},
	{
		label: "Niveau",
		value: "Tous niveaux",
		icon: SparklesIcon,
	},
	{
		label: "Langue",
		value: "Enseignement en anglais, traduit par l'équipe Maison Kailash",
		icon: LanguageIcon,
	},
]

const practiceHighlights = [
	"Apaiser le système nerveux",
	"Clarifier l'esprit",
	"Cultiver une présence stable et réceptive",
	"Renforcer l'ancrage et la stabilité",
	"Harmoniser l'énergie à travers le souffle et la méditation",
	"Approfondir la connexion au corps subtil",
]

export default function MeditationYogiAshokanandaPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Archive atelier</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Méditation avec Yogi Ashokananda
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Éveil par les cinq éléments : une pratique autour de
									l’ancrage, du souffle, des chakras et de la présence
									consciente.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Archive
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Méditation
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Yogi Ashokananda
									</span>
								</div>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link
										href="/ateliers/"
										className="btn-primary px-5 py-3 text-sm"
									>
										Retour aux ateliers
									</Link>
									<Link
										href="#newsletter"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Recevoir les prochains ateliers
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="mx-auto w-full max-w-sm overflow-hidden rounded-panel bg-surface shadow-soft ring-1 ring-mk-green/10">
								<Image
									src={yogiAshokanandaImage}
									alt="Yogi Ashokananda"
									priority
									sizes="(min-width: 1024px) 24rem, 80vw"
									className="aspect-3/4 w-full object-cover"
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
							<div className="media-frame">
								<Image
									src={yogiDetailsImage}
									alt="Yogi Ashokananda"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Pratique</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une relaxation comme activation consciente
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Ce cours magistral associait relaxations guidées,
										méditation, respiration, kriyas et bandhas dans une pratique
										à la fois dynamique et profondément réparatrice.
									</p>
									<p>
										L’intention était d’accueillir l’expérience telle qu’elle
										est, sans chercher à atteindre un état particulier, en
										apprenant à relâcher sans s’éteindre et à observer sans
										résister.
									</p>
									<p>
										Le travail avec les éléments Terre, Eau et Feu soutenait
										l’équilibrage des énergies, notamment au niveau des chakras
										racine, sacré et du plexus solaire.
									</p>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Intentions</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Un espace de présence, d’ancrage et d’intégration
							</h2>
						</div>
					</Reveal>

					<div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{practiceHighlights.map((highlight, index) => (
							<Reveal
								key={highlight}
								delay={index > 3 ? "lg" : index > 1 ? "md" : "sm"}
							>
								<div className="content-card flex h-full gap-4">
									<SparklesIcon
										aria-hidden="true"
										className="mt-1 size-6 shrink-0 text-mk-green"
									/>
									<p className="text-base/7 font-semibold text-foreground">
										{highlight}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Informations</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Détails de l’archive
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Cette page conserve la mémoire de l’événement. L’atelier n’est
									plus ouvert à l’inscription.
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

			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">À propos</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Yogi Ashokananda
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Figure internationale du yoga et de la méditation, Yogi
									Ashokananda enseigne depuis plus de 35 ans et partage une
									transmission profondément enracinée dans la tradition
									indienne.
								</p>
								<p>
									Fondateur du Himalayan Hatha Yoga et du Prana Kriya Yoga, il
									transmet une pratique puissante et bienveillante, agissant sur
									l’ensemble du corps et du système énergétique.
								</p>
								<p>
									Son enseignement relie tradition, simplicité et authenticité,
									avec une attention particulière portée au service, à
									l’éducation, à la santé et au bien-être social.
								</p>

								<div className="pt-4">
									<a
										href="https://www.youtube.com/@yogiashokananda"
										target="_blank"
										rel="noreferrer"
										className="inline-flex text-sm font-semibold text-mk-green hover:text-mk-saffron-text"
									>
										Voir la chaîne YouTube de Yogi Ashokananda
									</a>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section id="newsletter" className="section-padding bg-surface">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-3xl rounded-panel bg-background p-8 text-center shadow-card sm:p-10">
							<CalendarDaysIcon
								aria-hidden="true"
								className="mx-auto size-10 text-mk-green"
							/>
							<h2 className="mt-6 text-2xl font-semibold text-foreground">
								Recevoir les prochains ateliers
							</h2>
							<p className="mt-4 text-base/7 text-muted">
								Inscrivez-vous à la newsletter Maison Kailash pour recevoir les
								annonces des prochains ateliers, stages et conférences.
							</p>
							<div className="mt-8">
								<NewsletterSignup
									id="meditation-yogi-ashokananda-newsletter"
									title="Inscription à la newsletter"
									description="Recevez les prochaines dates d’ateliers et de stages Maison Kailash."
								/>
							</div>
						</div>
					</Reveal>
				</div>
			</section>
		</main>
	)
}
