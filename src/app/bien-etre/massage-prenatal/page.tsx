import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	CheckCircleIcon,
	ClockIcon,
	PhoneIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline"

import Reveal from "@/components/Reveal"
import prenatalImage from "@/images/massage-prenatal-kailash.jpg"
import prenatalDetailImage from "@/images/massage-prenatal-kailash2.jpg"

export const metadata: Metadata = {
	title: "Massage prénatal à La Réunion",
	description:
		"Massage prénatal à La Réunion : soin doux et enveloppant pour accompagner la future maman à partir du 4e mois de grossesse.",
	alternates: {
		canonical: "/bien-etre/massage-prenatal/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Offrir une pause de détente à la future maman",
	"Soulager les tensions musculaires et les douleurs sciatiques",
	"Favoriser le sommeil et la récupération",
	"Accompagner la préparation à l'accouchement",
	"Détendre les articulations, le bas du dos et le bassin",
	"Soutenir le lien avec le bébé dans un espace sécurisant",
]

export default function MassagePrenatalPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Massage grossesse</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Massage prénatal
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un accompagnement doux et adapté pour aider la future maman à
									se détendre, soulager les inconforts de la grossesse et se
									connecter à son corps et à son bébé.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Dès le 4e mois
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										1h10 ou 1h30
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										St Leu
									</span>
								</div>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<a
										href={bookingPhoneHref}
										className="btn-primary px-5 py-3 text-sm"
									>
										Réserver ce massage
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
									src={prenatalImage}
									alt="Massage prénatal"
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
							<div className="media-frame">
								<Image
									src={prenatalDetailImage}
									alt="Soin prénatal doux pour future maman"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un massage spécialement adapté à la grossesse
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le massage prénatal est conçu pour accompagner les futures
										mamans avec douceur et précaution pendant une période de
										grands changements physiques, émotionnels et intérieurs.
									</p>
									<p>
										Le soin porte une attention particulière au confort de la
										future maman, avec des postures supportées, des huiles
										adaptées et un toucher doux, enveloppant et sécurisant.
									</p>
									<p>
										Il est possible à partir de la fin du premier trimestre,
										c’est-à-dire au début du 4e mois de grossesse, après un
										temps d’échange préalable.
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
								<p className="eyebrow">Déroulement</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un soin doux, soutenant et attentif
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									La séance commence par un entretien préalable afin d’adapter
									le massage à votre état du moment, à votre confort et aux
									besoins spécifiques liés à la grossesse.
								</p>
								<p>
									Le massage se pratique à l’huile, dans des postures soutenues
									par des coussins, afin de permettre au corps de se déposer
									sans contrainte.
								</p>
								<p>
									Un espace d’échange peut être proposé après le soin pour
									accueillir les ressentis et prolonger ce moment de détente.
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
							<p className="eyebrow">Bienfaits</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Un temps de détente pour la maman et le bébé
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

			<section id="tarifs" className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Tarifs & réservation</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Deux formats selon votre besoin
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Le massage prénatal est proposé sur rendez-vous avec Elodie, à
									St Leu.
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
											1 heure 10
										</h3>
										<p className="mt-3 text-3xl font-semibold text-mk-green">
											90 €
										</p>
									</div>
									<div className="content-card">
										<SparklesIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-xl font-semibold text-foreground">
											1 heure 30
										</h3>
										<p className="mt-3 text-3xl font-semibold text-mk-green">
											110 €
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
												Réserver ce massage avec Elodie
											</h3>
											<p className="mt-1 text-base/7 text-mk-saffron-text/80">
												Contactez Elodie pour réserver votre séance à St Leu.
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
		</main>
	)
}
