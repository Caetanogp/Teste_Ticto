import { Suspense } from "react";
import { YayFormsEmbed } from "@/components/YayFormsEmbed";
import { siteConfig } from "@/config/site";

export function FormSection() {
  return (
    <section
      id={siteConfig.formAnchorId}
      aria-labelledby="form-heading"
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-20 sm:py-28"
    >
      {/* Gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(201,168,76,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84c]">
            Inscrição
          </p>
          <h2
            id="form-heading"
            className="text-3xl font-black text-white sm:text-5xl"
          >
            Garanta sua vaga agora
          </h2>
          <p className="mt-4 text-base text-white/55">
            Preencha seus dados e entre para a lista de inscritos no{" "}
            <span className="font-semibold text-[#c9a84c]">
              {siteConfig.event.dates}
            </span>{" "}
            no {siteConfig.event.venue}, {siteConfig.event.city}.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <Suspense fallback={<div style={{ height: 700 }} />}>
            <YayFormsEmbed minHeight={700} className="w-full" />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
