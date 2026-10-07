"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ProjectItem } from "./projectData";
import MagneticButton from "@/components/MagneticButton";

type Props = {
  project: ProjectItem;
  currentIndex: number;
  totalProjects: number;
  onOpenModal: () => void;
};

export default function ProjectContent({
  project,
  currentIndex,
  totalProjects,
  onOpenModal,
}: Props) {
  return (
    <div className="relative z-20 flex flex-col justify-between h-full">
      {/* Top Metadata Strip */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-xs font-semibold tracking-wider"
            style={{ color: project.accentColor }}
          >
            [{project.number} / {totalProjects.toString().padStart(2, "0")}]
          </span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full animate-pulse"
            style={{
              background: project.accentColor,
              boxShadow: `0 0 12px ${project.accentColor}`,
            }}
          />
          <span className="font-mono text-[9px] uppercase tracking-widest text-ink/80">
            ACTIVE DECK
          </span>
        </div>
      </div>

      {/* Synchronized Animated Title & Description Area */}
      <div className="my-5 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="font-mono text-[10px] uppercase tracking-[0.22em] mb-2"
              style={{ color: project.accentColor }}
            >
              {project.categoryTag}
            </p>

            <h3 className="font-display text-2xl font-normal tracking-tight text-ink sm:text-3xl md:text-4xl leading-[1.05]">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-mute line-clamp-2 md:line-clamp-3">
              {project.tagline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Technology Pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-ink/85 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="inline-flex items-center rounded-full border border-white/5 bg-white/[0.02] px-2 py-1 font-mono text-[10px] text-mute">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Action Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        <button
          type="button"
          suppressHydrationWarning
          onClick={onOpenModal}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-all duration-300 hover:scale-105"
          style={{
            background: `${project.accentColor}20`,
            border: `1px solid ${project.accentColor}60`,
            color: project.accentColor,
          }}
        >
          <span>VIEW PROJECT BRIEF</span>
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-mute transition-colors hover:text-ink"
            >
              Live Demo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-mute transition-colors hover:text-ink"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
