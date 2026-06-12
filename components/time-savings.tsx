import { SectionHeading } from "@/components/ui";

const bullets = [
  "Spend less time rebuilding the chart from memory at the end of the day.",
  "Turn technician notes, doctor findings, diagnostics, and treatment updates into structured SOAP drafts faster.",
  "Reduce end-of-day record backlog and make same-day finalization more realistic.",
  "Give doctors cleaner review surfaces instead of scattered notes.",
  "Turn approved plans into treatment sheets, recheck trackers, and med-follow-through lists.",
];

const roiRows = [
  { scenario: "Small save", assumption: "30 min/day × 30 days × $50/hr", value: "≈ $750/mo" },
  { scenario: "Moderate save", assumption: "1 hr/day × 30 days × $50/hr", value: "≈ $1,500/mo" },
  { scenario: "Strong save", assumption: "2 hrs/day × 30 days × $75/hr", value: "≈ $4,500/mo" },
];

export function TimeSavings() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <div>
            <SectionHeading
              index="02"
              eyebrow="Time back"
              title={
                <>
                  Get record time back —{" "}
                  <em className="text-pine italic">without</em> lowering the
                  standard.
                </>
              }
              lede="VetFusion is designed to reduce record burden while improving structure, completeness, and reviewability. Faster records should not mean thinner records. The goal is cleaner documentation, less after-hours charting, and better follow-through."
            />
            <ul className="reveal mt-10 space-y-0">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-4 border-b border-line/70 py-4 first:border-t first:border-line/70"
                >
                  <span
                    aria-hidden
                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-sage text-[0.6rem] text-pine"
                  >
                    ✓
                  </span>
                  <span className="text-[0.98rem] leading-relaxed text-ink/80">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal flex flex-col gap-6">
            {/* Founder stat */}
            <div className="relative overflow-hidden rounded-2xl bg-pine-deep p-8 text-paper sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-pine-soft/40 blur-3xl"
              />
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-copper-soft">
                Founder result
              </p>
              <p className="mt-4 font-display text-6xl font-medium tracking-tight sm:text-7xl">
                ~5 <span className="text-4xl sm:text-5xl">hrs/day</span>
              </p>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-paper/75">
                Record time saved in the founder’s own AI-assisted records
                workflow — while improving the quality, structure, and
                reviewability of the records. A real-world origin story, not a
                universal guarantee.
              </p>
              <p className="mt-5 border-t border-paper/15 pt-4 font-mono text-[0.7rem] leading-relaxed tracking-wide text-paper/60">
                During setup, we establish your baseline so your team can
                measure record time before and after launch.
              </p>
            </div>

            {/* ROI table */}
            <div className="rounded-2xl border border-line bg-parchment shadow-card">
              <div className="border-b border-line px-7 py-4">
                <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-moss">
                  What time is worth · illustrative
                </p>
              </div>
              <div className="px-7 py-2">
                {roiRows.map((row) => (
                  <div
                    key={row.scenario}
                    className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 border-b border-line/60 py-3.5 last:border-b-0"
                  >
                    <span className="text-[0.9rem] font-semibold text-ink">
                      {row.scenario}
                    </span>
                    <span className="hidden truncate font-mono text-[0.7rem] text-moss sm:block">
                      {row.assumption}
                    </span>
                    <span className="font-display text-lg font-medium text-pine">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="border-t border-line px-7 py-3.5 text-[0.74rem] leading-relaxed text-moss">
                If your team saves even 30 minutes a day, a setup sprint can
                pay for itself quickly. Results vary by workflow, case volume,
                staff adoption, and veterinarian review process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
