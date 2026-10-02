"use client";

import { useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  className?: string;
};

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "primary",
  type = "button",
  className = "",
}: Props) {
  const reduced = useReducedMotion();
  const styles =
    variant === "primary"
      ? "bg-ink text-void hover:shadow-glow"
      : "border border-white/10 text-ink hover:border-gold/50 hover:text-gold";
  const cls = `magnetic inline-flex items-center justify-center rounded-full px-6 py-3 text-sm tracking-wide ${styles} ${className}`;

  const magnetize = (event: React.PointerEvent<HTMLElement>) => {
    if (reduced) return;
    const node = event.currentTarget;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
  };

  const reset = (event: React.PointerEvent<HTMLElement>) => {
    event.currentTarget.style.transform = "translate(0, 0)";
  };

  if (href) {
    return (
      <a href={href} onClick={onClick} onPointerMove={magnetize} onPointerLeave={reset} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} onPointerMove={magnetize} onPointerLeave={reset} className={cls}>
      {children}
    </button>
  );
}