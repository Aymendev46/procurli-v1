import { caseStudy, output } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icons";

function OutputRow({
  n,
  what,
  why,
  index,
}: {
  n: string;
  what: string;
  why: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 70}>
      <div className="group grid grid-cols-1 items-center gap-x-6 gap-y-4 rounded-card border border-line bg-panel p-5 transition-colors duration-300 hover:bg-panel-2 sm:grid-cols-[28px_minmax(0,1fr)_28px_minmax(0,1.25fr)] sm:p-6">
        <span className="font-mono text-[10px] tracking-[0.14em] text-dim">{n}</span>

        <div className="min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-dim">What you get</p>
          <h3 className="mt-2 text-[16px] leading-snug font-medium tracking-[-0.02em]">{what}</h3>
        </div>

        <span className="hidden justify-self-center text-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-fg sm:block">
          <Icon.arrow width={15} height={15} />
        </span>

        <div className="min-w-0 border-t border-line pt-4 sm:border-t-0 sm:pt-0">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-dim">Why it matters</p>
          <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{why}</p>
        </div>
      </div>
    </Reveal>
  );
}

function CaseStudy() {
  return (
    <Reveal delay={120}>
      <article
        id="case"
        className="ticks relative scroll-mt-24 rounded-card border border-line bg-panel p-6 sm:p-9"
      >
        <SectionLabel>{caseStudy.eyebrow}</SectionLabel>
        <h3 className="mt-5 max-w-[22ch] text-[clamp(21px,3vw,30px)] leading-[1.12] font-normal tracking-[-0.03em]">
          {caseStudy.title}
        </h3>

        <div className="mt-8 grid items-stretch gap-6 sm:grid-cols-[210px_1fr] sm:gap-9">
          {/* Video poster placeholder — swap for the approved still from the shoot */}
          <div className="relative min-h-[240px] w-full overflow-hidden rounded-chip border border-line bg-[#141416]">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(130% 100% at 30% 0%, #35353a 0%, #1b1b1e 52%, #0f0f11 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-55"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(128deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 13px)",
              }}
            />
            <button
              type="button"
              aria-label={`Play the ${caseStudy.client} case study video`}
              className="group/play absolute inset-0 grid place-items-center"
            >
              <span className="grid size-12 place-items-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-transform duration-200 group-hover/play:scale-105">
                <Icon.play width={13} height={13} className="translate-x-[1px]" />
              </span>
            </button>
            <p className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60">
              02:14 · Case film
            </p>
          </div>

          <figure className="flex min-w-0 flex-col justify-between gap-8">
            <blockquote className="text-[clamp(15px,2vw,19px)] leading-[1.5] font-normal tracking-[-0.015em] text-balance">
              “{caseStudy.quote}”
            </blockquote>
            <figcaption className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium">{caseStudy.author}</p>
                <p className="mt-1 text-[11.5px] text-muted">{caseStudy.role}</p>
              </div>
              <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-dim">
                {caseStudy.client}
              </p>
            </figcaption>
          </figure>
        </div>
      </article>
    </Reveal>
  );
}

export function AuditOutput() {
  return (
    <section id="output" className="relative z-10 border-b border-line bg-bg-2">
      <div className="container-x py-20 md:py-28">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>{output.eyebrow}</SectionLabel>
          <h2 className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[clamp(26px,4vw,40px)] leading-[1.08] font-normal tracking-[-0.035em]">
            <span>{output.title[0]}</span>
            <Icon.arrow width={22} height={22} className="text-dim" />
            <span>{output.title[1]}</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-2.5">
          {output.rows.map((row, i) => (
            <OutputRow key={row.n} {...row} index={i} />
          ))}
        </div>

        <div className="mx-auto mt-2.5 max-w-4xl">
          <CaseStudy />
        </div>
      </div>
    </section>
  );
}
