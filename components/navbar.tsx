"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  ["Store", "/store"],
  ["Blog", "/blog"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Dashboard", "/dashboard"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/[.08] bg-black/[.55] backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Crelolabs Logo"
            width={40}
            height={40}
            className="rounded-md transition group-hover:shadow-glow"
          />
          <span className="text-sm font-semibold tracking-wide text-white">Crelolabs</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm text-white/[.62] transition hover:bg-white/[.08] hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Account">
            <Link href="/dashboard">
              <UserRound className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/checkout">
              <ShoppingBag className="h-4 w-4" />
              Checkout
            </Link>
          </Button>
        </div>
        <button className="rounded-md p-2 text-white md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div className={cn("grid border-t border-white/[.08] md:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="block rounded-md px-3 py-3 text-sm text-white/70 hover:bg-white/[.08]">
                {label}
              </Link>
            ))}
            <Button className="mt-2 w-full" asChild>
              <Link href="/checkout">Open checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
