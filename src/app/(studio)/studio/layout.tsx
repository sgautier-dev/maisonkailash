export default function StudioLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div className="h-dvh overflow-hidden bg-white">{children}</div>
}