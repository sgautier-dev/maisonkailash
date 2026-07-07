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
import {
	mainNavigation,
	utilityNavigation,
	type NavigationChild,
	type NavigationGroup,
	type NavigationLink,
	type NavigationSection,
} from "@/lib/navigation"

function isNavigationGroup(child: NavigationChild): child is NavigationGroup {
	return child.type === "group"
}

function getSectionLinks(section: NavigationSection): NavigationLink[] {
	return (
		section.children?.flatMap((child) =>
			isNavigationGroup(child) ? child.children : [child],
		) ?? []
	)
}

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

	function isSectionActive(section: NavigationSection) {
		const currentPath = normalizePath(pathname)
		const sectionPaths = [
			section.href,
			...getSectionLinks(section).map((item) => item.href),
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
							className="size-16 object-contain"
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
									className="nav-link font-heading text-sm/6 tracking-[0.08em] uppercase hover:text-mk-green"
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
												className="nav-link font-heading text-sm/6 tracking-[0.08em] uppercase hover:text-mk-green"
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
											className="absolute left-0 z-50 mt-4 overflow-visible rounded-panel bg-white shadow-soft outline-1 outline-border transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
										>
											<DesktopDropdownContent section={section} close={close} />
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
								className="size-16 object-contain"
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

											<DisclosurePanel className="mt-2 space-y-3">
												{section.children?.map((child) => {
													if (isNavigationGroup(child)) {
														return (
															<div key={child.name}>
																<p className="px-6 pt-2 pb-1 text-xs font-semibold tracking-[0.14em] text-mk-saffron-text uppercase">
																	{child.name}
																</p>
																<div className="space-y-1">
																	{child.children.map((item) => (
																		<Link
																			key={item.href}
																			href={item.href}
																			onClick={() => setMobileMenuOpen(false)}
																			className="block rounded-card py-2 pr-3 pl-6 text-base/7 font-semibold text-foreground hover:bg-mk-mint/30"
																		>
																			{item.name}
																		</Link>
																	))}
																</div>
															</div>
														)
													}

													return (
														<Link
															key={child.href}
															href={child.href}
															onClick={() => setMobileMenuOpen(false)}
															className="block rounded-card py-2 pr-3 pl-6 text-base/7 font-semibold text-foreground hover:bg-mk-mint/30"
														>
															{child.name}
														</Link>
													)
												})}
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

function DesktopDropdownContent({
	section,
	close,
}: {
	section: NavigationSection
	close: () => void
}) {
	const children = section.children ?? []
	const groups = children.filter(isNavigationGroup)
	const links = children.filter(
		(child): child is NavigationLink => !isNavigationGroup(child),
	)

	if (groups.length > 0) {
		return <DesktopGroupedDropdown groups={groups} close={close} />
	}

	return (
		<div className="w-80 max-w-[calc(100vw-2rem)] p-3">
			<div className="space-y-1">
				{links.map((item) => (
					<DropdownLink key={item.href} item={item} onClick={close} />
				))}
			</div>
		</div>
	)
}

function DesktopGroupedDropdown({
	groups,
	close,
}: {
	groups: NavigationGroup[]
	close: () => void
}) {
	const [activeGroupIndex, setActiveGroupIndex] = useState(0)
	const activeGroup = groups[activeGroupIndex] ?? groups[0]

	return (
		<div className="grid w-2xl max-w-[calc(100vw-2rem)] grid-cols-[16rem_1fr] overflow-hidden rounded-panel">
			<div className="border-r border-border bg-surface p-3">
				<div className="space-y-1">
					{groups.map((group, index) => {
						const isActive = index === activeGroupIndex

						return (
							<button
								key={group.name}
								type="button"
								onMouseEnter={() => setActiveGroupIndex(index)}
								onFocus={() => setActiveGroupIndex(index)}
								onClick={() => setActiveGroupIndex(index)}
								className={[
									"flex w-full items-center justify-between gap-3 rounded-card px-4 py-3 text-left text-sm font-semibold transition",
									isActive
										? "bg-mk-mint/40 text-mk-green"
										: "text-foreground hover:bg-mk-mint/25 hover:text-mk-green",
								].join(" ")}
							>
								<span>{group.name}</span>
								<ChevronDownIcon
									aria-hidden="true"
									className={[
										"size-5 shrink-0 -rotate-90 transition",
										isActive ? "text-mk-green" : "text-muted",
									].join(" ")}
								/>
							</button>
						)
					})}
				</div>
			</div>

			<div className="min-h-72 bg-white p-3">
				<p className="px-4 pt-2 pb-1 text-xs font-semibold tracking-[0.14em] text-mk-saffron-text uppercase">
					{activeGroup.name}
				</p>

				<div className="mt-1 space-y-1">
					{activeGroup.children.map((item) => (
						<DropdownLink key={item.href} item={item} onClick={close} />
					))}
				</div>
			</div>
		</div>
	)
}

function DropdownLink({
	item,
	onClick,
}: {
	item: NavigationLink
	onClick: () => void
}) {
	return (
		<Link
			href={item.href}
			onClick={onClick}
			className="group relative block rounded-card px-4 py-3 hover:bg-mk-mint/30"
		>
			<p className="font-semibold text-foreground group-hover:text-mk-green">
				{item.name}
			</p>
			{item.description ? (
				<p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
			) : null}
		</Link>
	)
}
