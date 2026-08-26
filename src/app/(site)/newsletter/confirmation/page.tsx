import { CheckCircleIcon } from "@heroicons/react/24/outline"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Inscription confirmée",
	description:
		"Votre inscription à la newsletter Maison Kailash est confirmée.",
	alternates: {
		canonical: "/newsletter/confirmation/",
	},
	robots: {
		index: false,
		follow: true,
	},
}

export default function NewsletterConfirmationPage() {
	return (
		<main>
			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="mx-auto max-w-2xl text-center">
						<div className="mx-auto flex size-16 items-center justify-center rounded-full bg-mk-mint/50 text-mk-green">
							<CheckCircleIcon
								aria-hidden="true"
								className="size-9"
							/>
						</div>

						<p className="eyebrow mt-8">Newsletter</p>

						<h1 className="heading-display mt-4 text-mk-green">
							Votre inscription est confirmée
						</h1>

						<p className="mt-6 text-lg/8 text-muted">
							Vous recevrez désormais les actualités, ateliers et prochains
							rendez-vous de Maison Kailash.
						</p>

						<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
							<Link
								href="/"
								className="btn-primary px-5 py-3 text-sm"
							>
								Retour à l&apos;accueil
							</Link>

							<Link
								href="/ateliers/"
								className="btn-secondary px-5 py-3 text-sm"
							>
								Découvrir les ateliers
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}