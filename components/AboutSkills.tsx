"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skillGroups, profile } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";


export default function AboutSkills() {
  const reduced = useReducedMotion();
  const [targetedPartition, setTargetedPartition] = useState<"about" | "skills" | null>(null);

  // Sync with URL hashes #about and #skills
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#about") {
        setTargetedPartition("about");
        setTimeout(() => setTargetedPartition(null), 2500);
      } else if (hash === "#skills") {
        setTargetedPartition("skills");
        setTimeout(() => setTargetedPartition(null), 2500);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section
      id="about-skills-section"
      className="section-pad relative overflow-hidden"
      aria-label="About and Skills Overview"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-aqua/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 25 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="border-b border-white/10 pb-8"
        >
          <div className="flex items-center gap-3">
            <p className="eyebrow">Dual Arsenal // Integrated System</p>
            <span className="h-1 w-1 rounded-full bg-gold/40" />
            <span className="font-mono text-xs text-mute/80 tracking-widest">
              [ 02 BALANCED CARDS ]
            </span>
          </div>
          <h2 className="display mt-3 text-4xl md:text-6xl lg:text-7xl">
            The Mind & The Matrix.
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-mute leading-relaxed">
            An architectural breakdown of engineering philosophy on the left, paired directly with the technical capability constellation on the right.
          </p>
        </motion.div>

        {/* Dual Partition Layout Grid with Equal Height and Width */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* ======================================================== */}
          {/* CARD 01: IDENTITY / ABOUT (SINGLE CARD, NO INNER CARDS)   */}
          {/* ======================================================== */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 30 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col w-full"
          >
            <div
              className={`glass relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-9 transition-all duration-500 ${
                targetedPartition === "about"
                  ? "border-aqua ring-2 ring-aqua/40 shadow-[0_0_35px_rgba(126,191,184,0.2)]"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {/* Invisible anchor target for navbar navigation */}
              <div id="about" className="absolute -top-32 pointer-events-none" />

              {/* Ambient corner glow */}
              <div className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full bg-aqua/10 blur-3xl" />

              {/* Upper Content Area */}
              <div>
                {/* Partition Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-aqua animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-aqua">
                      PARTITION 01 // IDENTITY
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-mute/60 tracking-widest">
                    [ CORE.PHILOSOPHY ]
                  </span>
                </div>

                {/* About Content Heading */}
                <div className="mt-6">
                  <p className="eyebrow text-aqua">About Me</p>
                  <h3 className="display mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">
                    Building at the intersection of AI & the Web.
                  </h3>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-mute">
                    Ansh works across research-adjacent intelligence and product-grade software — models that think, systems that last, and interfaces that feel inevitable.
                  </p>
                </div>

                {/* Key Metrics / Highlights Strip */}
                <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <div>
                    <p className="font-display text-xl sm:text-2xl text-gold font-medium">
                      {profile.publicRepos}+
                    </p>
                    <p className="font-mono text-[10px] sm:text-xs text-mute uppercase tracking-wider mt-0.5">
                      Public Repos
                    </p>
                  </div>
                  <div className="border-x border-white/10">
                    <p className="font-display text-xl sm:text-2xl text-aqua font-medium">
                      AI & ML
                    </p>
                    <p className="font-mono text-[10px] sm:text-xs text-mute uppercase tracking-wider mt-0.5">
                      Neural Focus
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-xl sm:text-2xl text-ink font-medium">
                      Full-Stack
                    </p>
                    <p className="font-mono text-[10px] sm:text-xs text-mute uppercase tracking-wider mt-0.5">
                      Web Systems
                    </p>
                  </div>
                </div>

                {/* Architectural Principles & Focus (Direct editorial layout, no inner cards) */}
                <div className="mt-7 space-y-5">
                  <div className="border-l-2 border-aqua/40 pl-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-aqua">
                        01 // ARCHITECTURE
                      </span>
                    </div>
                    <h4 className="mt-1 font-display text-lg sm:text-xl text-ink">
                      Full-Stack Web Architecture
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-mute">
                      Crafting end-to-end resilient applications with modern React/Next.js frameworks, performant state management, and ergonomic component architectures.
                    </p>
                  </div>

                  <div className="border-l-2 border-gold/40 pl-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-gold">
                        02 // ARCHITECTURE
                      </span>
                    </div>
                    <h4 className="mt-1 font-display text-lg sm:text-xl text-ink">
                      Backend Services & High Scale
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-mute">
                      Architecting high-concurrency microservices with FastAPI and Node.js, utilizing Redis caching and PostgreSQL for high reliability and throughput.
                    </p>
                  </div>

                  <div className="border-l-2 border-white/20 pl-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-mute">
                        03 // PHILOSOPHY
                      </span>
                    </div>
                    <h4 className="mt-1 font-display text-lg sm:text-xl text-ink">
                      Applied Intelligence & Systems
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-mute">
                      Bridging neural networks with production web engines — low latency streaming, fine-tuned transformer inference, and clean algorithmic execution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Partition Footer Status */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-aqua" />
                  <span className="font-mono text-[11px] text-mute">
                    Focus: Neural Pipelines & High-Concurrency Web
                  </span>
                </div>
                <a
                  href="#contact"
                  className="font-mono text-[11px] text-aqua hover:text-ink transition-colors tracking-wider"
                >
                  Connect →
                </a>
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* CARD 02: CAPABILITIES / SKILLS (ALL ELEMENTS IN 1 CARD)   */}
          {/* ======================================================== */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 30 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full flex flex-col w-full"
          >
            <div
              className={`glass relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-9 transition-all duration-500 ${
                targetedPartition === "skills"
                  ? "border-gold ring-2 ring-gold/40 shadow-[0_0_35px_rgba(212,179,106,0.2)]"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {/* Invisible anchor target for navbar navigation */}
              <div id="skills" className="absolute -top-32 pointer-events-none" />

              {/* Ambient corner glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold/10 blur-3xl" />

              {/* Upper Content Area */}
              <div>
                {/* Partition Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
                      PARTITION 02 // CAPABILITIES
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-mute/60 tracking-widest">
                    [ TECH.CONSTELLATION ]
                  </span>
                </div>

                {/* Skills Content Heading */}
                <div className="mt-6">
                  <p className="eyebrow text-gold">Technical Constellation</p>
                  <h3 className="display mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">
                    A technology constellation.
                  </h3>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-mute">
                    Four primary engineering pillars orbiting applied intelligence, full-stack systems, and tactile web interfaces.
                  </p>
                </div>

                {/* All Skill Elements Organized Within This Single Card */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skillGroups.map((group, index) => (
                        <div
                          key={group.group}
                          className="rounded-2xl border border-white/5 bg-white/[0.015] p-4 flex flex-col justify-between transition-colors hover:border-white/15 hover:bg-white/[0.03]"
                        >
                          <div>
                            {/* Group Header */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span
                                  className="font-mono text-[9px] font-medium tracking-[0.2em] uppercase"
                                  style={{ color: group.accent }}
                                >
                                  {group.tag}
                                </span>
                              </div>
                              <span className="font-mono text-[10px] text-mute/50">
                                0{index + 1}
                              </span>
                            </div>

                            {/* Group Title */}
                            <h4 className="mt-2.5 font-display text-base font-medium text-ink">
                              {group.group}
                            </h4>
                            <p className="mt-1 text-[11px] leading-relaxed text-mute line-clamp-2">
                              {group.description}
                            </p>

                            {/* Group Skill Chips */}
                            <div className="mt-3 flex flex-wrap gap-1">
                              {group.items.map((item) => (
                                <span
                                  key={item}
                                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-ink/90 transition-colors hover:border-gold/60 hover:text-ink"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Domain Highlight */}
                          <div className="mt-3.5 flex items-center justify-between border-t border-white/5 pt-2 text-[10px]">
                            <div className="flex items-center gap-1.5 truncate">
                              <span
                                className="h-1.5 w-1.5 rounded-full shrink-0"
                                style={{ background: group.accent }}
                              />
                              <span className="font-mono text-mute truncate">
                                {group.highlight}
                              </span>
                            </div>
                          </div>
                        </div>
                  ))}
                </div>
              </div>

              {/* Partition Footer Status */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <span className="font-mono text-[11px] text-mute">
                    4 Domains · 25+ Technologies & Frameworks
                  </span>
                </div>
                <a
                  href="#projects"
                  className="font-mono text-[11px] text-gold hover:text-ink transition-colors tracking-wider"
                >
                  View Projects →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
