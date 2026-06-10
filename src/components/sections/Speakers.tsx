import { siteConfig } from "@/config/site";

export function Speakers() {
  return (
    <section className="w-full bg-[#111111] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84c]">
            Palestrantes
          </p>
          <h2 className="text-3xl font-black text-white sm:text-5xl">
            Quem vai estar no palco
          </h2>
          <p className="mt-4 text-base text-white/55">
            Os maiores nomes do empreendedorismo e marketing digital reunidos em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {siteConfig.speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-center transition-colors hover:border-[#c9a84c]/30 hover:bg-white/[0.06]"
            >
              {/* Avatar placeholder */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c9a84c]/15 text-2xl font-black text-[#c9a84c]">
                {speaker.name === "Surpresa" ? "?" : speaker.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{speaker.name}</p>
                <p className="mt-0.5 text-xs text-white/50">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
