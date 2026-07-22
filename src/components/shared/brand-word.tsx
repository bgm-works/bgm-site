import { cn } from "@/lib/utils";

type BrandWordProps = {
  className?: string;
};

/**
 * BGMWorks の頭文字「BGM」をブランドカラーで表示するコンポーネント。
 * v2.0 (2026-07-22): フラット原則（グラデ・影禁止）へ是正。
 *   旧実装は bg-clip-text のグラデ + drop-shadow だったが、ブランドガイド §8 Don'ts
 *   （グラデーション・影）に抵触するため、Primary ターコイズ単色に統一。
 * 参照: 08_リソース/BGMWorks_ブランドガイド.md §3・§8
 */
export function BrandWord({ className }: BrandWordProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-bold tracking-tight text-primary",
        className
      )}
      aria-label="BGM"
    >
      BGM
    </span>
  );
}
