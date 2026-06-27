"use client";

import { useEffect, useRef } from "react";

/**
 * 迷惑メール対策: メールアドレスを静的/SSR の HTML に平文で出さず、
 * マウント後にクライアント側で組み立てて DOM に差し込む。
 * これにより HTML をそのまま読むスクレイパには `info@bgm-works.com` が拾われない。
 * （setState を使わず ref 経由で書き換えるのは react-hooks/set-state-in-effect 回避のため）
 */
export function ObfuscatedEmail({ className }: { className?: string }) {
  const holderRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const holder = holderRef.current;
    if (!holder) return;
    const addr = ["info", "bgm-works.com"].join("@");
    const link = document.createElement("a");
    link.href = `mailto:${addr}`;
    link.textContent = addr;
    if (className) link.className = className;
    holder.textContent = "";
    holder.appendChild(link);
  }, [className]);

  return (
    <span ref={holderRef} className={className}>
      メールアドレスを表示中…
    </span>
  );
}
