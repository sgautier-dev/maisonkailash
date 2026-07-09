import type { ComponentType, SVGProps } from "react"

type ContactInfoItem = {
	title: string
	description: string
	href?: string
	linkLabel?: string
	icon: ComponentType<SVGProps<SVGSVGElement>>
}

type ContactFormProps = {
	title?: string
	description?: string
	infoItems: readonly ContactInfoItem[]
}

export default function ContactForm({
	title = "Nous contacter",
	description = "Pour une demande de massage, de soin, de bon cadeau ou d'information pratique, vous pouvez nous appeler directement ou nous envoyer un message.",
	infoItems,
}: ContactFormProps) {
	return (
		<section
			id="formulaire"
			className="section-padding bg-surface scroll-mt-16"
		>
			<div className="section-container">
				<div className="grid gap-12 lg:grid-cols-2 lg:items-start">
					<div className="max-w-xl">
						<p className="eyebrow">Contact</p>
						<h2 className="heading-section mt-2 text-mk-green">{title}</h2>
						<p className="mt-6 text-lg/8 text-muted">{description}</p>

						<dl className="mt-10 space-y-6 text-base/7 text-muted">
							{infoItems.map((item) => (
								<div key={item.title} className="flex gap-4">
									<item.icon
										aria-hidden="true"
										className="mt-1 size-6 shrink-0 text-mk-green"
									/>
									<div>
										<dt className="font-semibold text-foreground">
											{item.title}
										</dt>
										<dd className="mt-1">
											{item.href ? (
												<a
													href={item.href}
													target={
														item.href.startsWith("http") ? "_blank" : undefined
													}
													rel={
														item.href.startsWith("http")
															? "noopener noreferrer"
															: undefined
													}
													className="text-link"
												>
													{item.description}
												</a>
											) : (
												item.description
											)}
										</dd>
										{item.href && item.linkLabel ? (
											<a
												href={item.href}
												target={
													item.href.startsWith("http") ? "_blank" : undefined
												}
												rel={
													item.href.startsWith("http")
														? "noopener noreferrer"
														: undefined
												}
												className="mt-2 inline-flex text-sm font-semibold text-mk-green hover:text-mk-saffron-text"
											>
												{item.linkLabel}
											</a>
										) : null}
									</div>
								</div>
							))}
						</dl>
					</div>

					<form action="#" method="POST" className="content-card">
						<div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm/6 font-semibold text-foreground"
								>
									Prénom
								</label>
								<div className="mt-2">
									<input
										id="first-name"
										name="first-name"
										type="text"
										autoComplete="given-name"
										className="block w-full rounded-card bg-white px-4 py-3 text-base text-foreground shadow-sm outline-1 -outline-offset-1 outline-border placeholder:text-muted focus:outline-2 focus:-outline-offset-2 focus:outline-mk-green"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="last-name"
									className="block text-sm/6 font-semibold text-foreground"
								>
									Nom
								</label>
								<div className="mt-2">
									<input
										id="last-name"
										name="last-name"
										type="text"
										autoComplete="family-name"
										className="block w-full rounded-card bg-white px-4 py-3 text-base text-foreground shadow-sm outline-1 -outline-offset-1 outline-border placeholder:text-muted focus:outline-2 focus:-outline-offset-2 focus:outline-mk-green"
									/>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm/6 font-semibold text-foreground"
								>
									Email
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="block w-full rounded-card bg-white px-4 py-3 text-base text-foreground shadow-sm outline-1 -outline-offset-1 outline-border placeholder:text-muted focus:outline-2 focus:-outline-offset-2 focus:outline-mk-green"
									/>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label
									htmlFor="phone-number"
									className="block text-sm/6 font-semibold text-foreground"
								>
									Téléphone
								</label>
								<div className="mt-2">
									<input
										id="phone-number"
										name="phone-number"
										type="tel"
										autoComplete="tel"
										className="block w-full rounded-card bg-white px-4 py-3 text-base text-foreground shadow-sm outline-1 -outline-offset-1 outline-border placeholder:text-muted focus:outline-2 focus:-outline-offset-2 focus:outline-mk-green"
									/>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label
									htmlFor="message"
									className="block text-sm/6 font-semibold text-foreground"
								>
									Message
								</label>
								<div className="mt-2">
									<textarea
										id="message"
										name="message"
										rows={5}
										required
										className="block w-full rounded-card bg-white px-4 py-3 text-base text-foreground shadow-sm outline-1 -outline-offset-1 outline-border placeholder:text-muted focus:outline-2 focus:-outline-offset-2 focus:outline-mk-green"
										defaultValue=""
									/>
								</div>
							</div>
						</div>

						<div className="mt-8 flex justify-end">
							<button type="submit" className="btn-primary px-5 py-3 text-sm">
								Envoyer le message
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export type { ContactInfoItem }
