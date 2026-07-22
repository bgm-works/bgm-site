import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * editorial セクション見出し（v2.0 2026-07-22）。
 * - eyebrow は small-caps + テラコッタの先頭ティック（.section-eyebrow）。中央寄せ時はティック非表示。
 * - 左寄せを既定にし、余白と罫線で構造を作る editorial 方針に合わせる。
 */
export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={cn(centered ? "text-center" : "text-left", className)}>
      <p className={cn("section-eyebrow uppercase", centered && "no-tick justify-center")}>
        {label}
      </p>
      <h2 className="section-title mt-4">{title}</h2>
      {subtitle ? (
        <p className={cn("section-subtitle max-w-2xl", centered && "mx-auto")}>{subtitle}</p>
      ) : null}
    </div>
  );
}
