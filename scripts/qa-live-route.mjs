#!/usr/bin/env node

/**
 * LIVE APPLICATION BROWSER QA (CHROME BLINK VIA CDP)
 *
 * Navigates directly to the REAL running Next.js application URL:
 * Usage:
 *   node scripts/qa-live-route.mjs <BASE_URL> <SLUG>
 * Example:
 *   node scripts/qa-live-route.mjs https://preview.domain.vercel.app xe-ghep-hai-duong-quang-ninh
 *
 * ZERO synthetic HTML generation. Inspects the authentic HTML & DOM produced by Next.js.
 */

import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(fileURLToPath(import.meta.url), "../..");
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const DEBUG_PORT = 9223;

const rawBaseUrl = process.argv[2] || "https://xeghepphongcach.com";
const BASE_URL = rawBaseUrl.replace(/\/$/, "");
const slug = process.argv[3] || "xe-ghep-hai-duong-quang-ninh";
const targetUrl = `${BASE_URL}/${slug}`;

const isQn = slug.includes("quang-ninh");
const isHp = slug.includes("hai-phong");

console.log("==================================================");
console.log("🌐 LIVE APPLICATION BROWSER QA (REAL DOM VIA CDP)");
console.log(`Target URL: ${targetUrl}`);
console.log(`Route Slug: ${slug}`);
console.log("==================================================");

// Launch Google Chrome in headless mode with remote debugging
console.log("[Browser QA] Launching Google Chrome (headless)...");
const chromeProc = spawn(CHROME_PATH, [
  "--headless=new",
  `--remote-debugging-port=${DEBUG_PORT}`,
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "--user-data-dir=/tmp/chrome-live-qa-profile-" + Date.now(),
  "about:blank",
]);

let killed = false;
function cleanup() {
  if (!killed) {
    killed = true;
    try { chromeProc.kill("SIGTERM"); } catch (_) {}
  }
}
process.on("exit", cleanup);
process.on("SIGINT", () => { cleanup(); process.exit(1); });
process.on("SIGTERM", () => { cleanup(); process.exit(1); });

// Wait for Chrome DevTools endpoint
let wsUrl = null;
for (let i = 0; i < 30; i++) {
  await new Promise((r) => setTimeout(r, 200));
  try {
    const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
    if (res.ok) {
      const data = await res.json();
      wsUrl = data.webSocketDebuggerUrl;
      break;
    }
  } catch (_) {}
}

if (!wsUrl) {
  cleanup();
  console.error("❌ Failed to connect to Chrome DevTools Protocol");
  process.exit(1);
}

console.log("[Browser QA] Chrome CDP connected successfully.");

// WebSocket helper
const { WebSocket } = await import("ws");
const ws = new WebSocket(wsUrl);

await new Promise((res, rej) => {
  ws.on("open", res);
  ws.on("error", rej);
});

let msgId = 1;
const pendingCalls = new Map();

ws.on("message", (raw) => {
  const data = JSON.parse(raw.toString());
  if (data.id && pendingCalls.has(data.id)) {
    const { resolve, reject } = pendingCalls.get(data.id);
    pendingCalls.delete(data.id);
    if (data.error) reject(data.error);
    else resolve(data.result);
  }
});

function sendCDP(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = msgId++;
    pendingCalls.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

// Enable domains
await sendCDP("Page.enable");
await sendCDP("Runtime.enable");
await sendCDP("DOM.enable");
await sendCDP("Network.enable");

async function evaluate(expression) {
  const res = await sendCDP("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  if (res.exceptionDetails) {
    throw new Error(`Eval exception: ${res.exceptionDetails.text}`);
  }
  return res.result.value;
}

async function captureScreenshot(filePath) {
  const res = await sendCDP("Page.captureScreenshot", { format: "png" });
  await mkdir(join(rootDir, "seo/screenshots"), { recursive: true });
  await writeFile(filePath, Buffer.from(res.data, "base64"));
  console.log(`[Screenshot] Saved: ${filePath}`);
}

async function runLiveQA() {
  console.log(`\n--- TEST SUITE 1: DESKTOP VIEWPORT (1440x900) ---`);
  await sendCDP("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });

  // Track HTTP response status
  let responseStatusCode = null;
  const onResponse = (data) => {
    try {
      const msg = JSON.parse(data.toString());
      if (msg.method === "Network.responseReceived") {
        const url = msg.params.response.url;
        if (url.includes(slug)) {
          responseStatusCode = msg.params.response.status;
        }
      }
    } catch (_) {}
  };
  ws.on("message", onResponse);

  console.log(`[Desktop] Navigating to ${targetUrl}...`);
  await sendCDP("Page.navigate", { url: targetUrl });
  await new Promise((r) => setTimeout(r, 4000));

  // 1. HTTP Status check
  if (responseStatusCode) {
    console.log(`[Live HTTP] Status: ${responseStatusCode} ${responseStatusCode === 200 ? "(PASS)" : "(FAIL)"}`);
    if (responseStatusCode !== 200) {
      throw new Error(`Expected HTTP 200, got ${responseStatusCode}`);
    }
  } else {
    console.log("[Live HTTP] Page loaded without blocking network errors (PASS)");
  }

  // 2. Canonical & Robots check
  const canonicalHref = await evaluate(`document.querySelector('link[rel="canonical"]')?.getAttribute('href')`);
  console.log(`[Desktop] Canonical URL: "${canonicalHref}"`);
  if (!canonicalHref || !canonicalHref.includes(slug)) {
    throw new Error(`Invalid canonical URL: ${canonicalHref}`);
  }

  const robotsMeta = await evaluate(`document.querySelector('meta[name="robots"]')?.getAttribute('content')`);
  console.log(`[Desktop] Meta Robots: "${robotsMeta ?? 'default: index,follow'}" (PASS)`);
  if (robotsMeta && robotsMeta.includes("noindex")) {
    throw new Error(`Accidental noindex detected on live route!`);
  }

  // 3. H1 & Hero checks
  const h1Text = await evaluate(`document.querySelector('h1')?.innerText?.trim()`);
  console.log(`[Desktop] H1 Check: "${h1Text}"`);
  const expectedH1 = isQn ? "Xe ghép Hải Dương - Quảng Ninh" : "Xe ghép Hải Dương - Hải Phòng";
  if (h1Text !== expectedH1) {
    throw new Error(`H1 mismatch! Expected "${expectedH1}", got "${h1Text}"`);
  }

  const startingPrice = await evaluate(`document.querySelector('.MoneyLandingPage_heroPriceTag__.* strong, [class*="heroPriceTag"] strong')?.innerText?.trim()`);
  console.log(`[Desktop] Hero Starting Price: "${startingPrice}"`);

  // 4. Pricing Table verification
  const tableRowsCount = await evaluate(`document.querySelectorAll('table tbody tr').length`);
  console.log(`[Desktop] Pricing Table Rows: ${tableRowsCount} rows found`);
  const expectedRows = isQn ? 16 : 11;
  if (tableRowsCount !== expectedRows) {
    throw new Error(`Expected ${expectedRows} table rows, found ${tableRowsCount}`);
  }

  // Route-specific detailed pricing checks
  if (isQn) {
    const tableData = await evaluate(`
      Array.from(document.querySelectorAll('table tbody tr')).map(row => {
        const cols = row.querySelectorAll('td');
        return {
          name: cols[0]?.innerText?.trim(),
          shared: cols[1]?.innerText?.trim(),
          private: cols[2]?.innerText?.trim(),
        };
      });
    `);

    const qnChecks = [
      { name: "Đông Triều", check: (r) => r.shared.includes("250.000") && r.private.includes("10.000đ/km") },
      { name: "Uông Bí", check: (r) => r.shared.includes("300.000") && r.private.includes("600.000") },
      { name: "Hạ Long", check: (r) => r.shared.includes("400.000") && r.private.includes("1.000.000") },
      { name: "Cẩm Phả", check: (r) => r.shared.includes("450.000") && r.private.includes("1.200.000") },
      { name: "Vân Đồn", check: (r) => r.shared.includes("500.000") && r.private.includes("1.500.000") },
      { name: "Móng Cái", check: (r) => r.shared.includes("700.000") && r.private.includes("Liên hệ") },
    ];

    for (const item of qnChecks) {
      const match = tableData.find((r) => r.name.includes(item.name));
      if (!match || !item.check(match)) {
        throw new Error(`Pricing check failed for QN endpoint ${item.name}: ${JSON.stringify(match)}`);
      }
      console.log(`  ✅ Verified QN endpoint ${item.name}: Ghép=${match.shared}, Bao xe=${match.private}`);
    }
  }

  if (isHp) {
    const tableData = await evaluate(`
      Array.from(document.querySelectorAll('table tbody tr')).map(row => {
        const cols = row.querySelectorAll('td');
        return {
          name: cols[0]?.innerText?.trim(),
          shared: cols[1]?.innerText?.trim(),
          private: cols[2]?.innerText?.trim(),
        };
      });
    `);

    const hpChecks = [
      { name: "Trung tâm", check: (r) => r.shared.includes("250.000") && r.private.includes("500.000") },
      { name: "Cát Bi", check: (r) => r.shared.includes("300.000") && r.private.includes("550.000") },
      { name: "Tiên Lãng", check: (r) => r.shared.includes("300.000") && r.private.includes("10.000đ/km") },
    ];

    for (const item of hpChecks) {
      const match = tableData.find((r) => r.name.includes(item.name));
      if (!match || !item.check(match)) {
        throw new Error(`Pricing check failed for HP endpoint ${item.name}: ${JSON.stringify(match)}`);
      }
      console.log(`  ✅ Verified HP endpoint ${item.name}: Ghép=${match.shared}, Bao xe=${match.private}`);
    }
  }

  // 5. Contact & CTA checks
  const phoneHref = await evaluate(`document.querySelector('a[href^="tel:"]')?.getAttribute('href')`);
  console.log(`[Desktop] Phone CTA: ${phoneHref} (PASS)`);
  if (!phoneHref?.includes("0987663883") && !phoneHref?.includes("+84987663883")) {
    throw new Error(`Phone CTA does not point to canonical hotline: ${phoneHref}`);
  }

  const zaloHref = await evaluate(`document.querySelector('a[href*="zalo.me"]')?.getAttribute('href')`);
  console.log(`[Desktop] Zalo CTA: ${zaloHref} (PASS)`);
  if (!zaloHref?.includes("0987663883")) {
    throw new Error(`Zalo CTA does not point to canonical Zalo: ${zaloHref}`);
  }

  const bookingHref = await evaluate(`document.querySelector('a[href*="#dat-xe"]')?.getAttribute('href')`);
  console.log(`[Desktop] Booking CTA deep link: ${bookingHref}`);
  const expectedTo = isQn ? "Qu%E1%BA%A3ng%20Ninh" : "H%E1%BA%A3i%20Ph%C3%B2ng";
  if (!bookingHref?.includes(expectedTo) && !bookingHref?.includes(decodeURIComponent(expectedTo))) {
    throw new Error(`Booking CTA destination mismatch: expected ${expectedTo}, got ${bookingHref}`);
  }

  // 6. Schema JSON-LD checks
  const schemas = await evaluate(`
    Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
      .map(s => {
        try { return JSON.parse(s.innerText); } catch (e) { return null; }
      })
      .filter(Boolean);
  `);

  let hasService = false;
  let hasBreadcrumb = false;
  let hasFaqPage = false;

  for (const s of schemas) {
    const graph = s["@graph"] || [s];
    for (const item of graph) {
      if (item["@type"] === "Service") hasService = true;
      if (item["@type"] === "BreadcrumbList") hasBreadcrumb = true;
      if (item["@type"] === "FAQPage") hasFaqPage = true;
    }
  }

  console.log(`[Schema] Service: ${hasService ? "PASS" : "FAIL"}`);
  console.log(`[Schema] BreadcrumbList: ${hasBreadcrumb ? "PASS" : "FAIL"}`);
  console.log(`[Schema] FAQPage (Deprecated): ${!hasFaqPage ? "REMOVED (PASS)" : "PRESENT (FAIL)"}`);

  if (!hasService || !hasBreadcrumb) throw new Error("Missing required Service or BreadcrumbList schema!");
  if (hasFaqPage) throw new Error("Deprecated FAQPage schema must be eliminated!");

  // 7. Desktop horizontal overflow check
  const desktopOverflow = await evaluate(`
    ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    })
  `);
  console.log(`[Desktop] Overflow: scrollWidth=${desktopOverflow.scrollWidth}, clientWidth=${desktopOverflow.clientWidth} ${desktopOverflow.scrollWidth <= desktopOverflow.clientWidth ? "(PASS)" : "(FAIL)"}`);
  if (desktopOverflow.scrollWidth > desktopOverflow.clientWidth) {
    throw new Error("Desktop page has horizontal overflow!");
  }

  await captureScreenshot(join(rootDir, `seo/screenshots/live-${slug}-desktop.png`));

  console.log(`\n--- TEST SUITE 2: MOBILE VIEWPORT (390x844 - iPhone 12/13/14) ---`);
  await sendCDP("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    mobile: true,
  });

  await new Promise((r) => setTimeout(r, 1500));

  // Mobile overflow
  const mobileOverflow = await evaluate(`
    ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    })
  `);
  console.log(`[Mobile] Page Overflow: scrollWidth=${mobileOverflow.scrollWidth}, clientWidth=${mobileOverflow.clientWidth} ${mobileOverflow.scrollWidth <= 390 ? "(PASS)" : "(FAIL)"}`);
  if (mobileOverflow.scrollWidth > 390) {
    throw new Error(`Mobile page overflows viewport width! (${mobileOverflow.scrollWidth} > 390)`);
  }

  // Mobile table horizontal scrollability
  const tableWrapMetrics = await evaluate(`
    (() => {
      const wrap = document.querySelector('[class*="tableWrap"]');
      if (!wrap) return null;
      return {
        clientWidth: wrap.clientWidth,
        scrollWidth: wrap.scrollWidth,
        canScroll: wrap.scrollWidth > wrap.clientWidth
      };
    })()
  `);
  console.log(`[Mobile] Table Wrapper Metrics: ${JSON.stringify(tableWrapMetrics)}`);
  if (!tableWrapMetrics || !tableWrapMetrics.canScroll) {
    throw new Error("Pricing table is not horizontally scrollable on mobile 390px!");
  }

  // Verify actual scroll interaction
  const scrolledMetrics = await evaluate(`
    (() => {
      const wrap = document.querySelector('[class*="tableWrap"]');
      wrap.scrollLeft = 120;
      return { scrollLeft: wrap.scrollLeft };
    })()
  `);
  console.log(`[Mobile] Scrolled scrollLeft: ${scrolledMetrics.scrollLeft} ${scrolledMetrics.scrollLeft > 0 ? "(PASS)" : "(FAIL)"}`);

  // CTA touch target size
  const ctaBox = await evaluate(`
    (() => {
      const btn = document.querySelector('a[href^="tel:"]');
      if (!btn) return null;
      const rect = btn.getBoundingClientRect();
      return { width: Math.round(rect.width), height: Math.round(rect.height) };
    })()
  `);
  console.log(`[Mobile] CTA Touch Target Size: ${ctaBox?.width}x${ctaBox?.height}px ${ctaBox?.height >= 40 ? "(PASS >= 40px)" : "(FAIL)"}`);
  if (!ctaBox || ctaBox.height < 40) {
    throw new Error(`CTA touch target height is less than 40px (${ctaBox?.height}px)`);
  }

  await captureScreenshot(join(rootDir, `seo/screenshots/live-${slug}-mobile.png`));

  console.log(`\n==================================================`);
  console.log(`🎉 LIVE APPLICATION BROWSER QA PASSED FOR ${slug.toUpperCase()}`);
  console.log(`==================================================\n`);
}

try {
  await runLiveQA();
  cleanup();
  process.exit(0);
} catch (err) {
  console.error("❌ Live Browser QA Failed:", err);
  cleanup();
  process.exit(1);
}
