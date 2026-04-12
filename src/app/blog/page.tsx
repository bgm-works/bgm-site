import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

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
      {/* Hero */}
      <section className="pt-20 pb-16 bg-[#f4f4f0]">
        <div className="container-narrow text-center">
          <h1 className="section-title mb-4">ブログ・コンテンツ</h1>
          <p className="text-[#6b6b68] leading-relaxed">
            AI自動化・業務効率化・起業の実録をNoteで発信中。<br />
            実際に自分で試して、動いたことだけを書いています。
          </p>
        </div>
      </section>

      {/* Note articles */}
      <section className="py-20">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-10">
            <h2 className="section-title">Noteの記事</h2>
            <a
              href="https://note.com/jin_lifelab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#1B6B6B] font-medium hover:underline"
            >
              Noteを見る <ExternalLink size={13} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {noteArticles.map((article) => (
              <a
                key={article.title}
                href="https://note.com/jin_lifelab"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-[#e2e2de] p-7 hover:border-[#1B6B6B] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-[#1B6B6B] bg-[#E3F0F0] px-3 py-1 rounded-full">
                    {article.tag}
                  </span>
                  <span className="text-xs text-[#9b9b98]">{article.date}</span>
                </div>
                <h3 className="font-bold text-[#1a1a18] mb-3 leading-snug group-hover:text-[#1B6B6B] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[#6b6b68] leading-relaxed">{article.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm text-[#1B6B6B] font-medium">
                  Noteで読む <ArrowRight size={13} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SNS */}
      <section className="py-20 bg-[#f4f4f0]">
        <div className="container-wide">
          <h2 className="section-title mb-10">SNSでも発信中</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {snsList.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-[#e2e2de] p-7 hover:border-[#1B6B6B] hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-[#1a1a18]">{s.platform}</p>
                  <ExternalLink size={14} className="text-[#9b9b98] group-hover:text-[#1B6B6B] transition-colors" />
                </div>
                <p className="text-sm text-[#1B6B6B] mb-2">{s.handle}</p>
                <p className="text-sm text-[#6b6b68] leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-4">お仕事のご相談はこちら</h2>
          <p className="text-[#6b6b68] mb-8">
            記事を読んで「うちも試したい」と思ったら、お気軽にどうぞ。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B6B6B] text-white font-medium rounded-full hover:bg-[#0E4A4A] transition-colors"
          >
            無料ヒアリングを予約する <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
