import { publicPricePresentation } from "./seo/publication.mjs";

export const bookingPriceSemantics = Object.freeze({
  STARTING_FROM: "STARTING_FROM",
  ESTIMATE: "ESTIMATE",
  CONTACT: "CONTACT",
});

const contactQuote = Object.freeze({
  kind: bookingPriceSemantics.CONTACT,
  amount: null,
  unit: null,
});

function factForService(evidence, need, service, vehicle) {
  if (!evidence) return null;
  if (need === "parcel") return evidence.parcelPrice;
  if (service === "shared") return evidence.price;
  if (vehicle === "7-seat") return evidence.charter7Price;
  if (vehicle === "4-seat") return evidence.charter4Price;
  return null;
}

function legacyServiceKey(need, service, vehicle) {
  if (need === "parcel") return "PARCEL";
  if (service === "shared") return "SHARED_RIDE";
  if (vehicle === "7-seat") return "CHARTER_7_SEAT";
  if (vehicle === "4-seat") return "CHARTER_4_SEAT";
  return null;
}

function quoteUnit(need, service) {
  if (need === "parcel") return null;
  return service === "shared" ? "PER_PERSON" : "PER_TRIP";
}

/**
 * Resolves only evidence-backed booking price semantics. Custom-route formulas
 * and cargo/distance calculations are intentionally outside this function.
 */
export function resolveBookingPriceQuote({ route, evidence, legacyMappings, need, service, vehicle }) {
  const presentation = publicPricePresentation(factForService(evidence, need, service, vehicle));
  if (presentation.kind === "VERIFIED_FROM" && typeof presentation.amount === "number") {
    return Object.freeze({ kind: bookingPriceSemantics.STARTING_FROM, amount: presentation.amount, unit: quoteUnit(need, service) });
  }

  const serviceKey = legacyServiceKey(need, service, vehicle);
  const legacyEstimate = route && serviceKey
    ? legacyMappings?.find((mapping) => mapping.scope === "REGISTERED_ROUTE" && mapping.routeId === route.id && mapping.service === serviceKey)
    : null;
  const estimatePresentation = publicPricePresentation(legacyEstimate?.evidence);
  if (estimatePresentation.kind === "ESTIMATE" && typeof estimatePresentation.amount === "number") {
    return Object.freeze({ kind: bookingPriceSemantics.ESTIMATE, amount: estimatePresentation.amount, unit: quoteUnit(need, service) });
  }

  return contactQuote;
}

export function formatBookingPriceQuote(quote) {
  if (quote.kind === bookingPriceSemantics.CONTACT || typeof quote.amount !== "number") return "Liên hệ xác nhận";
  const amount = `${new Intl.NumberFormat("vi-VN").format(quote.amount)}đ`;
  const unit = quote.unit === "PER_PERSON" ? "/người" : quote.unit === "PER_TRIP" ? "/chuyến" : "";
  return quote.kind === bookingPriceSemantics.STARTING_FROM
    ? `Từ ${amount}${unit}`
    : `Ước tính khoảng ${amount}${unit}`;
}

export function bookingPricePayloadFields(quote) {
  const hasNumericEvidence = [bookingPriceSemantics.STARTING_FROM, bookingPriceSemantics.ESTIMATE].includes(quote.kind)
    && typeof quote.amount === "number"
    && Number.isFinite(quote.amount)
    && quote.amount > 0;
  return Object.freeze({
    estimated_price: hasNumericEvidence ? quote.amount : null,
    estimated_price_semantic: hasNumericEvidence ? quote.kind : bookingPriceSemantics.CONTACT,
    estimated_price_unit: hasNumericEvidence ? quote.unit : null,
  });
}

/** Prevents old or malformed clients from persisting an unclassified number. */
export function normalizeBookingPricePayload(booking) {
  const semantic = booking.estimated_price_semantic;
  const amount = booking.estimated_price;
  const hasNumericEvidence = [bookingPriceSemantics.STARTING_FROM, bookingPriceSemantics.ESTIMATE].includes(semantic)
    && typeof amount === "number"
    && Number.isFinite(amount)
    && amount > 0;
  const unit = ["PER_PERSON", "PER_TRIP"].includes(booking.estimated_price_unit) ? booking.estimated_price_unit : null;
  return {
    ...booking,
    estimated_price: hasNumericEvidence ? amount : null,
    estimated_price_semantic: hasNumericEvidence ? semantic : bookingPriceSemantics.CONTACT,
    estimated_price_unit: hasNumericEvidence ? unit : null,
  };
}
