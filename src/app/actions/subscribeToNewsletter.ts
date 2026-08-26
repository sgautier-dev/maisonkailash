"use server"

import { returnServerError } from "next-safe-action"
import { z } from "zod"

import { checkNewsletterProtection } from "@/lib/arcjetProtection"
import { newsletterFormSchema } from "@/lib/newsletterSchema"
import { actionClient } from "@/lib/safe-action"

const successMessage =
	"Vérifiez votre boîte mail pour confirmer votre inscription. Si vous êtes déjà inscrit, aucune action n’est nécessaire."

const brevoContactSchema = z.object({
	emailBlacklisted: z.boolean().optional().default(false),
	listIds: z.array(z.number()).optional().default([]),
	listUnsubscribed: z.array(z.number()).optional().default([]),
})

function parsePositiveInteger(value: string | undefined) {
	if (!value) {
		return null
	}

	const parsedValue = Number(value)

	return Number.isSafeInteger(parsedValue) && parsedValue > 0
		? parsedValue
		: null
}

async function isAlreadySubscribed(
	apiKey: string,
	email: string,
	listId: number,
) {
	const contactUrl = new URL(
		`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
	)

	contactUrl.searchParams.set("identifierType", "email_id")

	let response: Response

	try {
		response = await fetch(contactUrl, {
			headers: {
				accept: "application/json",
				"api-key": apiKey,
			},
			cache: "no-store",
			signal: AbortSignal.timeout(10_000),
		})
	} catch (error) {
		console.error("Brevo contact lookup failed:", error)

		return false
	}

	if (response.status === 404) {
		return false
	}

	if (!response.ok) {
		console.error("Brevo contact lookup failed:", {
			status: response.status,
			statusText: response.statusText,
		})

		return false
	}

	let responseBody: unknown

	try {
		responseBody = await response.json()
	} catch {
		console.error("Brevo contact lookup returned an invalid response.")

		return false
	}

	const contact = brevoContactSchema.safeParse(responseBody)

	if (!contact.success) {
		console.error("Brevo contact lookup returned unexpected data.")

		return false
	}

	const belongsToList = contact.data.listIds.includes(listId)
	const unsubscribedFromList = contact.data.listUnsubscribed.includes(listId)

	return (
		belongsToList && !unsubscribedFromList && !contact.data.emailBlacklisted
	)
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

		const alreadySubscribed = await isAlreadySubscribed(apiKey, email, listId)

		if (alreadySubscribed) {
			return {
				message: successMessage,
			}
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
