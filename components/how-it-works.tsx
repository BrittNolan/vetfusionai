import { SectionHeading } from "@/components/ui";

const steps = [
  {
    title: "Capture",
    body: "Technicians, doctors, or care staff capture observations, history, vitals, treatments, diagnostics, and concerns in a structured input format.",
    who: "Care team",
  },
  {
    title: "Draft",
    body: "VetFusion templates and prompts help generate a draft SOAP, treatment summary, diagnostic summary, or follow-up note.",
    who: "AI-assisted",
  },
  {
    title: "Check",
    body: "The workflow flags missing data, contradictions, dose details to verify, pending diagnostics, and plan language requiring review.",
    who: "Quality control",
  },
  {
    title: "Clinical review",
    body: "A veterinarian or authorized clinical reviewer checks facts, dosage language, assessment, plan, and medical appropriateness.",
    who: "DVM",
  },
  {
    title: "Finalize",
    body: "The approved record is finalized into your organization’s medical-record workflow.",
    who: "DVM",
  },
  {
    title: "Follow through",
    body: "Active plans feed treatment sheets, recheck trackers, med-follow-through lists, ICU boards, and review packets.",
    who: "Care team",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-line bg-parchment/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="06"
            eyebrow="How it works"
            title={
              <>
                AI drafts.{" "}
                <em className="text-pine italic">Veterinarians decide.</em>
              </>
            }
            lede="Every workflow VetFusion sets up is human-in-the-loop and veterinarian-controlled — from first note to finalized record to daily follow-through."
          />
        </div>

        <ol className="reveal mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const isDvm = step.who === "DVM";
            return (
              <li
                key={step.title}
                className={`relative rounded-2xl border p-7 sm:p-8 ${
                  isDvm
                    ? "border-pine/30 bg-sage/45 shadow-card"
                    : "border-line bg-paper shadow-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] font-medium tracking-[0.2em] text-copper">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 font-mono text-[0.58rem] font-semibold uppercase tracking-wider ${
                      isDvm
                        ? "bg-pine text-paper"
                        : "border border-ink/15 text-moss"
                    }`}
                  >
                    {step.who}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-moss">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>

        <p className="reveal mt-10 text-center font-mono text-[0.72rem] tracking-wide text-moss">
          AI never independently diagnoses, prescribes, interprets imaging,
          approves treatment, or finalizes the medical record.
        </p>
      </div>
    </section>
  );
}
