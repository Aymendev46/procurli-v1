import { clientLogos } from "@/components/graphics/ClientLogos";

export function LogoStrip() {
  const row = [...clientLogos, ...clientLogos];

  return (
    <section aria-label="Customers" className="relative z-10 border-b border-line overflow-hidden">
      <div className="container-x">
        <div className="relative py-8">
          {/* Static, evenly distributed on wide screens */}
          <ul className="hidden items-center justify-between gap-6 lg:flex">
            {clientLogos.map((logo) => (
              <li
                key={logo.name}
                className="text-fg/55 grayscale transition-all duration-300 hover:text-fg hover:grayscale-0"
              >
                {logo.node}
              </li>
            ))}
          </ul>

          {/* Marquee on narrow screens */}
          <div className="relative lg:hidden">
            <div
              className="overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              }}
            >
              <ul className="marquee-track flex w-max items-center gap-12">
                {row.map((logo, i) => (
                  <li key={`${logo.name}-${i}`} className="text-fg/55">
                    {logo.node}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
