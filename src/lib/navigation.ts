export type NavigationLink = {
	type?: "link"
	name: string
	href: string
	description?: string
}

export type NavigationGroup = {
	type: "group"
	name: string
	children: NavigationLink[]
}

export type NavigationChild = NavigationLink | NavigationGroup

export type NavigationSection = {
	name: string
	href: string
	children?: NavigationChild[]
}

export const mainNavigation: readonly NavigationSection[] = [
	{
		name: "Bien-être",
		href: "/bien-etre/",
		children: [
			{
				type: "group",
				name: "Massages ayurvédiques",
				children: [
					{
						name: "Massage ayurvédique Abhyanga",
						href: "/bien-etre/massage-ayurvedique/",
						description:
							"Un massage traditionnel à l’huile pour détoxifier le corps.",
					},
					{
						name: "Massage ayurvédique aux pochons",
						href: "/bien-etre/massage-ayurvedique-aux-pochons/",
						description: "Un soin enveloppant aux pochons chauds et plantes.",
					},
					{
						name: "Shiroabhyanga",
						href: "/bien-etre/shiroabhyanga/",
						description:
							"Massage ayurvédique de la tête pour apaiser le mental.",
					},
				],
			},
			{
				type: "group",
				name: "Massages relaxants & profonds",
				children: [
					{
						name: "Champissage indien",
						href: "/bien-etre/massage-champissage-indien/",
						description:
							"Massage crânien, nuque et épaules pour apaiser les tensions.",
					},
					{
						name: "Massage thaï à l'huile",
						href: "/bien-etre/massage-thai-a-l-huile/",
						description:
							"Un massage énergétique, étirements doux et détente profonde.",
					},
					{
						name: "Massage suédois",
						href: "/bien-etre/massage-suedois/",
						description: "Un massage profond pour détendre les muscles.",
					},
				],
			},
			{
				type: "group",
				name: "Accompagnements spécifiques",
				children: [
					{
						name: "Réflexologie plantaire",
						href: "/bien-etre/reflexologie-plantaire/",
						description:
							"Stimulation des zones réflexes pour soutenir l’équilibre global.",
					},
					{
						name: "Massage prénatal",
						href: "/bien-etre/massage-prenatal/",
						description: "Un accompagnement doux pendant la grossesse.",
					},
					{
						name: "Rebozo",
						href: "/bien-etre/rebozo/",
						description:
							"Un soin enveloppant pour accompagner les passages de vie.",
					},
				],
			},
		],
	},
	{
		name: "Santé",
		href: "/sante/",
		children: [
			{
				type: "group",
				name: "Soins corporels",
				children: [
					{
						name: "Massage ventral Chi Nei Tsang",
						href: "/sante/massage-ventral/",
						description:
							"Un soin ciblé autour du ventre, de la libération émotionnelle et des tensions internes.",
					},
					{
						name: "Shiatsu",
						href: "/sante/shiatsu/",
						description:
							"Pressions et rééquilibrage énergétique d’inspiration japonaise.",
					},
				],
			},
			{
				type: "group",
				name: "Soins énergétiques",
				children: [
					{
						name: "Reiki",
						href: "/sante/reiki/",
						description:
							"Soin énergétique d’harmonisation des chakras accompagné par les bols tibétains et les pierres.",
					},
					{
						name: "Soin énergétique",
						href: "/sante/soin-energetique-974/",
						description:
							"Un accompagnement subtil pour retrouver de l’harmonie.",
					},
				],
			},
			{
				type: "group",
				name: "Accompagnements holistiques",
				children: [
					{
						name: "Santé intégrative",
						href: "/sante/santeintegrative/",
						description:
							"Une approche globale du corps, de l’énergie et du mode de vie.",
					},
					{
						name: "Coaching santé holistique",
						href: "/sante/coaching-sante-holistique/",
						description:
							"Un accompagnement global pour soutenir votre vitalité.",
					},
					{
						name: "Hypnose et coaching en système nerveux",
						href: "/sante/hypnose-coaching-systeme-nerveux/",
						description:
							"Un accompagnement autour de la régulation du système nerveux.",
					},
				],
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
		],
	},
	{
		name: "Entreprises",
		href: "/entreprises/",
	},
	{
		name: "Ateliers",
		href: "/ateliers/",
		children: [
			{
				name: "Méditation - Yogi Ashokananda",
				href: "/ateliers/meditation-yogi-ashokananda/",
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
		],
	},
]

export const utilityNavigation: readonly NavigationLink[] = [
	{
		name: "Contact & accès",
		href: "/accueil/contact-acces/",
	},
]

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
}
