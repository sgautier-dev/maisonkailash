import type { MetadataRoute } from "next"

const siteUrl = new URL(
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maisonkailash.com",
)

const productionHosts = new Set([
	"maisonkailash.com",
	"www.maisonkailash.com",
])

export default function robots(): MetadataRoute.Robots {
	const isProductionSite = productionHosts.has(siteUrl.hostname)

	if (!isProductionSite) {
		return {
			rules: {
				userAgent: "*",
				disallow: "/",
			},
		}
	}

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/studio/"],
		},
		sitemap: new URL("/sitemap.xml", siteUrl).toString(),
		host: siteUrl.origin,
	}
}