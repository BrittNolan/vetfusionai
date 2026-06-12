import { SectionHeading } from "@/components/ui";

const faqs = [
  {
    q: "Does VetFusion replace a veterinarian?",
    a: "No. VetFusion supports documentation, review preparation, treatment visibility, and care continuity. Diagnosis, prescribing, treatment approval, prognosis, surgery decisions, and final medical decisions remain with licensed veterinarians and authorized clinical teams.",
  },
  {
    q: "How much time can VetFusion save?",
    a: "Time savings depends on the workflow, case volume, staff adoption, and review process. In founder use, this type of workflow has saved up to about five hours per day in records while improving record quality. VetFusion can help measure your baseline and build a workflow designed to reduce record burden.",
  },
  {
    q: "Is VetFusion another monthly AI scribe subscription?",
    a: "No. VetFusion is setup-and-support. The starter offer is a one-time setup with a defined launch support period. Continued support can be renewed if the team wants help after launch — but it's optional, not required.",
  },
  {
    q: "What is the AI SOAP Setup Sprint?",
    a: "A focused setup package, starting at $1,500, that helps an animal hospital, rescue, shelter, or sanctuary set up one AI-assisted medical-record workflow with templates, prompts, review steps, staff training, and launch support.",
  },
  {
    q: "Can VetFusion train our team to use AI for SOAPs?",
    a: "Yes. VetFusion sets up prompt libraries, input formats, review checklists, and staff training so AI-assisted drafts are easier to create and safer to review.",
  },
  {
    q: "Can VetFusion help with treatment sheets?",
    a: "Yes. VetFusion helps turn approved plans into treatment sheets with medications, monitoring instructions, due times, missed-dose flags, escalation triggers, and follow-up dates.",
  },
  {
    q: "Can VetFusion help ICU or hospitalized cases?",
    a: "Yes. VetFusion can organize hospitalized case boards, rounds sheets, patient status summaries, trends, diagnostics pending, meds due, and next-step visibility.",
  },
  {
    q: "Can VetFusion help with labs, radiographs, or ultrasound?",
    a: "VetFusion can help organize lab trends and imaging/ultrasound reports into structured summaries and review questions. Final interpretation remains with the veterinarian, radiologist, sonographer, or appropriate clinical reviewer.",
  },
  {
    q: "Can VetFusion help with inventory?",
    a: "Yes. VetFusion can help teams track medication, food, special diets, medical supplies, expirations, reorder points, backorders, and vendor/supply blockers.",
  },
  {
    q: "Can VetFusion help business or nonprofit operations?",
    a: "Yes. As an operations workflow layer, VetFusion can help organize AP/AR task visibility, payroll handoff status, contractor/vendor trackers, admin blockers, procurement, and leadership dashboards. It does not replace accounting, payroll, HR, tax, or other professional advisors.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-cream/50">
      <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          index="12"
          eyebrow="Questions"
          align="center"
          title={
            <>
              Asked, <em className="text-pine italic">answered</em>.
            </>
          }
        />

        <div className="reveal mt-12 overflow-hidden rounded-2xl border border-line bg-paper shadow-card">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="faq group border-b border-line last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-7 py-5 transition-colors hover:bg-parchment sm:px-9">
                <h3 className="text-[1rem] font-semibold text-ink sm:text-[1.05rem]">
                  {item.q}
                </h3>
                <span
                  aria-hidden
                  className="faq-plus flex size-7 shrink-0 items-center justify-center rounded-full border border-ink/15 font-display text-base text-pine transition-transform duration-300"
                >
                  +
                </span>
              </summary>
              <p className="px-7 pb-6 text-[0.93rem] leading-relaxed text-moss sm:px-9">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
