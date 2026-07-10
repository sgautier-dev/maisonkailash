import { defineQuery } from "next-sanity"
import type { PortableTextBlock } from "sanity"

import { client } from "./client"

export type ContentStatus = "open" | "full" | "past"

export type SanityImage = {
	asset?: {
		_ref: string
		_type: "reference"
	}
	alt?: string
}

export type TeacherProfile = {
	name: string
	role?: string
	image?: SanityImage
	bio?: PortableTextBlock[]
	links?: {
		label: string
		url: string
	}[]
}

type SchedulableContent = {
	status: ContentStatus
	startDate?: string
	isFeatured?: boolean
}

export type Workshop = SchedulableContent & {
	_id: string
	title: string
	slug: string
	category: string
	dateLabel?: string
	endDate?: string
	startTime?: string
	endTime?: string
	location?: string
	teacher?: string
	teacherProfile?: TeacherProfile
	excerpt: string
	mainImage?: SanityImage
	body?: PortableTextBlock[]
	price?: string
	bookingText?: string
	bookingPhone?: string
	bookingEmail?: string
	bookingUrl?: string
}

export type Retreat = SchedulableContent & {
	_id: string
	title: string
	slug: string
	destination: string
	location?: string
	level?: string
	dateLabel?: string
	endDate?: string
	teacher?: string
	teacherProfile?: TeacherProfile
	excerpt: string
	mainImage?: SanityImage
	gallery?: SanityImage[]
	body?: PortableTextBlock[]
	programItems?: string[]
	includedItems?: string[]
	requiredItems?: string[]
	price?: string
	deposit?: string
	bookingText?: string
	bookingPhone?: string
	bookingEmail?: string
	bookingUrl?: string
}

export type WorkshopNavigationLink = SchedulableContent & {
	title: string
	slug: string
}

export type RetreatNavigationLink = SchedulableContent & {
	title: string
	slug: string
}

const teacherProjection = `teacherProfile->{
	name,
	role,
	image,
	bio,
	links[]{
		label,
		url
	}
}`

const workshopsQuery = defineQuery(`*[
	_type == "workshop" &&
	isVisible == true &&
	status != "draft"
] {
	_id,
	title,
	"slug": slug.current,
	status,
	category,
	dateLabel,
	startDate,
	endDate,
	startTime,
	endTime,
	location,
	teacher,
	${teacherProjection},
	excerpt,
	mainImage,
	body,
	price,
	bookingText,
	bookingPhone,
	bookingEmail,
	bookingUrl,
	isFeatured
}`)

const workshopBySlugQuery = defineQuery(`*[
	_type == "workshop" &&
	isVisible == true &&
	status != "draft" &&
	slug.current == $slug
][0] {
	_id,
	title,
	"slug": slug.current,
	status,
	category,
	dateLabel,
	startDate,
	endDate,
	startTime,
	endTime,
	location,
	teacher,
	${teacherProjection},
	excerpt,
	mainImage,
	body,
	price,
	bookingText,
	bookingPhone,
	bookingEmail,
	bookingUrl,
	isFeatured
}`)

const retreatsQuery = defineQuery(`*[
	_type == "retreat" &&
	isVisible == true &&
	status != "draft"
] {
	_id,
	title,
	"slug": slug.current,
	status,
	destination,
	location,
	level,
	dateLabel,
	startDate,
	endDate,
	teacher,
	${teacherProjection},
	excerpt,
	mainImage,
	gallery,
	body,
	programItems,
	includedItems,
	requiredItems,
	price,
	deposit,
	bookingText,
	bookingPhone,
	bookingEmail,
	bookingUrl,
	isFeatured
}`)

const retreatBySlugQuery = defineQuery(`*[
	_type == "retreat" &&
	isVisible == true &&
	status != "draft" &&
	slug.current == $slug
][0] {
	_id,
	title,
	"slug": slug.current,
	status,
	destination,
	location,
	level,
	dateLabel,
	startDate,
	endDate,
	teacher,
	${teacherProjection},
	excerpt,
	mainImage,
	gallery,
	body,
	programItems,
	includedItems,
	requiredItems,
	price,
	deposit,
	bookingText,
	bookingPhone,
	bookingEmail,
	bookingUrl,
	isFeatured
}`)

const workshopNavigationQuery = defineQuery(`*[
	_type == "workshop" &&
	isVisible == true &&
	status != "draft"
] {
	title,
	"slug": slug.current,
	status,
	startDate,
	isFeatured
}`)

const retreatNavigationQuery = defineQuery(`*[
	_type == "retreat" &&
	isVisible == true &&
	status != "draft"
] {
	title,
	"slug": slug.current,
	status,
	startDate,
	isFeatured
}`)

export async function getWorkshops() {
	const workshops = await client.fetch<Workshop[]>(
		workshopsQuery,
		{},
		{ next: { revalidate: 60 } },
	)

	return sortSchedulableContent(workshops)
}

export async function getWorkshopBySlug(slug: string) {
	return client.fetch<Workshop | null>(
		workshopBySlugQuery,
		{ slug },
		{ next: { revalidate: 60 } },
	)
}

export async function getRetreats() {
	const retreats = await client.fetch<Retreat[]>(
		retreatsQuery,
		{},
		{ next: { revalidate: 60 } },
	)

	return sortSchedulableContent(retreats)
}

export async function getRetreatBySlug(slug: string) {
	return client.fetch<Retreat | null>(
		retreatBySlugQuery,
		{ slug },
		{ next: { revalidate: 60 } },
	)
}

export async function getWorkshopNavigationLinks() {
	const workshops = await client.fetch<WorkshopNavigationLink[]>(
		workshopNavigationQuery,
		{},
		{ next: { revalidate: 60 } },
	)

	return sortSchedulableContent(workshops).map((workshop) => ({
		name: workshop.title,
		href: `/ateliers/${workshop.slug}/`,
	}))
}

export async function getRetreatNavigationLinks() {
	const retreats = await client.fetch<RetreatNavigationLink[]>(
		retreatNavigationQuery,
		{},
		{ next: { revalidate: 60 } },
	)

	return sortSchedulableContent(retreats).map((retreat) => ({
		name: retreat.title,
		href: `/sejours-bien-etre/${retreat.slug}/`,
	}))
}

function sortSchedulableContent<T extends SchedulableContent>(items: T[]) {
	return [...items].sort((first, second) => {
		const firstIsPast = first.status === "past"
		const secondIsPast = second.status === "past"

		if (firstIsPast !== secondIsPast) {
			return firstIsPast ? 1 : -1
		}

		if (Boolean(first.isFeatured) !== Boolean(second.isFeatured)) {
			return (
				Number(Boolean(second.isFeatured)) - Number(Boolean(first.isFeatured))
			)
		}

		const firstDate = getDateTime(first.startDate)
		const secondDate = getDateTime(second.startDate)

		if (firstIsPast && secondIsPast) {
			return (secondDate ?? 0) - (firstDate ?? 0)
		}

		return (
			(firstDate ?? Number.MAX_SAFE_INTEGER) -
			(secondDate ?? Number.MAX_SAFE_INTEGER)
		)
	})
}

function getDateTime(value?: string) {
	if (!value) {
		return undefined
	}

	const time = new Date(value).getTime()

	return Number.isNaN(time) ? undefined : time
}
