"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type StatCounterProps = {
  value: string;
  label: string;
};

function parseCounterValue(value: string) {
  const match = value.match(/\d+/);
  if (!match) return { target: null as number | null, prefix: "", suffix: value };

  const number = Number(match[0]);
  const start = match.index ?? 0;
  const end = start + match[0].length;
  return {
    target: number,
    prefix: value.slice(0, start),
    suffix: value.slice(end),
  };
}

export function StatCounter({ value, label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const parsed = useMemo(() => parseCounterValue(value), [value]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || parsed.target === null) return;

    const duration = 900;
    const startAt = performance.now();
    const target = parsed.target;
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - startAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, parsed.target]);

  const display =
    parsed.target === null ? value : `${parsed.prefix}${count.toLocaleString()}${parsed.suffix}`;

  return (
    <div ref={ref} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <p className="text-4xl font-bold text-white">{display}</p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  );
}
