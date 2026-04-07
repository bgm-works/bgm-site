import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "料金",
  description:
    "いつまに の料金プラン。AI導入支援・アトリエboost・Webアプリ開発の3サービス。まずは無料ヒアリングから。",
};

const plans = [
  {
    service: "AI導入支援",
    tagColor: "#3d6b4f",
    bgColor: "#e8f0eb",
    tiers: [
      {
        name: "無料ヒアリング",
        price: "¥0",
        desc: "まずここから",
        features: [
          "30分オンラインヒアリング",
          "業務棚卸しシート提供",
          "自動化可能箇所の特定",
          "概算費用の提示",
        ],
        cta: "予約する",
        href: "/contact",
        highlight: false,
      },
      {
        name: "導入",
        price: "10万〜30万円",
        desc: "一括（規模による）",
        features: [
          "詳細ヒアリング・フロー設計",
          "自動化システムの構築",
          "操作マニュアル作成",
          "導入後2週間フォロー",
        ],
        cta: "相談してみる",
        href: "/contact",
        highlight: true,
      },
      {
        name: "月額保守",
        price: "1万〜3万円/月",
        desc: "継続安心パック",
        features: [
          "月1回稼働チェック",
          "軽微な仕様変更対応",
          "AIアップデートへの追従",
          "優先サポート",
        ],
        cta: "詳しく聞く",
        href: "/contact",
        highlight: false,
      },
    ],
  },
  {
    service: "アトリエboost",
    tagColor: "#6b4f3d",
    bgColor: "#f0ebe8",
    tiers: [
      {
        name: "無料ヒアリング",
        price: "¥0",
        desc: "まずここから",
        features: [
          "30分オンラインヒアリング",
          "業務時間の棚卸し",
          "AI従業員設計の提案",
          "概算費用の提示",
        ],
        cta: "予約する",
        href: "/contact",
        highlight: false,
      },
      {
        name: "初期構築",
        price: "20万〜50万円",
        desc: "一括（規模による）",
        features: [
          "AI従業員の設計・構築",
          "受注・在庫・SNS自動化",
          "操作マニュアル作成",
          "2週間の習熟サポート",
        ],
        cta: "相談してみる",
        href: "/contact",
        highlight: true,
      },
      {
        name: "月額保守",
        price: "2万〜5万円/月",
        desc: "継続安心パック",
        features: [
          "稼働監視・エラー対応",
          "仕様変更・追加自動化",
          "AI進化への追従",
          "優先サポート",
        ],
        cta: "詳しく聞く",
        href: "/contact",
        highlight: false,
      },
    ],
  },
  {
    service: "Webアプリ開発",
    tagColor: "#3d4f6b",
    bgColor: "#e8eaf0",
    tiers: [
      {
        name: "小規模",
        price: "5万〜20万円",
        desc: "LP・自動化ツール",
        features: [
          "シンプルな機能実装",
          "1〜2週間で納品",
          "Vercelデプロイ対応",
          "軽微な修正1回含む",
        ],
        cta: "相談してみる",
        href: "/contact",
        highlight: false,
      },
      {
        name: "中規模",
        price: "20万〜80万円",
        desc: "Webアプリ・業務ツール",
        features: [
          "認証・DB・API連携あり",
          "2〜6週間で納品",
          "テスト・マニュアル込み",
          "CI/CD設定込み",
        ],
        cta: "詳しく聞く",
        href: "/contact",
        highlight: true,
      },
      {
        name: "月額保守",
        price: "2万〜10万円/月",
        desc: "運用・追加開発",
        features: [
          "バグ対応・パッチ適用",
          "機能追加開発",
          "AI/ライブラリ追従",
          "優先サポート",
        ],
        cta: "相談してみる",
        href: "/contact",
        highlight: false,
      },
    ],
  },
];

const faq = [
  {
    q: "見積もりは無料ですか？",
    a: "はい、無料です。ヒアリング（30分）→ 提案・見積もり（3営業日以内）まで、費用は一切かかりません。",
  },
  {
    q: "支払い方法は？",
    a: "銀行振込に対応しています。大規模案件は着手金50% + 完了時50%の分割払いも可能です。",
  },
  {
    q: "インボイス対応していますか？",
    a: "現在（2026年4月時点）は適格請求書発行事業者の登録をしていません。売上増加に応じて登録予定です。個人・フリーランスのお客様との取引は問題ありません。",
  },
  {
    q: "オンラインのみですか？",
    a: "基本はオンライン（Zoom / Google Meet）対応です。関西圏（京都・大阪・神戸）であれば訪問も対応可能です。",
  },
  {
    q: "途中でキャンセルできますか？",
    a: "着手前であれば全額返金します。着手後は進捗に応じた費用をいただきます。詳細はヒアリング時にご確認ください。",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-[#f4f4f0]">
        <div className="container-narrow text-center">
          <h1 className="section-title mb-4">料金</h1>
          <p className="text-[#6b6b68] leading-relaxed">
            まずは無料ヒアリングから。費用は一切かかりません。<br />
            規模・要件に応じて最適なプランをご提案します。
          </p>
        </div>
      </section>

      {/* Plans */}
      {plans.map((plan) => (
        <section key={plan.service} className="py-16 border-b border-[#e2e2de]">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-10">
              <span
                className="text-sm font-bold text-white px-4 py-2 rounded-full"
                style={{ backgroundColor: plan.tagColor }}
              >
                {plan.service}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plan.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-8 flex flex-col ${
                    tier.highlight
                      ? "border-2 text-white"
                      : "bg-white border border-[#e2e2de]"
                  }`}
                  style={
                    tier.highlight
                      ? { backgroundColor: plan.tagColor, borderColor: plan.tagColor }
                      : {}
                  }
                >
                  <p
                    className={`text-xs font-medium tracking-widest uppercase mb-2 ${
                      tier.highlight ? "text-white/60" : "text-[#6b6b68]"
                    }`}
                  >
                    {tier.name}
                  </p>
                  <p
                    className={`text-xl font-bold mb-1 ${
                      tier.highlight ? "text-white" : "text-[#1a1a18]"
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`text-xs mb-6 ${
                      tier.highlight ? "text-white/60" : "text-[#9b9b98]"
                    }`}
                  >
                    {tier.desc}
                  </p>
                  <ul className="space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle
                          size={13}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: tier.highlight ? "rgba(255,255,255,0.7)" : plan.tagColor }}
                        />
                        <span
                          className={`text-sm ${
                            tier.highlight ? "text-white/90" : "text-[#4a4a48]"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className={`mt-7 text-center py-3 px-6 rounded-full font-medium text-sm transition-colors ${
                      tier.highlight
                        ? "bg-white hover:bg-[#f4f4f0]"
                        : "border hover:opacity-80"
                    }`}
                    style={
                      tier.highlight
                        ? { color: plan.tagColor }
                        : { borderColor: plan.tagColor, color: plan.tagColor }
                    }
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-20">
        <div className="container-narrow">
          <h2 className="section-title text-center mb-12">よくある質問</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="bg-white border border-[#e2e2de] rounded-2xl overflow-hidden group"
              >
                <summary className="px-7 py-5 cursor-pointer font-medium text-[#1a1a18] flex items-center justify-between list-none">
                  {item.q}
                  <span className="text-[#6b6b68] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-7 pb-5">
                  <p className="text-sm text-[#6b6b68] leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f4f4f0]">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">まずは話してみましょう。</h2>
          <p className="text-[#6b6b68] mb-8">
            「予算が不安」「何から始めれば」——その疑問にも、ヒアリングでお答えします。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3d6b4f] text-white font-medium rounded-full hover:bg-[#2d5a3f] transition-colors"
          >
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Link>
          <p className="mt-3 text-xs text-[#9b9b98]">返信は24時間以内。費用は一切かかりません。</p>
        </div>
      </section>
    </>
  );
}
