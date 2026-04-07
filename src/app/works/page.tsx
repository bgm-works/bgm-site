import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "実績・ポートフォリオ",
  description:
    "いつのまに の実績・ポートフォリオ。katatte、PP Route Optimizer、O365-GCal自動同期、AIコンシェルジュ、Master Flow Viewerなど実際に稼働するプロダクト5作品を紹介。",
};

const works = [
  {
    id: "katatte",
    number: "01",
    name: "katatte",
    tagline: "写真を見ながら語るだけ。AIが記事を書く。",
    tag: "PWA / AI統合 / 音声認識",
    description:
      "旅の思い出写真と音声をセットにするだけで、AIが高品質な旅行記事を自動生成するPWAアプリ。音声チャンク分割アップロード、動的録音時間制限、ビー玉ゲームUIなど体験設計にこだわった作品。",
    points: [
      "音声 + 画像 + LLMの統合設計",
      "PWA対応（ホーム画面追加・オフライン対応）",
      "スマートフォンでの操作性を最優先に設計",
    ],
    tech: ["Next.js 15", "OpenAI API (Whisper + GPT-4o)", "Tailwind CSS", "Vercel", "PWA"],
    url: "https://katatte.vercel.app",
    available: true,
    color: "#e8f0eb",
    accentColor: "#3d6b4f",
  },
  {
    id: "pp-route-optimizer",
    number: "02",
    name: "PP Route Optimizer",
    tagline: "SFC修行の最高効率ルートをAIが自動計算。",
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
    color: "#e8eaf0",
    accentColor: "#3d4f6b",
  },
  {
    id: "o365-gcal-sync",
    number: "03",
    name: "O365→GCal 自動同期",
    tagline: "会社のOutlook予定が、毎朝Googleカレンダーに届く。",
    tag: "業務自動化 / API連携 / GAS",
    description:
      "会社のOutlook（Microsoft 365）の予定を、Googleカレンダーへ毎朝自動同期するNode.jsスクリプト。ICSファイル取得からGoogle Calendar API投入まで完全自動化。「二重管理の苦痛」を解消した実用ツール。",
    points: [
      "O365 ICS → Google Calendar API の完全パイプライン",
      "差分更新対応（重複作成なし）",
      "Note記事で公開、多くのビジネスパーソンに活用",
    ],
    tech: ["Node.js", "Google Calendar API", "Microsoft Graph API", "GAS"],
    url: "#",
    available: false,
    color: "#f0ebe8",
    accentColor: "#6b4f3d",
  },
  {
    id: "ai-concierge",
    number: "04",
    name: "AIコンシェルジュ（朝の自動化）",
    tagline: "起きたら、もう今日の仕事が動き始めている。",
    tag: "AI自動化 / Cursor / 業務設計",
    description:
      "毎朝8ステップのルーティン（カレンダー取得・思考ログ作成・SNS下書き生成・git push）をCursor AIが全自動実行する仕組み。AIエージェントが「脳のコパイロット」として機能する設計の先行事例。",
    points: [
      "8ステップ自動化（カレンダー→思考ログ→SNS下書き→git）",
      "Claude API + GAS + GitHub の連携",
      "このポートフォリオ自体もAIが生成・管理",
    ],
    tech: ["Claude API", "Google Apps Script", "GitHub Actions", "Cursor AI"],
    url: "#",
    available: false,
    color: "#e8f0eb",
    accentColor: "#3d6b4f",
  },
  {
    id: "master-flow-viewer",
    number: "05",
    name: "Master Flow Viewer",
    tagline: "マスタープランの処理フローをリアルタイムで可視化。",
    tag: "Next.js / PWA / 認証",
    description:
      "個人の「マスタープラン」に記載された処理フローをWebで閲覧・管理するダッシュボード。Edge Basic認証、PWA対応、Vercel自動デプロイを実装。Next.js App Routerの実践的な活用例。",
    points: [
      "Edge Basic認証によるアクセス制限",
      "PWA対応（モバイルからもアクセス可能）",
      "GitHub push → Vercel自動デプロイのCI/CDパイプライン",
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Edge Runtime", "PWA"],
    url: "#",
    available: false,
    color: "#e8eaf0",
    accentColor: "#3d4f6b",
  },
];

export default function WorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-[#f4f4f0]">
        <div className="container-narrow text-center">
          <h1 className="section-title mb-4">実績・ポートフォリオ</h1>
          <p className="text-[#6b6b68] leading-relaxed">
            実際に動いているプロダクトを5つ紹介します。<br />
            すべて、アイデアから実装まで1〜3日で完成しています。
          </p>
        </div>
      </section>

      {/* Works list */}
      <section className="py-20">
        <div className="container-wide space-y-12">
          {works.map((w) => (
            <article
              key={w.id}
              className="bg-white rounded-2xl border border-[#e2e2de] overflow-hidden"
            >
              {/* Header */}
              <div
                className="px-8 py-6 flex items-start justify-between gap-4"
                style={{ backgroundColor: w.color }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl font-bold text-white/40">{w.number}</span>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: w.accentColor }}
                    >
                      {w.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a1a18]">{w.name}</h2>
                  <p className="text-sm font-medium mt-1" style={{ color: w.accentColor }}>
                    {w.tagline}
                  </p>
                </div>
                {w.available && (
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-white px-4 py-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: w.accentColor }}
                  >
                    サイトを見る <ExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Body */}
              <div className="px-8 py-7 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-sm text-[#4a4a48] leading-relaxed mb-5">{w.description}</p>
                  <ul className="space-y-2">
                    {w.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 flex-shrink-0" style={{ color: w.accentColor }}>✓</span>
                        <span className="text-[#4a4a48]">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#9b9b98] uppercase tracking-wide mb-3">使用技術</p>
                  <div className="flex flex-wrap gap-2">
                    {w.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs border border-[#e2e2de] text-[#6b6b68] px-2.5 py-1.5 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f4f4f0]">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">あなたのプロダクトも、作れます。</h2>
          <p className="text-[#6b6b68] mb-8">
            アイデアがあれば、それが何でも形にできます。まずお話しください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3d6b4f] text-white font-medium rounded-full hover:bg-[#2d5a3f] transition-colors"
          >
            相談してみる <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
