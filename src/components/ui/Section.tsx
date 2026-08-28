import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  inner = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  inner?: string;
}) {
  return (
    <section id={id} className={`relative z-10 border-b border-line ${className}`}>
      <div className={`container-x ${inner}`}>{children}</div>
    </section>
  );
}
