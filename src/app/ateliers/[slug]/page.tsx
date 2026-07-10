import type { ComponentType, SVGProps } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
	CalendarDaysIcon,
	CurrencyEuroIcon,
	EnvelopeIcon,
	MapPinIcon,
	PhoneIcon,
	SparklesIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline"

import Reveal from "@/components/Reveal"
import SanityPortableText from "@/components/SanityPortableText"
import atelierHeroImage from "@/images/atelier-kailash.jpg"
import { getEventDateLabel, getEventShortDateLabel } from "@/lib/eventDate"
import { urlForImage } from "@/sanity/image"
import { getWorkshopBySlug } from "@/sanity/queries"

type WorkshopPageProps = {
	params: Promise<{
		slug: string
	}>
}

type DetailCardProps = {
	label: string
	value?: string
	icon: ComponentType<SVGProps<SVGSVGElement>>
	href?: string
}

export async function generateMetadata({
	params,
}: WorkshopPageProps): Promise<Metadata> {
	const { slug } = await params
	const workshop = await getWorkshopBySlug(slug)

	if (!workshop) {
		return {
			title: "Atelier introuvable",
		}
	}

	return {
		title: workshop.title,
		description: workshop.excerpt,
		alternates: {
			canonical: `/ateliers/${workshop.slug}/`,
		},
		openGraph: {
			title: workshop.title,
			description: workshop.excerpt,
			type: "article",
		},
	}
}

export default async function WorkshopPage({ params }: WorkshopPageProps) {
	const { slug } = await params
	const workshop = await getWorkshopBySlug(slug)

	if (!workshop) {
		notFound()
	}

	const dateLabel = getEventDateLabel(workshop)
	const shortDateLabel = getEventShortDateLabel(workshop)

	const heroImage = workshop.mainImage
		? urlForImage(workshop.mainImage).width(1200).auto("format").url()
		: atelierHeroImage

	const heroImageAlt = workshop.mainImage?.alt ?? workshop.title

	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">
									{workshop.status === "past" ? "Archive atelier" : "Atelier"}
								</p>

								<h1 className="heading-display mt-4 text-mk-green">
									{workshop.title}
								</h1>

								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									{workshop.excerpt}
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									{shortDateLabel ? (
										<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
											{shortDateLabel}
										</span>
									) : null}

									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										{workshop.category}
									</span>

									{workshop.teacher ? (
										<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
											{workshop.teacher}
										</span>
									) : null}
								</div>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link
										href="/ateliers/#ateliers"
										className="btn-primary px-5 py-3 text-sm"
									>
										Retour aux ateliers
									</Link>

									<Link
										href="#reservation"
										className="btn-secondary px-5 py-3 text-sm"
									>
										{workshop.status === "past"
											? "Voir les détails"
											: "Voir les infos"}
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="flex justify-center lg:justify-end">
								<div className="relative overflow-hidden rounded-panel bg-surface shadow-soft ring-1 ring-mk-green/10">
									<Image
										src={heroImage}
										alt={heroImageAlt}
										width={900}
										height={1200}
										priority
										sizes="(min-width: 1024px) 24rem, 88vw"
										className="max-h-136 w-auto max-w-full object-contain"
									/>

									{workshop.status === "past" ? (
										<span className="absolute left-0 top-6 rounded-r-full bg-mk-saffron px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-soft">
											Archive
										</span>
									) : null}
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{workshop.body && workshop.body.length > 0 ? (
				<section className="section-padding bg-surface">
					<div className="section-container">
						<div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
							<Reveal>
								<div>
									<p className="eyebrow">Présentation</p>
									<h2 className="heading-section mt-2 text-mk-green">
										À propos de l’atelier
									</h2>
								</div>
							</Reveal>

							<Reveal delay="sm">
								<SanityPortableText value={workshop.body} />
							</Reveal>
						</div>
					</div>
				</section>
			) : null}

			<section id="reservation" className="section-padding bg-background">
				<div className="section-container">
					<div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
						<Reveal>
							<div>
								<p className="eyebrow">Informations</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Détails pratiques
								</h2>
								<p className="mt-6 text-lg/8 text-muted">
									{workshop.status === "past"
										? "Cette page conserve la mémoire de l’événement. L’atelier n’est plus ouvert à l’inscription."
										: "Retrouvez les informations principales pour participer ou réserver votre place."}
								</p>

								{workshop.bookingText ? (
									<div className="mt-8 overflow-hidden rounded-panel bg-mk-saffron-soft/70 shadow-soft ring-1 ring-mk-saffron/20">
										<div className="flex gap-4 p-5 sm:p-6">
											<div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/70 text-mk-saffron-text shadow-sm ring-1 ring-mk-saffron/15">
												<SparklesIcon aria-hidden="true" className="size-5" />
											</div>

											<div>
												<p className="text-sm font-semibold tracking-[0.12em] text-mk-saffron-text uppercase">
													À noter
												</p>
												<p className="mt-2 text-base/7 font-medium text-foreground">
													{workshop.bookingText}
												</p>
											</div>
										</div>
									</div>
								) : null}
							</div>
						</Reveal>

						<Reveal delay="sm">
							<div className="grid gap-5 sm:grid-cols-2">
								<DetailCard
									label="Date"
									value={dateLabel}
									icon={CalendarDaysIcon}
								/>

								<DetailCard
									label="Lieu"
									value={workshop.location}
									icon={MapPinIcon}
								/>

								<DetailCard
									label="Intervenant"
									value={workshop.teacher}
									icon={UserGroupIcon}
								/>

								<DetailCard
									label="Tarif"
									value={workshop.price}
									icon={CurrencyEuroIcon}
								/>

								<DetailCard
									label="Téléphone"
									value={workshop.bookingPhone}
									icon={PhoneIcon}
									href={getPhoneHref(workshop.bookingPhone)}
								/>

								<DetailCard
									label="Email"
									value={workshop.bookingEmail}
									icon={EnvelopeIcon}
									href={getEmailHref(workshop.bookingEmail)}
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{workshop.teacherProfile ? (
				<section className="section-padding bg-background">
					<div className="section-container">
						<div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
							<Reveal>
								<div>
									<p className="eyebrow">Intervenant</p>
									<h2 className="heading-section mt-2 text-mk-green">
										À propos de {workshop.teacherProfile.name}
									</h2>

									{workshop.teacherProfile.role ? (
										<p className="mt-6 text-lg/8 text-muted">
											{workshop.teacherProfile.role}
										</p>
									) : null}

									{workshop.teacherProfile.links &&
									workshop.teacherProfile.links.length > 0 ? (
										<div className="mt-8 flex flex-wrap gap-3">
											{workshop.teacherProfile.links.map((link) => (
												<a
													key={link.url}
													href={link.url}
													target="_blank"
													rel="noreferrer"
													className="btn-secondary px-4 py-2 text-sm"
												>
													{link.label}
												</a>
											))}
										</div>
									) : null}

									{workshop.teacherProfile.image ? (
										<div className="mt-10 max-w-md overflow-hidden rounded-panel bg-surface shadow-soft ring-1 ring-mk-green/10">
											<Image
												src={urlForImage(workshop.teacherProfile.image)
													.width(900)
													.auto("format")
													.url()}
												alt={
													workshop.teacherProfile.image.alt ??
													workshop.teacherProfile.name
												}
												width={900}
												height={560}
												sizes="(min-width: 1024px) 28rem, 90vw"
												className="h-auto w-full object-contain"
											/>
										</div>
									) : null}
								</div>
							</Reveal>

							{workshop.teacherProfile.bio &&
							workshop.teacherProfile.bio.length > 0 ? (
								<Reveal delay="sm">
									<SanityPortableText value={workshop.teacherProfile.bio} />
								</Reveal>
							) : null}
						</div>
					</div>
				</section>
			) : null}
		</main>
	)
}

function DetailCard({ label, value, icon: Icon, href }: DetailCardProps) {
	if (!value) {
		return null
	}

	const content = (
		<>
			<Icon aria-hidden="true" className="size-7 text-mk-green" />
			<h3 className="mt-5 text-lg font-semibold text-foreground">{label}</h3>
			<p className="mt-3 text-base/7 text-muted">{value}</p>
		</>
	)

	if (href) {
		return (
			<a
				href={href}
				className="content-card block transition duration-200 hover:-translate-y-0.5 hover:border-mk-saffron/30 hover:bg-mk-saffron-soft/40 hover:shadow-soft"
			>
				{content}
			</a>
		)
	}

	return <div className="content-card">{content}</div>
}

function getPhoneHref(phone?: string) {
	if (!phone) {
		return undefined
	}

	const normalizedPhone = phone.replace(/[^\d+]/g, "")

	return normalizedPhone ? `tel:${normalizedPhone}` : undefined
}

function getEmailHref(email?: string) {
	if (!email) {
		return undefined
	}

	return `mailto:${email}`
}
