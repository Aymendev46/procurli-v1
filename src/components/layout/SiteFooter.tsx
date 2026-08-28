import Link from "next/link";
import { footer, site } from "@/lib/content";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg">
      <div className="container-x">
        <div className="grid gap-10 py-14 md:grid-cols-[1.4fr_2fr] md:gap-16">
          <div>
            <Logo className="text-fg" />
            <p className="mt-4 max-w-[30ch] text-[13px] leading-relaxed text-muted">
              {site.tagline}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
              {site.location}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-muted transition-colors hover:text-fg"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse gap-4 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-dim">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="max-w-[62ch] text-[11px] leading-relaxed text-dim">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
