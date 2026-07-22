import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { ContactForm } from "@/components/contact/contact-form";
import { ObfuscatedEmail } from "@/components/contact/obfuscated-email";

const notes = [
  {
    title: "返信は24時間以内",
    desc: "土日祝日を除く平日にご連絡します。急ぎの場合はその旨をお書きください。",
  },
  {
    title: "ヒアリングは30分",
    desc: "Zoom or Google Meetで実施。画面共有で業務を見せていただくと、より具体的なご提案ができます。",
  },
  {
    title: "秘密保持は万全",
    desc: "ヒアリングで伺った内容は外部に共有しません。必要であればNDA締結も対応します。",
  },
];

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "BGM へのお問い合わせ・無料ヒアリング予約はこちら。30分のオンライン相談で、業務の「面倒」を一緒に整理します。",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/30 py-24 md:py-32">
        <div className="container-wide">
          <SectionHeader
            label="Contact"
            title="お問い合わせ"
            subtitle="「この作業、どれくらい軽くできる？」「費用対効果は合う？」どんな小さな疑問でも、気軽にどうぞ。"
            hero
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-8">
            <div>
              <h2 className="mb-5 text-lg font-bold tracking-tight">ご連絡の前に</h2>
              <div className="border-t border-border">
                {notes.map((item, i) => (
                  <div key={item.title} className="flex gap-4 border-b border-border py-5">
                    <span className="font-numeric text-sm text-warm-accent">0{i + 1}</span>
                    <div>
                      <p className="mb-1 text-sm font-bold">{item.title}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-border bg-muted/25">
              <CardHeader>
                <CardTitle className="text-sm">直接メール</CardTitle>
              </CardHeader>
              <CardContent>
              <ObfuscatedEmail className="text-sm font-medium text-primary hover:underline" />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">お問い合わせフォーム</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
