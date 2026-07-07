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
import reikiImage from "@/images/reiki-kailash.jpg"
import reikiDetailImage from "@/images/reiki-kailash2.png"

export const metadata: Metadata = {
	title: "Soin Reiki à La Réunion",
	description:
		"Reiki à Maison Kailash, à l'Éperon : soin énergétique d'harmonisation des chakras accompagné par les bols tibétains et les pierres.",
	alternates: {
		canonical: "/sante/reiki/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Harmoniser les chakras",
	"Apaiser le corps, le mental et les émotions",
	"Soutenir la circulation de l'énergie vitale",
	"Favoriser le lâcher-prise",
	"Accompagner les déséquilibres et blocages énergétiques",
	"Retrouver davantage de paix intérieure",
]

export default function ReikiPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Soin énergétique</p>
								<h1 className="heading-display mt-4 text-mk-green">Reiki</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un soin énergétique d’harmonisation des chakras accompagné par
									les bols tibétains et les pierres, pour soutenir l’apaisement
									et la circulation de l’énergie vitale.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Chakras & énergie
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
									src={reikiImage}
									alt="Soin Reiki à Maison Kailash"
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
									src={reikiDetailImage}
									alt="Soin énergétique Reiki avec pierres et bols tibétains"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Une méthode japonaise d&apos;harmonisation énergétique
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Reiki signifie “énergie universelle”. Le Reiki Ho est une
										méthode d&apos;origine japonaise par laquelle le praticien
										se connecte à cette énergie et la canalise pour transmettre
										une énergie vitale au receveur.
									</p>
									<p>
										Le soin vise à détecter les déséquilibres et blocages
										énergétiques, à harmoniser les principaux centres
										d&apos;énergie et à soutenir l&apos;équilibre entre les
										plans physique, mental, émotionnel et spirituel.
									</p>
									<p>
										La séance peut être complétée par la vibration des bols
										tibétains et l&apos;utilisation de pierres, dans une
										approche douce d&apos;harmonisation du corps et de
										l&apos;esprit.
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
									Un soin allongé, sur vêtements, par imposition des mains
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									La séance commence par un court entretien pour établir
									ensemble la demande de la personne, puis par un nettoyage du
									champ énergétique.
								</p>
								<p>
									Le soin se concentre notamment sur les sept chakras, avec une
									lecture énergétique et une pratique du Reiki par imposition
									des mains selon les besoins.
								</p>
								<p>
									La séance d&apos;1h30 permet de réaliser un soin plus complet,
									incluant les positions du Reiki sur le corps complet, de la
									tête aux pieds, sur la face ventrale et dorsale.
								</p>
								<p>
									Un court échange final permet d&apos;accueillir les ressentis
									liés au soin pratiqué.
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
								Un soin pour retrouver équilibre et paix intérieure
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
									Deux formats selon le niveau d&apos;accompagnement souhaité
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Le soin Reiki est proposé sur rendez-vous à Maison Kailash, à
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
												Réserver ce soin avec Lou
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