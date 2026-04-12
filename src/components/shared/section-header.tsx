import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <p className="section-eyebrow uppercase">{label}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {subtitle ? <p className="section-subtitle mx-auto max-w-3xl">{subtitle}</p> : null}
    </div>
  );
}
