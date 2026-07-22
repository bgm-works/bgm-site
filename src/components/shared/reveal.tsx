"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * 入場アニメーション（v2.1 2026-07-22）。
 * - SSR/JS無効時は data-visible 属性を付けない → CSS 側でアニメ対象外＝常に表示（noscript 安全）。
 * - 状態は IntersectionObserver のコールバックでのみ更新する（effect 内の同期 setState を避ける）。
 *   初回コールバックで画面内なら "true"（既に見えている要素は動かさない）、
 *   画面外なら "false"（opacity 0 で待機）→ スクロールで入った時に "true" で一回だけ入場。
 */
export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<"hidden" | "shown" | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState("shown");
            observer.disconnect();
          } else {
            setState((prev) => prev ?? "hidden");
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={state === null ? undefined : state === "shown" ? "true" : "false"}
      className={cn("animate-reveal", className)}
    >
      {children}
    </div>
  );
}
