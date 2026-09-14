"use client";

import { useEffect, useRef, useState } from "react";

export type BarDatum = {
  label: string;
  value: number;
  max: number;
  valueLabel: string;
};

// A small, dependency-free comparison chart: horizontal bars that animate in
// (width 0 to target) the first time they scroll into view. No charting
// library needed for a handful of comparison numbers, and it picks up each
// case's own accent color so it reads as part of that case's branding
// rather than a bolted-on generic widget.
export default function BarChart({
  bars,
  accent,
  title,
}: {
  bars: BarDatum[];
  accent: string;
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-6 flex max-w-md flex-col gap-4">
      {title && (
        <span className="font-grotesk text-[10px] font-bold uppercase tracking-[0.1em] text-inkSecondary">
          {title}
        </span>
      )}
      {bars.map((bar, i) => (
        <div key={bar.label} className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-grotesk text-[11px] font-bold uppercase tracking-[0.08em] text-inkSecondary">
              {bar.label}
            </span>
            <span className="font-grotesk text-[13px] font-bold text-ink">{bar.valueLabel}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-rule">
            <div
              className="h-full rounded-full transition-[width] duration-[1100ms] ease-out"
              style={{
                width: visible ? `${Math.min(100, (bar.value / bar.max) * 100)}%` : "0%",
                backgroundColor: accent,
                transitionDelay: `${i * 150}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
