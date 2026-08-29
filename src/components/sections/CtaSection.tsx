import { cta } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardMockup } from "@/components/graphics/DashboardMockup";

export function CtaSection() {
  return (
    <section id="cta" className="relative z-10 overflow-hidden border-b border-line bg-bg-2">
      <div className="container-x pt-[clamp(56px,6vw,88px)]">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="text-display leading-[1.04] font-normal tracking-[-0.04em]">
            {cta.title}
          </h2>
          <p className="mt-5 max-w-[44ch] text-lead leading-relaxed text-muted text-balance">
            {cta.body}
          </p>
          <div className="mt-8">
            <Button href={cta.button.href}>{cta.button.label}</Button>
          </div>
        </Reveal>
      </div>

      {/* Product surface, half-bled off the bottom edge */}
      <div className="relative mt-10 md:mt-14">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 top-[-40px] bg-[#0a0a0b]"
          style={{
            backgroundImage:
              "radial-gradient(80% 120% at 50% 0%, #1a1a1d 0%, #0d0d0f 55%, #08080a 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 top-[-40px] opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 22px)",
            maskImage: "linear-gradient(to bottom, #000, transparent 70%)",
          }}
        />
        <div className="container-x relative">
          <Reveal delay={80} className="pt-12 md:pt-14">
            <div className="mx-auto max-w-[980px] pb-0">
              <DashboardMockup />
            </div>
          </Reveal>
        </div>
        <div className="relative h-14" />
      </div>
    </section>
  );
}
