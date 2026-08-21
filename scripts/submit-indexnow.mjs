const siteUrl = (process.env.SITE_URL || "https://xeghepphongcach.com").replace(/\/$/, "");
const host = new URL(siteUrl).hostname;
const key = "8bf433997324b52e41264c57cbd4a3a0";
const keyLocation = `${siteUrl}/${key}.txt`;

const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Không đọc được sitemap: HTTP ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (!urlList.length) throw new Error("Sitemap không có URL để gửi IndexNow.");

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});

if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow từ chối: HTTP ${response.status} ${await response.text()}`);
}

console.log(`IndexNow đã nhận ${urlList.length} URL (HTTP ${response.status}).`);
