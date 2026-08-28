import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icon = {
  trend: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 17.5 9.5 11l3.5 3.5L21 6.5" />
      <path d="M15.5 6.5H21v5.5" />
    </svg>
  ),
  copy: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="9" y="9" width="11" height="11" rx="1.5" />
      <path d="M15 5.5A1.5 1.5 0 0 0 13.5 4H5.5A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15" />
    </svg>
  ),
  tag: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M20.5 12.9 12.9 20.5a2 2 0 0 1-2.8 0l-6.6-6.6a2 2 0 0 1-.6-1.5l.3-6.2A1.6 1.6 0 0 1 4.8 4.6L11 4.3a2 2 0 0 1 1.5.6l8 8a1.6 1.6 0 0 1 0 2.3Z" />
      <circle cx="7.8" cy="8" r="1.2" />
    </svg>
  ),
  clock: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3.2 5 6v5.4c0 4 2.9 7.4 7 9.4 4.1-2 7-5.4 7-9.4V6l-7-2.8Z" />
      <path d="M9.4 12.2 11.3 14l3.5-3.7" />
    </svg>
  ),
  badge: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="10" r="5.5" />
      <path d="m8.4 14.6-1.2 6 4.8-2.4 4.8 2.4-1.2-6" />
    </svg>
  ),
  noai: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" />
      <path d="M9.5 15V9l2.5 4 2.5-4v6" />
      <path d="M4 20 20 4" />
    </svg>
  ),
  lock: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="4.5" y="10" width="15" height="10" rx="2" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <path d="M12 14v2.5" />
    </svg>
  ),
  users: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="9.5" cy="8.5" r="3" />
      <path d="M3.5 19.5a6 6 0 0 1 12 0" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6" />
      <path d="M17.5 14.4a6 6 0 0 1 3 5.1" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7.5 7.1 5a1.6 1.6 0 0 0 1.8 0l7.1-5" />
    </svg>
  ),
  eu: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.6 12h16.8" />
      <path d="M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5C9.8 18.2 8.6 15.2 8.6 12S9.8 5.8 12 3.5Z" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  ),
  cross: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" />
    </svg>
  ),
  arrow: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </svg>
  ),
  plus: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M7.5 3.5h-2A2.5 2.5 0 0 0 3 6.2C3 14 10 21 17.8 21a2.5 2.5 0 0 0 2.7-2.5v-2l-4.2-1.6-1.9 2.2a14.6 14.6 0 0 1-5.5-5.5l2.2-1.9L9.5 5.6Z" />
    </svg>
  ),
  sun: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.4 5.6 17 7M7 17l-1.4 1.4M18.4 18.4 17 17M7 7 5.6 5.6" />
    </svg>
  ),
  moon: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.5 8.5 0 1 0 10.2 10.2Z" />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 7.5h16M4 12h16M4 16.5h16" />
    </svg>
  ),
  play: (p: IconProps) => (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <path d="M8.5 6.2a1 1 0 0 1 1.5-.87l8.2 5.8a1 1 0 0 1 0 1.74l-8.2 5.8a1 1 0 0 1-1.5-.87Z" />
    </svg>
  ),
};

export type IconName = keyof typeof Icon;
