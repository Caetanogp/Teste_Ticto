export function About() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84c]">
          O evento
        </p>
        <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
          O OutlierXP inaugura{" "}
          <span className="text-[#c9a84c]">uma nova era</span> do marketing
          digital
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          O que te trouxe até aqui não vai funcionar nos próximos anos. Durante{" "}
          <strong className="text-white">3 dias de experiência cinematográfica</strong>{" "}
          e transformadora, os maiores players do mercado digital revelam as estratégias que estão
          mudando o jogo — agora.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: "🎯",
              title: "Estratégias de vanguarda",
              text: "Conteúdo exclusivo de quem está executando em escala real no mercado digital.",
            },
            {
              icon: "🤝",
              title: "Networking de alto nível",
              text: "Conecte-se com os maiores empreendedores digitais do Brasil em um ambiente único.",
            },
            {
              icon: "🚀",
              title: "Experiência cinematográfica",
              text: "Muito além de um evento: uma imersão visual e estratégica pensada para impactar profundamente.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-left"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
