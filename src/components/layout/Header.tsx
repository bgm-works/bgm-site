"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "サービス", href: "/#services" },
  { label: "実績", href: "/works" },
  { label: "料金", href: "/pricing" },
  { label: "ブログ", href: "/blog" },
  { label: "お問い合わせ", href: "/contact", highlight: true },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fafaf8]/90 backdrop-blur-sm border-b border-[#e2e2de]">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight text-[#1a1a18]">BGM</span>
          <span className="text-[10px] text-[#6b6b68] tracking-widest uppercase">Business Growth Mechanics</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.highlight ? (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 bg-[#3d6b4f] text-white text-sm font-medium rounded-full hover:bg-[#2d5a3f] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#6b6b68] hover:text-[#1a1a18] transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#6b6b68]"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-200",
          open ? "max-h-96 border-b border-[#e2e2de]" : "max-h-0"
        )}
      >
        <nav className="container-wide py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                item.highlight
                  ? "text-[#3d6b4f]"
                  : "text-[#1a1a18] hover:text-[#3d6b4f]"
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
