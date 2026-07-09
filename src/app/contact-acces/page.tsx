import type { ComponentType, SVGProps } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	ArrowTopRightOnSquareIcon,
	CalendarDaysIcon,
	HomeIcon,
	MapPinIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline"

import Reveal from "@/components/Reveal"
import accessImage from "@/images/acces-maison-kailash-eperon.jpg"
import logoKailash from "@/images/logo-kailash.png"

export const metadata: Metadata = {
	title: "Contact & accès Maison Kailash",
	description:
		"Adresse, téléphone, accès et prise de rendez-vous à Maison Kailash, centre bien-être et santé à l'Éperon, Saint-Gilles les Hauts.",
	alternates: {
		canonical: "/accueil/contact-acces/",
	},
}

type InfoCard = {
	title: string
	description: string
	href?: string
	linkLabel?: string
	icon: ComponentType<SVGProps<SVGSVGElement>>
}

const phoneHref = "tel:+262692683073"
const phoneLabel = "0692 68 30 73"

const mapsHref =
	"https://www.google.com/maps/search/?api=1&query=44%20Route%20de%20l%27%C3%89peron%2097435%20Saint-Gilles%20les%20Hauts%20La%20R%C3%A9union"

const infoCards: readonly InfoCard[] = [
	{
		title: "Téléphone",
		description: phoneLabel,
		href: phoneHref,
		linkLabel: "Appeler",
		icon: PhoneIcon,
	},
	{
		title: "Adresse",
		description: "44 Route de l'Éperon, 97435 Saint-Gilles les Hauts",
		href: mapsHref,
		linkLabel: "Ouvrir l'itinéraire",
		icon: MapPinIcon,
	},
	{
		title: "Accueil",
		description: "Uniquement sur rendez-vous, du lundi au samedi.",
		icon: CalendarDaysIcon,
	},
]

const accessSteps = [
	"Depuis la route des Tamarins, prenez la sortie Saint-Gilles les Hauts / L'Éperon / Le Maïdo.",
	"Suivez la direction Saint-Gilles les Hauts, puis traversez le secteur de l'Éperon.",
	"Passez la station Engen, la pharmacie de l'Éperon, l'église et Case Nature.",
	"Continuez en direction du Centhor jusqu'à l'arrêt de bus Tamatave et l'immeuble du 46 Éperon.",
	"Prenez le chemin à gauche qui longe l'immeuble. Maison Kailash se trouve derrière, près des palissades couleur teck.",
]

export default function ContactAccessPage() {
	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<Image
									src={logoKailash}
									alt="Maison Kailash"
									priority
									className="mb-8 size-32 object-contain sm:size-40"
								/>

								<p className="eyebrow">Contact & accès</p>
								<h1 className="heading-display mt-4 text-mk-green">
									Venir à Maison Kailash
								</h1>
								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									Maison Kailash vous accueille uniquement sur rendez-vous à
									l&apos;Éperon, Saint-Gilles les Hauts, dans l&apos;Ouest de La
									Réunion.
								</p>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<a href={phoneHref} className="btn-primary px-5 py-3 text-sm">
										Appeler Maison Kailash
									</a>
									<a
										href={mapsHref}
										target="_blank"
										rel="noopener noreferrer"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Ouvrir l&apos;itinéraire
									</a>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="media-frame">
								<Image
									src={accessImage}
									alt="Accès à Maison Kailash à l'Éperon"
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
					<div className="grid gap-6 md:grid-cols-3">
						{infoCards.map((item, index) => (
							<Reveal
								key={item.title}
								delay={index > 1 ? "lg" : index > 0 ? "md" : "sm"}
							>
								<div className="content-card h-full">
									<item.icon aria-hidden="true" className="size-7 text-mk-green" />
									<h2 className="mt-5 text-xl font-semibold text-foreground">
										{item.title}
									</h2>
									<p className="mt-3 text-base/7 text-muted">
										{item.description}
									</p>
									{item.href ? (
										<a
											href={item.href}
											target={item.href.startsWith("http") ? "_blank" : undefined}
											rel={
												item.href.startsWith("http")
													? "noopener noreferrer"
													: undefined
											}
											className="mt-5 inline-flex text-sm font-semibold text-mk-green hover:text-mk-saffron-text"
										>
											{item.linkLabel}
										</a>
									) : null}
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Accès</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Trouver le lieu facilement
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									Maison Kailash se situe derrière l&apos;immeuble du 46 Éperon.
									Les indications ci-dessous reprennent les repères pratiques
									pour arriver jusqu&apos;à l&apos;entrée.
								</p>

								<div className="mt-8">
									<a
										href={mapsHref}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-sm font-semibold text-mk-green hover:text-mk-saffron-text"
									>
										Ouvrir dans Google Maps
										<ArrowTopRightOnSquareIcon
											aria-hidden="true"
											className="size-4"
										/>
									</a>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="content-card">
								<ol className="space-y-5">
									{accessSteps.map((step, index) => (
										<li key={step} className="flex gap-4">
											<span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mk-mint/50 text-sm font-semibold text-mk-green">
												{index + 1}
											</span>
											<p className="pt-1 text-base/7 text-muted">{step}</p>
										</li>
									))}
								</ol>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
						<Reveal>
							<div className="media-frame">
								<Image
									src={accessImage}
									alt="Entrée de Maison Kailash à Saint-Gilles les Hauts"
									sizes="(min-width: 1024px) 42vw, 100vw"
									className="aspect-4/3 w-full object-cover"
								/>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="max-w-2xl">
								<p className="eyebrow">Rendez-vous</p>
								<h2 className="heading-section mt-2 text-foreground">
									Contactez-nous avant de vous déplacer
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									L&apos;accueil se fait uniquement sur rendez-vous. Pour une
									demande de massage, de soin, de bon cadeau ou d&apos;information
									pratique, le plus simple est de nous appeler directement.
								</p>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
									<a
										href={phoneHref}
										className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 text-sm"
									>
										<PhoneIcon aria-hidden="true" className="size-4" />
										{phoneLabel}
									</a>
									<Link href="/bien-etre/" className="btn-secondary px-5 py-3 text-sm">
										Voir les massages
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
						<div className="rounded-panel border border-mk-saffron/30 bg-mk-saffron-soft p-8 shadow-card sm:p-10">
							<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
								<div className="max-w-2xl">
									<HomeIcon
										aria-hidden="true"
										className="size-8 text-mk-saffron-text"
									/>
									<h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
										Formulaire de contact bientôt disponible
									</h2>
									<p className="mt-4 text-base/7 text-muted">
										Nous ajouterons ici un formulaire pour les demandes écrites.
										En attendant, privilégiez le téléphone pour les réservations
										et les informations urgentes.
									</p>
								</div>

								<a
									href={phoneHref}
									className="btn-primary shrink-0 px-5 py-3 text-sm"
								>
									Appeler Maison Kailash
								</a>
							</div>
						</div>
					</Reveal>
				</div>
			</section>
		</main>
	)
}