import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Brush, MessageSquare, BarChart3, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "アトリエboost — 個人クリエイター向けAIバックオフィス自動化",
  description:
    "1人社長 + 4人のAI従業員。受注管理、在庫、SNS投稿——バックオフィスをAIに丸投げして、あなたは「創る」ことだけに集中できるアトリエへ。",
};

const pains = [
  { label: "受注管理", desc: "注文が来るたびに手動でスプレッドシートに記入" },
  { label: "在庫管理", desc: "どの作品が何個残っているか把握するのが大変" },
  { label: "SNS投稿", desc: "新作を作っても投稿する余裕がなくて集客できない" },
  { label: "顧客対応", desc: "メッセージの返信に追われて制作時間が取れない" },
];

const aiEmployees = [
  {
    icon: Package,
    name: "自動化エンジニア",
    role: "受注・在庫管理",
    desc: "注文が来たら自動で台帳に記録、在庫を更新、発送準備リストを生成。あなたは発送するだけ。",
  },
  {
    icon: MessageSquare,
    name: "コミュニケーター",
    role: "問い合わせ・DM対応",
    desc: "よくある質問への返信案を自動生成。あなたは確認して送るだけ。深夜のDMも翌朝には返信済み。",
  },
  {
    icon: Brush,
    name: "クリエイティブAI",
    role: "SNS・コンテンツ",
    desc: "新作の写真をアップするだけで、Instagram・X・Threadsの投稿文を自動生成。投稿頻度が3倍に。",
  },
  {
    icon: BarChart3,
    name: "アナリスト",
    role: "売上・データ分析",
    desc: "何が売れているか、いつ売れるか、次に作るべき作品のインサイトを毎週自動レポート。",
  },
];

const flow = [
  { step: "01", title: "現状ヒアリング", desc: "今どんな作業に時間を取られているかを全部聞かせてください。" },
  { step: "02", title: "AI従業員設計", desc: "あなたのアトリエに合わせた自動化ワークフローを設計します。" },
  { step: "03", title: "構築・テスト", desc: "2〜4週間で動く状態に。実際に使いながら一緒に調整します。" },
  { step: "04", title: "自走＋保守", desc: "あなたが使いこなせるまでサポート。壊れたら即対応。" },
];

export default function AtelierBoostPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-[#FBF0EA]">
        <div className="container-narrow">
          <span className="text-xs font-medium text-[#C06A3A] tracking-widest uppercase">
            Service 02
          </span>
          <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-[#1a1a18] mt-3 mb-3 leading-tight">
            アトリエboost
          </h1>
          <p className="text-xl font-medium text-[#C06A3A] mb-5">
            1人社長 + 4人のAI従業員。
          </p>
          <p className="text-lg text-[#4a4a48] leading-relaxed max-w-lg">
            受注管理、在庫、SNS——バックオフィスをAIに丸投げして、あなたは「創る」ことだけに集中できるアトリエへ。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-[#C06A3A] text-white font-medium rounded-full hover:bg-[#A0552D] transition-colors"
          >
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20">
        <div className="container-wide">
          <h2 className="section-title text-center mb-4">あなたの時間を奪っているのは</h2>
          <p className="section-subtitle text-center mb-12">「創ること」ではなく、「それ以外」のはずです。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pains.map((p) => (
              <div key={p.label} className="bg-white border border-[#e2e2de] rounded-2xl p-6">
                <p className="text-base font-bold text-[#c0392b] mb-2">{p.label}</p>
                <p className="text-sm text-[#6b6b68] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Employees */}
      <section className="py-20 bg-[#f4f4f0]">
        <div className="container-wide">
          <h2 className="section-title text-center mb-4">4人のAI従業員を雇います</h2>
          <p className="section-subtitle text-center mb-12">給与は月数万円。遅刻もミスも不満もありません。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aiEmployees.map((e) => {
              const Icon = e.icon;
              return (
                <div key={e.name} className="bg-white rounded-2xl border border-[#e2e2de] p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FBF0EA] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#C06A3A]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#9b9b98] mb-1">{e.role}</p>
                      <h3 className="text-lg font-bold text-[#1a1a18] mb-2">{e.name}</h3>
                      <p className="text-sm text-[#6b6b68] leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20">
        <div className="container-narrow">
          <h2 className="section-title text-center mb-12">導入前と後</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#e2e2de] bg-white overflow-hidden">
              <div className="bg-[#f4f4f0] px-6 py-4">
                <h3 className="font-bold text-[#6b6b68]">導入前</h3>
              </div>
              <ul className="p-6 space-y-3">
                {[
                  "制作時間の40%がバックオフィス作業",
                  "深夜に注文が来ても翌朝まで未対応",
                  "新作を作ってもSNSに投稿できない",
                  "何が売れているかわからない",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#4a4a48]">
                    <span className="text-[#c0392b] mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-[#C06A3A] bg-white overflow-hidden">
              <div className="bg-[#C06A3A] px-6 py-4">
                <h3 className="font-bold text-white">アトリエboost導入後</h3>
              </div>
              <ul className="p-6 space-y-3">
                {[
                  "制作に集中できる時間が月50時間増加",
                  "注文は自動で台帳へ、朝には完了リスト",
                  "SNS投稿頻度が3倍、集客力アップ",
                  "毎週の売上インサイトで次の作品を決定",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#1a1a18]">
                    <CheckCircle size={14} className="text-[#C06A3A] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 bg-[#f4f4f0]">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">導入の流れ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flow.map((f) => (
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
      <section className="py-20">
        <div className="container-narrow">
          <h2 className="section-title text-center mb-4">料金の目安</h2>
          <p className="section-subtitle text-center mb-10">規模・業務量によって異なります。まずはご相談ください。</p>
          <div className="bg-white rounded-2xl border border-[#e2e2de] divide-y divide-[#e2e2de]">
            {[
              { label: "無料ヒアリング", price: "¥0", desc: "現状の課題整理・自動化できる箇所の特定" },
              { label: "初期構築", price: "20万〜50万円", desc: "AI従業員の設計・構築・テスト・マニュアル作成" },
              { label: "月額保守", price: "2万〜5万円/月", desc: "稼働監視・仕様変更・AI進化への追従" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between px-8 py-5">
                <div>
                  <p className="font-bold text-[#1a1a18]">{r.label}</p>
                  <p className="text-sm text-[#6b6b68]">{r.desc}</p>
                </div>
                <p className="text-lg font-bold text-[#C06A3A] whitespace-nowrap ml-4">{r.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FBF0EA]">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">あなたのアトリエを、止まらないアトリエへ。</h2>
          <p className="text-[#6b6b68] mb-8 leading-relaxed">
            どんな作業が大変か、30分話すだけで見えてきます。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C06A3A] text-white font-medium rounded-full hover:bg-[#A0552D] transition-colors"
          >
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
