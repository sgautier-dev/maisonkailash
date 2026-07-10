import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	CalendarDaysIcon,
	CheckCircleIcon,
	TicketIcon,
} from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import ServiceBookingSection from "@/components/ServiceBookingSection"
import meditationImage from "@/images/meditation-kailash.jpeg"
import meditationDetailImage from "@/images/meditation-kailash2.jpeg"

export const metadata: Metadata = {
	title: "Méditation à La Réunion",
	description:
		"Cours de méditation à Maison Kailash, à l'Éperon : présence silencieuse, pratique guidée, concentration, échanges et retour à soi.",
	alternates: {
		canonical: "/cours/meditation/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Apaiser le mental et revenir au corps",
	"Cultiver la présence à soi",
	"Développer la concentration",
	"Accueillir l'expérience sans jugement",
	"Approfondir la qualité d'écoute intérieure",
	"Explorer une pratique simple et non religieuse",
]

export default function MeditationPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Cours collectif</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Méditation
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Une pratique de présence silencieuse pour revenir à soi,
									apaiser le mental et s&apos;ouvrir à l&apos;instant présent
									avec simplicité.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Présence silencieuse
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										1h15
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Sur réservation
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
									src={meditationImage}
									alt="Cours de méditation à Maison Kailash"
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
									src={meditationDetailImage}
									alt="Pratique de méditation à Maison Kailash"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une expérience directe de présence à soi
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										La méditation désigne des techniques visant la concentration
										du mental, mais aussi un état naturel de présence, une
										ouverture à l&apos;instant présent et à la simplicité de
										l&apos;être.
									</p>
									<p>
										Méditer, c&apos;est relâcher l&apos;identification au
										mental, revenir au contact de son expérience et ressentir ce
										qui est là, sans jugement.
									</p>
									<p>
										La pratique peut être abordée comme un outil de bien-être,
										mais aussi comme une voie de connaissance de soi, simple,
										directe et accessible.
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
									Une session guidée, silencieuse et progressive
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									La session dure environ une heure quinze. Des périodes de
									méditation guidée ou silencieuse alternent avec des
									explications et des temps d&apos;échange sur la pratique.
								</p>
								<p>
									Différentes techniques de concentration peuvent être
									proposées, avec comme intention principale de revenir à la
									simple qualité d&apos;être.
								</p>
								<p>
									Prévoyez une tenue confortable et légère, ainsi qu&apos;un
									coussin de méditation si vous souhaitez utiliser le vôtre.
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
								Une pratique pour ralentir, écouter et clarifier
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
				eyebrow="Horaires & réservation"
				title="Sessions de méditation à Maison Kailash"
				description="Sessions sur réservation. Les dates peuvent évoluer selon la programmation."
				practitioner="Lou"
				location="Maison Kailash, L'Éperon - Saint-Gilles les Hauts"
				items={[
					{
						label: "Jeudi",
						value: "18h15",
						description: "Sessions bi-mensuelles, durée 1h15.",
						icon: CalendarDaysIcon,
					},
					{
						label: "Participation",
						value: "5 €",
						description: "Donation minimum.",
						icon: TicketIcon,
					},
				]}
				phoneLabel={bookingPhoneLabel}
				phoneHref={bookingPhoneHref}
				ctaLabel="Réservez ce cours"
				background="background"
			/>

			<LocationCta />
		</main>
	)
}
