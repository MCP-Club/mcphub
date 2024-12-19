'use client'

import * as React from "react"
import Link from "next/link"
import { FishIcon as Whale } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image"
import waveIcon from "@/assets/waveIcon.svg"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Desktop",
    href: "/products/hub",
    description: "Easily manage all your MCP tools in one place.",
  },
  {
    title: "Hub",
    href: "/products/hub",
    description: "Find and share MCP tools with your team and the community.",
  }
]

export function HomeNavbar() {
  return (
    <div className="border-b">
      <div className="flex h-20 items-center px-12 justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src={waveIcon}
            alt="Wave"
            className="h-14 w-14"
          />
          <span className="hidden text-2xl font-bold sm:inline-block pl-2 text-sky-700">MCP hub</span>
        </Link>
        <NavigationMenu className="hidden lg:flex ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg font-bold">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-2">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Image src={waveIcon} alt="Wave" className="h-24 w-24"></Image>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Wave
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover, manager, and share MCP tools for LLM client
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      className="row-span-1 h-full"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg font-bold">Developers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {[
                    { title: "Documentation", href: "/docs" },
                    { title: "API Reference", href: "/api" },
                    { title: "Community", href: "/community" },
                    { title: "Open Source", href: "/open-source" },
                  ].map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.title} resources and guides
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg font-bold")}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:block">
            <Input
              type="search"
              placeholder="Search..."
              className="w-auto md:w-[200px] lg:w-[300px]"
            />
          </div>
          <Button className="hidden md:inline-flex">Sign In</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Whale className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Access Wave resources and navigation
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Link
                  href="/products"
                  className="text-sm font-medium hover:underline"
                >
                  Products
                </Link>
                <Link
                  href="/developers"
                  className="text-sm font-medium hover:underline"
                >
                  Developers
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:underline"
                >
                  About
                </Link>
              </div>
              <div className="mt-4">
                <Input type="search" placeholder="Search..." />
              </div>
              <div className="mt-4">
                <Button className="w-full">Sign In</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
