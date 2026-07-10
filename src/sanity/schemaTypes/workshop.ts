import { defineField, defineType } from "sanity"

export const workshop = defineType({
	name: "workshop",
	title: "Atelier",
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
			type: "datetime",
		}),
		defineField({
			name: "endDate",
			title: "Date de fin",
			type: "datetime",
		}),
		defineField({
			name: "dateLabel",
			title: "Texte de date affiché",
			type: "string",
			description:
				"Exemples : Jeudi 28 mai 2026 · Archive 2024 · Dates à venir.",
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
			title: "Texte réservation",
			type: "string",
		}),
		defineField({
			name: "bookingPhone",
			title: "Téléphone réservation",
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
