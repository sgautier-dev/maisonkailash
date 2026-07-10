import { defineConfig } from "sanity"
import { visionTool } from "@sanity/vision"
import { structureTool } from "sanity/structure"

import { apiVersion, dataset, projectId } from "./src/sanity/env"
import { schemaTypes } from "./src/sanity/schemaTypes"

export default defineConfig({
	name: "maison-kailash",
	title: "Maison Kailash",
	projectId,
	dataset,
	basePath: "/studio",
	plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
	schema: {
		types: schemaTypes,
	},
})