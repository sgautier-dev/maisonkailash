import type { Metadata } from "next"
import Image from "next/image"
import {
	CalendarDaysIcon,
	CheckCircleIcon,
	ClockIcon,
	MapPinIcon,
	PhoneIcon,
	TicketIcon,
} from "@heroicons/react/24/outline"

import Reveal from "@/components/Reveal"
import taiChiImage from "@/images/taichi-kailash2.jpg"
import taiChiDetailImage from "@/images/taichi-kailash3.jpg"

export const metadata: Metadata = {
	title: "Tai Chi à La Réunion",
	description:
		"Cours de Tai Chi à La Réunion avec Maison Kailash : art du mouvement, pratique du souffle, relaxation en mouvement et conscience corporelle.",
	alternates: {
		canonical: "/cours/tai-chi-reunion/",
	},
}

const bookingPhoneHref = "tel:+262692247661"
const bookingPhoneLabel = "0692 24 76 61"

const benefits = [
	"Développer la souplesse et l'équilibre",
	"Favoriser la circulation de l'énergie",
	"Apaiser le mental par la lenteur",
	"Travailler le souffle et la présence",
	"Entretenir les articulations en douceur",
	"Renforcer la conscience de soi",
]

export default function TaiChiPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Cours collectif</p>
								<h1 className="heading-display mt-4 text-mk-green">Tai Chi</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un art du mouvement, une pratique méditative et une
									gymnastique douce pour cultiver le souffle, l&apos;ancrage et
									la circulation de l&apos;énergie.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Art du mouvement
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Mardi 17h
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										Gratuit
									</span>
								</div>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<a
										href={bookingPhoneHref}
										className="btn-primary px-5 py-3 text-sm"
									>
										Réserver un cours
									</a>
									<a href="#tarifs" className="btn-secondary px-5 py-3 text-sm">
										Horaires & tarifs
									</a>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={taiChiImage}
									alt="Cours de Tai Chi à La Réunion"
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
									src={taiChiDetailImage}
									alt="Pratique du Tai Chi en extérieur"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une relaxation en mouvement
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le Tai Chi est une technique ancestrale chinoise, un art
										martial interne et un art de la conscience. C&apos;est une
										gymnastique douce, une pratique du souffle, un exercice
										thérapeutique et une école de maîtrise de soi.
									</p>
									<p>
										Les mouvements s&apos;écoulent depuis le bassin à un rythme
										très lent, avec pour but de développer l&apos;énergie
										intérieure, le Chi, et d&apos;en soutenir la circulation
										dans tout le corps.
									</p>
									<p>
										La pratique invite au lâcher-prise, à la disponibilité de
										l&apos;esprit et à une présence plus fine aux sensations du
										corps.
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
									Une discipline de concentration et de sérénité
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									À long terme, le Tai Chi favorise la circulation harmonieuse
									du Chi, entretient la souplesse du corps et travaille en
									profondeur sur les articulations.
								</p>
								<p>
									Par la respiration, la lenteur et la persévérance, le
									pratiquant apprend à dépasser l&apos;agitation pour accéder à
									plus de calme intérieur.
								</p>
								<p>
									Daniel Bougouin pratique et enseigne le Tai Chi Quan
									traditionnel, notamment les formes Yang.
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
								Une pratique douce pour l&apos;équilibre du corps et de
								l&apos;esprit
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
								<p className="eyebrow">Horaires & réservation</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Cours du mardi à La Saline les Bains
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Cours gratuit, sur réservation avec Daniel.
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
										Mardi
									</h3>
									<p className="mt-3 text-base/7 text-muted">À 17h.</p>
								</div>

								<div className="grid gap-5 sm:grid-cols-3">
									<div className="content-card">
										<MapPinIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-lg font-semibold text-foreground">
											Lieu
										</h3>
										<p className="mt-3 text-base/7 text-muted">
											La Saline les Bains.
										</p>
									</div>

									<div className="content-card">
										<ClockIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-lg font-semibold text-foreground">
											Réservation
										</h3>
										<p className="mt-3 text-base/7 text-muted">
											Sur réservation.
										</p>
									</div>

									<div className="content-card">
										<TicketIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-lg font-semibold text-foreground">
											Tarif
										</h3>
										<p className="mt-3 text-2xl font-semibold text-mk-green">
											Gratuit
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
												Réservation avec Daniel
											</h3>
											<p className="mt-1 text-base/7 text-mk-saffron-text/80">
												Contactez directement Daniel pour réserver votre place
												ou confirmer le lieu exact.
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
