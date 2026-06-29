import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { ButtonPrimary, Stamp } from "@/components/ui";
import { platformTools } from "@/lib/platform-tools";

const navCard =
  "group flex flex-col rounded-2xl border border-line bg-parchment p-5 transition-colors hover:bg-sage/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

export function PlatformPage({
  route,
  title,
  description,
  capabilities,
  illustration,
}: {
  route: string;
  title: string;
  description: string;
  capabilities: string[];
  illustration?: string;
}) {
  const i = platformTools.findIndex((t) => t.route === route);
  const prev = i > 0 ? platformTools[i - 1] : null;
  const next = i >= 0 && i < platformTools.length - 1 ? platformTools[i + 1] : null;

  return (
    <>
      <SiteNav />
      <main id="main-content" className="relative overflow-hidden">
        <div aria-hidden className="ruled ruled-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 pt-28 pb-20 sm:px-8 lg:pt-36 lg:pb-28">
          <div className="flex flex-col-reverse items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="min-w-0">
              <p className="font-mono text-[0.8rem] font-semibold text-copper">
                VetFusion platform · {route}
              </p>
              <h1 className="mt-5 font-display text-5xl font-medium tracking-tight text-balance text-ink lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-moss">
                {description}
              </p>
            </div>
            {illustration && (
              <Image
                src={illustration}
                alt=""
                aria-hidden
                width={512}
                height={512}
                className="w-36 shrink-0 self-start sm:w-44 lg:w-52 lg:self-center"
              />
            )}
          </div>

          <div className="mt-12 rounded-2xl border border-line bg-parchment p-8 shadow-card sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display text-xl font-medium tracking-tight text-ink">
                What this workspace handles
              </h2>
              <Stamp className="-rotate-2 text-pine">Configured during setup</Stamp>
            </div>
            <ul className="mt-7 space-y-0">
              {capabilities.map((cap, idx) => (
                <li
                  key={cap}
                  className="flex items-start gap-4 border-b border-line/70 py-3.5 last:border-b-0"
                >
                  <span className="mt-0.5 font-mono text-[0.7rem] font-medium text-copper">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-ink/80">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <ButtonPrimary href="/#contact">Set up your records workflow</ButtonPrimary>
            <p className="max-w-sm text-[0.85rem] leading-relaxed text-moss">
              Platform access is provisioned for your team as part of a
              VetFusion setup — sign-in for existing teams continues to work as
              usual.
            </p>
          </div>

          {/* Click-through to the other tools — never a dead end */}
          <nav
            aria-label="More platform tools"
            className="mt-14 grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-2"
          >
            {prev ? (
              <Link href={prev.route} className={navCard}>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-moss">
                  ← Previous
                </span>
                <span className="mt-1.5 font-display text-lg font-medium text-ink transition-colors group-hover:text-pine">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <Link href="/#platform" className={navCard}>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-moss">
                  ← Overview
                </span>
                <span className="mt-1.5 font-display text-lg font-medium text-ink transition-colors group-hover:text-pine">
                  All platform tools
                </span>
              </Link>
            )}
            {next ? (
              <Link href={next.route} className={`${navCard} sm:items-end sm:text-right`}>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-moss">
                  Next →
                </span>
                <span className="mt-1.5 font-display text-lg font-medium text-ink transition-colors group-hover:text-pine">
                  {next.title}
                </span>
              </Link>
            ) : (
              <Link href="/#platform" className={`${navCard} sm:items-end sm:text-right`}>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-moss">
                  Overview →
                </span>
                <span className="mt-1.5 font-display text-lg font-medium text-ink transition-colors group-hover:text-pine">
                  All platform tools
                </span>
              </Link>
            )}
          </nav>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded font-mono text-[0.78rem] text-moss transition-colors hover:text-pine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            ← Back to vetfusion.ai
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
