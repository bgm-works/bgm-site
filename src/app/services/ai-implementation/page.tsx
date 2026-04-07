import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, TrendingUp, Shield, Users, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "AI導入支援 — 地方中小企業・店舗向け",
  description:
    "「AIなんてうちには関係ない」——そう思っていた経営者ほど、導入後に驚かれます。月30時間の事務作業を、いつまに消します。",
};

const problems = [
  "請求書・領収書の手入力に毎月10時間以上かかっている",
  "手作りのチラシが素人感満載で集客に繋がらない",
  "Excelの転記作業でミスが続いている",
  "人手不足で本業に集中できない",
  "「IT化したい」が何から始めればいいかわからない",
  "以前システムを入れたが誰も使わなくなった",
];

const solutions = [
  {
    icon: Clock,
    title: "書類作業の自動化",
    desc: "領収書・請求書・在庫データをスキャンするだけで自動集計。手入力ゼロへ。",
  },
  {
    icon: TrendingUp,
    title: "集客コンテンツの自動生成",
    desc: "AIが高品質なチラシ・SNS投稿・メルマガ文章を数分で生成。デザイナー不要。",
  },
  {
    icon: Wrench,
    title: "業務フローの自動化",
    desc: "Google Workspace / LINE / メール連携で「あの作業もう要らない」を次々と実現。",
  },
  {
    icon: Shield,
    title: "月額保守でずっと安心",
    desc: "「壊れたらどうしよう」を解消。AIの進化に合わせてアップデートし続けます。",
  },
];

const cases = [
  {
    business: "飲食店（ラーメン店）",
    before: "手書き発注→Excelへの転記を毎日30分",
    after: "LINEで写真を送るだけで自動集計。月15時間削減。",
  },
  {
    business: "小売店",
    before: "手作りのチラシ作成に毎月3時間",
    after: "AIが5分でプロ品質のチラシを生成。",
  },
  {
    business: "士業（行政書士）",
    before: "依頼受付メール→台帳入力に毎回15分",
    after: "メール到着→自動で台帳に登録。返信文も自動下書き。",
  },
];

const pricing = [
  {
    name: "スタート",
    price: "無料",
    desc: "まずここから",
    features: ["30分オンラインヒアリング", "業務の棚卸しシート提供", "自動化できる箇所の特定", "概算費用のご提示"],
    cta: "無料ヒアリングを予約",
    href: "/contact",
    highlight: false,
  },
  {
    name: "導入",
    price: "10万〜30万円",
    desc: "一括（業務規模による）",
    features: ["業務フロー詳細ヒアリング", "自動化システムの構築", "操作マニュアル作成", "導入後2週間のフォロー"],
    cta: "相談してみる",
    href: "/contact",
    highlight: true,
  },
  {
    name: "保守",
    price: "月額1万〜3万円",
    desc: "導入後の安心パック",
    features: ["月1回の稼働チェック", "軽微な仕様変更対応", "AIアップデートへの追従", "優先サポート"],
    cta: "詳しく聞く",
    href: "/contact",
    highlight: false,
  },
];

export default function AiImplementationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-[#e8f0eb]">
        <div className="container-narrow">
          <span className="text-xs font-medium text-[#3d6b4f] tracking-widest uppercase">
            Service 01
          </span>
          <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-[#1a1a18] mt-3 mb-5 leading-tight">
            AI導入支援
          </h1>
          <p className="text-lg text-[#4a4a48] leading-relaxed max-w-lg">
            「AIなんてうちには関係ない」——そう思っていた経営者ほど、導入後に驚かれます。月30時間の事務作業を、<strong>いつまに</strong>消します。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-[#3d6b4f] text-white font-medium rounded-full hover:bg-[#2d5a3f] transition-colors"
          >
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">こんなお困りごと、ありませんか？</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {problems.map((p) => (
              <div key={p} className="flex items-start gap-3 bg-white border border-[#e2e2de] rounded-xl p-5">
                <span className="text-[#c0392b] mt-0.5 flex-shrink-0">✕</span>
                <p className="text-sm text-[#4a4a48] leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6b6b68] mt-8 text-sm">
            1つでも当てはまったら、<strong className="text-[#3d6b4f]">いつまに</strong>にご相談ください。
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-[#f4f4f0]">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">解決できること</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-2xl border border-[#e2e2de] p-8">
                  <div className="w-11 h-11 bg-[#e8f0eb] rounded-xl flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#3d6b4f]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a18] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#6b6b68] leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">こんな変化が起きています</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.business} className="rounded-2xl border border-[#e2e2de] bg-white overflow-hidden">
                <div className="bg-[#1a1a18] px-6 py-4">
                  <span className="text-sm font-medium text-[#9b9b98]">{c.business}</span>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs text-[#9b9b98] font-medium mb-1">導入前</p>
                    <p className="text-sm text-[#4a4a48] leading-relaxed">{c.before}</p>
                  </div>
                  <div className="border-t border-[#e2e2de] pt-4">
                    <p className="text-xs text-[#3d6b4f] font-medium mb-1">いつまに</p>
                    <p className="text-sm text-[#1a1a18] leading-relaxed font-medium">{c.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#f4f4f0]">
        <div className="container-wide">
          <h2 className="section-title text-center mb-4">料金</h2>
          <p className="section-subtitle text-center mb-12">まずは無料ヒアリングから。費用は一切かかりません。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  p.highlight
                    ? "bg-[#3d6b4f] text-white border-2 border-[#3d6b4f]"
                    : "bg-white border border-[#e2e2de]"
                }`}
              >
                <p className={`text-xs font-medium tracking-widest uppercase mb-2 ${p.highlight ? "text-[#a8d4b8]" : "text-[#6b6b68]"}`}>
                  {p.name}
                </p>
                <p className={`text-2xl font-bold mb-1 ${p.highlight ? "text-white" : "text-[#1a1a18]"}`}>
                  {p.price}
                </p>
                <p className={`text-xs mb-6 ${p.highlight ? "text-[#a8d4b8]" : "text-[#9b9b98]"}`}>
                  {p.desc}
                </p>
                <ul className="space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${p.highlight ? "text-[#a8d4b8]" : "text-[#3d6b4f]"}`} />
                      <span className={`text-sm ${p.highlight ? "text-white/90" : "text-[#4a4a48]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className={`mt-8 text-center py-3 px-6 rounded-full font-medium text-sm transition-colors ${
                    p.highlight
                      ? "bg-white text-[#3d6b4f] hover:bg-[#f4f4f0]"
                      : "border border-[#3d6b4f] text-[#3d6b4f] hover:bg-[#e8f0eb]"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">まず、30分話しませんか？</h2>
          <p className="text-[#6b6b68] mb-8">
            「うちで本当に使えるの？」——その疑問、ヒアリングで一緒に確かめましょう。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3d6b4f] text-white font-medium rounded-full hover:bg-[#2d5a3f] transition-colors"
          >
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
