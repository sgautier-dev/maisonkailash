import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { mainNavigation, type NavigationSection } from "@/lib/navigation"
import {
	getRetreatNavigationLinks,
	getWorkshopNavigationLinks,
} from "@/sanity/queries"

export default async function SiteLayout({
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
		<>
			<Header navigation={navigation} />
			{children}
			<Footer />
		</>
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
