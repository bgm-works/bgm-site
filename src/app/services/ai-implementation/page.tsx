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
  title: "業務改善支援｜地方中小企業・店舗向け",
  description:
    "手入力・転記・確認待ちを減らし、経営者と現場の時間を取り戻す業務改善支援。小さく始めて、利益・時間・品質に効く仕組みを作ります。",
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
    title: "書類作業の時間を削減",
    desc: "領収書・請求書・在庫データの入力や転記を減らし、確認だけで済む流れへ。月末作業を軽くします。",
  },
  {
    title: "集客の打ち手を増やす",
    desc: "チラシ・SNS・メルマガの作成時間を短くし、販促の頻度と見た目の品質を安定させます。",
  },
  {
    title: "業務フローを整える",
    desc: "Google Workspace / LINE / メール連携で、二重入力・確認漏れ・差し戻しを減らします。",
  },
  {
    title: "月額保守でずっと安心",
    desc: "「壊れたらどうしよう」を解消。現場の変化に合わせて、手順と仕組みを更新し続けます。",
  },
];

const cases = [
  {
    business: "飲食店（ラーメン店）",
    before: "手書き発注→Excelへの転記を毎日30分",
    after: "発注確認が1日5分に。1日25分、月25日の営業なら、およそ10時間を仕込みと接客に戻せる計算です。",
  },
  {
    business: "小売店",
    before: "手作りのチラシ作成に毎月3時間",
    after: "販促案の作成を5分の確認作業に。発信頻度を上げ、来店機会を増やす。",
  },
  {
    business: "士業（行政書士）",
    before: "依頼受付メール→台帳入力に毎回15分",
    after: "受付から台帳登録までを即日化。返信漏れを減らし、案件対応の品質を安定させる。",
  },
];

const pricing = [
  {
    name: "スタート",
    price: "無料",
    desc: "まずここから",
    features: ["30分オンラインヒアリング", "業務の棚卸しシート提供", "改善効果が出やすい箇所の特定", "概算費用のご提示"],
    cta: "無料ヒアリングを予約",
    href: "/contact",
    highlight: false,
  },
  {
    name: "導入",
    price: "10万〜30万円",
    desc: "一括（業務規模による）",
    features: ["業務フロー詳細ヒアリング", "改善する手順と仕組みの構築", "操作マニュアル作成", "導入後2週間のフォロー"],
    cta: "相談してみる",
    href: "/contact",
    highlight: true,
  },
  {
    name: "保守",
    price: "月額1万〜3万円",
    desc: "導入後の安心パック",
    features: ["月1回の稼働チェック", "軽微な仕様変更対応", "業務変化に合わせた改善", "優先サポート"],
    cta: "詳しく聞く",
    href: "/contact",
    highlight: false,
  },
];

export default function AiImplementationPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="container-wide py-20 md:py-24">
          <p className="section-eyebrow uppercase">Service 02 ／ Business Improvement</p>
          <h1 className="mt-6 text-[clamp(2rem,6vw,3.6rem)] font-bold leading-tight tracking-tight">
            業務改善支援
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            大事なのは、どんな技術を使うかではなく、<strong className="font-semibold text-foreground">利益に効く時間</strong>をどれだけ取り戻せるか。
            手入力・転記・確認待ちを減らし、経営者と現場が本来の仕事に集中できる流れを作ります。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="mt-9 px-7">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="border-b border-border py-20">
        <div className="container-wide">
          <SectionHeader label="Current issues" title="こんなお困りごと、ありませんか？" className="mb-12" />
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

      <section className="border-b border-border bg-muted/30 py-20">
        <div className="container-wide">
          <SectionHeader label="Solutions" title="事業のQCDを整えます" className="mb-14" />
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
            title="利益と時間に効く変化を作ります"
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

      <section className="border-b border-border bg-muted/30 py-20">
        <div className="container-wide">
          <SectionHeader label="Pricing" title="料金" subtitle="まずは無料ヒアリングから。費用は一切かかりません。" className="mb-12" />
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
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            補助金の活用をお考えの場合は、対象になりうる制度の調査と実質負担額の試算までお手伝いします。申請書類の作成代行は行っていません。
          </p>
        </div>
      </section>

      <ProcessGuarantee />

      <section className="bg-muted/30 py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">まずは気軽に、30分話してみませんか？</h2>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            「うちで本当に使えるの？」その疑問、一緒に確かめましょう。<br />
            話すだけで、やるべきことが見えてきます。
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
