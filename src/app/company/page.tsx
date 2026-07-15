import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "BGM Works株式会社の会社概要。ソフトウェア・ウェブアプリケーションの開発、業務改善に関するコンサルティング、デジタルマーケティング支援などを行っています。",
  robots: { index: true, follow: true },
};

type ProfileRow = {
  label: string;
  value: React.ReactNode;
};

const services: { name: string; desc: string; href: string }[] = [
  { name: "AiDIAL（アイディール）", desc: "AIで、アイデアを現実にするサービスブランド", href: "https://aidial.jp/" },
  { name: "AI相談デスク（無料診断）", desc: "業務のお困りごとから改善の画面イメージを自動生成", href: "https://shindan.aidial.jp/" },
  { name: "イクワケ", desc: "地域事業者向けの顧客管理サービス", href: "https://ikuwake.bgm-works.com/" },
  { name: "RunNavi（ランナビ）", desc: "全国のマラソン大会情報サイト", href: "https://runnavi.aidial.jp/" },
  { name: "花火大会ナビ", desc: "全国の花火大会情報サイト", href: "https://hanabi.aidial.jp/" },
];

const rows: ProfileRow[] = [
  { label: "会社名", value: "BGM Works株式会社" },
  { label: "ブランド名", value: "BGM（Business Growth Mechanics）" },
  { label: "設立", value: "2026年7月9日" },
  { label: "法人番号", value: "9140001143437" },
  { label: "所在地", value: "兵庫県南あわじ市阿那賀1629番260" },
  {
    // 定款の事業目的（bgm-ops/00_起業準備/07_事業目的_法人化.md 確定版）から顧客に関係する号を抜粋
    label: "事業内容",
    value: (
      <ul className="list-disc space-y-1 pl-5">
        <li>ソフトウェア及びウェブアプリケーション、モバイルアプリケーションの企画、設計、開発、運営、販売及び保守</li>
        <li>業務自動化及び業務改善に関するコンサルティング並びにシステムの提供</li>
        <li>経営、業務、ITの活用及びデジタル変革（DX）に関するコンサルティング業務</li>
        <li>SaaS及びクラウドサービス並びに顧客管理（CRM）等の業務システムの企画、開発、提供及び運営</li>
        <li>ウェブサイト及びホームページの企画、制作、運営並びにこれらに関する保守、コンサルティング</li>
        <li>インターネット広告、SNS運用代行その他デジタルマーケティングの企画、運用及び支援</li>
        <li>動画、音声、画像その他デジタルコンテンツの企画、制作、編集及び販売</li>
        <li>オンライン教育講座及びeラーニングコンテンツの企画、制作、配信及び販売</li>
      </ul>
    ),
  },
  {
    label: "主なサービス",
    value: (
      <ul className="space-y-1.5">
        {services.map((s) => (
          <li key={s.name}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {s.name}
            </a>
            <span className="ml-2">{s.desc}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: "公告方法",
    value: (
      <>
        電子公告（
        <Link href="/koukoku" className="text-primary hover:underline">
          電子公告ページ
        </Link>
        ）
      </>
    ),
  },
  {
    label: "お問い合わせ",
    value: (
      <Link href="/contact" className="text-primary hover:underline">
        お問い合わせフォーム
      </Link>
    ),
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="bg-muted/35 py-20">
        <div className="container-narrow">
          <SectionHeader
            label="COMPANY"
            title="会社概要"
            subtitle="がんばりを、仕組みに変えよう。業務設計と実装力で、中小企業・個人事業主の成長を支えます。"
            align="center"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container-narrow">
          <dl className="divide-y divide-border border-y border-border">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="text-sm font-bold text-foreground">{row.label}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
