"use client"

import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { useAction } from "next-safe-action/hooks"
import {
	type ComponentType,
	type FormEvent,
	type SVGProps,
	useRef,
	useState,
} from "react"

import { sendContactEmail } from "@/app/actions/sendContactEmail"

import FormNotification from "./FormNotification"

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

type NotificationState = {
	show: boolean
	title: string
	message: string
	variant: "success" | "error"
}

const fieldClassName =
	"block w-full rounded-card bg-white px-4 py-3 text-base text-foreground shadow-sm outline-1 -outline-offset-1 outline-border placeholder:text-muted focus:outline-2 focus:-outline-offset-2 focus:outline-mk-green aria-invalid:outline-red-600 focus:aria-invalid:outline-red-600"

function getFormValue(formData: FormData, name: string) {
	const value = formData.get(name)

	return typeof value === "string" ? value : ""
}

function FieldError({
	id,
	errors,
}: {
	id: string
	errors?: string[]
}) {
	if (!errors?.length) {
		return null
	}

	return (
		<p id={id} className="mt-2 text-sm text-red-700">
			{errors[0]}
		</p>
	)
}

export default function ContactForm({
	title = "Nous contacter",
	description = "Pour une demande de massage, de soin, de bon cadeau ou d'information pratique, vous pouvez nous appeler directement ou nous envoyer un message.",
	infoItems,
}: ContactFormProps) {
	const formRef = useRef<HTMLFormElement>(null)
	const [notification, setNotification] = useState<NotificationState>({
		show: false,
		title: "",
		message: "",
		variant: "success",
	})

	const { execute, result, isExecuting } = useAction(sendContactEmail, {
		onExecute() {
			setNotification((current) => ({
				...current,
				show: false,
			}))
		},
		onSuccess({ data }) {
			formRef.current?.reset()

			setNotification({
				show: true,
				title: "Message envoyé",
				message: data.message,
				variant: "success",
			})
		},
		onError({ error }) {
			const hasValidationErrors = Boolean(error.validationErrors)

			setNotification({
				show: true,
				title: hasValidationErrors
					? "Formulaire incomplet"
					: "Envoi impossible",
				message:
					error.serverError ??
					(hasValidationErrors
						? "Vérifiez les informations indiquées dans le formulaire."
						: "Une erreur est survenue. Veuillez réessayer."),
				variant: "error",
			})
		},
	})

	const fieldErrors = result.validationErrors?.fieldErrors

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)

		execute({
			firstName: getFormValue(formData, "firstName"),
			lastName: getFormValue(formData, "lastName"),
			email: getFormValue(formData, "email"),
			phone: getFormValue(formData, "phone"),
			message: getFormValue(formData, "message"),
			contactInfo: getFormValue(formData, "contactInfo"),
		})
	}

	return (
		<section
			id="formulaire"
			className="section-padding bg-surface scroll-mt-16"
		>
			<FormNotification
				show={notification.show}
				title={notification.title}
				message={notification.message}
				variant={notification.variant}
				onClose={() =>
					setNotification((current) => ({
						...current,
						show: false,
					}))
				}
			/>

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
										<dd className="mt-1">{item.description}</dd>

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

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						aria-busy={isExecuting}
						className="content-card"
					>
						<div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
							<div>
								<label
									htmlFor="firstName"
									className="block text-sm/6 font-semibold text-foreground"
								>
									Prénom
								</label>
								<input
									id="firstName"
									name="firstName"
									type="text"
									autoComplete="given-name"
									required
									maxLength={80}
									aria-invalid={Boolean(fieldErrors?.firstName)}
									aria-describedby={
										fieldErrors?.firstName ? "firstName-error" : undefined
									}
									className={`mt-2 ${fieldClassName}`}
								/>
								<FieldError
									id="firstName-error"
									errors={fieldErrors?.firstName}
								/>
							</div>

							<div>
								<div className="flex justify-between gap-4">
									<label
										htmlFor="lastName"
										className="block text-sm/6 font-semibold text-foreground"
									>
										Nom
									</label>
									<span className="text-sm/6 text-muted">Facultatif</span>
								</div>
								<input
									id="lastName"
									name="lastName"
									type="text"
									autoComplete="family-name"
									maxLength={80}
									aria-invalid={Boolean(fieldErrors?.lastName)}
									aria-describedby={
										fieldErrors?.lastName ? "lastName-error" : undefined
									}
									className={`mt-2 ${fieldClassName}`}
								/>
								<FieldError
									id="lastName-error"
									errors={fieldErrors?.lastName}
								/>
							</div>

							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm/6 font-semibold text-foreground"
								>
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									maxLength={160}
									aria-invalid={Boolean(fieldErrors?.email)}
									aria-describedby={
										fieldErrors?.email ? "email-error" : undefined
									}
									className={`mt-2 ${fieldClassName}`}
								/>
								<FieldError id="email-error" errors={fieldErrors?.email} />
							</div>

							<div className="sm:col-span-2">
								<div className="flex justify-between gap-4">
									<label
										htmlFor="phone"
										className="block text-sm/6 font-semibold text-foreground"
									>
										Téléphone
									</label>
									<span className="text-sm/6 text-muted">Facultatif</span>
								</div>
								<input
									id="phone"
									name="phone"
									type="tel"
									autoComplete="tel"
									maxLength={30}
									aria-invalid={Boolean(fieldErrors?.phone)}
									aria-describedby={
										fieldErrors?.phone ? "phone-error" : undefined
									}
									className={`mt-2 ${fieldClassName}`}
								/>
								<FieldError id="phone-error" errors={fieldErrors?.phone} />
							</div>

							<div className="sm:col-span-2">
								<label
									htmlFor="message"
									className="block text-sm/6 font-semibold text-foreground"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									required
									minLength={10}
									maxLength={3000}
									aria-invalid={Boolean(fieldErrors?.message)}
									aria-describedby={
										fieldErrors?.message ? "message-error" : undefined
									}
									className={`mt-2 ${fieldClassName}`}
								/>
								<FieldError
									id="message-error"
									errors={fieldErrors?.message}
								/>
							</div>
						</div>

						<div
							aria-hidden="true"
							className="absolute left-[-9999px] size-px overflow-hidden"
						>
							<label htmlFor="contactInfo">Ne pas remplir ce champ</label>
							<input
								id="contactInfo"
								name="contactInfo"
								type="text"
								tabIndex={-1}
								autoComplete="off"
							/>
						</div>

						<div className="mt-8 flex justify-end">
							<button
								type="submit"
								disabled={isExecuting}
								className="btn-primary inline-flex min-w-44 items-center justify-center gap-2 px-5 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-60"
							>
								{isExecuting ? (
									<>
										<ArrowPathIcon
											aria-hidden="true"
											className="size-5 animate-spin"
										/>
										Envoi en cours
									</>
								) : (
									"Envoyer le message"
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export type { ContactInfoItem }