import type { ReactNode } from "react";

/**
 * Typographic stand-ins for the customer wordmarks, built to the proportions
 * of the marks on procurli.ai. Swap each for the supplied vector.
 */

const mark = "shrink-0";

export const clientLogos: { name: string; node: ReactNode }[] = [
  {
    name: "JAGO",
    node: (
      <span className="flex flex-col items-center leading-none">
        <span className="text-[26px] font-bold tracking-[0.06em] italic">JAGO</span>
        <span className="mt-[6px] text-[6.5px] font-medium tracking-[0.24em] text-fg/55">
          MALDRAUNAS VAIRUOTI
        </span>
      </span>
    ),
  },
  {
    name: "FRILUX",
    node: (
      <span className="flex flex-col items-center leading-none">
        <span className="text-[26px] font-semibold tracking-[0.02em]">
          FRiLU<span className="text-[30px] font-extrabold">X</span>
        </span>
        <span className="mt-[7px] text-[8px] font-normal tracking-[0.02em] text-fg/60">
          Plastic injection &amp; assembling
        </span>
      </span>
    ),
  },
  {
    name: "South Group Recycling",
    node: (
      <span className="flex items-center gap-2.5">
        <svg width="30" height="26" viewBox="0 0 30 26" className={mark} aria-hidden>
          <path
            d="M8.5 3.5h13l-4 5.5H12L8.5 3.5Zm13 19h-13l4-5.5h5.5l3.5 5.5ZM3 13l4.2-6 3.2 4.6-2 3.4H3Zm24 0-4.2 6-3.2-4.6 2-3.4H27Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
        <span className="flex flex-col leading-none">
          <span className="text-[13px] font-bold tracking-[0.01em]">South Group</span>
          <span className="mt-[3px] text-[13px] font-bold tracking-[0.01em]">Recycling</span>
        </span>
      </span>
    ),
  },
  {
    name: "METAWOOD",
    node: (
      <span className="flex items-center gap-2.5">
        <svg width="30" height="26" viewBox="0 0 32 26" className={mark} aria-hidden>
          <rect x="1" y="4" width="30" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 4v18M23 4v18M9 13h14" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <span className="text-[21px] font-semibold tracking-[0.03em]">METAWOOD</span>
      </span>
    ),
  },
  {
    name: "Kauno Grūdai",
    node: (
      <span className="flex flex-col items-center leading-none">
        <svg width="52" height="22" viewBox="0 0 56 22" aria-hidden>
          <path
            d="M30 2 14 11l16 9M42 2 26 11l16 9M54 2 38 11l16 9"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mt-[7px] text-[17px] font-semibold tracking-[0.01em]">
          Kauno Grūdai
        </span>
      </span>
    ),
  },
  {
    name: "SALDA",
    node: (
      <span className="flex items-center gap-2.5">
        <svg width="26" height="24" viewBox="0 0 26 24" className={mark} aria-hidden>
          <path
            d="M2 3l9 9-9 9M24 3l-9 9 9 9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[27px] font-bold tracking-[0.02em]">SALDA</span>
      </span>
    ),
  },
];
