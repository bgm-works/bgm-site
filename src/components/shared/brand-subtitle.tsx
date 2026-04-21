import { cn } from "@/lib/utils";

type BrandSubtitleProps = {
  className?: string;
};

/**
 * BGMWorks ロゴ「BGM」直下のサブタイトル「Business Growth Mechanics」。
 * Header / Footer のロゴ下部に表示。
 *
 * v1.0 r2 (2026-04-21):
 *  - 旧赤 (#d22c2c) → BGMWorks Primary Turquoise (#0E8B8B)
 *  - 頭文字を font-extrabold で「色 + 太さ」両方で強調 (色だけだと弱かった)
 *  - tracking-[0.22em] 下で太字 glyph の右側に letter-spacing が乗ると
 *    「頭文字と次の文字が離れる」ため、各頭文字 span に -mr-[0.05em] を掛けて
 *    視覚的な字間を周辺と均一に揃える。
 */
export function BrandSubtitle({ className }: BrandSubtitleProps) {
  return (
    <span
      className={cn(
        "tracking-[0.22em] uppercase text-muted-foreground",
        className
      )}
    >
      <span className="font-extrabold text-[#0E8B8B] -mr-[0.05em]">B</span>usiness{" "}
      <span className="font-extrabold text-[#0E8B8B] -mr-[0.05em]">G</span>rowth{" "}
      <span className="font-extrabold text-[#0E8B8B] -mr-[0.05em]">M</span>echanics
    </span>
  );
}
