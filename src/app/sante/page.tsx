import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import {
	HeartIcon,
	ShieldCheckIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline"

import LocationCta from "@/components/LocationCta"
import Reveal from "@/components/Reveal"
import chiNeiTsangImage from "@/images/massage-ventral-chi-nei-tsang-kailash.jpg"
import reikiImage from "@/images/reiki-kailash.jpg"
import reikiAltImage from "@/images/reiki-kailash2.png"
import integrativeHealthImage from "@/images/sante-integrative-kailash.png"
import integrativeHealthHeroImage from "@/images/sante-kailash.jpg"
import shiatsuImage from "@/images/shiatsu-kailash.jpg"
import shiatsuAltImage from "@/images/shiatsu-kailash2.jpg"
import energeticCareImage from "@/images/soin-energetique-kailash.jpg"

export const metadata: Metadata = {
	title: "Médecines douces et santé holistique à La Réunion",
	description:
		"Découvrez les accompagnements santé proposés par Maison Kailash à l'Éperon : Chi Nei Tsang, Reiki, soin énergétique, Shiatsu, santé intégrative, coaching holistique et hypnose.",
	alternates: {
		canonical: "/sante/",
	},
}

type Care = {
	title: string
	tag: string
	href: string
	description: string
	image: StaticImageData
	imageAlt: string
}

type Guidance = {
	name: string
	description: string
	icon: typeof HeartIcon
}

const cares: readonly Care[] = [
	{
		title: "Massage ventral Chi Nei Tsang",
		tag: "Ventre & émotions",
		href: "/sante/massage-ventral/",
		description:
			"Un massage abdominal doux et profond issu de la médecine taoïste, pour soutenir la détoxification des organes internes, la digestion, la vitalité et la libération émotionnelle.",
		image: chiNeiTsangImage,
		imageAlt: "Massage ventral Chi Nei Tsang à Maison Kailash",
	},
	{
		title: "Reiki",
		tag: "Chakras & bols tibétains",
		href: "/sante/reiki/",
		description:
			"Soin énergétique d’harmonisation des chakras accompagné par les bols tibétains et les pierres.",
		image: reikiImage,
		imageAlt: "Soin Reiki à Maison Kailash",
	},
	{
		title: "Soin énergétique",
		tag: "Équilibre intérieur",
		href: "/sante/soin-energetique-974/",
		description:
			"Un soin d'harmonisation des chakras et de rééquilibrage de l'énergie vitale, pour retrouver davantage de présence et de stabilité intérieure.",
		image: energeticCareImage,
		imageAlt: "Soin énergétique à Maison Kailash",
	},
	{
		title: "Shiatsu",
		tag: "Pressions japonaises",
		href: "/sante/shiatsu/",
		description:
			"Une technique manuelle d'origine japonaise basée sur la pression des doigts et des paumes pour relâcher les tensions et favoriser une détente profonde.",
		image: shiatsuImage,
		imageAlt: "Shiatsu à Maison Kailash",
	},
	{
		title: "Santé intégrative",
		tag: "Approche globale",
		href: "/sante/santeintegrative/",
		description:
			"Une approche mêlant la sagesse de médecines ancestrales et l'avancée de la médecine moderne, pour mieux comprendre le fonctionnement global de sa santé.",
		image: integrativeHealthImage,
		imageAlt: "Santé intégrative à Maison Kailash",
	},
	{
		title: "Coaching santé holistique",
		tag: "Accompagnement global",
		href: "/sante/coaching-sante-holistique/",
		description:
			"Un accompagnement global pour clarifier vos besoins, soutenir votre vitalité et avancer vers une hygiène de vie plus alignée.",
		image: integrativeHealthHeroImage,
		imageAlt: "Coaching santé holistique à Maison Kailash",
	},
	{
		title: "Hypnose et coaching en système nerveux",
		tag: "Régulation intérieure",
		href: "/sante/hypnose-coaching-systeme-nerveux/",
		description:
			"Un accompagnement autour de l'hypnose, du coaching et de la régulation du système nerveux pour retrouver davantage de sécurité intérieure.",
		image: reikiAltImage,
		imageAlt: "Hypnose et coaching en système nerveux à Maison Kailash",
	},
]

const guidance: readonly Guidance[] = [
	{
		name: "Corps, digestion et vitalité",
		description:
			"Le Chi Nei Tsang et le Shiatsu peuvent accompagner les tensions corporelles, la fatigue, la digestion et le besoin de relâchement profond.",
		icon: HeartIcon,
	},
	{
		name: "Énergie et équilibre intérieur",
		description:
			"Le Reiki et le soin énergétique s'adressent aux personnes qui recherchent un accompagnement plus subtil, centré sur l'apaisement et l'harmonisation.",
		icon: SparklesIcon,
	},
	{
		name: "Vision globale de la santé",
		description:
			"La santé intégrative aide à mieux comprendre les liens entre hygiène de vie, terrain, émotions, habitudes et équilibre global.",
		icon: ShieldCheckIcon,
	},
]

export default function SantePage() {
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
								<p className="eyebrow">Santé holistique</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Médecines douces et accompagnements globaux
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Maison Kailash propose des pratiques complémentaires pour
									prendre soin du corps, soutenir l&apos;énergie vitale et
									accompagner une meilleure compréhension de soi.
								</p>
								<p className="mt-5 text-base/7 text-muted">
									Soin ventral Chi Nei Tsang, Reiki ou soin énergétique,
									Shiatsu, santé intégrative, hypnose ou coaching : chaque
									accompagnement invite à revenir à une écoute plus fine du
									corps et de ses besoins.
								</p>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link href="#soins" className="btn-primary px-5 py-3 text-sm">
										Découvrir les soins
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
					</div>
				</div>

				<div className="bg-surface lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						src={integrativeHealthHeroImage}
						alt="Accompagnement santé holistique à Maison Kailash"
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
								<p className="eyebrow">Une approche complémentaire</p>
								<h2 className="heading-section mt-2 text-foreground">
									Relier le corps, l&apos;énergie et l&apos;hygiène de vie
								</h2>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="space-y-5 text-base/7 text-muted">
								<p>
									Les accompagnements Santé de Maison Kailash s&apos;inscrivent
									dans une vision globale de la personne. Ils peuvent soutenir
									la détente, la vitalité, la digestion, l&apos;équilibre
									émotionnel ou l&apos;écoute du corps selon les besoins de
									chacun.
								</p>
								<p>
									Ces pratiques ne remplacent pas un diagnostic, un traitement
									ou un suivi médical. Elles peuvent venir en complément, dans
									une démarche de prévention, de mieux-être et de responsabilité
									personnelle.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section id="soins" className="section-padding bg-background">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Les accompagnements</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Nos pratiques santé
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Chaque soin possède sa propre porte d&apos;entrée : le corps, le
								ventre, les pressions, l&apos;énergie ou l&apos;approche globale
								de la santé.
							</p>
						</div>
					</Reveal>

					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{cares.map((care, index) => (
							<Reveal
								key={care.href}
								delay={index % 3 === 2 ? "lg" : index % 3 === 1 ? "md" : "sm"}
							>
								<article className="group flex h-full flex-col">
									<Link href={care.href} className="flex h-full flex-col">
										<div className="media-frame relative">
											<Image
												src={care.image}
												alt={care.imageAlt}
												sizes="(min-width: 1024px) 33vw, 100vw"
												className="aspect-3/2 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
											/>
										</div>

										<div className="mt-6 flex grow flex-col">
											<p className="text-xs font-semibold tracking-[0.12em] text-mk-saffron-text uppercase">
												{care.tag}
											</p>
											<h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-mk-green">
												{care.title}
											</h3>
											<p className="mt-4 line-clamp-3 text-sm/6 text-muted">
												{care.description}
											</p>
											<p className="mt-6 text-sm font-semibold text-mk-green group-hover:text-mk-saffron-text">
												Découvrir l&apos;accompagnement
											</p>
										</div>
									</Link>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<Reveal>
							<div className="media-frame">
								<Image
									src={shiatsuAltImage}
									alt="Pratique corporelle douce à Maison Kailash"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div>
								<p className="eyebrow">Choisir son accompagnement</p>
								<h2 className="heading-section mt-2 text-foreground">
									Une porte d&apos;entrée selon votre besoin
								</h2>
								<div className="mt-10 grid gap-8">
									{guidance.map((item) => (
										<div key={item.name} className="flex gap-5">
											<div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mk-green text-white">
												<item.icon aria-hidden="true" className="size-6" />
											</div>
											<div>
												<h3 className="text-lg font-semibold text-foreground">
													{item.name}
												</h3>
												<p className="mt-2 text-base/7 text-muted">
													{item.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
						<Reveal>
							<div>
								<p className="eyebrow">Cadre des pratiques</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Un accompagnement complémentaire, jamais substitutif
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Les soins proposés à Maison Kailash accompagnent le mieux-être
									et la détente. Ils ne se substituent pas à une consultation
									médicale, à un diagnostic ou à un traitement prescrit.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="content-card">
								<Image
									src={reikiAltImage}
									alt="Soin Reiki à Maison Kailash"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full rounded-card object-cover"
								/>
								<p className="mt-6 text-base/7 text-muted">
									En cas de doute, de pathologie connue, de grossesse ou de
									traitement en cours, demandez l&apos;avis de votre médecin
									avant de réserver un accompagnement.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<LocationCta />
		</main>
	)
}
