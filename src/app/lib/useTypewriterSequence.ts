"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from "react";

export type LineType = "cmd" | "out";

export type Line = {
  type: LineType;
  text: string;
  delay?: number;
  speed?: number;
};

export type RenderedLine = {
  type: LineType;
  text: string;
};

export type UseTypewriterSequenceOptions = {
  loop?: boolean;
  pauseMs?: number;
  onEndCycle?: () => void;
};

export type UseTypewriterSequenceReturn = {
  lines: RenderedLine[];
  cursor: {
    active: boolean;
    lineType: LineType | null;
  };
  restart: () => void;
};

const DEFAULT_SPEED = 22;
const END_PAUSE_MS = 1200;

const addTimeout = (timeouts: MutableRefObject<number[]>, cb: () => void, delay: number) => {
  const id = window.setTimeout(cb, delay);
  timeouts.current.push(id);
};

const clearAllTimeouts = (timeouts: MutableRefObject<number[]>) => {
  timeouts.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
  timeouts.current = [];
};

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

export const useTypewriterSequence = (
  sequence: Line[],
  options: UseTypewriterSequenceOptions = {}
): UseTypewriterSequenceReturn => {
  const { loop = true, pauseMs = END_PAUSE_MS, onEndCycle } = options;

  const [renderedLines, setRenderedLines] = useState<RenderedLine[]>([]);
  const [cursor, setCursor] = useState<{ active: boolean; lineType: LineType | null }>(
    () => ({ active: false, lineType: null })
  );

  const timeoutsRef = useRef<number[]>([]);
  const runLineRef = useRef<(index: number) => void>();
  const charIndexRef = useRef(0);
  const isRunningRef = useRef(false);

  const prefersReducedMotion = usePrefersReducedMotion();

  const normalizedSequence = useMemo(() => sequence ?? [], [sequence]);

  const resetState = useCallback(() => {
    clearAllTimeouts(timeoutsRef);
    charIndexRef.current = 0;
    setRenderedLines([]);
    setCursor({ active: false, lineType: null });
  }, []);

  const runLine = useCallback(
    (index: number) => {
      const line = normalizedSequence[index];

      if (!line) {
        isRunningRef.current = false;
        setCursor((prev) => (prev.active ? { active: false, lineType: null } : prev));
        onEndCycle?.();

        if (loop && normalizedSequence.length) {
          addTimeout(timeoutsRef, () => {
            resetState();
            isRunningRef.current = true;
            runLineRef.current?.(0);
          }, pauseMs);
        }

        return;
      }

      const delay = line.delay ?? 0;

      addTimeout(timeoutsRef, () => {
        const scheduleNextLine = (nextIndex: number, extraDelay = 0) => {
          addTimeout(timeoutsRef, () => {
            charIndexRef.current = 0;
            runLineRef.current?.(nextIndex);
          }, extraDelay);
        };

        if (line.type === "cmd") {
          const effectiveSpeed = prefersReducedMotion ? 0 : Math.max(6, line.speed ?? DEFAULT_SPEED);

          setCursor({ active: !prefersReducedMotion, lineType: "cmd" });
          setRenderedLines((prev) => [...prev, { type: "cmd", text: prefersReducedMotion ? line.text : "" }]);

          if (prefersReducedMotion || effectiveSpeed === 0) {
            setCursor({ active: false, lineType: null });
            scheduleNextLine(index + 1, prefersReducedMotion ? 0 : 140);
            return;
          }

          const typeNextCharacter = () => {
            const currentLineText = line.text ?? "";
            const nextCharIndex = charIndexRef.current;
            const nextText = currentLineText.slice(0, nextCharIndex + 1);

            setRenderedLines((prev) => {
              const updated = [...prev];
              const lastIndex = updated.length - 1;
              updated[lastIndex] = { type: "cmd", text: nextText };
              return updated;
            });

            charIndexRef.current += 1;

            if (charIndexRef.current < currentLineText.length) {
              addTimeout(timeoutsRef, typeNextCharacter, effectiveSpeed);
            } else {
              setCursor({ active: false, lineType: null });
              scheduleNextLine(index + 1, 160);
            }
          };

          charIndexRef.current = 0;
          typeNextCharacter();
        } else {
          setRenderedLines((prev) => [...prev, { type: "out", text: line.text }]);
          scheduleNextLine(index + 1, prefersReducedMotion ? 0 : 120);
        }
      }, delay);
    },
    [loop, normalizedSequence, onEndCycle, pauseMs, prefersReducedMotion, resetState]
  );

  const restart = useCallback(() => {
    resetState();
    if (!normalizedSequence.length) {
      return;
    }
    isRunningRef.current = true;
    runLineRef.current?.(0);
  }, [normalizedSequence, resetState]);

  useEffect(() => {
    runLineRef.current = runLine;
  }, [runLine]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      restart();
    }, 0);

    return () => {
      window.clearTimeout(id);
      clearAllTimeouts(timeoutsRef);
    };
  }, [restart, prefersReducedMotion]);

  return { lines: renderedLines, cursor, restart };
};
