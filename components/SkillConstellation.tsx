"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";

function CategoryIcon({ type, accent }: { type: string; accent: string }) {
  if (type === "brain") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" />
      </svg>
    );
  }
  if (type === "sparkles") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" />
        <path d="m3.27 8.01 8.73 4.99 8.73-4.99" />
        <path d="M12 23V13" />
      </svg>
    );
  }
  if (type === "server") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" strokeWidth="2.5" />
        <line x1="6" x2="6.01" y1="18" y2="18" strokeWidth="2.5" />
        <line x1="10" x2="18" y1="6" y2="6" />
        <line x1="10" x2="18" y1="18" y2="18" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke={accent}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="m12 12 3 3m0 0 3-3m-3 3V8" />
    </svg>
  );
}

function Skill3DCard({
  group,
  index,
  reduced,
}: {
  group: (typeof skillGroups)[number];
  index: number;
  reduced: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    setCoords({ x: px * 100, y: py * 100 });

    const maxTilt = 9;
    const rotateY = (px - 0.5) * (maxTilt * 2);
    const rotateX = -(py - 0.5) * (maxTilt * 2);
    setTilt({ x: rotateX, y: rotateY });
  };

  const onPointerEnter = () => {
    setHovered(true);
  };

  const onPointerLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={
        reduced
          ? { opacity: 0 }
          : { opacity: 0, y: 95, scale: 0.88, rotateX: 22 }
      }
      whileInView={
        reduced
          ? { opacity: 1 }
          : { opacity: 1, y: 0, scale: 1, rotateX: 0 }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 14,
        mass: 0.85,
        delay: index * 0.12,
      }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        data-hot
        onPointerMove={onPointerMove}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className="tilt-card glass group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.25rem] p-7 transition-all duration-300 md:p-8"
        style={{
          transform:
            hovered && !reduced
              ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
              : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d",
          boxShadow:
            hovered && !reduced
              ? `0 24px 60px -15px ${group.accent}30, 0 0 20px -5px ${group.accent}20`
              : "0 10px 30px -10px rgba(0,0,0,0.5)",
        }}
      >
        {/* Dynamic pointer spotlight */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[2.25rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at ${coords.x}% ${coords.y}%, ${group.accent}25, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Ambient corner aura */}
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full blur-3xl opacity-15 transition-all duration-700 group-hover:opacity-35 group-hover:scale-125"
          style={{ background: group.accent }}
          aria-hidden="true"
        />

        {/* Card Header Layer */}
        <div className="relative" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
                style={{ borderColor: `${group.accent}45` }}
              >
                {/* <CategoryIcon type={group.icon} accent={group.accent} /> */}
              </span>
              <span
                className="font-mono text-[11px] font-medium tracking-[0.24em] uppercase"
                style={{ color: group.accent }}
              >
                {group.tag}
              </span>
            </div>
            <span className="font-mono text-xs text-mute/50 tracking-wider">
              0{index + 1}
            </span>
          </div>

          <div className="mt-6" style={{ transform: "translateZ(26px)" }}>
            <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
              {group.group}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              {group.description}
            </p>
          </div>
        </div>

        {/* Skills Chips Layer */}
        <div className="relative mt-7" style={{ transform: "translateZ(38px)" }}>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-ink/90 backdrop-blur-sm transition-all duration-200 hover:border-gold/60 hover:bg-white/[0.08] hover:text-ink hover:scale-105"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Status Layer */}
        <div
          className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-4"
          style={{ transform: "translateZ(24px)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ background: group.accent }}
              aria-hidden="true"
            />
            <span className="font-mono text-[11px] tracking-wider text-mute">
              {group.highlight}
            </span>
          </div>
          <span
            className="font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 group-hover:text-ink"
            style={{ color: group.accent }}
          >
            Core Domain →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillConstellation() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,179,106,0.08),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 25 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Skills & Capabilities</p>
          <h2 className="display mt-4 text-4xl md:text-6xl">
            A technology constellation.
          </h2>
          <p className="mt-4 text-mute leading-relaxed">
            Four primary engineering pillars orbiting applied intelligence, full-stack systems, and tactile web interfaces.
          </p>
        </motion.div>

        {/* 3D Pop-Up Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Skill3DCard
              key={group.group}
              group={group}
              index={index}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </section>
  );
}