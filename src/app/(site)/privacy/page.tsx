import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"

export const metadata: Metadata = {
	title: "Politique de confidentialité",
	description:
		"Politique de confidentialité et gestion des données personnelles du site Maison Kailash.",
	alternates: {
		canonical: "/privacy/",
	},
}

const linkClassName =
	"font-medium text-mk-green underline decoration-mk-green/30 underline-offset-4 hover:text-mk-saffron-text"

type PolicySectionProps = {
	title: string
	children: ReactNode
}

function PolicySection({ title, children }: PolicySectionProps) {
	return (
		<section className="content-card">
			<h2 className="text-xl font-semibold text-foreground">{title}</h2>
			<div className="mt-5 space-y-4 text-base/7 text-muted">{children}</div>
		</section>
	)
}

export default function PrivacyPolicyPage() {
	return (
		<main>
			<section className="section-padding bg-background">
				<div className="section-container">
					<div className="mx-auto max-w-4xl">
						<p className="eyebrow">Données personnelles</p>
						<h1 className="heading-display mt-4 text-mk-green">
							Politique de confidentialité
						</h1>
						<p className="mt-8 max-w-3xl text-lg/8 text-muted">
							Maison Kailash accorde une attention particulière à la
							confidentialité et à la protection des données personnelles
							collectées par l’intermédiaire de ce site.
						</p>
						<p className="mt-4 text-sm/6 text-muted">
							Dernière mise à jour : 26 août 2026
						</p>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="section-container">
					<div className="mx-auto max-w-4xl space-y-8">
						<PolicySection title="Responsable du traitement">
							<p>
								Le responsable du traitement des données collectées sur ce site
								est :
							</p>
							<p>
								<strong className="font-semibold text-foreground">
									Association Maison Kailash
								</strong>
								<br />
								44-10 Route de l’Éperon
								<br />
								97435 Saint-Paul, La Réunion
							</p>
							<p>
								Email :{" "}
								<a
									href="mailto:info@maisonkailash.com"
									className={linkClassName}
								>
									info@maisonkailash.com
								</a>
							</p>
							<p>
								Les informations juridiques complètes sont disponibles dans les{" "}
								<Link href="/about/" className={linkClassName}>
									mentions légales
								</Link>
								.
							</p>
						</PolicySection>

						<PolicySection title="Données collectées">
							<p>
								Les données collectées dépendent des services que vous utilisez
								sur le site.
							</p>

							<h3 className="font-semibold text-foreground">
								Formulaire de contact
							</h3>
							<ul className="list-disc space-y-1 pl-5">
								<li>prénom ;</li>
								<li>nom, lorsqu’il est renseigné ;</li>
								<li>adresse email ;</li>
								<li>numéro de téléphone, lorsqu’il est renseigné ;</li>
								<li>contenu du message.</li>
							</ul>

							<h3 className="font-semibold text-foreground">Newsletter</h3>
							<p>
								L’inscription à la newsletter nécessite uniquement une adresse
								email. Un mécanisme de double confirmation est utilisé afin de
								vérifier votre consentement.
							</p>

							<h3 className="font-semibold text-foreground">
								Données techniques et de sécurité
							</h3>
							<p>
								Des données techniques telles que l’adresse IP, les
								caractéristiques de la requête, la date et l’heure peuvent être
								traitées afin d’assurer le fonctionnement, la sécurité et la
								protection des formulaires contre les usages abusifs.
							</p>
						</PolicySection>

						<PolicySection title="Finalités et bases légales">
							<ul className="space-y-4">
								<li>
									<strong className="font-semibold text-foreground">
										Répondre aux demandes :
									</strong>{" "}
									traiter les messages, demandes d’information et prises de
									contact. Ce traitement repose sur votre demande et, selon son
									objet, sur l’exécution de mesures précontractuelles ou
									l’intérêt légitime de Maison Kailash à répondre aux
									sollicitations.
								</li>
								<li>
									<strong className="font-semibold text-foreground">
										Envoyer la newsletter :
									</strong>{" "}
									communiquer les actualités, ateliers, séjours et prochains
									rendez-vous de Maison Kailash. Ce traitement repose sur votre
									consentement.
								</li>
								<li>
									<strong className="font-semibold text-foreground">
										Sécuriser le site :
									</strong>{" "}
									détecter les robots, limiter les tentatives abusives et
									protéger les formulaires. Ce traitement repose sur l’intérêt
									légitime de Maison Kailash à sécuriser son site.
								</li>
								<li>
									<strong className="font-semibold text-foreground">
										Respecter les obligations légales :
									</strong>{" "}
									conserver certaines informations lorsque la loi l’exige.
								</li>
							</ul>
						</PolicySection>

						<PolicySection title="Caractère obligatoire des données">
							<p>
								Dans le formulaire de contact, le prénom, l’adresse email et le
								message sont obligatoires. Sans ces informations, Maison Kailash
								ne pourra pas traiter la demande.
							</p>
							<p>
								Le nom et le numéro de téléphone sont facultatifs. L’adresse
								email est obligatoire pour recevoir la newsletter.
							</p>
						</PolicySection>

						<PolicySection title="Destinataires et prestataires">
							<p>
								Les données sont accessibles uniquement aux personnes autorisées
								au sein de Maison Kailash et aux prestataires techniques
								nécessaires au fonctionnement du site :
							</p>
							<ul className="list-disc space-y-2 pl-5">
								<li>
									<strong className="font-semibold text-foreground">
										Vercel
									</strong>{" "}
									pour l’hébergement et le fonctionnement du site ;
								</li>
								<li>
									<strong className="font-semibold text-foreground">
										Resend
									</strong>{" "}
									pour l’acheminement des messages du formulaire de contact ;
								</li>
								<li>
									<strong className="font-semibold text-foreground">
										Brevo
									</strong>{" "}
									pour la gestion de la newsletter et du double opt-in ;
								</li>
								<li>
									<strong className="font-semibold text-foreground">
										Arcjet
									</strong>{" "}
									pour la protection du site contre les robots et les abus ;
								</li>
								<li>
									<strong className="font-semibold text-foreground">
										Sanity
									</strong>{" "}
									pour la gestion de certains contenus éditoriaux du site.
								</li>
							</ul>
							<p>
								Ces prestataires traitent les données uniquement dans le cadre
								des services fournis à Maison Kailash et selon leurs obligations
								contractuelles et réglementaires.
							</p>
						</PolicySection>

						<PolicySection title="Durées de conservation">
							<ul className="space-y-4">
								<li>
									<strong className="font-semibold text-foreground">
										Demandes de contact :
									</strong>{" "}
									les informations sont conservées pendant le temps nécessaire
									au traitement de la demande, puis au maximum trois ans après
									le dernier échange, sauf obligation légale ou nécessité de
									conserver certains éléments pour défendre un droit.
								</li>
								<li>
									<strong className="font-semibold text-foreground">
										Newsletter :
									</strong>{" "}
									l’adresse email est conservée jusqu’à la désinscription, au
									retrait du consentement ou, au plus tard, pendant trois ans
									après la dernière interaction avec Maison Kailash.
								</li>
								<li>
									<strong className="font-semibold text-foreground">
										Données techniques :
									</strong>{" "}
									elles sont conservées pendant une durée limitée, déterminée en
									fonction des besoins de sécurité et des paramètres des
									prestataires concernés.
								</li>
							</ul>
						</PolicySection>

						<PolicySection title="Transferts hors de l’Espace économique européen">
							<p>
								Certains prestataires techniques peuvent traiter ou héberger des
								données en dehors de l’Espace économique européen.
							</p>
							<p>
								Lorsqu’un tel transfert intervient, il doit reposer sur un
								mécanisme reconnu par la réglementation applicable, notamment
								une décision d’adéquation ou des clauses contractuelles types
								approuvées par la Commission européenne.
							</p>
						</PolicySection>

						<PolicySection title="Vos droits">
							<p>
								Conformément à la réglementation applicable, vous pouvez, selon
								la situation, exercer les droits suivants :
							</p>
							<ul className="list-disc space-y-1 pl-5">
								<li>droit d’accès à vos données ;</li>
								<li>droit de rectification ;</li>
								<li>droit à l’effacement ;</li>
								<li>droit à la limitation du traitement ;</li>
								<li>droit d’opposition ;</li>
								<li>droit à la portabilité ;</li>
								<li>droit de retirer votre consentement à tout moment.</li>
							</ul>
							<p>
								Vous pouvez exercer vos droits en écrivant à{" "}
								<a
									href="mailto:info@maisonkailash.com"
									className={linkClassName}
								>
									info@maisonkailash.com
								</a>
								. Une preuve d’identité pourra être demandée uniquement en cas
								de doute raisonnable sur votre identité.
							</p>
							<p>
								Vous pouvez également introduire une réclamation auprès de la{" "}
								<a
									href="https://www.cnil.fr/"
									target="_blank"
									rel="noopener noreferrer"
									className={linkClassName}
								>
									Commission nationale de l’informatique et des libertés
								</a>
								.
							</p>
						</PolicySection>

						<PolicySection title="Newsletter et désinscription">
							<p>
								L’inscription à la newsletter n’est effective qu’après
								confirmation au moyen du lien reçu par email.
							</p>
							<p>
								Vous pouvez retirer votre consentement à tout moment en
								utilisant le lien de désinscription présent dans chaque
								newsletter. Ce retrait ne remet pas en cause la licéité des
								traitements réalisés avant la désinscription.
							</p>
						</PolicySection>

						<PolicySection title="Cookies et traceurs">
							<p>
								Le site public n’utilise actuellement aucun cookie publicitaire,
								aucun outil de profilage et aucun outil de mesure d’audience
								nécessitant votre consentement.
							</p>
							<p>
								Des informations ou traceurs strictement nécessaires peuvent
								être utilisés pour assurer le fonctionnement, la sécurité et
								l’administration technique du site. Ils ne sont pas utilisés à
								des fins publicitaires.
							</p>
							<p>
								Si des outils nécessitant un consentement préalable sont ajoutés
								ultérieurement, cette politique sera mise à jour et un
								dispositif de recueil du consentement sera mis en place.
							</p>
						</PolicySection>

						<PolicySection title="Mise à jour de la politique">
							<p>
								Cette politique peut être modifiée afin de tenir compte des
								évolutions du site, des services utilisés ou de la
								réglementation. La date de la dernière mise à jour est indiquée
								en haut de cette page.
							</p>
						</PolicySection>
					</div>
				</div>
			</section>
		</main>
	)
}
