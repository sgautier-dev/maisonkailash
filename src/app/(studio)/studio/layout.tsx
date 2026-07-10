export default function StudioLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <body className="h-dvh overflow-hidden bg-white">{children}</body>
}