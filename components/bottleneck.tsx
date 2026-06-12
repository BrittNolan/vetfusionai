import { SectionHeading } from "@/components/ui";

const scattered = [
  { label: "Paper notes", rotate: "-rotate-2", tone: "bg-parchment" },
  { label: "Texts & voicemails", rotate: "rotate-1", tone: "bg-cream" },
  { label: "Whiteboards", rotate: "rotate-3", tone: "bg-parchment" },
  { label: "Lab PDFs", rotate: "-rotate-1", tone: "bg-sage/70" },
  { label: "Imaging reports", rotate: "rotate-2", tone: "bg-parchment" },
  { label: "Staff memory", rotate: "-rotate-3", tone: "bg-cream" },
  { label: "Sticky notes", rotate: "rotate-1", tone: "bg-sage/70" },
  { label: "Treatment boards", rotate: "-rotate-2", tone: "bg-parchment" },
  { label: "Email threads", rotate: "rotate-2", tone: "bg-cream" },
];

const structured = [
  "SOAP drafts ready for veterinarian review",
  "Treatment sheets with due times and escalation triggers",
  "Diagnostic summaries and pending-results lists",
  "Med follow-through and recheck trackers",
  "Review packets and leadership visibility",
];

export function Bottleneck() {
  return (
    <section className="border-t border-line bg-parchment/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          index="01"
          eyebrow="The problem"
          title={
            <>
              Records are the <em className="text-pine italic">bottleneck</em>.
            </>
          }
          lede="Every animal-care team has important information spread across conversations, paper notes, treatment boards, lab results, imaging reports, invoices, staff memory, and individual patient records. VetFusion helps turn that scattered information into cleaner SOAP drafts, treatment sheets, review packets, and follow-through systems."
        />

        <div className="reveal mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          {/* Scattered */}
          <div className="rounded-2xl border border-dashed border-ink/20 p-7 sm:p-9">
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-moss">
              Where care information lives today
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {scattered.map((chip) => (
                <span
                  key={chip.label}
                  className={`${chip.rotate} ${chip.tone} inline-block rounded-lg border border-line px-3.5 py-2 text-[0.85rem] text-ink/70 shadow-card`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center lg:flex-col">
            <span
              aria-hidden
              className="flex size-12 rotate-90 items-center justify-center rounded-full border border-line bg-paper font-display text-xl text-copper shadow-card lg:rotate-0"
            >
              →
            </span>
          </div>

          {/* Structured */}
          <div className="rounded-2xl border border-line bg-paper p-7 shadow-card sm:p-9">
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-pine">
              What your team works from after setup
            </p>
            <ol className="mt-6 space-y-0">
              {structured.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-line/70 py-3.5 last:border-b-0"
                >
                  <span className="mt-0.5 font-mono text-[0.7rem] font-medium text-copper">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] leading-snug text-ink/85">
                    {item}
                  </span>
                  <span aria-hidden className="ml-auto mt-0.5 text-pine">
                    ✓
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
