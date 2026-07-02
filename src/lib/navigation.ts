export type NavigationItem = {
	name: string
	href: string
	description?: string
}

export type NavigationSection = {
	name: string
	href: string
	children?: NavigationItem[]
}

export const mainNavigation = [
	{
		name: "Bien-être",
		href: "/bien-etre/",
		children: [
			{
				name: "Massage ayurvédique Abhyanga",
				href: "/bien-etre/massage-ayurvedique/",
				description:
					"Un massage traditionnel à l’huile pour relâcher le corps.",
			},
			{
				name: "Massage ayurvédique aux pochons",
				href: "/bien-etre/massage-ayurvedique-aux-pochons/",
				description: "Un soin enveloppant aux pochons chauds et plantes.",
			},
			{
				name: "Champissage indien",
				href: "/bien-etre/massage-champissage-indien/",
				description:
					"Massage crânien, nuque et épaules pour apaiser les tensions.",
			},
			{
				name: "Massage prénatal",
				href: "/bien-etre/massage-prenatal/",
				description: "Un accompagnement doux pendant la grossesse.",
			},
			{
				name: "Massage suédois",
				href: "/bien-etre/massage-suedois/",
				description: "Un massage profond pour détendre les muscles.",
			},
			{
				name: "Massage thaï à l'huile",
				href: "/bien-etre/massage-thai-a-l-huile/",
				description: "Fluidité, étirements doux et relaxation profonde.",
			},
			{
				name: "Réflexologie plantaire",
				href: "/bien-etre/reflexologie-plantaire/",
				description:
					"Stimulation des zones réflexes pour soutenir l’équilibre global.",
			},
		],
	},
	{
		name: "Santé",
		href: "/sante/",
		children: [
			{
				name: "Santé intégrative",
				href: "/sante/santeintegrative/",
				description:
					"Une approche globale du corps, de l’énergie et du mode de vie.",
			},
			{
				name: "Massage ventral",
				href: "/sante/massage-ventral/",
				description: "Un soin ciblé autour du ventre et des tensions internes.",
			},
			{
				name: "Shiatsu",
				href: "/sante/shiatsu/",
				description:
					"Pressions et rééquilibrage énergétique d’inspiration japonaise.",
			},
			{
				name: "Soin énergétique",
				href: "/sante/soin-energetique-974/",
				description: "Un accompagnement subtil pour retrouver de l’harmonie.",
			},
			{
				name: "Reiki",
				href: "/sante/reiki/",
				description: "Soin énergétique par imposition des mains.",
			},
			{
				name: "Coaching santé holistique",
				href: "/sante/coaching-sante-holistique/",
				description: "Un accompagnement global pour soutenir votre vitalité.",
			},
		],
	},
	{
		name: "Cours",
		href: "/cours-collectifs-reunion/",
		children: [
			{
				name: "Vinyasa Yoga",
				href: "/cours/vinyasa-yoga-reunion/",
			},
			{
				name: "Tai Chi",
				href: "/cours/tai-chi-reunion/",
			},
			{
				name: "Méditation",
				href: "/cours/meditation/",
			},
		],
	},
	{
		name: "Ateliers",
		href: "/ateliers/",
		children: [
			{
				name: "Sangha - Yogi Ashokananda",
				href: "/ateliers/sangha-yogi-ashokananda/",
			},
			{
				name: "Méditation - Yogi Ashokananda",
				href: "/ateliers/meditation-yogi-ashokananda/",
			},
			{
				name: "Himalayan Hatha Yoga",
				href: "/ateliers/himalayan-hatha-yoga-yogi-ashokananda-et-concert-chants-dhrupad/",
			},
			{
				name: "Prana Kriya Yoga",
				href: "/ateliers/prana-kriya-yoga-yogi-ashokananda/",
			},
		],
	},
	{
		name: "Séjours",
		href: "/sejours-bien-etre/",
		children: [
			{
				name: "Cure ayurvédique en Inde",
				href: "/sejours-bien-etre/cure-ayurvedique-inde/",
			},
			{
				name: "Retraite Yogi Ashokananda",
				href: "/sejours-bien-etre/retraite-yogiashokananda/",
			},
		],
	},
] as const satisfies readonly NavigationSection[]

export const utilityNavigation = [
	{
		name: "Contact & accès",
		href: "/accueil/contact-acces/",
	},
] as const satisfies readonly NavigationItem[]

export const footerNavigation = {
	main: mainNavigation,
	utility: utilityNavigation,
	legal: [
		{
			name: "Mentions légales",
			href: "/about/",
		},
		{
			name: "Politique de confidentialité",
			href: "/privacy/",
		},
		{
			name: "Plan du site",
			href: "/sitemap/",
		},
	],
} as const
