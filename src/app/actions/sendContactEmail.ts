"use server"

import { returnServerError } from "next-safe-action"
import { Resend } from "resend"

import { checkArcjetProtection } from "@/lib/arcjetProtection"
import { actionClient } from "@/lib/safe-action"
import { contactFormSchema } from "@/lib/contactSchema"

const successMessage =
	"Votre message a bien été envoyé. Nous vous répondrons dès que possible."

export const sendContactEmail = actionClient
	.inputSchema(contactFormSchema)
	.action(async ({ parsedInput }) => {
		const protection = await checkArcjetProtection()

		if (!protection.allowed) {
			if (protection.reason === "rate-limit") {
				returnServerError(
					"Trop de messages ont été envoyés. Veuillez réessayer dans quelques minutes.",
				)
			}

			if (protection.reason === "unavailable") {
				returnServerError(
					"Le formulaire est temporairement indisponible. Veuillez réessayer plus tard.",
				)
			}

			returnServerError("Votre message n’a pas pu être envoyé.")
		}

		const { firstName, lastName, email, phone, message, contactInfo } =
			parsedInput

		// Silently accept submissions that fill the honeypot field.
		if (contactInfo) {
			return {
				message: successMessage,
			}
		}

		const apiKey = process.env.RESEND_API_KEY
		const from = process.env.CONTACT_EMAIL_FROM
		const to = process.env.CONTACT_EMAIL_TO

		if (!apiKey || !from || !to) {
			console.error("Contact email environment variables are missing.")

			returnServerError(
				"Le formulaire est temporairement indisponible. Veuillez réessayer plus tard.",
			)
		}

		const resend = new Resend(apiKey)
		const fullName = [firstName, lastName].filter(Boolean).join(" ")
		const safeSubjectName = fullName.replace(/[\r\n]+/g, " ")

		const { error } = await resend.emails.send({
			from,
			to,
			replyTo: email,
			subject: `Nouveau message Maison Kailash - ${safeSubjectName}`,
			text: [
				"Nouveau message envoyé depuis le site Maison Kailash",
				"",
				`Nom : ${fullName}`,
				`Email : ${email}`,
				`Téléphone : ${phone || "Non renseigné"}`,
				"",
				"Message :",
				message,
			].join("\n"),
		})

		if (error) {
			console.error("Resend email failed:", {
				name: error.name,
				message: error.message,
			})

			returnServerError(
				"Le message n’a pas pu être envoyé. Veuillez réessayer.",
			)
		}

		return {
			message: successMessage,
		}
	})
