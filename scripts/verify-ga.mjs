// GA4イベント発火検証（bgm-works.com）。GA実送信は横取り、formspree送信も横取りして誤リード作成を防ぐ。
// 検証: page_view が collect で発火 ＋ 問い合わせ送信で generate_lead が dataLayer に積まれる。
import { chromium } from "playwright";

const BASE = "http://localhost:3346";
const collectHits = [];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();

await page.route("**/g/collect*", async (route) => {
  const u = new URL(route.request().url());
  collectHits.push(u.searchParams.get("en") || "(pv)");
  await route.fulfill({ status: 204, body: "" });
});
// formspree への実送信を握りつぶす（誤リード防止）
await page.route("https://formspree.io/**", (r) => r.fulfill({ status: 200, body: "{}" }));

await page.goto(`${BASE}/contact`, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);

// 必須項目を入力
await page.fill("#name", "検証 太郎");
await page.fill("#email", "verify@example.com");
await page.fill("#message", "GA計測の動作確認用テスト送信です。");

// フォーム送信のnavだけ止め、onSubmit（trackEvent）は発火させる
await page.evaluate(() => {
  window.addEventListener("submit", (e) => e.preventDefault(), true);
});
await page.getByRole("button", { name: /送信する/ }).click();
await page.waitForTimeout(1500);

const dl = await page.evaluate(() =>
  (window.dataLayer || [])
    .map((x) => {
      try {
        return Array.from(x);
      } catch {
        return [];
      }
    })
    .filter((a) => a[0] === "event")
    .map((a) => a[1])
);

await ctx.close();
await browser.close();

console.log("dataLayer events:", JSON.stringify(dl));
console.log("network /g/collect en:", JSON.stringify(collectHits));

const errors = [];
if (collectHits.length === 0) errors.push("GA送信(/g/collect)が一度も発生していない");
if (!dl.includes("generate_lead")) errors.push("dataLayerに generate_lead が無い");
if (errors.length) {
  console.log("NG:\n" + errors.join("\n"));
  process.exit(1);
}
console.log("GA VERIFY OK (GA送信ライブ ＋ generate_lead 発火)");
