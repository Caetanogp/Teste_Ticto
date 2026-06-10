import { siteConfig } from "@/config/site";

/**
 * Placeholder hero — neutral and presentable so the page is deployable before
 * the Figma design is extracted. Replaced with pixel-accurate markup in Fase 2.
 */
export function Hero() {
  return (
    <section className="w-full bg-neutral-950 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-5 py-24 text-center sm:px-8 sm:py-32">
        <span className="rounded-full border border-white/20 px-4 py-1 text-xs font-medium uppercase tracking-widest text-white/70">
          Ticto · 2025
        </span>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-xl text-lg text-white/70">
          {siteConfig.description}
        </p>
        <a
          href={`#${siteConfig.formAnchorId}`}
          className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-neutral-950 transition-colors hover:bg-white/90"
        >
          {siteConfig.cta.label}
        </a>
      </div>
    </section>
  );
}
