"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import Link from "next/link"

import logoKailash from "@/images/logo-kailash.png"
import { mainNavigation, utilityNavigation } from "@/lib/navigation"

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const pathname = usePathname()
	const contactLink = utilityNavigation[0]

	function normalizePath(path: string) {
		if (path === "/") {
			return "/"
		}

		return `${path.replace(/\/+$/, "")}/`
	}

	function isSectionActive(section: (typeof mainNavigation)[number]) {
		const currentPath = normalizePath(pathname)
		const sectionPaths = [
			section.href,
			...(section.children?.map((item) => item.href) ?? []),
		]

		return sectionPaths.some((href) => {
			const targetPath = normalizePath(href)

			return currentPath === targetPath || currentPath.startsWith(targetPath)
		})
	}

	return (
		<header className="sticky top-0 z-40 bg-surface/95 shadow-sm shadow-mk-green/5 backdrop-blur-md">
			<nav
				aria-label="Navigation principale"
				className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-2 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-2 flex items-center p-2">
						<span className="sr-only">Maison Kailash</span>
						<Image
							src={logoKailash}
							alt=""
							priority
							className="size-20 object-contain"
						/>
					</Link>
				</div>

				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
					>
						<span className="sr-only">Ouvrir le menu principal</span>
						<Bars3Icon aria-hidden="true" className="size-7" />
					</button>
				</div>

				<PopoverGroup className="hidden lg:flex lg:gap-x-8">
					{mainNavigation.map((section) => (
						<Popover key={section.name} className="relative">
							{({ close }) => (
								<>
									<PopoverButton
										data-active={isSectionActive(section) ? "true" : undefined}
										className="nav-link group gap-x-1 text-sm/6 hover:text-mk-green"
									>
										{section.name}
										<ChevronDownIcon
											aria-hidden="true"
											className="size-4 flex-none text-muted transition-transform duration-200 group-data-open:rotate-180"
										/>
									</PopoverButton>

									<PopoverPanel
										transition
										className="absolute left-1/2 z-10 mt-4 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-panel bg-white shadow-soft outline-1 outline-border transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
									>
										<div className="p-3">
											<Link
												href={section.href}
												onClick={() => close()}
												className="block rounded-card px-4 py-3 hover:bg-mk-mint/30"
											>
												<p className="font-heading text-lg text-mk-green">
													{section.name}
												</p>
											</Link>

											{section.children?.map((item) => (
												<Link
													key={item.href}
													href={item.href}
													onClick={() => close()}
													className="group relative block rounded-card px-4 py-3 hover:bg-mk-mint/30"
												>
													<p className="font-semibold text-foreground group-hover:text-mk-green">
														{item.name}
													</p>
													{item.description ? (
														<p className="mt-1 text-sm leading-6 text-muted">
															{item.description}
														</p>
													) : null}
												</Link>
											))}
										</div>
									</PopoverPanel>
								</>
							)}
						</Popover>
					))}
				</PopoverGroup>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link
						href={contactLink.href}
						className="inline-flex items-center justify-center rounded-pill bg-mk-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-mk-green-dark"
					>
						{contactLink.name}
					</Link>
				</div>
			</nav>

			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-50 bg-foreground/20" />

				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-border">
					<div className="flex items-center justify-between">
						<Link
							href="/"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2 flex items-center p-2"
						>
							<span className="sr-only">Maison Kailash</span>
							<Image
								src={logoKailash}
								alt=""
								priority
								className="size-20 object-contain"
							/>
						</Link>

						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-foreground"
						>
							<span className="sr-only">Fermer le menu</span>
							<XMarkIcon aria-hidden="true" className="size-7" />
						</button>
					</div>

					<div className="mt-8 flow-root">
						<div className="-my-6 divide-y divide-border">
							<div className="space-y-2 py-6">
								{mainNavigation.map((section) => (
									<Disclosure key={section.name} as="div" className="-mx-3">
										<DisclosureButton className="group flex w-full items-center justify-between rounded-card px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-mk-mint/30">
											{section.name}
											<ChevronDownIcon
												aria-hidden="true"
												className="size-5 flex-none text-muted group-data-open:rotate-180"
											/>
										</DisclosureButton>

										<DisclosurePanel className="mt-2 space-y-1">
											<Link
												href={section.href}
												onClick={() => setMobileMenuOpen(false)}
												className="block rounded-card py-2 pr-3 pl-6 text-sm/7 font-semibold text-mk-green hover:bg-mk-mint/30"
											>
												{section.name}
											</Link>

											{section.children?.map((item) => (
												<Link
													key={item.href}
													href={item.href}
													onClick={() => setMobileMenuOpen(false)}
													className="block rounded-card py-2 pr-3 pl-6 text-sm/7 font-semibold text-foreground hover:bg-mk-mint/30"
												>
													{item.name}
												</Link>
											))}
										</DisclosurePanel>
									</Disclosure>
								))}
							</div>

							<div className="py-6">
								<Link
									href={contactLink.href}
									onClick={() => setMobileMenuOpen(false)}
									className="block rounded-pill bg-mk-green px-5 py-3 text-center text-base font-semibold text-white hover:bg-mk-green-dark"
								>
									{contactLink.name}
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}
