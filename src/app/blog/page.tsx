import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "ブログ・コンテンツ",
  description:
    "AI自動化・業務効率化・起業に関するノウハウをNoteで発信中。AIを使った爆速開発の実録や、中小企業のDX事例なども。",
};

const noteArticles = [
  {
    title: "ANA SFC修行、2026年5月19日を待つべき理由——新運賃体系で変わる最適ルートを完全解説",
    date: "2026-04-10予定",
    tag: "SFC修行 / 最適化",
    desc: "2026年5月から変わるANA運賃体系を受け、SFC修行の最適ルートがどう変わるかを徹底解説。PP Route Optimizerでの計算結果も公開。",
  },
  {
    title: "AIエージェントを「量産」する時代が来た｜みずほFGと三井物産の事例から見える次の一手",
    date: "2026-04-07",
    tag: "AI / ビジネス",
    desc: "みずほFGが2025年内に1万エージェント構築、三井物産が5万人にCopilot展開。「企業のAI本気化」が始まった今、個人や中小企業はどう動くべきか。",
  },
];

const snsList = [
  {
    platform: "Note",
    handle: "@jin_lifelab",
    desc: "AI活用・業務自動化・副業の実録。週1〜2本更新。",
    url: "https://note.com/jin_lifelab",
    color: "#41C9B4",
  },
  {
    platform: "X (Twitter)",
    handle: "@jin_lifelab",
    desc: "AI最新情報・毎日のコンテンツ。平日毎朝更新。",
    url: "https://x.com/jin_lifelab",
    color: "#000000",
  },
  {
    platform: "Threads",
    handle: "@jin_lifelab",
    desc: "思考ログ・ビジネス考察。Xより少し長めの投稿。",
    url: "https://www.threads.net/@jin_lifelab",
    color: "#000000",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-muted/35 py-20">
        <div className="container-narrow">
          <SectionHeader
            label="BLOG & CONTENT"
            title="ブログ・コンテンツ"
            subtitle="AI自動化・業務効率化・起業の実録をNoteで発信中。実際に自分で試して、動いたことだけを書いています。"
            align="center"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <div className="mb-10 flex items-center justify-between">
            <SectionHeader label="NOTE" title="Noteの記事" />
            <Button
              variant="outline"
              render={<a href="https://note.com/jin_lifelab" target="_blank" rel="noopener noreferrer" />}
              className="rounded-full"
            >
              Noteを見る <ExternalLink size={13} />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {noteArticles.map((article) => (
              <Reveal key={article.title}>
                <Card className="group h-full border-border/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">{article.tag}</Badge>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="leading-snug group-hover:text-primary">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{article.desc}</CardDescription>
                    <Button
                      variant="ghost"
                      render={<a href="https://note.com/jin_lifelab" target="_blank" rel="noopener noreferrer" />}
                      className="mt-3 px-0 text-primary"
                    >
                      Noteで読む <ArrowRight size={13} />
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/35 py-20">
        <div className="container-wide">
          <SectionHeader label="SOCIAL" title="SNSでも発信中" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {snsList.map((s) => (
              <Reveal key={s.platform}>
                <Card className="group h-full border-border/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{s.platform}</CardTitle>
                      <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary" />
                    </div>
                    <p className="text-sm text-primary">{s.handle}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{s.desc}</CardDescription>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 rounded-[inherit]" aria-label={`${s.platform}を開く`} />
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">お仕事のご相談はこちら</h2>
          <p className="mb-8 text-muted-foreground">
            記事を読んで「うちも試したい」と思ったら、お気軽にどうぞ。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full px-8">
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
