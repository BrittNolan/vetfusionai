import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { ButtonPrimary, Stamp } from "@/components/ui";

export const metadata: Metadata = {
  title: "Log in",
  description:
    "VetFusion account sign-in is launching soon. Platform access is provisioned for your team as part of a VetFusion records-workflow setup.",
};

export default function LoginPage() {
  return (
    <>
      <SiteNav />
      <main className="relative overflow-hidden">
        <div aria-hidden className="ruled ruled-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-2xl px-5 pt-40 pb-32 text-center sm:px-8 lg:pt-48">
          <p className="font-mono text-[0.8rem] font-semibold text-copper">
            VetFusion · Account access
          </p>
          <h1 className="mt-5 font-display text-5xl font-medium tracking-tight text-balance text-ink sm:text-6xl">
            Sign-in is launching soon
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-moss">
            The VetFusion app is being set up. Platform access is provisioned for
            your team as part of a VetFusion records-workflow setup — once your
            workspace is live, you&rsquo;ll sign in right here.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-line bg-parchment p-7 text-left shadow-card">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-moss">
                Want early access?
              </p>
              <Stamp className="-rotate-2 text-pine">Coming soon</Stamp>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/80">
              Tell us about your workflow and we&rsquo;ll get your team set up —
              we&rsquo;ll reach out to arrange access.
            </p>
            <div className="mt-6">
              <ButtonPrimary href="/#contact">Request access</ButtonPrimary>
            </div>
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
