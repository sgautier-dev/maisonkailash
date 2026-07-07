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
import coachingImage from "@/images/sante-holistique-kailash.jpg"
import coachingDetailImage from "@/images/sante-holistique-kailash2.jpg"

export const metadata: Metadata = {
	title: "Coaching santé holistique à La Réunion",
	description:
		"Coaching santé holistique à Maison Kailash, à l'Éperon : accompagnement global autour de la nutrition, du stress, du sommeil, de la vitalité et du mieux-être.",
	alternates: {
		canonical: "/sante/coaching-sante-holistique/",
	},
}

const bookingPhoneHref = "tel:+262692086166"
const bookingPhoneLabel = "06 92 08 61 66"

const specialties = [
	"SPM et ménopause",
	"Bien-être digestif",
	"Intolérances alimentaires",
	"Stress et sommeil",
	"Poids et peau",
	"Énergie et immunité",
]

const goals = [
	"Être en bonne santé",
	"S'épanouir",
	"Améliorer votre bien-être et votre quotidien",
	"Retrouver confiance en vous",
	"Trouver un nouvel équilibre de vie",
	"Déborder de vitalité",
]

export default function CoachingSanteHolistiquePage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Coaching santé</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Coaching santé holistique
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Un accompagnement global pour clarifier vos besoins, soutenir
									votre vitalité et avancer vers une hygiène de vie plus
									alignée.
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
										Santé globale
									</span>
									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										1h30
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
										Réserver avec Delphine
									</a>
									<Link
										href="#tarifs"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Voir les infos pratiques
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={coachingImage}
									alt="Coaching santé holistique à Maison Kailash"
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
									src={coachingDetailImage}
									alt="Accompagnement en santé holistique"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm" className="order-1 lg:order-2">
							<div className="max-w-2xl">
								<p className="eyebrow">Qu&apos;est-ce que c&apos;est ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un accompagnement vers des changements durables
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Un coach de santé est un guide qui vous responsabilise, vous
										apporte un soutien et vous aide à fixer vos objectifs pour
										mettre en place des changements durables.
									</p>
									<p>
										L&apos;accompagnement peut explorer la nutrition, la santé,
										le yoga et d&apos;autres techniques complémentaires pour
										identifier ce qui fonctionne réellement pour vous.
									</p>
									<p>
										Il ne s&apos;agit pas seulement de bien manger ou
										d&apos;être mince, mais de nourrir l&apos;ensemble de votre
										être : corps, esprit, énergie et équilibre intérieur.
									</p>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Spécialités</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Des thématiques concrètes du quotidien
							</h2>
						</div>
					</Reveal>

					<div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{specialties.map((specialty, index) => (
							<Reveal
								key={specialty}
								delay={index > 3 ? "lg" : index > 1 ? "md" : "sm"}
							>
								<div className="content-card flex h-full gap-4">
									<CheckCircleIcon
										aria-hidden="true"
										className="mt-1 size-6 shrink-0 text-mk-green"
									/>
									<p className="text-base/7 font-semibold text-foreground">
										{specialty}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Pourquoi consulter ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Retrouver un équilibre de vie plus adapté
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="grid gap-4 sm:grid-cols-2">
								{goals.map((goal) => (
									<div
										key={goal}
										className="content-card text-base/7 text-muted"
									>
										{goal}
									</div>
								))}
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
								<p className="eyebrow">Pour qui ?</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un accompagnement pour les personnes qui veulent agir
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Cet accompagnement s&apos;adresse aux personnes qui souhaitent
									apprendre à manger plus sainement, faire une détox, gérer le
									stress, la nervosité ou l&apos;insomnie.
								</p>
								<p>
									Il peut aussi soutenir les personnes qui souhaitent retrouver
									un confort intestinal, une bonne digestion, libérer une
									fatigue passagère ou chronique, ou booster leur énergie.
								</p>
								<p>
									Delphine accompagne également les problématiques hormonales,
									notamment autour de la ménopause, avec une approche complète
									et adaptée.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section id="tarifs" className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Infos pratiques</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Première séance d&apos;une heure trente
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Le coaching santé holistique est proposé sur rendez-vous avec
									Delphine.
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
											Première séance
										</h3>
										<p className="mt-3 text-3xl font-semibold text-mk-green">
											1h30
										</p>
									</div>
									<div className="content-card">
										<SparklesIcon
											aria-hidden="true"
											className="size-7 text-mk-green"
										/>
										<h3 className="mt-5 text-xl font-semibold text-foreground">
											Tarif
										</h3>
										<p className="mt-3 text-3xl font-semibold text-mk-green">
											80 € à 100 €
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
												Réserver avec Delphine
											</h3>
											<p className="mt-1 text-base/7 text-mk-saffron-text/80">
												Contactez Delphine pour organiser une première séance.
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
