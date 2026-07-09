import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

import Reveal from "@/components/Reveal"
import reflexologyImage from "@/images/reflexologie-plantaire-kailash.jpg"
import reflexologyDetailImage from "@/images/reflexologie-plantaire-kailash.png"
import ServiceBookingSection from "@/components/ServiceBookingSection"

export const metadata: Metadata = {
	title: "Réflexologie plantaire à La Réunion",
	description:
		"Réflexologie plantaire thaï à La Réunion : stimulation des zones réflexes, détente, ancrage, vitalité et équilibre énergétique.",
	alternates: {
		canonical: "/bien-etre/reflexologie-plantaire/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Inviter à une relaxation profonde",
	"Renforcer la vitalité",
	"Relâcher les tensions physiques et psychiques",
	"Améliorer la circulation sanguine et lymphatique",
	"Soutenir la digestion",
	"Favoriser l'ancrage et la stabilisation des énergies",
]

export default function ReflexologiePlantairePage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Réflexologie plantaire</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Réflexologie plantaire thaï
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Une stimulation des zones réflexes du pied pour soutenir
									l&apos;équilibre du corps, la détente, la vitalité et la
									circulation de l&apos;énergie.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Pieds & demi-jambes
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										1h
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Plaine St Paul
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
										href="#tarifs"
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
									src={reflexologyImage}
									alt="Réflexologie plantaire thaï"
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
									src={reflexologyDetailImage}
									alt="Soin de réflexologie plantaire thaï"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une pratique basée sur les zones réflexes du pied
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										La réflexologie plantaire thaï est une technique de
										bien-être issue de la médecine traditionnelle thaïlandaise.
									</p>
									<p>
										Elle repose sur la connaissance des zones réflexes situées
										sur les pieds, considérées comme de véritables miroirs du
										corps humain.
									</p>
									<p>
										La stimulation de ces points permet d&apos;agir à distance
										sur les organes internes associés et de soutenir
										l&apos;équilibre énergétique global de la personne.
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
									Un soin habillé, allongé, centré sur les pieds
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									La séance se reçoit habillé, allongé sur un matelas au sol. Un
									mélange de crème et d&apos;huile est appliqué progressivement
									sur les pieds et les demi-jambes.
								</p>
								<p>
									Les points d&apos;acupression sont travaillés à l&apos;aide
									d&apos;un bâtonnet en bois, puis associés à des mouvements de
									pétrissage, de lissage, de percussions et d&apos;étirements.
								</p>
								<p>
									Le soin peut aussi intégrer l&apos;usage vibratoire des huiles
									essentielles pour accentuer l&apos;impact psycho-émotionnel de
									la technique manuelle.
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
								Un soin d&apos;ancrage, de détente et de vitalité
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
				title="Une séance d'une heure"
				description="La réflexologie plantaire thaï est proposée sur rendez-vous."
				practitioner="Gaël"
				location="La Plaine Saint-Paul"
				items={[{ label: "1 heure", value: "70 €" }]}
				phoneLabel={bookingPhoneLabel}
				phoneHref={bookingPhoneHref}
				ctaLabel="Réservez ce soin"
				background="background"
			/>
		</main>
	)
}
