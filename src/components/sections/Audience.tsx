import { siteConfig } from "@/config/site";

export function Audience() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84c]">
            Para quem é
          </p>
          <h2 className="text-3xl font-black text-white sm:text-5xl">
            Este evento foi feito para você?
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {siteConfig.audiences.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c9a84c]/15 text-sm font-black text-[#c9a84c]">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-base font-medium text-white/50">
          Participantes de mais de{" "}
          <span className="font-bold text-[#c9a84c]">{siteConfig.event.countries}</span>{" "}
          já fizeram parte dessa experiência.
        </p>
      </div>
    </section>
  );
}
