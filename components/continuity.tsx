import { SectionHeading } from "@/components/ui";

function MockTreatmentSheet() {
  const rows = [
    { med: "Clavamox 62.5 mg PO BID", due: "08:00", status: "given", tone: "text-pine" },
    { med: "Robenacoxib 6 mg PO SID", due: "08:00", status: "given", tone: "text-pine" },
    { med: "Wound flush + bandage chg", due: "14:00", status: "due", tone: "text-copper" },
    { med: "Gabapentin 50 mg PO", due: "20:00", status: "missed ✕", tone: "text-flag" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-parchment shadow-card">
      <div className="flex items-start justify-between gap-3 border-b border-line bg-cream/60 px-5 py-3">
        <p className="min-w-0 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-moss">
          Treatment sheet · “Maple” · feline
        </p>
        <span className="shrink-0 font-mono text-[0.58rem] whitespace-nowrap uppercase text-moss">
          Day 3/5
        </span>
      </div>
      <div className="px-5">
        {rows.map((r) => (
          <div
            key={r.med}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-line/60 py-2.5 text-[0.74rem] last:border-b-0"
          >
            <span className="truncate text-ink/80">{r.med}</span>
            <span className="font-mono text-[0.62rem] text-moss">{r.due}</span>
            <span className={`w-16 text-right font-mono text-[0.6rem] uppercase ${r.tone}`}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
      <p className="border-t border-line bg-flag/[0.06] px-5 py-2.5 font-mono text-[0.6rem] text-flag">
        ⚑ Missed dose flagged → escalation: notify DVM before next dose
      </p>
      <p className="border-t border-line px-5 py-2 font-mono text-[0.58rem] text-moss">
        Ordered: attending DVM · reviewed: DVM of record · updated 06/14
      </p>
    </div>
  );
}

function MockIcuBoard() {
  const patients = [
    { name: "“Atlas” · canine", status: "Stable", note: "Meds due 14:00 · CBC pending", dot: "bg-pine" },
    { name: "“Juniper” · feline", status: "Watch", note: "Appetite ↓ · recheck PCV 16:00", dot: "bg-copper" },
    { name: "“Pickles” · canine", status: "Critical", note: "Rounds: DVM decide fluid rate", dot: "bg-flag" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-parchment shadow-card">
      <div className="flex items-start justify-between gap-3 border-b border-line bg-cream/60 px-5 py-3">
        <p className="min-w-0 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-moss">
          ICU / hospitalized board · AM rounds
        </p>
        <span className="shrink-0 font-mono text-[0.58rem] whitespace-nowrap uppercase text-moss">
          3 active
        </span>
      </div>
      <div className="divide-y divide-line/60">
        {patients.map((p) => (
          <div key={p.name} className="flex items-center gap-3 px-5 py-3">
            <span aria-hidden className={`size-2 shrink-0 rounded-full ${p.dot}`} />
            <div className="min-w-0">
              <p className="flex flex-wrap items-baseline gap-x-2 text-[0.76rem] font-semibold text-ink">
                {p.name}
                <span className="font-mono text-[0.58rem] font-medium uppercase tracking-wider text-moss">
                  {p.status}
                </span>
              </p>
              <p className="truncate font-mono text-[0.62rem] text-moss">{p.note}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="border-t border-line px-5 py-2.5 font-mono text-[0.6rem] text-moss">
        Owner update sent 09:10 · 2 records pending DVM finalize
      </p>
    </div>
  );
}

function MockMedTracker() {
  const meds = [
    { label: "Active medications", value: "14", tone: "text-ink" },
    { label: "Changed this week", value: "02", tone: "text-copper" },
    { label: "Refills needed", value: "03", tone: "text-copper" },
    { label: "Overdue for review", value: "01", tone: "text-flag" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-parchment shadow-card">
      <div className="border-b border-line bg-cream/60 px-5 py-3">
        <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-moss">
          Med follow-through · population view
        </p>
      </div>
      <div className="grid grid-cols-2 gap-px bg-line/60">
        {meds.map((m) => (
          <div key={m.label} className="bg-parchment px-5 py-4">
            <p className={`font-display text-2xl font-medium tabular-nums ${m.tone}`}>
              {m.value}
            </p>
            <p className="mt-0.5 font-mono text-[0.58rem] uppercase tracking-wider text-moss">
              {m.label}
            </p>
          </div>
        ))}
      </div>
      <p className="border-t border-line px-5 py-2.5 font-mono text-[0.6rem] text-moss">
        “Do not change unless directed” notes carried on every record
      </p>
    </div>
  );
}

const blocks = [
  {
    title: "Treatment sheets",
    body: "Approved medical plans become daily action: medications, due times, monitoring instructions, restrictions, escalation triggers, recheck needs, and the prescriber and reviewer on record — with refill and inventory links so reorders trigger before a med runs out.",
    mock: <MockTreatmentSheet />,
  },
  {
    title: "ICU & hospitalized cases",
    body: "Rounds-friendly boards and daily review lists: current status, overnight changes, appetite, hydration, elimination, pain, mentation, and mobility, plus meds due and diagnostics pending — and what the veterinarian should see, ask, decide, or approve at rounds, with owner-comms status and what still needs finalizing.",
    mock: <MockIcuBoard />,
  },
  {
    title: "Med follow-through",
    body: "Treatment plans only work when they stay visible. See what is active, what changed, what is pending, what is overdue, and what needs review — before instructions drift.",
    mock: <MockMedTracker />,
  },
];

export function Continuity() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          index="07"
          eyebrow="Clinical continuity"
          title={
            <>
              From approved plan to{" "}
              <em className="text-pine italic">follow-through</em>.
            </>
          }
          lede="A SOAP draft is only useful if it leads to review, approval, treatment follow-through, and a finalized record. VetFusion connects record generation to the daily work."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="reveal flex flex-col gap-6 rounded-2xl border border-line bg-paper p-6 shadow-card sm:p-7"
            >
              <div aria-hidden>{block.mock}</div>
              <div>
                <h3 className="font-display text-[1.45rem] font-medium tracking-tight text-ink">
                  {block.title}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-moss">
                  {block.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
