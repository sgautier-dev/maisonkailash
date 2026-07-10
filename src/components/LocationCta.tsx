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
	phoneLabel = "Prendre RDV",
	phoneHref = "tel:+262692683073",
	secondaryLabel = "Contact & plan d'accès",
	secondaryHref = "/contact-acces/",
}: LocationCtaProps) {
	return (
		<section className="bg-background">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
				<div className="overflow-hidden rounded-panel border border-mk-saffron/35 bg-mk-saffron-soft shadow-soft">
					<div className="grid gap-0 lg:grid-cols-[1fr_0.8fr] lg:items-stretch">
						<Reveal>
							<div className="flex h-full flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
								<Icon
									aria-hidden="true"
									className="size-8 text-mk-saffron-text"
								/>
								<h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
									{title}
								</h2>
								<p className="mt-6 max-w-2xl text-lg/8 text-muted">
									{description}
								</p>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
									<a
										href={phoneHref}
										className="inline-flex items-center justify-center gap-2 rounded-pill bg-mk-green px-5 py-3 text-sm font-semibold text-white shadow-card hover:bg-mk-saffron hover:text-foreground"
									>
										<PhoneIcon aria-hidden="true" className="size-4" />
										{phoneLabel}
									</a>
									<Link
										href={secondaryHref}
										className="inline-flex items-center justify-center rounded-pill border border-mk-saffron/50 bg-white/60 px-5 py-3 text-sm font-semibold text-mk-saffron-text hover:bg-white"
									>
										{secondaryLabel}
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="h-full p-4 lg:p-5">
								<div className="media-frame h-full">
									<Image
										src={image}
										alt={imageAlt}
										sizes="(min-width: 1024px) 34vw, 100vw"
										className="aspect-4/3 w-full object-cover lg:h-full"
									/>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	)
}
