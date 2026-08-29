"use client";

import { useEffect, useId, useState } from "react";
import { SEGMENTS } from "@/lib/leakage";

/* Geometry measured off procurli.ai: a thick ring with a large solid core,
   wide radial gaps, halftone-screened segments and short radial leaders out
   to mono labels. */
const CX = 390;
const CY = 390;
const R_OUT = 200;
const R_IN = 135;
const STROKE = R_OUT - R_IN;
const R_MID = (R_OUT + R_IN) / 2;
const C = 2 * Math.PI * R_MID;
const GAP = 1.15; // % of circumference held open between segments
const START = -47; // degrees, so the first segment lands where the site puts it
const R_LEAD_IN = R_OUT + 6;
const R_LEAD_OUT = R_OUT + 42;
const R_LABEL = R_OUT + 52;

type Arc = (typeof SEGMENTS)[number] & {
  i: number;
  length: number;
  offset: number;
  mid: number;
};

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
      mid: START + (startPct + (share * 100) / 2) * 3.6,
    };
  });
})();

function polar(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

export function LeakageDonut({ compact = false }: { compact?: boolean }) {
  const [drawn, setDrawn] = useState(false);
  // Two instances render (mobile + desktop). Without a unique id the second
  // resolves url(#…) to the first — which is display:none — and paints nothing.
  const screenId = `pl-halftone-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const id = requestAnimationFrame(() => setDrawn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <svg
      viewBox={compact ? `${CX - 215} ${CY - 215} 430 430` : "0 0 780 780"}
      className="h-full w-full"
      role="img"
      aria-label="Where 1–2% of spend leaks: duplicate payments, price drifts, missed rebates, supplier terms, early payments and extra charges."
    >
      <defs>
        {/* Halftone screen laid over each segment, as on the live site */}
        <pattern id={screenId} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" opacity="0.45" style={{ fill: "var(--donut-screen)" }} />
          <circle cx="4.5" cy="4.5" r="1.1" opacity="0.45" style={{ fill: "var(--donut-screen)" }} />
        </pattern>
      </defs>

      <g transform={`rotate(-90 ${CX} ${CY})`}>
        {ARCS.map((arc) => (
          <circle
            key={arc.label}
            cx={CX}
            cy={CY}
            r={R_MID}
            fill="none"
            strokeWidth={STROKE}
            strokeDasharray={drawn ? `${arc.length} ${C - arc.length}` : `0 ${C}`}
            strokeDashoffset={arc.offset}
            style={{
              stroke: arc.color,
              transition: "stroke-dasharray 850ms cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${100 + arc.i * 80}ms`,
            }}
          />
        ))}
        {/* Screen pass — same geometry, dot pattern on top */}
        {ARCS.map((arc) => (
          <circle
            key={`screen-${arc.label}`}
            cx={CX}
            cy={CY}
            r={R_MID}
            fill="none"
            stroke={`url(#${screenId})`}
            strokeWidth={STROKE}
            strokeDasharray={drawn ? `${arc.length} ${C - arc.length}` : `0 ${C}`}
            strokeDashoffset={arc.offset}
            style={{
              transition: "stroke-dasharray 850ms cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${100 + arc.i * 80}ms`,
            }}
          />
        ))}
      </g>

      {/* Core */}
      <circle cx={CX} cy={CY} r={R_IN} style={{ fill: "var(--donut-core)" }} />
      <text
        x={CX - 14}
        y={CY + 6}
        textAnchor="middle"
        fill="#ffffff"
        className="font-mono"
        style={{ fontSize: 68, fontWeight: 500, letterSpacing: "-0.04em" }}
      >
        1-2
      </text>
      <text
        x={CX + 62}
        y={CY - 8}
        textAnchor="middle"
        fill="#ffffff"
        className="font-mono"
        style={{ fontSize: 30, fontWeight: 500 }}
      >
        %
      </text>
      <text
        x={CX}
        y={CY + 44}
        textAnchor="middle"
        fill="#ffffff"
        className="font-mono"
        style={{ fontSize: 19, fontWeight: 500, letterSpacing: "0.02em" }}
      >
        LOST MARGIN
      </text>

      {/* Leaders + labels */}
      {!compact &&
        ARCS.map((arc) => {
          const a = polar(arc.mid, R_LEAD_IN);
          const b = polar(arc.mid, R_LEAD_OUT);
          const label = polar(arc.mid, R_LABEL);
          const cos = Math.cos(((arc.mid - 90) * Math.PI) / 180);
          const anchor = cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle";
          const nudge = anchor === "start" ? 8 : anchor === "end" ? -8 : 0;

          return (
            <g
              key={`label-${arc.label}`}
              style={{
                opacity: drawn ? 1 : 0,
                transition: "opacity 550ms ease",
                transitionDelay: `${520 + arc.i * 60}ms`,
              }}
            >
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                strokeWidth="1.4"
                style={{ stroke: "var(--donut-leader)" }}
              />
              <text
                x={label.x + nudge}
                y={label.y + (anchor === "middle" ? (arc.mid > 90 && arc.mid < 270 ? 16 : -6) : 5)}
                textAnchor={anchor}
                className="font-mono fill-fg"
                style={{ fontSize: 16, letterSpacing: "0.06em", fontWeight: 400 }}
              >
                {arc.label.toUpperCase()}
              </text>
            </g>
          );
        })}
    </svg>
  );
}
