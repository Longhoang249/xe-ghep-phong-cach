import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { existingPublicUrlBaseline } from "../data/seo/existing-public-url-baseline.mjs";
import {
  collectEndpointAuditFacts,
  data003Recommendation,
  endpointWebsiteClaimAudit,
  endpointAuditEvidenceStatuses,
  endpointPublicationReadiness,
  quangNinhEndpointAudit,
  summarizeEndpointAudit,
} from "../data/seo/route-knowledge/data-003-endpoint-audit.mjs";
import {
  collectKnowledgeFacts,
  phase1KnowledgeMeta,
  phase1SubRoutes,
  resolvePhase1PriceFacts,
} from "../data/seo/route-knowledge/phase1.mjs";
import {
  isEndpointEligibleForPublication,
  summarizePhase1KnowledgeBase,
  validatePhase1KnowledgeBase,
} from "../data/seo/route-knowledge/validation.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { productionAssetPaths } from "../lib/seo/publication.mjs";

const endpointIds = Object.freeze([
  "hd-bai-chay",
  "hd-uong-bi",
  "hd-cam-pha",
  "hd-van-don",
  "hd-ao-tien",
  "hd-dong-trieu",
  "hd-quang-yen",
  "hd-mong-cai",
  "hd-ha-long",
]);

test("DATA-003 preserves the public URL baseline and all publication states", () => {
  const currentPaths = [
    "/", "/tuyen-xe", "/blog", "/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe",
    ...productionAssetPaths(seoAssets),
  ];
  assert.equal(seoAssets.length, 32);
  assert.ok(seoAssets.every((asset) => asset.status === "PUBLISHED"));
  assert.equal(currentPaths.length, 39);
  assert.deepEqual(new Set(currentPaths), new Set([...existingPublicUrlBaseline, "/xe-ghep-hai-duong-ha-long"]));
  assert.deepEqual(Object.keys(moneyPageUpgrades), ["hd-hp", "hd-cb", "hd-qn", "hd-ha-long"]);
});

test("Bãi Cháy is aligned to existing Owner evidence without becoming publishable", () => {
  const baiChay = phase1SubRoutes.find((record) => record.subRouteId === "hd-bai-chay");
  assert.equal(baiChay?.serviceStatus, "CONFIRMED");
  assert.equal(baiChay?.publicationState, "DATA_ONLY");
  assert.equal(baiChay?.canonical, null);
  assert.deepEqual(baiChay?.existingAssetIds, []);
  assert.equal(isEndpointEligibleForPublication(baiChay), false);

  const resolution = resolvePhase1PriceFacts("hd-bai-chay");
  assert.equal(resolution?.sourceRecordId, "hd-qn");
  assert.equal(resolution?.scope, "INHERITED_PARENT_CORRIDOR");
  assert.equal(resolution?.publicationEligible, false);
  assert.ok(Object.values(resolution.prices).filter((fact) => fact?.priceModel).every((fact) => fact.priceModel === "VERIFIED_FROM"));
});

test("all other unpublished Quảng Ninh endpoints remain unconfirmed and UNKNOWN", () => {
  const unconfirmedIds = endpointIds.filter((id) => !["hd-bai-chay", "hd-ha-long"].includes(id));
  for (const id of unconfirmedIds) {
    const record = phase1SubRoutes.find((item) => item.subRouteId === id);
    assert.equal(record?.serviceStatus, "UNCONFIRMED", `${id} service must remain unconfirmed`);
    assert.equal(record?.publicationState, "DATA_ONLY");
    assert.equal(record?.canonical, null);
    assert.equal(isEndpointEligibleForPublication(record), false);
    assert.ok(collectKnowledgeFacts(record).every((fact) => fact.status === "UNKNOWN"));

    const resolution = resolvePhase1PriceFacts(id);
    assert.equal(resolution?.scope, "INHERITED_PARENT_CORRIDOR");
    assert.equal(resolution?.publicationEligible, false);
  }
});

test("endpoint audit uses only allowed evidence/readiness states and traceable VERIFIED facts", () => {
  assert.deepEqual(new Set(quangNinhEndpointAudit.map((record) => record.id)), new Set(endpointIds));
  for (const record of quangNinhEndpointAudit) {
    assert.ok(endpointPublicationReadiness.includes(record.publicationReadiness));
    assert.equal(record.priorityScore.total, record.priorityScore.evidenceCompleteness
      + record.priorityScore.transactionalSeoValue
      + record.priorityScore.strategicFit
      + record.priorityScore.internalLinkPotential
      + record.priorityScore.operationalClarity);
    assert.ok(record.priorityScore.total >= 0 && record.priorityScore.total <= 100);
  }
  for (const fact of collectEndpointAuditFacts()) {
    assert.ok(endpointAuditEvidenceStatuses.includes(fact.status));
    if (fact.status === "VERIFIED") {
      assert.ok(fact.sourceType && fact.sourceRef && fact.verifiedAt && fact.verifiedBy);
    }
  }
  assert.deepEqual(summarizeEndpointAudit(), {
    endpoints: 9,
    totalFacts: 90,
    evidence: { VERIFIED: 21, ESTIMATE: 0, UNKNOWN: 69 },
    readiness: { READY: 1, NEAR_READY: 1, BLOCKED: 7 },
  });
});

test("DATA-003 keeps KB valid and records the evidence-only fact reclassification", () => {
  assert.equal(phase1KnowledgeMeta.taskId, "DATA-003");
  assert.equal(phase1KnowledgeMeta.version, "v1.3");
  assert.deepEqual(summarizePhase1KnowledgeBase(), {
    parentRoutes: 3,
    subRoutes: 13,
    mappedAssets: 12,
    canonicalRouteFacts: 366,
    assetClaimObservations: 67,
    fallbackFacts: 8,
    pricingRuleFacts: 3,
    totalFacts: 444,
    evidence: { VERIFIED: 113, PUBLIC_SOURCE: 0, ESTIMATE: 8, UNKNOWN: 323 },
    conflicts: 3,
    fallbackPaths: 8,
    readiness: { READY_FOR_CONTENT: 0, PARTIAL: 5, DATA_REQUIRED: 11, DO_NOT_PUBLISH: 0 },
  });
  assert.deepEqual(validatePhase1KnowledgeBase(), { valid: true, errors: [], factCount: 444 });
});

test("SPRINT-006 recommendation is NONE and Owner request stays minimal", async () => {
  assert.equal(data003Recommendation.decision, "NONE");
  assert.equal(data003Recommendation.recommendedNextMoneyPage, null);
  const request = await readFile(new URL("../OWNER_DATA_REQUEST_DATA003.md", import.meta.url), "utf8");
  for (const endpoint of ["Bãi Cháy", "Đông Triều", "Uông Bí", "Quảng Yên", "Cẩm Phả", "Vân Đồn", "Ao Tiên", "Móng Cái"]) {
    assert.match(request, new RegExp(endpoint));
  }
  assert.match(request, /Có \/ Không \/ Theo chuyến/);
  assert.match(request, /No endpoint URL is authorized/);
  assert.equal(endpointWebsiteClaimAudit.find((finding) => finding.surface === "MP-005")?.finding, "DATA_MODEL_COMPLIANT_PUBLIC_RENDER_GAP");
});
