"use client"

import { Transition } from "@headlessui/react"
import {
	CheckCircleIcon,
	ExclamationTriangleIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline"

type FormNotificationProps = {
	show: boolean
	title: string
	message: string
	variant: "success" | "error"
	onClose: () => void
}

export default function FormNotification({
	show,
	title,
	message,
	variant,
	onClose,
}: FormNotificationProps) {
	const Icon = variant === "success" ? CheckCircleIcon : ExclamationTriangleIcon

	return (
		<div
			aria-live={variant === "error" ? "assertive" : "polite"}
			className="pointer-events-none fixed inset-x-4 bottom-4 z-[100] flex justify-center sm:left-auto sm:right-6 sm:w-full sm:max-w-sm"
		>
			<Transition
				show={show}
				as="div"
				enter="transition duration-300 ease-out"
				enterFrom="translate-y-3 opacity-0"
				enterTo="translate-y-0 opacity-100"
				leave="transition duration-200 ease-in"
				leaveFrom="translate-y-0 opacity-100"
				leaveTo="translate-y-3 opacity-0"
				role={variant === "error" ? "alert" : "status"}
				className="pointer-events-auto w-full rounded-panel bg-white p-4 shadow-card ring-1 ring-black/5"
			>
				<div className="flex items-start gap-3">
					<Icon
						aria-hidden="true"
						className={`mt-0.5 size-6 shrink-0 ${
							variant === "success" ? "text-mk-green" : "text-mk-saffron-text"
						}`}
					/>

					<div className="min-w-0 flex-1">
						<p className="text-sm font-semibold text-foreground">{title}</p>
						<p className="mt-1 text-sm/6 text-muted">{message}</p>
					</div>

					<button
						type="button"
						onClick={onClose}
						aria-label="Fermer la notification"
						className="shrink-0 rounded-full p-1 text-muted hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mk-green"
					>
						<XMarkIcon aria-hidden="true" className="size-5" />
					</button>
				</div>
			</Transition>
		</div>
	)
}
