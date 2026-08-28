export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
      <span className="mr-2 opacity-55">[</span>
      <span className="text-muted">{children}</span>
      <span className="ml-2 opacity-55">]</span>
    </p>
  );
}
