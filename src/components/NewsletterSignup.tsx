"use client"

import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { useAction } from "next-safe-action/hooks"
import { type SubmitEvent, useRef, useState } from "react"

import { subscribeToNewsletter } from "@/app/actions/subscribeToNewsletter"

import FormNotification from "./FormNotification"

type NewsletterSignupProps = {
	id: string
	title?: string
	description?: string
	placeholder?: string
	submitLabel?: string
	compact?: boolean
}

type NotificationState = {
	show: boolean
	title: string
	message: string
	variant: "success" | "error"
}

function getFormValue(formData: FormData, name: string) {
	const value = formData.get(name)

	return typeof value === "string" ? value : ""
}

export default function NewsletterSignup({
	id,
	title = "Inscription à la newsletter",
	description = "Inscrivez-vous à la newsletter Maison Kailash pour recevoir les actualités, ateliers et prochains rendez-vous.",
	placeholder = "Votre email",
	submitLabel = "S'inscrire",
	compact = false,
}: NewsletterSignupProps) {
	const formRef = useRef<HTMLFormElement>(null)
	const errorId = `${id}-error`
	const honeypotId = `${id}-contact-info`

	const [notification, setNotification] = useState<NotificationState>({
		show: false,
		title: "",
		message: "",
		variant: "success",
	})

	const { execute, result, isExecuting } = useAction(
		subscribeToNewsletter,
		{
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
					title: "Inscription prise en compte",
					message: data.message,
					variant: "success",
				})
			},
			onError({ error }) {
				const hasValidationErrors = Boolean(error.validationErrors)

				setNotification({
					show: true,
					title: hasValidationErrors
						? "Adresse email invalide"
						: "Inscription impossible",
					message:
						error.serverError ??
						(hasValidationErrors
							? "Vérifiez l’adresse email indiquée."
							: "Une erreur est survenue. Veuillez réessayer."),
					variant: "error",
				})
			},
		},
	)

	const emailErrors = result.validationErrors?.fieldErrors.email

	function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)

		execute({
			email: getFormValue(formData, "email"),
			contactInfo: getFormValue(formData, "contactInfo"),
		})
	}

	return (
		<div
			className={
				compact
					? "rounded-card bg-background p-6 shadow-card"
					: "rounded-panel bg-background p-6 text-left shadow-card sm:p-8"
			}
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
				ref={formRef}
				onSubmit={handleSubmit}
				autoComplete="on"
				aria-busy={isExecuting}
				className={
					compact
						? "mt-6 flex flex-col gap-3"
						: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-start"
				}
			>
				<div className="min-w-0 flex-1">
					<label htmlFor={id} className="sr-only">
						Adresse email
					</label>

					<input
						id={id}
						name="email"
						type="email"
						required
						maxLength={160}
						autoComplete="email"
						inputMode="email"
						placeholder={placeholder}
						aria-invalid={Boolean(emailErrors)}
						aria-describedby={emailErrors ? errorId : undefined}
						className="w-full min-w-0 rounded-pill bg-white px-4 py-2.5 text-sm text-foreground shadow-sm outline-1 -outline-offset-1 outline-border placeholder:text-muted focus:outline-2 focus:-outline-offset-2 focus:outline-mk-green aria-invalid:outline-red-600 focus:aria-invalid:outline-red-600"
					/>

					{emailErrors?.length ? (
						<p id={errorId} className="mt-2 text-sm text-red-700">
							{emailErrors[0]}
						</p>
					) : null}
				</div>

				<button
					type="submit"
					disabled={isExecuting}
					className="btn-primary inline-flex min-w-32 items-center justify-center gap-2 px-5 py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-60"
				>
					{isExecuting ? (
						<>
							<ArrowPathIcon
								aria-hidden="true"
								className="size-5 animate-spin"
							/>
							Inscription
						</>
					) : (
						submitLabel
					)}
				</button>

				<div
					aria-hidden="true"
					className="absolute left-[-9999px] size-px overflow-hidden"
				>
					<label htmlFor={honeypotId}>
						Ne pas remplir ce champ
					</label>
					<input
						id={honeypotId}
						name="contactInfo"
						type="text"
						tabIndex={-1}
						autoComplete="off"
					/>
				</div>
			</form>

			<p className="mt-4 text-xs/5 text-muted">
				Vous recevrez un email pour confirmer votre inscription et
				pourrez vous désinscrire à tout moment.
			</p>
		</div>
	)
}