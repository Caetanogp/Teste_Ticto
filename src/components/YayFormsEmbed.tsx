"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { REQUIRED_TRACKING_PARAMS } from "@/lib/tracking";

const FORM_BASE_URL = "https://caetano3.yayforms.link/lydOo2b";

type YayFormsEmbedProps = {
  minHeight?: number;
  className?: string;
};

export function YayFormsEmbed({ minHeight = 700, className }: YayFormsEmbedProps) {
  const searchParams = useSearchParams();

  // Build the iframe src by forwarding all required tracking params
  // present on the landing page URL directly to the YayForms form URL.
  // YayForms natively captures utm_* params when passed this way (toggle ON).
  const src = useMemo(() => {
    const params = new URLSearchParams();

    for (const key of REQUIRED_TRACKING_PARAMS) {
      const value = searchParams.get(key);
      if (value) params.set(key, value);
    }

    const query = params.toString();
    return query ? `${FORM_BASE_URL}?${query}` : FORM_BASE_URL;
  }, [searchParams]);

  return (
    <div className="yf-wrapper">
      <iframe
        title="Formulário de inscrição — Outlier Experience 2025"
        src={src}
        loading="lazy"
        allow="clipboard-write"
      />
    </div>
  );
}

export default YayFormsEmbed;
