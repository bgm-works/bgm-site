import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Brush, MessageSquare, BarChart3, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "アトリエboost — 個人クリエイター向けバックオフィス改善",
  description:
    "受注管理、在庫、SNS投稿、顧客対応に奪われる時間を減らし、制作時間・販売機会・顧客対応品質を取り戻すアトリエ改善サービス。",
};

const pains = [
  { label: "受注管理", desc: "注文が来るたびに手動でスプレッドシートに記入" },
  { label: "在庫管理", desc: "どの作品が何個残っているか把握するのが大変" },
  { label: "SNS投稿", desc: "新作を作っても投稿する余裕がなくて集客できない" },
  { label: "顧客対応", desc: "メッセージの返信に追われて制作時間が取れない" },
];

const supportAreas = [
  {
    icon: Package,
    name: "受注・在庫の整理",
    role: "受注・在庫管理",
    desc: "注文・在庫・発送準備をひと目で追える状態にし、確認漏れや売り越しを減らします。",
  },
  {
    icon: MessageSquare,
    name: "顧客対応の品質安定",
    role: "問い合わせ・DM対応",
    desc: "よくある質問や注文連絡の返信を迷わず返せるようにし、対応の遅れと返信漏れを減らします。",
  },
  {
    icon: Brush,
    name: "販売機会を増やす発信",
    role: "SNS・コンテンツ",
    desc: "新作紹介や制作背景の発信を続けやすくし、投稿頻度と見込み客との接点を増やします。",
  },
  {
    icon: BarChart3,
    name: "次の制作判断を支援",
    role: "売上・データ分析",
    desc: "何が売れているか、どのタイミングで動くかを整理し、次に作る作品や在庫量を判断しやすくします。",
  },
];

const flow = [
  { step: "01", title: "現状ヒアリング", desc: "今どんな作業に時間を取られているかを全部聞かせてください。" },
  { step: "02", title: "改善範囲の設計", desc: "制作時間・販売機会・顧客対応に効く順番で、改善する業務を絞り込みます。" },
  { step: "03", title: "構築・テスト", desc: "2〜4週間で動く状態に。実際に使いながら一緒に調整します。" },
  { step: "04", title: "定着＋保守", desc: "日々の制作を止めずに使い続けられるよう、運用しながら改善します。" },
];

export default function AtelierBoostPage() {
  return (
    <>
      <section className="bg-[color:var(--warm-accent)]/15 py-20">
        <div className="container-narrow">
          <Badge className="rounded-full bg-[var(--warm-accent)] px-4 py-1.5 text-xs tracking-[0.2em] text-white">SERVICE 02</Badge>
          <h1 className="mt-4 text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight">アトリエboost</h1>
          <p className="mb-5 mt-3 text-xl font-medium text-[var(--warm-accent)]">制作時間と販売機会を、取り戻す。</p>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            受注管理、在庫、SNS、顧客対応。制作以外の作業を軽くして、あなたが「創ること」と「売ること」に集中できるアトリエへ。
          </p>
          <Button render={<Link href="/contact" />} className="mt-8 rounded-full bg-[var(--warm-accent)] px-7 py-4 text-white hover:bg-[color:var(--warm-accent)]/90">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <SectionHeader label="PAIN POINTS" title="あなたの時間を奪っているのは" subtitle="「創ること」ではなく、「それ以外」のはずです。" align="center" className="mb-10" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pains.map((p) => (
              <Reveal key={p.label}>
                <Card className="h-full border-border/80">
                  <CardContent className="p-6">
                    <p className="mb-2 text-base font-bold text-destructive">{p.label}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/35 py-20">
        <div className="container-wide">
          <SectionHeader label="IMPROVEMENT AREAS" title="制作と販売を止める作業を減らします" subtitle="道具の話ではなく、制作時間・販売機会・顧客対応品質に効く順番で整えます。" align="center" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {supportAreas.map((e) => {
              const Icon = e.icon;
              return (
                <Reveal key={e.name}>
                  <Card className="h-full border-border/80">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--warm-accent)]/15">
                          <Icon size={22} className="text-[var(--warm-accent)]" />
                        </div>
                        <div>
                          <p className="mb-1 text-xs text-muted-foreground">{e.role}</p>
                          <CardTitle className="text-lg">{e.name}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{e.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20">
        <div className="container-narrow">
          <SectionHeader label="BEFORE / AFTER" title="導入前と後" align="center" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-border/80">
              <CardHeader className="bg-muted/35">
                <CardTitle className="text-base text-muted-foreground">導入前</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    "制作時間の40%がバックオフィス作業",
                    "深夜に注文が来ても翌朝まで未対応",
                    "新作を作ってもSNSに投稿できない",
                    "何が売れているかわからない",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-0.5 text-destructive">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-[var(--warm-accent)]">
              <CardHeader className="bg-[var(--warm-accent)] text-white">
                <CardTitle className="text-base">アトリエboost導入後</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    "制作に集中できる時間が月50時間増加",
                    "注文・在庫・発送準備が一覧化され、対応漏れを削減",
                    "新作告知の頻度が上がり、販売機会を増やせる",
                    "売れ筋と在庫の動きから、次の制作判断がしやすくなる",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-[var(--warm-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/35 py-20">
        <div className="container-wide">
          <SectionHeader label="FLOW" title="導入の流れ" align="center" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((f) => (
              <Reveal key={f.step}>
                <Card className="h-full border-border/80">
                  <CardHeader>
                    <p className="font-mono text-4xl text-muted">#{f.step}</p>
                    <CardTitle className="text-base">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{f.desc}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-narrow">
          <SectionHeader label="PRICE GUIDE" title="料金の目安" subtitle="規模・業務量によって異なります。まずはご相談ください。" align="center" className="mb-8" />
          <Card className="overflow-hidden border-border/80">
            <CardContent className="divide-y divide-border p-0">
              {[
                { label: "無料ヒアリング", price: "¥0", desc: "現状の課題整理・改善効果が出やすい箇所の特定" },
                { label: "初期構築", price: "20万〜50万円", desc: "受注・在庫・発信まわりの仕組み化とマニュアル作成" },
                { label: "月額保守", price: "2万〜5万円/月", desc: "稼働監視・仕様変更・業務変化に合わせた改善" },
              ].map((r) => (
                <div key={r.label} className="flex items-center justify-between gap-4 px-7 py-5">
                  <div>
                    <p className="font-bold">{r.label}</p>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                  <p className="whitespace-nowrap font-bold text-[var(--warm-accent)]">{r.price}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-[color:var(--warm-accent)]/12 py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">あなたのアトリエを、止まらないアトリエへ。</h2>
          <p className="mb-8 text-muted-foreground">どんな作業が大変か、30分話すだけで見えてきます。</p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full bg-[var(--warm-accent)] px-8 text-white hover:bg-[color:var(--warm-accent)]/90">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
