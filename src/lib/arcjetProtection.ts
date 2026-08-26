import arcjet, { detectBot, fixedWindow, request, shield } from "@arcjet/next"

type ArcjetProtectionResult =
	| { allowed: true }
	| {
			allowed: false
			reason: "bot" | "rate-limit" | "unavailable" | "denied"
	  }

const arcjetKey = process.env.ARCJET_KEY

function createArcjetClient(window: "10m" | "1h", max: number) {
	if (!arcjetKey) {
		return null
	}

	return arcjet({
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
				window,
				max,
			}),
		],
	})
}

const contactArcjetClient = createArcjetClient("10m", 5)
const newsletterArcjetClient = createArcjetClient("1h", 5)

async function checkProtection(
	client: ReturnType<typeof createArcjetClient>,
): Promise<ArcjetProtectionResult> {
	if (!client) {
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
	const decision = await client.protect(arcjetRequest)

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

export function checkArcjetProtection() {
	return checkProtection(contactArcjetClient)
}

export function checkNewsletterProtection() {
	return checkProtection(newsletterArcjetClient)
}
