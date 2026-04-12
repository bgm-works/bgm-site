import type { Metadata } from "next";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "BGM へのお問い合わせ・無料ヒアリング予約はこちら。30分のオンライン相談で、業務の「面倒」を一緒に整理します。",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-muted/35 py-20">
        <div className="container-narrow">
          <SectionHeader
            label="CONTACT"
            title="お問い合わせ"
            subtitle="「これ、自動化できる？」「どのくらいかかる？」どんな小さな疑問でも、気軽にどうぞ。"
            align="center"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-lg font-bold">ご連絡の前に</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: Clock,
                    title: "返信は24時間以内",
                    desc: "土日祝日を除く平日にご連絡します。急ぎの場合はその旨をお書きください。",
                  },
                  {
                    icon: MessageSquare,
                    title: "ヒアリングは30分",
                    desc: "Zoom or Google Meetで実施。画面共有で業務を見せていただくと、より具体的なご提案ができます。",
                  },
                  {
                    icon: Mail,
                    title: "秘密保持は万全",
                    desc: "ヒアリングで伺った内容は外部に共有しません。必要であればNDA締結も対応します。",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-bold">{item.title}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="border-border/80 bg-muted/25">
              <CardHeader>
                <CardTitle className="text-sm">直接メール</CardTitle>
              </CardHeader>
              <CardContent>
              <a
                href="mailto:info@bgm-works.com"
                className="text-sm font-medium text-primary hover:underline"
              >
                info@bgm-works.com
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                ※ドメインメールは設定後に有効になります
              </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-border/80">
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
