import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "BGM Works株式会社の会社概要。AIを活用した業務改善支援、Webアプリケーション開発、デジタルマーケティング支援を提供しています。",
  robots: { index: true, follow: true },
};

type ProfileRow = {
  label: string;
  value: React.ReactNode;
};

const rows: ProfileRow[] = [
  { label: "会社名", value: "BGM Works株式会社" },
  { label: "ブランド名", value: "BGM（Business Growth Mechanics）" },
  { label: "所在地", value: "兵庫県南あわじ市阿那賀1629番260" },
  {
    label: "事業内容",
    value: (
      <ul className="list-disc space-y-1 pl-5">
        <li>AIを活用した業務改善・業務自動化の支援</li>
        <li>Webアプリケーション・業務システムの企画、開発、保守</li>
        <li>AIを活用した集客・デジタルマーケティングの支援</li>
        <li>個人クリエイター向けのバックオフィス改善支援</li>
        <li>デジタルコンテンツ・オンライン講座の制作、販売</li>
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
