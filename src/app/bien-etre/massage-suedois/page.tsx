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
import swedishImage from "@/images/massage-suedois-kailash.jpg"
import swedishDetailImage from "@/images/massage-suedois-kailash.png"

export const metadata: Metadata = {
	title: "Massage suédois à La Réunion",
	description:
		"Massage suédois à Maison Kailash, à l'Éperon : massage profond et tonique à l'huile pour les tensions musculaires, la récupération et la détente.",
	alternates: {
		canonical: "/bien-etre/massage-suedois/",
	},
}

const bookingPhoneHref = "tel:+262692086369"
const bookingPhoneLabel = "0692 08 63 69"

const benefits = [
	"Apporter un réconfort physique et émotionnel",
	"Favoriser la circulation sanguine et lymphatique",
	"Soutenir la récupération musculaire",
	"Assouplir et mobiliser les tissus",
	"Réchauffer le corps et relâcher les blocages",
	"Apaiser le corps et l'esprit",
]

export default function MassageSuedoisPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Massage profond</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Massage suédois
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un massage profond et fluide, particulièrement adapté aux
									tensions musculaires, à la récupération et au relâchement.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Massage à l’huile
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										1h30 ou 2h
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Récupération musculaire
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
									src={swedishImage}
									alt="Massage suédois à Maison Kailash"
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
									src={swedishDetailImage}
									alt="Massage suédois et travail musculaire"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un massage tonique pour remettre le corps en mouvement
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le massage suédois est un enchaînement de manœuvres
										dynamiques et toniques appliquées sur la masse musculaire et
										les articulations.
									</p>
									<p>
										Il aide à remettre en état les muscles fatigués, atones ou
										inhibés, tout en favorisant la circulation sanguine,
										lymphatique et l&apos;élimination cellulaire.
									</p>
									<p>
										Ce massage est apprécié pour son action à la fois profonde,
										réconfortante et stimulante. Il convient particulièrement
										aux personnes actives et aux sportifs, avant ou après un
										effort.
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
									Un soin à l&apos;huile, profond et progressif
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Le massage suédois se pratique à l&apos;huile, sur table, avec
									des manœuvres qui alternent fluidité, pression et travail plus
									ciblé sur les zones tendues.
								</p>
								<p>
									La séance peut être adaptée selon votre besoin : détente
									globale, récupération, tensions musculaires ou envie de
									retrouver davantage de tonicité.
								</p>
								<p>
									Le soin stimule le système nerveux tout en apaisant le corps
									et l&apos;esprit, pour une relaxation complète et une
									meilleure tonicité musculaire.
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
								Un soin profond pour détendre et récupérer
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
									Deux formats pour un travail en profondeur
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Le massage suédois est proposé sur rendez-vous à Maison
									Kailash, à l&apos;Éperon.
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
											1 heure 30
										</h3>
										<p className="mt-3 text-3xl font-semibold text-mk-green">
											100 €
										</p>
									</div>
									<div className="content-card">
										<SparklesIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-xl font-semibold text-foreground">
											2 heures
										</h3>
										<p className="mt-3 text-3xl font-semibold text-mk-green">
											130 €
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
												Réserver ce massage avec Stéven
											</h3>
											<p className="mt-1 text-base/7 text-mk-saffron-text/80">
												Contactez Stéven pour choisir le format adapté.
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
