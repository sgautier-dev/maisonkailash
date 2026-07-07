import { MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import Link from "next/link"

import Reveal from "@/components/Reveal"
import massageRoomImage from "@/images/massage-room.jpg"

export default function LocationCta() {
	return (
		<section className="bg-mk-green">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
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

							<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
								<a
									href="tel:+262692683073"
									className="inline-flex items-center justify-center gap-2 rounded-pill bg-white px-5 py-3 text-sm font-semibold text-mk-green shadow-card hover:bg-mk-saffron-soft hover:text-mk-saffron-text"
								>
									<PhoneIcon aria-hidden="true" className="size-4" />
									0692 68 30 73
								</a>
								<Link
									href="/accueil/contact-acces/"
									className="inline-flex items-center justify-center rounded-pill border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
								>
									Contact & plan d&apos;accès
								</Link>
							</div>
						</div>
					</Reveal>

					<Reveal delay="sm">
						<div className="overflow-hidden rounded-panel bg-white/10 shadow-soft ring-1 ring-white/20">
							<Image
								src={massageRoomImage}
								alt="Salle de massage Maison Kailash à l'Éperon"
								sizes="(min-width: 1024px) 34vw, 100vw"
								className="aspect-4/3 w-full object-cover"
							/>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	)
}
