import { cn } from "@/lib/utils";

type BrandSubtitleProps = {
  className?: string;
};

export function BrandSubtitle({ className }: BrandSubtitleProps) {
  return (
    <span className={cn("tracking-[0.22em] uppercase text-muted-foreground", className)}>
      <span className="font-semibold text-[#d22c2c]">B</span>usiness{" "}
      <span className="font-semibold text-[#d22c2c]">G</span>rowth{" "}
      <span className="font-semibold text-[#d22c2c]">M</span>echanics
    </span>
  );
}
