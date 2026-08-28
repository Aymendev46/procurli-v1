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
  tone: "neutral" | "accent";
}) {
  const accent = tone === "accent";

  return (
    <div className={accent ? "bg-panel-2" : "bg-panel"}>
      <div
        className={`border-b border-line px-5 py-4 sm:px-7 ${
          accent ? "bg-inv-bg text-inv-fg" : ""
        }`}
      >
        <h3 className="text-[14px] font-medium tracking-[-0.01em]">{title}</h3>
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 border-b border-line px-5 py-4 last:border-b-0 sm:px-7"
          >
            <span
              className={`mt-[1px] grid size-[18px] shrink-0 place-items-center rounded-full border ${
                accent ? "border-fg/25 text-fg" : "border-line text-dim"
              }`}
            >
              {accent ? (
                <Icon.cross width={10} height={10} />
              ) : (
                <Icon.check width={10} height={10} />
              )}
            </span>
            <span
              className={`text-[13px] leading-snug ${accent ? "text-fg" : "text-muted"}`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ErpLimitations() {
  return (
    <Section id="problem" inner="py-20 md:py-28">
      <Reveal className="flex flex-col items-center text-center">
        <SectionLabel>{erp.eyebrow}</SectionLabel>
        <h2 className="mt-6 text-[clamp(28px,4vw,42px)] leading-[1.06] font-normal tracking-[-0.035em]">
          {erp.title}
        </h2>
        <p className="mt-5 max-w-[54ch] text-[14px] leading-relaxed text-muted text-balance">
          {erp.body}
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <div className="ticks relative mx-auto max-w-4xl overflow-hidden rounded-card border border-line">
          <div className="grid md:grid-cols-2 md:divide-x md:divide-line">
            <Column title={erp.checks.title} items={erp.checks.items} tone="neutral" />
            <Column title={erp.gaps.title} items={erp.gaps.items} tone="accent" />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
