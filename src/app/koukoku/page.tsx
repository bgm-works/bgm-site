import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "電子公告",
  description: "BGM Works株式会社の電子公告掲載ページ。決算公告その他の公告を掲載します。",
  robots: { index: true, follow: true },
};

const COMPANY_NAME = "BGM Works株式会社";

// 決算公告は第1期決算確定後に追記する。掲載は5年間継続すること（会社法440条）。
// 例: { term: "第1期", title: "決算公告（貸借対照表の要旨）", date: "2027-XX-XX", href: "/koukoku/2027-bs.pdf" }
type Notice = {
  term: string;
  title: string;
  date: string;
  href?: string;
};

const notices: Notice[] = [];

export default function KoukokuPage() {
  return (
    <>
      <section className="border-b border-border bg-muted py-24 md:py-32">
        <div className="container-wide">
          <SectionHeader
            label="Public Notice"
            title="電子公告"
            subtitle={`${COMPANY_NAME}は、当ページにおいて電子公告を行います。`}
            hero
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container-narrow space-y-10">
          {notices.length > 0 ? (
            <ul className="space-y-4">
              {notices.map((notice) => (
                <li key={`${notice.term}-${notice.title}`}>
                  <Card className="border-border/80">
                    <CardContent className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-3">
                        <FileText size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                        <div>
                          <p className="text-sm font-bold">
                            {notice.term}　{notice.title}
                          </p>
                          <p className="text-sm text-muted-foreground">掲載日: {notice.date}</p>
                        </div>
                      </div>
                      {notice.href ? (
                        <a
                          href={notice.href}
                          className="text-sm font-medium text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          公告を表示
                        </a>
                      ) : null}
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          ) : (
            <Card className="border-border/80 bg-muted/25">
              <CardContent className="py-10 text-center">
                <p className="text-sm text-muted-foreground">
                  現在、掲載中の公告はありません。
                </p>
              </CardContent>
            </Card>
          )}

          <div className="space-y-3 border-t border-border/60 pt-8 text-sm leading-relaxed text-muted-foreground">
            <p>
              {COMPANY_NAME}の公告は、電子公告の方法により当ページに掲載して行います。ただし、事故その他やむを得ない事由によって電子公告による公告をすることができない場合は、官報に掲載して行います。
            </p>
            <p>
              決算公告は、会社法第440条の定めにより、当ページに掲載した日から5年間継続して掲載します。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
