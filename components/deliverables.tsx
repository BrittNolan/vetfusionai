import { SectionHeading } from "@/components/ui";

const items = [
  {
    title: "AI-assisted SOAP drafts",
    body: "Structured drafts from technician notes, veterinarian findings, recheck updates, diagnostics, and plan inputs.",
  },
  {
    title: "Brief recheck SOAPs",
    body: "Shorter, packet-safe records for stable rechecks, wound, eye, and weight checks, lab follow-ups, and routine monitoring.",
  },
  {
    title: "Treatment sheets",
    body: "Daily medication and monitoring sheets with approved plans, due times, restrictions, and escalation triggers.",
  },
  {
    title: "Diagnostic-summary workflows",
    body: "Lab trend summaries, pending-diagnostic trackers, imaging report organization, and DVM review questions.",
  },
  {
    title: "ICU & hospitalized case boards",
    body: "Rounds-friendly boards: current status, meds due, diagnostics pending, and next-step visibility.",
  },
  {
    title: "Med follow-through trackers",
    body: "Active medications, changes, missed doses, refill needs, and “do not change unless directed” notes.",
  },
  {
    title: "Recheck & callback trackers",
    body: "Follow-ups, callbacks, and escalations that stay visible instead of living in someone’s memory.",
  },
  {
    title: "Inventory & reorder trackers",
    body: "Medication, food, special diets, supplies, expirations, reorder points, backorders, and vendor blockers.",
  },
  {
    title: "Population-health watch lists",
    body: "GI, respiratory, dermatology, ocular, wound, infectious-disease, and weight/body-condition trends.",
  },
  {
    title: "Review packets & dashboards",
    body: "Weekly or monthly clinical review packets, high-visibility case lists, decision logs, and leadership summaries.",
  },
  {
    title: "Business & nonprofit trackers",
    body: "AP/AR task visibility, payroll handoff status, contractor/vendor trackers, and admin continuity lists.",
  },
  {
    title: "Record-finalization checklists",
    body: "Missing data, dose verification, diagnostic source checks, and final DVM review — on every record.",
  },
];

export function Deliverables() {
  return (
    <section id="deliverables" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          index="04"
          eyebrow="What we help build"
          title={
            <>
              What VetFusion helps{" "}
              <em className="text-pine italic">create</em>.
            </>
          }
          lede="The note is the entry point — the workflow is the value. Every deliverable is a working document your team actually uses, not software noise."
        />

        <div className="reveal mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group bg-paper p-7 transition-colors duration-300 hover:bg-parchment sm:p-8"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-[1.18rem] font-medium tracking-tight text-ink">
                  {item.title}
                </h3>
                <span className="font-mono text-[0.62rem] text-ink/30 transition-colors group-hover:text-copper">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2.5 text-[0.88rem] leading-relaxed text-moss">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
