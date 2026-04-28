import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "ブログ・コンテンツ",
  description:
    "BGM 公式のブログ・コンテンツページ。公式SNSと記事導線は準備中です。",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-muted/35 py-20">
        <div className="container-narrow">
          <SectionHeader
            label="BLOG & CONTENT"
            title="ブログ・コンテンツ"
            subtitle="BGM公式としての発信導線は準備中です。個人SNSや別ブランドの発信とは切り分けて運用します。"
            align="center"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-narrow">
          <Card className="border-border/80">
            <CardHeader>
              <Badge variant="secondary" className="w-fit">COMING SOON</Badge>
              <CardTitle>公式ブログ・SNSは準備中です</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                BGM Worksとしての発信先は、公式アカウントを整備してから掲載します。
                現時点では、個人のNote・X・Threadsなどへのリンクは掲載していません。
              </CardDescription>
            </CardContent>
          </Card>
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
