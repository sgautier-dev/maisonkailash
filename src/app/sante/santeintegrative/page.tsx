import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	CheckCircleIcon,
	ClockIcon,
	HeartIcon,
	PhoneIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import integrativeHealthImage from "@/images/sante-integrative-kailash.png"
import integrativeHealthDetailImage from "@/images/sante-integrative-kailash2.jpg"

export const metadata: Metadata = {
	title: "Santé intégrative à La Réunion",
	description:
		"Santé intégrative à Maison Kailash, à l'Éperon : une approche globale pour relier corps, énergie, hygiène de vie, émotions et équilibre personnel.",
	alternates: {
		canonical: "/sante/santeintegrative/",
	},
}

const bookingPhoneHref = "tel:+262692724679"
const bookingPhoneLabel = "0692 72 46 79"

const benefits = [
	"Mieux comprendre le fonctionnement global de sa santé",
	"Retrouver son poids santé selon sa constitution",
	"Soutenir la sphère digestive et le microbiote intestinal",
	"Accompagner l'équilibre hormonal",
	"Travailler autour de la symptomatologie auto-immune",
	"Vieillir en meilleure santé",
]

export default function SanteIntegrativePage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Santé holistique</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Santé intégrative
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Une approche mêlant la sagesse de médecines ancestrales et les
									avancées de la médecine moderne pour comprendre l’humain dans
									son ensemble.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Approche globale
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Consultation 1h30
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Sur rendez-vous
									</span>
								</div>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<a
										href={bookingPhoneHref}
										className="btn-primary px-5 py-3 text-sm"
									>
										Réserver avec Nicolas
									</a>
									<Link
										href="#tarifs"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Voir les tarifs
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={integrativeHealthImage}
									alt="Santé intégrative à Maison Kailash"
									priority
									sizes="(min-width: 1024px) 48vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section id="approche" className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<Reveal className="order-2 lg:order-1">
							<div className="media-frame">
								<Image
									src={integrativeHealthDetailImage}
									alt="Accompagnement en santé intégrative"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une vision intégrative de la santé humaine
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										La santé intégrative est une approche simple, adaptée et
										globale de la santé humaine. Elle cherche à relier les
										émotions, les habitudes de vie, le terrain, les symptômes et
										les ressources de la personne.
									</p>
									<p>
										Elle s’adresse aux personnes qui souhaitent comprendre le
										fonctionnement global de leur santé et devenir plus
										autonomes dans leur propre équilibre.
									</p>
									<p>
										Elle ne remplace pas un suivi médical, mais peut accompagner
										une démarche de prévention, de clarification et de
										mieux-être.
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
								<p className="eyebrow">Pourquoi consulter ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un espace pour comprendre et agir sur son équilibre
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									L&apos;accompagnement peut aider à faire le point sur le poids
									santé, la digestion, le microbiote intestinal, la thyroïde,
									les glandes surrénales, l&apos;équilibre hormonal ou encore la
									symptomatologie auto-immune.
								</p>
								<p>
									L&apos;intention est d&apos;identifier les priorités du moment
									et de proposer une lecture globale de la situation, en tenant
									compte du corps, de l&apos;histoire, du mode de vie et des
									ressources disponibles.
								</p>
								<p>
									L&apos;approche est particulièrement adaptée aux personnes qui
									ressentent le besoin d&apos;être écoutées autrement et de
									mieux comprendre ce qui peut soutenir leur santé dans la
									durée.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Axes de travail</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Une approche pour mieux écouter et soutenir le corps
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

			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
						<Reveal>
							<div>
								<p className="eyebrow">Parcours</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une approche issue du soin, du yoga et des médecines
									traditionnelles
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Nicolas a exercé dans différents services hospitaliers avant
									d&apos;orienter son parcours vers une lecture plus globale de
									l&apos;humain. Son approche relie l&apos;expérience du soin,
									l&apos;Ayurveda, le Reiki, le yoga, la respiration et la santé
									intégrative.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="grid gap-5">
								<div className="content-card">
									<HeartIcon
										aria-hidden="true"
										className="size-7 text-mk-green"
									/>
									<h3 className="mt-5 text-xl font-semibold text-foreground">
										Écoute
									</h3>
									<p className="mt-3 text-base/7 text-muted">
										Un temps pour comprendre la personne dans son ensemble,
										au-delà du symptôme isolé.
									</p>
								</div>
								<div className="content-card">
									<SparklesIcon
										aria-hidden="true"
										className="size-7 text-mk-green"
									/>
									<h3 className="mt-5 text-xl font-semibold text-foreground">
										Autonomie
									</h3>
									<p className="mt-3 text-base/7 text-muted">
										Une démarche pour redevenir acteur de sa santé et clarifier
										les habitudes qui soutiennent l&apos;équilibre.
									</p>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section id="tarifs" className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Tarifs & réservation</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Consultation unique ou accompagnement
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									La santé intégrative est proposée sur rendez-vous avec
									Nicolas.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="grid gap-5">
								<div className="grid gap-5 sm:grid-cols-2">
									<div className="content-card">
										<ClockIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-xl font-semibold text-foreground">
											Consultation unique
										</h3>
										<p className="mt-2 text-sm/6 text-muted">1h30</p>
										<p className="mt-3 text-3xl font-semibold text-mk-green">
											110 €
										</p>
									</div>

									<div className="content-card">
										<SparklesIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-xl font-semibold text-foreground">
											Accompagnement
										</h3>
										<p className="mt-2 text-sm/6 text-muted">
											4 séances : 1h30, 1h, 1h, 1h
										</p>
										<p className="mt-3 text-3xl font-semibold text-mk-green">
											270 €
										</p>
									</div>
								</div>

								<div className="content-card flex flex-col gap-5 bg-mk-saffron-soft sm:flex-row sm:items-center sm:justify-between">
									<div className="flex gap-4">
										<PhoneIcon
											aria-hidden="true"
											className="mt-1 size-6 shrink-0 text-mk-saffron-text"
										/>
										<div>
											<h3 className="text-lg font-semibold text-mk-saffron-text">
												Réserver avec Nicolas
											</h3>
											<p className="mt-1 text-base/7 text-mk-saffron-text/80">
												Contactez Nicolas pour choisir le format le plus adapté.
											</p>
										</div>
									</div>

									<a
										href={bookingPhoneHref}
										className="btn-primary shrink-0 px-5 py-3 text-sm"
									>
										{bookingPhoneLabel}
									</a>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<LocationCta />
		</main>
	)
}
