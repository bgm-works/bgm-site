import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/shared/hero-visual";

const services = [
  {
    no: "01",
    label: "Development",
    title: "受託開発",
    promise: "アイデアを、\n動くプロダクトへ。",
    description:
      "要件定義から本番運用まで一気通貫。Webアプリ・業務ツール・会員制サービスを、運用に耐える品質で設計し、事業成長に直結する形で届けます。",
    href: "/services/development",
    accent: "cool" as const,
  },
  {
    no: "02",
    label: "Business Improvement",
    title: "業務改善支援",
    promise: "手作業を、\n確認だけの流れへ。",
    description:
      "手入力・転記・確認待ちを減らし、経営者と現場の時間を利益につながる仕事に戻します。開発を伴わない業務フローの整理から着手できます。",
    href: "/services/ai-implementation",
    accent: "primary" as const,
  },
  {
    no: "03",
    label: "AI Marketing",
    title: "集客・売上アップ支援",
    promise: "止まる発信を、\n続く仕組みへ。",
    description:
      "AIによる集客プラン、SNS運用の仕組み化、動画から各SNS投稿への自動展開。属人的な発信を、止まらない仕組みに変えます。",
    href: "/services/marketing",
    accent: "primary" as const,
  },
  {
    no: "04",
    label: "Atelier Boost",
    title: "アトリエboost",
    promise: "制作以外を、\n軽くする。",
    description:
      "受注・在庫・発信を整理し、個人クリエイターが制作と販売に集中できる状態を作ります。制作以外の作業を減らすバックオフィス支援です。",
    href: "/services/atelier-boost",
    accent: "warm" as const,
  },
];

const accentPanel: Record<"primary" | "warm" | "cool", string> = {
  primary: "bg-secondary text-primary-dark",
  warm: "bg-warm-accent/12 text-warm-accent",
  cool: "bg-secondary text-cool-accent",
};

const impact = [
  { value: "5", label: "本番稼働・自社運用しているプロダクト" },
  { value: "4", label: "開発・業務改善・集客・アトリエの提供領域" },
  { value: "全国", label: "オンラインで完結する対応範囲" },
];

const products = [
  {
    name: "RunNavi",
    tagline: "全国のマラソン大会検索・締切管理",
    url: "https://runnavi.aidial.jp",
  },
  {
    name: "AiDIAL 無料AI診断",
    tagline: "2問で概算費用と補助金の目安がわかる",
    url: "https://shindan.aidial.jp",
  },
  {
    name: "aidialポータル",
    tagline: "花火・ウォーキング等の生活情報サイト群",
    url: "https://aidial.jp",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — ブランド宣言を主役に（登記情報はトップに置かない） */}
      <section className="bg-primary-dark text-primary-foreground">
        <div className="container-wide grid items-center gap-12 py-24 md:py-32 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
              Business Growth Mechanics
            </p>
            <h1 className="display-hero mt-8">
              がんばりを、
              <br />
              仕組みに変えよう。
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              BGM Worksは、業務設計とAI実装で、中小企業と個人事業の成長を「仕組み」から支える開発会社です。
              ムダを減らす守りと、集客・売上を伸ばす攻めを、実装から運用まで一気通貫で伴走します。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                variant="secondary"
                className="px-7 text-secondary-foreground"
              >
                無料で相談する <ArrowRight />
              </Button>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 self-center text-sm font-medium text-primary-foreground/90 underline-offset-4 hover:underline"
              >
                事業を見る <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="hidden text-primary-foreground/70 lg:block">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Vision statement — 大きく1行で言い切る（SoftBank ベンチ） */}
      <section className="border-b border-border py-24 md:py-36">
        <div className="container-wide">
          <p className="section-eyebrow uppercase">Our Belief</p>
          <p className="display-lg mt-8 max-w-4xl text-foreground">
            成長する事業には、必ず
            <span className="text-primary">「成長の仕組み」</span>
            がある。<br className="hidden md:block" />
            それは才能でも運でもなく、設計できるものだと考えています。
          </p>
        </div>
      </section>

      {/* Services — 全幅の交互モジュール（Apple ベンチ） */}
      <section id="services" className="border-b border-border">
        <div className="container-wide py-16 md:py-24">
          <p className="section-eyebrow uppercase">Services</p>
          <h2 className="display-md mt-6 max-w-3xl">
            事業のフェーズと課題に合わせて、4つの領域で伴走します。
          </h2>
        </div>
        {services.map((s, i) => (
          <div key={s.title} className="border-t border-border">
            <div className="container-wide grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
              {/* text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-baseline gap-4">
                  <span className="font-numeric text-lg text-warm-accent">{s.no}</span>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
                <h3 className="display-md mt-5">{s.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {s.description}
                </p>
                <Button render={<Link href={s.href} />} variant="outline" className="mt-8 px-6">
                  詳しく見る <ArrowRight className="size-4" />
                </Button>
              </div>
              {/* accent panel */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div
                  className={`flex aspect-[4/3] items-end rounded-2xl p-8 md:p-10 ${accentPanel[s.accent]}`}
                >
                  <p className="display-md whitespace-pre-line font-bold leading-[1.15]">
                    {s.promise}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Impact — 大きな数字で会社の輪郭（登記情報ではない） */}
      <section className="bg-primary-dark py-24 text-primary-foreground md:py-32">
        <div className="container-wide">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
            BGM Works in numbers
          </p>
          <div className="mt-14 grid gap-12 sm:grid-cols-3">
            {impact.map((s) => (
              <div key={s.label}>
                <p className="font-numeric text-6xl font-semibold tracking-tight md:text-7xl">{s.value}</p>
                <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-primary-foreground/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — 実際に動いているプロダクト（本番URLで触れる） */}
      <section className="border-b border-border py-24 md:py-32">
        <div className="container-wide">
          <p className="section-eyebrow uppercase">Proof</p>
          <h2 className="display-md mt-6 max-w-3xl">
            発注の前に、当社の設計と品質を、実物で確かめてください。
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-border p-8 transition-colors hover:border-primary"
              >
                <div>
                  <p className="text-xl font-bold tracking-tight">{p.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                </div>
                <span className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  サイトを見る <ArrowUpRight className="size-4" />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="outline" render={<Link href="/works" />} className="px-6">
              すべての実績・構築例を見る <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About — 会社を主役に（個人名は前面に出さず会社概要へ集約） */}
      <section className="border-b border-border py-24 md:py-32">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-eyebrow uppercase">About BGM Works</p>
            <p className="display-md mt-6">
              大企業品質の設計力を、
              <br />
              地方の一社の隣に。
            </p>
          </div>
          <div className="max-w-2xl">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              BGM Worksは、17年のシステム開発経験とAWS認定資格3冠に裏打ちされた設計力で、
              中小企業と個人事業のすぐ隣に立つ開発会社です。大企業で磨いた仕組み設計の確かさと、
              最新AI技術への現場での好奇心を両手に、作って終わりにせず長く伴走します。
            </p>
            <div className="mt-10 flex flex-wrap gap-x-16 gap-y-8 border-t border-border pt-8">
              <div>
                <p className="font-numeric text-4xl font-semibold">17年</p>
                <p className="mt-2 text-sm text-muted-foreground">システム開発の経験</p>
              </div>
              <div>
                <p className="font-numeric text-4xl font-semibold">
                  3冠 <span className="text-base font-normal text-muted-foreground">SAA / DVA / SOA</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">AWS認定資格</p>
              </div>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              代表者を含む会社の詳細は
              <Link href="/company" className="text-primary hover:underline">
                会社概要
              </Link>
              をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-wide text-center">
          <h2 className="display-lg mx-auto max-w-3xl">
            まずは気軽に、話してみてください。
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            「何から手をつければいいか分からない」でも大丈夫です。30分の無料相談で、
            事業の「がんばりどころ」を一緒に整理します。
          </p>
          <div className="mt-10">
            <Button render={<Link href="/contact" />} size="lg" className="px-8">
              無料で相談する <ArrowRight />
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">返信は24時間以内。費用は一切かかりません。</p>
        </div>
      </section>
    </>
  );
}
