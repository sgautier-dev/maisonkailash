import type { ComponentType, SVGProps } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
	CalendarDaysIcon,
	CheckCircleIcon,
	CurrencyEuroIcon,
	EnvelopeIcon,
	GlobeAsiaAustraliaIcon,
	MapPinIcon,
	PhoneIcon,
	SparklesIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline"

import NewsletterSignup from "@/components/NewsletterSignup"
import Reveal from "@/components/Reveal"
import SanityPortableText from "@/components/SanityPortableText"
import sejourIndeImage from "@/images/sejour-inde.jpeg"
import { getEventDateLabel, getEventShortDateLabel } from "@/lib/eventDate"
import { urlForImage } from "@/sanity/image"
import { getRetreatBySlug } from "@/sanity/queries"

type RetreatPageProps = {
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
}: RetreatPageProps): Promise<Metadata> {
	const { slug } = await params
	const retreat = await getRetreatBySlug(slug)

	if (!retreat) {
		return {
			title: "Séjour introuvable",
		}
	}

	return {
		title: retreat.title,
		description: retreat.excerpt,
		alternates: {
			canonical: `/sejours-bien-etre/${retreat.slug}/`,
		},
		openGraph: {
			title: retreat.title,
			description: retreat.excerpt,
			type: "article",
		},
	}
}

export default async function RetreatPage({ params }: RetreatPageProps) {
	const { slug } = await params
	const retreat = await getRetreatBySlug(slug)

	if (!retreat) {
		notFound()
	}

	const dateLabel = getEventDateLabel(retreat)
	const shortDateLabel = getEventShortDateLabel(retreat)

	const heroImage = retreat.mainImage
		? urlForImage(retreat.mainImage).width(1200).auto("format").url()
		: sejourIndeImage

	const heroImageAlt = retreat.mainImage?.alt ?? retreat.title

	return (
		<main>
			<section className="overflow-hidden bg-background">
				<div className="section-container py-16 sm:py-24 lg:py-28">
					<div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
						<Reveal>
							<div className="max-w-2xl">
								<p className="eyebrow">
									{retreat.status === "past" ? "Archive séjour" : "Séjour"}
								</p>

								<h1 className="heading-display mt-4 text-mk-green">
									{retreat.title}
								</h1>

								<p className="mt-8 text-lg/8 text-muted sm:text-xl/8">
									{retreat.excerpt}
								</p>

								<div className="mt-8 flex flex-wrap gap-3">
									{shortDateLabel ? (
										<span className="rounded-pill bg-mk-saffron-soft px-4 py-2 text-sm font-semibold text-mk-saffron-text">
											{shortDateLabel}
										</span>
									) : null}

									<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
										{retreat.destination}
									</span>

									{retreat.teacher ? (
										<span className="rounded-pill bg-mk-mint/40 px-4 py-2 text-sm font-semibold text-mk-green">
											{retreat.teacher}
										</span>
									) : null}
								</div>

								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link
										href="/sejours-bien-etre/#sejours"
										className="btn-primary px-5 py-3 text-sm"
									>
										Retour aux séjours
									</Link>

									<Link
										href="#reservation"
										className="btn-secondary px-5 py-3 text-sm"
									>
										{retreat.status === "past"
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
										width={1200}
										height={900}
										priority
										sizes="(min-width: 1024px) 34rem, 88vw"
										className="max-h-136 w-auto max-w-full object-contain"
									/>

									{retreat.status === "past" ? (
										<span className="absolute left-0 top-6 rounded-r-full bg-mk-saffron px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-soft">
											Archive
										</span>
									) : null}

									{retreat.status === "full" ? (
										<span className="absolute left-0 top-6 rounded-r-full bg-mk-saffron px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-soft">
											Complet
										</span>
									) : null}
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{retreat.body && retreat.body.length > 0 ? (
				<section className="section-padding bg-surface">
					<div className="section-container">
						<div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
							<Reveal>
								<div>
									<p className="eyebrow">Présentation</p>
									<h2 className="heading-section mt-2 text-mk-green">
										À propos du séjour
									</h2>
								</div>
							</Reveal>

							<Reveal delay="sm">
								<SanityPortableText value={retreat.body} />
							</Reveal>
						</div>
					</div>
				</section>
			) : null}

			{hasListContent(retreat.programItems) ||
			hasListContent(retreat.includedItems) ||
			hasListContent(retreat.requiredItems) ? (
				<section className="section-padding bg-background">
					<div className="section-container">
						<div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
							<Reveal>
								<div>
									<p className="eyebrow">Programme</p>
									<h2 className="heading-section mt-2 text-mk-green">
										Ce que le séjour propose
									</h2>
									<p className="mt-6 text-lg/8 text-muted">
										Les grandes lignes du séjour sont résumées ici. Les détails
										peuvent être transmis sur demande selon le format proposé.
									</p>

									<div className="mt-8 grid gap-4">
										<CompactFeatureCard
											title="Inclus"
											items={retreat.includedItems}
											icon={CheckCircleIcon}
										/>

										<CompactFeatureCard
											title="À prévoir"
											items={retreat.requiredItems}
											icon={GlobeAsiaAustraliaIcon}
										/>
									</div>
								</div>
							</Reveal>

							<Reveal delay="sm">
								{hasListContent(retreat.programItems) ? (
									<FeatureList
										title="Programme"
										items={retreat.programItems}
										icon={SparklesIcon}
									/>
								) : (
									<div className="grid gap-6">
										<FeatureList
											title="Inclus"
											items={retreat.includedItems}
											icon={CheckCircleIcon}
										/>

										<FeatureList
											title="À prévoir"
											items={retreat.requiredItems}
											icon={GlobeAsiaAustraliaIcon}
										/>
									</div>
								)}
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
									{retreat.status === "past"
										? "Cette page conserve la mémoire du séjour. Il n’est plus ouvert à l’inscription."
										: "Retrouvez les informations principales pour participer ou réserver votre place."}
								</p>

								{retreat.bookingText ? (
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
													{retreat.bookingText}
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
									label="Destination"
									value={retreat.destination}
									icon={GlobeAsiaAustraliaIcon}
								/>

								<DetailCard
									label="Lieu"
									value={retreat.location}
									icon={MapPinIcon}
								/>

								<DetailCard
									label="Intervenant"
									value={retreat.teacher}
									icon={UserGroupIcon}
								/>

								<DetailCard
									label="Niveau"
									value={retreat.level}
									icon={SparklesIcon}
								/>

								<DetailCard
									label="Tarif"
									value={retreat.price}
									icon={CurrencyEuroIcon}
								/>

								<DetailCard
									label="Acompte"
									value={retreat.deposit}
									icon={CurrencyEuroIcon}
								/>

								<DetailCard
									label="Téléphone"
									value={retreat.bookingPhone}
									icon={PhoneIcon}
									href={getPhoneHref(retreat.bookingPhone)}
								/>

								<DetailCard
									label="Email"
									value={retreat.bookingEmail}
									icon={EnvelopeIcon}
									href={getEmailHref(retreat.bookingEmail)}
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{retreat.gallery && retreat.gallery.length > 0 ? (
				<section className="section-padding bg-surface">
					<div className="section-container">
						<Reveal>
							<div className="mx-auto max-w-2xl text-center">
								<p className="eyebrow">Images</p>
								<h2 className="heading-section mt-2 text-mk-green">
									Instantanés
								</h2>
							</div>
						</Reveal>

						<div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
							{retreat.gallery.map((image, index) => (
								<Reveal key={image.asset?._ref ?? index} delay="sm">
									<div className="media-frame">
										<Image
											src={urlForImage(image).width(900).auto("format").url()}
											alt={image.alt ?? retreat.title}
											width={900}
											height={675}
											sizes="(min-width: 1024px) 33vw, 100vw"
											className="aspect-4/3 w-full object-cover"
										/>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</section>
			) : null}

			{retreat.teacherProfile ? (
				<section className="section-padding bg-background">
					<div className="section-container">
						<div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
							<Reveal>
								<div>
									<p className="eyebrow">Intervenant</p>
									<h2 className="heading-section mt-2 text-mk-green">
										À propos de {retreat.teacherProfile.name}
									</h2>

									{retreat.teacherProfile.role ? (
										<p className="mt-6 text-lg/8 text-muted">
											{retreat.teacherProfile.role}
										</p>
									) : null}

									{retreat.teacherProfile.links &&
									retreat.teacherProfile.links.length > 0 ? (
										<div className="mt-8 flex flex-wrap gap-3">
											{retreat.teacherProfile.links.map((link) => (
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

									{retreat.teacherProfile.image ? (
										<div className="mt-10 max-w-md overflow-hidden rounded-panel bg-surface shadow-soft ring-1 ring-mk-green/10">
											<Image
												src={urlForImage(retreat.teacherProfile.image)
													.width(900)
													.auto("format")
													.url()}
												alt={
													retreat.teacherProfile.image.alt ??
													retreat.teacherProfile.name
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

							{retreat.teacherProfile.bio &&
							retreat.teacherProfile.bio.length > 0 ? (
								<Reveal delay="sm">
									<SanityPortableText value={retreat.teacherProfile.bio} />
								</Reveal>
							) : null}
						</div>
					</div>
				</section>
			) : null}

			{retreat.status === "past" ? (
				<section className="section-padding bg-surface">
					<div className="section-container">
						<Reveal>
							<div className="mx-auto max-w-3xl rounded-panel bg-background p-8 text-center shadow-card sm:p-10">
								<GlobeAsiaAustraliaIcon
									aria-hidden="true"
									className="mx-auto size-10 text-mk-green"
								/>
								<h2 className="mt-6 text-2xl font-semibold text-foreground">
									Recevoir les prochains séjours
								</h2>
								<p className="mt-4 text-base/7 text-muted">
									Inscrivez-vous à la newsletter Maison Kailash pour recevoir
									les annonces des prochains voyages, cures et retraites
									bien-être.
								</p>
								<div className="mt-8">
									<NewsletterSignup
										id={`${retreat.slug}-newsletter`}
										title="Inscription à la newsletter"
										description="Recevez les prochaines dates de séjours et retraites Maison Kailash."
									/>
								</div>
							</div>
						</Reveal>
					</div>
				</section>
			) : null}
		</main>
	)
}

function CompactFeatureCard({
	title,
	items,
	icon: Icon,
}: {
	title: string
	items?: string[]
	icon: ComponentType<SVGProps<SVGSVGElement>>
}) {
	if (!items || items.length === 0) {
		return null
	}

	return (
		<div className="rounded-card bg-surface p-5 shadow-soft ring-1 ring-border">
			<div className="flex items-center gap-3">
				<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-mk-mint/40 text-mk-green">
					<Icon aria-hidden="true" className="size-5" />
				</div>
				<h3 className="text-base font-semibold text-foreground">{title}</h3>
			</div>

			<ul className="mt-4 space-y-2 text-sm/6 text-muted">
				{items.map((item) => (
					<li key={item} className="flex gap-2">
						<span
							aria-hidden="true"
							className="mt-2 size-1.5 shrink-0 rounded-full bg-mk-green"
						/>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

function FeatureList({
	title,
	items,
	icon: Icon,
}: {
	title: string
	items?: string[]
	icon: ComponentType<SVGProps<SVGSVGElement>>
}) {
	if (!items || items.length === 0) {
		return null
	}

	return (
		<div className="content-card">
			<h3 className="text-xl font-semibold text-foreground">{title}</h3>
			<ul className="mt-6 space-y-4">
				{items.map((item) => (
					<li key={item} className="flex gap-3 text-base/7 text-muted">
						<Icon
							aria-hidden="true"
							className="mt-1 size-5 shrink-0 text-mk-green"
						/>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
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

function hasListContent(items?: string[]) {
	return Boolean(items && items.length > 0)
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
