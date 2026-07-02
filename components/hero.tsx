import { ButtonPrimary, ButtonSecondary, Eyebrow, Stamp } from "@/components/ui";

function SoapRow({
  letter,
  label,
  children,
  flag,
}: {
  letter: string;
  label: string;
  children: React.ReactNode;
  flag?: string;
}) {
  return (
    <div className="flex gap-3 border-b border-line/70 px-5 py-3 last:border-b-0">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-sage font-display text-sm font-semibold text-pine">
        {letter}
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-moss">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[0.8rem] leading-snug text-ink/80">
          {children}
        </p>
        {flag && (
          <p className="mt-1 inline-flex items-center gap-1.5 rounded bg-flag/10 px-1.5 py-0.5 font-mono text-[0.62rem] font-medium text-flag">
            <span aria-hidden>⚑</span> {flag}
          </p>
        )}
      </div>
    </div>
  );
}

function PipelineStep({
  label,
  state,
}: {
  label: string;
  state: "done" | "active" | "todo";
}) {
  return (
    <span className="flex items-center gap-1.5 font-mono text-[0.6rem] font-medium uppercase tracking-wider">
      <span
        aria-hidden
        className={`flex size-3.5 items-center justify-center rounded-full text-[0.5rem] ${
          state === "done"
            ? "bg-pine text-paper"
            : state === "active"
              ? "border-[1.5px] border-copper bg-copper/15 text-copper"
              : "border border-ink/25 text-transparent"
        }`}
      >
        {state === "done" ? "✓" : "●"}
      </span>
      <span
        className={
          state === "active"
            ? "text-copper"
            : state === "done"
              ? "text-ink/70"
              : "text-ink/40"
        }
      >
        {label}
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="ruled ruled-fade pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-15%] size-[640px] rounded-full bg-sage/70 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[30%] left-[-20%] size-[520px] rounded-full bg-cream blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-20 sm:px-8 lg:pt-44 lg:pb-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          {/* Copy */}
          <div>
            <div className="hero-rise" style={{ "--rise-delay": "0s" } as React.CSSProperties}>
              <Eyebrow>Setup &amp; support for animal-care teams</Eyebrow>
            </div>
            <h1
              className="hero-rise mt-6 font-display text-[2.65rem] leading-[1.06] font-medium tracking-tight text-balance text-ink sm:text-6xl lg:text-[4.1rem] lg:leading-[1.1]"
              style={{ "--rise-delay": "0.08s" } as React.CSSProperties}
            >
              AI-assisted veterinary records, SOAPs, and{" "}
              <em className="whitespace-nowrap text-pine italic">care-continuity</em>{" "}
              workflows.
            </h1>
            <p
              className="hero-rise mt-7 max-w-xl text-lg leading-relaxed text-moss"
              style={{ "--rise-delay": "0.16s" } as React.CSSProperties}
            >
              VetFusion helps animal hospitals, rescues, shelters, and
              sanctuaries set up cleaner SOAP generation, treatment sheets,
              diagnostic summaries, med follow-through, inventory visibility,
              and reviewable care systems — designed to save hours of record
              time while keeping veterinarians in control of final medical
              decisions.
            </p>
            <div
              className="hero-rise mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              style={{ "--rise-delay": "0.24s" } as React.CSSProperties}
            >
              <ButtonPrimary href="/#contact">
                Set Up Your Records Workflow
              </ButtonPrimary>
              <ButtonSecondary href="/#contact">
                Start With a Continuity Assessment
              </ButtonSecondary>
            </div>
            <p
              className="hero-rise mt-6 font-mono text-[0.72rem] tracking-wide text-moss"
              style={{ "--rise-delay": "0.32s" } as React.CSSProperties}
            >
              One setup. Launch support included. Optional renewal when your
              team wants more help.
            </p>
          </div>

          {/* Chart artifacts */}
          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
            {/* Treatment sheet, tucked behind */}
            <div
              className="hero-settle absolute -top-8 -left-4 hidden w-72 rotate-[-5deg] rounded-xl border border-line bg-cream/90 p-4 shadow-card sm:block"
              style={
                {
                  "--rise-delay": "0.45s",
                  "--settle-from": "-9deg",
                  "--settle-to": "-5deg",
                } as React.CSSProperties
              }
            >
              <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-moss">
                Treatment sheet · meds due 08:00
              </p>
              <div className="mt-3 space-y-2">
                {[
                  ["Gabapentin 100 mg PO", "given ✓"],
                  ["Cerenia 16 mg PO", "given ✓"],
                  ["SQ fluids 150 mL", "due"],
                ].map(([med, status]) => (
                  <div
                    key={med}
                    className="flex items-center justify-between gap-3 border-b border-line/60 pb-2 text-[0.72rem] last:border-b-0 last:pb-0"
                  >
                    <span className="text-ink/75">{med}</span>
                    <span
                      className={`font-mono text-[0.6rem] uppercase ${
                        status === "due" ? "text-copper" : "text-pine"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SOAP draft card */}
            <div
              className="hero-settle relative z-10 rotate-[1.2deg] rounded-2xl border border-line bg-parchment shadow-lift sm:ml-16"
              style={
                {
                  "--rise-delay": "0.35s",
                  "--settle-from": "3deg",
                  "--settle-to": "1.2deg",
                } as React.CSSProperties
              }
            >
              <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
                <div>
                  <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-moss">
                    SOAP draft · #2419
                  </p>
                  <p className="mt-0.5 font-display text-base font-medium text-ink">
                    “Biscuit” <span className="text-moss">· canine · 7y</span>
                  </p>
                </div>
                <span className="rounded-full border border-copper/40 bg-copper/10 px-2.5 py-1 font-mono text-[0.58rem] font-semibold uppercase tracking-wider text-copper">
                  Ready for DVM review
                </span>
              </div>

              <SoapRow letter="S" label="Subjective">
                Owner reports improved appetite; mild lethargy persists after…
              </SoapRow>
              <SoapRow letter="O" label="Objective">
                T 101.8°F · HR 92 · RR 24 · wt 24.1 kg (+0.3) · mm pink, CRT &lt;2s
              </SoapRow>
              <SoapRow letter="A" label="Assessment">
                Resolving gastroenteritis; monitor hydration and weight trend…
              </SoapRow>
              <SoapRow
                letter="P"
                label="Plan"
                flag="Verify dose before finalizing · CBC pending"
              >
                Continue metronidazole 250 mg PO BID × 3d; recheck in 72h…
              </SoapRow>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line bg-cream/50 px-5 py-3.5">
                <PipelineStep label="Capture" state="done" />
                <PipelineStep label="Draft" state="done" />
                <PipelineStep label="Check" state="done" />
                <PipelineStep label="DVM review" state="active" />
                <PipelineStep label="Finalize" state="todo" />
              </div>
            </div>

            {/* Stamp */}
            <div
              className="hero-settle absolute -right-2 -bottom-6 z-20 rotate-[-7deg] sm:right-2"
              style={
                {
                  "--rise-delay": "0.85s",
                  "--settle-from": "4deg",
                  "--settle-to": "-7deg",
                } as React.CSSProperties
              }
            >
              <Stamp className="bg-paper/80 text-pine backdrop-blur-sm">
                ✓ DVM reviewed · finalized
              </Stamp>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div
          className="hero-rise mt-20 grid grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          style={{ "--rise-delay": "0.5s" } as React.CSSProperties}
        >
          {[
            {
              stat: "~5 hrs/day",
              label:
                "record time saved in real-world, high-volume use — your baseline is measured during setup",
            },
            {
              stat: "One setup",
              label: "AI SOAP Setup Sprint — one defined workflow, priced by inquiry",
            },
            {
              stat: "AI drafts.",
              label: "Veterinarians decide. Human review on every record.",
            },
          ].map((item) => (
            <div key={item.stat} className="px-2 py-6 sm:px-8 sm:first:pl-2">
              <p className="font-display text-3xl font-medium tracking-tight text-pine">
                {item.stat}
              </p>
              <p className="mt-1.5 max-w-xs text-[0.85rem] leading-snug text-moss">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
