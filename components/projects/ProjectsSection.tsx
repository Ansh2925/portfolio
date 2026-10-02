"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  projectCategories,
  projectItems,
  type ProjectCategory,
} from "./projectData";
import ProjectStack from "./ProjectStack";
import { useReducedMotion } from "@/lib/hooks";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const reducedMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === "All"
      ? projectItems
      : projectItems.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(212,179,106,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <p className="eyebrow">Projects / Selected Work</p>
              <span className="h-1 w-1 rounded-full bg-gold/40" />
              <span className="font-mono text-xs text-mute/80 tracking-widest">
                [ {projectItems.length.toString().padStart(2, "0")} DECK CARDS ]
              </span>
            </div>
            <h2 className="display mt-4 text-4xl md:text-6xl lg:text-7xl">
              Things I’ve built.
            </h2>
            <p className="mt-4 text-base text-mute md:text-lg">
              A physical 3D project deck showcasing machine intelligence engines, distributed backends, and tactile web applications.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-3.5 py-1.5 font-mono text-xs tracking-wider transition-all duration-300 ${
                    isActive
                      ? "border border-gold bg-gold/15 text-ink shadow-[0_0_14px_rgba(212,179,106,0.25)]"
                      : "border border-white/10 text-mute hover:border-white/25 hover:text-ink"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 3D Project Card Deck */}
        <div className="mt-14 w-full">
          <ProjectStack
            key={activeCategory}
            projects={filteredProjects}
          />
        </div>
      </div>
    </section>
  );
}
