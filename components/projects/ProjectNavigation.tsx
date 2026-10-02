"use client";

import { motion } from "framer-motion";
import type { ProjectItem } from "./projectData";

type Props = {
  projects: ProjectItem[];
  currentIndex: number;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function ProjectNavigation({
  projects,
  currentIndex,
  onSelect,
  onPrev,
  onNext,
}: Props) {
  const currentProject = projects[currentIndex] || projects[0];

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between w-full max-w-2xl mx-auto pt-8">
      {/* Previous / Next Arrow Controls */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous project card"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink transition-all hover:border-gold hover:bg-white/[0.08] active:scale-95"
        >
          ←
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next project card"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink transition-all hover:border-gold hover:bg-white/[0.08] active:scale-95"
        >
          →
        </button>
        <span className="font-mono text-[10px] uppercase tracking-widest text-mute ml-2 hidden sm:inline">
          SWIPE OR USE ARROWS
        </span>
      </div>

      {/* Interactive Bullet / Pill Indicators */}
      <div className="flex items-center gap-2">
        {projects.map((project, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelect(idx)}
              aria-label={`Jump to project ${project.number}: ${project.title}`}
              className="relative p-1 focus:outline-none"
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-8 bg-gold shadow-[0_0_12px_rgba(212,179,106,0.5)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                style={{
                  background: isActive ? currentProject.accentColor : undefined,
                  boxShadow: isActive
                    ? `0 0 12px ${currentProject.accentColor}80`
                    : undefined,
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Numeric Indicator */}
      <div className="font-mono text-xs text-mute tracking-widest">
        <span className="text-ink font-semibold">
          {(currentIndex + 1).toString().padStart(2, "0")}
        </span>
        <span className="opacity-40"> / </span>
        <span>{projects.length.toString().padStart(2, "0")}</span>
      </div>
    </div>
  );
}
