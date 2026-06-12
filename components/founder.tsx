import { SectionHeading, Stamp } from "@/components/ui";

export function Founder() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          {/* Founder card */}
          <div className="reveal relative mx-auto w-full max-w-md">
            <div className="rotate-[-1.5deg] rounded-2xl border border-line bg-parchment p-8 shadow-lift sm:p-10">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-moss">
                  Founder file
                </p>
                <Stamp className="rotate-2 text-pine">Field-built</Stamp>
              </div>
              <div className="mt-7 flex items-center gap-5">
                <span className="flex size-20 items-center justify-center rounded-2xl bg-pine font-display text-3xl font-medium text-paper">
                  RW
                </span>
                <div>
                  <p className="font-display text-2xl font-medium tracking-tight text-ink">
                    Ryan Whitney
                  </p>
                  <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-wider text-moss">
                    Founder, VetFusion
                  </p>
                </div>
              </div>
              <ul className="mt-8 space-y-3 border-t border-line pt-6">
                {[
                  "Background in zoology & veterinary medicine",
                  "Animal-hospital ownership & operations experience",
                  "Hands-on work in complex rescue & sanctuary environments",
                  "Care-continuity work at DELTA Rescue, Acton, California",
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
          <div>
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
                Ryan Whitney founded VetFusion to help animal-care
                organizations become more medically reviewable, operationally
                stable, and mission-durable. With a background in zoology and
                veterinary medicine, animal-hospital ownership and operations
                experience, and hands-on work inside complex animal-care
                environments, Ryan focuses on building systems that keep care
                visible, traceable, and consistent.
              </p>
              <p>
                VetFusion was shaped through hands-on work in animal hospitals
                and complex rescue/sanctuary environments — including
                animal-care continuity support at DELTA Rescue in Acton,
                California — where AI-assisted records workflows saved hours of
                documentation time while producing cleaner, more reviewable
                SOAPs and follow-through systems.
              </p>
              <p>
                That experience is the origin of everything on this page: the
                templates, the checklists, the boards, and the conviction that
                faster records should never mean thinner records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
