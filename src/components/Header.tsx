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
	PopoverBackdrop,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	Portal,
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
		<header className="sticky top-0 z-40 bg-chrome/75 shadow-sm shadow-mk-green/5 backdrop-blur-md">
			<nav
				aria-label="Navigation principale"
				className="mx-auto flex max-w-7xl items-center justify-between gap-x-4 px-6 py-2 lg:px-8 xl:gap-x-6"
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
						className="-m-2.5 inline-flex size-14 items-center justify-center rounded-md text-foreground"
					>
						<span className="sr-only">Ouvrir le menu principal</span>
						<Bars3Icon aria-hidden="true" className="size-10" />
					</button>
				</div>

				<PopoverGroup className="hidden lg:flex lg:gap-x-4 xl:gap-x-7">
					{mainNavigation.map((section) => {
						const hasChildren = Boolean(section.children?.length)

						if (!hasChildren) {
							return (
								<Link
									key={section.name}
									href={section.href}
									data-active={isSectionActive(section) ? "true" : undefined}
									className="nav-link text-base/6 hover:text-mk-green"
								>
									{section.name}
								</Link>
							)
						}

						return (
							<Popover key={section.name} className="relative">
								{({ close }) => (
									<>
										<div className="flex items-center gap-x-1">
											<Link
												href={section.href}
												data-active={
													isSectionActive(section) ? "true" : undefined
												}
												className="nav-link text-base/6 hover:text-mk-green"
											>
												{section.name}
											</Link>

											<PopoverButton className="group inline-flex size-7 items-center justify-center rounded-full text-muted hover:bg-mk-mint/30 hover:text-mk-green">
												<span className="sr-only">
													Ouvrir le sous-menu {section.name}
												</span>
												<ChevronDownIcon
													aria-hidden="true"
													className="size-7 transition-transform duration-200 group-data-open:rotate-180"
												/>
											</PopoverButton>
										</div>

										<Portal>
											<PopoverBackdrop
												transition
												className="fixed inset-0 z-30 bg-transparent transition data-closed:opacity-0"
											/>
										</Portal>

										<PopoverPanel
											transition
											className="absolute left-1/2 z-50 mt-4 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-panel bg-white shadow-soft outline-1 outline-border transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
										>
											<div className="p-3">
												<Link
													href={section.href}
													onClick={() => close()}
													className="block rounded-card px-4 py-3 hover:bg-mk-mint/30"
												>
													<p className="font-heading text-lg text-mk-green">
														Vue d&apos;ensemble
													</p>
													<p className="mt-1 text-sm leading-6 text-muted">
														Découvrir la rubrique {section.name}
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
						)
					})}
				</PopoverGroup>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link
						href={contactLink.href}
						className="btn-primary whitespace-nowrap px-4 py-2.5 text-sm xl:px-5"
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

				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-2 sm:max-w-sm sm:ring-1 sm:ring-border">
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
							className="-m-2.5 inline-flex size-14 items-center justify-center rounded-md text-foreground"
						>
							<span className="sr-only">Fermer le menu</span>
							<XMarkIcon aria-hidden="true" className="size-10" />
						</button>
					</div>

					<div className="mt-8 flow-root">
						<div className="-my-6 divide-y divide-border">
							<div className="space-y-2 py-6">
								{mainNavigation.map((section) => {
									const hasChildren = Boolean(section.children?.length)

									if (!hasChildren) {
										return (
											<Link
												key={section.name}
												href={section.href}
												onClick={() => setMobileMenuOpen(false)}
												className="block rounded-card px-3 py-2 text-lg/7 font-semibold text-foreground hover:bg-mk-mint/30"
											>
												{section.name}
											</Link>
										)
									}

									return (
										<Disclosure key={section.name} as="div" className="-mx-3">
											<div className="flex items-center gap-x-1">
												<Link
													href={section.href}
													onClick={() => setMobileMenuOpen(false)}
													className="flex-1 rounded-card px-3 py-2 text-lg/7 font-semibold text-foreground hover:bg-mk-mint/30"
												>
													{section.name}
												</Link>

												<DisclosureButton className="group inline-flex size-11 items-center justify-center rounded-card text-muted hover:bg-mk-mint/30 hover:text-mk-green">
													<span className="sr-only">
														Ouvrir le sous-menu {section.name}
													</span>
													<ChevronDownIcon
														aria-hidden="true"
														className="size-8 flex-none transition-transform duration-200 group-data-open:rotate-180"
													/>
												</DisclosureButton>
											</div>

											<DisclosurePanel className="mt-2 space-y-1">
												{section.children?.map((item) => (
													<Link
														key={item.href}
														href={item.href}
														onClick={() => setMobileMenuOpen(false)}
														className="block rounded-card py-2 pr-3 pl-6 text-base/7 font-semibold text-foreground hover:bg-mk-mint/30"
													>
														{item.name}
													</Link>
												))}
											</DisclosurePanel>
										</Disclosure>
									)
								})}
							</div>

							<div className="py-6">
								<Link
									href={contactLink.href}
									onClick={() => setMobileMenuOpen(false)}
									className="btn-primary px-5 py-3 text-base"
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
