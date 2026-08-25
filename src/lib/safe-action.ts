import { createSafeActionClient } from "next-safe-action"

export const actionClient = createSafeActionClient({
	defaultValidationErrorsShape: "flattened",

	handleServerError(error) {
		console.error("Server action failed:", error)

		return "Une erreur est survenue. Veuillez réessayer."
	},
})
