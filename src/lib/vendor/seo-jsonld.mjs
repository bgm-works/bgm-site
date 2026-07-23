// seo-jsonld — props から Schema.org 準拠の JSON-LD を決定論で生成する部品（LLM・外部API非依存）。
// 設計アイデアの出所: garmeeh/next-seo (MIT) の set* 正規化 + toJson/safeJsonLdReplacer + 型別ビルダ。
//   逐語移植ではなく、React依存を捨てフレームワーク非依存に再実装（プレーンJSオブジェクト+スクリプトタグ文字列）。
// 廃止型ガードは seo-audit-lite/deprecated-schema.mjs を唯一のソースとして共有（二重管理回避）。一次情報=Google Search Central。
// 採否根拠=02_アイデア/OSS知見吸収基盤/決定ログ/ADR-010。決定論=同一入力→同一出力。
// seo-audit-lite(ASSET-046)=検査側 と対で、生成→検査のクローズドループを閉じる。
//
// next-seo からの正直な差分（帰属付き改良）:
//  1) エスケープを HTMLエンティティ(&amp; 等・データ改変あり)でなく Unicodeエスケープ(< 等)に。
//     </script> ブレイクアウトを防ぎつつ JSON.parse で元文字列へ無損失復元できる（HTML埋め込み安全JSONの標準技法）。
//  2) 廃止型ガードを中央の jsonLd() に置き、FAQPage/HowTo 等は既定で例外（内部利用は { allowDeprecated: true }）。

import { matchDeprecated } from "./deprecated-schema.mjs";

const SCHEMA = "https://schema.org/";

// --- コア: エスケープ / 直列化 / 型付与 / スクリプトタグ -------------------------------

/**
 * HTML内 <script> へ安全に埋め込むため、JSON文字列中の < > & と行区切り(U+2028/U+2029)を
 * Unicodeエスケープする。JSON構文には < > & が現れない（{}[]":,と文字列内容のみ）ため文字列値だけが
 * 影響を受け、< 等は JSON.parse で元の文字へ無損失復元される（</script> ブレイクアウトを構造的に防ぐ）。
 * @param {string} jsonString
 * @returns {string}
 */
export function escapeJsonLd(jsonString) {
  const unsafe = new RegExp("[<>&" + String.fromCharCode(0x2028, 0x2029) + "]", "g");
  return jsonString.replace(unsafe, (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"));
}

const dropNull = (_k, v) => (v === null ? undefined : v);

/**
 * JSON-LDオブジェクト（または配列）を安全なJSON文字列へ。null は除去（next-seo踏襲）。
 * @param {object|object[]} objOrArray
 * @returns {string}
 */
export function serialize(objOrArray) {
  return escapeJsonLd(JSON.stringify(objOrArray, dropNull));
}

/**
 * 任意の @type と props から JSON-LD オブジェクトを組む（全ビルダの中央チョークポイント）。
 * - @context と @type を付与。props.id は @id へ吊り上げる（next-seo踏襲）。
 * - 廃止型（seo-audit-lite の廃止テーブル照合）は既定で例外。内部利用は { allowDeprecated: true }。
 * @param {string} type
 * @param {object} [props]
 * @param {{allowDeprecated?:boolean}} [opts]
 * @returns {object}
 */
export function jsonLd(type, props = {}, opts = {}) {
  const hits = matchDeprecated(type);
  if (hits.length && !opts.allowDeprecated) {
    const h = hits[0];
    throw new Error(
      `[seo-jsonld] @type "${h.label}" は ${h.retired} に廃止（代替: ${h.replacement}）。` +
        `出所=${h.source}。内部利用で明示許可するなら { allowDeprecated: true } を渡す。`,
    );
  }
  const { id, ...rest } = props;
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...(id !== undefined ? { "@id": id } : {}),
    ...rest,
  };
}

/**
 * JSON-LDオブジェクト（または複数グラフの配列）を <script type="application/ld+json"> 文字列にする。
 * @param {object|object[]} objOrArray
 * @param {{id?:string}} [opts]
 * @returns {string}
 */
export function toScriptTag(objOrArray, opts = {}) {
  const attrs = `type="application/ld+json"` + (opts.id ? ` id="${opts.id}"` : "");
  return `<script ${attrs}>${serialize(objOrArray)}</script>`;
}

// --- set* 正規化（緩いprops → 正しい @type のネスト構造）----------------------------------

/** 住所 → PostalAddress（string はそのまま／配列は各要素を正規化）。next-seo setAddress 準拠。 */
export function setAddress(address) {
  if (!address) return undefined;
  const toPostal = (a) => (typeof a === "string" ? a : { "@type": "PostalAddress", ...a });
  if (Array.isArray(address)) return address.length === 1 ? toPostal(address[0]) : address.map(toPostal);
  return toPostal(address);
}

/** 座標 → GeoCoordinates。 */
export function setGeo(geo) {
  if (!geo) return undefined;
  const { latitude, longitude, ...rest } = geo;
  return { "@type": "GeoCoordinates", latitude, longitude, ...rest };
}

/** 画像 → string | string[] をそのまま返す（Google は URL/URL配列を推奨）。 */
export function setImage(image) {
  return image ?? undefined;
}

/** オファー → Offer（単体/配列）。price/priceCurrency 等はそのまま透過。next-seo setOffers 準拠。 */
export function setOffers(offers) {
  if (!offers) return undefined;
  const toOffer = (o) => (typeof o === "string" ? o : { "@type": "Offer", ...o });
  return Array.isArray(offers) ? offers.map(toOffer) : toOffer(offers);
}

/** ItemList要素 → position付き ListItem[]（position 省略時は 1..n を自動採番）。next-seo setItemListElements 準拠。 */
export function setItemListElements(items) {
  if (!items || !items.length) return undefined;
  return items.map((item, i) => ({
    "@type": "ListItem",
    position: item.position ?? i + 1,
    ...(item.name !== undefined ? { name: item.name } : {}),
    ...(item.item !== undefined ? { item: item.item } : {}),
    ...(item.url !== undefined && item.item === undefined ? { item: item.url } : {}),
  }));
}

/** 営業時間 → OpeningHoursSpecification[]（常に配列。openingHoursSpecification はリスト意味論のため）。 */
export function setOpeningHours(hours) {
  if (!hours) return undefined;
  const one = (h) => ({
    "@type": "OpeningHoursSpecification",
    ...(h.dayOfWeek !== undefined ? { dayOfWeek: h.dayOfWeek } : {}),
    ...(h.opens !== undefined ? { opens: h.opens } : {}),
    ...(h.closes !== undefined ? { closes: h.closes } : {}),
    ...(h.validFrom !== undefined ? { validFrom: h.validFrom } : {}),
    ...(h.validThrough !== undefined ? { validThrough: h.validThrough } : {}),
  });
  return (Array.isArray(hours) ? hours : [hours]).map(one);
}

/** 場所 → Place（string は name だけの Place／address・geo は set* で正規化）。 */
export function setPlace(location) {
  if (!location) return undefined;
  if (typeof location === "string") return { "@type": "Place", name: location };
  const { address, geo, ...rest } = location;
  return {
    "@type": "Place",
    ...rest,
    ...(address ? { address: setAddress(address) } : {}),
    ...(geo ? { geo: setGeo(geo) } : {}),
  };
}

// schema.org の enum 値へ https://schema.org/ を前置（既にURLならそのまま）。
function prefixEnum(v) {
  return v && !/^https?:\/\//.test(v) ? SCHEMA + v : v;
}

// --- 型別ビルダ（現行型のみ。廃止型は jsonLd ガードで弾かれる）-------------------------

/** Organization（logo/address/sameAs/contactPoint を正規化）。 */
export function organization(props, opts) {
  const { address, sameAs, contactPoint, ...rest } = props;
  return jsonLd(
    "Organization",
    {
      ...rest,
      ...(address ? { address: setAddress(address) } : {}),
      ...(sameAs ? { sameAs } : {}),
      ...(contactPoint ? { contactPoint } : {}),
    },
    opts,
  );
}

/** WebSite（searchUrlTemplate を渡すと Sitelinks Searchbox の SearchAction を付与）。 */
export function website(props, opts) {
  const { searchUrlTemplate, queryInput = "search_term_string", ...rest } = props;
  const body = { ...rest };
  if (searchUrlTemplate) {
    body.potentialAction = {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: searchUrlTemplate },
      "query-input": `required name=${queryInput}`,
    };
  }
  return jsonLd("WebSite", body, opts);
}

/** BreadcrumbList（[{name, item(url)}] → position付き ListItem。最終要素は item 省略可）。 */
export function breadcrumb(itemListElements, opts) {
  const elements = (itemListElements || []).map((el, i) => ({
    "@type": "ListItem",
    position: el.position ?? i + 1,
    name: el.name,
    ...(el.item !== undefined ? { item: el.item } : {}),
  }));
  return jsonLd("BreadcrumbList", { itemListElement: elements }, opts);
}

/** Event（location→Place・offers→Offer・eventStatus/eventAttendanceMode→enum URI 前置・organizer→Organization）。 */
export function event(props, opts) {
  const { location, images, image, offers, performer, organizer, eventStatus, eventAttendanceMode, ...rest } = props;
  const body = {
    ...rest,
    ...(location ? { location: setPlace(location) } : {}),
    ...(images ? { image: images } : image ? { image } : {}),
    ...(offers ? { offers: setOffers(offers) } : {}),
    ...(performer ? { performer } : {}),
    ...(organizer ? { organizer: { "@type": "Organization", ...organizer } } : {}),
    ...(eventStatus ? { eventStatus: prefixEnum(eventStatus) } : {}),
    ...(eventAttendanceMode ? { eventAttendanceMode: prefixEnum(eventAttendanceMode) } : {}),
  };
  return jsonLd("Event", body, opts);
}

/** LocalBusiness（type で subtype 指定可＝Restaurant等・address/geo/openingHours を正規化）。 */
export function localBusiness(props, opts) {
  const { type = "LocalBusiness", address, geo, openingHours, images, image, ...rest } = props;
  const body = {
    ...rest,
    ...(address ? { address: setAddress(address) } : {}),
    ...(geo ? { geo: setGeo(geo) } : {}),
    ...(openingHours ? { openingHoursSpecification: setOpeningHours(openingHours) } : {}),
    ...(images ? { image: images } : image ? { image } : {}),
  };
  return jsonLd(type, body, opts);
}

/** Article / NewsArticle（type で切替・author→Person・publisher→Organization）。 */
export function article(props, opts) {
  const { type = "Article", images, image, author, publisher, ...rest } = props;
  const toPerson = (a) => (typeof a === "string" ? { "@type": "Person", name: a } : { "@type": "Person", ...a });
  const body = {
    ...rest,
    ...(images ? { image: images } : image ? { image } : {}),
    ...(author ? { author: Array.isArray(author) ? author.map(toPerson) : toPerson(author) } : {}),
    ...(publisher ? { publisher: { "@type": "Organization", ...publisher } } : {}),
  };
  return jsonLd(type, body, opts);
}

/**
 * FAQPage（[{question, answer}] → mainEntity Question/Answer）。
 * 注意: FAQPage のリッチリザルトは 2026-05-07 に終了（seo-audit-lite 廃止テーブル）。
 * 既定で jsonLd ガードが例外を投げる。SERP目的でない内部Q&A表示にのみ { allowDeprecated: true } で許可。
 */
export function faqPage(mainEntity, opts) {
  const body = {
    mainEntity: (mainEntity || []).map((q) => ({
      "@type": "Question",
      name: q.question ?? q.name,
      acceptedAnswer: { "@type": "Answer", text: q.answer ?? q.acceptedAnswer },
    })),
  };
  return jsonLd("FAQPage", body, opts);
}
