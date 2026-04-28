import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "実績・ポートフォリオ",
  description:
    "BGM の実績・ポートフォリオ。体験整理、移動計画、予定管理、日次業務の仕組み化など、実際に稼働するプロダクト5作品を紹介。",
};

const works = [
  {
    id: "katatte",
    number: "01",
    name: "katatte",
    tagline: "写真を見ながら語るだけ。思い出が記事として残る。",
    tag: "PWA / 体験設計 / 音声入力",
    description:
      "旅の思い出写真と音声をセットにするだけで、体験を読みやすい記事として残せるPWAアプリ。旅の記録を整理する手間を減らし、スマートフォンだけで完結できる体験にこだわった作品。",
    points: [
      "写真と思い出話を組み合わせた記録体験",
      "PWA対応（ホーム画面追加・オフライン対応）",
      "スマートフォンでの操作性を最優先に設計",
    ],
    tech: ["Next.js 15", "OpenAI API (Whisper + GPT-4o)", "Tailwind CSS", "Vercel", "PWA"],
    url: "https://katatte.vercel.app",
    available: true,
    color: "#E3F0F0",
    accentColor: "#1B6B6B",
  },
  {
    id: "pp-route-optimizer",
    number: "02",
    name: "PP Route Optimizer",
    tagline: "費用・PP数・フライト数を見比べ、納得できる旅程を探せる。",
    tag: "最適化アルゴリズム / モダンUI",
    description:
      "ANA SFC修行（2026年5月以降の新運賃）に対応した最適ルート自動計算ツール。フライト数・PP数・費用の3軸で最高効率の旅程を提案。複雑な組み合わせ爆発を効率的なアルゴリズムで解決。",
    points: [
      "2026年5月新運賃体系への完全対応",
      "組み合わせ最適化アルゴリズムの実装",
      "レスポンシブ対応で外出先でも確認可能",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "#",
    available: false,
    color: "#E8EEF0",
    accentColor: "#3D5A6B",
  },
  {
    id: "o365-gcal-sync",
    number: "03",
    name: "O365→GCal 自動同期",
    tagline: "会社のOutlook予定が、毎朝Googleカレンダーに届く。",
    tag: "予定管理 / 業務改善 / GAS",
    description:
      "会社のOutlook（Microsoft 365）の予定を、Googleカレンダーへ毎朝反映する実用ツール。仕事と個人の予定を別々に確認する手間を減らし、「二重管理の苦痛」を解消します。",
    points: [
      "Outlook予定をGoogleカレンダーへ毎朝反映",
      "差分更新対応（重複作成なし）",
      "Note記事で公開、多くのビジネスパーソンに活用",
    ],
    tech: ["Node.js", "Google Calendar API", "Microsoft Graph API", "GAS"],
    url: "#",
    available: false,
    color: "#FBF0EA",
    accentColor: "#C06A3A",
  },
  {
    id: "ai-concierge",
    number: "04",
    name: "朝の業務コンシェルジュ",
    tagline: "起きたら、もう今日の仕事が動き始めている。",
    tag: "日次業務 / 業務設計",
    description:
      "毎朝8ステップのルーティン（カレンダー取得・思考ログ作成・SNS下書き生成・git push）をまとめて実行する仕組み。朝の立ち上がりを短くし、考える時間を増やすための実用設計です。",
    points: [
      "8ステップの朝ルーティンをまとめて処理",
      "Claude API + GAS + GitHub の連携",
      "このポートフォリオ自体も継続的に改善・管理",
    ],
    tech: ["Claude API", "Google Apps Script", "GitHub Actions", "Cursor AI"],
    url: "#",
    available: false,
    color: "#E3F0F0",
    accentColor: "#1B6B6B",
  },
  {
    id: "master-flow-viewer",
    number: "05",
    name: "Master Flow Viewer",
    tagline: "マスタープランの処理フローをリアルタイムで可視化。",
    tag: "Next.js / PWA / 認証",
    description:
      "個人の「マスタープラン」に記載された処理フローをWebで閲覧・管理するダッシュボード。判断や作業の流れを見える化し、迷わず次の行動に移るための実践ツール。",
    points: [
      "必要な人だけが見られるアクセス制限",
      "PWA対応（モバイルからもアクセス可能）",
      "更新内容をすばやく反映できる運用フロー",
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Edge Runtime", "PWA"],
    url: "#",
    available: false,
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
            title="実績・ポートフォリオ"
            subtitle="実際に動いているプロダクトを5つ紹介します。技術そのものではなく、時間削減・判断のしやすさ・使いやすさにつながる形を重視しています。"
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
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">使用技術</p>
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
          <h2 className="section-title mb-4">あなたのプロダクトも、作れます。</h2>
          <p className="mb-8 text-muted-foreground">
            アイデアがあれば、それが何でも形にできます。まずお話しください。
          </p>
          <Button render={<Link href="/contact" />} size="lg" className="rounded-full px-8">
            相談してみる <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
