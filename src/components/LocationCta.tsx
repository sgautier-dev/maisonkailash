import { MapPinIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

import Reveal from "@/components/Reveal"

export default function LocationCta() {
	return (
		<section className="bg-mk-green">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
				<Reveal>
					<div className="max-w-2xl">
						<MapPinIcon aria-hidden="true" className="size-8 text-white/80" />
						<h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
							Maison Kailash vous accueille à l&apos;Éperon
						</h2>
						<p className="mt-6 text-lg/8 text-white/80">
							À Saint-Gilles les Hauts, dans l&apos;Ouest de La Réunion, sur
							rendez-vous du lundi au samedi.
						</p>
						<div className="mt-10">
							<Link
								href="/accueil/contact-acces/"
								className="btn-secondary px-5 py-3 text-sm"
							>
								Voir le contact et le plan d&apos;accès
							</Link>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	)
}
