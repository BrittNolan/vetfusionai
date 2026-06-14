import Link from "next/link";
import { SectionHeading } from "@/components/ui";

const tools = [
  {
    route: "/soap",
    title: "SOAP workspace",
    body: "AI-assisted draft structure, medical-record review, and finalization workflow.",
  },
  {
    route: "/tracker",
    title: "Tracker",
    body: "Active patient, treatment, recheck, inventory, and follow-up tracking.",
  },
  {
    route: "/import",
    title: "Import",
    body: "Bulk patient, record, inventory, or workflow import support.",
  },
  {
    route: "/timeline",
    title: "Timeline",
    body: "Chronological patient and case history view for review and continuity.",
  },
  {
    route: "/dashboard",
    title: "Dashboard",
    body: "Operational visibility for medical, inventory, business operations, risk, and continuity workflows.",
  },
];

export function Platform() {
  return (
    <section id="platform" className="border-t border-line bg-parchment/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="10"
            eyebrow="Platform"
            title={
              <>
                The tools behind the{" "}
                <em className="text-pine italic">workflow</em>.
              </>
            }
            lede="VetFusion setups are supported by a working platform — configured for your team during implementation, not sold as another standalone subscription."
          />
        </div>

        <div className="reveal mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((tool) => (
            <Link
              key={tool.route}
              href={tool.route}
              className="group flex flex-col bg-paper p-7 transition-colors duration-300 hover:bg-sage/40 sm:last:col-span-2 lg:last:col-span-1"
            >
              <p className="font-mono text-[0.78rem] font-semibold text-copper">
                {tool.route}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink">
                {tool.title}
              </h3>
              <p className="mt-2 text-[0.83rem] leading-relaxed text-moss">
                {tool.body}
              </p>
              <span
                aria-hidden
                className="mt-5 inline-block text-pine transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
