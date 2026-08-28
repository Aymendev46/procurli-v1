import type { ReactNode } from "react";

/**
 * Monochrome wordmarks for the customer strip. These are typographic
 * stand-ins built to the right optical weight — swap each for the supplied
 * vector logo when the brand pack lands.
 */

const mark = "shrink-0 text-fg/70";

function Wordmark({
  glyph,
  children,
  tracking = "0.02em",
  weight = 600,
}: {
  glyph: ReactNode;
  children: ReactNode;
  tracking?: string;
  weight?: number;
}) {
  return (
    <span className="flex items-center gap-2.5 whitespace-nowrap">
      {glyph}
      <span
        className="text-[15px] leading-none"
        style={{ letterSpacing: tracking, fontWeight: weight }}
      >
        {children}
      </span>
    </span>
  );
}

export const clientLogos: { name: string; node: ReactNode }[] = [
  {
    name: "JAGD",
    node: (
      <Wordmark
        tracking="0.14em"
        weight={700}
        glyph={
          <svg width="18" height="18" viewBox="0 0 20 20" className={mark} aria-hidden>
            <path d="M2 2h11l5 5v11H7l-5-5V2Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        }
      >
        JAGD
      </Wordmark>
    ),
  },
  {
    name: "FILUX",
    node: (
      <Wordmark
        tracking="0.2em"
        weight={500}
        glyph={
          <svg width="18" height="18" viewBox="0 0 20 20" className={mark} aria-hidden>
            <g fill="currentColor">
              <rect x="2" y="4" width="2.6" height="12" />
              <rect x="7" y="6.5" width="2.6" height="9.5" opacity="0.7" />
              <rect x="12" y="9" width="2.6" height="7" opacity="0.45" />
            </g>
          </svg>
        }
      >
        FILUX
      </Wordmark>
    ),
  },
  {
    name: "South Group Recycling",
    node: (
      <span className="flex items-center gap-2.5 whitespace-nowrap">
        <svg width="19" height="19" viewBox="0 0 20 20" className={mark} aria-hidden>
          <path
            d="M10 3.2 13 8.4H7L10 3.2Zm5.6 4.9 2.2 3.9-4.4 2.6-1.5-2.7 3.7-3.8Zm-11.2 0 3.7 3.8-1.5 2.7-4.4-2.6 2.2-3.9Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
        <span className="flex flex-col leading-none">
          <span className="text-[13px] font-semibold tracking-[0.06em]">SOUTH GROUP</span>
          <span className="mt-[3px] text-[8px] font-medium tracking-[0.3em] text-fg/55">
            RECYCLING
          </span>
        </span>
      </span>
    ),
  },
  {
    name: "METAWOOD",
    node: (
      <Wordmark
        tracking="0.1em"
        weight={600}
        glyph={
          <svg width="20" height="20" viewBox="0 0 22 20" className={mark} aria-hidden>
            <path
              d="M2 16V4l4.5 7L11 4l4.5 7L20 4v12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        METAWOOD
      </Wordmark>
    ),
  },
  {
    name: "Kauno Grūda",
    node: (
      <span className="flex items-center gap-2.5 whitespace-nowrap">
        <svg width="19" height="19" viewBox="0 0 20 20" className={mark} aria-hidden>
          <circle cx="10" cy="10" r="7.6" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <path
            d="M10 3.4c2.4 1.9 3.6 4.1 3.6 6.6S12.4 14.7 10 16.6C7.6 14.7 6.4 12.5 6.4 10S7.6 5.3 10 3.4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            opacity="0.75"
          />
        </svg>
        <span className="text-[15px] leading-none font-medium tracking-[0.04em]">
          Kauno Grūda
        </span>
      </span>
    ),
  },
  {
    name: "SALDA",
    node: (
      <Wordmark
        tracking="0.16em"
        weight={700}
        glyph={
          <svg width="18" height="18" viewBox="0 0 20 20" className={mark} aria-hidden>
            <path d="M10 2.2 17.8 10 10 17.8 2.2 10 10 2.2Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10 6.6 13.4 10 10 13.4 6.6 10 10 6.6Z" fill="currentColor" opacity="0.55" />
          </svg>
        }
      >
        SALDA
      </Wordmark>
    ),
  },
];
