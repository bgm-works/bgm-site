"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { BrandWord } from "@/components/shared/brand-word";

const navItems = [
  { label: "サービス", href: "/#services" },
  { label: "実績", href: "/works" },
  { label: "料金", href: "/pricing" },
  { label: "ブログ", href: "/blog" },
  { label: "お問い合わせ", href: "/contact", highlight: true },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="container-wide flex h-18 items-center justify-between gap-3">
        <Link href="/" className="flex flex-col leading-none">
          <BrandWord className="text-xl" />
          <span className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
            Business Growth Mechanics
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                {item.highlight ? (
                  <Button
                    render={<Link href={item.href} />}
                    className="rounded-full px-4"
                  >
                    {item.label}
                  </Button>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="メニューを開く"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetTitle className="px-5 pt-5 text-sm tracking-[0.18em] uppercase text-muted-foreground">
              Menu
            </SheetTitle>
            <Separator className="mt-4" />
            <nav className="flex flex-col gap-2 px-4 py-4">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant={item.highlight ? "default" : "ghost"}
                  className="justify-start"
                  render={<Link href={item.href} />}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
