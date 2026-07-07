import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	CheckCircleIcon,
	ClockIcon,
	PhoneIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import pochonsImage from "@/images/massage-ayurvedique-pochons-kailash.jpg"
import pochonsDetailImage from "@/images/massage-ayurvedique-pochons-kailash2.jpg"

export const metadata: Metadata = {
	title: "Massage ayurvédique aux pochons à La Réunion",
	description:
		"Massage ayurvédique aux pochons à Maison Kailash, à l'Éperon : chaleur, plantes, huiles, relaxation profonde et détente du corps.",
	alternates: {
		canonical: "/bien-etre/massage-ayurvedique-aux-pochons/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Dynamiser la vitalité et les organes internes",
	"Apaiser le stress, l'anxiété et la fatigue",
	"Soulager les tensions et inconforts articulaires",
	"Soutenir l'hydratation et la détoxification",
	"Stimuler la digestion et la circulation",
	"Favoriser une relaxation profonde du corps et de l'esprit",
]

const contraindications = [
	"Système immunitaire affaibli",
	"Affections de la peau, brûlures, plaies ou cicatrices récentes",
	"Troubles circulatoires importants ou problèmes cardio-vasculaires",
	"Diabète, hypertension ou problèmes respiratoires",
	"Maladie infectieuse, forte fièvre ou intervention chirurgicale récente",
	"Pathologies lourdes nécessitant un avis médical préalable",
]

export default function MassagePochonsPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Massage ayurvédique</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Massage ayurvédique aux pochons
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un soin enveloppant et apaisant associant massage à l’huile,
									chaleur et pochons pour relâcher les tensions et dénouer le
									corps en douceur.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Chaleur & plantes
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										1h ou 1h30
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
									src={pochonsImage}
									alt="Massage ayurvédique aux pochons à Maison Kailash"
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
									src={pochonsDetailImage}
									alt="Massage ayurvédique à l'huile"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un soin entre Ayurveda, chaleur et plantes
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Ce soin puise ses origines dans les traditions ayurvédiques
										indiennes et l&apos;usage de la chaleur dans les pratiques
										asiatiques. Il vise principalement la relaxation du corps et
										de l&apos;esprit.
									</p>
									<p>
										Les pochons sont composés de tissu en coton, de riz, de
										plantes médicinales et d&apos;huiles essentielles choisies
										pour leurs propriétés purifiantes, fortifiantes ou
										relaxantes.
									</p>
									<p>
										Le massage associe technique manuelle, huile, chaleur,
										phytothérapie et aromathérapie pour créer un soin profond,
										réconfortant et enveloppant.
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
									Un massage adapté à votre constitution
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Un bref questionnaire peut être proposé avant le massage afin
									d&apos;adapter le soin à votre dosha prédominant et à votre
									état du moment.
								</p>
								<p>
									Le soin se pratique allongé, sur le corps complet, avec une
									huile choisie selon votre constitution : sésame, olive ou
									coco.
								</p>
								<p>
									Le massage commence par un nettoyage du champ énergétique,
									puis associe massage manuel et application des pochons
									chauffés à la vapeur, par tapotements doux et mouvements
									circulaires.
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
								Un soin de chaleur, de détente et de vitalité
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
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Précautions</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Quelques contre-indications à vérifier
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									En cas de doute, de pathologie connue ou de traitement en
									cours, demandez un avis médical avant de réserver.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<ul className="grid gap-4 sm:grid-cols-2">
								{contraindications.map((item) => (
									<li key={item} className="content-card text-sm/6 text-muted">
										{item}
									</li>
								))}
							</ul>
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
									Deux formats avec préparation des pochons
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Les tarifs incluent le massage. La préparation des pochons et
									le questionnaire sont facturés en supplément.
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
											1 heure
										</h3>
										<p className="mt-3 text-3xl font-semibold text-mk-green">
											70 € + 10 €
										</p>
										<p className="mt-3 text-sm/6 text-muted">
											Préparation des pochons et questionnaire.
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
											90 € + 10 €
										</p>
										<p className="mt-3 text-sm/6 text-muted">
											Préparation des pochons et questionnaire.
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
												Réserver ce massage avec Lou
											</h3>
											<p className="mt-1 text-base/7 text-mk-saffron-text/80">
												Contactez Lou pour choisir le format adapté et préparer
												votre séance.
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
