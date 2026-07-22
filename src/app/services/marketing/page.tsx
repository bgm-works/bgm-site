import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { ProcessGuarantee } from "@/components/shared/process-guarantee";
import { ProofLinks } from "@/components/shared/proof-links";

export const metadata: Metadata = {
  title: "AI集客・売上アップ支援｜地方中小企業・店舗向け",
  description:
    "目的を入れるだけのAIマーケプラン作成、SNS運用、動画→投稿の自動展開。「攻め」をAIで仕組み化し、集客と売上を伸ばす伴走支援。",
};

const problems = [
  "発信したいが、何を投稿すればいいか分からない",
  "SNSが続かない・更新が止まってしまう",
  "広告に出すお金も時間もかけられない",
  "動画は撮っているが、活かしきれていない",
  "集客の打ち手が、いつも思いつきで場当たり的",
  "「攻めたいけど人手がない」状態が続いている",
];

const solutions = [
  {
    title: "AIマーケプラン生成",
    desc: "事業の目的を入れるだけで、すぐ動ける集客プラン（重点施策・30日アクション・KPI）をAIが作成。迷いを消します。",
  },
  {
    title: "SNS運用の半自動化",
    desc: "投稿案づくり・分析・改善のループをAIで回し、止まらない発信を実現。手が回らない経営者の代わりに攻め続けます。",
  },
  {
    title: "動画→投稿の自動展開",
    desc: "YouTubeや撮影済みの動画を、X・Instagram・各SNSの投稿へ自動で展開。1つの素材を最大限に活かします。",
  },
  {
    title: "数字で見る集客改善",
    desc: "施策ごとの反応をKPIで可視化。効いた打ち手に寄せ、売上につながる集客へ磨き込みます。",
  },
];

const cases = [
  {
    business: "カフェ・飲食店",
    before: "Instagramは気が向いた時だけ・反応もまばら",
    after: "週次の投稿プランをAIが用意。発信頻度と来店導線が安定し、平日昼の集客を底上げ。",
  },
  {
    business: "観光・宿泊",
    before: "魅力はあるのに発信が追いつかず認知が広がらない",
    after: "撮影済み動画を各SNS投稿へ自動展開。少ない手間で露出を増やし、予約問い合わせを増やす。",
  },
  {
    business: "小売・サービス店",
    before: "集客の打ち手が場当たりで効果が読めない",
    after: "目的別のマーケプランで施策を整理。KPIで効果を見ながら、勝ち筋に投資を寄せる。",
  },
];

const pricing = [
  {
    name: "スタート",
    price: "無料",
    desc: "まずここから",
    features: ["30分オンラインヒアリング", "集客課題の棚卸し", "AIマーケプランのサンプル提示", "概算費用のご提示"],
    cta: "無料ヒアリングを予約",
    href: "/contact",
    highlight: false,
  },
  {
    name: "導入＋運用ライト",
    price: "初期5万〜 + 月1万〜",
    desc: "小さく攻めを始める",
    features: ["AIマーケプラン初期構築", "SNS投稿の型づくり", "月次の改善Tips", "1機能から開始"],
    cta: "相談してみる",
    href: "/contact",
    highlight: true,
  },
  {
    name: "運用グロース",
    price: "月額5万〜8万円",
    desc: "攻めの運用代行・伴走",
    features: ["SNS運用の運用代行", "動画→投稿の自動展開", "月2回のKPI伴走", "施策改善の継続"],
    cta: "詳しく聞く",
    href: "/contact",
    highlight: false,
  },
];

export default function MarketingPage() {
  return (
    <>
      <section className="border-b border-border bg-muted">
        <div className="container-wide py-24 md:py-32">
          <p className="section-eyebrow uppercase">Service 04 ／ AI Marketing</p>
          <h1 className="display-lg mt-6">AI集客・売上アップ支援</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            守り（効率化）だけでなく、<strong className="font-semibold text-foreground">攻め（集客・売上）</strong>もBGM Worksの仕事です。
            「何を発信すればいいか」「続かない」「人手がない」を、AIの仕組みで解決し、
            お客様を増やす流れを一緒に作ります。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="mt-9 px-7">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="border-b border-border py-20">
        <div className="container-wide">
          <SectionHeader label="Current issues" title="集客で、こんなお困りごと、ありませんか？" className="mb-12" />
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
          <p className="mt-8 text-sm text-muted-foreground">
            1つでも当てはまったら、<strong className="font-semibold text-primary">BGM Works</strong>にご相談ください。
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted py-20">
        <div className="container-wide">
          <SectionHeader label="Solutions" title="AIで「攻め」を仕組みに変えます" className="mb-14" />
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.title}>
                <div className="h-full bg-background p-8">
                  <span className="font-numeric text-sm text-warm-accent">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20">
        <div className="container-wide">
          <SectionHeader
            label="Model case"
            title="集客と売上に効く変化を作ります"
            subtitle="以下は実案件ではなく、よくいただくご相談を当社の進め方に当てはめた想定モデルです。効果は業務の状況によって変わります。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <Reveal key={c.business}>
                <Card className="h-full border-border">
                  <CardHeader className="border-b border-border">
                    <CardTitle className="text-base">{c.business}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-6">
                    <div>
                      <p className="mb-1 text-xs font-medium text-muted-foreground">導入前</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{c.before}</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="mb-1 text-xs font-medium text-primary">改善後</p>
                      <p className="text-sm font-medium leading-relaxed">{c.after}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProofLinks />

      <section className="border-b border-border bg-muted py-20">
        <div className="container-wide">
          <SectionHeader label="Pricing" title="料金" subtitle="まずは無料ヒアリングから。小さく攻めを始められます。" className="mb-12" />
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {pricing.map((p) => (
              <Reveal key={p.name}>
                <Card className={`flex h-full flex-col border-border ${p.highlight ? "border-primary ring-1 ring-primary" : ""}`}>
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.name}</p>
                      {p.highlight ? (
                        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
                          おすすめ
                        </span>
                      ) : null}
                    </div>
                    <CardTitle className="mt-2 text-2xl">{p.price}</CardTitle>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <ul className="flex-1 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      render={<Link href={p.href} />}
                      variant={p.highlight ? "default" : "outline"}
                      className="mt-7"
                    >
                      {p.cta}
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessGuarantee />

      <section className="bg-muted py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">「攻め」を、AIと一緒に始めませんか？</h2>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            発信が止まる、打ち手が思いつかない。そのループから抜け出しましょう。<br />
            30分話すだけで、あなたの集客の「次の一手」が見えてきます。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="px-8">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            先に概算だけ知りたい方は、2問の
            <a
              href="https://shindan.aidial.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              無料AI診断
            </a>
            で目安を確認できます。
          </p>
        </div>
      </section>
    </>
  );
}
