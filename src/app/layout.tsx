import type { Metadata } from "next"
import { Julius_Sans_One, Noto_Sans } from "next/font/google"

import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

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

export const metadata: Metadata = {
	metadataBase: new URL("https://www.maisonkailash.com"),
	title: {
		default: "Maison Kailash | Santé & bien-être à La Réunion",
		template: "%s | Maison Kailash",
	},
	description:
		"Maison Kailash est un espace de santé holistique et de bien-être à l'Éperon, Saint-Gilles les Hauts, à La Réunion.",
	applicationName: "Maison Kailash",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="fr"
			className={`${juliusSansOne.variable} ${notoSans.variable}`}
			data-scroll-behavior="smooth"
		>
			<body className="min-h-screen bg-background font-sans text-foreground antialiased">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
