import { clientLogos } from "@/components/graphics/ClientLogos";

export function LogoStrip() {
  return (
    <section aria-label="Customers" className="relative z-10 border-b border-line">
      {/* One bordered cell per customer, flush to the page rails. The 1px grid
          gap over a line-coloured track draws the dividers at any column
          count, so no nth-child rules are needed. */}
      <div className="container-flush">
        <ul className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <li
              key={logo.name}
              className="grid h-[104px] place-items-center bg-bg px-4 lg:h-[122px]"
            >
              <span className="text-fg/85 transition-colors duration-300 hover:text-fg">
                {logo.node}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
