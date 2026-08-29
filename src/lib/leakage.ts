/**
 * Hero chart data. Lives outside the client component so server components
 * (the hero's mobile legend) read the real array rather than a client
 * reference. Six segments, clockwise from 12 o'clock, matching procurli.ai.
 */
export type Segment = { label: string; value: number; color: string };

export const SEGMENTS: Segment[] = [
  { label: "Duplicate payments", value: 17, color: "var(--chart-2)" },
  { label: "Price drifts", value: 20, color: "var(--chart-3)" },
  { label: "Missed rebates", value: 20, color: "var(--chart-1)" },
  { label: "Supplier terms", value: 21, color: "var(--chart-4)" },
  { label: "Early payments", value: 11, color: "var(--chart-5)" },
  { label: "Extra charges", value: 11, color: "var(--chart-6)" },
];
