import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { ProcessGuarantee } from "@/components/shared/process-guarantee";
import { ProofLinks } from "@/components/shared/proof-links";

export const metadata: Metadata = {
  title: "料金",
  description:
    "BGMの料金。無料相談から、ディスカバリー（要件整理と動く試作）、本開発、月額保守までの進め方と、成果物別の目安をまとめています。",
};

const estimates = [
  { label: "Webサイト・LP", price: "15万〜60万円", desc: "会社サイト・サービス紹介・キャンペーンLPなど" },
  { label: "小さな業務ツール", price: "15万〜40万円", desc: "台帳・受付整理・日報など、1業務を軽くする道具" },
  { label: "業務システム", price: "40万〜100万円", desc: "認証・データベース・外部連携を含む業務の仕組み" },
  { label: "会員制Webサービス", price: "80万〜250万円", desc: "会員登録やマイページを備えたWebサービス" },
  { label: "業務改善支援", price: "10万〜30万円", desc: "開発を伴わない業務フローの整理・既製ツールの活用" },
  { label: "SNS集客支援", price: "初期5万円〜＋月1万〜8万円", desc: "AIマーケプラン作成とSNS運用の仕組み化" },
  { label: "月額保守", price: "1万〜10万円/月", desc: "稼働チェック・改善・業務変化への追従" },
];

const faq = [
  {
    q: "見積もりは無料ですか？",
    a: "はい、無料です。ヒアリングから提案、見積もりまで費用はかかりません。見積もりは3営業日以内にお出しします。",
  },
  {
    q: "ディスカバリーとは何ですか？",
    a: "本開発の前に、要件の整理と動く試作を行う有償のステップです（5万〜15万円）。本開発に進む場合は費用を全額充当し、内容にご満足いただけない場合は返金します。",
  },
  {
    q: "補助金は使えますか？",
    a: "対象になりうる制度の調査と、実質負担額の試算までお手伝いします。申請書類の作成代行は行っていません（行政書士の業務にあたるため）。",
  },
  {
    q: "インボイスに対応していますか？",
    a: "適格請求書発行事業者への登録を予定しています。登録状況と請求書での消費税の扱いは、お見積もりの際に明示します。",
  },
  {
    q: "支払い方法は？",
    a: "銀行振込に対応しています。案件規模に応じて、着手時50%、納品時50%の分割払いに対応しています。",
  },
  {
    q: "途中でキャンセルできますか？",
    a: "着手前は全額返金します。着手後は進捗に応じた費用をいただき、それまでの成果物はお渡しします。条件は契約前にご確認いただけます。",
  },
  {
    q: "オンラインのみですか？",
    a: "基本はオンラインです。ご希望があれば対面での打ち合わせにも対応します。",
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
            subtitle="小さく始めて、確かめてから進める料金体系です。"
            align="center"
          />
        </div>
      </section>

      <ProcessGuarantee showPricingLink={false} />

      <section className="bg-muted/35 py-20">
        <div className="container-narrow">
          <SectionHeader
            label="PRICE GUIDE"
            title="成果物別の目安"
            align="center"
            className="mb-8"
          />
          <Reveal>
            <Card className="overflow-hidden border-border/80">
              <CardContent className="divide-y divide-border p-0">
                {estimates.map((r) => (
                  <div key={r.label} className="flex items-center justify-between gap-4 px-7 py-5">
                    <div>
                      <p className="font-bold">{r.label}</p>
                      <p className="text-sm text-muted-foreground">{r.desc}</p>
                    </div>
                    <p className="ml-4 whitespace-nowrap font-bold text-primary">{r.price}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
          <p className="mt-5 text-center text-sm leading-relaxed text-muted-foreground">
            金額は目安です。ディスカバリーで要件を整理したうえで、正式なお見積もりを提示します。
          </p>
        </div>
      </section>

      <ProofLinks />

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
            「予算が不安」「何から始めれば」。その疑問にも、ヒアリングでお答えします。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full px-8">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">返信は24時間以内。費用は一切かかりません。</p>
          <p className="mt-4 text-sm text-muted-foreground">
            先に概算だけ知りたい方は、2問の
            <a
              href="https://aidial-hearing.vercel.app"
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
