import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Award, Layers, Globe, Smartphone, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Webアプリ開発・AI自動化受託",
  description:
    "17年のSE経験 × AI爆速開発。要件定義から本番運用まで一気通貫。納期は他社の1/3。React/Next.js/AWS/生成AI統合に対応。",
};

const skills = [
  { category: "フロントエンド", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "PWA対応"] },
  { category: "バックエンド", items: ["Node.js / Python", "REST API / GraphQL", "PostgreSQL / MySQL", "AWS (SAA/DVA/SOA)"] },
  { category: "AI統合", items: ["OpenAI / Claude API", "生成AI業務自動化", "n8n / GAS / Zapier", "Cursor AI爆速開発"] },
  { category: "その他", items: ["Vercel / Supabase", "GitHub Actions CI/CD", "Google Workspace連携", "LINE Bot開発"] },
];

const works = [
  {
    name: "katatte",
    tag: "PWA / AI統合",
    desc: "写真×音声→AI記事生成。音声チャンク分割アップロード、動的録音制限、ビー玉ゲームUI実装。",
    url: "https://katatte.vercel.app",
    tech: ["Next.js", "OpenAI API", "PWA"],
  },
  {
    name: "PP Route Optimizer",
    tag: "最適化アルゴリズム",
    desc: "ANA SFC修行の最高効率ルート自動計算。2026年5月新運賃体系に対応。月間数千件のアクセス。",
    url: "#",
    tech: ["React", "TypeScript", "Vercel"],
  },
  {
    name: "O365→GCal自動同期",
    tag: "業務自動化",
    desc: "会社のOutlook予定をGoogleカレンダーへ毎朝自動同期。ICS + Google Calendar API連携。",
    url: "#",
    tech: ["Node.js", "Google API", "GAS"],
  },
  {
    name: "AIコンシェルジュ",
    tag: "AI自動化設計",
    desc: "毎朝の8ステップをAIが全自動実行。カレンダー取得・SNS下書き生成・思考ログ作成まで。",
    url: "#",
    tech: ["Claude API", "GAS", "GitHub"],
  },
  {
    name: "Master Flow Viewer",
    tag: "Next.js / PWA",
    desc: "マスタープランの処理フローをリアルタイム可視化。Edge Basic認証+PWA+Vercel自動デプロイ。",
    url: "#",
    tech: ["Next.js", "Vercel", "PWA"],
  },
];

const reasons = [
  {
    icon: Zap,
    title: "納期は他社の1/3",
    desc: "Cursor + AI爆速開発により、通常1週間かかる実装を1〜2日で完成。スピードは品質を落としません。",
  },
  {
    icon: Layers,
    title: "要件定義から運用まで一気通貫",
    desc: "「作って渡して終わり」はしません。17年のSE経験で本当の課題を掘り起こし、使われる仕組みを作ります。",
  },
  {
    icon: Award,
    title: "AWS 3冠の設計力",
    desc: "SAA/DVA/SOA取得。スケーラブルで安全なインフラ設計。個人開発から法人システムまで対応できます。",
  },
];

const flowItems = [
  { step: "01", title: "ヒアリング", desc: "要件・予算・納期を整理。何を作るかを一緒に決めます。" },
  { step: "02", title: "提案・見積もり", desc: "技術選定・工数・費用を3営業日以内に提示。" },
  { step: "03", title: "設計・開発", desc: "AIを活用した爆速開発。週次でデモを共有します。" },
  { step: "04", title: "納品・運用", desc: "本番デプロイ後も保守対応。長期パートナーとして。" },
];

export default function DevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-[#e8eaf0]">
        <div className="container-narrow">
          <span className="text-xs font-medium text-[#3d4f6b] tracking-widest uppercase">
            Service 03
          </span>
          <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-[#1a1a18] mt-3 mb-5 leading-tight">
            Webアプリ開発<br />AI自動化受託
          </h1>
          <p className="text-lg text-[#4a4a48] leading-relaxed max-w-xl">
            17年のSE経験 × AI爆速開発。要件定義から本番運用まで一気通貫。<strong>納期は他社の1/3</strong>、品質は妥協なし。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-[#3d4f6b] text-white font-medium rounded-full hover:bg-[#2d3f5b] transition-colors"
          >
            相談してみる <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">選ばれる3つの理由</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="bg-white rounded-2xl border border-[#e2e2de] p-8">
                  <div className="w-12 h-12 bg-[#e8eaf0] rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#3d4f6b]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a18] mb-3">{r.title}</h3>
                  <p className="text-sm text-[#6b6b68] leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-[#f4f4f0]">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">対応技術</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s) => (
              <div key={s.category} className="bg-white rounded-2xl border border-[#e2e2de] p-6">
                <h3 className="text-sm font-bold text-[#3d4f6b] mb-4 uppercase tracking-wide">{s.category}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-[#4a4a48] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3d4f6b] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="py-20">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">実績</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((w) => (
              <div key={w.name} className="bg-white rounded-2xl border border-[#e2e2de] p-7">
                <span className="text-xs font-medium text-[#3d4f6b] bg-[#e8eaf0] px-3 py-1 rounded-full">
                  {w.tag}
                </span>
                <h3 className="text-lg font-bold text-[#1a1a18] mt-4 mb-2">{w.name}</h3>
                <p className="text-sm text-[#6b6b68] leading-relaxed mb-4">{w.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {w.tech.map((t) => (
                    <span key={t} className="text-xs text-[#6b6b68] border border-[#e2e2de] px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/works" className="inline-flex items-center gap-2 text-[#3d4f6b] font-medium hover:underline">
              全ての実績を見る <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Accepts */}
      <section className="py-20 bg-[#f4f4f0]">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">こんな案件を受け付けています</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Globe, label: "Webアプリ開発", examples: "業務ツール / ダッシュボード / 予約システム" },
              { icon: Bot, label: "AI自動化", examples: "LLM統合 / n8n / GAS / 議事録自動化" },
              { icon: Smartphone, label: "モバイルアプリ", examples: "React Native (Expo) / PWA対応" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-2xl border border-[#e2e2de] p-7 text-center">
                  <div className="w-12 h-12 bg-[#e8eaf0] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-[#3d4f6b]" />
                  </div>
                  <h3 className="font-bold text-[#1a1a18] mb-2">{item.label}</h3>
                  <p className="text-xs text-[#9b9b98]">{item.examples}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">進め方</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flowItems.map((f) => (
              <div key={f.step} className="bg-white rounded-2xl p-7 border border-[#e2e2de]">
                <p className="text-4xl font-bold text-[#e2e2de] mb-4">{f.step}</p>
                <h3 className="text-base font-bold text-[#1a1a18] mb-2">{f.title}</h3>
                <p className="text-sm text-[#6b6b68] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#f4f4f0]">
        <div className="container-narrow">
          <h2 className="section-title text-center mb-4">料金の目安</h2>
          <p className="section-subtitle text-center mb-10">要件によって大きく変わるため、まずはご相談ください。</p>
          <div className="bg-white rounded-2xl border border-[#e2e2de] divide-y divide-[#e2e2de]">
            {[
              { label: "小規模（LP・自動化ツール）", price: "5万〜20万円", desc: "シンプルな機能 / 1〜2週間" },
              { label: "中規模（Webアプリ）", price: "20万〜80万円", desc: "認証・DB・API連携あり / 2〜6週間" },
              { label: "大規模（業務システム）", price: "80万円〜", desc: "複雑な要件・チーム開発 / 2ヶ月〜" },
              { label: "月額保守", price: "2万〜10万円/月", desc: "バグ対応・機能追加・AI追従" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between px-8 py-5">
                <div>
                  <p className="font-bold text-[#1a1a18]">{r.label}</p>
                  <p className="text-sm text-[#6b6b68]">{r.desc}</p>
                </div>
                <p className="text-lg font-bold text-[#3d4f6b] whitespace-nowrap ml-4">{r.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">「これ、作れますか？」と聞いてみてください。</h2>
          <p className="text-[#6b6b68] mb-8">たいていのことは作れます。まず話しましょう。</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3d4f6b] text-white font-medium rounded-full hover:bg-[#2d3f5b] transition-colors"
          >
            相談してみる <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
