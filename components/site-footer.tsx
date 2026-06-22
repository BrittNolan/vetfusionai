import Link from "next/link";
import { Wordmark } from "@/components/ui";

const platformLinks = [
  { href: "/soap", label: "/soap" },
  { href: "/tracker", label: "/tracker" },
  { href: "/import", label: "/import" },
  { href: "/timeline", label: "/timeline" },
  { href: "/dashboard", label: "/dashboard" },
];

const siteLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#deliverables", label: "What we build" },
  { href: "/#sprint", label: "AI SOAP Setup Sprint" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-moss">
              AI-assisted veterinary records, SOAPs, and care-continuity
              workflows for animal hospitals, rescues, shelters, and
              sanctuaries. One setup. Launch support included.
            </p>
            <p className="mt-6 font-mono text-xs tracking-wide text-moss">
              <Link
                href="/#contact"
                className="underline-offset-4 hover:text-pine hover:underline"
              >
                Contact us →
              </Link>
            </p>
          </div>

          <nav aria-label="Site">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-copper">
              Site
            </p>
            <ul className="mt-4 space-y-2.5">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block py-1 text-[0.92rem] text-ink/70 transition-colors hover:text-pine"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Platform">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-copper">
              Platform
            </p>
            <ul className="mt-4 space-y-2.5">
              {platformLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block py-1 font-mono text-[0.85rem] text-ink/70 transition-colors hover:text-pine"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="max-w-4xl text-[0.8rem] leading-relaxed text-moss">
            VetFusion provides workflow, documentation, reporting, AI-assisted
            draft setup, and operational continuity support. Veterinary medical
            decisions remain with licensed veterinarians and authorized
            clinical teams. Accounting, payroll, HR, tax, and other
            professional decisions remain with the appropriate qualified
            professionals and authorized organizational leadership.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-moss">
              © {new Date().getFullYear()} VetFusion. All rights reserved.
            </p>
            <p className="font-mono text-xs tracking-wide text-moss">
              AI drafts. Veterinarians decide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
