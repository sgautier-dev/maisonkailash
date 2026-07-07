import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	BuildingOffice2Icon,
	CalendarDaysIcon,
	CheckCircleIcon,
	ClockIcon,
	HeartIcon,
	PhoneIcon,
	SparklesIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline"

import Reveal from "@/components/Reveal"
import massageAssisHeroImage from "@/images/massage-assis-kailash.jpg"
import massageAssisCtaImage from "@/images/massage-assis-kailash2.jpg"
import massageAssisDetailImage from "@/images/massage-assis-kailash3.jpg"

export const metadata: Metadata = {
	title: "Massage assis et bien-être en entreprise à La Réunion",
	description:
		"Maison Kailash intervient en entreprise, collectivité, événement et retraite bien-être à La Réunion avec des massages assis et pauses bien-être sur devis.",
	alternates: {
		canonical: "/entreprises/",
	},
}

const benefits = [
	"Réduire les tensions musculaires",
	"Soulager la fatigue corporelle et oculaire",
	"Augmenter la résistance au stress",
	"Soutenir l'énergie, la créativité et la concentration",
	"Activer la circulation et le système nerveux",
	"Améliorer la récupération et la qualité du sommeil",
]

const audiences = [
	{
		name: "Entreprises",
		description:
			"Des interventions simples à organiser pour soutenir la qualité de vie au travail.",
		icon: BuildingOffice2Icon,
	},
	{
		name: "Collectivités",
		description:
			"Des pauses bien-être adaptées aux équipes, agents et journées de prévention.",
		icon: UserGroupIcon,
	},
	{
		name: "Retraites bien-être",
		description:
			"Un format court et complémentaire pour enrichir un programme de ressourcement.",
		icon: HeartIcon,
	},
	{
		name: "Événements",
		description:
			"Un espace de récupération apprécié lors de salons, séminaires et journées QVT.",
		icon: CalendarDaysIcon,
	},
]

const steps = [
	"Échange sur vos besoins, votre public et le contexte de l'intervention.",
	"Choix du format : durée, nombre de participants, rythme et espace disponible.",
	"Installation sur site avec chaise ergonomique et organisation fluide des passages.",
	"Séances individuelles courtes, habillées, pensées pour relâcher rapidement les tensions.",
]

export default function EntreprisesPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Bien-être au travail</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Massage assis et pauses bien-être en entreprise
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Maison Kailash intervient en entreprise, collectivité,
									événement ou retraite bien-être pour proposer des temps de
									récupération simples, efficaces et faciles à intégrer.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Sur devis
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Format court
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Sur site
									</span>
								</div>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link
										href="/accueil/contact-acces/"
										className="btn-primary px-5 py-3 text-sm"
									>
										Demander une intervention
									</Link>
									<Link
										href="#bienfaits"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Voir les bienfaits
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={massageAssisHeroImage}
									alt="Massage assis en entreprise avec Maison Kailash"
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
						<Reveal>
							<div className="media-frame">
								<Image
									src={massageAssisDetailImage}
									alt="Séance de massage assis sur chaise ergonomique"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="max-w-2xl">
								<p className="eyebrow">Le massage assis</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une solution courte, habillée et facile à mettre en place
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Issu de la médecine traditionnelle japonaise
										d&apos;acupression, le massage assis se pratique habillé sur
										une chaise ergonomique.
									</p>
									<p>
										En quinze minutes environ, il aide à débloquer les tensions
										du dos, de la nuque, des épaules et du ventre, souvent liées
										au stress physique ou émotionnel.
									</p>
									<p>
										C&apos;est une solution concrète, économique et simple à
										intégrer dans une démarche de prévention santé et de
										bien-être au travail.
									</p>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section id="bienfaits" className="section-padding bg-background">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Les bienfaits</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Un temps de récupération utile pour les équipes
							</h2>
						</div>
					</Reveal>

					<div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{benefits.map((benefit, index) => (
							<Reveal
								key={benefit}
								delay={index > 3 ? "lg" : index > 1 ? "md" : "sm"}
							>
								<div className="content-card flex h-full gap-4">
									<CheckCircleIcon
										aria-hidden="true"
										className="mt-1 size-6 shrink-0 text-mk-green"
									/>
									<p className="text-base/7 font-semibold text-foreground">
										{benefit}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<Reveal>
						<div className="max-w-2xl">
							<p className="eyebrow">Pour qui ?</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Des formats adaptables selon votre contexte
							</h2>
						</div>
					</Reveal>

					<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{audiences.map((audience, index) => (
							<Reveal
								key={audience.name}
								delay={index > 2 ? "lg" : index > 0 ? "md" : "sm"}
							>
								<div className="content-card h-full">
									<audience.icon
										aria-hidden="true"
										className="size-7 text-mk-green"
									/>
									<h3 className="mt-5 text-lg font-semibold text-foreground">
										{audience.name}
									</h3>
									<p className="mt-3 text-sm/6 text-muted">
										{audience.description}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Organisation</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une intervention simple à organiser
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Nous définissons ensemble un format adapté à vos objectifs, à
									votre planning et à l&apos;espace disponible sur place.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<ol className="space-y-5">
								{steps.map((step, index) => (
									<li key={step} className="flex gap-5">
										<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-mk-green text-sm font-semibold text-white">
											{index + 1}
										</div>
										<p className="pt-1.5 text-base/7 text-muted">{step}</p>
									</li>
								))}
							</ol>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<SparklesIcon
									aria-hidden="true"
									className="size-8 text-mk-green"
								/>
								<p className="eyebrow mt-5">Aller plus loin</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un programme bien-être plus complet si besoin
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le massage assis peut aussi s&apos;intégrer dans une
										démarche plus large de bien-être au travail.
									</p>
									<p>
										Selon vos besoins, l&apos;équipe Maison Kailash peut
										proposer des conférences santé, cours de yoga, méditation,
										coaching individuel ou actions personnalisées de prévention.
									</p>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="content-card">
								<ClockIcon
									aria-hidden="true"
									className="size-8 text-mk-green"
								/>
								<h3 className="mt-5 text-xl font-semibold text-foreground">
									Format indicatif
								</h3>
								<p className="mt-4 text-base/7 text-muted">
									Les séances se construisent sur devis selon la durée
									d&apos;intervention, le nombre de participants et le lieu.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="bg-mk-green">
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<PhoneIcon
									aria-hidden="true"
									className="size-8 text-white/80"
								/>
								<h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
									Parlez-nous de votre besoin
								</h2>
								<p className="mt-6 text-lg/8 text-white/80">
									Entreprise, collectivité, événement ou retraite bien-être :
									nous vous répondons avec une proposition adaptée, sur devis.
								</p>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
									<a
										href="tel:+262692683073"
										className="inline-flex items-center justify-center gap-2 rounded-pill bg-white px-5 py-3 text-sm font-semibold text-mk-green shadow-card hover:bg-mk-saffron-soft hover:text-mk-saffron-text"
									>
										<PhoneIcon aria-hidden="true" className="size-4" />
										0692 68 30 73
									</a>
									<Link
										href="/accueil/contact-acces/"
										className="inline-flex items-center justify-center rounded-pill border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
									>
										Contact & plan d&apos;accès
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="overflow-hidden rounded-panel bg-white/10 shadow-soft ring-1 ring-white/20">
								<Image
									src={massageAssisCtaImage}
									alt="Massage assis lors d'une intervention Maison Kailash"
									sizes="(min-width: 1024px) 34vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>
		</main>
	)
}
