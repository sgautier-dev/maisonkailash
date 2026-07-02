import type { ComponentProps } from "react"
import { PhoneIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import Link from "next/link"

import logoKailash from "@/images/logo-kailash.png"
import { footerNavigation } from "@/lib/navigation"

const socialNavigation = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/maisonkailash",
		icon: (props: ComponentProps<"svg">) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/maisonkailash/",
		icon: (props: ComponentProps<"svg">) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
]

export default function Footer() {
	return (
		<footer className="border-t border-mk-green/15 bg-chrome">
			<div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-[1fr_1fr_1.2fr_0.8fr]">
					<div>
						<Link href="/" className="inline-flex">
							<span className="sr-only">Maison Kailash</span>
							<Image
								src={logoKailash}
								alt=""
								className="size-18 object-contain"
							/>
						</Link>

						<p className="mt-6 max-w-sm text-sm/6 text-muted">
							Santé holistique, bien-être, yoga, méditation et ateliers à
							l&apos;Éperon, Saint-Gilles les Hauts, dans l&apos;Ouest de La
							Réunion.
						</p>

						<div className="mt-6 flex gap-x-5">
							{socialNavigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-mk-green hover:text-mk-saffron-text"
								>
									<span className="sr-only">{item.name}</span>
									<item.icon aria-hidden="true" className="size-5" />
								</a>
							))}
						</div>
					</div>

					<div>
						<h2 className="text-sm/6 font-semibold text-foreground">Contact</h2>
						<address className="mt-4 space-y-4 text-sm/6 text-muted not-italic">
							<p>
								44 Route de l&apos;Éperon
								<br />
								97435 Saint-Gilles les Hauts
								<br />
								La Réunion
							</p>
							<p>Sur rendez-vous du lundi au samedi</p>
							<p>
								<span className="block text-xs font-semibold tracking-[0.12em] text-mk-saffron-text uppercase">
									Appeler
								</span>
								<a
									href="tel:+262692683073"
									className="mt-2 inline-flex items-center gap-2 rounded-pill bg-background px-3 py-1.5 font-semibold text-mk-green shadow-sm hover:text-mk-saffron-text"
								>
									<PhoneIcon aria-hidden="true" className="size-4" />
									0692 68 30 73
								</a>
							</p>
						</address>
					</div>

					<div className="rounded-card bg-background p-6 shadow-card">
						<h2 className="text-sm/6 font-semibold text-foreground">
							Newsletter
						</h2>
						<p className="mt-3 text-sm/6 text-muted">
							Recevez les actualités, ateliers et prochains rendez-vous de
							Maison Kailash.
						</p>

						<form className="mt-6 flex flex-col gap-3">
							<label htmlFor="newsletter-email" className="sr-only">
								Adresse email
							</label>
							<input
								id="newsletter-email"
								name="email"
								type="email"
								required
								autoComplete="email"
								placeholder="Votre email"
								className="min-w-0 rounded-pill bg-white px-4 py-2.5 text-sm text-foreground shadow-sm outline-1 -outline-offset-1 outline-border placeholder:text-muted focus:outline-2 focus:-outline-offset-2 focus:outline-mk-green"
							/>
							<button type="submit" className="btn-primary px-5 py-2.5 text-sm">
								S&apos;inscrire
							</button>
						</form>
					</div>

					<div>
						<h2 className="text-sm/6 font-semibold text-foreground">Infos</h2>
						<ul role="list" className="mt-4 space-y-3">
							{footerNavigation.legal.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="text-sm/6 text-muted hover:text-mk-green"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-sm/6 text-muted md:flex-row md:items-center md:justify-between">
					<p>
						© {new Date().getFullYear()} Maison Kailash. Tous droits réservés.
					</p>
					<a
						href="https://www.sgautier.dev/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-mk-green"
					>
						<span translate="no">Designed by SG</span>
					</a>
				</div>
			</div>
		</footer>
	)
}
