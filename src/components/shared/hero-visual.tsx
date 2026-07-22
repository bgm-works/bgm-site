import { cn } from "@/lib/utils";

/**
 * BGM の署名ビジュアル（v1.0 2026-07-22）。
 * 「Business Growth Mechanics」= 連結したノード（メカニクス）を貫いて上昇する成長線 ＋ 同心アーク（架け橋）。
 * 写真素材に頼らずプレミアム感を出すためのフラットな線画。ブランドのフラット原則（影・塗りグラデ無し）を維持し、
 * 線と点だけで構成。テラコッタのノードは「点アクセント」（ブランドガイド §5）。
 * currentColor を基調にするため、配置側で text 色（例: text-primary-foreground）を与える。
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 440"
      role="img"
      aria-label="連結したノードを貫いて上昇する成長の線"
      className={cn("h-auto w-full", className)}
      fill="none"
    >
      {/* 同心アーク（架け橋のモチーフ） */}
      <g stroke="currentColor" strokeOpacity="0.16" strokeWidth="1.25">
        <path d="M60 400 A 340 340 0 0 1 400 60" />
        <path d="M60 400 A 250 250 0 0 1 310 150" />
        <path d="M60 400 A 160 160 0 0 1 220 240" />
      </g>

      {/* 補助グリッド（メカニクスの精密さ） */}
      <g stroke="currentColor" strokeOpacity="0.10" strokeWidth="1">
        <line x1="60" y1="400" x2="480" y2="400" />
        <line x1="60" y1="400" x2="60" y2="40" />
      </g>

      {/* 成長の折れ線（上昇） */}
      <polyline
        points="60,360 150,320 240,300 320,220 400,150 470,80"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ノード（連結点）。頂点はテラコッタの点アクセント */}
      <g>
        {[
          [60, 360],
          [150, 320],
          [240, 300],
          [320, 220],
          [400, 150],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
        ))}
        <circle cx="470" cy="80" r="8" fill="var(--warm-accent)" />
        <circle cx="470" cy="80" r="16" stroke="var(--warm-accent)" strokeOpacity="0.4" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
