export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`block text-[21px] leading-none font-bold tracking-[0.005em] ${className}`}
    >
      PROCURLI
    </span>
  );
}
