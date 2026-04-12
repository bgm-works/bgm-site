import Link from "next/link";
import { ArrowRight, Bot, Palette, Code, Clock, CheckCircle, TrendingUp, Cog } from "lucide-react";

const services = [
  {
    icon: Bot,
    tag: "中小企業・店舗向け",
    title: "AI導入支援",
    description:
      "事務作業、在庫管理、チラシ制作——繰り返しの業務をAIと仕組みで自動化。成長を阻む「詰まり」を取り除き、経営者の時間を取り戻します。",
    href: "/services/ai-implementation",
    color: "#e8f0eb",
    iconColor: "#3d6b4f",
  },
  {
    icon: Palette,
    tag: "個人クリエイター向け",
    title: "アトリエboost",
    description:
      "受注管理、在庫、SNS投稿——バックオフィスをAI従業員に丸投げして、あなたは「創る」ことだけに集中できるアトリエへ。",
    href: "/services/atelier-boost",
    color: "#f0ebe8",
    iconColor: "#6b4f3d",
  },
  {
    icon: Code,
    tag: "Web・アプリ開発",
    title: "受託開発",
    description:
      "17年のSE経験 × AI爆速開発。要件定義から本番運用まで一気通貫。事業成長に直結するプロダクトを、他社の1/3の納期で届けます。",
    href: "/services/development",
    color: "#e8eaf0",
    iconColor: "#3d4f6b",
  },
];

const stats = [
  { value: "17年", label: "システムエンジニア経験" },
  { value: "3冠", label: "AWS認定資格（SAA/DVA/SOA）" },
  { value: "1/3", label: "他社比の開発納期" },
  { value: "月30h+", label: "業務削減の実績" },
];

const flow = [
  { step: "01", title: "無料ヒアリング", desc: "30分のオンラインで「成長の詰まり」をすべて聞かせてください。" },
  { step: "02", title: "成長設計図の提案", desc: "事業成長の仕組みと実装コストを3営業日以内にご提案します。" },
  { step: "03", title: "仕組みの構築・導入", desc: "AIが動く成長エンジンを設計・実装します。" },
  { step: "04", title: "継続チューニング", desc: "事業フェーズに合わせて仕組みを定期的に最適化します。" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] pt-20 pb-28">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-[#3d6b4f] tracking-widest uppercase mb-6">
            Business Growth Mechanics
          </p>
          <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-tight tracking-tight text-[#1a1a18] mb-6">
            仕組みが、<br />成長を動かす。
          </h1>
          <p className="text-lg text-[#6b6b68] max-w-lg mx-auto mb-10 leading-relaxed">
            事業成長は運やタイミングではなく、<strong className="text-[#1a1a18]">再現可能なメカニズム</strong>が存在します。<br />
            AIと設計力で、あなたの事業に「成長の仕組み」を実装します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3d6b4f] text-white font-medium rounded-full hover:bg-[#2d5a3f] transition-colors"
            >
              無料ヒアリングを予約する
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#e2e2de] text-[#1a1a18] font-medium rounded-full hover:border-[#3d6b4f] hover:text-[#3d6b4f] transition-colors"
            >
              サービスを見る
            </Link>
          </div>
        </div>

        {/* decorative circles */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#e8f0eb] opacity-40 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#f0ebe8] opacity-40 blur-3xl"
        />
      </section>

      {/* Stats */}
      <section className="bg-[#1a1a18] py-12">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-sm text-[#9b9b98]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founding Philosophy */}
      <section className="py-24 bg-[#f4f4f0]">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-8">
            <Cog size={20} className="text-[#3d6b4f]" />
            <span className="text-sm font-medium text-[#3d6b4f] tracking-widest uppercase">Our Philosophy</span>
          </div>
          <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-[#1a1a18] leading-tight mb-8">
            成長には、仕組みがある。
          </h2>
          <div className="space-y-5 text-[#4a4a47] leading-relaxed">
            <p>
              17年間、大企業のシステムアーキテクトとして複雑なビジネスプロセスを設計・最適化してきました。
              その経験の中で確信したことがあります——<strong className="text-[#1a1a18]">成長している組織は、必ず「成長の仕組み」を持っている</strong>、ということ。
            </p>
            <p>
              運やタイミングではなく、情報の流れ、意思決定の速度、作業の自動化、顧客との接点設計——
              これらが有機的に連動するとき、事業は加速します。まるで歯車が噛み合うように。
            </p>
            <p>
              AIが個人レベルで使える時代になった今、企業アーキテクトが大企業向けに設計してきた
              その「成長の仕組み」を、地方の中小企業・個人事業主にも届けることができます。
            </p>
            <p className="font-medium text-[#1a1a18]">
              BGM（Business Growth Mechanics）は、あなたの事業成長のメカニズムを設計し、
              AIと仕組みの力で確実に動かし続けることを約束します。
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="section-title">3つのサービス</h2>
            <p className="section-subtitle">事業フェーズと課題に合わせて、最適な仕組みを設計します</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group flex flex-col p-8 rounded-2xl border border-[#e2e2de] hover:border-[#3d6b4f] hover:shadow-lg transition-all bg-white"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: s.color }}
                  >
                    <Icon size={22} style={{ color: s.iconColor }} />
                  </div>
                  <span className="text-xs font-medium text-[#6b6b68] mb-2">{s.tag}</span>
                  <h3 className="text-xl font-bold text-[#1a1a18] mb-3 group-hover:text-[#3d6b4f] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#6b6b68] leading-relaxed flex-1">{s.description}</p>
                  <div className="mt-6 flex items-center gap-1 text-sm text-[#3d6b4f] font-medium">
                    詳しく見る <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#f4f4f0]">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="section-title">はじめ方</h2>
            <p className="section-subtitle">4ステップで、あなたの事業に成長の仕組みが動き始めます</p>
          </div>
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

      {/* Works preview */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="section-title">実績</h2>
            <p className="section-subtitle">実際に動いているプロダクトをご覧ください</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: "katatte",
                desc: "写真を見ながら語るだけ。AIが記事を書く。音声×画像×生成AI統合アプリ。",
                tag: "PWA / AI",
                url: "https://katatte.vercel.app",
              },
              {
                name: "PP Route Optimizer",
                desc: "ANA SFC修行の最高効率ルートをAIが自動計算。2026年5月の新運賃に対応。",
                tag: "最適化 / Web",
                url: "#",
              },
              {
                name: "AIコンシェルジュ",
                desc: "毎朝の朝ルーティンをAIが全自動実行。カレンダー取得からSNS下書きまで。",
                tag: "自動化 / AI",
                url: "#",
              },
            ].map((w) => (
              <div key={w.name} className="bg-white rounded-2xl border border-[#e2e2de] p-7">
                <span className="text-xs font-medium text-[#3d6b4f] bg-[#e8f0eb] px-3 py-1 rounded-full">
                  {w.tag}
                </span>
                <h3 className="text-lg font-bold text-[#1a1a18] mt-4 mb-2">{w.name}</h3>
                <p className="text-sm text-[#6b6b68] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-[#3d6b4f] font-medium hover:underline"
            >
              すべての実績を見る <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why BGM */}
      <section className="py-24 bg-[#1a1a18] text-white">
        <div className="container-narrow text-center">
          <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold mb-6 leading-tight">
            BGMが選ばれる理由
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
            {[
              {
                icon: Cog,
                title: "設計思考で根本から変える",
                desc: "表面的な自動化ではなく、事業成長の構造そのものを再設計します。17年のシステムアーキテクト経験が、あなたの事業の「詰まり」を見抜きます。",
              },
              {
                icon: Clock,
                title: "AI × 企業設計力で爆速実装",
                desc: "大企業向けに磨いた設計力と最新AIを組み合わせ、他社の1/3の納期で成長の仕組みを動かします。",
              },
              {
                icon: TrendingUp,
                title: "仕組みを育て続ける",
                desc: "月額保守で定期チューニング。事業フェーズが変わっても「成長の仕組み」が常に最適な状態で動き続けます。",
              },
            ].map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title}>
                  <Icon size={24} className="text-[#7ab892] mb-4" />
                  <h3 className="text-base font-bold mb-2">{r.title}</h3>
                  <p className="text-sm text-[#9b9b98] leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">まず、話してみてください。</h2>
          <p className="text-[#6b6b68] mb-10 leading-relaxed">
            「どこに詰まりがあるか分からない」「何を自動化すれば伸びるか」<br />
            30分の無料ヒアリングで、あなたの事業成長のメカニズムを一緒に整理します。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#3d6b4f] text-white text-lg font-medium rounded-full hover:bg-[#2d5a3f] transition-colors"
          >
            無料ヒアリングを予約する
            <ArrowRight size={18} />
          </Link>
          <p className="mt-4 text-xs text-[#9b9b98]">返信は24時間以内。費用は一切かかりません。</p>
        </div>
      </section>
    </>
  );
}
