import { services } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icons";

export function WhatWeReview() {
  return (
    <Section id="services" inner="py-[clamp(56px,6vw,88px)]">
      <Reveal>
        <SectionLabel>{services.eyebrow}</SectionLabel>
        <h2 className="mt-6 text-h2 leading-[1.06] font-normal tracking-[-0.035em]">
          {services.title}
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <div className="ticks relative overflow-hidden rounded-card border border-line bg-panel">
          <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x lg:grid-cols-3 xl:grid-cols-5">
            {services.items.map((item) => {
              const Glyph = Icon[item.icon];
              return (
                <article
                  key={item.title}
                  className="group flex min-w-0 flex-col p-6 transition-colors duration-300 hover:bg-panel-2"
                >
                  <span className="grid size-9 place-items-center rounded-chip border border-line text-muted transition-colors group-hover:border-line-2 group-hover:text-fg">
                    <Glyph width={15} height={15} />
                  </span>

                  <h3 className="mt-6 text-h3 leading-snug font-medium tracking-[-0.015em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-body leading-relaxed text-muted">
                    {item.body}
                  </p>

                  <div className="mt-7 border-t border-line pt-4">
                    <p className="flex items-baseline gap-1.5">
                      <span className="text-[clamp(26px,2vw,32px)] leading-none font-medium tracking-[-0.04em]">
                        {item.value}
                      </span>
                      <span className="font-mono text-[11px] text-dim">{item.unit}</span>
                    </p>
                    <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">
                      {item.note}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Two extra grid cells on xl keep the 5-up row flush; below that the
          layout wraps naturally, so nothing is needed. */}
    </Section>
  );
}
