import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import champissageImage from "@/images/champissage-indien-kailash.jpeg"
import abhyangaImage from "@/images/massage-ayurvedique-abhyanga-kailash.jpg"
import pochonsImage from "@/images/massage-ayurvedique-pochons-kailash.jpg"
import shiroabhyangaImage from "@/images/massage-cranien-shiroabhyanga-kailash.jpg"
import prenatalImage from "@/images/massage-prenatal-kailash.jpg"
import massageRoomImage from "@/images/massage-room.jpg"
import swedishImage from "@/images/massage-suedois-kailash.jpg"
import thaiImage from "@/images/massage-thai-huile-kailash.jpg"
import duoImage from "@/images/massages-duo-kailash.png"
import reflexologyImage from "@/images/reflexologie-plantaire-kailash.jpg"
import ayurvedicAltImage from "@/images/massage-ayurvedique-kailash2.png"
import prenatalAltImage from "@/images/massage-prenatal-kailash2.jpg"
import thaiAltImage from "@/images/massage-thai-huile-kailash.png"

export const metadata: Metadata = {
	title: "Massages bien-être à La Réunion",
	description:
		"Découvrez les massages bien-être proposés par Maison Kailash à l'Éperon, Saint-Gilles les Hauts : ayurvédique, pochons, champissage, prénatal, suédois, thaï à l'huile et réflexologie plantaire.",
	alternates: {
		canonical: "/bien-etre/",
	},
}

type Massage = {
	title: string
	tag: string
	href: string
	description: string
	image: StaticImageData
	imageAlt: string
}

const massages: readonly Massage[] = [
	{
		title: "Massage ayurvédique Abhyanga",
		tag: "Massage à l'huile",
		href: "/bien-etre/massage-ayurvedique/",
		description:
			"Un massage traditionnel indien enveloppant, idéal pour relâcher les tensions, apaiser le mental et soutenir l'équilibre global.",
		image: abhyangaImage,
		imageAlt: "Massage ayurvédique Abhyanga à Maison Kailash",
	},
	{
		title: "Massage ayurvédique aux pochons",
		tag: "Chaleur & plantes",
		href: "/bien-etre/massage-ayurvedique-aux-pochons/",
		description:
			"Un soin profond et réconfortant associant massage à l'huile, chaleur et pochons pour dénouer le corps en douceur.",
		image: pochonsImage,
		imageAlt: "Massage ayurvédique aux pochons à Maison Kailash",
	},
	{
		title: "Massage crânien indien",
		tag: "Tête, nuque & épaules",
		href: "/bien-etre/massage-champissage-indien/",
		description:
			"Un massage ciblé du haut du corps pour apaiser les tensions de la nuque, des épaules, du cuir chevelu et du mental.",
		image: shiroabhyangaImage,
		imageAlt: "Massage crânien indien à Maison Kailash",
	},
	{
		title: "Massage prénatal",
		tag: "Grossesse",
		href: "/bien-etre/massage-prenatal/",
		description:
			"Un accompagnement doux et adapté pour aider la future maman à se détendre et à soulager les inconforts de la grossesse.",
		image: prenatalImage,
		imageAlt: "Massage prénatal à Maison Kailash",
	},
	{
		title: "Massage suédois",
		tag: "Détente musculaire",
		href: "/bien-etre/massage-suedois/",
		description:
			"Un massage profond et fluide, particulièrement adapté aux tensions musculaires, à la récupération et au relâchement.",
		image: swedishImage,
		imageAlt: "Massage suédois à Maison Kailash",
	},
	{
		title: "Massage thaï à l'huile",
		tag: "Fluidité & étirements",
		href: "/bien-etre/massage-thai-a-l-huile/",
		description:
			"Un soin harmonisant qui associe pressions, mobilisations douces et massage à l'huile pour libérer les tensions.",
		image: thaiImage,
		imageAlt: "Massage thaï à l'huile à Maison Kailash",
	},
	{
		title: "Réflexologie plantaire",
		tag: "Ancrage",
		href: "/bien-etre/reflexologie-plantaire/",
		description:
			"Une stimulation des zones réflexes du pied pour soutenir l'équilibre du corps, la détente et la circulation de l'énergie.",
		image: reflexologyImage,
		imageAlt: "Réflexologie plantaire à Maison Kailash",
	},
]

const heroImages = [
	{
		src: massageRoomImage,
		alt: "Salle de massage Maison Kailash",
		className: "aspect-2/3",
	},
	{
		src: ayurvedicAltImage,
		alt: "Massage ayurvédique à Maison Kailash",
		className: "aspect-2/3",
	},
	{
		src: prenatalAltImage,
		alt: "Massage prénatal à Maison Kailash",
		className: "aspect-3/4",
	},
	{
		src: champissageImage,
		alt: "Champissage indien à Maison Kailash",
		className: "aspect-2/3",
	},
	{
		src: thaiAltImage,
		alt: "Massage thaï à l'huile à Maison Kailash",
		className: "aspect-4/3",
	},
]

export default function BienEtrePage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Massages bien-être</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Prendre soin du corps, apaiser le mental
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									À Maison Kailash, chaque massage commence par un temps
									d&apos;échange afin d&apos;adapter le soin à votre état du
									moment, vos besoins et votre sensibilité.
								</p>
								<p className="mt-5 text-base/7 text-muted">
									Nos praticiens vous accueillent sur rendez-vous à
									l&apos;Éperon, Saint-Gilles les Hauts, pour des massages
									bien-être, relaxants, profonds ou enveloppants.
								</p>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link
										href="#massages"
										className="btn-primary px-5 py-3 text-sm"
									>
										Choisir un massage
									</Link>
									<Link
										href="/accueil/contact-acces/"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Demander conseil
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="grid grid-cols-3 gap-4 sm:gap-6">
								<div className="space-y-4 pt-12 sm:space-y-6">
									<div className="media-frame">
										<Image
											src={heroImages[0].src}
											alt={heroImages[0].alt}
											sizes="(min-width: 1024px) 18vw, 33vw"
											className={`${heroImages[0].className} w-full object-cover`}
											priority
										/>
									</div>
								</div>

								<div className="space-y-4 sm:space-y-6">
									{heroImages.slice(1, 3).map((image) => (
										<div key={image.alt} className="media-frame">
											<Image
												src={image.src}
												alt={image.alt}
												sizes="(min-width: 1024px) 18vw, 33vw"
												className={`${image.className} w-full object-cover`}
											/>
										</div>
									))}
								</div>

								<div className="space-y-4 pt-8 sm:space-y-6 sm:pt-16">
									{heroImages.slice(3).map((image) => (
										<div key={image.alt} className="media-frame">
											<Image
												src={image.src}
												alt={image.alt}
												sizes="(min-width: 1024px) 18vw, 33vw"
												className={`${image.className} w-full object-cover`}
											/>
										</div>
									))}
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<Reveal>
						<div className="max-w-3xl">
							<p className="eyebrow">Votre séance</p>
							<h2 className="heading-section mt-2 text-foreground">
								Un massage adapté à votre besoin du moment
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Avant chaque soin, nous prenons le temps d&apos;échanger avec
								vous. Ce temps d&apos;écoute permet d&apos;orienter la séance :
								détente globale, tensions musculaires, fatigue, grossesse,
								besoin d&apos;ancrage ou simplement envie de ralentir.
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			<section id="massages" className="section-padding bg-background">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Les soins</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Nos massages bien-être
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Découvrez les massages proposés à Maison Kailash et choisissez
								la pratique la plus adaptée à votre besoin.
							</p>
						</div>
					</Reveal>

					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{massages.map((massage, index) => (
							<Reveal
								key={massage.href}
								delay={index % 3 === 2 ? "lg" : index % 3 === 1 ? "md" : "sm"}
							>
								<article className="group flex h-full flex-col">
									<Link
										href={massage.href}
										className="media-frame relative block"
									>
										<Image
											src={massage.image}
											alt={massage.imageAlt}
											sizes="(min-width: 1024px) 33vw, 100vw"
											className="aspect-3/2 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
										/>
									</Link>

									<div className="mt-6 flex grow flex-col">
										<p className="text-xs font-semibold tracking-[0.12em] text-mk-saffron-text uppercase">
											{massage.tag}
										</p>
										<h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-mk-green">
											<Link href={massage.href}>{massage.title}</Link>
										</h3>
										<p className="mt-4 line-clamp-3 text-sm/6 text-muted">
											{massage.description}
										</p>
										<div className="mt-6">
											<Link href={massage.href} className="text-link text-sm">
												Découvrir le soin
											</Link>
										</div>
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
						<Reveal>
							<div className="media-frame">
								<Image
									src={duoImage}
									alt="Massages duo à Maison Kailash"
									sizes="(min-width: 1024px) 50vw, 100vw"
									className="aspect-3/2 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="max-w-2xl">
								<p className="eyebrow">À deux</p>
								<h2 className="heading-section mt-2 text-foreground">
									Massages duo et bons cadeaux
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Maison Kailash propose également des massages duo et des bons
									cadeaux pour offrir un moment de détente à vos proches, amis,
									collaborateurs ou clients.
								</p>
								<div className="mt-10">
									<Link
										href="/accueil/contact-acces/"
										className="btn-primary px-5 py-3 text-sm"
									>
										Demander un bon cadeau
									</Link>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-3xl text-center">
							<p className="eyebrow">Vous hésitez ?</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Nous vous aidons à choisir
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Si vous ne savez pas quel massage choisir, contactez-nous. Nous
								vous orienterons selon votre besoin du moment, vos contraintes
								et les disponibilités des praticiens.
							</p>
							<div className="mt-10">
								<Link
									href="/accueil/contact-acces/"
									className="btn-primary px-5 py-3 text-sm"
								>
									Demander conseil
								</Link>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<LocationCta />
		</main>
	)
}
