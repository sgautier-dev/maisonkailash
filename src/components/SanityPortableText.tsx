import { PortableText, type PortableTextComponents } from "@portabletext/react"
import type { PortableTextBlock } from "sanity"

const portableTextComponents: PortableTextComponents = {
	block: {
		h2: ({ children }) => (
			<h2 className="heading-section mt-12 text-mk-green first:mt-0">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="mt-8 text-2xl font-semibold text-foreground">
				{children}
			</h3>
		),
		normal: ({ children }) => (
			<p className="text-base/7 text-muted">{children}</p>
		),
		blockquote: ({ children }) => (
			<blockquote className="border-l-4 border-mk-saffron pl-5 text-lg/8 font-medium text-foreground">
				{children}
			</blockquote>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className="list-disc space-y-2 pl-5 text-base/7 text-muted">
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className="list-decimal space-y-2 pl-5 text-base/7 text-muted">
				{children}
			</ol>
		),
	},
	marks: {
		link: ({ children, value }) => {
			const href = getHref(value)

			if (!href) {
				return children
			}

			return (
				<a
					href={href}
					className="font-semibold text-mk-green underline decoration-mk-green/30 underline-offset-4 hover:text-mk-saffron-text"
					target={href.startsWith("http") ? "_blank" : undefined}
					rel={href.startsWith("http") ? "noreferrer" : undefined}
				>
					{children}
				</a>
			)
		},
	},
}

export default function SanityPortableText({
	value,
}: {
	value: PortableTextBlock[]
}) {
	return (
		<div className="space-y-5">
			<PortableText value={value} components={portableTextComponents} />
		</div>
	)
}

function getHref(value: unknown) {
	if (!isRecord(value)) {
		return undefined
	}

	const href = value.href

	return typeof href === "string" ? href : undefined
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null
}
