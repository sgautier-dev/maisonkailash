"use server"

import { returnServerError } from "next-safe-action"

import { checkNewsletterProtection } from "@/lib/arcjetProtection"
import { newsletterFormSchema } from "@/lib/newsletterSchema"
import { actionClient } from "@/lib/safe-action"

const successMessage =
	"Un email de confirmation vient de vous être envoyé. Pensez à vérifier vos courriers indésirables."

function parsePositiveInteger(value: string | undefined) {
	if (!value) {
		return null
	}

	const parsedValue = Number(value)

	return Number.isSafeInteger(parsedValue) && parsedValue > 0
		? parsedValue
		: null
}

export const subscribeToNewsletter = actionClient
	.inputSchema(newsletterFormSchema)
	.action(async ({ parsedInput }) => {
		const protection = await checkNewsletterProtection()

		if (!protection.allowed) {
			if (protection.reason === "rate-limit") {
				returnServerError(
					"Trop de tentatives ont été effectuées. Veuillez réessayer plus tard.",
				)
			}

			if (protection.reason === "unavailable") {
				returnServerError(
					"L’inscription est temporairement indisponible. Veuillez réessayer plus tard.",
				)
			}

			returnServerError("L’inscription n’a pas pu être effectuée.")
		}

		const { email, contactInfo } = parsedInput

		// Silently accept submissions that fill the honeypot field.
		if (contactInfo) {
			return {
				message: successMessage,
			}
		}

		const apiKey = process.env.BREVO_API_KEY
		const listId = parsePositiveInteger(process.env.BREVO_NEWSLETTER_LIST_ID)
		const templateId = parsePositiveInteger(process.env.BREVO_DOI_TEMPLATE_ID)
		const siteUrl =
			process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maisonkailash.com"

		if (!apiKey || !listId || !templateId) {
			console.error(
				"Brevo newsletter environment variables are missing or invalid.",
			)

			returnServerError(
				"L’inscription est temporairement indisponible. Veuillez réessayer plus tard.",
			)
		}

		let redirectionUrl: string

		try {
			redirectionUrl = new URL("/newsletter/confirmation/", siteUrl).toString()
		} catch {
			console.error("NEXT_PUBLIC_SITE_URL is invalid.")

			returnServerError(
				"L’inscription est temporairement indisponible. Veuillez réessayer plus tard.",
			)
		}

		let response: Response

		try {
			response = await fetch(
				"https://api.brevo.com/v3/contacts/doubleOptinConfirmation",
				{
					method: "POST",
					headers: {
						accept: "application/json",
						"api-key": apiKey,
						"content-type": "application/json",
					},
					body: JSON.stringify({
						email,
						includeListIds: [listId],
						redirectionUrl,
						templateId,
					}),
					cache: "no-store",
					signal: AbortSignal.timeout(10_000),
				},
			)
		} catch (error) {
			console.error("Brevo DOI request failed:", error)

			returnServerError(
				"L’inscription n’a pas pu être effectuée. Veuillez réessayer.",
			)
		}

		if (!response.ok) {
			let responseBody: unknown

			try {
				responseBody = await response.json()
			} catch {
				responseBody = null
			}

			console.error("Brevo DOI request failed:", {
				status: response.status,
				statusText: response.statusText,
				responseBody,
			})

			returnServerError(
				"L’inscription n’a pas pu être effectuée. Veuillez réessayer.",
			)
		}

		return {
			message: successMessage,
		}
	})
