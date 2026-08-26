import type { MetadataRoute } from "next"

import {
	getRetreatNavigationLinks,
	getWorkshopNavigationLinks,
} from "@/sanity/queries"

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maisonkailash.com"

function absoluteUrl(path: string) {
	return new URL(path, siteUrl).toString()
}

const staticRoutes: MetadataRoute.Sitemap = [
	{
		url: absoluteUrl("/"),
		changeFrequency: "weekly",
		priority: 1,
	},
	{
		url: absoluteUrl("/bien-etre/"),
		changeFrequency: "monthly",
		priority: 0.9,
	},
	{
		url: absoluteUrl("/bien-etre/massage-ayurvedique/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/bien-etre/massage-ayurvedique-aux-pochons/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/bien-etre/massage-champissage-indien/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/bien-etre/massage-thai-a-l-huile/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/bien-etre/massage-suedois/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/bien-etre/reflexologie-plantaire/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/bien-etre/massage-prenatal/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/bien-etre/rebozo/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/sante/"),
		changeFrequency: "monthly",
		priority: 0.9,
	},
	{
		url: absoluteUrl("/sante/massage-ventral/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/sante/reiki/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/sante/soin-energetique-974/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/sante/shiatsu/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/sante/santeintegrative/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/sante/coaching-sante-holistique/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/cours-collectifs-reunion/"),
		changeFrequency: "weekly",
		priority: 0.9,
	},
	{
		url: absoluteUrl("/cours/vinyasa-yoga-reunion/"),
		changeFrequency: "weekly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/cours/tai-chi-reunion/"),
		changeFrequency: "weekly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/cours/meditation/"),
		changeFrequency: "weekly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/entreprises/"),
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{
		url: absoluteUrl("/ateliers/"),
		changeFrequency: "weekly",
		priority: 0.9,
	},
	{
		url: absoluteUrl("/sejours-bien-etre/"),
		changeFrequency: "weekly",
		priority: 0.9,
	},
	{
		url: absoluteUrl("/contact-acces/"),
		changeFrequency: "monthly",
		priority: 0.7,
	},
	{
		url: absoluteUrl("/about/"),
		changeFrequency: "yearly",
		priority: 0.3,
	},
	{
		url: absoluteUrl("/privacy/"),
		changeFrequency: "yearly",
		priority: 0.3,
	},
	{
		url: absoluteUrl("/sitemap/"),
		changeFrequency: "monthly",
		priority: 0.4,
	},
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const [workshopResult, retreatResult] = await Promise.allSettled([
		getWorkshopNavigationLinks(),
		getRetreatNavigationLinks(),
	])

	if (workshopResult.status === "rejected") {
		console.error(
			"Failed to load workshops for sitemap:",
			workshopResult.reason,
		)
	}

	if (retreatResult.status === "rejected") {
		console.error("Failed to load retreats for sitemap:", retreatResult.reason)
	}

	const workshopRoutes: MetadataRoute.Sitemap =
		workshopResult.status === "fulfilled"
			? workshopResult.value.map((workshop) => ({
					url: absoluteUrl(workshop.href),
					changeFrequency: "weekly",
					priority: 0.7,
				}))
			: []

	const retreatRoutes: MetadataRoute.Sitemap =
		retreatResult.status === "fulfilled"
			? retreatResult.value.map((retreat) => ({
					url: absoluteUrl(retreat.href),
					changeFrequency: "weekly",
					priority: 0.7,
				}))
			: []

	return [...staticRoutes, ...workshopRoutes, ...retreatRoutes]
}
