import { Boundaries } from "@/components/boundaries";
import { Bottleneck } from "@/components/bottleneck";
import { Continuity } from "@/components/continuity";
import { Deliverables } from "@/components/deliverables";
import { Diagnostics } from "@/components/diagnostics";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Founder } from "@/components/founder";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Operations } from "@/components/operations";
import { Platform } from "@/components/platform";
import { SetupModel } from "@/components/setup-model";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Sprint } from "@/components/sprint";
import { TimeSavings } from "@/components/time-savings";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Bottleneck />
        <TimeSavings />
        <SetupModel />
        <Deliverables />
        <Sprint />
        <HowItWorks />
        <Continuity />
        <Diagnostics />
        <Operations />
        <Platform />
        <Boundaries />
        <Faq />
        <Founder />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
