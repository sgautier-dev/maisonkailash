import { defineField, defineType } from "sanity"

export const retreat = defineType({
	name: "retreat",
	title: "Séjours",
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
			name: "destination",
			title: "Destination",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "location",
			title: "Lieu précis",
			type: "string",
			description:
				"Optionnel. Exemple : Hauts de Saint-Leu, Inde du Sud, Rodrigues.",
		}),
		defineField({
			name: "level",
			title: "Niveau",
			type: "string",
			description: "Exemple : Tous niveaux.",
		}),
		defineField({
			name: "startDate",
			title: "Date de début",
			type: "date",
		}),
		defineField({
			name: "endDate",
			title: "Date de fin",
			type: "date",
		}),
		defineField({
			name: "dateLabel",
			title: "Texte de date personnalisé (optionnel)",
			type: "string",
			description:
				"À laisser vide dans la plupart des cas. Utile seulement pour un libellé spécial comme : Dates à venir, Archive 2024, Programme à confirmer.",
		}),
		defineField({
			name: "teacher",
			title: "Intervenant ou accompagnant",
			type: "string",
		}),
		defineField({
			name: "teacherProfile",
			title: "Fiche intervenant",
			type: "reference",
			to: [{ type: "teacher" }],
			description:
				"Optionnel. Permet d'afficher une section À propos de l'intervenant sur la page du séjour.",
		}),
		defineField({
			name: "excerpt",
			title: "Résumé court",
			type: "text",
			rows: 3,
			validation: (rule) => rule.required().max(280),
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
			name: "gallery",
			title: "Galerie photos",
			type: "array",
			of: [
				defineField({
					name: "image",
					title: "Image",
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
			],
		}),
		defineField({
			name: "body",
			title: "Contenu détaillé",
			type: "array",
			of: [{ type: "block" }],
		}),
		defineField({
			name: "programItems",
			title: "Programme",
			type: "array",
			of: [{ type: "string" }],
			description:
				"Exemples : Himalayan Hatha Yoga, Pranayama, méditation, enseignements spirituels.",
		}),
		defineField({
			name: "includedItems",
			title: "Inclus",
			type: "array",
			of: [{ type: "string" }],
			description:
				"Exemples : 10 heures d'enseignements, temps d'échange avec l'intervenant.",
		}),
		defineField({
			name: "requiredItems",
			title: "À prévoir",
			type: "array",
			of: [{ type: "string" }],
			description:
				"Exemples : tapis, briques, sangle, couverture, matériel personnel.",
		}),
		defineField({
			name: "price",
			title: "Tarif",
			type: "string",
		}),
		defineField({
			name: "deposit",
			title: "Acompte",
			type: "string",
			description: "Exemple : 200 euros.",
		}),
		defineField({
			name: "bookingText",
			title: "Information pratique",
			type: "string",
			description:
				"Exemples : Programme complet sur demande, places limitées, inscription sur demande.",
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
			subtitle: "destination",
			media: "mainImage",
		},
	},
})