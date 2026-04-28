import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, ChartNoAxesCombined, Code, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { StatCounter } from "@/components/shared/stat-counter";
import { Reveal } from "@/components/shared/reveal";

const services = [
  {
    icon: Bot,
    label: "BUSINESS IMPROVEMENT",
    title: "業務改善支援",
    description:
      "事務作業、在庫管理、販促づくり——繰り返しの業務を見直し、利益につながる時間を経営者と現場に戻します。",
    href: "/services/ai-implementation",
  },
  {
    icon: Palette,
    label: "ATELIER BOOST",
    title: "アトリエboost",
    description:
      "受注管理、在庫、SNS投稿——制作以外の作業を減らし、あなたは「創る」ことに集中できるアトリエへ。",
    href: "/services/atelier-boost",
  },
  {
    icon: Code,
    label: "DEVELOPMENT",
    title: "受託開発",
    description:
      "17年のSE経験と効率的な開発体制で、要件定義から本番運用まで一気通貫。事業成長に直結するプロダクトを短納期で届けます。",
    href: "/services/development",
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

const works = [
  { tag: "工務店 / 日報・発注", title: "日報・発注整理フロー", desc: "現場から届く写真・音声を、翌朝の確認しやすい日報下書きと発注メモへ整えます。" },
  { tag: "士業 / 受付管理", title: "依頼受付・台帳整理", desc: "受付メールを案件台帳と返信確認につなげ、転記時間と返信漏れを減らします。" },
  { tag: "クリエイター / 受注・在庫", title: "アトリエ業務整理", desc: "注文・在庫・発送準備・発信を整理し、制作時間と販売機会を増やします。" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-[var(--hero-grad-start)] via-background to-[var(--hero-grad-end)] py-24">
        <div aria-hidden className="bg-grid-pattern absolute inset-0 opacity-40" />
        <div aria-hidden className="absolute -left-24 top-0 h-60 w-60 rounded-full bg-accent/70 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-secondary blur-3xl" />
        <div className="container-wide relative grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h1 className="text-balance text-[clamp(2.6rem,7vw,4.6rem)] font-bold leading-tight">
              がんばりを、<br />
              仕組みに変えよう。
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              毎日がんばっているのに、もっと伸ばしたい。その想いを、業務設計と実装力で
              「成長の仕組み」に変えます。経営の現場に寄り添いながら、
              実装と運用までを一気通貫で伴走します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button render={<Link href="/contact" />} size="lg" className="rounded-full px-6">
                無料ヒアリングを予約する <ArrowRight />
              </Button>
              <Button variant="outline" render={<Link href="/#services" />} size="lg" className="rounded-full px-6">
                サービスを見る
              </Button>
            </div>
          </Reveal>

          <Reveal className="delay-100">
            <Card className="overflow-hidden border-border/70 shadow-lg">
              <CardHeader className="bg-muted/40">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Sparkles className="size-4 text-primary" />
                  Growth Architecture
                </CardTitle>
                <CardDescription>課題の発見から改善ループまで可視化します</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                {[
                  "現場ヒアリングでボトルネックを構造化",
                  "現場の業務フローに合わせて小さく実装",
                  "運用データを基に継続改善を実行",
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-border/80 p-4">
                    <span className="font-mono text-xs text-primary">0{index + 1}</span>
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/*
        BGMWorks ブランド v1.0 (2026-04-21):
        - 背景: 旧 hard-coded ダークティール (#14383d 系) → Primary Dark (#08545A) のフラット 1 色。
        - section-eyebrow ("ABOUT BGM") は default で primary 色 (#0E8B8B) になり、
          暗背景上で同系色のため埋もれていた → テラコッタ (#D89060) で上書き。
        - section-subtitle / section-title も白系で明示的に上書き。
      */}
      <section className="bg-[#08545A] py-16">
        <div className="container-wide">
          <SectionHeader
            label="ABOUT BGM"
            title="数字で見るBGM"
            subtitle="現場で積み重ねてきた経験・資格・成果を、BGMの実績として分かりやすく可視化しています。"
            className="mb-8 [&_.section-eyebrow]:text-[#D89060] [&_.section-subtitle]:text-white/85 [&_.section-title]:text-white"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              label="OUR PHILOSOPHY"
              title="がんばっている、あなたへ。"
              subtitle="BGMは「作って終わり」ではなく、仕組みを育て続ける伴走型のパートナーです。"
              align="center"
            />
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-4xl">
            <Card className="border-border/70 bg-card/90 shadow-sm">
              <CardContent className="space-y-5 p-8 text-muted-foreground">
                <p>
                  「もう少し売上を伸ばしたい。でも、自分の手が足りない。」
                  「何から手をつければいいか分からない。」
                </p>
                <p>
                  その忙しさは、事業を本気で良くしたいという証拠です。成長する事業には、
                  必ず「成長の仕組み」があります。それは才能でも運でもなく、設計できるものです。
                </p>
                <p className="font-medium text-foreground">
                  あなたのがんばりを、仕組みに変える。そしてその仕組みを一緒に育てる。
                  それがBGMの約束です。
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section id="services" className="bg-muted/35 py-24">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              label="OUR SERVICES"
              title="3つのサービス"
              subtitle="事業フェーズと課題に合わせて、最適な仕組みを設計します。"
              align="center"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title}>
                  <Card className="group h-full border-border/80 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit text-[10px] tracking-[0.2em]">
                        {service.label}
                      </Badge>
                      <div className="mt-4 flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="pt-3">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <Button variant="ghost" render={<Link href={service.href} />} className="px-0 text-primary">
                        詳しく見る <ArrowRight />
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              label="HOW WE WORK"
              title="はじめ方"
              subtitle="4ステップで、あなたの事業に成長の仕組みが生まれます。"
              align="center"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((item) => (
              <Reveal key={item.step}>
                <Card className="relative h-full border-border/80">
                  <CardHeader>
                    <p className="font-mono text-4xl font-semibold text-muted">#{item.step}</p>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">{item.desc}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/35 py-24">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              label="WORKS"
              title="実績・構築例"
              subtitle="お客様の時間削減・確認漏れ削減・売上機会づくりにつながる改善例を紹介します。"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {works.map((work) => (
              <Reveal key={work.title}>
                <Card className="group overflow-hidden border-border/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-36 bg-gradient-to-br from-accent to-secondary p-4">
                    <div className="flex h-full items-end rounded-lg border border-white/40 bg-white/25 p-3">
                      <p className="text-xs font-medium tracking-[0.18em] text-primary">{work.tag}</p>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{work.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{work.desc}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" render={<Link href="/works" />} className="rounded-full px-6">
              すべての実績を見る <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              label="WHY BGM"
              title="BGMが選ばれる理由"
              subtitle="見つける・作る・育てるの3つを、ひとつのチームで実装します。"
              align="center"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BrainCircuit,
                title: "事業の詰まりを構造で捉える",
                text: "表面的なツール導入ではなく、売上が伸びない原因を分解して最短で改善します。",
              },
              {
                icon: Code,
                title: "小さく作って早く検証",
                text: "最初から大きく作らず、成果が出る単位で実装。投資対効果を可視化します。",
              },
              {
                icon: ChartNoAxesCombined,
                title: "運用フェーズまで伴走",
                text: "導入後もモニタリングと改善を継続し、仕組みが止まらない状態を作ります。",
              },
            ].map((reason) => {
              const Icon = reason.icon;
              return (
                <Reveal key={reason.title}>
                  <Card className="h-full border-border/80">
                    <CardHeader>
                      <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="pt-3 text-xl">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{reason.text}</CardDescription>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <Reveal>
            <Card className="overflow-hidden border-border shadow-lg">
              <CardContent className="bg-gradient-to-r from-primary/95 to-[var(--cool-accent)] p-10 text-center text-white">
                <h2 className="text-3xl font-bold">まずは気軽に、話してみてください。</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
                  「何から手をつければいいか分からない」でも大丈夫です。30分の無料ヒアリングで、
                  あなたの事業の「がんばりどころ」を一緒に整理します。
                </p>
                <div className="mt-7">
                  <Button
                    render={<Link href="/contact" />}
                    size="lg"
                    variant="secondary"
                    className="rounded-full px-7 text-primary"
                  >
                    無料ヒアリングを予約する <ArrowRight />
                  </Button>
                </div>
                <p className="mt-4 text-xs text-white/70">返信は24時間以内。費用は一切かかりません。</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
