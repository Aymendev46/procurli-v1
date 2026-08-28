export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <svg width="17" height="17" viewBox="0 0 20 20" aria-hidden className="shrink-0">
        <path d="M2.4 17.6V2.4h7.2a4.6 4.6 0 0 1 0 9.2H6.1" fill="none" stroke="currentColor" strokeWidth="2.1" />
        <path d="M12.2 11.6 17.6 17.6" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="square" />
      </svg>
      <span className="text-[15px] leading-none font-bold tracking-[0.02em]">PROCURLI</span>
    </span>
  );
}
