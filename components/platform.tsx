import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { platformTools } from "@/lib/platform-tools";

export function Platform() {
  return (
    <section id="platform" className="border-t border-line bg-parchment/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
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

        <div className="reveal mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:mt-14 xl:grid-cols-5">
          {platformTools.map((tool) => (
            <Link
              key={tool.route}
              href={tool.route}
              aria-label={`Open ${tool.title}`}
              className="group flex h-full flex-col bg-paper p-6 transition-colors duration-300 hover:bg-sage/30 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pine active:bg-sage/40 sm:last:col-span-2 xl:last:col-span-1"
            >
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-copper">
                {tool.category}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink">
                {tool.title}
              </h3>
              <p className="mt-2 text-[0.83rem] leading-relaxed text-moss">
                {tool.body}
              </p>

              {/* Capability preview — reveals in place on hover/focus (CSS-only) */}
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                <ul className="min-h-0 space-y-1.5 overflow-hidden">
                  {tool.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex gap-2 font-mono text-[0.68rem] leading-snug text-moss first:mt-4 first:border-t first:border-line/70 first:pt-3"
                    >
                      <span aria-hidden className="text-copper">
                        ·
                      </span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <span
                aria-hidden
                className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[0.72rem] font-medium text-pine transition-transform duration-300 group-hover:translate-x-0.5"
              >
                Open {tool.title} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
