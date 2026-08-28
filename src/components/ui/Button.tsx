import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const styles: Record<Variant, string> = {
  primary:
    "bg-inv-bg text-inv-fg border border-transparent hover:opacity-90 active:opacity-80",
  outline:
    "border border-line-2 text-fg hover:bg-panel-2 hover:border-fg/35",
  ghost: "border border-transparent text-muted hover:text-fg",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-chip px-4 py-[9px] text-[13px] leading-none font-medium tracking-[-0.01em] transition-all duration-200 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon}
    </Link>
  );
}
