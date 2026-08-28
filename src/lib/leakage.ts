/**
 * Hero chart data. Lives outside the client component so server components
 * (the hero's legend) can read the real array rather than a client reference.
 * Ordered clockwise from 12 o'clock, mirroring the mood board.
 */
export type Segment = { label: string; value: number; color: string };

export const SEGMENTS: Segment[] = [
  { label: "Duplicate payments", value: 17, color: "#ffffff" },
  { label: "Price credits", value: 16, color: "#dcdcdd" },
  { label: "Missed rebates", value: 15, color: "#bcbcbe" },
  { label: "SLA penalties", value: 14, color: "#9c9c9f" },
  { label: "Supplier terms", value: 14, color: "#7c7c80" },
  { label: "Early payments", value: 12, color: "#5e5e62" },
  { label: "Extra charges", value: 12, color: "#454549" },
];
