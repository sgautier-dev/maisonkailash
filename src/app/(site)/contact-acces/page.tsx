import type { ComponentType, SVGProps } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
	ArrowTopRightOnSquareIcon,
	CalendarDaysIcon,
	MapPinIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline"

import ContactForm from "@/components/ContactForm"
import Reveal from "@/components/Reveal"
import accessImage from "@/images/acces-maison-kailash-eperon.jpg"
import logoKailash from "@/images/logo-kailash.png"

export const metadata: Metadata = {
	title: "Contact & accès Maison Kailash",
	description:
		"Adresse, téléphone, accès et prise de rendez-vous à Maison Kailash, centre bien-être et santé à l'Éperon, Saint-Gilles les Hauts.",
	alternates: {
		canonical: "/contact-acces/",
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
	"https://www.google.com/maps/search/?api=1&query=Maison%20Kailash%20La%20R%C3%A9union"

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
		linkLabel: "Ouvrir dans Google Maps",
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
									<Link
										href="#formulaire"
										className="btn-primary px-5 py-3 text-sm"
									>
										Nous contacter
									</Link>
									<Link
										href="#acces"
										className="btn-secondary px-5 py-3 text-sm"
									>
										Voir l&apos;accès
									</Link>
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

			<ContactForm infoItems={infoCards} />

			<section
				id="acces"
				className="section-padding bg-background scroll-mt-16"
			>
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
		</main>
	)
}
