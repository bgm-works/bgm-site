import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "料金",
  description:
    "BGM の料金プラン。AI導入支援・アトリエboost・Webアプリ開発の3サービス。まずは無料ヒアリングから。",
};

const plans = [
  {
    service: "AI導入支援",
    tagColor: "#1B6B6B",
    bgColor: "#e8f0eb",
    tiers: [
      {
        name: "無料ヒアリング",
        price: "¥0",
        desc: "まずここから",
        features: [
          "30分オンラインヒアリング",
          "業務棚卸しシート提供",
          "自動化可能箇所の特定",
          "概算費用の提示",
        ],
        cta: "予約する",
        href: "/contact",
        highlight: false,
      },
      {
        name: "導入",
        price: "10万〜30万円",
        desc: "一括（規模による）",
        features: [
          "詳細ヒアリング・フロー設計",
          "自動化システムの構築",
          "操作マニュアル作成",
          "導入後2週間フォロー",
        ],
        cta: "相談してみる",
        href: "/contact",
        highlight: true,
      },
      {
        name: "月額保守",
        price: "1万〜3万円/月",
        desc: "継続安心パック",
        features: [
          "月1回稼働チェック",
          "軽微な仕様変更対応",
          "AIアップデートへの追従",
          "優先サポート",
        ],
        cta: "詳しく聞く",
        href: "/contact",
        highlight: false,
      },
    ],
  },
  {
    service: "アトリエboost",
    tagColor: "#C06A3A",
    bgColor: "#FBF0EA",
    tiers: [
      {
        name: "無料ヒアリング",
        price: "¥0",
        desc: "まずここから",
        features: [
          "30分オンラインヒアリング",
          "業務時間の棚卸し",
          "AI従業員設計の提案",
          "概算費用の提示",
        ],
        cta: "予約する",
        href: "/contact",
        highlight: false,
      },
      {
        name: "初期構築",
        price: "20万〜50万円",
        desc: "一括（規模による）",
        features: [
          "AI従業員の設計・構築",
          "受注・在庫・SNS自動化",
          "操作マニュアル作成",
          "2週間の習熟サポート",
        ],
        cta: "相談してみる",
        href: "/contact",
        highlight: true,
      },
      {
        name: "月額保守",
        price: "2万〜5万円/月",
        desc: "継続安心パック",
        features: [
          "稼働監視・エラー対応",
          "仕様変更・追加自動化",
          "AI進化への追従",
          "優先サポート",
        ],
        cta: "詳しく聞く",
        href: "/contact",
        highlight: false,
      },
    ],
  },
  {
    service: "Webアプリ開発",
    tagColor: "#3D5A6B",
    bgColor: "#E8EEF0",
    tiers: [
      {
        name: "小規模",
        price: "5万〜20万円",
        desc: "LP・自動化ツール",
        features: [
          "シンプルな機能実装",
          "1〜2週間で納品",
          "Vercelデプロイ対応",
          "軽微な修正1回含む",
        ],
        cta: "相談してみる",
        href: "/contact",
        highlight: false,
      },
      {
        name: "中規模",
        price: "20万〜80万円",
        desc: "Webアプリ・業務ツール",
        features: [
          "認証・DB・API連携あり",
          "2〜6週間で納品",
          "テスト・マニュアル込み",
          "CI/CD設定込み",
        ],
        cta: "詳しく聞く",
        href: "/contact",
        highlight: true,
      },
      {
        name: "月額保守",
        price: "2万〜10万円/月",
        desc: "運用・追加開発",
        features: [
          "バグ対応・パッチ適用",
          "機能追加開発",
          "AI/ライブラリ追従",
          "優先サポート",
        ],
        cta: "相談してみる",
        href: "/contact",
        highlight: false,
      },
    ],
  },
];

const faq = [
  {
    q: "見積もりは無料ですか？",
    a: "はい、無料です。ヒアリング（30分）→ 提案・見積もり（3営業日以内）まで、費用は一切かかりません。",
  },
  {
    q: "支払い方法は？",
    a: "銀行振込に対応しています。大規模案件は着手金50% + 完了時50%の分割払いも可能です。",
  },
  {
    q: "インボイス対応していますか？",
    a: "現在（2026年4月時点）は適格請求書発行事業者の登録をしていません。売上増加に応じて登録予定です。個人・フリーランスのお客様との取引は問題ありません。",
  },
  {
    q: "オンラインのみですか？",
    a: "基本はオンライン（Zoom / Google Meet）で対応していますが、ご要望をいただいた場合は対面でのお打ち合わせにも対応しています。",
  },
  {
    q: "途中でキャンセルできますか？",
    a: "着手前であれば全額返金します。着手後は進捗に応じた費用をいただきます。詳細はヒアリング時にご確認ください。",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-muted/35 py-20">
        <div className="container-narrow">
          <SectionHeader
            label="PRICING"
            title="料金"
            subtitle="まずは無料ヒアリングから。規模・要件に応じて最適なプランをご提案します。"
            align="center"
          />
        </div>
      </section>

      {plans.map((plan) => (
        <section key={plan.service} className="border-b border-border py-16">
          <div className="container-wide">
            <Reveal>
              <Badge className="rounded-full px-4 py-1.5 text-xs tracking-[0.18em] uppercase" style={{ backgroundColor: plan.tagColor }}>
                {plan.service}
              </Badge>
            </Reveal>
            <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
              {plan.tiers.map((tier) => (
                <Reveal key={tier.name}>
                  <Card
                    className={`flex h-full flex-col border-border/80 transition-transform hover:-translate-y-1 hover:shadow-xl ${
                      tier.highlight ? "text-white" : ""
                    }`}
                    style={tier.highlight ? { backgroundColor: plan.tagColor, borderColor: plan.tagColor } : undefined}
                  >
                    <CardHeader className="space-y-1">
                      <p className={`text-xs uppercase tracking-[0.2em] ${tier.highlight ? "text-white/75" : "text-muted-foreground"}`}>
                        {tier.name}
                      </p>
                      <CardTitle className={`text-2xl ${tier.highlight ? "text-white" : "text-foreground"}`}>{tier.price}</CardTitle>
                      <p className={`text-xs ${tier.highlight ? "text-white/70" : "text-muted-foreground"}`}>{tier.desc}</p>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col">
                      <ul className="flex-1 space-y-3">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle2
                              className="mt-0.5 size-4 flex-shrink-0"
                              style={{ color: tier.highlight ? "rgba(255,255,255,0.8)" : plan.tagColor }}
                            />
                            <span className={tier.highlight ? "text-white/95" : "text-muted-foreground"}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        render={<Link href={tier.href} />}
                        variant={tier.highlight ? "secondary" : "outline"}
                        className="mt-7 rounded-full"
                        style={!tier.highlight ? { borderColor: plan.tagColor, color: plan.tagColor } : undefined}
                      >
                        {tier.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="container-narrow">
          <SectionHeader label="FAQ" title="よくある質問" align="center" className="mb-10" />
          <Accordion defaultValue={faq[0]?.q ? [faq[0].q] : []} className="rounded-2xl border border-border bg-card px-5 py-2">
            {faq.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="py-4 text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-muted/35 py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">まずは話してみましょう。</h2>
          <p className="mb-8 text-muted-foreground">
            「予算が不安」「何から始めれば」——その疑問にも、ヒアリングでお答えします。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full px-8">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">返信は24時間以内。費用は一切かかりません。</p>
        </div>
      </section>
    </>
  );
}
