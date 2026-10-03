"use client";

import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import AboutSkills from "@/components/AboutSkills";
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
      <main className="relative z-10">
        <Hero3D />
        <AboutSkills />
        <Projects />
        <ExperienceTimeline />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}