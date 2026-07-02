import { ButtonPrimary, ButtonSecondary, Eyebrow, Stamp } from "@/components/ui";

const included = [
  {
    title: "Current workflow intake",
    body: "Where notes, SOAPs, staff observations, diagnostics, and treatment updates live today.",
  },
  {
    title: "Time baseline",
    body: "How many hours per week are spent creating, editing, hunting for, or finalizing records.",
  },
  {
    title: "AI SOAP template setup",
    body: "For your chosen workflow: sick visits, rechecks, surgery follow-ups, shelter rounds, or chronic care.",
  },
  {
    title: "Prompt library",
    body: "SOAP drafts, brief recheck SOAPs, diagnostic summaries, discharge and follow-up drafts, and finalization language.",
  },
  {
    title: "Staff training",
    body: "How to prepare inputs — and how veterinarians review and finalize outputs safely.",
  },
  {
    title: "Treatment-sheet handoff",
    body: "A format so approved plans become clear daily instructions for the care team.",
  },
  {
    title: "Recheck, callback & escalation tracker",
    body: "Rechecks, callbacks, and escalations stay visible for true follow-through.",
  },
  {
    title: "Quality-control checklist",
    body: "Missing data, hallucination checks, med/dose verification, diagnostic source verification, and final DVM review.",
  },
  {
    title: "Defined launch support",
    body: "A support period for questions, template refinements, and workflow stabilization.",
  },
];

export function Sprint() {
  return (
    <section id="sprint" className="relative overflow-hidden bg-pine-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/4 size-[560px] rounded-full bg-pine-soft/30 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <div className="reveal">
            <Eyebrow index="05" tone="dark">
              The starter package
            </Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium tracking-tight text-balance text-paper sm:text-5xl">
              VetFusion AI SOAP{" "}
              <em className="text-copper-soft italic">Setup Sprint</em>
            </h2>

            <div className="mt-9 flex flex-wrap items-end gap-x-5 gap-y-3">
              <p className="font-display text-4xl font-medium tracking-tight text-paper sm:text-5xl">
                Priced by inquiry
              </p>
              <div className="pb-2">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/60">
                  scoped to one defined workflow
                </p>
                <Stamp className="mt-2.5 -rotate-2 text-copper-soft">
                  One-time setup
                </Stamp>
              </div>
            </div>

            <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/60">
              A starter implementation for one workflow — not a complete
              enterprise transformation.
            </p>

            <p className="mt-7 max-w-lg text-[1.02rem] leading-relaxed text-paper/75">
              VetFusion helps your team set up an AI-assisted SOAP and
              medical-record workflow tailored to your environment. We build
              the templates, prompts, review steps, treatment-sheet handoff,
              finalization checklist, and launch support — so your team can
              turn daily notes into cleaner, reviewable records while keeping
              veterinarians in control of final medical decisions.
            </p>

            <div className="mt-8 rounded-xl border border-paper/15 bg-paper/[0.02] p-5">
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-copper-soft">
                Support model
              </p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-paper/75">
                Setup includes a defined launch support period. Additional
                support can be renewed if your team wants continued workflow
                help, new templates, additional departments, or ongoing
                review-system improvements.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
              <ButtonPrimary href="/#contact" tone="dark">
                Request a Setup Sprint
              </ButtonPrimary>
              <ButtonSecondary href="/#contact" tone="dark">
                Ask about larger builds
              </ButtonSecondary>
            </div>
            <p className="mt-5 font-mono text-[0.7rem] leading-relaxed tracking-wide text-paper/60">
              Larger builds — records + treatment follow-through, 30-day
              records reset, ICU continuity, rescue/sanctuary buildouts — are
              scoped custom.
            </p>
          </div>

          <div className="reveal">
            <div className="rounded-2xl border border-paper/12 bg-paper/[0.04] backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-paper/12 px-7 py-4">
                <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-paper/60">
                  What the sprint includes
                </p>
                <p className="font-mono text-[0.65rem] text-paper/60">
                  {String(included.length).padStart(2, "0")} items
                </p>
              </div>
              <ul>
                {included.map((item, i) => (
                  <li
                    key={item.title}
                    className="flex gap-5 border-b border-paper/10 px-7 py-4.5 last:border-b-0"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 font-mono text-[0.68rem] font-medium text-copper-soft"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[0.95rem] font-semibold text-paper">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[0.84rem] leading-relaxed text-paper/60">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
