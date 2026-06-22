"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/ui";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#deliverables", label: "What we build" },
  { href: "/#sprint", label: "Setup" },
  { href: "/#platform", label: "Platform" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#about", label: "About" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="VetFusion home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.9rem] font-medium text-ink/70 transition-colors hover:text-pine"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="https://app.vetfusion.ai/login"
            className="text-[0.9rem] font-medium text-ink/70 transition-colors hover:text-pine"
          >
            Log in
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-[0.85rem] font-semibold text-paper transition duration-200 hover:bg-pine-deep active:scale-[0.97]"
          >
            Set Up Your Records Workflow
          </Link>
        </div>

        <button
          type="button"
          className="flex size-11 flex-col items-center justify-center gap-1.5 transition active:scale-95 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-line bg-paper px-5 pt-2 pb-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href} className="border-b border-line/70">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-medium text-ink/80"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://app.vetfusion.ai/login"
            className="block border-b border-line/70 py-3.5 font-medium text-ink/80"
          >
            Log in
          </a>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center rounded-full bg-pine px-5 py-3 font-semibold text-paper transition active:scale-[0.98]"
          >
            Set Up Your Records Workflow
          </Link>
        </nav>
      )}
    </header>
  );
}
