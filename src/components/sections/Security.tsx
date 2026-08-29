import { security } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icons";

export function Security() {
  return (
    <Section id="security" inner="py-[clamp(56px,6vw,88px)]">
      <Reveal>
        <SectionLabel>{security.eyebrow}</SectionLabel>
        <h2 className="mt-6 text-h2 leading-[1.06] font-normal tracking-[-0.035em]">
          {security.title}
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <div className="ticks relative overflow-hidden rounded-card border border-line bg-panel">
          <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x lg:grid-cols-3">
            {security.items.map((item) => {
              const Glyph = Icon[item.icon];
              return (
                <div
                  key={item.title}
                  className="group p-6 transition-colors duration-300 hover:bg-panel-2 sm:p-7"
                >
                  <span className="grid size-9 place-items-center rounded-chip border border-line text-muted transition-colors group-hover:border-line-2 group-hover:text-fg">
                    <Glyph width={15} height={15} />
                  </span>
                  <h3 className="mt-5 text-h3 font-medium tracking-[-0.015em]">{item.title}</h3>
                  <p className="mt-2 max-w-[36ch] text-body leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
