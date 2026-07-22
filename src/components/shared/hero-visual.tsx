import { cn } from "@/lib/utils";

/**
 * BGM の署名ビジュアル v2.0（2026-07-22 UI監査反映）。
 * v1 は「Excel の折れ線グラフ」に見える弱さ＋モバイル非表示が問題だった。
 * v2 は同心アーク（架け橋）を主役化し、セクション右下から裁ち落とすスケールで置く前提の造形。
 * 成長線は太い1本に絞り stroke-dasharray の一回描画（.draw-line）で入場させる。
 * フラット原則維持: 塗り無し・線と点のみ。頂点のテラコッタが唯一の点アクセント。
 * 配置側で absolute + overflow-hidden + text 色を与える（モバイルでも表示する）。
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      role="img"
      aria-label="架け橋を描く同心の弧と、上昇する成長の線"
      className={cn("h-full w-auto", className)}
      fill="none"
      preserveAspectRatio="xMaxYMax meet"
    >
      {/* 同心アーク（右下の角を中心に、画面外へ裁ち落とす想定の大きさ） */}
      <g stroke="currentColor" strokeWidth="1.5">
        <circle cx="600" cy="600" r="560" strokeOpacity="0.14" />
        <circle cx="600" cy="600" r="460" strokeOpacity="0.20" />
        <circle cx="600" cy="600" r="360" strokeOpacity="0.26" />
        <circle cx="600" cy="600" r="260" strokeOpacity="0.32" />
        <circle cx="600" cy="600" r="160" strokeOpacity="0.40" />
      </g>

      {/* 成長線: アークを横切って右上へ抜ける1本。draw-line で一回描画 */}
      <path
        d="M 40 560 C 200 540, 330 470, 420 350 S 540 140, 570 60"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="draw-line"
      />

      {/* 到達点: テラコッタの点アクセント（唯一の色） */}
      <circle cx="570" cy="60" r="9" fill="var(--warm-accent)" />
      <circle cx="570" cy="60" r="20" stroke="var(--warm-accent)" strokeOpacity="0.45" strokeWidth="1.5" />
    </svg>
  );
}
