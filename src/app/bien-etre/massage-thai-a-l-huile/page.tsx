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
import thaiImage from "@/images/massage-thai-huile-kailash.jpg"
import thaiDetailImage from "@/images/massage-thai-huile-kailash.png"

export const metadata: Metadata = {
	title: "Massage thaï à l'huile à La Réunion",
	description:
		"Massage thaï à l'huile à Maison Kailash, à l'Éperon : pressions, mobilisations douces, méridiens, détente profonde et libération des tensions.",
	alternates: {
		canonical: "/bien-etre/massage-thai-a-l-huile/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Libérer les tensions en profondeur",
	"Favoriser la circulation de l'énergie",
	"Apaiser le système nerveux",
	"Soutenir la souplesse et la mobilité",
	"Relâcher le dos, les jambes et les épaules",
	"Installer une détente profonde et durable",
]

export default function MassageThaiHuilePage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Massage thaï</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Massage thaï à l&apos;huile
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un massage à l’huile décontractant et régénérant qui suit les
									méridiens en associant les pressions et mobilisations douces
									pour libérer les tensions en profondeur.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Pressions & mobilisations
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
									src={thaiImage}
									alt="Massage thaï à l'huile à Maison Kailash"
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
									src={thaiDetailImage}
									alt="Massage thaï à l'huile et mobilisations douces"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un massage énergétique, fluide et profondément relaxant
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le massage thaïlandais à l&apos;huile est un soin apaisant
										et régénérant du corps entier, qui combine les techniques
										traditionnelles du massage thaïlandais avec
										l&apos;utilisation d&apos;huiles.
									</p>
									<p>
										Contrairement au massage thaïlandais classique, souvent plus
										appuyé, cette version à l&apos;huile est plus douce,
										relaxante et enveloppante.
									</p>
									<p>
										Le massage alterne de longs mouvements fluides, des
										pressions légères, des pétrissages, des lissages glissants,
										des étirements doux et des percussions dynamisantes.
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
									Un soin à l&apos;huile adapté à votre état du moment
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Le massage se pratique à l&apos;huile, sur table, dans un
									rythme progressif qui permet au corps de s&apos;ouvrir et de
									se relâcher.
								</p>
								<p>
									Les mouvements suivent les lignes énergétiques du corps et se
									combinent à des mobilisations douces pour libérer les tensions
									musculaires et articulaires.
								</p>
								<p>
									La séance peut être plus douce ou plus profonde selon votre
									besoin, vos zones de tension et votre sensibilité.
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
								Un massage pour détendre, mobiliser et régénérer
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
									Le massage thaï à l&apos;huile est proposé sur rendez-vous à
									Maison Kailash, à l&apos;Éperon.
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
												Réserver ce massage avec Lou
											</h3>
											<p className="mt-1 text-base/7 text-mk-saffron-text/80">
												Contactez Lou pour choisir le format adapté à votre
												besoin.
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
