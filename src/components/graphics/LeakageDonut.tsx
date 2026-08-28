"use client";

import { useEffect, useState } from "react";
import { SEGMENTS, type Segment } from "@/lib/leakage";


/* The canvas is deliberately larger than the ring so the outer labels have
   room to sit without being clipped at any viewport width. */
const CX = 280;
const CY = 280;
const R = 106;
const STROKE = 26;
const GAP = 1.6; // percent of the circumference held open between segments
const C = 2 * Math.PI * R;
const LABEL_R = 150;

function polar(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

type Arc = Segment & { i: number; length: number; offset: number; mid: number };

/** Geometry is static, so it is resolved once at module scope. */
const ARCS: Arc[] = (() => {
  const total = SEGMENTS.reduce((sum, s) => sum + s.value, 0);
  let cursor = 0;

  return SEGMENTS.map((segment, i) => {
    const share = segment.value / total;
    const startPct = cursor;
    cursor += share * 100;

    return {
      ...segment,
      i,
      length: Math.max(share * C - (GAP / 100) * C, 2),
      offset: -(startPct / 100) * C,
      mid: (startPct + (share * 100) / 2) * 3.6,
    };
  });
})();

/**
 * `compact` drops the ring labels and crops the canvas to the ring itself —
 * used on narrow viewports, where 9px labels on a scaled SVG are unreadable.
 * The labels reappear as a legend beneath the chart instead.
 */
export function LeakageDonut({ compact = false }: { compact?: boolean }) {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setDrawn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const arcs = ARCS;

  return (
    <svg
      viewBox={compact ? `${CX - 145} ${CY - 145} 290 290` : "0 0 560 560"}
      className="h-full w-full"
      role="img"
      aria-label="Breakdown of where 1–2% of spend leaks: duplicate payments, price credits, missed rebates, SLA penalties, supplier terms, early payments and extra charges."
    >
      <defs>
        <radialGradient id="donut-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.09" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={CX} cy={CY} r={140} fill="url(#donut-glow)" />

      {/* Track */}
      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="none"
        stroke="#ffffff"
        strokeOpacity={0.05}
        strokeWidth={STROKE}
      />

      {/* Segments */}
      <g transform={`rotate(-90 ${CX} ${CY})`}>
        {arcs.map((arc) => (
          <circle
            key={arc.label}
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke={arc.color}
            strokeWidth={STROKE}
            strokeDasharray={drawn ? `${arc.length} ${C - arc.length}` : `0 ${C}`}
            strokeDashoffset={arc.offset}
            style={{
              transition: "stroke-dasharray 900ms cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${120 + arc.i * 90}ms`,
            }}
          />
        ))}
      </g>

      {/* Inner hairline + centre readout */}
      <circle cx={CX} cy={CY} r={R - STROKE / 2 - 12} fill="none" stroke="#ffffff" strokeOpacity={0.14} />
      <text
        x={CX}
        y={CY + 3}
        textAnchor="middle"
        fill="#ffffff"
        style={{ fontSize: 40, letterSpacing: "-0.03em", fontWeight: 400 }}
      >
        1–2%
      </text>
      <text
        x={CX}
        y={CY + 26}
        textAnchor="middle"
        fill="#9a9a9e"
        style={{ fontSize: 9, letterSpacing: "0.22em", fontWeight: 500 }}
      >
        LOST MARGIN
      </text>

      {/* Ring labels */}
      {!compact &&
        arcs.map((arc) => {
          const point = polar(arc.mid, LABEL_R);
          const cos = Math.cos(((arc.mid - 90) * Math.PI) / 180);
          const anchor = cos > 0.25 ? "start" : cos < -0.25 ? "end" : "middle";
          return (
            <text
              key={`label-${arc.label}`}
              x={point.x}
              y={point.y + 3}
              textAnchor={anchor}
              fill="#8b8b90"
              style={{
                fontSize: 9.5,
                letterSpacing: "0.13em",
                fontWeight: 500,
                opacity: drawn ? 1 : 0,
                transition: "opacity 600ms ease",
                transitionDelay: `${520 + arc.i * 60}ms`,
              }}
            >
              {arc.label.toUpperCase()}
            </text>
          );
        })}
    </svg>
  );
}
