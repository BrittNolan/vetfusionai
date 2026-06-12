import { SectionHeading, Stamp } from "@/components/ui";

const steps = [
  {
    n: "01",
    title: "One setup",
    body: "We help your team set up the records workflow — templates, prompts, trackers, review steps, treatment-sheet handoffs — and train staff to use it safely.",
  },
  {
    n: "02",
    title: "Launch support included",
    body: "Every setup includes a defined launch support period for questions, template refinements, and workflow stabilization while your team makes it routine.",
  },
  {
    n: "03",
    title: "Renew only if you want",
    body: "After launch, support can be renewed in blocks if your team wants continued help — new templates, additional departments, or ongoing review-system improvements.",
  },
];

export function SetupModel() {
  return (
    <section className="border-t border-line bg-cream/50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="03"
            eyebrow="The model"
            title={
              <>
                One setup. Not another required{" "}
                <em className="text-pine italic">monthly subscription</em>.
              </>
            }
            lede="VetFusion is built around implementation. The core promise is setup and practical use — not another subscription your team cannot escape."
          />
          <div className="reveal shrink-0">
            <Stamp className="rotate-2 text-copper">No required monthly scribe fee</Stamp>
          </div>
        </div>

        <div className="reveal mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="bg-paper p-8 sm:p-10">
              <p className="font-mono text-[0.7rem] font-medium tracking-[0.2em] text-copper">
                {step.n}
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-3.5 text-[0.95rem] leading-relaxed text-moss">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal mx-auto mt-12 max-w-3xl text-center font-display text-xl leading-relaxed text-ink/80 italic sm:text-2xl">
          “AI scribe tools help generate notes. VetFusion helps the team set up
          the records workflow, train safely, connect the outputs to treatment
          follow-through, and keep the whole care system reviewable.”
        </p>
      </div>
    </section>
  );
}
