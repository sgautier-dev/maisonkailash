import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

import Reveal from "@/components/Reveal"
import ServiceBookingSection from "@/components/ServiceBookingSection"
import rebozoImage from "@/images/rebozo-kailash.jpg"
import rebozoDetailImage from "@/images/background.jpeg"

export const metadata: Metadata = {
	title: "Soin Rebozo à La Réunion",
	description:
		"Soin Rebozo à La Réunion : rituel enveloppant en binôme avec massage à quatre mains, mise en chaleur et resserrage du corps par les tissus.",
	alternates: {
		canonical: "/bien-etre/rebozo/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Offrir un moment de retour à soi après un passage de vie",
	"Accompagner la période après l'accouchement",
	"Déposer symboliquement ce dont vous n'avez plus besoin",
	"Soutenir une prise de conscience du chemin traversé",
	"Inviter le corps et l'esprit au calme",
	"Créer un espace enveloppant, soutenant et profondément ressourçant",
]

export default function RebozoPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Soin enveloppant</p>
								<h1 className="heading-display mt-4 text-mk-green">Rebozo</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un rituel de passage, de métamorphose et de retour à soi,
									pour déposer ce dont vous n’avez plus besoin et vous retrouver
									pleinement.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Rituel mexicain
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										3 heures
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										En binôme
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
									src={rebozoImage}
									alt="Soin Rebozo à La Réunion"
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
									src={rebozoDetailImage}
									alt="Soin en duo à Maison Kailash"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un rituel ancestral issu du Mexique
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le soin Rebozo est issu du Mexique et s’inscrit dans une
										tradition rituelle ancestrale. Le mot Rebozo signifie « tissu
										» : les tissus sont utilisés comme un prolongement du corps,
										pour envelopper, soutenir et resserrer.
									</p>
									<p>
										C’est un rituel créé par les femmes, pour les femmes, mais
										également ouvert aux hommes. Il accompagne les moments de
										passage, de transformation ou de fin de cycle.
									</p>
									<p>
										Il peut se recevoir après un accouchement, en célébration de
										la naissance de la maman, après un deuil, une séparation, ou
										pour accompagner toute transition intérieure importante.
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
									Un soin en binôme sur trois heures
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Le soin Rebozo est réalisé par deux praticiens. Il se déroule
									sur environ trois heures et commence par un temps d’échange
									pour poser l’intention du rituel.
								</p>
								<p>
									La séance comprend ensuite un massage à quatre mains, une mise
									en chaleur, puis un resserrage du corps à l’aide des tissus.
								</p>
								<p>
									Ce resserrage invite à rassembler l’énergie, à refermer un
									cycle et à retrouver une sensation de contenance, de calme et
									d’unité.
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
								Un espace pour traverser, déposer et se retrouver
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
				title="Un rituel complet en binôme"
				description="Le soin Rebozo est proposé sur rendez-vous, à partir de 40 jours après l'accouchement lorsqu'il accompagne le post-partum."
				practitioner="Élodie et son duo"
				location="Saint-Leu, Colimaçons ou à domicile"
				items={[
					{
						label: "3 heures",
						value: "320 €",
						description: "Temps d'échange, massage à quatre mains, mise en chaleur et resserrage.",
					},
				]}
				phoneLabel={bookingPhoneLabel}
				phoneHref={bookingPhoneHref}
				ctaLabel="Réservez ce soin"
				background="background"
			/>
		</main>
	)
}