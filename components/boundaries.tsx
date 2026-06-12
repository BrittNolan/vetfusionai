import { Eyebrow } from "@/components/ui";

const supports = [
  "Documentation & AI-assisted draft workflows",
  "Workflow design, training & staff execution support",
  "Treatment visibility & follow-through tracking",
  "Reporting, review preparation & care continuity",
];

const remains = [
  "Diagnosis, prescribing & treatment approval — licensed veterinarians",
  "Final medical decisions — authorized clinical teams",
  "Imaging & lab interpretation — DVMs, radiologists, clinical reviewers",
  "Accounting, payroll, HR, tax & legal — qualified professionals",
];

export function Boundaries() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <div className="flex justify-center">
          <Eyebrow index="11">Authority boundaries</Eyebrow>
        </div>
        <h2 className="reveal mx-auto mt-6 max-w-3xl font-display text-4xl font-medium tracking-tight text-balance text-ink sm:text-6xl">
          The decisions that matter stay{" "}
          <em className="text-pine italic">exactly where they belong</em>.
        </h2>
        <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-moss">
          AI drafts. Veterinarians decide. VetFusion supports documentation,
          workflow, training, reporting, and review preparation — nothing more.
        </p>

        <div className="reveal mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line text-left sm:grid-cols-2">
          <div className="bg-paper p-8 sm:p-10">
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-pine">
              VetFusion supports
            </p>
            <ul className="mt-6 space-y-4">
              {supports.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-sage text-[0.6rem] text-pine"
                  >
                    ✓
                  </span>
                  <span className="text-[0.92rem] leading-relaxed text-ink/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-cream/70 p-8 sm:p-10">
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-copper">
              Always remains with your team
            </p>
            <ul className="mt-6 space-y-4">
              {remains.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-copper/40 text-[0.55rem] text-copper"
                  >
                    ◆
                  </span>
                  <span className="text-[0.92rem] leading-relaxed text-ink/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
