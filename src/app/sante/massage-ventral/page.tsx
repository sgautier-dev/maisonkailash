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
import chiNeiTsangImage from "@/images/massage-ventral-chi-nei-tsang-kailash.jpg"
import chiNeiTsangDetailImage from "@/images/massage-ventral-chi-nei-tsang-kailash2.png"

export const metadata: Metadata = {
	title: "Massage ventral Chi Nei Tsang à La Réunion",
	description:
		"Massage ventral Chi Nei Tsang à Maison Kailash, à l'Éperon : massage abdominal doux et profond pour digestion, vitalité, détoxification et libération émotionnelle.",
	alternates: {
		canonical: "/sante/massage-ventral/",
	},
}

const bookingPhoneHref = "tel:+262692683073"
const bookingPhoneLabel = "0692 68 30 73"

const benefits = [
	"Soutenir la détoxification des organes internes",
	"Stimuler la vitalité",
	"Améliorer la digestion et soulager les désordres intestinaux",
	"Diminuer certaines douleurs chroniques",
	"Libérer les blocages émotionnels",
	"Harmoniser les émotions et l'énergie du corps",
]

const contraindications = [
	"Grossesse",
	"Période de règles",
	"Fièvre",
	"Cancer ou pathologie lourde nécessitant un avis médical",
]

export default function MassageVentralPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Massage ventral</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Chi Nei Tsang
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un massage abdominal doux et profond issu de la médecine
									taoïste, pour soutenir la détoxification des organes internes,
									la digestion, la vitalité et la libération émotionnelle.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Ventre & émotions
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										1h ou 1h30-1h45
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
									src={chiNeiTsangImage}
									alt="Massage ventral Chi Nei Tsang à Maison Kailash"
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
									src={chiNeiTsangDetailImage}
									alt="Soin abdominal Chi Nei Tsang"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un soin ciblé autour du ventre et des tensions internes
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Le Chi Nei Tsang signifie littéralement “travailler
										l’énergie des organes internes”. Cette pratique est issue
										des traditions taoïstes chinoises.
									</p>
									<p>
										Elle cible la zone abdominale et les organes internes par un
										toucher doux et profond, afin d&apos;accompagner le
										relâchement des nœuds, des tensions et des mémoires
										émotionnelles.
									</p>
									<p>
										Le ventre, souvent appelé “deuxième cerveau”, peut porter
										les traces du stress, des émotions refoulées, des
										traumatismes ou d&apos;une hygiène de vie déséquilibrée.
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
									Un travail progressif et profondément à l&apos;écoute
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Le Chi Nei Tsang se reçoit habillé, allongé sur un tapis au
									sol ou sur table. Seule la zone du ventre est découverte.
								</p>
								<p>
									De l’huile végétale est appliquée sur le ventre. Le travail
									sur les tensions viscérales peut être intense sur le moment,
									mais une sensation profonde de bien-être et de détente est
									souvent ressentie ensuite.
								</p>
								<p>
									La respiration consciente et profonde accompagne la
									dissolution des tensions. Le soin se termine par des manœuvres
									d’ancrage et de relaxation pour réintégrer doucement
									l’ensemble du corps.
								</p>
								<p>
									Des pochons chauds aux herbes peuvent être utilisés en fin de
									séance pour détendre et apaiser les zones massées.
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
								Un soin du ventre pour la vitalité et l&apos;équilibre
								émotionnel
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

			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Précautions</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Quelques contre-indications à vérifier
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									En cas de doute, de pathologie connue ou de traitement en
									cours, demandez un avis médical avant de réserver.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<ul className="grid gap-4 sm:grid-cols-2">
								{contraindications.map((item) => (
									<li key={item} className="content-card text-sm/6 text-muted">
										{item}
									</li>
								))}
							</ul>
						</Reveal>
					</div>
				</div>
			</section>

			<section id="tarifs" className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Tarifs & réservation</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un soin profond, seul ou en accompagnement suivi
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Une seule séance peut déjà avoir un impact intéressant. Pour
									un travail plus profond, plusieurs séances rapprochées peuvent
									être recommandées.
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
											80 €
										</p>
									</div>
									<div className="content-card">
										<SparklesIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-xl font-semibold text-foreground">
											1h30 à 1h45
										</h3>
										<p className="mt-3 text-3xl font-semibold text-mk-green">
											110 €
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
