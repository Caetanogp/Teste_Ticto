/**
 * Central, typed configuration for copy, links and configurable IDs.
 * Values here are placeholders until the Figma content is extracted; update
 * them to match the design's real text and assets.
 */

export const siteConfig = {
  name: "Outlier Experience 2025",
  description:
    "Inscreva-se no Outlier Experience 2025 da Ticto. Garanta sua vaga.",
  // Canonical/production URL — set after deploy (used for metadata).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.vercel.app",
  locale: "pt-BR",
  // CTA that scrolls/links to the form section.
  formAnchorId: "inscricao",
  cta: {
    label: "Quero me inscrever",
  },
} as const;

export type SiteConfig = typeof siteConfig;
