// hp-shindan 導線の実ブラウザ検証（トップのサービス01・web-production CTA・フッター）
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:3346";
const OUT = process.argv[2] || "shots";
mkdirSync(OUT, { recursive: true });
const EXPECT = "https://hp-shindan.bgm-works.com/shindan";

const browser = await chromium.launch();
const errors = [];
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
page.on("console", (m) => {
  if (m.type() === "error") errors.push(`[console] ${m.text().slice(0, 200)}`);
});

// 1) トップページ: サービス01の無料診断リンク
await page.goto(`${BASE}/`, { waitUntil: "networkidle", timeout: 60000 });
const homeLinks = await page.$$eval(`a[href="${EXPECT}"]`, (els) => els.map((e) => e.textContent.trim()));
if (homeLinks.length < 1) errors.push("[home] 無料診断リンクが見つからない");
const overflowHome = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
if (overflowHome > 1) errors.push(`[home] 横はみ出し +${overflowHome}px`);
await page.screenshot({ path: `${OUT}/home-full.png`, fullPage: true });

// 2) web-production CTA
await page.goto(`${BASE}/services/web-production`, { waitUntil: "networkidle", timeout: 60000 });
const wpLinks = await page.$$eval(`a[href="${EXPECT}"]`, (els) => els.length);
if (wpLinks < 1) errors.push("[web-production] 無料診断CTAが見つからない");
await page.screenshot({ path: `${OUT}/web-production-full.png`, fullPage: true });

// 3) フッター（どのページにも出る）
const footerLink = await page.$$eval(`footer a[href="${EXPECT}"]`, (els) => els.length);
if (footerLink < 1) errors.push("[footer] 無料診断リンクが見つからない");

await ctx.close();
await browser.close();
if (errors.length) {
  console.log("NG:\n" + errors.join("\n"));
  process.exit(1);
}
console.log(`OK: home service-01 link, web-production CTA, footer link all present -> ${EXPECT}`);
