"use client";

import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import SkillConstellation from "@/components/SkillConstellation";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorLight from "@/components/CursorLight";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <CursorLight />
      <Navbar />
      <main>
        <Hero3D />
        <About />
        <SkillConstellation />
        <Projects />
        <ExperienceTimeline />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}