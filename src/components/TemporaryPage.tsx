import { ClockIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

type TemporaryPageProps = {
	eyebrow: string
	title: string
	description: string
	backHref: string
	backLabel: string
}

export default function TemporaryPage({
	eyebrow,
	title,
	description,
	backHref,
	backLabel,
}: TemporaryPageProps) {
	return (
		<main>
			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="mx-auto max-w-2xl text-center">
						<div className="mx-auto flex size-16 items-center justify-center rounded-full bg-mk-mint/50 text-mk-green">
							<ClockIcon aria-hidden="true" className="size-8" />
						</div>

						<p className="eyebrow mt-8">{eyebrow}</p>

						<h1 className="heading-display mt-4 text-mk-green">{title}</h1>

						<p className="mt-6 text-lg/8 text-muted">{description}</p>

						<p className="mt-4 text-base/7 text-muted">
							La présentation complète de cet accompagnement sera prochainement
							disponible.
						</p>

						<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
							<Link href={backHref} className="btn-primary px-5 py-3 text-sm">
								{backLabel}
							</Link>

							<Link
								href="/contact-acces/#formulaire"
								className="btn-secondary px-5 py-3 text-sm"
							>
								Nous contacter
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
