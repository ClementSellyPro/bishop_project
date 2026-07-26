"use client";

import { useEffect, useRef, useState } from "react";

type RotatingWordsProps = {
  words?: string[];
  visibleCount?: number;
  itemHeight?: number;
  intervalMs?: number;
  transitionMs?: number;
  className?: string;
};

const DEFAULT_WORDS = [
  "Imagine",
  "Design",
  "Prototype",
  "Build",
  "Refine",
  "Ship",
  "Iterate",
];

export default function RotatingWords({
  words = DEFAULT_WORDS,
  visibleCount = 5,
  itemHeight = 48,
  intervalMs = 3000,
  transitionMs = 600,
  className = "",
}: RotatingWordsProps) {
  const [index, setIndex] = useState(words.length);
  const [withTransition, setWithTransition] = useState(true);
  const resetTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const id = setInterval(() => {
      setWithTransition(true);
      setIndex((prev) => prev + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  useEffect(() => {
    if (index === words.length * 2) {
      resetTimeout.current = setTimeout(() => {
        setWithTransition(false);
        setIndex(words.length);
      }, transitionMs);
    }
    return () => clearTimeout(resetTimeout.current);
  }, [index, words.length, transitionMs]);

  const loopedWords = [...words, ...words, ...words];
  const containerHeight = itemHeight * visibleCount;

  const centerOffset = Math.floor(visibleCount / 2);

  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      style={{
        height: containerHeight,
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
      }}
    >
      <div
        style={{
          transform: `translateY(${
            -index * itemHeight + centerOffset * itemHeight
          }px)`,
          transition: withTransition
            ? `transform ${transitionMs}ms cubic-bezier(0.65, 0, 0.35, 1)`
            : "none",
        }}
      >
        {loopedWords.map((word, i) => (
          <div
            key={i}
            className="text-4xl tracking-[2px] text-neutral-900 dark:text-neutral-100"
            style={{ height: itemHeight }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}
