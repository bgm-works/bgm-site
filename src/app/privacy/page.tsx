import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "BGM Works株式会社の個人情報保護方針。取得する情報、利用目的、第三者提供、開示等の請求について定めます。",
  robots: { index: true, follow: true },
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "1. 事業者情報",
    body: (
      <p>
        BGM Works株式会社（兵庫県南あわじ市阿那賀1629番260。以下「当社」）は、
        当社ウェブサイト（bgm-works.com）の運営にあたり、個人情報の保護に関する法律および関連法令を遵守し、
        以下の方針に基づいて個人情報を取り扱います。
      </p>
    ),
  },
  {
    heading: "2. 取得する情報",
    body: (
      <>
        <p>当社は、お問い合わせフォームの送信を通じて、次の情報を取得します。</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>氏名</li>
          <li>会社名・屋号（任意）</li>
          <li>メールアドレス</li>
          <li>ご相談内容、ご予算の目安など、フォームに入力いただいた情報</li>
        </ul>
      </>
    ),
  },
  {
    heading: "3. 利用目的",
    body: (
      <>
        <p>取得した個人情報は、次の目的の範囲内で利用します。</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>お問い合わせ・ご相談への回答、ヒアリングの日程調整</li>
          <li>お見積もり・ご提案の作成と送付</li>
          <li>契約締結後の業務連絡</li>
        </ul>
        <p className="mt-3">上記の目的以外で利用する場合は、あらかじめご本人の同意を得ます。</p>
      </>
    ),
  },
  {
    heading: "4. 第三者提供",
    body: (
      <p>
        当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。
      </p>
    ),
  },
  {
    heading: "5. 業務委託先への預託",
    body: (
      <p>
        お問い合わせフォームの送受信には、外部サービス（Formspree, Inc.）を利用しています。
        フォームに入力された情報は同サービスのサーバーを経由して当社に届きます。
        同サービスの個人情報の取り扱いは、同社のプライバシーポリシーに従います。
      </p>
    ),
  },
  {
    heading: "6. 安全管理措置",
    body: (
      <p>
        当社は、取得した個人情報への不正アクセス、紛失、漏えい等を防止するため、
        アクセス権限の管理その他の合理的な安全管理措置を講じます。
      </p>
    ),
  },
  {
    heading: "7. 開示・訂正・削除の請求",
    body: (
      <p>
        ご本人から個人情報の開示、訂正、利用停止、削除のお申し出があった場合は、
        ご本人であることを確認のうえ、法令に従って速やかに対応します。
        お申し出は、お問い合わせフォームまたは当社メールアドレス宛にご連絡ください。
      </p>
    ),
  },
  {
    heading: "8. 改定",
    body: (
      <p>
        本ポリシーの内容は、法令の改正や取り扱いの変更に応じて改定することがあります。
        改定後の内容は本ページに掲載した時点で効力を生じます。
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-border bg-muted py-24 md:py-32">
        <div className="container-wide">
          <SectionHeader
            label="Privacy Policy"
            title="プライバシーポリシー"
            subtitle="BGM Works株式会社の個人情報保護方針です。"
            hero
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container-narrow space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-bold tracking-tight">{s.heading}</h2>
              <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</div>
            </div>
          ))}
          <p className="border-t border-border pt-6 text-sm text-muted-foreground">
            制定日: 2026年7月22日
            <br />
            BGM Works株式会社
          </p>
        </div>
      </section>
    </>
  );
}
