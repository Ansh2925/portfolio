"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { useReducedMotion, useWebGL } from "@/lib/hooks";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });


export default function Hero3D() {
  const webgl = useWebGL();
  const reduced = useReducedMotion();

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        {webgl !== "no" ? (
          <Canvas
            className="absolute inset-0"
            dpr={[1, 1.5]}
            camera={{ position: [0, 0.2, 6.2], fov: 42 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            frameloop={reduced ? "demand" : "always"}
          >
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </Canvas>
        ) : null}
      </div>
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:pb-20 md:pt-24">
        <motion.div
          initial={false}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          className="hero-copy max-w-3xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-aqua">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" aria-hidden="true" />
            Available for opportunities
          </p>
          <h1 className="display text-[18vw] leading-[0.86] md:text-8xl">Hi, I’m Ansh.</h1>
          <p className="mt-4 font-logo text-[11px] tracking-[0.28em] text-gold md:text-xs">
            AI ENGINEER & FULL-STACK DEVELOPER
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg">
            I build intelligent systems, scalable web applications, and products that turn ambitious ideas into
            reality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#projects">View My Work</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Let’s Connect
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}