"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

type Props = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  accent: string;
  isHovered: boolean;
};

export default function ProjectCardGlow({
  mouseX,
  mouseY,
  accent,
  isHovered,
}: Props) {
  // Convert normalized 0..1 coordinates into percentage strings
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(520px circle at ${x * 100}% ${y * 100}%, ${accent}22, transparent 65%)`
  );

  const borderGlow = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(380px circle at ${x * 100}% ${y * 100}%, ${accent}55, transparent 60%)`
  );

  return (
    <>
      {/* Dynamic Surface Light Following Mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] transition-opacity duration-500 ease-out"
        style={{
          background,
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Subtle Dynamic Border Halo */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[2rem] p-px opacity-0 transition-opacity duration-300 ease-out"
        style={{
          background: borderGlow,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: isHovered ? 0.8 : 0,
        }}
        aria-hidden="true"
      />

      {/* Subtle Ambient Corner Aura */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl opacity-10 transition-all duration-700 ease-out"
        style={{
          background: accent,
          opacity: isHovered ? 0.28 : 0.08,
          transform: isHovered ? "scale(1.2)" : "scale(1)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
