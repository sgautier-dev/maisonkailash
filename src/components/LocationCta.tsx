import { MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid"
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

import Reveal from "@/components/Reveal"
import massageRoomImage from "@/images/massage-room.jpg"

type IconComponent = ForwardRefExoticComponent<
	Omit<SVGProps<SVGSVGElement>, "ref"> & {
		title?: string
		titleId?: string
	} & RefAttributes<SVGSVGElement>
>

type LocationCtaProps = {
	icon?: IconComponent
	title?: string
	description?: string
	image?: StaticImageData
	imageAlt?: string
	phoneLabel?: string
	phoneHref?: string
	secondaryLabel?: string
	secondaryHref?: string
}

export default function LocationCta({
	icon: Icon = MapPinIcon,
	title = "Maison Kailash vous accueille à l'Éperon",
	description = "À Saint-Gilles les Hauts, dans l'Ouest de La Réunion, sur rendez-vous du lundi au samedi.",
	image = massageRoomImage,
	imageAlt = "Salle de massage Maison Kailash à l'Éperon",
	phoneLabel = "0692 68 30 73",
	phoneHref = "tel:+262692683073",
	secondaryLabel = "Contact & plan d'accès",
	secondaryHref = "/accueil/contact-acces/",
}: LocationCtaProps) {
	return (
		<section className="bg-mk-green">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
					<Reveal>
						<div className="max-w-2xl">
							<Icon aria-hidden="true" className="size-8 text-white/80" />
							<h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
								{title}
							</h2>
							<p className="mt-6 text-lg/8 text-white/80">{description}</p>

							<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
								<a
									href={phoneHref}
									className="inline-flex items-center justify-center gap-2 rounded-pill bg-white px-5 py-3 text-sm font-semibold text-mk-green shadow-card hover:bg-mk-saffron-soft hover:text-mk-saffron-text"
								>
									<PhoneIcon aria-hidden="true" className="size-4" />
									{phoneLabel}
								</a>
								<Link
									href={secondaryHref}
									className="inline-flex items-center justify-center rounded-pill border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
								>
									{secondaryLabel}
								</Link>
							</div>
						</div>
					</Reveal>

					<Reveal delay="sm">
						<div className="overflow-hidden rounded-panel bg-white/10 shadow-soft ring-1 ring-white/20">
							<Image
								src={image}
								alt={imageAlt}
								sizes="(min-width: 1024px) 34vw, 100vw"
								className="aspect-4/3 w-full object-cover"
							/>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	)
}
