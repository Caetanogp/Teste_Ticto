export const siteConfig = {
  name: "Outlier Experience 2025",
  shortName: "OutlierXP",
  tagline: "Mergulhe na nova era do marketing digital e lidere a revolução que está para começar!",
  description:
    "O maior evento de marketing digital do Brasil. 3 dias imersivos no Teatro Bradesco, São Paulo.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.vercel.app",
  locale: "pt-BR",
  formAnchorId: "inscricao",

  event: {
    dates: "29, 30 de setembro e 01 de outubro",
    year: "2025",
    venue: "Teatro Bradesco",
    city: "São Paulo",
    duration: "3 dias",
    previousAttendees: "+2.500",
    countries: "12 países",
  },

  cta: {
    label: "Garantir minha vaga",
    labelShort: "Garantir vaga",
  },

  speakers: [
    { name: "Thiago Finch", role: "Sócio Ticto" },
    { name: "Renato Moreira", role: "Cofounder Ticto" },
    { name: "Lúcio Artes", role: "Tráfego de Escala" },
    { name: "Rafael Marques", role: "Especialista em Funis" },
    { name: "Gregory Baler", role: "Diretor Comercial Ticto" },
    { name: "João Adolfo", role: "CEO João Financeira" },
    { name: "Rodrigo Volponi", role: "CMO Ticto" },
    { name: "Surpresa", role: "Em breve" },
  ],

  audiences: [
    {
      title: "Iniciantes em Marketing Digital",
      description:
        "Quer começar do zero com as estratégias certas e encurtar o caminho para os primeiros resultados.",
    },
    {
      title: "Empresários e Empreendedores",
      description:
        "Precisa aumentar as vendas, escalar o negócio e dominar as ferramentas que estão moldando o mercado.",
    },
    {
      title: "Profissionais de Marketing",
      description:
        "Busca atualização estratégica, networking de alto nível e conexões com os maiores players do digital.",
    },
    {
      title: "Entusiastas de IA e Inovação",
      description:
        "Quer entender como a inteligência artificial está transformando o marketing e como aplicar isso agora.",
    },
  ],

  testimonials: [
    {
      name: "Matheus Borges",
      text: "Meus resultados cresceram exponencialmente depois do evento. A qualidade do conteúdo e dos palestrantes é incomparável.",
    },
    {
      name: "Iuri Meira",
      text: "O networking que fiz aqui foi decisivo para o meu negócio. Os relacionamentos com produtores abriram portas que eu não imaginava.",
    },
    {
      name: "Davy Barros",
      text: "Sai do evento e dobrei minha conversão em menos de 30 dias aplicando as estratégias que aprendi.",
    },
    {
      name: "Bruno Aguiar",
      text: "Aumento de 15% na conversão logo no primeiro mês. Cada centavo investido no ingresso valeu muito.",
    },
  ],

  contact: {
    email: "suporte@outlierxp.com.br",
    whatsapp: "(19) 9 2005-0596",
    instagram: "@outlierxp",
  },

  stats: [
    { value: "+2.500", label: "Participantes" },
    { value: "12+", label: "Países representados" },
    { value: "8+", label: "Palestrantes" },
    { value: "3", label: "Dias de imersão" },
  ],
} as const;
