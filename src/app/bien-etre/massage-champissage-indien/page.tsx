import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import champissageImage from "@/images/champissage-indien-kailash.jpeg"
import champissageDetailImage from "@/images/champissage-indien-kailash2.jpg"
import ServiceBookingSection from "@/components/ServiceBookingSection"

export const metadata: Metadata = {
	title: "Massage crânien Champissage indien à La Réunion",
	description:
		"Massage crânien Champissage indien à Maison Kailash, à l'Éperon : tête, nuque, épaules, détente du système nerveux, stress, migraines et tensions du haut du corps.",
	alternates: {
		canonical: "/bien-etre/massage-champissage-indien/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Apaiser le système nerveux et réduire le stress",
	"Clarifier le mental et soutenir la concentration",
	"Soulager les tensions du haut du corps",
	"Réduire les migraines et les insomnies",
	"Favoriser l'oxygénation des cellules cérébrales",
	"Soutenir la vigueur des cheveux",
]

export default function ChampissageIndienPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Massage crânien</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Champissage indien
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un massage indien de la tête, de la nuque et des épaules pour
									apaiser les tensions, clarifier le mental et offrir un moment
									de détente profonde.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Tête, nuque & épaules
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										30 à 40 min
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Assis sur chaise
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
									src={champissageImage}
									alt="Massage crânien Champissage indien à Maison Kailash"
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
						<Reveal className="order-2 hidden md:block lg:order-1">
							<div className="media-frame">
								<Image
									src={champissageDetailImage}
									alt="Massage crânien et soin de la tête à Maison Kailash"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une pratique indienne dédiée au haut du corps
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le Champissage est une technique de massage indien de la
										tête issue d&apos;un rituel pratiqué en Inde depuis plus de
										4 000 ans.
									</p>
									<p>
										Il englobe le massage de la tête, du cou, des épaules, du
										haut du dos, des bras et du visage, dans l&apos;intention de
										libérer les tensions et de favoriser une meilleure
										circulation de l&apos;énergie vitale.
									</p>
									<p>
										Le soin travaille notamment autour des zones du crâne, du
										front et de la gorge, traditionnellement associées à
										l&apos;équilibre, au calme mental et à l&apos;énergie
										corporelle.
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
									Un soin assis, habillé, centré sur la détente
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Le Champissage se pratique assis sur une chaise et sur
									vêtement. Il ne nécessite pas d&apos;huile.
								</p>
								<p>
									Les zones du haut du dos, des épaules, des bras, de la nuque,
									du crâne et du visage sont massées tour à tour.
								</p>
								<p>
									Une version ayurvédique traditionnelle du massage crânien à
									l&apos;huile, le Shiroabhyanga, pourra être proposée
									séparément lorsque la page dédiée sera finalisée.
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
								Un soin pour relâcher le haut du corps et apaiser l&apos;esprit
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

			<ServiceBookingSection
				title="Séance seule ou cure de trois séances"
				description="Le Champissage indien est proposé sur rendez-vous."
				practitioner="Lou"
				location="Maison Kailash, L'Éperon - Saint-Gilles les Hauts"
				items={[
					{
						label: "30 à 40 minutes",
						value: "45 €",
						description: "Une séance de massage crânien Champissage.",
					},
					{
						label: "Cure de 3 séances",
						value: "120 €",
						description: "Sur une période d'un mois.",
					},
				]}
				phoneLabel={bookingPhoneLabel}
				phoneHref={bookingPhoneHref}
				ctaLabel="Réservez ce massage"
				background="background"
			/>

			<LocationCta />
		</main>
	)
}
