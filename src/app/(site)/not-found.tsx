import Link from "next/link"

export default function NotFound() {
	return (
		<main className="bg-background">
			<section className="section-padding">
				<div className="section-container">
					<div className="mx-auto max-w-2xl text-center">
						<p className="eyebrow">Page introuvable</p>
						<h1 className="heading-section mt-3 text-mk-green">
							Cette page est introuvable
						</h1>
						<p className="mt-6 text-lg/8 text-muted">
							Le contenu recherché a peut-être été déplacé lors de la refonte du
							site Maison Kailash, ou l&apos;adresse saisie contient une erreur.
						</p>

						<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
							<Link href="/" className="btn-primary px-5 py-3 text-sm">
								Retour à l&apos;accueil
							</Link>
							<Link
								href="/bien-etre/"
								className="btn-secondary px-5 py-3 text-sm"
							>
								Découvrir les soins
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
