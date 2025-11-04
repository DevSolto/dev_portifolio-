"use client";

import { useEffect, useMemo, useRef } from "react";

import {
  useTypewriterSequence,
  type Line,
  type LineType,
} from "../lib/useTypewriterSequence";

const mergeClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

type TerminalTheme = {
  textClassName?: string;
  glow?: boolean;
  cursorClassName?: string;
  glowClassName?: string;
};

type TerminalProps = {
  sequence: Line[];
  loop?: boolean;
  pauseMs?: number;
  className?: string;
  title?: string;
  prompt?: string;
  theme?: TerminalTheme;
  onEndCycle?: () => void;
};

type CursorState = {
  active: boolean;
  lineType: LineType | null;
};

const defaultTheme: TerminalTheme = {
  textClassName: "text-emerald-300",
  cursorClassName: "bg-emerald-300/80",
  glow: true,
  glowClassName: "drop-shadow-[0_0_12px_rgba(52,211,153,0.35)]",
};

export const Terminal = ({
  sequence,
  loop = true,
  pauseMs,
  className,
  title = "terminal",
  prompt = "devsouto@next:~$ ",
  theme,
  onEndCycle,
}: TerminalProps) => {
  const { lines, cursor } = useTypewriterSequence(sequence, {
    loop,
    pauseMs,
    onEndCycle,
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lastLengthRef = useRef(0);

  const mergedTheme = useMemo(
    () => ({ ...defaultTheme, ...theme }),
    [theme]
  );

  useEffect(() => {
    if (lines.length > lastLengthRef.current) {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
      }
    }
    lastLengthRef.current = lines.length;
  }, [lines]);

  const renderCursor = (cursorState: CursorState) => {
    if (!cursorState.active || cursorState.lineType !== "cmd") {
      return null;
    }

    return (
      <span
        aria-hidden="true"
        className={mergeClasses(
          "ml-1 inline-block h-[1.2em] w-[0.55ch] motion-safe:animate-pulse",
          mergedTheme.cursorClassName
        )}
      />
    );
  };

  return (
    <div
      aria-label={`Terminal interativo exibindo ${title}`}
      className={mergeClasses(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1119]/80 shadow-2xl backdrop-blur",
        className
      )}
      role="region"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-yellow-300/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true" />
        </div>
        <p className="pointer-events-none select-none text-xs font-medium uppercase tracking-[0.2em] text-white/50">
          {title}
        </p>
        <span aria-hidden="true" className="w-6" />
      </div>
      <div
        ref={scrollContainerRef}
        className="relative h-60 overflow-y-auto px-4 py-4 font-mono text-[0.85rem] leading-6 text-white/90 lg:h-80"
      >
        <div className="space-y-1">
          {lines.map((line, index) => {
            const isLastLine = index === lines.length - 1;
            if (line.type === "cmd") {
              return (
                <div key={`cmd-${index}`} className="flex">
                  <span
                    className={mergeClasses(
                      mergedTheme.textClassName,
                      mergedTheme.glow ? mergedTheme.glowClassName : undefined
                    )}
                  >
                    {prompt}
                  </span>
                  <span className="text-white/90">{line.text}</span>
                  {isLastLine && renderCursor(cursor)}
                </div>
              );
            }

            return (
              <pre
                key={`out-${index}`}
                className="whitespace-pre-wrap text-white/70"
              >
                {line.text}
                {isLastLine && renderCursor(cursor)}
              </pre>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
