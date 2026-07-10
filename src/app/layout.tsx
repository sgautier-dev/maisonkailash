import type { Metadata } from "next"
import { Julius_Sans_One, Noto_Sans } from "next/font/google"

import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { mainNavigation, type NavigationSection } from "@/lib/navigation"
import {
	getRetreatNavigationLinks,
	getWorkshopNavigationLinks,
} from "@/sanity/queries"

const juliusSansOne = Julius_Sans_One({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-heading",
	display: "swap",
})

const notoSans = Noto_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
})

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maisonkailash.com"

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Maison Kailash | Santé & bien-être à La Réunion",
		template: "%s | Maison Kailash",
	},
	description:
		"Maison Kailash est un espace de santé holistique et de bien-être à l'Éperon, Saint-Gilles les Hauts, à La Réunion.",
	applicationName: "Maison Kailash",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [workshopNavigationLinks, retreatNavigationLinks] = await Promise.all([
		getWorkshopNavigationLinks(),
		getRetreatNavigationLinks(),
	])

	const navigation = getNavigationWithSanityContent({
		workshopLinks: workshopNavigationLinks,
		retreatLinks: retreatNavigationLinks,
	})

	return (
		<html
			lang="fr"
			className={`${juliusSansOne.variable} ${notoSans.variable}`}
			data-scroll-behavior="smooth"
		>
			<body className="min-h-screen bg-background font-sans text-foreground antialiased">
				<Header navigation={navigation} />
				{children}
				<Footer />
			</body>
		</html>
	)
}

function getNavigationWithSanityContent({
	workshopLinks,
	retreatLinks,
}: {
	workshopLinks: { name: string; href: string }[]
	retreatLinks: { name: string; href: string }[]
}): readonly NavigationSection[] {
	return mainNavigation.map((section) => {
		if (section.href === "/ateliers/" && workshopLinks.length > 0) {
			return {
				...section,
				children: workshopLinks,
			}
		}

		if (section.href === "/sejours-bien-etre/" && retreatLinks.length > 0) {
			return {
				...section,
				children: retreatLinks,
			}
		}

		return section
	})
}
