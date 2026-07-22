import { cn } from "@/lib/utils";

type BrandSubtitleProps = {
  className?: string;
};

/**
 * ロゴ「BGM」直下のサブタイトル「Business Growth Mechanics」。
 * v2.0 (2026-07-22): プレミアム/端正な印象のため、頭文字ごとの色分け（Coca-Cola 調）を撤去し、
 * 均一なトラッキングのミュートテキストに統一。
 */
export function BrandSubtitle({ className }: BrandSubtitleProps) {
  return (
    <span className={cn("tracking-[0.22em] uppercase text-muted-foreground", className)}>
      Business Growth Mechanics
    </span>
  );
}
