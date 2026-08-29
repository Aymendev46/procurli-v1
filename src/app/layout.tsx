import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

/* Closest Google-hosted stand-ins for the faces on procurli.ai — a neo-
   grotesque for everything editorial, a mono for nav, labels and buttons.
   Swap in the licensed originals when the brand pack lands. */
const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Recover 1–2% of hidden spend`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "spend audit",
    "procurement recovery audit",
    "working capital",
    "supplier overcharges",
    "ERP invoice audit",
    "manufacturing procurement",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Recover 1–2% of hidden spend`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Recover 1–2% of hidden spend`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
    { media: "(prefers-color-scheme: light)", color: "#f3f3f1" },
  ],
};

/**
 * Resolves the theme before first paint so there is no flash of the wrong
 * surface. Dark is the brand default; an explicit light system preference
 * (or a stored choice) wins.
 */
const themeScript = `(function(){try{var s=localStorage.getItem("procurli-theme");var m=window.matchMedia("(prefers-color-scheme: light)").matches;document.documentElement.setAttribute("data-theme",s||(m?"light":"dark"));document.documentElement.classList.add("js");}catch(e){document.documentElement.setAttribute("data-theme","dark");document.documentElement.classList.add("js");}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* The font variables must live on the root: globals.css builds
       --font-sans-stack on :root, and a :root custom property cannot read a
       variable defined on a descendant. */
    <html
      lang="en"
      data-theme="dark"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-chip focus:bg-inv-bg focus:px-4 focus:py-2 focus:text-[13px] focus:text-inv-fg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
