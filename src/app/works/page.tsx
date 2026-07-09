import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "実績・構築例",
  description:
    "BGMの実績・構築例。自社で企画から公開まで行い、いま実際に動いているプロダクトと、業務改善の構成例（モデルケース）を紹介します。",
};

const products = [
  {
    name: "RunNavi",
    tag: "ランナー向け / 大会検索・締切管理",
    tagline: "走る予定が、ここで決まる。",
    description:
      "マラソン大会の検索と締切管理のWebサービス。会員認証、データベース、SNS連携まで自社で設計、構築、運用しています。実際の使い心地をそのまま確認できます。",
    tech: ["会員認証", "データベース", "SNS連携"],
    url: "https://runnavi.aidial.jp",
  },
  {
    name: "AiDIAL 無料AI診断",
    tag: "発注前診断 / AIヒアリング",
    tagline: "2問答えると、概算費用と補助金の実質負担の目安がわかる。",
    description:
      "発注前の見積もりヒアリングを、誰でも試せる形で公開したツールです。概算費用と、補助金を使った場合の実質負担の目安まで、その場で確認できます。当社の進め方をそのまま体験できます。",
    tech: ["AIヒアリング", "概算見積もり", "補助金試算"],
    url: "https://aidial-hearing.vercel.app",
  },
  {
    name: "aidialポータル",
    tag: "生活情報 / 複数サイト運用",
    tagline: "暮らしに使えるWebサービス群。",
    description:
      "花火大会やウォーキングの情報サイトを共通設計で構築し、運用を続けています。作って終わりにせず、複数のサイトを動かし続けている体制の証明です。",
    tech: ["共通設計", "複数サイト展開", "継続運用"],
    url: "https://aidial.jp",
  },
  {
    name: "まちみらい",
    tag: "オープンデータ / 技術デモ",
    tagline: "地域の統計から、事業のタネを見る。",
    description:
      "公的統計データの取得、可視化、事業アイデアの提案生成までが、動く形で確認できる技術デモです。",
    tech: ["オープンデータ", "可視化", "提案生成"],
    url: "https://machi-mirai.vercel.app",
  },
];

const research = {
  name: "避難行動シミュレーション",
  tag: "防災 / シミュレーション",
  description:
    "Unreal Engine 5で群衆150体の避難挙動をリアルタイムに描画する技術検証を完了しています（平均55.7fps）。防災分野でこの技術を実務に落とす、自治体や企業との共同検証パートナーを探しています。",
  tech: ["Unreal Engine 5", "群衆シミュレーション", "リアルタイム描画"],
};

const modelCases = [
  {
    badge: "モデルケース",
    name: "工務店向け 日報・発注整理フロー",
    tag: "工務店 / 日報・発注 / 業務改善",
    tagline: "現場はLINEで送るだけ。翌朝、日報と発注メモが整理されている。",
    description:
      "現場から届く写真・音声・短文を、事務所で確認しやすい日報下書き・発注メモ・確認待ちリストへ整える構築例。新しい専用アプリを覚えさせず、帰宅後の事務作業と社長の確認時間を減らします。",
    points: [
      "現場の入力負担を増やさないLINE起点の運用",
      "翌朝の聞き直し・整理し直しを減らす確認フロー",
      "削減できた時間と現場の声を見ながら範囲を拡張",
    ],
    tech: ["LINE連携", "音声・写真整理", "業務フロー設計", "確認画面"],
  },
  {
    badge: "モデルケース",
    name: "依頼受付・台帳整理フロー",
    tag: "士業 / 受付管理 / 返信品質",
    tagline: "受付メールを、案件台帳と返信確認へつなげる。",
    description:
      "問い合わせ・依頼受付メールを案件台帳に整理し、対応状況と返信確認を見える化する構築例。転記時間を減らし、返信漏れや対応遅れを防いで、案件対応の品質を安定させます。",
    points: [
      "受付内容・期限・対応状況を一覧で確認",
      "返信文の下書きと確認待ちを分けて管理",
      "属人化しやすい案件受付を標準化",
    ],
    tech: ["メール連携", "台帳設計", "返信テンプレート", "ステータス管理"],
  },
  {
    badge: "社内運用中",
    name: "Outlook予定の二重管理削減",
    tag: "予定管理 / 業務改善 / GAS",
    tagline: "会社のOutlook予定が、毎朝Googleカレンダーに届く。",
    description:
      "当社が毎朝実際に使っている社内ツールです。会社のOutlook（Microsoft 365）の予定を毎朝Googleカレンダーへ反映し、二重管理の手間と予定の見落としを減らしています。",
    points: [
      "Outlook予定を外部カレンダーへ毎朝反映",
      "差分更新対応（重複作成なし）",
      "予定の二重確認と見落としを減らす運用",
    ],
    tech: ["Node.js", "Google Calendar API", "Microsoft Graph API", "GAS"],
  },
  {
    badge: "モデルケース",
    name: "アトリエ向け 受注・在庫整理",
    tag: "クリエイター / 受注・在庫 / 発信支援",
    tagline: "制作以外の作業を減らし、創る時間と販売機会を増やす。",
    description:
      "注文・在庫・発送準備・新作告知を整理する構築例。小規模なアトリエや個人クリエイターが、制作時間を削らずに顧客対応と販売活動を続けられる状態を作ります。",
    points: [
      "注文・在庫・発送準備を一覧化",
      "新作紹介や制作背景の発信を続けやすくする",
      "売れ筋と在庫の動きから次の制作判断を支援",
    ],
    tech: ["受注台帳", "在庫管理", "SNS下書き", "売上メモ"],
  },
  {
    badge: "モデルケース",
    name: "写真・音声からの記事下書き",
    tag: "コンテンツ化 / 音声入力 / 発信支援",
    tagline: "現場や体験の記録を、発信に使える文章へ整える。",
    description:
      "写真を見ながら話した内容を、記事やSNS下書きとして整理するプロトタイプ。観光・店舗・クリエイターなど、現場の魅力を発信したいが文章化に時間がかかる事業者向けの構築例です。",
    points: [
      "写真と音声メモから文章の素材を整理",
      "スマートフォンだけで記録から下書きまで完結",
      "発信頻度を上げるための文章化負担を軽減",
    ],
    tech: ["Next.js", "音声入力", "文章整理", "PWA"],
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
            subtitle="実際に動いているプロダクトと、当社ならこう組むという構築例を紹介します。正式な導入実績は、公開許可をいただける範囲で今後追加します。"
            align="center"
          />
        </div>
      </section>

      {/* 公開中のプロダクト */}
      <section className="py-20">
        <div className="container-wide">
          <SectionHeader label="LIVE PRODUCTS" title="公開中のプロダクト" align="center" className="mb-4" />
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            ここに載せているのは、当社が企画から公開まで自社で行い、いま実際に動いているプロダクトです。すべて本番のURLから触れます。発注の前に、当社の設計と品質をご自身の目で確かめてください。
          </p>
          <div className="grid gap-7">
            {products.map((p) => (
              <Reveal key={p.name}>
                <Card className="border-border/80 transition-colors hover:border-primary/60">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge>公開中</Badge>
                          <span className="text-xs text-muted-foreground">{p.tag}</span>
                        </div>
                        <CardTitle className="mt-3 text-2xl">{p.name}</CardTitle>
                        <p className="mt-1 text-sm font-medium text-primary">{p.tagline}</p>
                      </div>
                      <Button
                        render={<a href={p.url} target="_blank" rel="noopener noreferrer" />}
                        className="rounded-full"
                      >
                        サイトを見る <ExternalLink size={13} />
                      </Button>
                    </div>
                    <div className="mt-5 grid gap-6 md:grid-cols-3">
                      <p className="text-sm leading-relaxed text-muted-foreground md:col-span-2">{p.description}</p>
                      <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">構成要素</p>
                        <div className="flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <Badge key={t} variant="outline">{t}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 技術検証 */}
      <section className="bg-muted/35 py-20">
        <div className="container-wide">
          <SectionHeader label="R&D" title="技術検証" align="center" className="mb-10" />
          <Reveal>
            <Card className="border-border/80">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">技術検証</Badge>
                  <span className="text-xs text-muted-foreground">{research.tag}</span>
                </div>
                <CardTitle className="mt-3 text-2xl">{research.name}</CardTitle>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{research.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {research.tech.map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* 構築例（モデルケース） */}
      <section className="py-20">
        <div className="container-wide">
          <SectionHeader label="MODEL CASE" title="構築例（モデルケース）" align="center" className="mb-4" />
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            お客様の実案件は、守秘のため公開していません。ここでは実際によくいただくご相談を、当社ならこう組む、という構成例として紹介します。記載している効果は想定で、実測値ではありません。
          </p>
          <div className="grid gap-7">
            {modelCases.map((w) => (
              <Reveal key={w.name}>
                <Card className="border-border/80 transition-colors hover:border-primary/60">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={w.badge === "社内運用中" ? "secondary" : "outline"}>{w.badge}</Badge>
                      <span className="text-xs text-muted-foreground">{w.tag}</span>
                    </div>
                    <CardTitle className="mt-3 text-2xl">{w.name}</CardTitle>
                    <p className="mt-1 text-sm font-medium text-primary">{w.tagline}</p>
                    <div className="mt-5 grid gap-6 md:grid-cols-3">
                      <div className="space-y-4 md:col-span-2">
                        <p className="text-sm leading-relaxed text-muted-foreground">{w.description}</p>
                        <ul className="space-y-2">
                          {w.points.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-0.5 flex-shrink-0 text-primary">✓</span>
                              <span>{point}</span>
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
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/35 py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">御社の業務にも、近い仕組みを作れます。</h2>
          <p className="mb-8 text-muted-foreground">
            まずは1業務だけ、現状の流れを伺いながら効果が出やすい形に落とし込みます。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full px-8">
            相談してみる <ArrowRight size={16} />
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            発注先としての会社情報は、
            <Link href="/company" className="text-primary hover:underline">
              会社概要
            </Link>
            にまとめています。
          </p>
        </div>
      </section>
    </>
  );
}
