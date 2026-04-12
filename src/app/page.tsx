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
    color: "#E3F0F0",
    iconColor: "#1B6B6B",
  },
  {
    icon: Palette,
    tag: "個人クリエイター向け",
    title: "アトリエboost",
    description:
      "受注管理、在庫、SNS投稿——バックオフィスをAI従業員に丸投げして、あなたは「創る」ことだけに集中できるアトリエへ。",
    href: "/services/atelier-boost",
    color: "#FBF0EA",
    iconColor: "#C06A3A",
  },
  {
    icon: Code,
    tag: "Web・アプリ開発",
    title: "受託開発",
    description:
      "17年のSE経験 × AI爆速開発。要件定義から本番運用まで一気通貫。事業成長に直結するプロダクトを、他社の1/3の納期で届けます。",
    href: "/services/development",
    color: "#E8EEF0",
    iconColor: "#3D5A6B",
  },
];

const stats = [
  { value: "17年", label: "システムエンジニア経験" },
  { value: "3冠", label: "AWS認定資格（SAA/DVA/SOA）" },
  { value: "1/3", label: "他社比の開発納期" },
  { value: "月30h+", label: "業務削減の実績" },
];

const flow = [
  { step: "01", title: "無料ヒアリング", desc: "30分のオンラインで、今いちばん困っていることを聞かせてください。" },
  { step: "02", title: "成長設計図の提案", desc: "あなたの事業に合った仕組みと費用感を、3営業日以内にご提案します。" },
  { step: "03", title: "仕組みの構築・導入", desc: "小さく始めて、手応えを感じながら一緒に作り上げます。" },
  { step: "04", title: "一緒に育てる", desc: "事業の変化に合わせて仕組みを定期チューニング。ずっと伴走します。" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] pt-20 pb-28">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-[#1B6B6B] tracking-widest uppercase mb-6">
            Business Growth Mechanics
          </p>
          <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-tight tracking-tight text-[#1a1a18] mb-6">
            がんばりを、<br />仕組みに変えよう。
          </h1>
          <p className="text-lg text-[#6b6b68] max-w-lg mx-auto mb-10 leading-relaxed">
            毎日がんばっているのに、もっと伸ばしたい。<br />
            その想いを、AIと設計力で<strong className="text-[#1a1a18]">「成長の仕組み」</strong>に変えます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B6B6B] text-white font-medium rounded-full hover:bg-[#0E4A4A] transition-colors"
            >
              無料ヒアリングを予約する
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#e2e2de] text-[#1a1a18] font-medium rounded-full hover:border-[#1B6B6B] hover:text-[#1B6B6B] transition-colors"
            >
              サービスを見る
            </Link>
          </div>
        </div>

        {/* decorative circles */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E3F0F0] opacity-40 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#FBF0EA] opacity-40 blur-3xl"
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
            <Cog size={20} className="text-[#1B6B6B]" />
            <span className="text-sm font-medium text-[#1B6B6B] tracking-widest uppercase">Our Philosophy</span>
          </div>
          <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-[#1a1a18] leading-tight mb-8">
            がんばっている、あなたへ。
          </h2>
          <div className="space-y-6 text-[#4a4a47] leading-relaxed">
            <p className="text-lg">
              「もう少し売上を伸ばしたい。でも、自分の手が足りない。」<br />
              「AIがいいって聞くけど、何から手をつければいいか分からない。」
            </p>
            <p>
              その忙しさは、事業を本気で良くしたいという証拠だと思っています。
            </p>
            <p>
              17年間、大企業でビジネスの仕組みを設計する中で、
              ひとつ確信したことがあります。<br />
              <strong className="text-[#1a1a18]">成長する事業には、必ず「成長の仕組み」がある。</strong><br />
              それは才能でも運でもなく、設計できるものです。
            </p>
            <p>
              AIが身近になった今、その仕組みを届けられるようになりました。
            </p>
            <p className="font-medium text-[#1a1a18] text-lg">
              あなたのがんばりを、仕組みに変える。<br />
              そして、その仕組みを一緒に育て続ける。<br />
              それがBGMの約束です。
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
                  className="group flex flex-col p-8 rounded-2xl border border-[#e2e2de] hover:border-[#1B6B6B] hover:shadow-lg transition-all bg-white"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: s.color }}
                  >
                    <Icon size={22} style={{ color: s.iconColor }} />
                  </div>
                  <span className="text-xs font-medium text-[#6b6b68] mb-2">{s.tag}</span>
                  <h3 className="text-xl font-bold text-[#1a1a18] mb-3 group-hover:text-[#1B6B6B] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#6b6b68] leading-relaxed flex-1">{s.description}</p>
                  <div className="mt-6 flex items-center gap-1 text-sm text-[#1B6B6B] font-medium">
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
            <p className="section-subtitle">4ステップで、あなたの事業に成長の仕組みが生まれます</p>
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
                <span className="text-xs font-medium text-[#1B6B6B] bg-[#E3F0F0] px-3 py-1 rounded-full">
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
              className="inline-flex items-center gap-2 text-[#1B6B6B] font-medium hover:underline"
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
                title: "事業の「詰まり」を、一緒に見つける",
                desc: "表面的な自動化ではなく、売上が伸びない原因を構造から見つけます。17年の設計経験で、あなた自身も気づいていないボトルネックを発見します。",
              },
              {
                icon: Clock,
                title: "小さく始めて、手応えを感じてから広げる",
                desc: "最初から大きな投資は不要。まず1つの仕組みを作り、効果を実感してから次のステップへ。AI×設計力で、他社の1/3の納期で形にします。",
              },
              {
                icon: TrendingUp,
                title: "事業が変わっても、仕組みが寄り添い続ける",
                desc: "作って終わりではありません。月額保守で定期チューニング。事業フェーズに合わせて仕組みを一緒に育てます。",
              },
            ].map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title}>
                  <Icon size={24} className="text-[#7AB8B8] mb-4" />
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
          <h2 className="section-title mb-4">まずは気軽に、話してみてください。</h2>
          <p className="text-[#6b6b68] mb-10 leading-relaxed">
            「何から手をつければいいか分からない」でも大丈夫です。<br />
            30分の無料ヒアリングで、あなたの事業の「がんばりどころ」を一緒に整理します。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#1B6B6B] text-white text-lg font-medium rounded-full hover:bg-[#0E4A4A] transition-colors"
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
