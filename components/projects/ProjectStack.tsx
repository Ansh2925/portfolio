"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ProjectItem } from "./projectData";
import ProjectCard from "./ProjectCard";
import ProjectNavigation from "./ProjectNavigation";
import ProjectModal from "./ProjectModal";
import { useIsMobile, useReducedMotion } from "@/lib/hooks";

type Props = {
  projects: ProjectItem[];
};

export default function ProjectStack({ projects }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  }, [projects.length]);

  // Subtle Mouse Parallax on the entire 3D stack (max 3.5 degrees)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 100, damping: 20, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const stackRotateY = useTransform(smoothX, [0, 1], [-3.5, 3.5]);
  const stackRotateX = useTransform(smoothY, [0, 1], [3.5, -3.5]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile || reducedMotion) return;
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if modal is open or if user is in an input
      if (selectedProject) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest("input, textarea")) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, selectedProject]);

  // Wheel / Trackpad event handling with threshold
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isCooldown = false;
    let accumulatedDelta = 0;

    const onWheel = (e: WheelEvent) => {
      // Don't intercept if modal is open
      if (selectedProject) return;

      accumulatedDelta += e.deltaY;

      // Threshold check to avoid accidental micro-scrolls
      const threshold = 60;

      if (!isCooldown && Math.abs(accumulatedDelta) > threshold) {
        if (accumulatedDelta > 0) {
          // If at the end, allow normal page scroll
          if (activeIndex < projects.length - 1) {
            e.preventDefault();
            handleNext();
            isCooldown = true;
          }
        } else {
          // If at the start, allow normal page scroll
          if (activeIndex > 0) {
            e.preventDefault();
            handlePrev();
            isCooldown = true;
          }
        }

        accumulatedDelta = 0;
        setTimeout(() => {
          isCooldown = false;
        }, 450);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [activeIndex, projects.length, handleNext, handlePrev, selectedProject]);

  const activeProject = projects[activeIndex] || projects[0];

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Dynamic Project-Specific Atmosphere Lighting */}
      <motion.div
        animate={{
          background: `radial-gradient(650px circle at 50% 45%, ${activeProject.accentColor}20, transparent 65%)`,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pointer-events-none absolute -inset-y-24 inset-x-0 blur-3xl"
        aria-hidden="true"
      />

      {/* 3D Card Deck Viewport */}
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ perspective: isMobile ? 900 : 1300 }}
        className="relative flex h-[580px] sm:h-[640px] md:h-[680px] w-full max-w-2xl items-center justify-center pt-4"
      >
        <motion.div
          style={{
            rotateX: isMobile || reducedMotion ? 0 : stackRotateX,
            rotateY: isMobile || reducedMotion ? 0 : stackRotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full w-full flex items-center justify-center"
        >
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              activeIndex={activeIndex}
              totalProjects={projects.length}
              onOpenModal={() => setSelectedProject(project)}
              onNext={handleNext}
              onPrev={handlePrev}
              isMobile={isMobile}
              reducedMotion={reducedMotion}
            />
          ))}
        </motion.div>
      </div>

      {/* Deck Navigation, Bullet Indicators & Counter */}
      <ProjectNavigation
        projects={projects}
        currentIndex={activeIndex}
        onSelect={(idx) => setActiveIndex(idx)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Cinematic Modal Brief */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
