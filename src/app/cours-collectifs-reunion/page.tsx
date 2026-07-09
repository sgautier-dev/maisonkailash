import type { ComponentType, SVGProps } from "react"
import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import {
	CalendarDaysIcon,
	ClockIcon,
	MapPinIcon,
	TicketIcon,
	UserIcon,
} from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import taiChiImage from "@/images/taichi-kailash2.jpg"
import vinyasaImage from "@/images/vinyasa-yoga-kailash.jpg"
import yogaDeckImage from "@/images/yoga-deck-kailash.jpg"
import yogaHeroImage from "@/images/yoga-kailash.jpg"

export const metadata: Metadata = {
	title: "Cours collectifs yoga et Tai Chi à La Réunion",
	description:
		"Découvrez les cours collectifs proposés par Maison Kailash à La Réunion : Vinyasa Yoga avec Charlotte et Tai Chi avec Daniel.",
	alternates: {
		canonical: "/cours-collectifs-reunion/",
	},
}

type CourseDetail = {
	label: string
	value: string
	icon: ComponentType<SVGProps<SVGSVGElement>>
}

type Course = {
	title: string
	tag: string
	href: string
	description: string
	image: StaticImageData
	imageAlt: string
	details: readonly CourseDetail[]
}

const courses: readonly Course[] = [
	{
		title: "Vinyasa Yoga",
		tag: "Yoga dynamique",
		href: "/cours/vinyasa-yoga-reunion/",
		description:
			"Une pratique dynamique qui synchronise les postures à la respiration. Les séances sont progressives, accessibles à tous, et allient souffle, mouvement et méditation.",
		image: vinyasaImage,
		imageAlt: "Cours de Vinyasa Yoga à Maison Kailash",
		details: [
			{
				label: "Professeure",
				value: "Charlotte",
				icon: UserIcon,
			},
			{
				label: "Horaire",
				value: "Mercredi de 18h15 à 19h45",
				icon: CalendarDaysIcon,
			},
			{
				label: "Lieu",
				value: "Maison Kailash, Saint-Gilles les Hauts / Éperon",
				icon: MapPinIcon,
			},
			{
				label: "Durée",
				value: "1h30",
				icon: ClockIcon,
			},
			{
				label: "Tarifs",
				value:
					"15€ la séance · 120€ le carnet de 10 cours · 8€ la séance découverte",
				icon: TicketIcon,
			},
		],
	},
	{
		title: "Tai Chi",
		tag: "Art du mouvement",
		href: "/cours/tai-chi-reunion/",
		description:
			"Une gymnastique douce, pratique du souffle et relaxation en mouvement. Le Tai Chi développe la présence, la souplesse, l'équilibre et la circulation de l'énergie.",
		image: taiChiImage,
		imageAlt: "Cours de Tai Chi à La Réunion",
		details: [
			{
				label: "Professeur",
				value: "Daniel",
				icon: UserIcon,
			},
			{
				label: "Horaire",
				value: "Mardi à 17h",
				icon: CalendarDaysIcon,
			},
			{
				label: "Lieu",
				value: "La Saline les Bains",
				icon: MapPinIcon,
			},
			{
				label: "Durée",
				value: "1h30",
				icon: ClockIcon,
			},
			{
				label: "Tarif",
				value: "Gratuit",
				icon: TicketIcon,
			},
		],
	},
]

export default function CoursCollectifsPage() {
	return (
		<main>
			<section className="relative overflow-hidden bg-background">
				<div className="section-container">
					<div className="relative z-10 py-16 lg:w-full lg:max-w-2xl lg:py-28">
						<div
							aria-hidden="true"
							className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 bg-background [clip-path:polygon(0_0,90%_0,50%_100%,0_100%)] lg:block"
						/>

						<Reveal>
							<div className="relative max-w-2xl lg:max-w-xl">
								<p className="eyebrow">Cours collectifs</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Faire plaisir au corps, apaiser le mental
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Maison Kailash accueille des pratiques collectives pour
									cultiver le souffle, la présence, l&apos;alignement et le
									mouvement.
								</p>
								<p className="mt-5 text-base/7 text-muted">
									Pour cette première version du site, nous mettons en avant les
									cours réguliers de Vinyasa Yoga et de Tai Chi, avec les
									horaires et tarifs essentiels directement visibles.
								</p>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link href="#cours" className="btn-primary px-5 py-3 text-sm">
										Voir les cours
									</Link>
									<Link
										href="/contact-acces/"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Contact & accès
									</Link>
								</div>
							</div>
						</Reveal>
					</div>
				</div>

				<div className="bg-surface lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						src={yogaHeroImage}
						alt="Cours collectifs à Maison Kailash"
						sizes="(min-width: 1024px) 50vw, 100vw"
						className="aspect-3/2 w-full object-cover lg:aspect-auto lg:h-full"
						priority
					/>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<Reveal>
							<div>
								<p className="eyebrow">Pratiquer régulièrement</p>
								<h2 className="heading-section mt-2 text-foreground">
									Deux rendez-vous pour bouger, respirer et se recentrer
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Les cours collectifs de Maison Kailash invitent à prendre soin
									du corps dans la régularité. Le Vinyasa Yoga apporte une
									pratique dynamique et fluide, tandis que le Tai Chi développe
									la lenteur, l&apos;ancrage et la conscience du mouvement.
								</p>
								<p>
									Chaque cours est proposé sur réservation afin de préserver un
									cadre confortable et adapté au groupe.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section id="cours" className="section-padding bg-background">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Horaires & tarifs</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Les cours collectifs
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Les informations principales sont visibles ici. Les pages
								dédiées permettront ensuite de détailler chaque pratique.
							</p>
						</div>
					</Reveal>

					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
						{courses.map((course, index) => (
							<Reveal key={course.href} delay={index === 1 ? "md" : "sm"}>
								<article className="group h-full">
									<Link
										href={course.href}
										className="content-card flex h-full flex-col p-4 lg:p-0"
										aria-label={`Découvrir ${course.title}`}
									>
										<div className="flex gap-4 lg:block">
											<div className="order-2 h-24 w-24 shrink-0 overflow-hidden rounded-card bg-surface lg:order-none lg:h-auto lg:w-full lg:rounded-b-none lg:rounded-t-panel">
												<Image
													src={course.image}
													alt={course.imageAlt}
													sizes="(min-width: 1024px) 45vw, 96px"
													className="size-full object-cover transition duration-300 group-hover:scale-[1.03] lg:aspect-4/3 lg:w-full"
												/>
											</div>

											<div className="min-w-0 flex-1 lg:p-8 lg:pb-0">
												<p className="text-xs font-semibold tracking-[0.12em] text-mk-saffron-text uppercase">
													{course.tag}
												</p>
												<h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-mk-green lg:mt-3 lg:text-2xl">
													{course.title}
												</h3>
												<p className="mt-3 line-clamp-3 text-sm/6 text-muted lg:mt-4 lg:text-base/7">
													{course.description}
												</p>
											</div>
										</div>

										<dl className="mt-6 space-y-4 lg:px-8">
											{course.details.map((detail) => (
												<div key={detail.label} className="flex gap-3">
													<detail.icon
														aria-hidden="true"
														className="mt-0.5 size-5 shrink-0 text-mk-green"
													/>
													<div>
														<dt className="text-sm font-semibold text-foreground">
															{detail.label}
														</dt>
														<dd className="mt-0.5 text-sm/6 text-muted">
															{detail.value}
														</dd>
													</div>
												</div>
											))}
										</dl>

										<p className="mt-8 text-sm font-semibold text-mk-green group-hover:text-mk-saffron-text lg:px-8 lg:pb-8">
											Découvrir le cours
										</p>
									</Link>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
						<Reveal>
							<div>
								<p className="eyebrow">Sur réservation</p>
								<h2 className="heading-section mt-2 text-foreground">
									Un cadre simple pour pratiquer sereinement
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Les cours sont organisés en petits groupes, dans un esprit de
									pratique régulière, d&apos;écoute du corps et de respect du
									rythme de chacun.
								</p>
								<p className="mt-5 text-base/7 text-muted">
									Pour toute question sur le niveau, l&apos;inscription ou le
									lieu exact du cours, contactez Maison Kailash ou consultez la
									page détaillée de la pratique.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={yogaDeckImage}
									alt="Deck de yoga à Maison Kailash"
									sizes="(min-width: 1024px) 38vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<LocationCta />
		</main>
	)
}
