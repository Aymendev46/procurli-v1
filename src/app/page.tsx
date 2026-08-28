import { Rails } from "@/components/layout/Rails";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ErpLimitations } from "@/components/sections/ErpLimitations";
import { WhatWeReview } from "@/components/sections/WhatWeReview";
import { Process } from "@/components/sections/Process";
import { AuditOutput } from "@/components/sections/AuditOutput";
import { Security } from "@/components/sections/Security";
import { Faq } from "@/components/sections/Faq";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Rails />
      <SiteHeader />
      <main id="main">
        <Hero />
        <LogoStrip />
        <ErpLimitations />
        <WhatWeReview />
        <Process />
        <AuditOutput />
        <Security />
        <Faq />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
