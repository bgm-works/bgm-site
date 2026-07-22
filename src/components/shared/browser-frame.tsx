import Image from "next/image";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  priority?: boolean;
};

/**
 * 実プロダクトのスクリーンショットをブラウザクローム風の枠に入れて見せる部品（v1.0 2026-07-22）。
 * UI監査/信頼性監査の共通第1指摘「実物の視覚的証拠ゼロ」への回答。
 * フラット原則維持: 影・グラデ無し。枠は border、上部バーは muted 面 + ドット3つのみ。
 * スクショは public/screenshots/（Playwright 実撮影 1440x900）。手貼り・偽造はしない。
 */
export function BrowserFrame({ src, alt, url, className, priority = false }: BrowserFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </span>
        {url ? (
          <span className="ml-2 truncate font-numeric text-xs text-muted-foreground">{url}</span>
        ) : null}
      </div>
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        priority={priority}
        className="h-auto w-full"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}
