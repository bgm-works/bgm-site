import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Shield, TrendingUp, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "AI導入支援 — 地方中小企業・店舗向け",
  description:
    "「AIなんてうちには関係ない」——そう思っていた経営者ほど、導入後に驚かれます。月30時間の事務作業を、仕組みで自動化します。",
};

const problems = [
  "請求書・領収書の手入力に毎月10時間以上かかっている",
  "手作りのチラシが素人感満載で集客に繋がらない",
  "Excelの転記作業でミスが続いている",
  "人手不足で本業に集中できない",
  "「IT化したい」が何から始めればいいかわからない",
  "以前システムを入れたが誰も使わなくなった",
];

const solutions = [
  {
    icon: Clock,
    title: "書類作業の自動化",
    desc: "領収書・請求書・在庫データをスキャンするだけで自動集計。手入力ゼロへ。",
  },
  {
    icon: TrendingUp,
    title: "集客コンテンツの自動生成",
    desc: "AIが高品質なチラシ・SNS投稿・メルマガ文章を数分で生成。デザイナー不要。",
  },
  {
    icon: Wrench,
    title: "業務フローの自動化",
    desc: "Google Workspace / LINE / メール連携で「あの作業もう要らない」を次々と実現。",
  },
  {
    icon: Shield,
    title: "月額保守でずっと安心",
    desc: "「壊れたらどうしよう」を解消。AIの進化に合わせてアップデートし続けます。",
  },
];

const cases = [
  {
    business: "飲食店（ラーメン店）",
    before: "手書き発注→Excelへの転記を毎日30分",
    after: "LINEで写真を送るだけで自動集計。月15時間削減。",
  },
  {
    business: "小売店",
    before: "手作りのチラシ作成に毎月3時間",
    after: "AIが5分でプロ品質のチラシを生成。",
  },
  {
    business: "士業（行政書士）",
    before: "依頼受付メール→台帳入力に毎回15分",
    after: "メール到着→自動で台帳に登録。返信文も自動下書き。",
  },
];

const pricing = [
  {
    name: "スタート",
    price: "無料",
    desc: "まずここから",
    features: ["30分オンラインヒアリング", "業務の棚卸しシート提供", "自動化できる箇所の特定", "概算費用のご提示"],
    cta: "無料ヒアリングを予約",
    href: "/contact",
    highlight: false,
  },
  {
    name: "導入",
    price: "10万〜30万円",
    desc: "一括（業務規模による）",
    features: ["業務フロー詳細ヒアリング", "自動化システムの構築", "操作マニュアル作成", "導入後2週間のフォロー"],
    cta: "相談してみる",
    href: "/contact",
    highlight: true,
  },
  {
    name: "保守",
    price: "月額1万〜3万円",
    desc: "導入後の安心パック",
    features: ["月1回の稼働チェック", "軽微な仕様変更対応", "AIアップデートへの追従", "優先サポート"],
    cta: "詳しく聞く",
    href: "/contact",
    highlight: false,
  },
];

export default function AiImplementationPage() {
  return (
    <>
      <section className="bg-accent/70 py-20">
        <div className="container-narrow">
          <Badge className="rounded-full px-4 py-1.5 text-xs tracking-[0.2em]">SERVICE 01</Badge>
          <h1 className="mt-4 text-[clamp(2rem,6vw,3.6rem)] font-bold leading-tight">AI導入支援</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            「AIなんてうちには関係ない」——そう思っていた経営者ほど、導入後に驚かれます。月30時間の事務作業を、<strong>仕組みで</strong>自動化します。
          </p>
          <Button render={<Link href="/contact" />} className="mt-8 rounded-full px-7 py-4">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <SectionHeader label="CURRENT ISSUES" title="こんなお困りごと、ありませんか？" align="center" className="mb-10" />
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
          <SectionHeader label="SOLUTIONS" title="BGMで、こう変わります" align="center" className="mb-10" />
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

      {/* Cases */}
      <section className="py-20">
        <div className="container-wide">
          <SectionHeader label="CASE STUDY" title="こんな変化が起きています" align="center" className="mb-10" />
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
                      <p className="mb-1 text-xs font-medium text-primary">BGM</p>
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
          <SectionHeader label="PRICING" title="料金" subtitle="まずは無料ヒアリングから。費用は一切かかりません。" align="center" className="mb-10" />
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
          <h2 className="section-title mb-4">まずは気軽に、30分話してみませんか？</h2>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            「うちで本当に使えるの？」——その疑問、一緒に確かめましょう。<br />
            話すだけで、やるべきことが見えてきます。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full px-8">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
