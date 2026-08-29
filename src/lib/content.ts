/**
 * Single source of truth for every string on the landing page.
 *
 * NOTE FOR THE PROCURLI TEAM: figures, the customer quote and the
 * attribution below are transcribed/approximated from the supplied mood
 * board and should be replaced with final, legally-reviewed copy before
 * launch. Anything marked `PLACEHOLDER` is design filler.
 */

export const site = {
  name: "Procurli",
  tagline: "AI manufacturing automation for supply chain teams.",
  location: "Vilnius, Lithuania",
  description:
    "Procurli audits your invoices, contracts and payment data to recover 1–2% of hidden spend and unlock trapped working capital.",
  url: "https://procurli.ai",
} as const;

export const nav = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faq" },
] as const;

export const hero = {
  title: "Recover 1–2% of hidden spend and unlock trapped working capital",
  body: "Even with ERP controls, leakage slips through. Procurli audits your data to identify overcharges and recoverable cash.",
  cta: { label: "Book a 100% risk-free audit", href: "#cta" },
} as const;

export const clients = [
  "JAGO",
  "FRILUX",
  "South Group Recycling",
  "METAWOOD",
  "Kauno Grūdai",
  "SALDA",
] as const;

export const erp = {
  eyebrow: "Problem",
  title: "Your ERP limitations",
  body: "Your ERP checks that an invoice can be paid. It can't tell you if you paid the right amount, on time, on the right terms.",
  checks: {
    title: "What the ERP checks",
    items: [
      "A purchase order exists behind the invoice",
      "The invoice totals add up",
      "It's coded to the right account",
      "It's not an exact duplicate invoice number",
      "The payment run executed on time",
    ],
  },
  gaps: {
    title: "What it can't",
    items: [
      "The price matches the contract, not just the PO",
      "Contracted rebates and discounts were applied",
      "Payment went out no earlier than agreed terms",
      "SLA and penalty clauses were enforced",
      "Extra charges, such as freight, tooling, surcharges, were agreed",
    ],
  },
} as const;

export const services = {
  eyebrow: "Services",
  title: "What we review:",
  items: [
    {
      icon: "trend" as const,
      title: "Prices that drift above contract",
      body: "We catch the price uplift that never made it to an amendment: index-linked increases applied early, tier pricing that never triggered, and expedite fees never renegotiated once volumes moved.",
      value: "€200K",
      unit: "/year",
      note: "On €20M annual spend",
    },
    {
      icon: "copy" as const,
      title: "Duplicate and erroneous payments",
      body: "The same invoice arrives twice under different references and three-way matching clears both, alongside freight, tooling and expedite fees billed twice on the PO.",
      value: "€20–40K",
      unit: "/year",
      note: "0.1–0.2% of payables",
    },
    {
      icon: "tag" as const,
      title: "Discounts and rebates left unclaimed",
      body: "Volume rebates, annual bonuses and prompt-payment discounts are negotiated, then unclaimed — because nobody recalculated them against the year's real volume.",
      value: "€50K",
      unit: "/year",
      note: "1% of contracted volume",
    },
    {
      icon: "clock" as const,
      title: "Working capital paid out too early",
      body: "Your team agreed Net 60, but payment runs leave a fixed weekly cadence. Cash walks out the door weeks before it has to.",
      value: "€175K",
      unit: "/year",
      note: "12 days early on €42M",
    },
    {
      icon: "shield" as const,
      title: "SLA penalties",
      body: "Contracts carry remedies for late deliveries, short shipments and quality failures — and the credits are almost never taken, because nobody reconciles delivery data to the clause.",
      value: "€175K",
      unit: "/year",
      note: "Unclaimed SLA credits",
    },
  ],
} as const;

export const process = {
  eyebrow: "Our process",
  title: "Insights in days.",
  body: "Results are not signed to set out in six weeks.",
  steps: [
    {
      n: "01",
      title: "Connect your data",
      body: "Send your invoices, purchase orders, payment data and contracts — exported from your ERP as Excel, CSV or PDF. No integration is required to start. We standardise and reconcile in the background, read-only, with no ongoing work for your team.",
    },
    {
      n: "02",
      title: "Match and validate",
      body: "We match every invoice line to its purchase order and contract price, recalculate supplier rebates and terms, and check payment dates. The same surcharge booked under five different labels? We group it and show the real total.",
    },
    {
      n: "03",
      title: "Find errors and recoverable cash",
      body: "Our audit engine surfaces overcharges across every line item — contract price drift, duplicate payments, unclaimed rebates and discounts, early payments and unenforced SLAs — each one documented and evidenced, ready to claim or recover.",
    },
    {
      n: "04",
      title: "Recover the cash (optional)",
      body: "Take the findings and recover the cash yourself, or we do it for you. We draft the supplier claims, file the deductions, provide the evidence pack and handle the back-and-forth. You approve every claim before it goes out.",
    },
  ],
} as const;

export const output = {
  eyebrow: "Audit output",
  title: ["What you get", "Why it matters"],
  rows: [
    {
      n: "01",
      what: "Working capital, quantified",
      why: "Run the cost of paying suppliers early, where cash is trapped, and which payment terms can be adjusted to free working capital.",
    },
    {
      n: "02",
      what: "Quantified recovery opportunities",
      why: "Identify overcharges, duplicate payments, unclaimed rebates and missed penalties, each with an exact recoverable value.",
    },
    {
      n: "03",
      what: "Claim-ready cases",
      why: "Each opportunity is packaged with its evidence: invoice, PO, contract clause and payment trail. No more building on your side.",
    },
    {
      n: "04",
      what: "Zero disruption",
      why: "Runs from exports you already produce. No ERP integration, no implementation project and no operational disruption.",
    },
  ],
} as const;

export const caseStudy = {
  eyebrow: "Customer case",
  title: "AI automation case: South Group Recycling",
  quote:
    "In the audit, we matched every invoice against its contract and PO. Validation time dropped ~80% and pricing and charge errors fell 70%. What took days now takes seconds.",
  /** PLACEHOLDER attribution — replace with the approved name and title. */
  author: "Maria Tunė",
  role: "Head of Operations, South Group Recycling",
  client: "South Group Recycling",
} as const;

export const security = {
  eyebrow: "Security & data handling",
  title: "Enterprise-grade data handling",
  items: [
    {
      icon: "badge" as const,
      title: "SOC 2 compliant",
      body: "Independently audited controls across our stack and processes.",
    },
    {
      icon: "noai" as const,
      title: "No AI training",
      body: "Your commercial data is never used to train a model, ours or anyone else's.",
    },
    {
      icon: "lock" as const,
      title: "AES-256 encryption",
      body: "In transit and at rest, on every artefact you send us.",
    },
    {
      icon: "users" as const,
      title: "Role-based access",
      body: "Scoped to the named analysts on your engagement, and nobody else.",
    },
    {
      icon: "mail" as const,
      title: "Limited email scope",
      body: "Read-only access to the supplier threads you nominate. Nothing more.",
    },
    {
      icon: "eu" as const,
      title: "EU data residency",
      body: "Stored and processed in the EU, under EU law.",
    },
  ],
} as const;

export const faq = {
  eyebrow: "FAQ",
  title: ["Got questions?", "We've got answers."],
  body: "Still have questions? Contact us and we'll walk you through it.",
  cta: { label: "Contact us", href: "mailto:hello@procurli.ai" },
  items: [
    {
      q: "How much time for the setup?",
      a: "About an hour of your team's time. You export invoices, purchase orders, payment data and contracts from your ERP — Excel, CSV or PDF — and send them over. There is no integration project, no IT ticket and no software to install. We come back with findings in days, not quarters.",
    },
    {
      q: "Which ERPs do you support?",
      a: "All of them, because we do not connect to them. We work from standard exports, which every ERP produces — SAP, Microsoft Dynamics, Infor, Oracle, Odoo, Navision and the rest. If your system can produce an invoice and payment export, we can audit it.",
    },
    {
      q: "What does the email integration access?",
      a: "Only the supplier threads you explicitly nominate, and only in read-only mode. It exists to find the pricing agreements, rebate confirmations and surcharge notices that live in inboxes rather than in the contract file. It is entirely optional — the audit runs without it.",
    },
    {
      q: "How is supplier data secured?",
      a: "AES-256 encryption in transit and at rest, EU data residency, role-based access limited to the named analysts on your engagement, and full deletion on request at the end of the engagement. Your data is never used to train models.",
    },
    {
      q: "What's your pricing?",
      a: "The audit itself is fixed-fee and known before we start. If you ask us to run the recovery, that part is success-based — a share of the cash actually recovered. If we find nothing, you owe nothing on the recovery side.",
    },
    {
      q: "What if I want to cancel?",
      a: "No lock-in and no notice period. There is no long-term contract to exit: you can stop after the first audit, and we delete your data on request.",
    },
  ],
} as const;

export const cta = {
  title: "Try us",
  body: "Two weeks, read-only exports, and a quantified number at the end of it.",
  button: { label: "Book a demo", href: "mailto:hello@procurli.ai" },
} as const;

export const footer = {
  columns: [
    {
      title: "Social",
      links: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/procurli" }],
    },
    {
      title: "Quick menu",
      links: [
        { label: "Problem", href: "#problem" },
        { label: "Solutions", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Testimonials", href: "#case" },
        { label: "Security", href: "#security" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ],
  disclaimer:
    "Recovery figures shown are illustrative ranges observed across prior audits and are not a guarantee of results.",
} as const;
