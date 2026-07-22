import { cn } from "@/lib/utils";

type StatCounterProps = {
  value: string;
  label: string;
  className?: string;
};

/**
 * editorial 統計ブロック（v2.0 2026-07-22）。
 * 旧実装のガラス面（bg-white/15）・影・backdrop-blur・カウントアップ演出は
 * フラット原則（§8 Don'ts 影／グラデ）と「静かな専門性」方針に反するため撤去。
 * 数値は等幅 tabular（.font-numeric）で桁を揃え、罫線と余白で示す。
 */
export function StatCounter({ value, label, className }: StatCounterProps) {
  return (
    <div className={cn("border-l-2 border-primary/70 pl-4", className)}>
      <p className="font-numeric text-4xl font-semibold text-foreground md:text-5xl">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}
