import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LeakageDonut } from "@/components/graphics/LeakageDonut";
import { SEGMENTS } from "@/lib/leakage";

export function Hero() {
  return (
    <section id="top" className="relative z-10 border-b border-line">
      {/* Flush to the container edges so the centre rule lands exactly on the
          page's midline, as it does on the live site. */}
      <div className="container-flush">
        <div className="grid md:min-h-[640px] md:grid-cols-2 lg:min-h-[760px]">
          {/* Copy */}
          <div className="flex flex-col justify-center px-[clamp(28px,5.5vw,88px)] py-16 md:py-20">
            <Reveal>
              <h1 className="max-w-[19ch] text-display leading-[1.04] font-medium tracking-[-0.03em]">
                {hero.title}
              </h1>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-8 max-w-[52ch] text-lead leading-[1.62] text-muted">
                {hero.body}
              </p>
            </Reveal>

            <Reveal delay={170}>
              <div className="mt-11">
                <Button href={hero.cta.href}>{hero.cta.label}</Button>
              </div>
            </Reveal>
          </div>

          {/* Chart — divided by a rule, not by a change of surface */}
          <div className="relative border-t border-line md:border-t-0 md:border-l">
            <div className="grid h-full place-items-center px-6 py-12 md:hidden">
              <div className="w-full max-w-[420px]">
                <div className="mx-auto aspect-square w-full max-w-[300px]">
                  <LeakageDonut compact />
                </div>
                <ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-2.5">
                  {SEGMENTS.map((segment) => (
                    <li
                      key={segment.label}
                      className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.06em] text-muted"
                    >
                      <span
                        className="size-[7px] shrink-0"
                        style={{ background: segment.color }}
                      />
                      <span className="truncate">{segment.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="hidden h-full place-items-center p-8 md:grid">
              <div className="aspect-square w-full max-w-[680px]">
                <LeakageDonut />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
