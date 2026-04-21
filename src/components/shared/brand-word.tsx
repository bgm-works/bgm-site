import { cn } from "@/lib/utils";

type BrandWordProps = {
  className?: string;
};

/**
 * BGMWorks の頭文字「BGM」をブランドカラーで表示するコンポーネント。
 * v1.0 (2026-04-21): 旧赤グラデ (Coca-Cola 風) → BGMWorks 中間ターコイズの階調に変更。
 * 背景: ウォームホワイト (#FAFAF8) 上で AAA 視認性を確保するため、
 *       下端は深ターコイズ (#08545A、コントラスト比 7.5:1) で着地させる。
 * 参照: 08_リソース/BGMWorks_ブランドガイド.md
 */
export function BrandWord({ className }: BrandWordProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[0.02em] font-extrabold tracking-tight",
        className
      )}
      aria-label="BGM"
    >
      <span className="bg-gradient-to-b from-[#0E8B8B] via-[#0A7376] to-[#08545A] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(8,84,90,0.18)]">
        B
      </span>
      <span className="bg-gradient-to-b from-[#108F8F] via-[#0C7173] to-[#073F44] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(8,84,90,0.18)]">
        G
      </span>
      <span className="bg-gradient-to-b from-[#0E8B8B] via-[#0A7376] to-[#08545A] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(8,84,90,0.18)]">
        M
      </span>
    </span>
  );
}
