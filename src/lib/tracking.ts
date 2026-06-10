/**
 * Tracking utilities for UTM / SCK / SRC parameters.
 *
 * These are a core evaluation criterion: the parameters present on the landing
 * page URL must be forwarded into YayForms and ultimately reach Datacrazy with
 * the lead. Parameter names are preserved exactly (never rename `sck`/`src`).
 */

export const REQUIRED_TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "sck",
  "src",
] as const;

export type TrackingParam = (typeof REQUIRED_TRACKING_PARAMS)[number];

export type TrackingValues = Partial<Record<TrackingParam, string>>;

/**
 * Reads the required tracking params from a query string (defaults to the
 * current browser URL). Returns only the params that are actually present and
 * non-empty, with their original names preserved.
 */
export function getTrackingParams(search?: string): TrackingValues {
  const raw =
    search ?? (typeof window !== "undefined" ? window.location.search : "");
  const params = new URLSearchParams(raw);
  const result: TrackingValues = {};

  for (const key of REQUIRED_TRACKING_PARAMS) {
    const value = params.get(key);
    if (value) {
      result[key] = value;
    }
  }

  return result;
}

/**
 * Builds a query string (without leading `?`) containing only the required
 * tracking params that are present. Useful for appending to the YayForms
 * embed URL so the values travel into the form submission.
 */
export function buildTrackingQuery(search?: string): string {
  const values = getTrackingParams(search);
  const params = new URLSearchParams();

  for (const key of REQUIRED_TRACKING_PARAMS) {
    const value = values[key];
    if (value) {
      params.set(key, value);
    }
  }

  return params.toString();
}

/** Comma-separated list for `data-yf-transitive-search-params`. */
export const TRANSITIVE_SEARCH_PARAMS = REQUIRED_TRACKING_PARAMS.join(",");
