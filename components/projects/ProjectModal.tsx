"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectItem } from "./projectData";
import ProjectVisual from "./ProjectVisual";
import MagneticButton from "@/components/MagneticButton";

type Props = {
  project: ProjectItem | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8">
          {/* Deep Cinematic Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#040406]/85 backdrop-blur-2xl"
            aria-hidden="true"
          >
            {/* Ambient Lighting matching project accent */}
            <div
              className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-15"
              style={{ background: project.accent }}
            />
          </motion.div>

          {/* Cinematic Card Expansion Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cinematic-title"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 24,
              mass: 0.8,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto rounded-[2.5rem] border border-white/15 bg-[#0d0e15] p-6 shadow-2xl md:p-10 scrollbar-hide"
          >
            {/* Top Operational Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-base font-semibold tracking-wider text-gold">
                  [{project.number}]
                </span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span
                  className="font-mono text-xs uppercase tracking-[0.24em]"
                  style={{ color: project.accent }}
                >
                  {project.categoryTag}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden font-mono text-[10px] uppercase tracking-widest text-mute md:inline-block">
                  ESC TO CLOSE
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mute transition-colors hover:border-gold hover:text-ink"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Visual Hero Preview */}
            <div className="mt-8">
              <ProjectVisual project={project} isHovered={true} />
            </div>

            {/* Key Metrics Strip */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center backdrop-blur-sm"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-mute">
                    {metric.label}
                  </p>
                  <p
                    className="mt-1 font-mono text-base font-semibold md:text-xl"
                    style={{ color: project.accent }}
                  >
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Title & Detailed Narrative */}
            <div className="mt-8">
              <h2
                id="cinematic-title"
                className="font-display text-3xl font-medium tracking-tight text-ink md:text-5xl"
              >
                {project.title}
              </h2>
              <p
                className="mt-2 font-mono text-xs uppercase tracking-wider"
                style={{ color: project.accent }}
              >
                {project.tagline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-mute/90">
                {project.fullDescription}
              </p>
            </div>

            {/* Architecture & Engineering Breakdown Grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                  01 // The Engineering Challenge
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-aqua">
                  02 // Architectural Solution
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* System Implementation */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink/80">
                03 // Technical Architecture
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                {project.architecture}
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-mute">
                Technologies & Tooling
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-ink/90 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex flex-wrap gap-3">
                {project.demo && (
                  <MagneticButton href={project.demo}>
                    Launch Live Demo ↗
                  </MagneticButton>
                )}
                {project.github && (
                  <MagneticButton href={project.github} variant="ghost">
                    GitHub Repository ↗
                  </MagneticButton>
                )}
              </div>

              <MagneticButton variant="ghost" onClick={onClose}>
                Close Case Study
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
