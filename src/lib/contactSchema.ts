import { z } from "zod"

export const contactFormSchema = z.object({
	firstName: z
		.string()
		.trim()
		.min(1, "Le prénom est requis.")
		.max(80, "Le prénom est trop long."),

	lastName: z
		.string()
		.trim()
		.max(80, "Le nom est trop long."),

	email: z
		.string()
		.trim()
		.max(160, "L’adresse email est trop longue.")
		.pipe(z.email("L’adresse email est invalide.")),

	phone: z
		.string()
		.trim()
		.max(30, "Le numéro de téléphone est trop long."),

	message: z
		.string()
		.trim()
		.min(10, "Le message doit contenir au moins 10 caractères.")
		.max(3000, "Le message ne peut pas dépasser 3 000 caractères."),

	contactInfo: z
		.string()
		.max(200)
		.optional(),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>