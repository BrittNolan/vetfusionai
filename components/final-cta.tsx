import { ButtonPrimary, ButtonSecondary } from "@/components/ui";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-pine-deep">
      <div
        aria-hidden
        className="ruled pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{ filter: "invert(1)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-[10%] size-[480px] rounded-full bg-pine-soft/40 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-36">
        <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-copper-soft">
          Final word
        </p>
        <h2 className="reveal mx-auto mt-6 font-display text-4xl font-medium tracking-tight text-balance text-paper sm:text-6xl">
          Set up a care system your team can{" "}
          <em className="text-copper-soft italic">actually use</em>.
        </h2>
        <p className="reveal mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-paper/75">
          VetFusion helps your team turn notes, treatments, diagnostics,
          inventory, and follow-up needs into reviewable workflows — with
          veterinarians in control of final medical decisions.
        </p>
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonPrimary href="mailto:hello@vetfusionai.com?subject=Continuity%20Assessment" tone="dark">
            Start With a Continuity Assessment
          </ButtonPrimary>
          <ButtonSecondary href="mailto:hello@vetfusionai.com?subject=AI%20SOAP%20Setup%20Sprint" tone="dark">
            Ask about the Setup Sprint
          </ButtonSecondary>
        </div>
        <p className="reveal mt-8 font-mono text-[0.74rem] tracking-wide text-paper/65">
          hello@vetfusionai.com · serving animal hospitals, rescues, shelters
          &amp; sanctuaries
        </p>
      </div>
    </section>
  );
}
