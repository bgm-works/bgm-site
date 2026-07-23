import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/shared/hero-visual";
import { BrowserFrame } from "@/components/shared/browser-frame";
import { Reveal } from "@/components/shared/reveal";
import { serialize, organization, website } from "@/lib/vendor/typed";

export const metadata: Metadata = {
  alternates: { canonical: "https://bgm-works.com/" },
};

// 構造化データ（seo-jsonld・ASSET-047 で生成）
const ld = serialize([
  organization({
    name: "BGM Works株式会社",
    url: "https://bgm-works.com/",
    logo: "https://bgm-works.com/icon.png",
  }),
  website({ name: "BGM Works | Business Growth Mechanics", url: "https://bgm-works.com/" }),
]);

type Service = {
  no: string;
  label: string;
  title: string;
  description: string;
  href: string;
  /** 実プロダクトのスクショがある場合はブラウザ枠で見せる。無い場合は promise のタイポパネル */
  screenshot?: { src: string; alt: string; url: string };
  promise?: string;
  panelClass: string;
  promiseClass?: string;
  /** その場で試せる無料ツールがある場合の外部導線（例: ホームページ無料診断） */
  toolUrl?: string;
  toolLabel?: string;
};

const services: Service[] = [
  {
    no: "01",
    label: "Web Production",
    title: "ホームページ制作・更新支援",
    description:
      "会社の顔になるコーポレートサイト・サービスサイトを、設計から公開、公開後の更新まで一気通貫で支援します。作って終わりにせず、月額の更新サポートで「最新の会社」を保ちます。",
    href: "/services/web-production",
    screenshot: {
      src: "/screenshots/aidial.png",
      alt: "当社が運営するaidialポータルの実際の画面",
      url: "aidial.jp",
    },
    panelClass: "bg-secondary",
    toolUrl: "https://hp-shindan.bgm-works.com/shindan",
    toolLabel: "無料診断を試す",
  },
  {
    no: "02",
    label: "Development",
    title: "受託開発",
    description:
      "要件定義から本番運用まで一気通貫。Webアプリ・業務ツール・会員制サービスを、運用に耐える品質で設計し、事業成長に直結する形で届けます。",
    href: "/services/development",
    screenshot: {
      src: "/screenshots/runnavi.png",
      alt: "当社が開発・運営するRunNaviの実際の画面",
      url: "runnavi.aidial.jp",
    },
    panelClass: "bg-cool-accent/10",
  },
  {
    no: "03",
    label: "Business Improvement",
    title: "業務改善支援",
    description:
      "手入力・転記・確認待ちを減らし、経営者と現場の時間を利益につながる仕事に戻します。開発を伴わない業務フローの整理から着手できます。",
    href: "/services/ai-implementation",
    screenshot: {
      src: "/screenshots/shindan.png",
      alt: "当社が公開しているAiDIAL無料AI診断の実際の画面",
      url: "shindan.aidial.jp",
    },
    panelClass: "bg-muted",
  },
  {
    no: "04",
    label: "AI Marketing",
    title: "集客・売上アップ支援",
    description:
      "AIによる集客プラン、SNS運用の仕組み化、動画から各SNS投稿への自動展開。属人的な発信を、止まらない仕組みに変えます。",
    href: "/services/marketing",
    promise: "止まる発信を、\n続く仕組みへ。",
    panelClass: "bg-primary-dark",
    promiseClass: "text-primary-foreground",
  },
  {
    no: "05",
    label: "Atelier Boost",
    title: "アトリエboost",
    description:
      "受注・在庫・発信を整理し、個人クリエイターが制作と販売に集中できる状態を作ります。制作以外の作業を減らすバックオフィス支援です。",
    href: "/services/atelier-boost",
    promise: "制作以外を、\n軽くする。",
    panelClass: "bg-warm-accent/12",
    promiseClass: "text-warm-accent",
  },
];

// 検証可能な実数のみ（信頼性監査: 数字でないもの・自己申告の水増しを置かない）
const impact = [
  { value: "5", label: "本番稼働・自社運用しているプロダクト" },
  { value: "220+", label: "RunNaviに掲載中のマラソン大会" },
  { value: "17年", label: "チームの基盤にあるシステム開発経験" },
  { value: "3冠", label: "AWS認定資格（SAA / DVA / SOA）" },
];

const products = [
  {
    name: "RunNavi",
    tagline: "全国のマラソン大会検索・締切管理",
    url: "https://runnavi.aidial.jp",
    shot: { src: "/screenshots/runnavi.png", alt: "RunNaviの実際の画面", url: "runnavi.aidial.jp" },
  },
  {
    name: "AiDIAL 無料AI診断",
    tagline: "2問で概算費用と補助金の目安がわかる",
    url: "https://shindan.aidial.jp",
    shot: { src: "/screenshots/shindan.png", alt: "AiDIAL無料AI診断の実際の画面", url: "shindan.aidial.jp" },
  },
  {
    name: "aidialポータル",
    tagline: "花火・ウォーキング等の生活情報サイト群",
    url: "https://aidial.jp",
    shot: { src: "/screenshots/aidial.png", alt: "aidialポータルの実際の画面", url: "aidial.jp" },
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />
      {/* Hero — ブランド宣言を主役に。アークは右下から裁ち落とし（モバイルでも表示） */}
      <section className="relative overflow-hidden bg-primary-dark text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] translate-x-1/4 translate-y-1/4 text-primary-foreground/60 md:h-[680px] md:w-[680px]"
        >
          <HeroVisual />
        </div>
        <div className="container-wide relative py-24 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
            Business Growth Mechanics
          </p>
          <h1 className="display-hero mt-8">
            <span className="block">がんばりを、</span>
            <span className="block">仕組みに変えよう。</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            BGM Worksは、業務設計とAI実装で、中小企業と個人事業の成長を「仕組み」から支える開発会社です。
            ムダを減らす守りと、集客・売上を伸ばす攻めを、実装から運用まで一気通貫で伴走します。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-primary-foreground px-7 text-primary-dark hover:bg-warm-accent hover:text-white"
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
          {/* FVの安心材料（検証可能な実数のみ。impact セクションと同一ソース） */}
          <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
            <span>本番稼働5プロダクトを自社運用</span>
            <span>17年のシステム開発経験</span>
            <span>相談無料・返信は24時間以内</span>
          </p>
        </div>
      </section>

      {/* Vision statement */}
      <section className="border-b border-border py-24 md:py-36">
        <div className="container-wide">
          <p className="section-eyebrow uppercase">Our Belief</p>
          <p className="display-lg mt-8 max-w-4xl text-foreground">
            <span className="block">成長する事業には、必ず</span>
            <span className="block">
              <span className="text-primary">「成長の仕組み」</span>がある。
            </span>
            <span className="mt-4 block text-[0.72em] leading-snug text-muted-foreground">
              それは才能でも運でもなく、設計できるものだと考えています。
            </span>
          </p>
        </div>
      </section>

      {/* Services — 全幅の交互モジュール。実プロダクトの画面を主役に */}
      <section id="services" className="border-b border-border">
        <div className="container-wide py-16 md:py-24">
          <p className="section-eyebrow uppercase">Services</p>
          <h2 className="display-md mt-6 max-w-3xl">
            事業のフェーズと課題に合わせて、5つの領域で伴走します。
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
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Button
                    render={<Link href={s.href} />}
                    variant="outline"
                    className="group px-6"
                  >
                    詳しく見る{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  {s.toolUrl && (
                    <a
                      href={s.toolUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {s.toolLabel}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
              {/* visual */}
              <Reveal className={i % 2 === 1 ? "lg:order-1" : ""}>
                {s.screenshot ? (
                  <div className={`rounded-2xl p-6 md:p-10 ${s.panelClass}`}>
                    <BrowserFrame
                      src={s.screenshot.src}
                      alt={s.screenshot.alt}
                      url={s.screenshot.url}
                    />
                  </div>
                ) : (
                  <div className={`flex aspect-[4/3] items-end rounded-2xl p-8 md:p-10 ${s.panelClass}`}>
                    <p
                      className={`display-md whitespace-pre-line font-bold leading-[1.15] ${s.promiseClass ?? ""}`}
                    >
                      {s.promise}
                    </p>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      {/* Impact — 検証可能な数字のみ。数値はテラコッタ */}
      <section className="bg-primary-dark py-24 text-primary-foreground md:py-32">
        <div className="container-wide">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
            BGM Works in numbers
          </p>
          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((s) => (
              <div key={s.label}>
                <p className="font-numeric text-6xl font-semibold tracking-tight text-warm-accent md:text-7xl">
                  {s.value}
                </p>
                <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-primary-foreground/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — 実物のスクリーンショット＋本番URL */}
      <section className="border-b border-border py-24 md:py-32">
        <div className="container-wide">
          <p className="section-eyebrow uppercase">Proof</p>
          <h2 className="display-md mt-6 max-w-3xl">
            発注の前に、当社の設計と品質を、実物で確かめてください。
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <Reveal key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-border p-4 transition-all hover:-translate-y-0.5 hover:border-primary"
                >
                  <BrowserFrame src={p.shot.src} alt={p.shot.alt} url={p.shot.url} />
                  <div className="px-2 pb-2 pt-5">
                    <p className="text-lg font-bold tracking-tight">{p.name}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      サイトを見る{" "}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="outline" render={<Link href="/works" />} className="group px-6">
              すべての実績・構築例を見る{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* About — 会社を主役に */}
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
            <p className="mt-8 text-sm text-muted-foreground">
              代表者を含む会社の詳細は
              <Link
                href="/company"
                className="text-primary underline-offset-4 hover:underline hover:decoration-warm-accent"
              >
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
          <h2 className="display-lg mx-auto max-w-3xl">まずは気軽に、話してみてください。</h2>
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
