import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { StatCounter } from "@/components/shared/stat-counter";
import { ProofLinks } from "@/components/shared/proof-links";
import { Reveal } from "@/components/shared/reveal";

// 会社概要（/company）と実績（/works）の確定値から引用。推測値を置かない。
const heroMeta = [
  { k: "会社設立", v: "2026年7月" },
  { k: "法人番号", v: "9140001143437" },
  { k: "所在地", v: "兵庫県南あわじ市" },
  { k: "対応", v: "全国・オンライン完結" },
];

// 法人としての実績（個人の経歴ではなく、会社が出しているもの）。
const stats = [
  { value: "5", label: "本番稼働・自社運用しているプロダクト" },
  { value: "4", label: "提供領域（開発・業務改善・集客・アトリエ支援）" },
  { value: "8", label: "定款に定めた事業目的の号数" },
  { value: "全国", label: "オンラインで完結する対応範囲" },
];

const services = [
  {
    no: "01",
    label: "DEVELOPMENT",
    title: "受託開発",
    description:
      "要件定義から本番運用まで一気通貫。Webアプリ・業務ツール・会員制サービスを、事業成長に直結する形で設計し、運用に耐える品質で届けます。",
    href: "/services/development",
  },
  {
    no: "02",
    label: "BUSINESS IMPROVEMENT",
    title: "業務改善支援",
    description:
      "手入力・転記・確認待ちを減らし、経営者と現場の時間を利益につながる仕事に戻します。開発を伴わない業務フローの整理から着手できます。",
    href: "/services/ai-implementation",
  },
  {
    no: "03",
    label: "AI MARKETING",
    title: "集客・売上アップ支援",
    description:
      "AIによる集客プラン、SNS運用の仕組み化、動画から各SNS投稿への自動展開。属人的な発信を、止まらない仕組みに変えます。",
    href: "/services/marketing",
  },
  {
    no: "04",
    label: "ATELIER BOOST",
    title: "アトリエboost",
    description:
      "受注・在庫・発信を整理し、個人クリエイターが制作と販売に集中できる状態を作ります。制作以外の作業を減らすバックオフィス支援です。",
    href: "/services/atelier-boost",
  },
];

const reasons = [
  {
    title: "事業の詰まりを、構造で捉える",
    text: "表面的なツール導入ではなく、売上や時間の詰まりを分解し、最も効く一手から着手します。作る前に、直す場所を見極めます。",
  },
  {
    title: "小さく作って、早く確かめる",
    text: "最初から大きく作りません。成果が出る単位で実装し、投資対効果を見ながら範囲を広げます。動く試作を触ってから本開発を判断できます。",
  },
  {
    title: "運用フェーズまで、伴走する",
    text: "納品して終わりにしません。公開後も月額保守で運用と改善を続け、事業の変化に仕組みを追従させます。長く隣にいる開発会社です。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — フラット・editorial（グラデ/ブロブ/グリッド/ダミーカードを撤去） */}
      <section className="border-b border-border">
        <div className="container-wide py-20 md:py-28">
          <p className="section-eyebrow uppercase">Business Growth Mechanics</p>
          <h1 className="mt-6 max-w-3xl text-[clamp(2.4rem,6.5vw,4.2rem)] font-bold leading-[1.15] tracking-tight">
            がんばりを、<br className="hidden sm:block" />
            仕組みに変えよう。
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            BGM Works株式会社は、業務設計とAI実装で、中小企業と個人事業のための
            「成長の仕組み」を作る開発会社です。ムダを減らす守りと、集客・売上を伸ばす攻めの両輪を、
            実装から運用まで一気通貫で伴走します。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button render={<Link href="/contact" />} size="lg" className="px-6">
              無料で相談する <ArrowRight />
            </Button>
            <Button variant="outline" render={<Link href="/works" />} size="lg" className="px-6">
              公開中のプロダクトを見る
            </Button>
          </div>

          {/* 法人メタ情報（editorial の署名的な罫線行） */}
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 md:grid-cols-4">
            {heroMeta.map((m) => (
              <div key={m.k}>
                <dt className="text-xs tracking-[0.14em] text-muted-foreground">{m.k}</dt>
                <dd className="mt-1.5 font-numeric text-sm font-medium text-foreground">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 数字で見るBGM（法人実績） */}
      <section className="border-b border-border bg-muted/30 py-20">
        <div className="container-wide">
          <SectionHeader
            label="By the numbers"
            title="数字で見るBGM Works"
            subtitle="個人の経歴ではなく、会社として実際に出しているものです。稼働中のプロダクトは本番URLから直接触れます。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="container-wide grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <SectionHeader label="Philosophy" title="がんばっている、あなたへ。" />
          <div className="max-w-2xl space-y-5 border-l-2 border-primary/60 pl-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              「もう少し売上を伸ばしたい。でも自分の手が足りない」「何から手をつければいいか分からない」。
              その忙しさは、事業を本気で良くしたいという証拠だと考えています。
            </p>
            <p>
              成長する事業には、必ず「成長の仕組み」があります。それは才能でも運でもなく、設計できるものです。
            </p>
            <p className="font-medium text-foreground">
              がんばりを、仕組みに変える。そしてその仕組みを一緒に育てる。それがBGM Worksの約束です。
            </p>
          </div>
        </div>
      </section>

      {/* Services — 罫線番号リスト（装飾アイコン/カードグリッドを撤去） */}
      <section id="services" className="border-b border-border py-20 md:py-28">
        <div className="container-wide">
          <SectionHeader
            label="Services"
            title="4つのサービス"
            subtitle="守り（業務効率化）と攻め（集客・売上）の両輪で、事業フェーズと課題に合わせて最適な仕組みを設計します。"
            className="mb-14"
          />
          <div className="border-t border-border">
            {services.map((service) => (
              <Reveal key={service.title}>
                <Link
                  href={service.href}
                  className="group grid gap-4 border-b border-border py-8 md:grid-cols-[5rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
                >
                  <span className="font-numeric text-2xl font-semibold text-warm-accent">
                    {service.no}
                  </span>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {service.label}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold tracking-tight md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {service.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                    詳しく見る <ArrowRight className="size-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — 実物で確かめる（共通コンポーネント） */}
      <ProofLinks />

      {/* Why BGM */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="container-wide">
          <SectionHeader label="Why BGM" title="BGM Worksが選ばれる理由" className="mb-14" />
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {reasons.map((reason, i) => (
              <div key={reason.title} className="bg-background p-8">
                <span className="font-numeric text-sm text-warm-accent">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold tracking-tight">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 代表（個人の経歴はここに集約） */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="container-wide grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <SectionHeader label="Founder" title="代表について" />
          <div className="max-w-2xl">
            <p className="text-lg font-bold tracking-tight">代表取締役　熱田 健司</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              17年のシステムエンジニア経験で培った仕組み設計の確かさと、最新AI技術への現場での好奇心。
              その両方を持って、地方の中小企業のすぐ隣で長く伴走することを事業にしています。
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs tracking-[0.14em] text-muted-foreground">開発経験</dt>
                <dd className="mt-1 font-numeric text-2xl font-semibold text-foreground">17年</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-muted-foreground">AWS認定資格</dt>
                <dd className="mt-1 font-numeric text-2xl font-semibold text-foreground">
                  3冠 <span className="text-sm font-normal text-muted-foreground">SAA / DVA / SOA</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">
              会社の詳細は
              <Link href="/company" className="text-primary hover:underline">
                会社概要
              </Link>
              にまとめています。
            </p>
          </div>
        </div>
      </section>

      {/* CTA — フラットな Primary 帯（グラデ撤去） */}
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="container-wide text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            まずは気軽に、話してみてください。
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            「何から手をつければいいか分からない」でも大丈夫です。30分の無料相談で、
            事業の「がんばりどころ」を一緒に整理します。
          </p>
          <div className="mt-9">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              variant="secondary"
              className="px-7 text-secondary-foreground"
            >
              無料で相談する <ArrowRight />
            </Button>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/70">返信は24時間以内。費用は一切かかりません。</p>
        </div>
      </section>
    </>
  );
}
