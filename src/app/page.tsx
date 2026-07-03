import {
	GiftIcon,
	HeartIcon,
	MapPinIcon,
	SparklesIcon,
	SunIcon,
	UserGroupIcon,
} from "@heroicons/react/20/solid"
import Image from "next/image"
import Link from "next/link"

import Reveal from "@/components/Reveal"
import foundersKailash from "@/images/maison-kailash.png"
import homeHero from "@/images/home-hero.jpeg"
import yogaDeck from "@/images/yoga-deck-kailash.jpg"
import LocationCta from "@/components/LocationCta"

const services = [
	{
		name: "Massages bien-être",
		description:
			"Massages ayurvédiques, réflexologie plantaire, champissage, massage suédois ou thaï à l’huile.",
		href: "/bien-etre/",
		icon: HeartIcon,
	},
	{
		name: "Santé holistique",
		description:
			"Soins holistiques, médecines douces, shiatsu, reiki, massage ventral et accompagnements complémentaires.",
		href: "/sante/",
		icon: SparklesIcon,
	},
	{
		name: "Cours hebdomadaires",
		description:
			"Vinyasa Yoga, Tai Chi et méditation pour cultiver souffle, alignement, présence et mouvement.",
		href: "/cours-collectifs-reunion/",
		icon: SunIcon,
	},
	{
		name: "Ateliers & séjours",
		description:
			"Conférences, stages, ateliers et séjours bien-être pour approfondir votre pratique.",
		href: "/ateliers/",
		icon: UserGroupIcon,
	},
]

const testimonials = [
	{
		body: "Un lieu apaisant, accueillant, où l’on se sent tout de suite en confiance. Les soins sont profonds et très humains.",
		author: "Avis à remplacer",
	},
	{
		body: "Maison Kailash est devenu un repère pour prendre soin de moi, ralentir et retrouver de l’énergie.",
		author: "Avis à remplacer",
	},
	{
		body: "Une belle équipe, des pratiques variées et une vraie qualité d’écoute. Je recommande chaleureusement.",
		author: "Avis à remplacer",
	},
]

export default function HomePage() {
	return (
		<main>
			<section className="relative overflow-hidden bg-background">
				<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
					<div className="px-6 pt-14 pb-16 sm:pb-24 lg:col-span-7 lg:px-0 lg:pt-28 lg:pb-32 xl:col-span-6">
						<div className="mx-auto max-w-2xl lg:mx-0 hero-reveal">
							<p className="text-sm/6 font-semibold tracking-[0.18em] text-mk-saffron-text uppercase">
								L&apos;Éperon · Saint-Gilles les Hauts
							</p>

							<h1 className="heading-display mt-6 max-w-3xl text-mk-green">
								votre espace bien-être à la Réunion
							</h1>

							<p className="mt-8 max-w-xl text-lg/8 text-muted sm:text-xl/8">
								Les praticiens de notre espace de santé et de bien-être vous
								proposent différents massages bien-être et soins de santé
								holistique, sur rendez-vous à l&apos;Éperon.
							</p>

							<p className="mt-5 max-w-xl text-base/7 text-muted">
								Ils interviennent également en entreprises ou en collectivités
								lors de sessions de massages sur chaise.
							</p>

							<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
								<Link
									href="/bien-etre/"
									className="btn-primary px-5 py-3 text-sm"
								>
									Découvrir les soins
								</Link>
								<Link
									href="/accueil/contact-acces/"
									className="btn-secondary px-5 py-3 text-sm"
								>
									Contact & accès
								</Link>
							</div>
						</div>
					</div>

					<div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
						<Image
							src={homeHero}
							alt="Espace de soin Maison Kailash à La Réunion"
							priority
							className="aspect-3/2 w-full bg-surface object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full hero-image-reveal"
						/>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<Reveal>
						<div className="max-w-2xl">
							<p className="eyebrow">Services</p>
							<h2 className="heading-section mt-2 text-foreground">
								Une démarche de santé holistique
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Maison Kailash vous propose un panel de soins simple et cohérent
								: massages bien-être, soins holistiques, médecines douces, yoga,
								taichi, méditation, conférences, stages et séjours bien-être.
							</p>
						</div>
					</Reveal>

					<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{services.map((service, index) => (
							<Reveal
								key={service.href}
								delay={index > 2 ? "lg" : index > 0 ? "md" : "sm"}
							>
								<Link
									href={service.href}
									className="group block rounded-card bg-background p-6 shadow-card hover:-translate-y-1"
								>
									<service.icon
										aria-hidden="true"
										className="size-6 text-mk-green group-hover:text-mk-saffron-text"
									/>
									<h3 className="mt-5 font-semibold text-foreground group-hover:text-mk-green">
										{service.name}
									</h3>
									<p className="mt-3 text-sm/6 text-muted">
										{service.description}
									</p>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="relative bg-background">
				<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8">
					<Reveal className="px-6 pt-16 lg:px-0 lg:py-24">
						<Image
							src={foundersKailash}
							alt="L’équipe fondatrice de Maison Kailash"
							className="media-frame h-auto w-full object-contain"
						/>
					</Reveal>

					<Reveal delay="sm" className="px-6 py-16 sm:py-24 lg:px-0">
						<div className="mx-auto max-w-2xl lg:max-w-lg">
							<p className="eyebrow">À propos</p>
							<h2 className="heading-section mt-2 text-mk-green">
								Un espace associatif dédié au mieux-être
							</h2>
							<p className="mt-6 text-lg/8 text-muted">
								Né de la rencontre de praticiens bien-être et santé passionnés,
								Maison Kailash est une association réunionnaise et un espace
								bien-être dédié à vous accompagner sur la voie du mieux-être.
							</p>
							<p className="mt-6 text-base/7 text-muted">
								Nous vous accueillons à l&apos;Éperon, Saint-Gilles les Hauts,
								sur rendez-vous du lundi au samedi.
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<Reveal>
						<div className="max-w-3xl">
							<p className="eyebrow">Notre philosophie</p>
							<h2 className="heading-section mt-2 text-foreground">
								Offrir un service de qualité à dimension humaine
							</h2>
							<div className="mt-8 space-y-6 text-lg/8 text-muted">
								<p>
									Nous ne sommes pas un centre médical et nous ne remplacerons
									jamais les professionnels de santé.
								</p>
								<p>
									Nous espérons pouvoir vous donner l&apos;opportunité de
									découvrir des pratiques complémentaires qui seront autant
									d&apos;aides précieuses sur votre chemin vers le mieux-être.
								</p>
								<p>
									Chacun de nous prend soin de lui-même autant qu&apos;il
									prendra soin de vous, ainsi vous serez toujours accueilli et
									accompagné au mieux de nos capacités.
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="bg-background">
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
					<Reveal>
						<div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
							<div>
								<GiftIcon aria-hidden="true" className="size-8 text-mk-green" />

								<p className="mt-5 text-sm/7 font-semibold text-mk-saffron-text">
									Bons cadeaux
								</p>
								<h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
									Offrir un massage à Maison Kailash
								</h2>
								<p className="mt-4 max-w-2xl text-base/7 text-muted">
									Faites plaisir à vos proches, vos amis, vos collaborateurs ou
									vos clients en offrant un bon cadeau de massage.
								</p>
							</div>

							<Link
								href="/accueil/contact-acces/"
								className="btn-primary px-5 py-3 text-sm"
							>
								Demander un bon cadeau
							</Link>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">Cours hebdomadaires</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Venez découvrir nos cours hebdomadaires
								</h2>
								<div className="mt-8 space-y-5 text-base/7 text-muted">
									<p>
										Vous recherchez des pratiques physiques : Vinyasa Yoga,
										souffle et alignements.
									</p>
									<p>
										Ou peut-être des pratiques douces : Tai Chi et méditation.
									</p>
									<p>
										Les places sont limitées, réservez auprès de chaque
										intervenant.
									</p>
								</div>

								<div className="mt-10">
									<Link
										href="/cours-collectifs-reunion/"
										className="btn-primary px-5 py-3 text-sm"
									>
										Découvrir les cours
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={yogaDeck}
									alt="Cours de yoga sur le deck de Maison Kailash à La Réunion"
									sizes="(min-width: 1024px) 50vw, 100vw"
									className="aspect-3/2 w-full object-cover"
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<p className="eyebrow">Avis</p>
							<h2 className="heading-section mt-2 text-foreground">
								Ils parlent de Maison Kailash
							</h2>
						</div>
					</Reveal>

					<div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
						{testimonials.map((testimonial, index) => (
							<Reveal
								key={testimonial.body}
								delay={index > 1 ? "lg" : index > 0 ? "md" : "sm"}
							>
								<figure className="rounded-card bg-background p-6 shadow-card">
									<blockquote className="text-sm/6 text-foreground">
										<p>“{testimonial.body}”</p>
									</blockquote>
									<figcaption className="mt-6 text-sm font-semibold text-mk-green">
										{testimonial.author}
									</figcaption>
								</figure>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<LocationCta />
		</main>
	)
}
