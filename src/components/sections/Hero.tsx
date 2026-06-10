import { siteConfig } from "@/config/site";

export function Hero() {
  const { event, cta, tagline, formAnchorId } = siteConfig;

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-5 py-20 text-center sm:px-8 sm:py-28 lg:py-36">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
          {event.dates} · {event.venue} · {event.city}
        </span>

        {/* Logo / Event name */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            Ticto apresenta
          </p>
          <h1 className="text-5xl font-black uppercase tracking-tight text-white sm:text-7xl lg:text-8xl">
            Outlier
            <span className="block text-[#c9a84c]">Experience</span>
            <span className="block text-3xl font-bold tracking-widest text-white/40 sm:text-4xl">
              {event.year}
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl text-lg font-light leading-relaxed text-white/70 sm:text-xl">
          {tagline}
        </p>

        {/* Stats row */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl font-black text-[#c9a84c] sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs text-white/50">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`#${formAnchorId}`}
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#c9a84c] px-10 text-base font-bold text-black transition-all hover:bg-[#e8c97a] hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
          >
            {cta.label}
          </a>
          <span className="text-sm text-white/40">
            {event.duration} de imersão total
          </span>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)",
        }}
      />
    </section>
  );
}
