import type { Metadata } from "next"

import TemporaryPage from "@/components/TemporaryPage"

export const metadata: Metadata = {
	title: "Hypnose et coaching en système nerveux",
	description:
		"Un accompagnement autour de l’hypnose et de la régulation du système nerveux à La Réunion.",
	alternates: {
		canonical: "/sante/hypnose-coaching-systeme-nerveux/",
	},
	robots: {
		index: false,
		follow: true,
	},
}

export default function HypnosisCoachingPage() {
	return (
		<TemporaryPage
			eyebrow="Accompagnement holistique"
			title="Hypnose et coaching en système nerveux"
			description="Un accompagnement destiné à soutenir la régulation du système nerveux et à retrouver davantage de sécurité intérieure."
			backHref="/sante/#soins"
			backLabel="Découvrir les accompagnements"
		/>
	)
}