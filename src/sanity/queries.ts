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
	location?: string
	teacher?: string
	excerpt: string
	mainImage?: SanityImage
	body?: PortableTextBlock[]
	price?: string
	bookingText?: string
	bookingPhone?: string
	bookingUrl?: string
}

export type Retreat = SchedulableContent & {
	_id: string
	title: string
	slug: string
	destination: string
	dateLabel?: string
	endDate?: string
	excerpt: string
	mainImage?: SanityImage
	body?: PortableTextBlock[]
	price?: string
	bookingText?: string
	bookingPhone?: string
	bookingUrl?: string
}

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
	location,
	teacher,
	excerpt,
	mainImage,
	body,
	price,
	bookingText,
	bookingPhone,
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
	location,
	teacher,
	excerpt,
	mainImage,
	body,
	price,
	bookingText,
	bookingPhone,
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
	dateLabel,
	startDate,
	endDate,
	excerpt,
	mainImage,
	body,
	price,
	bookingText,
	bookingPhone,
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
	dateLabel,
	startDate,
	endDate,
	excerpt,
	mainImage,
	body,
	price,
	bookingText,
	bookingPhone,
	bookingUrl,
	isFeatured
}`)

export async function getWorkshops() {
	const workshops = await client.fetch<Workshop[]>(
		workshopsQuery,
		{},
		{ next: { revalidate: 300 } },
	)

	return sortSchedulableContent(workshops)
}

export async function getWorkshopBySlug(slug: string) {
	return client.fetch<Workshop | null>(
		workshopBySlugQuery,
		{ slug },
		{ next: { revalidate: 300 } },
	)
}

export async function getRetreats() {
	const retreats = await client.fetch<Retreat[]>(
		retreatsQuery,
		{},
		{ next: { revalidate: 300 } },
	)

	return sortSchedulableContent(retreats)
}

export async function getRetreatBySlug(slug: string) {
	return client.fetch<Retreat | null>(
		retreatBySlugQuery,
		{ slug },
		{ next: { revalidate: 300 } },
	)
}

function sortSchedulableContent<T extends SchedulableContent>(items: T[]) {
	return [...items].sort((first, second) => {
		const firstIsPast = first.status === "past"
		const secondIsPast = second.status === "past"

		if (firstIsPast !== secondIsPast) {
			return firstIsPast ? 1 : -1
		}

		if (Boolean(first.isFeatured) !== Boolean(second.isFeatured)) {
			return Number(Boolean(second.isFeatured)) - Number(Boolean(first.isFeatured))
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