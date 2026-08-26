import type { Metadata } from "next"

import TemporaryPage from "@/components/TemporaryPage"

export const metadata: Metadata = {
	title: "Shiroabhyanga",
	description:
		"Massage ayurvédique de la tête pour apaiser le mental et relâcher les tensions.",
	alternates: {
		canonical: "/bien-etre/shiroabhyanga/",
	},
	robots: {
		index: false,
		follow: true,
	},
}

export default function ShiroabhyangaPage() {
	return (
		<TemporaryPage
			eyebrow="Massage ayurvédique"
			title="Shiroabhyanga"
			description="Un massage ayurvédique de la tête conçu pour apaiser le mental et favoriser une détente profonde."
			backHref="/bien-etre/#massages"
			backLabel="Découvrir les massages"
		/>
	)
}