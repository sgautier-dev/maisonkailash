import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import abhyangaImage from "@/images/massage-ayurvedique-abhyanga-kailash.jpg"
import ayurvedicDetailImage from "@/images/massage-ayurvedique-kailash2.png"
import ServiceBookingSection from "@/components/ServiceBookingSection"

export const metadata: Metadata = {
	title: "Massage ayurvédique Abhyanga à La Réunion",
	description:
		"Massage ayurvédique Abhyanga à l'huile à Maison Kailash, à l'Éperon : détente, vitalité, détoxification et harmonie globale du corps.",
	alternates: {
		canonical: "/bien-etre/massage-ayurvedique/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Apaiser le mental et relâcher les tensions",
	"Soutenir la détoxification du corps",
	"Revitaliser et drainer les tissus",
	"Favoriser la circulation de l'énergie vitale",
	"Accompagner le sommeil et la récupération",
	"Soutenir l'harmonie globale du corps",
]

export default function MassageAyurvediquePage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Massage ayurvédique</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Massage ayurvédique Abhyanga
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Massage traditionnel indien à l’huile pratiqué en fonction de
									votre dosha, idéal pour apaiser le mental, détoxifier,
									revitaliser, drainer et soutenir l’harmonie globale du corps.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Soin à l’huile
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
									src={abhyangaImage}
									alt="Massage ayurvédique Abhyanga à Maison Kailash"
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
									src={ayurvedicDetailImage}
									alt="Soin ayurvédique Abhyanga à l'huile"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un massage traditionnel issu de l&apos;Ayurveda
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										L&apos;Abhyanga provient de l&apos;Ayurveda, la médecine
										traditionnelle indienne. Cette approche considère le corps
										et l&apos;esprit dans leur globalité.
									</p>
									<p>
										Le soin se pratique à l&apos;huile avec des pressions, des
										effleurages et des palpations. Il vise à soutenir la
										circulation du prâna, l&apos;énergie vitale, et à
										rééquilibrer les fonctions du corps.
									</p>
									<p>
										Des mouvements toniques alternent avec des gestes plus
										relaxants pour apporter à la fois détente, énergie et
										sensation d&apos;harmonie.
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
							<p className="eyebrow">Bienfaits</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Un soin de détente, de vitalité et d&apos;équilibre
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
				title="Deux formats selon votre besoin"
				description="Le massage ayurvédique Abhyanga est proposé sur rendez-vous."
				practitioner="Lou"
				location="Maison Kailash, L'Éperon - Saint-Gilles les Hauts"
				items={[
					{ label: "1 heure", value: "70 €" },
					{ label: "1 heure 30", value: "90 €" },
				]}
				phoneLabel={bookingPhoneLabel}
				phoneHref={bookingPhoneHref}
				ctaLabel="Réservez ce massage"
			/>

			<LocationCta />
		</main>
	)
}
