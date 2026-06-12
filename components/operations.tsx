import { SectionHeading } from "@/components/ui";

const inventory = [
  {
    title: "Medication inventory",
    body: "Reorder points, expiration dates, controlled-workflow notes, and refill blockers.",
  },
  {
    title: "Food & special-diet continuity",
    body: "Current diet, quantity on hand, vendor, delivery status, substitutions, and watch items.",
  },
  {
    title: "Supplies & equipment watch",
    body: "Bandage material, syringes, fluids, lab supplies, oxygen/ICU equipment, and repair needs.",
  },
  {
    title: "Procurement blockers",
    body: "Backorders, vendor issues, urgent replacements, pending approvals, received/not received.",
  },
];

const business = [
  {
    title: "AP / AR task visibility",
    body: "Invoices received, pending review or approval, paid/not-paid status, and vendor blockers.",
  },
  {
    title: "Payroll handoff status",
    body: "Timesheet status, missing inputs, deadlines, and handoff notes for authorized payroll professionals.",
  },
  {
    title: "Contractor & vendor tracker",
    body: "Scope, contacts, insurance/license status, open issues, next steps, and renewal dates.",
  },
  {
    title: "Administrative continuity",
    body: "Decision logs, meeting follow-ups, document requests, permit reminders, and unresolved blockers.",
  },
];

function OpsColumn({
  label,
  heading,
  blurb,
  items,
}: {
  label: string;
  heading: string;
  blurb: string;
  items: { title: string; body: string }[];
}) {
  return (
    <div className="reveal rounded-2xl border border-line bg-paper p-8 shadow-card sm:p-10">
      <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-copper">
        {label}
      </p>
      <h3 className="mt-3 font-display text-[1.7rem] font-medium tracking-tight text-ink">
        {heading}
      </h3>
      <p className="mt-3 text-[0.92rem] leading-relaxed text-moss">{blurb}</p>
      <ul className="mt-7 space-y-0">
        {items.map((item) => (
          <li key={item.title} className="border-t border-line/80 py-4">
            <p className="text-[0.95rem] font-semibold text-ink">{item.title}</p>
            <p className="mt-1 text-[0.85rem] leading-relaxed text-moss">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Operations() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          index="09"
          eyebrow="Operations continuity"
          title={
            <>
              Care depends on{" "}
              <em className="text-pine italic">supplies and operations</em>{" "}
              holding steady.
            </>
          }
          lede="Once the records workflow is working, VetFusion can expand into the continuity layer around it — so the things care depends on stay visible before they become blockers."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <OpsColumn
            label="Inventory & supply"
            heading="Inventory & supply continuity"
            blurb="Animal care depends on supplies being present when needed. VetFusion supports medication, food, special-diet, supply, equipment, expiration, reorder, vendor, and backorder tracking."
            items={inventory}
          />
          <OpsColumn
            label="Business & nonprofit"
            heading="Business operations workflow"
            blurb="Workflow visibility for the operational side that supports care — organized handoffs, clear status, and leadership dashboards for animal-care organizations and nonprofits."
            items={business}
          />
        </div>

        <p className="reveal mx-auto mt-10 max-w-4xl rounded-xl border border-line bg-cream/60 px-6 py-5 text-center text-[0.85rem] leading-relaxed text-moss">
          <span className="font-semibold text-ink">Boundary:</span> VetFusion
          organizes business workflows and handoffs. It does not replace
          accounting, payroll, HR, tax, or other professional advisors — and it
          does not independently approve payments or create authority.
        </p>
      </div>
    </section>
  );
}
