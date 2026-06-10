"use client";

import Script from "next/script";
import { TRANSITIVE_SEARCH_PARAMS } from "@/lib/tracking";

const EMBED_ID =
  process.env.NEXT_PUBLIC_YAYFORMS_EMBED_ID ?? "lydOo2b";

const EMBED_SCRIPT = "https://embed.yayforms.link/next/embed.js";

type YayFormsEmbedProps = {
  minHeight?: number;
  className?: string;
};

export function YayFormsEmbed({ minHeight = 520, className }: YayFormsEmbedProps) {
  return (
    <>
      <div
        data-yf-widget={EMBED_ID}
        data-yf-transitive-search-params={TRANSITIVE_SEARCH_PARAMS}
        style={{ width: "100%", minHeight }}
        className={className}
        aria-label="Formulário de inscrição"
      />
      <Script src={EMBED_SCRIPT} strategy="afterInteractive" />
    </>
  );
}

export default YayFormsEmbed;
