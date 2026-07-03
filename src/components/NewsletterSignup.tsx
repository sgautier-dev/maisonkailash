type NewsletterSignupProps = {
	id: string
	title?: string
	description?: string
	placeholder?: string
	submitLabel?: string
	compact?: boolean
}

export default function NewsletterSignup({
	id,
	title = "Inscription à la newsletter",
	description = "Inscrivez-vous à la newsletter Maison Kailash pour recevoir les actualités, ateliers et prochains rendez-vous.",
	placeholder = "Votre email",
	submitLabel = "S'inscrire",
	compact = false,
}: NewsletterSignupProps) {
	return (
		<div
			className={
				compact
					? "rounded-card bg-background p-6 shadow-card"
					: "rounded-panel bg-background p-6 text-left shadow-card sm:p-8"
			}
		>
			<h2
				className={
					compact
						? "text-sm/6 font-semibold text-foreground"
						: "text-2xl font-semibold text-foreground"
				}
			>
				{title}
			</h2>
			<p className="mt-3 text-sm/6 text-muted">{description}</p>

			<form
				className={
					compact
						? "mt-6 flex flex-col gap-3"
						: "mt-6 flex flex-col gap-3 sm:flex-row"
				}
			>
				<label htmlFor={id} className="sr-only">
					Adresse email
				</label>
				<input
					id={id}
					name="email"
					type="email"
					required
					autoComplete="email"
					placeholder={placeholder}
					className="min-w-0 rounded-pill bg-white px-4 py-2.5 text-sm text-foreground shadow-sm outline-1 -outline-offset-1 outline-border placeholder:text-muted focus:outline-2 focus:-outline-offset-2 focus:outline-mk-green sm:flex-1"
				/>
				<button type="submit" className="btn-primary px-5 py-2.5 text-sm">
					{submitLabel}
				</button>
			</form>
		</div>
	)
}
