import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { ProcessGuarantee } from "@/components/shared/process-guarantee";
import { ProofLinks } from "@/components/shared/proof-links";
import { BrowserFrame } from "@/components/shared/browser-frame";

export const metadata: Metadata = {
  title: "ホームページ制作・更新支援",
  description:
    "会社の顔になるコーポレートサイト・サービスサイトを、設計から公開、公開後の更新まで一気通貫で支援。月額の更新サポートで「最新の会社」を保ちます。",
};

const problems = [
  "ホームページが古いまま、何年も手を付けられていない",
  "会社の実態より安っぽく見えて、取引先への説明で恥ずかしい",
  "更新を頼んでいた人がいなくなり、直せない",
  "スマートフォンで見ると崩れる・読みにくい",
  "問い合わせが来ない。何を直せばいいか分からない",
  "新しい事業・サービスを始めたのに、サイトに載っていない",
];

const offers = [
  {
    title: "新規制作",
    desc: "会社設立・事業立ち上げに合わせて、コーポレートサイトをゼロから設計します。デザインだけでなく「誰に・何を・どの順で見せるか」の情報設計から始めます。",
  },
  {
    title: "リニューアル",
    desc: "古くなったサイトを、現在の水準のデザインと構成に作り直します。既存の内容を棚卸しし、活かすもの・捨てるもの・足りないものを整理してから着手します。",
  },
  {
    title: "月額更新サポート",
    desc: "お知らせの掲載、実績の追加、料金や体制の変更反映など、公開後の更新を代行します。「更新が止まった古いサイト」に戻さないための仕組みです。",
  },
];

const reasons = [
  {
    title: "このサイト自体が、制作例です",
    desc: "いまご覧いただいているコーポレートサイトも、当社が設計から実装まで自社で作っています。デザイン・速度・スマートフォン対応を、発注前にそのまま確かめられます。",
  },
  {
    title: "作った後も、運用し続けている会社です",
    desc: "当社は自社で複数のWebサービスを公開し、運用を続けています。「公開して終わり」ではなく、更新と改善を続ける前提でサイトを設計します。",
  },
  {
    title: "AIを実務で使い、速く・安く作ります",
    desc: "AIを開発の実務に組み込み、従来より短い期間と低い費用で品質を確保します。浮いた時間は、内容の設計と文章の質に使います。",
  },
];

const priceRows = [
  { label: "コーポレートサイト新規制作", price: "15万〜60万円", desc: "情報設計・デザイン・実装・公開まで一式" },
  { label: "リニューアル", price: "15万〜60万円", desc: "既存内容の棚卸しと再設計を含む" },
  { label: "月額更新サポート", price: "1万〜3万円/月", desc: "お知らせ・実績・内容変更の反映を月数回まで代行" },
  { label: "スポット更新", price: "1万円〜/回", desc: "単発の修正・ページ追加。内容に応じて見積もり" },
];

export default function WebProductionPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-wide py-24 md:py-32">
          <p className="section-eyebrow uppercase">Service 01 ／ Web Production</p>
          <h1 className="display-lg mt-6">
            ホームページ制作
            <br />
            更新支援
          </h1>
          <p className="mt-4 text-xl font-medium text-primary">
            会社の顔を、実態に追いつかせる。
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            取引先も、銀行も、採用候補者も、最初に見るのはホームページです。
            設計から公開、公開後の更新まで一気通貫で支援し、
            <strong className="font-semibold text-foreground">「最新の会社」が伝わる状態</strong>を保ちます。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="group mt-9 px-7">
            無料で相談する{" "}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <section className="border-b border-border py-20">
        <div className="container-wide">
          <SectionHeader label="Current issues" title="こんな状態になっていませんか？" className="mb-12" />
          <div className="grid grid-cols-1 gap-x-10 gap-y-5 border-t border-border pt-8 md:grid-cols-2">
            {problems.map((p) => (
              <Reveal key={p}>
                <div className="flex items-start gap-3 border-b border-border pb-5">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-warm-accent" />
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted py-20">
        <div className="container-wide">
          <SectionHeader label="What we do" title="提供内容" className="mb-14" />
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {offers.map((o, i) => (
              <Reveal key={o.title}>
                <div className="h-full bg-background p-8">
                  <span className="font-numeric text-sm text-warm-accent">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight">{o.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 制作例=自社運用サイトの実画面 */}
      <section className="border-b border-border py-20">
        <div className="container-wide">
          <SectionHeader
            label="Live example"
            title="制作例は、実物で確認できます"
            subtitle="当社が設計・実装し、いま実際に運用しているサイトの画面です。すべて本番URLから直接触れます。"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <a href="https://aidial.jp" target="_blank" rel="noopener noreferrer" className="group block">
                <BrowserFrame
                  src="/screenshots/aidial.png"
                  alt="当社が運営するaidialポータルの実際の画面"
                  url="aidial.jp"
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
            <Reveal>
              <a href="https://runnavi.aidial.jp" target="_blank" rel="noopener noreferrer" className="group block">
                <BrowserFrame
                  src="/screenshots/runnavi.png"
                  alt="当社が開発・運営するRunNaviの実際の画面"
                  url="runnavi.aidial.jp"
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted py-20">
        <div className="container-wide">
          <SectionHeader label="Why BGM Works" title="当社に頼む理由" className="mb-14" />
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title}>
                <div className="h-full bg-background p-8">
                  <span className="font-numeric text-sm text-warm-accent">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold tracking-tight">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessGuarantee />

      <ProofLinks />

      <section className="border-b border-border bg-muted py-20">
        <div className="container-narrow">
          <SectionHeader
            label="Price guide"
            title="料金の目安"
            subtitle="ページ数・機能・写真素材の有無で変わります。まずはご相談ください。"
            className="mb-10"
          />
          <Card className="border-border">
            <CardContent className="divide-y divide-border p-0">
              {priceRows.map((r) => (
                <div key={r.label} className="flex items-center justify-between gap-4 px-7 py-5">
                  <div>
                    <p className="font-bold">{r.label}</p>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                  <p className="whitespace-nowrap font-numeric font-bold text-primary">{r.price}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">いまのサイト、無料で診断します。</h2>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            現在のホームページのURLを送っていただければ、30分の無料相談で
            「どこを直すと効果が出るか」を具体的にお伝えします。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="px-8">
            無料で相談する <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
