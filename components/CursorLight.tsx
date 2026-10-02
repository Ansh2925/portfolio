"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";

export default function CursorLight() {
  const light = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    let hasMoved = false;

    const onMove = (event: PointerEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        light.current?.classList.add("is-active");
        cursor.current?.classList.add("is-active");
      }

      const x = event.clientX;
      const y = event.clientY;

      if (light.current) {
        light.current.style.left = `${x}px`;
        light.current.style.top = `${y}px`;
      }
      if (cursor.current) {
        cursor.current.style.left = `${x}px`;
        cursor.current.style.top = `${y}px`;
      }
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      // If hovering input or textarea, let native text caret take over
      const isInput = Boolean(target?.closest("input, textarea"));
      if (isInput) {
        if (cursor.current) {
          cursor.current.classList.remove("is-hot", "is-active");
        }
        return;
      }

      if (hasMoved && cursor.current) {
        cursor.current.classList.add("is-active");
      }

      const hot = Boolean(target?.closest("a, button, [data-hot]"));
      cursor.current?.classList.toggle("is-hot", hot);
    };

    const onLeave = () => {
      light.current?.classList.remove("is-active");
      cursor.current?.classList.remove("is-active");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <div ref={light} className="cursor-light" aria-hidden="true" />
      <div ref={cursor} className="custom-cursor" aria-hidden="true" />
    </>
  );
}