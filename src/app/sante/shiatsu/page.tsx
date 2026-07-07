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
import shiatsuImage from "@/images/shiatsu-kailash.jpg"
import shiatsuDetailImage from "@/images/shiatsu-kailash2.jpg"

export const metadata: Metadata = {
	title: "Massage Shiatsu à La Réunion",
	description:
		"Massage Shiatsu à Maison Kailash, à l'Éperon : pressions japonaises sur vêtements pour détente profonde, tensions musculaires, stress et équilibre corporel.",
	alternates: {
		canonical: "/sante/shiatsu/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Installer une détente profonde",
	"Relâcher les tensions musculaires",
	"Réduire les effets du stress",
	"Soutenir l'équilibre général du corps",
	"Accompagner les troubles digestifs ou du sommeil",
	"Aider le corps à retrouver de bonnes conditions",
]

export default function ShiatsuPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Massage Shiatsu</p>
								<h1 className="heading-display mt-4 text-mk-green">Shiatsu</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Une technique manuelle d&apos;origine japonaise basée sur la
									pression des doigts et des paumes pour relâcher les tensions,
									apaiser le stress et favoriser une détente profonde.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Pressions japonaises
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										1h ou 1h30
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
									src={shiatsuImage}
									alt="Massage Shiatsu à Maison Kailash"
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
									src={shiatsuDetailImage}
									alt="Séance de Shiatsu sur vêtements"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une méthode japonaise par pression des doigts et des paumes
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le Shiatsu signifie littéralement “pression des doigts”. Il
										repose sur des pressions manuelles appliquées sur le corps
										pour aider à éliminer la fatigue accumulée et maintenir le
										corps en bonnes conditions.
									</p>
									<p>
										Cette technique 100% manuelle n&apos;utilise ni instrument
										ni huile. Elle permet de détecter les tensions et de les
										relâcher avec une pression douce, profonde et adaptée.
									</p>
									<p>
										La sensibilité des doigts permet d&apos;ajuster la
										profondeur et la durée de chaque pression afin de préserver
										une sensation agréable tout au long du soin.
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
									Un soin au sol ou sur table, sans huile
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Le Shiatsu se pratique sur vêtements, au sol ou sur table,
									selon le besoin et le confort de la personne.
								</p>
								<p>
									Le praticien travaille par pressions progressives des doigts
									et des paumes, en suivant les zones de tension et l&apos;état
									du moment.
								</p>
								<p>
									Ce soin est destiné à un large public : adultes, enfants,
									personnes âgées, femmes enceintes ou sportifs, en adaptant
									toujours l&apos;intensité et la posture.
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
								Un soin de détente et de maintien de l&apos;équilibre corporel
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
									Le Shiatsu est proposé sur rendez-vous à Maison Kailash, à
									l&apos;Éperon.
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
											70 €
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
											90 €
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
												Réserver ce soin avec Gael
											</h3>
											<p className="mt-1 text-base/7 text-mk-saffron-text/80">
												Contactez Gael pour choisir le format adapté.
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
