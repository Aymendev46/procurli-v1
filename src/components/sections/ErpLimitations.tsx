import { erp } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icons";

function Column({
  title,
  items,
  tone,
}: {
  title: string;
  items: readonly string[];
  tone: "checks" | "gaps";
}) {
  const gaps = tone === "gaps";

  return (
    <div className={gaps ? "bg-panel-2" : "bg-panel"}>
      <div className="grid h-[86px] place-items-center border-b border-line px-5 sm:h-[100px]">
        <h3
          className={`text-h3 tracking-[-0.01em] ${
            gaps ? "font-normal text-muted" : "font-semibold text-fg"
          }`}
        >
          {title}
        </h3>
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="flex min-h-[72px] items-center gap-3.5 border-b border-line px-5 py-4 last:border-b-0 sm:px-7"
          >
            <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-white/10 text-fg">
              {gaps ? (
                <Icon.cross width={11} height={11} />
              ) : (
                <Icon.check width={11} height={11} />
              )}
            </span>
            <span className="text-body leading-snug text-fg/85">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ErpLimitations() {
  return (
    <Section id="problem" inner="py-[clamp(56px,6vw,88px)]">
      <Reveal className="flex flex-col items-center text-center">
        <SectionLabel>{erp.eyebrow}</SectionLabel>
        <h2 className="mt-6 text-h2 leading-[1.08] font-normal tracking-[-0.03em]">
          {erp.title}
        </h2>
        <p className="mt-5 max-w-[62ch] text-body leading-[1.6] text-muted text-balance">
          {erp.body}
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <div className="mx-auto max-w-[960px] overflow-hidden rounded-card border border-line">
          <div className="grid md:grid-cols-2 md:divide-x md:divide-line">
            <Column title={erp.checks.title} items={erp.checks.items} tone="checks" />
            <Column title={erp.gaps.title} items={erp.gaps.items} tone="gaps" />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
