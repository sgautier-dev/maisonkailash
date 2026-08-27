import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	trailingSlash: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},

	async redirects() {
		return [
			{
				source: "/accueil/contact-acc%C3%A8s/",
				destination: "/contact-acces/",
				statusCode: 301,
			},
			{
				source: "/accueil/contact-acces/",
				destination: "/contact-acces/",
				statusCode: 301,
			},
			{
				source: "/accueil/newsletter/",
				destination: "/#footer-newsletter",
				statusCode: 301,
			},
			{
				source: "/bien-etre/massage-ayurv%C3%A9dique-aux-pochons/",
				destination: "/bien-etre/massage-ayurvedique-aux-pochons/",
				statusCode: 301,
			},
			{
				source: "/bien-etre/massage-pr%C3%A9natal/",
				destination: "/bien-etre/massage-prenatal/",
				statusCode: 301,
			},
			{
				source: "/bien-etre/massage-thai-%C3%A0-l-huile/",
				destination: "/bien-etre/massage-thai-a-l-huile/",
				statusCode: 301,
			},
			{
				source: "/sante/coaching-sant%C3%A9-holistique/",
				destination: "/sante/coaching-sante-holistique/",
				statusCode: 301,
			},
			{
				source: "/ateliers/m%C3%A9ditation-yogi-ashokananda/",
				destination: "/ateliers/meditation-yogi-ashokananda/",
				statusCode: 301,
			},
			{
				source: "/sejours-bien-etre/retraite-yogiashokananda/",
				destination: "/sejours-bien-etre/retraite-yogi-ashokananda/",
				statusCode: 301,
			},
			{
				source: "/j/privacy",
				destination: "/privacy/",
				statusCode: 301,
			},
			{
				source: "/j/privacy/",
				destination: "/privacy/",
				statusCode: 301,
			},
			{
				source: "/vinyasa-yoga-reunion/",
				destination: "/cours/vinyasa-yoga-reunion/",
				statusCode: 301,
			},
		]
	},
}

export default nextConfig
