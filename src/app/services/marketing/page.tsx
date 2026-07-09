import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Share2, Target, TrendingUp, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "AI集客・売上アップ支援 — 地方中小企業・店舗向け",
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
    icon: Target,
    title: "AIマーケプラン生成",
    desc: "事業の目的を入れるだけで、すぐ動ける集客プラン（重点施策・30日アクション・KPI）をAIが作成。迷いを消します。",
  },
  {
    icon: Share2,
    title: "SNS運用の半自動化",
    desc: "投稿案づくり・分析・改善のループをAIで回し、止まらない発信を実現。手が回らない経営者の代わりに攻め続けます。",
  },
  {
    icon: Video,
    title: "動画→投稿の自動展開",
    desc: "YouTubeや撮影済みの動画を、X・Instagram・各SNSの投稿へ自動で展開。1つの素材を最大限に活かします。",
  },
  {
    icon: TrendingUp,
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
      <section className="bg-accent/70 py-20">
        <div className="container-narrow">
          <Badge className="rounded-full px-4 py-1.5 text-xs tracking-[0.2em]">SERVICE 04</Badge>
          <h1 className="mt-4 text-[clamp(2rem,6vw,3.6rem)] font-bold leading-tight">AI集客・売上アップ支援</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            守り（効率化）だけでなく、<strong>攻め（集客・売上）</strong>もBGMの仕事です。
            「何を発信すればいいか」「続かない」「人手がない」を、AIの仕組みで解決し、
            お客様を増やす流れを一緒に作ります。
          </p>
          <Button render={<Link href="/contact" />} className="mt-8 rounded-full px-7 py-4">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <SectionHeader label="CURRENT ISSUES" title="集客で、こんなお困りごと、ありませんか？" align="center" className="mb-10" />
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <Reveal key={p}>
                <Card className="h-full border-border/80">
                  <CardContent className="flex items-start gap-3 p-5">
                    <span className="mt-0.5 flex-shrink-0 text-destructive">✕</span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            1つでも当てはまったら、<strong className="text-primary">BGM</strong>にご相談ください。
          </p>
        </div>
      </section>

      <section className="bg-muted/35 py-20">
        <div className="container-wide">
          <SectionHeader label="SOLUTIONS" title="AIで「攻め」を仕組みに変えます" align="center" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title}>
                  <Card className="h-full border-border/80">
                    <CardHeader>
                      <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                        <Icon size={20} />
                      </div>
                      <CardTitle className="text-lg">{s.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{s.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <SectionHeader label="CASE STUDY" title="集客と売上に効く変化を作ります" align="center" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <Reveal key={c.business}>
                <Card className="overflow-hidden border-border/80">
                  <CardHeader className="bg-muted/45">
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

      <section className="bg-muted/35 py-20">
        <div className="container-wide">
          <SectionHeader label="PRICING" title="料金" subtitle="まずは無料ヒアリングから。小さく攻めを始められます。" align="center" className="mb-10" />
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {pricing.map((p) => (
              <Reveal key={p.name}>
                <Card className={`flex h-full flex-col border-border/80 ${p.highlight ? "bg-primary text-white" : ""}`}>
                  <CardHeader>
                    <p className={`text-xs uppercase tracking-[0.2em] ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>{p.name}</p>
                    <CardTitle className={p.highlight ? "text-white" : ""}>{p.price}</CardTitle>
                    <p className={`text-xs ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <ul className="flex-1 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`mt-0.5 size-4 flex-shrink-0 ${p.highlight ? "text-white/80" : "text-primary"}`} />
                          <span className={p.highlight ? "text-white/95" : "text-muted-foreground"}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      render={<Link href={p.href} />}
                      variant={p.highlight ? "secondary" : "outline"}
                      className="mt-7 rounded-full"
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

      <section className="py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">「攻め」を、AIと一緒に始めませんか？</h2>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            発信が止まる・打ち手が思いつかない——そのループから抜け出しましょう。<br />
            30分話すだけで、あなたの集客の「次の一手」が見えてきます。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full px-8">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
