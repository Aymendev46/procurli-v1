"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-x">
        <div className="flex h-[62px] items-center justify-between gap-6">
          <Link href="#top" aria-label="Procurli — home" className="text-fg">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] text-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="tel:+37060000000"
              aria-label="Call Procurli"
              className="hidden size-8 place-items-center rounded-chip border border-line text-muted transition-colors hover:border-line-2 hover:text-fg sm:grid"
            >
              <Icon.phone width={14} height={14} />
            </Link>
            <span className="hidden sm:block">
              <Button href="#cta">Book a demo</Button>
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-8 place-items-center rounded-chip border border-line text-muted md:hidden"
            >
              {open ? <Icon.cross width={14} height={14} /> : <Icon.menu width={14} height={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-bg md:hidden"
      >
        <div className="container-x py-4">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-[15px] text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href="#cta" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Book a demo
          </Button>
        </div>
      </div>
    </header>
  );
}
