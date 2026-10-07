"use client";

import { motion } from "framer-motion";
import { aboutCards } from "@/lib/data";
import { resetTilt, cardTilt } from "@/lib/tilt";
import { useReducedMotion } from "@/lib/hooks";

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">About</p>
        <motion.h2
          initial={false}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="display mt-4 max-w-4xl text-4xl md:text-6xl"
        >
          Building at the intersection of AI & the Web.
        </motion.h2>
        <p className="mt-6 max-w-2xl text-mute">
          I work across research-adjacent intelligence and product-grade software — models that think, systems
          that last, and interfaces that feel inevitable.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {aboutCards.map((card, index) => (
            <motion.article
              key={card.key}
              initial={false}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              data-hot
              onPointerMove={reduced ? undefined : cardTilt}
              onPointerLeave={reduced ? undefined : resetTilt}
              className="tilt-card glass relative overflow-hidden rounded-3xl p-7"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
              <p className="font-mono text-[11px] tracking-[0.24em] text-aqua">0{index + 1}</p>
              <h3 className="mt-4 font-display text-2xl">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{card.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}