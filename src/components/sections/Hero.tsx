import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { LeakageDonut } from "@/components/graphics/LeakageDonut";
import { SEGMENTS } from "@/lib/leakage";

export function Hero() {
  return (
    <section id="top" className="relative z-10 border-b border-line">
      <div className="container-x py-5 md:py-7">
        <div className="ticks relative grid overflow-hidden rounded-card border border-line md:grid-cols-[1.05fr_1fr]">
          {/* Copy */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-9 md:py-20 lg:px-12">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
                {hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 text-[clamp(30px,4.6vw,50px)] leading-[1.04] font-normal tracking-[-0.035em] text-balance">
                {hero.title[0]}
                <br className="hidden sm:block" /> {hero.title[1]}
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-[46ch] text-[14px] leading-relaxed text-muted">
                {hero.body}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9">
                <Button
                  href={hero.cta.href}
                  icon={
                    <Icon.arrow
                      width={14}
                      height={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  }
                >
                  {hero.cta.label}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                {hero.proof.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-dim"
                  >
                    <Icon.check width={11} height={11} className="text-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Visual — stays dark in both themes */}
          <div className="on-dark relative min-h-[340px] border-t border-line bg-[#0a0a0b] md:min-h-[520px] md:border-t-0 md:border-l">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.28]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage: "radial-gradient(circle at 50% 50%, #000 25%, transparent 78%)",
              }}
            />
            {/* Narrow viewports get the ring plus a readable legend; wider ones
                get the labelled ring from the mood board. */}
            <div className="relative grid place-items-center px-6 py-10 sm:hidden">
              <div className="w-full max-w-[380px]">
                <div className="mx-auto aspect-square w-full max-w-[240px]">
                  <LeakageDonut compact />
                </div>
                <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2">
                  {SEGMENTS.map((segment) => (
                    <li
                      key={segment.label}
                      className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.05em] text-muted"
                    >
                      <span
                        className="size-[7px] shrink-0 rounded-[1px]"
                        style={{ background: segment.color }}
                      />
                      <span className="truncate">{segment.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="absolute inset-0 hidden place-items-center p-5 sm:grid">
              <div className="aspect-square w-full max-w-[600px]">
                <LeakageDonut />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
