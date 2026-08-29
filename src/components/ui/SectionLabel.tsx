/** The site's section marker: a short rule, then a mono uppercase word. */
export function SectionLabel({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <p className={`flex items-center gap-2.5 ${className}`}>
      <span aria-hidden className="inline-block h-[11px] w-[2px] bg-muted" />
      <span className="font-mono text-label uppercase tracking-[0.14em] text-muted">
        {children}
      </span>
    </p>
  );
}
