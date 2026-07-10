type EventDateInput = {
	dateLabel?: string
	startDate?: string
	startTime?: string
	endDate?: string
	endTime?: string
}

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
	weekday: "long",
	day: "numeric",
	month: "long",
	year: "numeric",
	timeZone: "UTC",
})

export function getEventDateLabel(event: EventDateInput) {
	if (event.dateLabel) {
		return event.dateLabel
	}

	if (!event.startDate) {
		return undefined
	}

	const startDate = formatDate(event.startDate)
	const endDate = event.endDate ? formatDate(event.endDate) : undefined

	if (!endDate || event.endDate === event.startDate) {
		return [startDate, formatTimeRange(event.startTime, event.endTime)]
			.filter(Boolean)
			.join(" · ")
	}

	return [`Du ${startDate}`, event.startTime, `au ${endDate}`, event.endTime]
		.filter(Boolean)
		.join(" ")
}

export function getEventShortDateLabel(event: EventDateInput) {
	if (event.dateLabel) {
		return event.dateLabel
	}

	if (!event.startDate) {
		return undefined
	}

	const startDate = formatDate(event.startDate)
	const endDate = event.endDate ? formatDate(event.endDate) : undefined

	if (!endDate || event.endDate === event.startDate) {
		return startDate
	}

	return `Du ${startDate} au ${endDate}`
}

function formatDate(value: string) {
	const [year, month, day] = value.split("-").map(Number)
	const date = new Date(Date.UTC(year, month - 1, day, 12))

	return capitalize(dateFormatter.format(date))
}

function formatTimeRange(startTime?: string, endTime?: string) {
	if (startTime && endTime) {
		return `${startTime} - ${endTime}`
	}

	return startTime
}

function capitalize(value: string) {
	return value.charAt(0).toUpperCase() + value.slice(1)
}
