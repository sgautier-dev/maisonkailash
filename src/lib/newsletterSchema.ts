import { z } from "zod"

export const newsletterFormSchema = z.object({
	email: z
		.string()
		.trim()
		.max(160, "L’adresse email est trop longue.")
		.pipe(z.email("L’adresse email est invalide.")),

	contactInfo: z
		.string()
		.max(200)
		.optional(),
})

export type NewsletterFormInput = z.infer<typeof newsletterFormSchema>