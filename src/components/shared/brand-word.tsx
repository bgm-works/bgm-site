import { cn } from "@/lib/utils";

type BrandWordProps = {
  className?: string;
};

export function BrandWord({ className }: BrandWordProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[0.02em] font-extrabold tracking-tight",
        className
      )}
      aria-label="BGM"
    >
      <span className="bg-gradient-to-b from-[#ff8a8a] via-[#ea4a4a] to-[#b71c1c] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(120,8,8,0.28)]">
        B
      </span>
      <span className="bg-gradient-to-b from-[#ff7f7f] via-[#e53935] to-[#a61a1a] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(120,8,8,0.28)]">
        G
      </span>
      <span className="bg-gradient-to-b from-[#ff9b9b] via-[#ef5350] to-[#c62828] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(120,8,8,0.28)]">
        M
      </span>
    </span>
  );
}
