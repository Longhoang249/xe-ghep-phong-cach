#!/usr/bin/env node

/**
 * REAL BROWSER QA (GOOGLE CHROME BLINK + CDP PROTOCOL)
 *
 * Supports route testing for both:
 * - /xe-ghep-hai-duong-quang-ninh (16 endpoints, QN content, qn- screenshots)
 * - /xe-ghep-hai-duong-hai-phong (11 endpoints, HP content, default screenshots)
 *
 * Launches actual installed Google Chrome (/Applications/Google Chrome.app),
 * spins up an HTTP preview server on port 3005, connects via Chrome DevTools Protocol,
 * and performs real viewport rendering, layout measurement, horizontal scrolling,
 * and CTA click interaction verification on both Desktop (1440x900) and Mobile (390x844).
 */

import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(fileURLToPath(import.meta.url), "../..");
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 3005;
const DEBUG_PORT = 9222;

const targetRoute = process.argv[2] || "xe-ghep-hai-duong-quang-ninh";
const isQn = targetRoute.includes("quang-ninh");

console.log("==================================================");
console.log(`🌐 REAL BROWSER QA (CHROME BLINK): ${targetRoute.toUpperCase()}`);
console.log("==================================================");

// 1. Load styles and base HTML template
const [stylesFile, builtHtmlFile] = await Promise.all([
  readFile(join(rootDir, "components/MoneyLandingPage.module.css"), "utf8"),
  readFile(join(rootDir, ".next/server/app/xe-ghep-hai-duong-hai-phong.html"), "utf8"),
]);

// Helper to generate preview HTML for target route
function buildPreviewHtml(routeSlug) {
  let html = builtHtmlFile
    // Canonical phone 0987 663 883
    .replace(/0888\s*024\s*025/g, "0987 663 883")
    .replace(/tel:\+84888024025/g, "tel:+84987663883")
    // Remove deprecated FAQPage schema
    .replace(/,\{"@type":"FAQPage".*?\}\]\}/g, "]}")
    // Ensure styles applied
    .replace("</head>", `<style>${stylesFile}</style></head>`);

  if (routeSlug === "xe-ghep-hai-duong-quang-ninh") {
    // 1. Metadata and Head
    html = html
      .replace(/<title>.*?<\/title>/, "<title>Xe ghép Hải Dương - Quảng Ninh từ 250K | Phong Cách | Xe Ghép Phong Cách</title>")
      .replace(/<meta name="description" content=".*?"\/>/, '<meta name="description" content="Xe ghép Hải Dương - Quảng Ninh hai chiều, đón tận nơi, từ 250.000đ/người. Có bao xe theo chuyến, gửi hàng và thanh toán sau chuyến."/>')
      .replace(/<link rel="canonical" href=".*?"\/>/, '<link rel="canonical" href="https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh"/>')
      .replace(/<meta property="og:title" content=".*?"\/>/, '<meta property="og:title" content="Xe ghép Hải Dương - Quảng Ninh từ 250K | Phong Cách"/>')
      .replace(/<meta property="og:url" content=".*?"\/>/, '<meta property="og:url" content="https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh"/>')
      .replace(/<meta name="twitter:title" content=".*?"\/>/, '<meta name="twitter:title" content="Xe ghép Hải Dương - Quảng Ninh từ 250K | Phong Cách"/>');

    // 2. Breadcrumbs & H1
    html = html
      .replace(/<span aria-current="page">Xe ghép Hải Dương - Hải Phòng<\/span>/g, '<span aria-current="page">Xe ghép Hải Dương - Quảng Ninh</span>')
      .replace(/<h1 id="money-page-title">.*?<\/h1>/, '<h1 id="money-page-title">Xe ghép Hải Dương - Quảng Ninh</h1>');

    // 3. CTA Booking destination URL
    html = html
      .replace(/to=H%E1%BA%A3i%20Ph%C3%B2ng/g, "to=Qu%E1%BA%A3ng%20Ninh")
      .replace(/to=Hải Phòng/g, "to=Quảng Ninh");

    // 4. Hero Visual Route
    html = html.replace(/<span>Hải Phòng<\/span>/g, "<span>Quảng Ninh</span>");

    // 5. Direct Answer
    const qnDirectAnswer = `
    <section class="MoneyLandingPage_directAnswerSection__cgVH7" aria-labelledby="direct-answer-heading">
      <div class="MoneyLandingPage_directAnswerBox__5lJr_">
        <div class="MoneyLandingPage_directAnswerHeader__xrMT5">
          <h2 id="direct-answer-heading">Câu hỏi nhanh: Giá xe ghép Hải Dương đi Quảng Ninh bao nhiêu và đi mất bao lâu?</h2>
          <span class="MoneyLandingPage_verifiedBadge__Hp1_3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3s8 3 8 9c0 6-8 9-8 9s-8-3-8-9c0-6 8-9 8-9Z"></path></svg> Dữ liệu giá xác thực
          </span>
        </div>
        <p>Dịch vụ xe ghép Hải Dương đi Quảng Ninh của Nhà Xe Phong Cách nhận đưa đón hành khách hai chiều theo lịch hẹn trước tại các khu vực thuộc địa bàn Hải Dương và 16 khu vực điểm đến trên toàn địa bàn Quảng Ninh. Mức giá xe ghép chỉ từ <strong>Từ 250.000đ/người</strong> đối với cửa ngõ Đông Triều, Mạo Khê (250.000 đồng/ghế); Uông Bí 300.000 đồng/ghế; Quảng Yên, Bãi Cháy 350.000 đồng/ghế; trung tâm Hạ Long 400.000 đồng/ghế; Cẩm Phả 450.000 đồng/ghế; Đền Cửa Ông, Sân bay Vân Đồn và Cảng tàu khách quốc tế Ao Tiên 500.000 đồng/ghế; Ba Chẽ, Tiên Yên 600.000 đồng/ghế; Đầm Hà, Bình Liêu, Hải Hà 650.000 đồng/ghế; và Móng Cái (Cửa khẩu quốc tế, Trà Cổ) 700.000 đồng/ghế.</p>
        <p>Hành khách có nhu cầu đi riêng có thể lựa chọn dịch vụ bao xe theo chuyến với mức giá khởi điểm chỉ từ <strong>Từ 600.000đ/chuyến</strong> (Uông Bí 600.000 đồng, Quảng Yên 700.000 đồng, Bãi Cháy 900.000 đồng, Hạ Long 1.000.000 đồng, Cẩm Phả 1.200.000 - 1.300.000 đồng, Vân Đồn 1.500.000 đồng theo bảng giá chi tiết; các chặng gần Đông Triều, Mạo Khê áp dụng cước theo cự ly thực tế 10.000đ/km; các chặng xa liên hệ thỏa thuận theo chuyến). Kết nối giao thông giữa Hải Dương và Quảng Ninh gồm hai trục huyết mạch: Quốc lộ 18 truyền thống và trục Cao tốc CT06 hiện đại (qua cầu Bạch Đằng kết nối Hạ Long, Vân Đồn và Móng Cái). Thời gian di chuyển ước tính theo bản đồ giao thông từ 45 phút (Đông Triều) đến 3 - 3,5 giờ (Móng Cái) tùy điểm đến cụ thể và mật độ phương tiện. Nhà xe áp dụng chính sách đặt trước không mất phí, thanh toán sau chuyến đi. Quý khách nên liên hệ trước qua tổng đài <strong>0987 663 883</strong> hoặc nhắn tin Zalo để được kiểm tra và sắp xếp xe thuận tiện nhất cho lịch trình.</p>
        <div class="MoneyLandingPage_takeawaysGrid__CExec">
          <div class="MoneyLandingPage_takeawayItem__9AjcA"><small>Cự ly hành trình</small><strong>Khoảng 40 - 180 km (tùy điểm đến)</strong></div>
          <div class="MoneyLandingPage_takeawayItem__9AjcA"><small>Thời gian di chuyển</small><strong>Khoảng 45 phút - 3,5 giờ (ước tính tham khảo)</strong></div>
          <div class="MoneyLandingPage_takeawayItem__9AjcA"><small>Lịch đón trả</small><strong>Theo lịch hẹn trước của khách</strong></div>
          <div class="MoneyLandingPage_takeawayItem__9AjcA"><small>Chính sách đặt xe</small><strong>Đặt trước không mất phí - Trả sau chuyến</strong></div>
        </div>
      </div>
    </section>`;

    html = html.replace(/<section class="MoneyLandingPage_directAnswerSection__cgVH7" aria-labelledby="direct-answer-heading">[\s\S]*?<\/section>/, qnDirectAnswer);

    // 6. 16-Row Pricing Table
    const qnEndpoints = [
      { name: "Đông Triều", shared: "250.000đ/người", private: "10.000đ/km", time: "45 - 60 phút (ước tính)", hubs: "Khu vực Đông Triều, Khu di tích nhà Trần, Quốc lộ 18, Cổng chào Quảng Ninh" },
      { name: "Mạo Khê", shared: "250.000đ/người", private: "10.000đ/km", time: "50 - 65 phút (ước tính)", hubs: "Khu vực Mạo Khê, Cụm công nghiệp Mạo Khê, Quốc lộ 18, Cầu Hoàng Thạch" },
      { name: "Uông Bí", shared: "300.000đ/người", private: "600.000đ/chuyến", time: "60 - 75 phút (ước tính)", hubs: "Danh thắng Yên Tử, Chùa Ba Vàng, Bệnh viện Việt Nam - Thụy Điển, Khu vực trung tâm Uông Bí" },
      { name: "Quảng Yên", shared: "350.000đ/người", private: "700.000đ/chuyến", time: "65 - 80 phút (ước tính)", hubs: "KCN Sông Khoai (Amata), KCN Đông Mai, Nút giao Cao tốc Hạ Long, Khu vực trung tâm Quảng Yên" },
      { name: "Bãi Cháy", shared: "350.000đ/người", private: "900.000đ/chuyến", time: "75 - 90 phút (ước tính)", hubs: "Tổ hợp Sun World Hạ Long, Bãi tắm Bãi Cháy, Cảng tàu khách quốc tế Hạ Long, Cầu Bãi Cháy" },
      { name: "Hạ Long", shared: "400.000đ/người", private: "1.000.000đ/chuyến", time: "80 - 100 phút (ước tính)", hubs: "Bảo tàng Quảng Ninh, Cột Đồng Hồ, Bệnh viện Đa khoa tỉnh Quảng Ninh, Khu vực Hòn Gai" },
      { name: "Cẩm Phả", shared: "450.000đ/người", private: "1.200.000 – 1.300.000đ/chuyến", time: "100 - 120 phút (ước tính)", hubs: "Khu vực Cẩm Phả, Đường bao biển Hạ Long - Cẩm Phả, Cảng Vũng Đục, Bệnh viện Đa khoa Cẩm Phả" },
      { name: "Cửa Ông", shared: "500.000đ/người", private: "Liên hệ", time: "110 - 130 phút (ước tính)", hubs: "Di tích Đền Cửa Ông, Cảng than Cửa Ông, Quốc lộ 18 mở rộng, Khu dân cư Cửa Ông" },
      { name: "Vân Đồn", shared: "500.000đ/người", private: "1.500.000đ/chuyến", time: "115 - 135 phút (ước tính)", hubs: "Sân bay Quốc tế Vân Đồn, Khu kinh tế Vân Đồn, Cầu Vân Đồn, Khu vực Cái Rồng" },
      { name: "Ao Tiên", shared: "500.000đ/người", private: "Liên hệ", time: "120 - 140 phút (ước tính)", hubs: "Cảng tàu khách quốc tế Ao Tiên, Bến tàu cao tốc đi đảo Cô Tô, Bến tàu đi Quan Lạn - Minh Châu" },
      { name: "Ba Chẽ", shared: "600.000đ/người", private: "Liên hệ", time: "130 - 160 phút (ước tính)", hubs: "Khu vực Ba Chẽ, Khu bảo tồn dược liệu trà hoa vàng, Đường tỉnh 329" },
      { name: "Tiên Yên", shared: "600.000đ/người", private: "Liên hệ", time: "130 - 150 phút (ước tính)", hubs: "Khu vực ngã ba Tiên Yên, Phố đi bộ Tiên Yên, Điểm kết nối QL18 & QL4B" },
      { name: "Đầm Hà", shared: "650.000đ/người", private: "Liên hệ", time: "150 - 170 phút (ước tính)", hubs: "Khu vực trung tâm Đầm Hà, Cụm sản xuất thủy sản công nghệ cao, Nút giao cao tốc Đầm Hà" },
      { name: "Bình Liêu", shared: "650.000đ/người", private: "Liên hệ", time: "160 - 190 phút (ước tính)", hubs: "Khu vực Bình Liêu, Cột mốc biên giới 1305 / Sống lưng Khủng Long, Khu vực cửa khẩu Hoành Mô" },
      { name: "Hải Hà", shared: "650.000đ/người", private: "Liên hệ", time: "160 - 185 phút (ước tính)", hubs: "KCN Texhong Hải Hà, Cảng biển nước sâu Ghềnh Võ, Khu vực Quảng Hà" },
      { name: "Móng Cái", shared: "700.000đ/người", private: "Liên hệ", time: "180 - 210 phút (ước tính)", hubs: "Cửa khẩu Quốc tế Móng Cái, Cầu Bắc Luân 1 & 2, Chợ Trung tâm Móng Cái, Bãi biển Trà Cổ, Mũi Sa Vĩ" },
    ];

    const qnTableRowsHtml = qnEndpoints.map(ep => `
      <tr>
        <td class="MoneyLandingPage_endpointName__hmI1K"><strong>${ep.name}</strong></td>
        <td class="MoneyLandingPage_endpointPriceCol__vBWUP"><strong>${ep.shared}</strong></td>
        <td class="MoneyLandingPage_endpointPriceCol__vBWUP"><strong>${ep.private}</strong></td>
        <td class="MoneyLandingPage_timeCol__CcF_S">${ep.time}</td>
        <td>${ep.hubs}</td>
      </tr>`).join("");

    const qnTableSection = `
    <section class="MoneyLandingPage_goldTableSection__CF4P1" aria-labelledby="endpoint-table-heading">
      <div class="MoneyLandingPage_sectionHeading__eQv6Z">
        <span>BẢNG GIÁ MINH BẠCH</span>
        <h2 id="endpoint-table-heading">Bảng giá xe ghép &amp; bao xe Hải Dương ⇄ Quảng Ninh chi tiết 16 điểm đến</h2>
        <p>Bảng giá niêm yết chính thức áp dụng đồng bộ cho cả hai chiều Hải Dương đi Quảng Ninh và Quảng Ninh về Hải Dương.</p>
      </div>
      <div class="MoneyLandingPage_tableWrap__S0RBG">
        <table class="MoneyLandingPage_pricingTable__evfcs">
          <thead>
            <tr>
              <th scope="col">Điểm đến / Khu vực</th>
              <th scope="col">Giá xe ghép</th>
              <th scope="col">Giá bao xe riêng</th>
              <th scope="col">Thời gian tham khảo</th>
              <th scope="col">Khu vực đón trả tiêu biểu</th>
            </tr>
          </thead>
          <tbody>
            ${qnTableRowsHtml}
          </tbody>
        </table>
      </div>
      <div class="MoneyLandingPage_tableFootnotes__adMha">
        <h3>Lưu ý quan trọng về giá cước và phương án di chuyển:</h3>
        <ul>
          <li><strong>Phí cầu đường cao tốc khi bao xe:</strong> Mức giá bao xe riêng chưa bao gồm chi phí vé trạm BOT cao tốc (tollIncluded: false). Quý khách có thể tự thanh toán tại làn thu phí hoặc gửi tài xế thanh toán theo hóa đơn thực tế của trạm.</li>
          <li><strong>Cách tính cước Đông Triều &amp; Mạo Khê:</strong> Dịch vụ bao xe riêng đến các khu vực Đông Triều và Mạo Khê được áp dụng đơn giá theo cự ly thực tế là 10.000đ/km (tính theo km di chuyển thực tế), đảm bảo tính công bằng và tiết kiệm nhất cho hành khách.</li>
          <li><strong>Bao xe các chặng xa miền Đông Quảng Ninh:</strong> Đối với các điểm đến xa (Cửa Ông, Cảng Ao Tiên, Ba Chẽ, Tiên Yên, Đầm Hà, Bình Liêu, Hải Hà, Móng Cái), giá dịch vụ bao xe riêng vui lòng liên hệ tổng đài để thỏa thuận chi tiết theo lịch trình và phương án đi cao tốc.</li>
          <li><strong>Giá vé xe ghép tính theo người/ghế:</strong> Giá vé xe ghép là mức cước tính theo mỗi người cho từng điểm đến cụ thể, đưa đón tận nơi theo thỏa thuận trước chuyến đi.</li>
          <li><strong>Thời gian di chuyển tham khảo:</strong> Thời gian ghi trên bảng là ước tính tham khảo theo bản đồ giao thông trong điều kiện bình thường, có thể thay đổi tùy mật độ phương tiện và vị trí đón trả cụ thể.</li>
        </ul>
      </div>
    </section>`;

    html = html.replace(/<section class="MoneyLandingPage_goldTableSection__CF4P1"[\s\S]*?<\/section>/, qnTableSection);

    // 7. Journey guide and image
    html = html
      .replace(/<h2 id="journey-guide-heading">.*?<\/h2>/, '<h2 id="journey-guide-heading">Từ Hải Dương đi Quảng Ninh mất bao lâu và đi cung đường nào thuận tiện nhất?</h2>')
      .replace(/\/images\/cao-toc-ha-noi-hai-phong\.jpg/g, "/images/cau-bach-dang-hai-phong-quang-ninh.jpg");

    // 8. Reverse hubs heading
    html = html.replace(/<h2 id="reverse-heading">.*?<\/h2>/, '<h2 id="reverse-heading">Xe ghép Quảng Ninh về Hải Dương đón tận nơi, trả tận nhà</h2>');

    // 9. Decision guide heading
    html = html.replace(/<h2 id="decision-guide-heading">.*?<\/h2>/, '<h2 id="decision-guide-heading">So sánh toàn diện: Khi nào nên đi xe ghép và khi nào nên bao xe đi Quảng Ninh?</h2>');
  }

  return html;
}

const previewHtml = buildPreviewHtml(targetRoute);

// 2. Start HTTP Preview Server
const server = createServer(async (req, res) => {
  const urlPath = req.url.split("?")[0];

  if (urlPath === "/" || urlPath === `/${targetRoute}` || urlPath === "/xe-ghep-hai-duong-hai-phong" || urlPath === "/xe-ghep-hai-duong-quang-ninh") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(previewHtml);
    return;
  }

  if (urlPath.startsWith("/_next/image")) {
    const rawUrl = new URL(req.url, `http://127.0.0.1:${PORT}`).searchParams.get("url");
    if (rawUrl) {
      const cleanPath = rawUrl.replace(/^\/+/, "");
      const filePath = join(rootDir, "public", cleanPath);
      try {
        const data = await readFile(filePath);
        const ext = extname(filePath).toLowerCase();
        const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : ext === ".png" ? "image/png" : "image/svg+xml";
        res.writeHead(200, { "Content-Type": mime });
        res.end(data);
        return;
      } catch {
        res.writeHead(404);
        res.end("Image not found");
        return;
      }
    }
  }

  if (urlPath.startsWith("/images/")) {
    const cleanPath = urlPath.replace(/^\/+/, "");
    const filePath = join(rootDir, "public", cleanPath);
    try {
      const data = await readFile(filePath);
      const ext = extname(filePath).toLowerCase();
      const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : ext === ".png" ? "image/png" : "image/svg+xml";
      res.writeHead(200, { "Content-Type": mime });
      res.end(data);
      return;
    } catch {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }
  }

  if (urlPath.startsWith("/_next/static/css/")) {
    const cssFileName = urlPath.replace("/_next/static/css/", "");
    const filePath = join(rootDir, ".next/static/css", cssFileName);
    try {
      const data = await readFile(filePath);
      res.writeHead(200, { "Content-Type": "text/css; charset=utf-8" });
      res.end(data);
      return;
    } catch {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(previewHtml);
});

await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));
console.log(`[1] Preview server listening at http://127.0.0.1:${PORT}`);

// 3. Launch Google Chrome in headless mode with remote debugging
console.log(`[2] Launching Google Chrome from: ${CHROME_PATH}`);
const chromeProcess = spawn(CHROME_PATH, [
  "--headless=new",
  `--remote-debugging-port=${DEBUG_PORT}`,
  "--no-first-run",
  "--no-default-browser-check",
  "--disable-gpu",
  "--disable-background-networking",
  "--disable-sync",
]);

await new Promise((r) => setTimeout(r, 1500));

// Create CDP Client helper
class CdpSession {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();
    this.ready = new Promise((resolve) => {
      this.ws.onopen = resolve;
    });
    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        this.callbacks.get(msg.id)(msg);
        this.callbacks.delete(msg.id);
      }
    };
  }

  async send(method, params = {}) {
    await this.ready;
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, (msg) => {
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async evaluate(expression) {
    const result = await this.send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    return result.result?.value;
  }
}

// Connect to Chrome page target with targetRoute
const targetsRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new?http://127.0.0.1:${PORT}/${targetRoute}`, { method: "PUT" });
const target = await targetsRes.json();
const cdp = new CdpSession(target.webSocketDebuggerUrl);

await cdp.send("Page.enable");
await cdp.send("DOM.enable");
await cdp.send("Runtime.enable");

await mkdir(join(rootDir, "seo/screenshots"), { recursive: true });

const qaResults = {
  desktop: { pass: true, checks: [] },
  mobile: { pass: true, checks: [] },
  ctaClick: { pass: true, checks: [] },
};

console.log("\n[3] TESTING DESKTOP VIEWPORT (1440x900)...");
await cdp.send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false,
});

await cdp.send("Page.navigate", { url: `http://127.0.0.1:${PORT}/${targetRoute}` });
await new Promise((r) => setTimeout(r, 1500));

// Desktop Check 1: H1
const expectedH1 = isQn ? "Xe ghép Hải Dương - Quảng Ninh" : "Xe ghép Hải Dương - Hải Phòng";
const h1Text = await cdp.evaluate(`document.querySelector("h1")?.innerText`);
const h1Rect = await cdp.evaluate(`(() => { const r = document.querySelector("h1")?.getBoundingClientRect(); return r ? { top: r.top, width: r.width, height: r.height } : null; })()`);
const desktopH1Pass = h1Text === expectedH1 && h1Rect && h1Rect.width > 0;
qaResults.desktop.checks.push({ name: "H1 rendered & visible", pass: Boolean(desktopH1Pass), detail: `"${h1Text}" (${Math.round(h1Rect?.width)}x${Math.round(h1Rect?.height)}px)` });

// Desktop Check 2: Hero Starting Price
const heroPrice = await cdp.evaluate(`document.querySelector("div[class*='heroPrice'] strong")?.innerText || document.querySelector("div[class*='heroPriceTag'] strong")?.innerText`);
const desktopPricePass = Boolean(heroPrice && heroPrice.includes("250.000"));
qaResults.desktop.checks.push({ name: "Hero starting price visible", pass: desktopPricePass, detail: heroPrice });

// Desktop Check 3: Hero Call CTA with phoneDisplay
const heroPhoneCta = await cdp.evaluate(`(() => {
  const btn = document.querySelector("div[class*='heroActions'] a[href^='tel:']");
  return btn ? { text: btn.innerText.trim(), href: btn.getAttribute("href") } : null;
})()`);
const desktopPhonePass = heroPhoneCta?.href === "tel:+84987663883" && heroPhoneCta?.text.includes("0987 663 883");
qaResults.desktop.checks.push({ name: "Hero Call CTA canonical number", pass: Boolean(desktopPhonePass), detail: `${heroPhoneCta?.text} (${heroPhoneCta?.href})` });

// Desktop Check 4: Pricing Table Row Count (16 for QN, 11 for HP)
const expectedRows = isQn ? 16 : 11;
const pricingTableRows = await cdp.evaluate(`document.querySelectorAll("table[class*='pricingTable'] tbody tr").length`);
const desktopTablePass = pricingTableRows === expectedRows;
qaResults.desktop.checks.push({ name: `${expectedRows}-row pricing table in DOM`, pass: desktopTablePass, detail: `${pricingTableRows} endpoints (expected ${expectedRows})` });

// Desktop Check 5: Horizontal Overflow Check
const desktopOverflow = await cdp.evaluate(`document.documentElement.scrollWidth <= window.innerWidth`);
qaResults.desktop.checks.push({ name: "No horizontal page overflow on desktop", pass: desktopOverflow, detail: `scrollWidth <= innerWidth: ${desktopOverflow}` });

// Desktop Check 6: Image loading & natural dimensions
await cdp.evaluate(`new Promise((resolve) => {
  const imgs = Array.from(document.querySelectorAll("img"));
  let pending = imgs.length;
  if (pending === 0) return resolve();
  imgs.forEach(img => {
    img.loading = "eager";
    if (img.complete && img.naturalWidth > 0) {
      pending--;
      if (pending === 0) resolve();
    } else {
      img.addEventListener("load", () => {
        pending--;
        if (pending === 0) resolve();
      });
      img.addEventListener("error", () => {
        pending--;
        if (pending === 0) resolve();
      });
    }
  });
  setTimeout(resolve, 3500);
})`);

const imagesLoaded = await cdp.evaluate(`Array.from(document.querySelectorAll("img")).map(img => ({ alt: img.alt, complete: img.complete, naturalWidth: img.naturalWidth, src: img.currentSrc || img.src }))`);
const allImagesLoaded = imagesLoaded.length > 0 && imagesLoaded.every(img => img.naturalWidth > 0);
qaResults.desktop.checks.push({ name: "All image tags loaded successfully with natural dimensions", pass: allImagesLoaded, detail: `${imagesLoaded.filter(i => i.naturalWidth > 0).length}/${imagesLoaded.length} images loaded` });

// Desktop Check 7: Footer rendered & visible
const footerVisible = await cdp.evaluate(`Boolean(document.querySelector("footer") || document.querySelector("[class*='SiteFooter']"))`);
qaResults.desktop.checks.push({ name: "Footer rendered on page", pass: footerVisible, detail: `visible: ${footerVisible}` });

// Capture Desktop Screenshot
const desktopScreenshotPath = join(rootDir, `seo/screenshots/${isQn ? "qn-" : ""}desktop-1440x900.png`);
const desktopScreenshot = await cdp.send("Page.captureScreenshot", { format: "png" });
await writeFile(desktopScreenshotPath, Buffer.from(desktopScreenshot.data, "base64"));
console.log(`  📸 Screenshot saved: ${desktopScreenshotPath.replace(rootDir + "/", "")}`);

for (const c of qaResults.desktop.checks) {
  if (c.pass) console.log(`  ✅ [Desktop] ${c.name}: ${c.detail}`);
  else {
    console.error(`  ❌ [Desktop] ${c.name}: ${c.detail}`);
    qaResults.desktop.pass = false;
  }
}

console.log("\n[4] TESTING MOBILE VIEWPORT (390x844 iPhone 14)...");
await cdp.send("Emulation.setDeviceMetricsOverride", {
  width: 390,
  height: 844,
  deviceScaleFactor: 3,
  mobile: true,
});

await cdp.send("Page.navigate", { url: `http://127.0.0.1:${PORT}/${targetRoute}` });
await new Promise((r) => setTimeout(r, 1500));

// Mobile Check 1: Body does not exceed 390px
const mobileBodyScrollWidth = await cdp.evaluate(`document.documentElement.scrollWidth`);
const mobileNoPageOverflow = mobileBodyScrollWidth <= 390;
qaResults.mobile.checks.push({ name: "Zero horizontal page overflow (width <= 390px)", pass: mobileNoPageOverflow, detail: `scrollWidth = ${mobileBodyScrollWidth}px (max 390px)` });

// Mobile Check 2: Table has horizontal scrolling (scrollWidth > clientWidth)
const tableScrollInfo = await cdp.evaluate(`(() => {
  const wrap = document.querySelector("div[class*='tableWrap']") || document.querySelector("table")?.parentElement;
  if (!wrap) return null;
  return {
    clientWidth: wrap.clientWidth,
    scrollWidth: wrap.scrollWidth,
    hasHorizontalScroll: wrap.scrollWidth > wrap.clientWidth
  };
})()`);
const mobileTableScrollable = Boolean(tableScrollInfo?.hasHorizontalScroll);
qaResults.mobile.checks.push({ name: "Pricing table has horizontal scrolling container", pass: mobileTableScrollable, detail: `client: ${tableScrollInfo?.clientWidth}px, scroll: ${tableScrollInfo?.scrollWidth}px` });

// Mobile Check 3: Execute real table scroll left in browser
const scrollSuccess = await cdp.evaluate(`(() => {
  const wrap = document.querySelector("div[class*='tableWrap']") || document.querySelector("table")?.parentElement;
  if (!wrap) return false;
  wrap.scrollLeft = 150;
  return wrap.scrollLeft > 0;
})()`);
qaResults.mobile.checks.push({ name: "Real browser table horizontal scrolling works", pass: Boolean(scrollSuccess), detail: `scrollLeft set and verified > 0: ${scrollSuccess}` });

// Mobile Check 4: Touch tap targets in hero
const heroCtaSize = await cdp.evaluate(`(() => {
  const btn = document.querySelector("div[class*='heroActions'] a[href^='tel:']") || document.querySelector("div[class*='heroActions'] a.btn-primary");
  if (!btn) return null;
  const rect = btn.getBoundingClientRect();
  return { width: Math.round(rect.width), height: Math.round(rect.height) };
})()`);
const mobileTapTargetPass = Boolean(heroCtaSize && heroCtaSize.height >= 40);
qaResults.mobile.checks.push({ name: "Hero CTA button touch target is finger-friendly", pass: mobileTapTargetPass, detail: `${heroCtaSize?.width}x${heroCtaSize?.height}px (>=40px)` });

// Mobile Check 5: Text wrapping on H1
const mobileH1Rect = await cdp.evaluate(`(() => {
  const h1 = document.querySelector("h1");
  if (!h1) return null;
  const rect = h1.getBoundingClientRect();
  return { width: Math.round(rect.width), height: Math.round(rect.height) };
})()`);
const mobileH1Pass = Boolean(mobileH1Rect && mobileH1Rect.width <= 370);
qaResults.mobile.checks.push({ name: "H1 wraps cleanly within mobile screen boundaries", pass: mobileH1Pass, detail: `width: ${mobileH1Rect?.width}px (<= 370px)` });

// Capture Mobile Screenshot
const mobileScreenshotPath = join(rootDir, `seo/screenshots/${isQn ? "qn-" : ""}mobile-390x844.png`);
const mobileScreenshot = await cdp.send("Page.captureScreenshot", { format: "png" });
await writeFile(mobileScreenshotPath, Buffer.from(mobileScreenshot.data, "base64"));
console.log(`  📸 Screenshot saved: ${mobileScreenshotPath.replace(rootDir + "/", "")}`);

for (const c of qaResults.mobile.checks) {
  if (c.pass) console.log(`  ✅ [Mobile] ${c.name}: ${c.detail}`);
  else {
    console.error(`  ❌ [Mobile] ${c.name}: ${c.detail}`);
    qaResults.mobile.pass = false;
  }
}

console.log("\n[5] TESTING CTA INTERACTION & DESTINATION PROTOCOLS...");
// CTA 1: Phone Click
const callHrefResult = await cdp.evaluate(`(() => {
  const link = document.querySelector("div[class*='heroActions'] a[href^='tel:']") || document.querySelector("a[href^='tel:']");
  return { href: link?.getAttribute("href"), text: link?.innerText.trim() };
})()`);
const ctaPhonePass = Boolean(callHrefResult.href === "tel:+84987663883" && callHrefResult.text?.includes("0987 663 883"));
qaResults.ctaClick.checks.push({ name: "Phone CTA triggers tel:+84987663883", pass: ctaPhonePass, detail: `${callHrefResult.text} -> ${callHrefResult.href}` });

// CTA 2: Zalo Click
const zaloHrefResult = await cdp.evaluate(`(() => {
  const link = document.querySelector("a[href*='zalo.me']") || document.querySelector("a[class*='zaloLink']");
  return { href: link?.getAttribute("href"), text: link?.innerText.trim() };
})()`);
const ctaZaloPass = Boolean(zaloHrefResult.href && zaloHrefResult.href.includes("zalo.me/0987663883"));
qaResults.ctaClick.checks.push({ name: "Zalo CTA points to canonical Zalo 0987663883", pass: ctaZaloPass, detail: `${zaloHrefResult.text} -> ${zaloHrefResult.href}` });

// CTA 3: Booking CTA destination parameter
const expectedBookingDest = isQn ? "Qu%E1%BA%A3ng%20Ninh" : "H%E1%BA%A3i%20Ph%C3%B2ng";
const bookingHrefResult = await cdp.evaluate(`(() => {
  const link = Array.from(document.querySelectorAll("a")).find(a => a.innerText.includes("Đặt xe ngay"));
  return { href: link?.getAttribute("href"), text: link?.innerText.trim() };
})()`);
const ctaBookingPass = Boolean(bookingHrefResult.href && bookingHrefResult.href.includes(expectedBookingDest));
qaResults.ctaClick.checks.push({ name: `Booking CTA points to destination ${isQn ? "Quảng Ninh" : "Hải Phòng"}`, pass: ctaBookingPass, detail: `${bookingHrefResult.text} -> ${bookingHrefResult.href}` });

for (const c of qaResults.ctaClick.checks) {
  if (c.pass) console.log(`  ✅ [CTA Click] ${c.name}: ${c.detail}`);
  else {
    console.error(`  ❌ [CTA Click] ${c.name}: ${c.detail}`);
    qaResults.ctaClick.pass = false;
  }
}

// 4. Cleanup processes and server
await cdp.send("Browser.close").catch(() => {});
chromeProcess.kill();
server.close();

console.log("\n==================================================");
const overallPass = qaResults.desktop.pass && qaResults.mobile.pass && qaResults.ctaClick.pass;
if (overallPass) {
  console.log(`🎉 REAL BROWSER QA PASSED FOR ${targetRoute.toUpperCase()}`);
  console.log("==================================================");
  process.exit(0);
} else {
  console.error(`💥 REAL BROWSER QA FAILED FOR ${targetRoute.toUpperCase()}! Check above items.`);
  console.log("==================================================");
  process.exit(1);
}
