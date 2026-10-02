"use client";

import { useMemo } from "react";
import { motion, useMotionValue, useTransform, useSpring, PanInfo } from "framer-motion";
import type { ProjectItem } from "./projectData";
import ProjectVisual from "./ProjectVisual";
import ProjectContent from "./ProjectContent";

type Props = {
  project: ProjectItem;
  index: number;
  activeIndex: number;
  totalProjects: number;
  onOpenModal: () => void;
  onNext: () => void;
  onPrev: () => void;
  isMobile: boolean;
  reducedMotion: boolean;
};

export default function ProjectCard({
  project,
  index,
  activeIndex,
  totalProjects,
  onOpenModal,
  onNext,
  onPrev,
  isMobile,
  reducedMotion,
}: Props) {
  const offset = index - activeIndex;
  const isActive = offset === 0;

  // Max visible cards in the stack behind the active card
  const maxVisibleBehind = isMobile ? 2 : 4;
  const isVisible = offset >= 0 && offset <= maxVisibleBehind;
  const isPast = offset < 0;

  // Calculate physical 3D stack transforms based on distance from active card
  const stackStyle = useMemo(() => {
    if (reducedMotion) {
      return {
        zIndex: totalProjects - index,
        x: 0,
        y: 0,
        z: 0,
        scale: isActive ? 1 : 0.95,
        rotateZ: 0,
        opacity: isActive ? 1 : 0,
        brightness: 1,
        pointerEvents: (isActive ? "auto" : "none") as "auto" | "none",
      };
    }

    if (isActive) {
      return {
        zIndex: 50,
        x: 0,
        y: 0,
        z: 80,
        scale: 1,
        rotateZ: 0,
        opacity: 1,
        brightness: 1,
        pointerEvents: "auto" as const,
      };
    }

    if (isPast) {
      return {
        zIndex: 40 + offset, // lower zIndex
        x: -80,
        y: -30,
        z: -60,
        scale: 0.9,
        rotateZ: -8,
        opacity: 0,
        brightness: 0.4,
        pointerEvents: "none" as const,
      };
    }

    // Cards stacked behind
    // Alternate subtle rotations for natural physical deck appearance
    const rotations = [0, 2.5, -2.8, 3.2, -4];
    const rot = rotations[Math.min(offset, rotations.length - 1)] || 0;
    const yOffset = isMobile ? offset * 18 : offset * 26;
    const zOffset = offset * -35;
    const scaleFactor = Math.max(0.78, 1 - offset * 0.055);
    const brightnessFactor = Math.max(0.4, 1 - offset * 0.16);

    return {
      zIndex: 40 - offset,
      x: 0,
      y: yOffset,
      z: zOffset,
      scale: scaleFactor,
      rotateZ: rot,
      opacity: isVisible ? 1 : 0,
      brightness: brightnessFactor,
      pointerEvents: "none" as const,
    };
  }, [offset, isActive, isPast, isVisible, index, totalProjects, isMobile, reducedMotion]);

  // Drag physics on active card
  const dragX = useMotionValue(0);
  const dragRotation = useTransform(dragX, [-200, 200], [-8, 8]);
  const smoothDragRotation = useSpring(dragRotation, { stiffness: 200, damping: 20 });

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!isActive) return;
    const swipeThreshold = 65;
    const velocityThreshold = 250;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      onNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      onPrev();
    }
  };

  return (
    <motion.div
      animate={{
        x: stackStyle.x,
        y: stackStyle.y,
        z: stackStyle.z,
        scale: stackStyle.scale,
        rotateZ: isActive ? 0 : stackStyle.rotateZ,
        opacity: stackStyle.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 18,
        mass: 0.6,
      }}
      style={{
        zIndex: stackStyle.zIndex,
        pointerEvents: stackStyle.pointerEvents,
        transformStyle: "preserve-3d",
        filter: `brightness(${stackStyle.brightness})`,
      }}
      className="absolute inset-0 flex items-center justify-center p-2 sm:p-4"
    >
      <motion.div
        drag={isActive ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.65}
        onDragEnd={handleDragEnd}
        style={{
          x: isActive ? dragX : 0,
          rotateZ: isActive ? smoothDragRotation : 0,
          transformStyle: "preserve-3d",
          boxShadow: isActive
            ? `0 35px 70px -15px rgba(0, 0, 0, 0.9), 0 0 40px -10px ${project.accentColor}25`
            : "0 20px 40px -10px rgba(0, 0, 0, 0.8)",
        }}
        className="group relative flex h-full max-h-[640px] w-full max-w-[540px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#0d0e15] p-6 sm:p-8 transition-colors duration-300 hover:border-white/30"
      >
        {/* Subtle Ambient Surface Glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: project.accentColor }}
          aria-hidden="true"
        />

        {/* Visual Mockup Area with 3D Depth */}
        <div
          className="relative z-10 w-full"
          style={{ transform: "translateZ(25px)" }}
        >
          <ProjectVisual project={project} isHovered={isActive} />
        </div>

        {/* Project Content & Actions Layer */}
        <div
          className="relative z-20 flex-1 pt-4"
          style={{ transform: "translateZ(45px)" }}
        >
          <ProjectContent
            project={project}
            currentIndex={index}
            totalProjects={totalProjects}
            onOpenModal={onOpenModal}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
