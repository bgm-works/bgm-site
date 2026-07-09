import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Award, Layers, Globe, Smartphone, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { ProcessGuarantee } from "@/components/shared/process-guarantee";
import { ProofLinks } from "@/components/shared/proof-links";

export const metadata: Metadata = {
  title: "Webアプリ開発・業務ツール受託",
  description:
    "「こういうの、作れないかな」。そのぼんやりしたイメージで十分です。17年のSE経験で、業務改善や事業検証に効くプロダクトを一緒に形にします。",
};

const skills = [
  { category: "フロントエンド", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "PWA対応"] },
  { category: "バックエンド", items: ["Node.js / Python", "REST API / GraphQL", "PostgreSQL / MySQL", "AWS (SAA/DVA/SOA)"] },
  { category: "業務連携", items: ["OpenAI / Claude API", "業務フロー改善", "n8n / GAS / Zapier", "短期検証の開発体制"] },
  { category: "その他", items: ["Vercel / Supabase", "GitHub Actions CI/CD", "Google Workspace連携", "LINE Bot開発"] },
];

const works = [
  {
    name: "工務店向け 日報・発注整理",
    badge: "モデルケース",
    tag: "工務店 / 業務改善",
    desc: "現場から届く写真・音声を、翌朝の確認しやすい日報下書きと発注メモへ整える構築例。",
    tech: ["LINE連携", "音声・写真整理", "確認画面"],
  },
  {
    name: "依頼受付・台帳整理",
    badge: "モデルケース",
    tag: "士業 / 受付管理",
    desc: "受付メールを案件台帳と返信確認につなげ、転記時間・返信漏れ・対応遅れを減らす構築例。",
    tech: ["メール連携", "台帳設計", "ステータス管理"],
  },
  {
    name: "Outlook予定の二重管理削減",
    badge: "社内運用中",
    tag: "予定管理 / 業務改善",
    desc: "当社が毎朝実際に使っている社内ツール。会社のOutlook予定を毎朝Googleカレンダーへ反映し、二重管理と見落としを減らしています。",
    tech: ["Node.js", "Google API", "GAS"],
  },
  {
    name: "アトリエ向け 受注・在庫整理",
    badge: "モデルケース",
    tag: "クリエイター / 受注・在庫",
    desc: "注文・在庫・発送準備・新作告知を整理し、制作時間と販売機会を増やす構築例。",
    tech: ["受注台帳", "在庫管理", "SNS下書き"],
  },
  {
    name: "写真・音声からの記事下書き",
    badge: "モデルケース",
    tag: "発信支援 / 体験整理",
    desc: "写真を見ながら話した内容を、記事やSNS下書きとして整理するプロトタイプの構築例。",
    tech: ["Next.js", "音声入力", "PWA"],
  },
];

const reasons = [
  {
    icon: Zap,
    title: "アイデアが、すぐ動き出す",
    desc: "小さく作って早く触れる状態にします。市場や現場で試すまでの時間を短くし、投資判断を早めます。",
  },
  {
    icon: Layers,
    title: "「何を作ればいいか」から、一緒に考える",
    desc: "作って渡して終わり、はしません。17年のSE経験で本当に必要なものを見極め、あなたと一緒にプロダクトを育てます。",
  },
  {
    icon: Award,
    title: "大企業品質の設計力を、あなたのプロジェクトに",
    desc: "AWS 3冠（SAA/DVA/SOA）取得。大企業レベルの堅牢な設計を、個人や中小企業にもお届けします。",
  },
];

export default function DevelopmentPage() {
  return (
    <>
      <section className="bg-secondary py-20">
        <div className="container-narrow">
          <Badge className="rounded-full bg-[var(--cool-accent)] px-4 py-1.5 text-xs tracking-[0.2em] text-white">SERVICE 03</Badge>
          <h1 className="mt-4 text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight">
            Webアプリ開発<br />業務ツール受託
          </h1>
          <p className="mb-5 mt-3 text-xl font-medium text-[var(--cool-accent)]">
            「こういうの、作れないかな」。それで十分です。
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            まだぼんやりしたイメージでも大丈夫。17年のSE経験で、<strong>事業検証や業務改善に使える形</strong>まで一緒に落とし込みます。早く試せて、運用に耐える品質を大切にします。
          </p>
          <Button render={<Link href="/contact" />} className="mt-8 rounded-full bg-[var(--cool-accent)] px-7 py-4 text-white hover:bg-[color:var(--cool-accent)]/90">
            相談してみる <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <SectionHeader label="WHY DEVELOPMENT" title="選ばれる3つの理由" align="center" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <Reveal key={r.title}>
                  <Card className="h-full border-border/80">
                    <CardHeader>
                      <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-[var(--cool-accent)]">
                        <Icon size={22} />
                      </div>
                      <CardTitle className="text-lg">{r.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{r.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/35 py-20">
        <div className="container-wide">
          <SectionHeader label="TECH STACK" title="対応技術" align="center" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <Reveal key={s.category}>
                <Card className="h-full border-border/80">
                  <CardHeader>
                    <CardTitle className="text-sm uppercase tracking-[0.2em] text-[var(--cool-accent)]">{s.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--cool-accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="py-20">
        <div className="container-wide">
          <SectionHeader
            label="WORKS"
            title="実績・構築例"
            subtitle="実案件は守秘のため公開していません。モデルケースと、当社が実際に使っている社内ツールを紹介します。"
            align="center"
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {works.map((w) => (
              <Reveal key={w.name}>
                <Card className="h-full border-border/80">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={w.badge === "社内運用中" ? "secondary" : "outline"}>{w.badge}</Badge>
                      <span className="text-xs text-muted-foreground">{w.tag}</span>
                    </div>
                    <CardTitle className="pt-2">{w.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">{w.desc}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {w.tech.map((t) => (
                        <Badge key={t} variant="outline">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" render={<Link href="/works" />} className="rounded-full border-[var(--cool-accent)] text-[var(--cool-accent)]">
              全ての実績を見る <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </section>

      {/* Accepts */}
      <section className="bg-muted/35 py-20">
        <div className="container-wide">
          <SectionHeader label="BUILD TARGETS" title="こんな「作りたい」に応えます" align="center" className="mb-10" />
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Globe, label: "Webアプリ開発", examples: "業務ツール / ダッシュボード / 予約システム" },
              { icon: Bot, label: "業務改善", examples: "入力削減 / n8n / GAS / 議事録整理" },
              { icon: Smartphone, label: "モバイルアプリ", examples: "React Native (Expo) / PWA対応" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label}>
                  <Card className="h-full border-border/80 text-center">
                    <CardHeader>
                      <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-secondary">
                        <Icon size={22} className="text-[var(--cool-accent)]" />
                      </div>
                      <CardTitle className="text-base">{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.examples}</CardDescription>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flow */}
      <ProcessGuarantee />

      <ProofLinks />

      {/* Pricing */}
      <section className="bg-muted/35 py-20">
        <div className="container-narrow">
          <SectionHeader label="PRICE GUIDE" title="料金の目安" subtitle="要件によって大きく変わるため、まずはご相談ください。" align="center" className="mb-8" />
          <Card className="overflow-hidden border-border/80">
            <CardContent className="divide-y divide-border p-0">
            {[
              { label: "Webサイト・LP", price: "15万〜60万円", desc: "会社サイト・サービス紹介・キャンペーンLP" },
              { label: "小さな業務ツール", price: "15万〜40万円", desc: "台帳・受付整理・日報など、1業務を軽くする道具" },
              { label: "業務システム", price: "40万〜100万円", desc: "認証・データベース・外部連携を含む業務の仕組み" },
              { label: "会員制Webサービス", price: "80万〜250万円", desc: "会員登録やマイページを備えたWebサービス" },
              { label: "月額保守", price: "1万〜10万円/月", desc: "バグ対応・機能追加・業務変化への追従" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between gap-4 px-8 py-5">
                <div>
                  <p className="font-bold">{r.label}</p>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
                <p className="ml-4 whitespace-nowrap text-lg font-bold text-[var(--cool-accent)]">{r.price}</p>
              </div>
            ))}
            </CardContent>
          </Card>
          <p className="mt-5 text-center text-sm leading-relaxed text-muted-foreground">
            補助金の活用をお考えの場合は、対象になりうる制度の調査と実質負担額の試算までお手伝いします。申請書類の作成代行は行っていません。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">「これ、作れますか？」と聞いてみてください。</h2>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            できること、できないことを、最初に正直にお伝えします。<br />
            まずは気軽に、聞いてみてください。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full bg-[var(--cool-accent)] px-8 text-white hover:bg-[color:var(--cool-accent)]/90">
            相談してみる <ArrowRight size={16} />
          </Button>
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
