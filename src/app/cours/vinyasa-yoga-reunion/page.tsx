import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	CalendarDaysIcon,
	CheckCircleIcon,
	ClockIcon,
	PhoneIcon,
	SparklesIcon,
	TicketIcon,
} from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import vinyasaImage from "@/images/vinyasa-yoga-kailash.jpg"
import vinyasaDetailImage from "@/images/vinyasa-yoga-kailash2.jpg"

export const metadata: Metadata = {
	title: "Vinyasa Yoga à La Réunion",
	description:
		"Cours de Vinyasa Yoga à Maison Kailash, à l'Éperon : souffle, alignement, mouvement, pratique fluide et cours collectifs à Saint-Gilles les Hauts.",
	alternates: {
		canonical: "/cours/vinyasa-yoga-reunion/",
	},
}

const bookingPhoneHref = "tel:+262692729271"
const bookingPhoneLabel = "0692 72 92 71"

const benefits = [
	"Synchroniser le souffle et le mouvement",
	"Développer l'alignement postural",
	"Renforcer le corps en douceur",
	"Améliorer la mobilité et la présence",
	"Affiner sa pratique personnelle",
	"Vivre une méditation en mouvement",
]

export default function VinyasaYogaPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Cours collectif</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Vinyasa Yoga
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un yoga dynamique où le souffle guide le mouvement, dans une
									pratique fluide, consciente et attentive aux alignements.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Souffle & alignement
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										1h30
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Ouvert à tous
									</span>
								</div>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<a
										href={bookingPhoneHref}
										className="btn-primary px-5 py-3 text-sm"
									>
										Réserver un cours
									</a>
									<Link
										href="#tarifs"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Horaires & tarifs
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={vinyasaImage}
									alt="Cours de Vinyasa Yoga à Maison Kailash"
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
									src={vinyasaDetailImage}
									alt="Pratique de yoga sur le deck Maison Kailash"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une méditation en mouvement
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le terme Vinyasa signifie synchronisation du souffle et du
										mouvement. Le Vinyasa Yoga est un yoga dynamique dérivé de
										l&apos;Ashtanga Yoga.
									</p>
									<p>
										Tout au long de la séance, les postures s&apos;enchaînent
										dans un flux animé par le souffle conscient,
										l&apos;alignement du corps, l&apos;attention et
										l&apos;intention.
									</p>
									<p>
										Le cours proposé à Maison Kailash met particulièrement
										l&apos;accent sur les alignements posturaux et le souffle,
										dans une pratique ouverte à tous.
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
								<p className="eyebrow">En pratique</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un cours fluide, construit et progressif
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Les séances sont idéales pour débuter le yoga ou affiner sa
									pratique personnelle.
								</p>
								<p>
									Chaque cours est construit autour d&apos;un thème : catégorie
									de posture, posture cœur, chakra, élément, qualité ou
									intention.
								</p>
								<p>
									La séance suit un rythme organique : émergence, maintien,
									résorption, afin de préparer le corps en douceur jusqu&apos;au
									pic de pratique puis revenir au calme.
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
								Une pratique pour respirer, bouger et s&apos;aligner
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
								<p className="eyebrow">Horaires & tarifs</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Cours du mercredi à Maison Kailash
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Cours sur réservation à l&apos;Éperon, Saint-Gilles les Hauts.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="grid gap-5">
								<div className="content-card">
									<CalendarDaysIcon
										aria-hidden="true"
										className="size-7 text-mk-green"
									/>
									<h3 className="mt-5 text-xl font-semibold text-foreground">
										Mercredi
									</h3>
									<p className="mt-3 text-base/7 text-muted">
										17h et 18h30, durée 1h30.
									</p>
								</div>

								<div className="grid gap-5 sm:grid-cols-3">
									<div className="content-card">
										<ClockIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-lg font-semibold text-foreground">
											Séance
										</h3>
										<p className="mt-3 text-2xl font-semibold text-mk-green">
											15 €
										</p>
									</div>
									<div className="content-card">
										<TicketIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-lg font-semibold text-foreground">
											10 cours
										</h3>
										<p className="mt-3 text-2xl font-semibold text-mk-green">
											120 €
										</p>
									</div>
									<div className="content-card">
										<SparklesIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-lg font-semibold text-foreground">
											Découverte
										</h3>
										<p className="mt-3 text-2xl font-semibold text-mk-green">
											8 €
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
												Réservation avec Charlotte
											</h3>
											<p className="mt-1 text-base/7 text-mk-saffron-text/80">
												Contactez directement Charlotte pour réserver votre
												place.
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
