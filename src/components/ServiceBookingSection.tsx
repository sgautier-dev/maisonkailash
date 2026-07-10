import type { ComponentType, SVGProps } from "react"
import {
	MapPinIcon,
	PhoneIcon,
	ClockIcon,
	UserIcon,
} from "@heroicons/react/24/solid"

import Reveal from "@/components/Reveal"

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

type BookingItem = {
	label: string
	value: string
	description?: string
	icon?: IconComponent
}

type ServiceBookingSectionProps = {
	id?: string
	eyebrow?: string
	title: string
	description: string
	practitioner?: string
	location?: string
	items: readonly BookingItem[]
	phoneLabel: string
	phoneHref: string
	ctaLabel: string
	ctaDescription?: string
	background?: "surface" | "background"
}

export default function ServiceBookingSection({
	id = "tarifs",
	eyebrow = "Tarifs & réservation",
	title,
	description,
	practitioner,
	location,
	items,
	phoneHref,
	ctaLabel,
	ctaDescription,
	background = "surface",
}: ServiceBookingSectionProps) {
	const sectionClassName =
		background === "surface"
			? "section-padding bg-surface"
			: "section-padding bg-background"

	return (
		<section id={id} className={sectionClassName}>
			<div className="section-container">
				<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
					<Reveal>
						<div>
							<p className="eyebrow">{eyebrow}</p>
							<h2 className="heading-section mt-2 text-mk-green">{title}</h2>
							<p className="mt-6 text-lg/8 text-muted">{description}</p>

							{practitioner || location ? (
								<div className="mt-8 flex flex-wrap gap-3">
									{practitioner ? (
										<div className="inline-flex items-center gap-2 rounded-pill bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-border">
											<UserIcon
												aria-hidden="true"
												className="size-4 shrink-0 text-mk-green"
											/>
											{practitioner}
										</div>
									) : null}

									{location ? (
										<div className="inline-flex items-center gap-2 rounded-pill bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-border">
											<MapPinIcon
												aria-hidden="true"
												className="size-4 shrink-0 text-mk-green"
											/>
											{location}
										</div>
									) : null}
								</div>
							) : null}
						</div>
					</Reveal>

					<Reveal delay="sm">
						<div className="grid gap-5">
							<div
								className={
									items.length === 1
										? "grid max-w-sm gap-5"
										: items.length === 2
											? "grid gap-5 sm:grid-cols-2"
											: "grid gap-5 sm:grid-cols-3"
								}
							>
								{items.map((item) => {
									const Icon = item.icon ?? ClockIcon

									return (
										<div
											key={`${item.label}-${item.value}`}
											className="content-card"
										>
											<Icon
												aria-hidden="true"
												className="size-7 text-mk-green"
											/>
											<h3 className="mt-5 text-lg font-semibold text-foreground">
												{item.label}
											</h3>
											<p className="mt-3 text-2xl font-semibold text-mk-green">
												{item.value}
											</p>
											{item.description ? (
												<p className="mt-3 text-sm/6 text-muted">
													{item.description}
												</p>
											) : null}
										</div>
									)
								})}
							</div>

							<div className="inline-flex w-fit max-w-full flex-col gap-4 rounded-card bg-mk-saffron-soft px-5 py-4 shadow-card sm:flex-row sm:items-center">
								<div className="flex items-center gap-3">
									<PhoneIcon
										aria-hidden="true"
										className="size-5 shrink-0 text-mk-saffron-text"
									/>
									<div>
										<h3 className="text-base font-semibold text-mk-saffron-text">
											{ctaLabel}
										</h3>
										{ctaDescription ? (
											<p className="mt-1 text-sm/6 text-mk-saffron-text/80">
												{ctaDescription}
											</p>
										) : null}
									</div>
								</div>

								<a
									href={phoneHref}
									className="btn-primary shrink-0 px-5 py-3 text-sm"
								>
									Prendre RDV
								</a>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	)
}
