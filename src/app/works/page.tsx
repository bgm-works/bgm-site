import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "実績・構築例",
  description:
    "BGM の実績・構築例。工務店の日報・発注整理、依頼受付の台帳化、アトリエの受注・在庫整理など、事業の時間と品質に効く仕組みを紹介。",
};

const works = [
  {
    id: "construction-report-flow",
    number: "01",
    name: "工務店向け 日報・発注整理フロー",
    tagline: "現場はLINEで送るだけ。翌朝、日報と発注メモが整理されている。",
    tag: "工務店 / 日報・発注 / 業務改善",
    description:
      "現場から届く写真・音声・短文を、事務所で確認しやすい日報下書き・発注メモ・確認待ちリストへ整える構築例。新しい専用アプリを覚えさせず、帰宅後の事務作業と社長の確認時間を減らします。",
    points: [
      "現場の入力負担を増やさないLINE起点の運用",
      "翌朝の聞き直し・整理し直しを減らす確認フロー",
      "削減できた時間と現場の声を見ながら範囲を拡張",
    ],
    tech: ["LINE連携", "音声・写真整理", "業務フロー設計", "確認画面"],
    url: "#",
    available: false,
    color: "#E3F0F0",
    accentColor: "#1B6B6B",
  },
  {
    id: "request-ledger-flow",
    number: "02",
    name: "依頼受付・台帳整理フロー",
    tagline: "受付メールを、案件台帳と返信確認へつなげる。",
    tag: "士業 / 受付管理 / 返信品質",
    description:
      "問い合わせ・依頼受付メールを案件台帳に整理し、対応状況と返信確認を見える化する構築例。転記時間を減らし、返信漏れや対応遅れを防いで、案件対応の品質を安定させます。",
    points: [
      "受付内容・期限・対応状況を一覧で確認",
      "返信文の下書きと確認待ちを分けて管理",
      "属人化しやすい案件受付を標準化",
    ],
    tech: ["メール連携", "台帳設計", "返信テンプレート", "ステータス管理"],
    url: "#",
    available: false,
    color: "#E8EEF0",
    accentColor: "#3D5A6B",
  },
  {
    id: "o365-gcal-sync",
    number: "03",
    name: "Outlook予定の二重管理削減",
    tagline: "会社のOutlook予定が、毎朝Googleカレンダーに届く。",
    tag: "予定管理 / 業務改善 / GAS",
    description:
      "会社のOutlook（Microsoft 365）の予定を、外部カレンダーへ毎朝反映する実用ツール。複数カレンダーを別々に確認する手間を減らし、予定の見落としと二重管理の負担を軽くします。",
    points: [
      "Outlook予定を外部カレンダーへ毎朝反映",
      "差分更新対応（重複作成なし）",
      "予定の二重確認と見落としを減らす運用",
    ],
    tech: ["Node.js", "Google Calendar API", "Microsoft Graph API", "GAS"],
    url: "#",
    available: false,
    color: "#FBF0EA",
    accentColor: "#C06A3A",
  },
  {
    id: "atelier-backoffice-flow",
    number: "04",
    name: "アトリエ向け 受注・在庫整理",
    tagline: "制作以外の作業を減らし、創る時間と販売機会を増やす。",
    tag: "クリエイター / 受注・在庫 / 発信支援",
    description:
      "注文・在庫・発送準備・新作告知を整理する構築例。小規模なアトリエや個人クリエイターが、制作時間を削らずに顧客対応と販売活動を続けられる状態を作ります。",
    points: [
      "注文・在庫・発送準備を一覧化",
      "新作紹介や制作背景の発信を続けやすくする",
      "売れ筋と在庫の動きから次の制作判断を支援",
    ],
    tech: ["受注台帳", "在庫管理", "SNS下書き", "売上メモ"],
    url: "#",
    available: false,
    color: "#E3F0F0",
    accentColor: "#1B6B6B",
  },
  {
    id: "content-draft-flow",
    number: "05",
    name: "写真・音声からの記事下書き",
    tagline: "現場や体験の記録を、発信に使える文章へ整える。",
    tag: "コンテンツ化 / 音声入力 / 発信支援",
    description:
      "写真を見ながら話した内容を、記事やSNS下書きとして整理するプロトタイプ。観光・店舗・クリエイターなど、現場の魅力を発信したいが文章化に時間がかかる事業者向けの構築例です。",
    points: [
      "写真と音声メモから文章の素材を整理",
      "スマートフォンだけで記録から下書きまで完結",
      "発信頻度を上げるための文章化負担を軽減",
    ],
    tech: ["Next.js", "音声入力", "文章整理", "PWA"],
    url: "https://katatte.vercel.app",
    available: true,
    color: "#E8EEF0",
    accentColor: "#3D5A6B",
  },
];

export default function WorksPage() {
  return (
    <>
      <section className="bg-muted/35 py-20">
        <div className="container-narrow">
          <SectionHeader
            label="WORKS"
            title="実績・構築例"
            subtitle="お客様の時間削減・確認漏れ削減・売上機会づくりにつながる業務改善の型を紹介します。正式な導入実績は、公開許可をいただける範囲で今後追加します。"
            align="center"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide grid gap-7">
          {works.map((w) => (
            <Reveal key={w.id}>
              <Card className="overflow-hidden border-border/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="grid gap-0 md:grid-cols-[240px_1fr]">
                  <div
                    className="flex min-h-44 items-end bg-gradient-to-br p-5"
                    style={{ backgroundColor: w.color }}
                  >
                    <div className="rounded-xl border border-white/50 bg-white/30 p-3">
                      <p className="font-mono text-4xl font-semibold text-white/70">{w.number}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <Badge className="mb-3" style={{ backgroundColor: w.accentColor }}>
                            {w.tag}
                          </Badge>
                          <CardTitle className="text-2xl">{w.name}</CardTitle>
                          <p className="mt-1 text-sm font-medium" style={{ color: w.accentColor }}>
                            {w.tagline}
                          </p>
                        </div>
                        {w.available ? (
                          <Button
                            render={
                              <a href={w.url} target="_blank" rel="noopener noreferrer" />
                            }
                            className="rounded-full"
                            style={{ backgroundColor: w.accentColor }}
                          >
                            サイトを見る <ExternalLink size={13} />
                          </Button>
                        ) : null}
                      </div>
                    </CardHeader>
                    <CardContent className="mt-5 grid gap-6 p-0 md:grid-cols-3">
                      <div className="space-y-4 md:col-span-2">
                        <CardDescription className="leading-relaxed text-muted-foreground">{w.description}</CardDescription>
                        <ul className="space-y-2">
                          {w.points.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-0.5 flex-shrink-0" style={{ color: w.accentColor }}>✓</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">構成要素</p>
                        <div className="flex flex-wrap gap-2">
                          {w.tech.map((t) => (
                            <Badge key={t} variant="outline">{t}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted/35 py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">御社の業務にも、近い型を作れます。</h2>
          <p className="mb-8 text-muted-foreground">
            まずは1業務だけ、現状の流れを伺いながら効果が出やすい形に落とし込みます。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full px-8">
            相談してみる <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
