import { defineField, defineType } from "sanity"

export const workshop = defineType({
	name: "workshop",
	title: "Ateliers",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Titre",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "status",
			title: "Statut",
			type: "string",
			initialValue: "draft",
			options: {
				layout: "radio",
				list: [
					{ title: "Brouillon", value: "draft" },
					{ title: "Inscriptions ouvertes", value: "open" },
					{ title: "Complet", value: "full" },
					{ title: "Archive", value: "past" },
				],
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "category",
			title: "Catégorie",
			type: "string",
			options: {
				list: [
					{ title: "Méditation", value: "Méditation" },
					{ title: "Yoga", value: "Yoga" },
					{ title: "Stage", value: "Stage" },
					{ title: "Conférence", value: "Conférence" },
					{ title: "Rencontre", value: "Rencontre" },
				],
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "startDate",
			title: "Date de début",
			type: "date",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "startTime",
			title: "Heure de début",
			type: "string",
			description: "Exemple : 18h00",
		}),
		defineField({
			name: "endDate",
			title: "Date de fin",
			type: "date",
		}),
		defineField({
			name: "endTime",
			title: "Heure de fin",
			type: "string",
			description: "Exemple : 19h30",
		}),
		defineField({
			name: "dateLabel",
			title: "Texte de date personnalisé (optionnel)",
			type: "string",
			description:
				"À laisser vide dans la plupart des cas. Utile seulement pour un libellé spécial comme : Dates à venir.",
		}),
		defineField({
			name: "location",
			title: "Lieu",
			type: "string",
			initialValue: "Maison Kailash, Saint-Gilles les Hauts",
		}),
		defineField({
			name: "teacher",
			title: "Intervenant",
			type: "string",
		}),
		defineField({
			name: "teacherProfile",
			title: "Fiche intervenant",
			type: "reference",
			to: [{ type: "teacher" }],
			description:
				"Optionnel. Permet d'afficher une section À propos de l'intervenant sur la page de l'atelier.",
		}),
		defineField({
			name: "excerpt",
			title: "Résumé court",
			type: "text",
			rows: 3,
			validation: (rule) => rule.required().max(240),
		}),
		defineField({
			name: "mainImage",
			title: "Image principale",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: "alt",
					title: "Texte alternatif",
					type: "string",
					validation: (rule) => rule.required(),
				}),
			],
		}),
		defineField({
			name: "body",
			title: "Contenu détaillé",
			type: "array",
			of: [{ type: "block" }],
		}),
		defineField({
			name: "price",
			title: "Tarif",
			type: "string",
		}),
		defineField({
			name: "bookingText",
			title: "Information pratique",
			type: "string",
			description:
				"Exemples : Places limitées, Sur inscription, Matériel non fourni, Enseignement traduit en français.",
		}),
		defineField({
			name: "bookingPhone",
			title: "Téléphone réservation",
			type: "string",
		}),
		defineField({
			name: "bookingEmail",
			title: "Email réservation",
			type: "string",
		}),
		defineField({
			name: "bookingUrl",
			title: "Lien réservation",
			type: "url",
		}),
		defineField({
			name: "isVisible",
			title: "Visible sur le site",
			type: "boolean",
			initialValue: true,
		}),
		defineField({
			name: "isFeatured",
			title: "Mis en avant",
			type: "boolean",
			initialValue: false,
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "dateLabel",
			media: "mainImage",
		},
	},
})
