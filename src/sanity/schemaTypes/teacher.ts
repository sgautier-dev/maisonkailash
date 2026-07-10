import { defineField, defineType } from "sanity"

export const teacher = defineType({
	name: "teacher",
	title: "Intervenants",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Nom",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "role",
			title: "Rôle ou description courte",
			type: "string",
			description:
				"Exemple : Maître de yoga et méditation, fondateur du Himalayan Hatha Yoga.",
		}),
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
		defineField({
			name: "bio",
			title: "Biographie",
			type: "array",
			of: [{ type: "block" }],
		}),
		defineField({
			name: "links",
			title: "Liens",
			type: "array",
			of: [
				defineField({
					name: "link",
					title: "Lien",
					type: "object",
					fields: [
						defineField({
							name: "label",
							title: "Libellé",
							type: "string",
							validation: (rule) => rule.required(),
						}),
						defineField({
							name: "url",
							title: "URL",
							type: "url",
							validation: (rule) => rule.required(),
						}),
					],
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "name",
			subtitle: "role",
			media: "image",
		},
	},
})