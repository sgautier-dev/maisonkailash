import arcjet, { detectBot, fixedWindow, request, shield } from "@arcjet/next"

type ArcjetProtectionResult =
	| { allowed: true }
	| {
			allowed: false
			reason: "bot" | "rate-limit" | "unavailable" | "denied"
	  }

const arcjetKey = process.env.ARCJET_KEY

const arcjetClient = arcjetKey
	? arcjet({
			key: arcjetKey,
			rules: [
				shield({
					mode: "LIVE",
				}),
				detectBot({
					mode: "LIVE",
					allow: [],
				}),
				fixedWindow({
					mode: "LIVE",
					window: "10m",
					max: 5,
				}),
			],
		})
	: null

export async function checkArcjetProtection(): Promise<ArcjetProtectionResult> {
	if (!arcjetClient) {
		if (process.env.NODE_ENV !== "production") {
			return { allowed: true }
		}

		console.error("ARCJET_KEY is missing.")

		return {
			allowed: false,
			reason: "unavailable",
		}
	}

	const arcjetRequest = await request()
	const decision = await arcjetClient.protect(arcjetRequest)

	if (!decision.isDenied()) {
		return { allowed: true }
	}

	if (decision.reason.isRateLimit()) {
		return {
			allowed: false,
			reason: "rate-limit",
		}
	}

	if (decision.reason.isBot()) {
		return {
			allowed: false,
			reason: "bot",
		}
	}

	return {
		allowed: false,
		reason: "denied",
	}
}