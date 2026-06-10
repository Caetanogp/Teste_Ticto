import { siteConfig } from "@/config/site";

export function Testimonials() {
  return (
    <section className="w-full bg-[#111111] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84c]">
            Depoimentos
          </p>
          <h2 className="text-3xl font-black text-white sm:text-5xl">
            O que dizem quem foi
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {siteConfig.testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"
            >
              <blockquote>
                <p className="text-sm leading-relaxed text-white/75 before:content-['“'] after:content-['”']">
                  {item.text}
                </p>
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c9a84c]/20 text-xs font-black text-[#c9a84c]">
                  {item.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-white">{item.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
