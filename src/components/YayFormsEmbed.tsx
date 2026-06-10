"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { buildTrackingQuery, TRANSITIVE_SEARCH_PARAMS } from "@/lib/tracking";

/**
 * Embeds the YayForms form and forwards the UTM/SCK/SRC tracking params into it.
 *
 * Two mechanisms are used for robustness:
 *  1. The tracking params present on the current page URL are appended to the
 *     form's embed URL (`NEXT_PUBLIC_YAYFORMS_EMBED_URL`). YayForms maps these
 *     query values to (hidden) fields, which then reach Datacrazy.
 *  2. `data-yf-transitive-search-params` is set as well, so if the official
 *     YayForms script embed is used it also carries the params transitively.
 *
 * `useSearchParams` reads the params reactively (must be inside a Suspense
 * boundary, which the parent section provides).
 */

const EMBED_URL = process.env.NEXT_PUBLIC_YAYFORMS_EMBED_URL;
const EMBED_ID = process.env.NEXT_PUBLIC_YAYFORMS_EMBED_ID;

type YayFormsEmbedProps = {
  /** Min height of the embed area, to reduce layout shift while loading. */
  minHeight?: number;
  className?: string;
};

export function YayFormsEmbed({
  minHeight = 640,
  className,
}: YayFormsEmbedProps) {
  const searchParams = useSearchParams();

  const src = useMemo(() => {
    if (!EMBED_URL) return null;
    const query = buildTrackingQuery(searchParams.toString());
    const separator = EMBED_URL.includes("?") ? "&" : "?";
    return query ? `${EMBED_URL}${separator}${query}` : EMBED_URL;
  }, [searchParams]);

  // Configuration missing: render a clear, non-breaking placeholder so the page
  // still builds and deploys. The real embed URL/ID is provided via env vars.
  if (!EMBED_URL) {
    return (
      <div
        className={className}
        data-yf-widget={EMBED_ID}
        data-yf-transitive-search-params={TRANSITIVE_SEARCH_PARAMS}
        style={{ minHeight }}
        aria-label="Formulário de inscrição"
      >
        <div className="flex h-full min-h-[inherit] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-black/15 bg-black/[0.02] p-6 text-center text-sm text-black/60">
          <p className="font-medium">Formulário YayForms ainda não configurado.</p>
          <p>
            Defina <code>NEXT_PUBLIC_YAYFORMS_EMBED_URL</code> no arquivo{" "}
            <code>.env.local</code> com a URL do formulário.
          </p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      title="Formulário de inscrição"
      src={src ?? EMBED_URL}
      data-yf-transitive-search-params={TRANSITIVE_SEARCH_PARAMS}
      className={className}
      style={{ width: "100%", minHeight, border: 0 }}
      loading="lazy"
      allow="clipboard-write"
    />
  );
}

export default YayFormsEmbed;
