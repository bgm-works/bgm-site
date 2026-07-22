import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  hero?: boolean;
  className?: string;
};

/**
 * セクション/ページ見出し（v3.0 2026-07-22）。
 * - eyebrow は small-caps + テラコッタの先頭ティック（.section-eyebrow）。中央寄せ時はティック非表示。
 * - hero=true でページ先頭見出しを display スケール（大きく詰めて）に。
 */
export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  hero = false,
  className,
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={cn(centered ? "text-center" : "text-left", className)}>
      <p className={cn("section-eyebrow uppercase", centered && "no-tick justify-center")}>
        {label}
      </p>
      {hero ? (
        <h1 className="display-lg mt-6">{title}</h1>
      ) : (
        <h2 className="section-title mt-4">{title}</h2>
      )}
      {subtitle ? (
        <p className={cn("section-subtitle max-w-2xl text-base md:text-lg", centered && "mx-auto")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
