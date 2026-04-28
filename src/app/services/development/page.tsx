import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Award, Layers, Globe, Smartphone, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Webアプリ開発・業務ツール受託",
  description:
    "「こういうの、作れないかな」——そのぼんやりしたイメージで十分です。17年のSE経験で、業務改善や事業検証に効くプロダクトを一緒に形にします。",
};

const skills = [
  { category: "フロントエンド", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "PWA対応"] },
  { category: "バックエンド", items: ["Node.js / Python", "REST API / GraphQL", "PostgreSQL / MySQL", "AWS (SAA/DVA/SOA)"] },
  { category: "業務連携", items: ["OpenAI / Claude API", "業務フロー改善", "n8n / GAS / Zapier", "短期検証の開発体制"] },
  { category: "その他", items: ["Vercel / Supabase", "GitHub Actions CI/CD", "Google Workspace連携", "LINE Bot開発"] },
];

const works = [
  {
    name: "katatte",
    tag: "PWA / 体験設計",
    desc: "写真を見ながら話すだけで、旅行体験を記事として残せるプロダクト。思い出を整理する手間を減らします。",
    url: "https://katatte.vercel.app",
    tech: ["Next.js", "OpenAI API", "PWA"],
  },
  {
    name: "PP Route Optimizer",
    tag: "最適化アルゴリズム",
    desc: "ANA SFC修行の最高効率ルート自動計算。2026年5月新運賃体系に対応。月間数千件のアクセス。",
    url: "#",
    tech: ["React", "TypeScript", "Vercel"],
  },
  {
    name: "O365→GCal自動同期",
    tag: "予定管理 / 業務改善",
    desc: "会社のOutlook予定を毎朝Googleカレンダーへ反映。二重確認を減らし、予定の見落としを防ぎます。",
    url: "#",
    tech: ["Node.js", "Google API", "GAS"],
  },
  {
    name: "AIコンシェルジュ",
    tag: "日次業務の仕組み化",
    desc: "朝の定型業務をまとめて処理し、1日の開始前に予定・発信・記録の準備が整う状態を作ります。",
    url: "#",
    tech: ["Claude API", "GAS", "GitHub"],
  },
  {
    name: "Master Flow Viewer",
    tag: "Next.js / PWA",
    desc: "マスタープランの処理フローをリアルタイム可視化。Edge Basic認証+PWA+Vercel自動デプロイ。",
    url: "#",
    tech: ["Next.js", "Vercel", "PWA"],
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

const flowItems = [
  { step: "01", title: "一緒に整理する", desc: "何を作りたいか、まだぼんやりでも大丈夫。要件・予算・優先度を一緒に整理します。" },
  { step: "02", title: "提案・見積もり", desc: "最適な技術と進め方を、3営業日以内にご提案します。" },
  { step: "03", title: "一緒に作り上げる", desc: "毎週デモをお見せしながら、使う人の反応を見て一緒に磨いていきます。" },
  { step: "04", title: "一緒に育てる", desc: "リリースはゴールではなく、スタート。月額保守で改善を続け、長期パートナーとして伴走します。" },
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
            「こういうの、作れないかな」——それで十分です。
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
          <SectionHeader label="WORKS" title="実績" align="center" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {works.map((w) => (
              <Reveal key={w.name}>
                <Card className="h-full border-border/80">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit text-[var(--cool-accent)]">{w.tag}</Badge>
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
      <section className="py-20">
        <div className="container-wide">
          <SectionHeader label="FLOW" title="進め方" align="center" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flowItems.map((f) => (
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

      {/* Pricing */}
      <section className="bg-muted/35 py-20">
        <div className="container-narrow">
          <SectionHeader label="PRICE GUIDE" title="料金の目安" subtitle="要件によって大きく変わるため、まずはご相談ください。" align="center" className="mb-8" />
          <Card className="overflow-hidden border-border/80">
            <CardContent className="divide-y divide-border p-0">
            {[
              { label: "小規模（LP・業務ツール）", price: "5万〜20万円", desc: "シンプルな機能 / 1〜2週間" },
              { label: "中規模（Webアプリ）", price: "20万〜80万円", desc: "認証・DB・API連携あり / 2〜6週間" },
              { label: "大規模（業務システム）", price: "80万円〜", desc: "複雑な要件・チーム開発 / 2ヶ月〜" },
              { label: "月額保守", price: "2万〜10万円/月", desc: "バグ対応・機能追加・業務変化への追従" },
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
        </div>
      </section>

      <section className="py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">「これ、作れますか？」と聞いてみてください。</h2>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            たいていのことは作れます。<br />
            まずは気軽に、聞いてみてください。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full bg-[var(--cool-accent)] px-8 text-white hover:bg-[color:var(--cool-accent)]/90">
            相談してみる <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
