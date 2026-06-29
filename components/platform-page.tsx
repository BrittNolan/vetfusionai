import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { ButtonPrimary, Stamp } from "@/components/ui";

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
  return (
    <>
      <SiteNav />
      <main id="main-content" className="relative overflow-hidden">
        <div aria-hidden className="ruled ruled-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 pt-40 pb-28 sm:px-8 lg:pt-48">
          <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="min-w-0">
              <p className="font-mono text-[0.8rem] font-semibold text-copper">
                VetFusion platform · {route}
              </p>
              <h1 className="mt-5 font-display text-5xl font-medium tracking-tight text-balance text-ink sm:text-6xl">
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
                className="w-40 shrink-0 self-center sm:w-44 lg:w-52"
              />
            )}
          </div>

          <div className="mt-12 rounded-2xl border border-line bg-parchment p-8 shadow-card sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-moss">
                What this workspace handles
              </p>
              <Stamp className="-rotate-2 text-pine">Configured during setup</Stamp>
            </div>
            <ul className="mt-7 space-y-0">
              {capabilities.map((cap, i) => (
                <li
                  key={cap}
                  className="flex items-start gap-4 border-b border-line/70 py-3.5 last:border-b-0"
                >
                  <span className="mt-0.5 font-mono text-[0.7rem] font-medium text-copper">
                    {String(i + 1).padStart(2, "0")}
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

          <Link
            href="/"
            className="mt-12 inline-flex items-center gap-2 font-mono text-[0.78rem] text-moss transition-colors hover:text-pine"
          >
            ← Back to vetfusion.ai
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
