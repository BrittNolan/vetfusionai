import { SectionHeading } from "@/components/ui";

const features = [
  {
    title: "Lab trend summaries",
    body: "CBC, chemistry, and UA values with abnormal flags, serial changes, and follow-up questions for the DVM.",
  },
  {
    title: "Radiology report organization",
    body: "Findings from existing reports, impression summaries, pending follow-ups, and case-review questions.",
  },
  {
    title: "Ultrasound report organization",
    body: "Key findings, follow-up needs, and medication or diet considerations — prepared for veterinarian review.",
  },
  {
    title: "Diagnostic pending tracker",
    body: "Ordered → received → reviewed → team notified → plan updated → record finalized. Nothing falls through.",
  },
];

const labRows = [
  { test: "HCT", value: "29.4%", ref: "37–55", flag: "LOW ↓", trend: "▼ from 31.2" },
  { test: "BUN", value: "34 mg/dL", ref: "7–27", flag: "HIGH ↑", trend: "▲ from 29" },
  { test: "CREA", value: "1.6 mg/dL", ref: "0.5–1.8", flag: "—", trend: "stable" },
  { test: "ALT", value: "88 U/L", ref: "10–125", flag: "—", trend: "stable" },
];

export function Diagnostics() {
  return (
    <section className="border-t border-line bg-cream/50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              index="08"
              eyebrow="Diagnostics & review"
              title={
                <>
                  Labs, imaging, and pending results —{" "}
                  <em className="text-pine italic">organized for review</em>.
                </>
              }
              lede="VetFusion helps organize lab results, imaging reports, and ultrasound findings into structured summaries, trend tables, review questions, and follow-up checklists — so veterinarians can review the important information faster."
            />
            <div className="reveal mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="border-t border-line pt-5">
                  <h3 className="text-[1rem] font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-[0.87rem] leading-relaxed text-moss">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="reveal mt-9 rounded-xl border border-line bg-paper px-5 py-4 text-[0.82rem] leading-relaxed text-moss">
              <span className="font-semibold text-ink">Boundary:</span> final
              interpretation always remains with the veterinarian, radiologist,
              sonographer, or appropriate clinical reviewer. VetFusion prepares
              the review — it never provides final reads.
            </p>
          </div>

          <div className="reveal">
            <div className="overflow-hidden rounded-2xl border border-line bg-parchment shadow-lift">
              <div className="flex items-center justify-between border-b border-line bg-paper px-6 py-4">
                <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-moss">
                  Lab trend summary · “Biscuit” · chem + CBC
                </p>
                <span className="rounded-full border border-copper/40 bg-copper/10 px-2.5 py-1 font-mono text-[0.55rem] font-semibold uppercase tracking-wider text-copper">
                  2 flags
                </span>
              </div>
              <div className="px-6 py-2">
                <div className="grid grid-cols-[auto_1fr_auto_auto] items-baseline gap-x-5 border-b border-line py-2.5 font-mono text-[0.58rem] font-semibold uppercase tracking-wider text-moss">
                  <span>Test</span>
                  <span>Result</span>
                  <span className="hidden sm:block">Flag</span>
                  <span>Trend</span>
                </div>
                {labRows.map((r) => (
                  <div
                    key={r.test}
                    className="grid grid-cols-[auto_1fr_auto_auto] items-baseline gap-x-5 border-b border-line/60 py-3 last:border-b-0"
                  >
                    <span className="w-12 font-mono text-[0.72rem] font-semibold text-ink">
                      {r.test}
                    </span>
                    <span className="text-[0.8rem] text-ink/80">
                      {r.value}{" "}
                      <span className="font-mono text-[0.62rem] text-moss">
                        ({r.ref})
                      </span>
                    </span>
                    <span
                      className={`hidden w-14 font-mono text-[0.6rem] font-semibold sm:block ${
                        r.flag === "—" ? "text-moss" : "text-flag"
                      }`}
                    >
                      {r.flag}
                    </span>
                    <span className="font-mono text-[0.62rem] text-moss">
                      {r.trend}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-line bg-sage/40 px-6 py-4">
                <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-pine">
                  Review questions for DVM
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-ink/75">
                  Mild anemia trending down — confirm recheck interval. BUN
                  elevated with normal CREA — flagged for DVM review. Confirm
                  next chem panel timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
