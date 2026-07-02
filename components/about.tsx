import { SectionHeading, Stamp } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          {/* Company credibility card */}
          <div className="reveal relative order-2 mx-auto w-full max-w-md lg:order-1">
            <div className="rotate-[-1.5deg] rounded-2xl border border-line bg-parchment p-8 shadow-lift sm:p-10">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-moss">
                  Company file
                </p>
                <Stamp className="rotate-2 text-pine">Field-built</Stamp>
              </div>
              <div className="mt-7 flex items-center gap-5">
                <span className="flex size-20 items-center justify-center rounded-2xl bg-pine font-display text-3xl font-medium text-paper">
                  VF
                </span>
                <div>
                  <p className="font-display text-2xl font-medium tracking-tight text-ink">
                    VetFusion
                  </p>
                  <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-wider text-moss">
                    Veterinarian-led · operations-built
                  </p>
                </div>
              </div>
              <ul className="mt-8 space-y-3 border-t border-line pt-6">
                {[
                  "Veterinarian-led workflow design, not generic software",
                  "Built alongside animal-hospital ownership & operations experience",
                  "Tested in complex, high-volume rescue & sanctuary environments",
                  "Care-continuity systems built for high-volume, multi-species caseloads",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.88rem] leading-relaxed text-ink/75"
                  >
                    <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-copper" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Story */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              index="13"
              eyebrow="About"
              title={
                <>
                  Built from real{" "}
                  <em className="text-pine italic">animal-care work</em> — not a
                  pitch deck.
                </>
              }
            />
            <div className="reveal mt-7 space-y-5 text-[1.02rem] leading-relaxed text-moss">
              <p>
                VetFusion is built around veterinarian-led workflows and real,
                high-volume animal-care operations — not a generic software
                pitch. The focus is helping animal-care organizations become
                more medically reviewable, operationally stable, and
                mission-durable, with systems that keep care visible,
                traceable, and consistent.
              </p>
              <p>
                VetFusion took shape inside animal hospitals and complex
                rescue and sanctuary environments — real settings where
                AI-assisted records workflows saved hours of documentation
                time while producing cleaner, more reviewable SOAPs and
                follow-through systems.
              </p>
              <p>
                That operational grounding is the origin of everything on
                this page: the templates, the checklists, the boards, and
                the conviction that faster records should never mean
                thinner records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
