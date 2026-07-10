import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import energeticCareImage from "@/images/soin-energetique-kailash.jpg"
import energeticCareDetailImage from "@/images/soin-energetique-kailash2.jpg"
import ServiceBookingSection from "@/components/ServiceBookingSection"

export const metadata: Metadata = {
	title: "Soin énergétique à La Réunion",
	description:
		"Soin énergétique à Maison Kailash, à l'Éperon : harmonisation des chakras, rééquilibrage de l'énergie vitale, ancrage et paix intérieure.",
	alternates: {
		canonical: "/sante/soin-energetique-974/",
	},
}

const bookingPhoneHref = "tel:+262693225245"
const bookingPhoneLabel = "0693 22 52 45"

const benefits = [
	"Harmoniser les énergies",
	"Renforcer l'ancrage",
	"Accompagner la libération des émotions",
	"Soutenir la paix intérieure",
	"Retrouver confiance et équilibre",
	"Favoriser une meilleure circulation de l'énergie vitale",
]

export default function SoinEnergetiquePage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Soin énergétique</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Soin énergétique
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un soin d&apos;harmonisation des chakras et de rééquilibrage
									de l&apos;énergie vitale, pour retrouver davantage de
									présence, d&apos;ancrage et de stabilité intérieure.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Harmonisation
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										1h
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Sur vêtements
									</span>
								</div>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<a
										href={bookingPhoneHref}
										className="btn-primary px-5 py-3 text-sm"
									>
										Réserver ce soin
									</a>
									<Link
										href="#tarif"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Voir le tarif
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={energeticCareImage}
									alt="Soin énergétique à Maison Kailash"
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
									src={energeticCareDetailImage}
									alt="Harmonisation énergétique à Maison Kailash"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un accompagnement subtil autour des centres d&apos;énergie
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le soin énergétique vise à harmoniser les chakras, ces
										centres d&apos;énergie qui participent à la circulation de
										notre énergie vitale.
									</p>
									<p>
										Il accompagne le rééquilibrage des plans subtils du corps :
										émotionnel, mental, énergétique et spirituel.
									</p>
									<p>
										C&apos;est un soin dans la voie du cœur, pensé comme un
										espace de présence, de lumière et d&apos;écoute intérieure.
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
									Un soin allongé, habillé, dans une écoute profonde
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Le soin se reçoit allongé et habillé, dans un cadre calme et
									respectueux du rythme de chacun.
								</p>
								<p>
									L&apos;accompagnement peut se vivre sur un plan subtil et
									demander plusieurs séances selon les besoins, les ressentis et
									le chemin de la personne.
								</p>
								<p>
									Chaque séance est une invitation à laisser circuler plus
									librement l&apos;énergie vitale, à revenir au moment présent
									et à soutenir l&apos;équilibre intérieur.
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
								Un soin d&apos;ancrage et d&apos;harmonisation
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
				id="tarif"
				eyebrow="Tarif & réservation"
				title="Une séance d'une heure"
				description="Le soin énergétique est proposé sur rendez-vous."
				practitioner="Nathalie"
				location="Maison Kailash, L'Éperon ou Étang Saint-Leu"
				items={[{ label: "1 heure", value: "70 €" }]}
				phoneLabel={bookingPhoneLabel}
				phoneHref={bookingPhoneHref}
				ctaLabel="Réservez ce soin"
				background="background"
			/>

			<LocationCta />
		</main>
	)
}
