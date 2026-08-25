import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

import Reveal from "@/components/Reveal"
import ServiceBookingSection from "@/components/ServiceBookingSection"
import shiatsuImage from "@/images/shiatsu-kailash.jpg"
import shiatsuDetailImage from "@/images/shiatsu-kailash2.jpg"

export const metadata: Metadata = {
	title: "Massage Shiatsu à La Réunion",
	description:
		"Massage Shiatsu à La Réunion : soin japonais par pressions, étirements doux et mobilisations pour réharmoniser le corps, apaiser l'esprit et soutenir l'équilibre global.",
	alternates: {
		canonical: "/sante/shiatsu/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Relâcher les tensions musculaires et les raideurs liées au stress, aux postures répétitives ou à l'activité physique",
	"Favoriser une détente profonde et apaiser l'agitation mentale",
	"Soutenir la récupération après une période de fatigue, de surmenage ou d'effort",
	"Encourager une respiration plus ample et une meilleure conscience corporelle",
	"Harmoniser la circulation de l'énergie le long des méridiens selon la tradition énergétique orientale",
	"Accompagner l'équilibre des grandes fonctions corporelles, notamment digestives, respiratoires et du repos",
	"Favoriser le recentrage, la stabilité émotionnelle et une sensation de paix intérieure",
	"Offrir un espace précieux de reconnexion entre le corps, l'énergie et l'esprit",
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
									Un soin japonais authentique pour réharmoniser le corps,
									apaiser l’esprit et retrouver une énergie plus fluide.
								</p>
								<p className="mt-5 text-base/7 text-muted">
									Le Shiatsu est une invitation à ralentir, à respirer et à
									revenir pleinement à soi. Par la précision d’un toucher manuel
									profond et bienveillant, ce soin accompagne le relâchement des
									tensions, soutient l’équilibre naturel du corps et ouvre un
									espace de calme intérieur.
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
									alt="Massage Shiatsu à La Réunion"
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
									L’art japonais de la pression des doigts
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le mot Shiatsu signifie littéralement « pression des doigts
										». Cette pratique traditionnelle japonaise s’appuie sur des
										pressions exercées avec les pouces, les doigts et les
										paumes, associées à des étirements doux et des mobilisations
										adaptées.
									</p>
									<p>
										Dans la vision énergétique orientale, le corps est parcouru
										de lignes d’énergie appelées méridiens. Ces trajets relient
										différents points du corps et sont traditionnellement
										associés aux grands organes ainsi qu’aux systèmes corporels
										: respiration, digestion, circulation, élimination, repos ou
										équilibre émotionnel.
									</p>
									<p>
										Le praticien exerce des pressions ciblées le long de ces
										méridiens et sur certains points énergétiques. Cette approche
										vise à favoriser une circulation plus harmonieuse de
										l’énergie vitale, à libérer les zones où elle semble
										stagnante et à accompagner le corps dans ses capacités
										naturelles d’équilibre.
									</p>
									<p>
										Le Shiatsu considère la personne dans sa globalité : le corps
										physique, le souffle, l’état émotionnel, l’énergie et
										l’intériorité sont intimement liés. Il ne se limite donc pas
										à soulager une tension localisée ; il propose un moment de
										rééquilibrage global, adapté à votre rythme et à vos besoins.
									</p>
									<p>
										Entièrement manuel, le Shiatsu se pratique sans huile ni
										appareil. Chaque pression est ajustée avec précision afin
										d’offrir un soin profond, respectueux et agréable.
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
									Un moment de présence, de détente et de rééquilibrage
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Le Shiatsu se reçoit habillé, avec des vêtements souples et
									confortables. Selon les besoins, le soin peut être pratiqué au
									sol, sur un futon traditionnel, ou sur table.
								</p>
								<p>
									La séance commence par un temps d’écoute permettant de
									comprendre votre état du moment et votre intention : détente,
									récupération, apaisement du stress, besoin de relâcher le corps
									ou recherche d’un meilleur ancrage.
								</p>
								<p>
									Le praticien réalise ensuite des pressions lentes et
									progressives sur les méridiens, les points énergétiques et les
									zones de tension du corps. Des mobilisations articulaires, des
									étirements doux et un travail sur la respiration peuvent
									compléter la séance pour encourager la souplesse, le
									relâchement et une présence plus profonde à soi.
								</p>
								<p>
									Dans une atmosphère calme, confidentielle et bienveillante, le
									Shiatsu devient un temps de pause régénérante. Vous êtes invité
									à accueillir vos sensations, à déposer les tensions accumulées
									et à retrouver votre équilibre intérieur.
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
								Retrouver un équilibre physique, énergétique et intérieur
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Le Shiatsu est une pratique de bien-être complémentaire qui peut
								s’intégrer à une bonne hygiène de vie.
							</p>
						</div>
					</Reveal>

					<div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{benefits.map((benefit, index) => (
							<Reveal
								key={benefit}
								delay={index > 5 ? "lg" : index > 2 ? "md" : "sm"}
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

					<Reveal delay="sm">
						<p className="mx-auto mt-10 max-w-3xl text-center text-sm/6 text-muted">
							Le Shiatsu ne remplace pas un diagnostic, un traitement ou un
							suivi médical. Il s’inscrit comme une approche complémentaire de
							bien-être, centrée sur la prévention, l’écoute du corps et la
							recherche d’un équilibre global.
						</p>
					</Reveal>
				</div>
			</section>

			<ServiceBookingSection
				title="Deux formats selon votre besoin"
				description="Le Shiatsu est proposé sur rendez-vous."
				practitioner="Gaël"
				location="La Plaine Saint-Paul"
				items={[
					{ label: "1 heure", value: "70 €" },
					{ label: "1 heure 30", value: "90 €" },
				]}
				phoneLabel={bookingPhoneLabel}
				phoneHref={bookingPhoneHref}
				ctaLabel="Réservez ce soin"
				background="background"
			/>
		</main>
	)
}