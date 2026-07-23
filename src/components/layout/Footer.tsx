import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BrandWord } from "@/components/shared/brand-word";
import { BrandSubtitle } from "@/components/shared/brand-subtitle";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-muted/40">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 flex flex-col leading-none">
              <BrandWord className="text-lg" />
              <BrandSubtitle className="text-[10px]" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              がんばりを、仕組みに変えよう。<br />
              業務設計と実装力で、あなたの事業に成長の仕組みを。
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">全国対応</Badge>
              <Badge variant="secondary">オンライン完結</Badge>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-foreground">サービス</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://hp-shindan.bgm-works.com/shindan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  ホームページ無料診断
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <Link href="/services/web-production" className="text-sm text-muted-foreground hover:text-primary">
                  ホームページ制作・更新支援
                </Link>
              </li>
              <li>
                <Link href="/services/development" className="text-sm text-muted-foreground hover:text-primary">
                  受託開発
                </Link>
              </li>
              <li>
                <Link href="/services/ai-implementation" className="text-sm text-muted-foreground hover:text-primary">
                  業務改善支援
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="text-sm text-muted-foreground hover:text-primary">
                  集客・売上アップ支援
                </Link>
              </li>
              <li>
                <Link href="/services/atelier-boost" className="text-sm text-muted-foreground hover:text-primary">
                  アトリエboost
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-foreground">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/works" className="text-sm text-muted-foreground hover:text-primary">
                  実績・構築例
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                  料金
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-sm text-muted-foreground hover:text-primary">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/koukoku" className="text-sm text-muted-foreground hover:text-primary">
                  電子公告
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="my-6" />
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 BGM Works株式会社 — Business Growth Mechanics. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            全国対応 | オンラインで完結
          </p>
        </div>
      </div>
    </footer>
  );
}
