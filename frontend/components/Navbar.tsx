"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Features", href: "/#features" },
      { label: "Success Stories", href: "/#stories" }
    ],
    []
  );

  return (
    <div className="relative z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#76B15B]">
            NTRL
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (isHome && item.href === "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
                  }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-3 left-0 h-[2px] w-full rounded-full bg-[#76B15B]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-zinc-700 hover:text-zinc-900 md:block"
          >
            Login
          </Link>
          <button className="rounded-full bg-gradient-to-b from-[#76B15B] to-[#458237] px-5 py-2 text-sm font-bold text-white shadow-md shadow-[#76B15B]/25 transition active:scale-[0.98]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
