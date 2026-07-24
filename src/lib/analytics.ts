// GA4 計測。測定ID G-PFX68Z3PJQ は bgm-works.com プロパティ。
// サブドメイン hp-shindan.bgm-works.com も同一プロパティで一体計測される。
export const GA_MEASUREMENT_ID = "G-PFX68Z3PJQ";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** GA4 カスタムイベント送信。gtag 未ロード時（SSR・スクリプト未到達）は no-op。 */
export function trackEvent(name: string, params?: GtagParams): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params ?? {});
  }
}
