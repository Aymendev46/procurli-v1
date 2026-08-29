"use client";

import { useState } from "react";
import { faq } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";

function Item({
  q,
  a,
  open,
  onToggle,
  id,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="border-b border-line last:border-b-0">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:text-fg sm:px-6"
        >
          <span
            className={`text-[15px] leading-snug font-medium tracking-[-0.01em] transition-colors ${
              open ? "text-fg" : "text-muted"
            }`}
          >
            {q}
          </span>
          <span
            className={`shrink-0 text-dim transition-transform duration-300 ${
              open ? "rotate-45 text-fg" : ""
            }`}
          >
            <Icon.plus width={15} height={15} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-[68ch] px-5 pb-6 text-body leading-relaxed text-muted sm:px-6">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" inner="py-[clamp(56px,6vw,88px)]">
      <div className="grid gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <SectionLabel>{faq.eyebrow}</SectionLabel>
          <h2 className="mt-6 text-h2 leading-[1.06] font-normal tracking-[-0.035em]">
            {faq.title[0]}
            <br />
            {faq.title[1]}
          </h2>
          <p className="mt-5 max-w-[32ch] text-lead leading-relaxed text-muted">{faq.body}</p>
          <div className="mt-7">
            <Button href={faq.cta.href} variant="outline">
              {faq.cta.label}
            </Button>
          </div>
        </div>

        <div className="ticks relative overflow-hidden rounded-card border border-line bg-panel">
          {faq.items.map((item, i) => (
            <Item
              key={item.q}
              id={`faq-${i}`}
              q={item.q}
              a={item.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
