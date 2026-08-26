import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Mentions légales",
	description:
		"Mentions légales du site Maison Kailash, association de bien-être et santé à La Réunion.",
	alternates: {
		canonical: "/about/",
	},
}

const externalLinkClass =
	"font-medium text-mk-green underline decoration-mk-green/30 underline-offset-4 hover:text-mk-saffron-text"

export default function LegalNoticePage() {
	return (
		<main>
			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="mx-auto max-w-4xl">
						<p className="eyebrow">Informations légales</p>
						<h1 className="heading-display mt-4 text-mk-green">
							Mentions légales
						</h1>
						<p className="mt-8 max-w-3xl text-lg/8 text-muted">
							Les présentes mentions légales définissent les informations
							relatives à l’édition et au fonctionnement du site Maison Kailash.
						</p>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="mx-auto max-w-4xl space-y-8">
						<section className="content-card">
							<h2 className="text-xl font-semibold text-foreground">
								Éditeur du site
							</h2>

							<div className="mt-5 space-y-2 text-base/7 text-muted">
								<p>
									<strong className="font-semibold text-foreground">
										MAISON KAILASH
									</strong>
									<br />
									Association déclarée régie par la loi du 1er juillet 1901
								</p>

								<p>
									44-10 Route de l’Éperon
									<br />
									97435 Saint-Paul
									<br />
									La Réunion, France
								</p>

								<p>
									SIREN : 933 507 832
									<br />
									SIRET du siège : 933 507 832 00014
									<br />
									Identifiant RNA : W9R4003959
								</p>

								<p>
									Email :{" "}
									<a
										href="mailto:info@maisonkailash.com"
										className={externalLinkClass}
									>
										info@maisonkailash.com
									</a>
								</p>

								<p>
									Les autres coordonnées de l’association sont disponibles sur
									la{" "}
									<Link
										href="/contact-acces/"
										className={externalLinkClass}
									>
										page Contact & accès
									</Link>
									.
								</p>
							</div>
						</section>

						<section className="content-card">
							<h2 className="text-xl font-semibold text-foreground">
								Direction de la publication
							</h2>

							<p className="mt-5 text-base/7 text-muted">
								Le directeur de la publication est{" "}
								<strong className="font-semibold text-foreground">
									Sébastien Gautier
								</strong>
								, président de l’association Maison Kailash.
							</p>
						</section>

						<section className="content-card">
							<h2 className="text-xl font-semibold text-foreground">
								Conception et réalisation
							</h2>

							<p className="mt-5 text-base/7 text-muted">
								Le site a été conçu et réalisé par{" "}
								<a
									href="https://www.sgautier.dev/"
									target="_blank"
									rel="noopener noreferrer"
									className={externalLinkClass}
								>
									Sébastien Gautier
								</a>
								.
							</p>
						</section>

						<section className="content-card">
							<h2 className="text-xl font-semibold text-foreground">
								Hébergement
							</h2>

							<div className="mt-5 space-y-2 text-base/7 text-muted">
								<p>
									Ce site est hébergé par :
									<br />
									<strong className="font-semibold text-foreground">
										Vercel Inc.
									</strong>
									<br />
									440 N Barranca Avenue #4133
									<br />
									Covina, CA 91723
									<br />
									États-Unis
								</p>

								<p>
									Site :{" "}
									<a
										href="https://vercel.com/"
										target="_blank"
										rel="noopener noreferrer"
										className={externalLinkClass}
									>
										vercel.com
									</a>
								</p>
							</div>
						</section>

						<section className="content-card">
							<h2 className="text-xl font-semibold text-foreground">
								Association liée
							</h2>

							<div className="mt-5 space-y-3 text-base/7 text-muted">
								<p>
									<strong className="font-semibold text-foreground">
										MAISON KAILASH RÉUNION
									</strong>{" "}
									est une association juridiquement distincte, inscrite au
									Répertoire national des associations sous le numéro
									W9R4010005.
								</p>

								<p>
									Sauf mention contraire explicite, Maison Kailash Réunion
									n’est ni l’éditeur ni le responsable des traitements de
									données réalisés par le présent site.
								</p>
							</div>
						</section>

						<section className="content-card">
							<h2 className="text-xl font-semibold text-foreground">
								Propriété intellectuelle
							</h2>

							<div className="mt-5 space-y-4 text-base/7 text-muted">
								<p>
									Les contenus présents sur ce site, notamment les textes,
									photographies, éléments graphiques, logos et vidéos, sont
									protégés par le droit de la propriété intellectuelle.
								</p>

								<p>
									Sauf indication contraire, toute reproduction,
									représentation, modification, publication ou adaptation de
									tout ou partie du site est interdite sans autorisation écrite
									préalable de Maison Kailash ou du titulaire des droits
									concerné.
								</p>

								<p>
									Certaines photographies sont utilisées avec l’autorisation de
									leurs auteurs ou titulaires respectifs. Les crédits
									photographiques sont indiqués lorsqu’ils sont requis.
								</p>
							</div>
						</section>

						<section className="content-card">
							<h2 className="text-xl font-semibold text-foreground">
								Informations relatives à la santé
							</h2>

							<div className="mt-5 space-y-4 text-base/7 text-muted">
								<p>
									Les informations proposées sur ce site sont fournies à titre
									général et informatif. Elles ne constituent ni un diagnostic
									ni un avis médical et ne remplacent pas la consultation d’un
									professionnel de santé qualifié.
								</p>

								<p>
									Les massages, soins de bien-être et accompagnements présentés
									ne se substituent pas à un traitement ou à un suivi médical.
									En cas de doute ou de problème de santé, il appartient à
									chacun de demander l’avis de son médecin.
								</p>
							</div>
						</section>

						<section className="content-card">
							<h2 className="text-xl font-semibold text-foreground">
								Responsabilité
							</h2>

							<div className="mt-5 space-y-4 text-base/7 text-muted">
								<p>
									Maison Kailash veille à fournir des informations aussi
									exactes et actualisées que possible. L’association ne peut
									toutefois garantir l’absence d’erreurs, d’omissions ou
									d’indisponibilités temporaires.
								</p>

								<p>
									Les liens externes éventuellement présents sur le site sont
									fournis à titre informatif. Maison Kailash n’exerce aucun
									contrôle sur leur contenu et ne peut être tenue responsable
									des informations ou services proposés par ces sites tiers.
								</p>
							</div>
						</section>

						<section className="content-card">
							<h2 className="text-xl font-semibold text-foreground">
								Données personnelles
							</h2>

							<p className="mt-5 text-base/7 text-muted">
								Les modalités de collecte et de traitement des données
								personnelles sont détaillées dans notre{" "}
								<Link href="/privacy/" className={externalLinkClass}>
									politique de confidentialité
								</Link>
								.
							</p>
						</section>
					</div>
				</div>
			</section>
		</main>
	)
}