import assert from "node:assert/strict";
import test from "node:test";
import {
  plan001GapClasses,
  plan001Queues,
  sprint001CandidatePool,
  sprint001Proposal,
} from "../data/seo/planning/plan-001.mjs";

test("PLAN-001 evaluates the exact ten-asset candidate pool", () => {
  assert.equal(sprint001CandidatePool.length, 10);
  assert.equal(new Set(sprint001CandidatePool.map(({ assetId }) => assetId)).size, 10);
  assert.deepEqual(
    new Set(sprint001CandidatePool.map(({ assetId }) => assetId)),
    new Set(["MP-005", "MP-003", "MP-004", "CP-007", "MP-006", "CP-003", "CP-002", "CP-004", "MP-019", "MP-020"]),
  );
});

test("every material gap receives exactly one allowed classification", () => {
  for (const asset of sprint001CandidatePool) {
    assert.ok(asset.missingFacts.length > 0, asset.assetId);
    for (const gap of asset.missingFacts) {
      assert.equal(typeof gap.classification, "string");
      assert.equal(plan001GapClasses.includes(gap.classification), true, `${asset.assetId}: ${gap.fact}`);
    }
  }
});

test("Sprint 001 contains six existing URLs and no blocked endpoint candidate", () => {
  assert.deepEqual(sprint001Proposal, ["MP-005", "MP-003", "CP-003", "CP-002", "MP-004", "CP-007"]);
  assert.equal(sprint001Proposal.length >= 5 && sprint001Proposal.length <= 8, true);
  for (const assetId of sprint001Proposal) {
    const asset = sprint001CandidatePool.find((candidate) => candidate.assetId === assetId);
    assert.equal(asset.urlState, "EXISTING");
    assert.equal(asset.missingFacts.some((gap) => gap.classification === "BLOCKING"), false);
  }
});

test("new endpoint candidates stay uncreated and out of Sprint 001", () => {
  for (const assetId of ["MP-019", "MP-020"]) {
    const asset = sprint001CandidatePool.find((candidate) => candidate.assetId === assetId);
    assert.equal(asset.urlState, "NEW_CANDIDATE_NOT_CREATED");
    assert.equal(asset.sprint001, false);
    assert.equal(asset.missingFacts.some((gap) => gap.classification === "BLOCKING"), true);
  }
});

test("three planning queues cover the candidate pool exactly once", () => {
  assert.deepEqual(plan001Queues, {
    DO_FIRST: ["MP-005", "MP-003", "CP-003", "CP-002"],
    NEED_MINIMAL_OWNER_INPUT: ["MP-004", "CP-007", "MP-019"],
    DEFER: ["MP-006", "CP-004", "MP-020"],
  });
  const queued = Object.values(plan001Queues).flat();
  assert.equal(queued.length, 10);
  assert.equal(new Set(queued).size, 10);
});
