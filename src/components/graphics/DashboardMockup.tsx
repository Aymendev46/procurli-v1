const ACCENT = {
  rose: "#e2a2b0",
  blue: "#8fb6e8",
  green: "#a6d3a0",
  amber: "#e5c77c",
  lilac: "#b3a6dd",
} as const;

const SIDEBAR = [
  "Overview",
  "Suppliers",
  "Invoices",
  "Contracts",
  "Price drift",
  "Rebates",
  "Payment terms",
  "Claims",
];

const DONUT = [
  { label: "Price drift", value: 34, color: ACCENT.rose },
  { label: "Duplicates", value: 26, color: ACCENT.blue },
  { label: "Rebates", value: 22, color: ACCENT.green },
  { label: "Terms", value: 18, color: ACCENT.amber },
];

const LEAKS = [
  { label: "Freight surcharge", pct: 82, color: ACCENT.rose },
  { label: "Index uplift", pct: 64, color: ACCENT.blue },
  { label: "Duplicate invoice", pct: 47, color: ACCENT.green },
  { label: "Tooling re-bill", pct: 31, color: ACCENT.amber },
];

const BARS = [
  { h: 38, color: ACCENT.blue },
  { h: 62, color: ACCENT.rose },
  { h: 48, color: ACCENT.green },
  { h: 78, color: ACCENT.amber },
  { h: 55, color: ACCENT.lilac },
  { h: 88, color: ACCENT.rose },
  { h: 66, color: ACCENT.blue },
];

const DONUT_R = 35;
const DONUT_C = 2 * Math.PI * DONUT_R;

const DONUT_ARCS = (() => {
  let cursor = 0;
  return DONUT.map((s) => {
    const arc = {
      ...s,
      length: (s.value / 100) * DONUT_C - 2,
      offset: -(cursor / 100) * DONUT_C,
    };
    cursor += s.value;
    return arc;
  });
})();

function MiniDonut() {
  return (
    <svg viewBox="0 0 100 100" className="size-[104px] shrink-0">
      <g transform="rotate(-90 50 50)">
        {DONUT_ARCS.map((s) => (
          <circle
            key={s.label}
            cx="50"
            cy="50"
            r={DONUT_R}
            fill="none"
            stroke={s.color}
            strokeWidth="10"
            strokeDasharray={`${s.length} ${DONUT_C - s.length}`}
            strokeDashoffset={s.offset}
          />
        ))}
      </g>
      <text
        x="50"
        y="50"
        textAnchor="middle"
        fill="#ededee"
        style={{ fontSize: 12.5, letterSpacing: "-0.02em", fontWeight: 500 }}
      >
        €2.50M
      </text>
      <text x="50" y="60" textAnchor="middle" fill="#8a8a90" style={{ fontSize: 4.4, letterSpacing: "0.14em" }}>
        UNDER AUDIT
      </text>
    </svg>
  );
}

function Panel({
  label,
  value,
  caption,
  children,
}: {
  label: string;
  value: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-chip border border-line bg-panel-2/60 p-3.5">
      <p className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-dim">{label}</p>
      <p className="mt-2 text-[22px] leading-none font-medium tracking-[-0.03em] text-fg">{value}</p>
      <p className="mt-1.5 text-[9.5px] leading-snug text-muted">{caption}</p>
      <div className="mt-3.5">{children}</div>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="on-dark w-full overflow-hidden rounded-[14px] border border-line bg-[#0b0b0d] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.85)]">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-[164px] shrink-0 border-r border-line bg-[#0e0e10] p-4 sm:block">
          <div className="flex items-center gap-2">
            <span className="grid size-[18px] place-items-center rounded-[4px] bg-fg text-[9px] font-bold text-inv-fg">
              C
            </span>
            <span className="text-[12px] font-medium tracking-[-0.01em] text-fg">Chain insight</span>
          </div>

          <nav className="mt-5 space-y-[3px]">
            {SIDEBAR.map((item, i) => (
              <p
                key={item}
                className={`rounded-[4px] px-2 py-[5px] text-[10px] ${
                  i === 4 ? "bg-panel-2 text-fg" : "text-dim"
                }`}
              >
                {item}
              </p>
            ))}
          </nav>

          <div className="mt-6 rounded-chip border border-line p-2.5">
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-dim">Audit window</p>
            <p className="mt-1.5 text-[10.5px] text-muted">12 months · FY24</p>
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <p className="text-[11px] text-muted">Recovery</p>
              <span className="text-dim">/</span>
              <p className="text-[11px] text-fg">Findings</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="rounded-full border border-line px-2 py-[3px] text-[9px] text-muted">
                All suppliers
              </span>
              <span className="hidden rounded-full border border-line px-2 py-[3px] text-[9px] text-muted">
                Export
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-1">
            <p className="text-[clamp(30px,6vw,44px)] leading-[0.95] font-medium tracking-[-0.045em] text-fg">
              €455K
            </p>
            <span
              className="mb-1.5 rounded-full px-2 py-[3px] text-[9.5px] font-medium"
              style={{ background: "rgba(166,211,160,0.14)", color: ACCENT.green }}
            >
              +€61K vs. last audit
            </span>
          </div>
          <p className="mt-2 max-w-[46ch] text-[10.5px] leading-relaxed text-muted">
            Total recoverable across 12 months of spend — evidenced, priced and grouped into
            claim-ready cases.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            <Panel label="Price drift" value="€200K" caption="Invoiced above contract price">
              <div className="flex items-center gap-3">
                <MiniDonut />
                <ul className="min-w-0 space-y-[6px]">
                  {DONUT.map((s) => (
                    <li key={s.label} className="flex items-center gap-1.5 text-[9px] text-muted">
                      <span
                        className="size-[6px] shrink-0 rounded-[1px]"
                        style={{ background: s.color }}
                      />
                      <span className="truncate">{s.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>

            <Panel label="Leaking transactions" value="€94K" caption="Charges never agreed in contract">
              <ul className="space-y-2.5">
                {LEAKS.map((leak) => (
                  <li key={leak.label}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="truncate text-[9px] text-muted">{leak.label}</span>
                      <span className="font-mono text-[8.5px] text-dim">{leak.pct}%</span>
                    </div>
                    <div className="mt-1 h-[5px] w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${leak.pct}%`, background: leak.color }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel label="Opportunities" value="€161K" caption="Rebates, terms and SLA credits">
              <div className="flex h-[104px] items-end gap-[7px]">
                {BARS.map((bar, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-[2px]"
                    style={{ height: `${bar.h}%`, background: bar.color, opacity: 0.9 }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between font-mono text-[8px] text-dim">
                <span>Q1</span>
                <span>Q2</span>
                <span>Q3</span>
                <span>Q4</span>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
