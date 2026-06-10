import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full bg-[#111111] py-12">
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)",
        }}
      />

      <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        {/* Logo text */}
        <div>
          <p className="text-2xl font-black uppercase tracking-tight text-white">
            Outlier<span className="text-[#c9a84c]">XP</span>
          </p>
          <p className="mt-1 text-xs text-white/40">
            Realização: Ticto · {siteConfig.event.year}
          </p>
        </div>

        {/* Event info */}
        <p className="text-sm text-white/50">
          {siteConfig.event.dates} · {siteConfig.event.venue},{" "}
          {siteConfig.event.city}
        </p>

        {/* Contact */}
        <div className="flex flex-col items-center gap-1 text-sm text-white/40">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="transition-colors hover:text-[#c9a84c]"
          >
            {siteConfig.contact.email}
          </a>
          <span>{siteConfig.contact.whatsapp}</span>
          <a
            href="https://instagram.com/outlierxp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#c9a84c]"
          >
            {siteConfig.contact.instagram}
          </a>
        </div>

        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Ticto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
