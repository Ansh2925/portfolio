"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { cardTilt, resetTilt } from "@/lib/tilt";
import { useReducedMotion } from "@/lib/hooks";

export default function ExperienceTimeline() {
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Journey</p>
        <h2 className="display mt-4 text-4xl md:text-6xl">A timeline of building.</h2>
        <ol className="relative mt-14 space-y-6 before:absolute before:left-[18px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-gold/80 before:to-white/10 md:before:left-1/2">
          {experience.map((item, index) => (
            <motion.li
              key={item.id}
              initial={false}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className={`relative md:flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              <span className="absolute left-[11px] top-7 h-4 w-4 rounded-full border border-gold bg-void shadow-glow md:left-[calc(50%-8px)]" />
              <article
                data-hot
                onPointerMove={reduced ? undefined : (event) => cardTilt(event, 6)}
                onPointerLeave={reduced ? undefined : resetTilt}
                className="tilt-card glass ml-12 rounded-3xl p-6 md:ml-0 md:w-[44%]"
              >
                <p className="font-mono text-[11px] tracking-[0.22em] text-aqua">{item.year}</p>
                <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.copy}</p>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}