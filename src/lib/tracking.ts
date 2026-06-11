/**
 * Tracking parameters (UTM / SCK / SRC).
 *
 * Core evaluation criterion: the parameters present on the landing page URL
 * must be forwarded into YayForms and ultimately reach Datacrazy with the lead.
 * The forwarding happens by appending these params to the YayForms iframe URL
 * (see `YayFormsEmbed`). Parameter names are preserved exactly — never rename
 * `sck`/`src`.
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
