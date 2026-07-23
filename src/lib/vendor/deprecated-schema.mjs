// deprecated-schema — Google が rich result を廃止した Schema.org 型の照合テーブル。
// 出所（一次情報）: Google Search Central の retirement 告知。設計アイデア（決定論リンタに束ねる）の出所=claude-seo(MIT)。
// 事実は下記URLから。最終確認日を必ず併記し、半年ごとに再確認する（陳腐化する事実のため）。
// 最終確認: 2026-07-23（claude-seo skills/seo-schema/references/deprecated-types-2024-2026.md 記載の一次情報URL群を転記）

// @type（小文字化して照合）→ 廃止情報
export const DEPRECATED_TYPES = {
  howto: {
    label: "HowTo",
    retired: "2023-09",
    replacement: "なし（SERPリッチリザルトは終了。手順は<h2>見出しで構造化）",
    severity: "medium",
    source: "https://developers.google.com/search/blog/2023/08/howto-faq-changes",
  },
  faqpage: {
    label: "FAQPage",
    retired: "2026-05-07",
    replacement: "なし（リッチリザルト全サイト終了。既存は残してよいが新規のSERP目的は不可。真のQ&AはQAPage）",
    severity: "low", // 既存FAQPageは Info 相当（本家も Critical にしない）
    source: "https://developers.google.com/search/docs/appearance/structured-data/faqpage",
  },
  vehiclelisting: {
    label: "VehicleListing",
    retired: "2025-06",
    replacement: "オンライン販売なら Product",
    severity: "medium",
    source: "https://developers.google.com/search/blog/2025/06/simplifying-search-results",
  },
  claimreview: {
    label: "ClaimReview",
    retired: "2025-06",
    replacement: "なし（fact-checkリッチリザルト終了。ニュース文脈なら Article）",
    severity: "medium",
    source: "https://developers.google.com/search/blog/2025/06/simplifying-search-results",
  },
  estimatedsalary: {
    label: "EstimatedSalary",
    retired: "2025-06",
    replacement: "個別求人は JobPosting + baseSalary",
    severity: "medium",
    source: "https://developers.google.com/search/blog/2025/06/simplifying-search-results",
  },
  learningvideo: {
    label: "LearningVideo",
    retired: "2025-06",
    replacement: "VideoObject（現行）",
    severity: "medium",
    source: "https://developers.google.com/search/blog/2025/06/simplifying-search-results",
  },
  specialannouncement: {
    label: "SpecialAnnouncement",
    retired: "2025-07",
    replacement: "時限なら Event、恒常なら Article/WebPage",
    severity: "medium",
    source: "https://developers.google.com/search/blog",
  },
  practiceproblem: {
    label: "PracticeProblem",
    retired: "2026-01",
    replacement: "なし（2025-11-05 廃止告知・2026-01 リッチリザルト/レポート終了）",
    severity: "medium",
    source: "https://developers.google.com/search/blog/2025/06/simplifying-search-results",
  },
};

// 廃止でないが誤解されやすい型（誤って除去助言しないための注記）
export const NOT_DEPRECATED_NOTE = {
  dataset: "Dataset は廃止ではない（Dataset Search が現行で消費。Google検索リッチリザルトの対象外なだけ・2025-11-05 明確化）。除去助言しない。",
  course: "Course は単一リッチカードは現行。カルーセル変種のみ2025-06に終了。",
};

// @type 値（文字列 or 配列）を廃止テーブルへ照合。ヒットした廃止情報の配列を返す。
export function matchDeprecated(typeValue) {
  const types = Array.isArray(typeValue) ? typeValue : [typeValue];
  const hits = [];
  for (const t of types) {
    if (typeof t !== "string") continue;
    const key = t.trim().toLowerCase();
    if (DEPRECATED_TYPES[key]) hits.push(DEPRECATED_TYPES[key]);
  }
  return hits;
}
