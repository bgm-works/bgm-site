import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { ProcessGuarantee } from "@/components/shared/process-guarantee";
import { ProofLinks } from "@/components/shared/proof-links";

export const metadata: Metadata = {
  title: "アトリエboost｜個人クリエイター向けバックオフィス改善",
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
    name: "受注・在庫の整理",
    role: "受注・在庫管理",
    desc: "注文・在庫・発送準備をひと目で追える状態にし、確認漏れや売り越しを減らします。",
  },
  {
    name: "顧客対応の品質安定",
    role: "問い合わせ・DM対応",
    desc: "よくある質問や注文連絡の返信を迷わず返せるようにし、対応の遅れと返信漏れを減らします。",
  },
  {
    name: "販売機会を増やす発信",
    role: "SNS・コンテンツ",
    desc: "新作紹介や制作背景の発信を続けやすくし、投稿頻度と見込み客との接点を増やします。",
  },
  {
    name: "次の制作判断を支援",
    role: "売上・データ分析",
    desc: "何が売れているか、どのタイミングで動くかを整理し、次に作る作品や在庫量を判断しやすくします。",
  },
];

const before = [
  "制作時間の40%がバックオフィス作業",
  "深夜に注文が来ても翌朝まで未対応",
  "新作を作ってもSNSに投稿できない",
  "何が売れているかわからない",
];

const after = [
  "制作以外の作業を圧縮（1日2時間の事務が30分になれば、月30時間以上を制作に戻せる計算）",
  "注文・在庫・発送準備が一覧化され、対応漏れを削減",
  "新作告知の頻度が上がり、販売機会を増やせる",
  "売れ筋と在庫の動きから、次の制作判断がしやすくなる",
];

const priceRows = [
  { label: "無料ヒアリング", price: "¥0", desc: "現状の課題整理・改善効果が出やすい箇所の特定" },
  { label: "初期構築", price: "20万〜50万円", desc: "受注・在庫・発信まわりの仕組み化とマニュアル作成" },
  { label: "月額保守", price: "2万〜5万円/月", desc: "稼働監視・仕様変更・業務変化に合わせた改善" },
];

export default function AtelierBoostPage() {
  return (
    <>
      <section className="border-b border-border bg-warm-accent/10">
        <div className="container-wide py-20 md:py-24">
          <p className="section-eyebrow uppercase">Service 04 ／ Atelier Boost</p>
          <h1 className="mt-6 text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-tight">
            アトリエboost
          </h1>
          <p className="mt-3 text-xl font-medium text-warm-accent">制作時間と販売機会を、取り戻す。</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            受注管理、在庫、SNS、顧客対応。制作以外の作業を軽くして、あなたが「創ること」と「売ること」に集中できるアトリエへ。
          </p>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="mt-9 bg-warm-accent px-7 text-white hover:bg-warm-accent/90"
          >
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="border-b border-border py-20">
        <div className="container-wide">
          <SectionHeader
            label="Pain points"
            title="あなたの時間を奪っているのは"
            subtitle="「創ること」ではなく、「それ以外」のはずです。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-x-10 gap-y-5 border-t border-border pt-8 sm:grid-cols-2">
            {pains.map((p) => (
              <Reveal key={p.label}>
                <div className="border-b border-border pb-5">
                  <p className="text-base font-bold text-foreground">{p.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-20">
        <div className="container-wide">
          <SectionHeader
            label="Improvement areas"
            title="制作と販売を止める作業を減らします"
            subtitle="道具の話ではなく、制作時間・販売機会・顧客対応品質に効く順番で整えます。"
            className="mb-14"
          />
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {supportAreas.map((e, i) => (
              <Reveal key={e.name}>
                <div className="h-full bg-background p-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-numeric text-sm text-warm-accent">0{i + 1}</span>
                    <p className="text-xs text-muted-foreground">{e.role}</p>
                  </div>
                  <h3 className="mt-3 text-lg font-bold tracking-tight">{e.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="border-b border-border py-20">
        <div className="container-narrow">
          <SectionHeader
            label="Before / After"
            title="導入前と後"
            subtitle="以下は実案件ではなく、よくいただくご相談を当社の進め方に当てはめた想定モデルです。効果は業務の状況によって変わります。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="border-border">
              <div className="border-b border-border px-6 py-4">
                <p className="text-base font-bold text-muted-foreground">導入前</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {before.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-warm-accent ring-1 ring-warm-accent/40">
              <div className="border-b border-warm-accent/40 bg-warm-accent/10 px-6 py-4">
                <p className="text-base font-bold text-warm-accent">アトリエboost導入後</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {after.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-warm-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ProcessGuarantee className="border-b border-border bg-muted/30" />

      <ProofLinks />

      <section className="border-b border-border py-20">
        <div className="container-narrow">
          <SectionHeader label="Price guide" title="料金の目安" subtitle="規模・業務量によって異なります。まずはご相談ください。" className="mb-10" />
          <Card className="border-border">
            <CardContent className="divide-y divide-border p-0">
              {priceRows.map((r) => (
                <div key={r.label} className="flex items-center justify-between gap-4 px-7 py-5">
                  <div>
                    <p className="font-bold">{r.label}</p>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                  <p className="whitespace-nowrap font-numeric font-bold text-warm-accent">{r.price}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-warm-accent/10 py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">あなたのアトリエを、止まらないアトリエへ。</h2>
          <p className="mb-8 text-muted-foreground">どんな作業が大変か、30分話すだけで見えてきます。</p>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="bg-warm-accent px-8 text-white hover:bg-warm-accent/90"
          >
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
