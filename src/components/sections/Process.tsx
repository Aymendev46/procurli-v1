"use client";

import { useEffect, useRef, useState } from "react";
import { process } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Process() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target as HTMLLIElement);
        if (index >= 0) setActive(index);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: 0 },
    );

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  const fill = ((active + 1) / process.steps.length) * 100;

  return (
    <Section id="process" inner="py-[clamp(56px,6vw,88px)]">
      <div className="grid gap-12 md:grid-cols-[minmax(0,300px)_1fr] md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <SectionLabel>{process.eyebrow}</SectionLabel>
          <h2 className="mt-6 text-h2 leading-[1.06] font-normal tracking-[-0.035em]">
            {process.title}
          </h2>
          <p className="mt-5 max-w-[34ch] text-body leading-relaxed text-muted">
            {process.body}
          </p>
        </div>

        <div className="relative">
          {/* Progress rail */}
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-0 hidden w-px bg-line sm:block"
          >
            <div
              className="w-px bg-fg/70 transition-[height] duration-500 ease-out"
              style={{ height: `${fill}%` }}
            />
          </div>

          <ol className="sm:pl-10">
            {process.steps.map((step, i) => (
              <li
                key={step.n}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="grid grid-cols-[44px_1fr] gap-x-4 border-b border-line py-8 last:border-b-0 sm:grid-cols-[56px_1fr] sm:gap-x-6"
              >
                <span
                  className={`font-mono text-[12px] tracking-[0.12em] transition-colors duration-300 ${
                    i <= active ? "text-fg" : "text-dim"
                  }`}
                >
                  {step.n}
                </span>
                <div className="min-w-0">
                  <h3 className="text-h3 leading-snug font-medium tracking-[-0.025em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-body leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
