// ─────────────────────────────────────────────────────────────────
//  App.jsx
//  ► Root component. Composes layout from section + shared components.
//  ► Tracks active nav section via IntersectionObserver.
// ─────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

import "./styles/global.css";

import MouseDotGrid      from "./components/MouseDotGrid";
import Navbar            from "./components/Navbar";
import Footer            from "./components/Footer";

import HeroSection       from "./sections/HeroSection";
import AboutSection      from "./sections/AboutSection";
import ProjectsSection   from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection     from "./sections/SkillsSection";
import CTASection        from "./sections/CTASection";
import ContactSection    from "./sections/ContactSection";

const OBSERVED_SECTIONS = ["home", "about", "projects", "experience", "skills", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  /* Track which section is in view for nav highlighting */
  useEffect(() => {
    const observers = [];

    OBSERVED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ── Background effects (sit behind all content) ─────────── */}
      <MouseDotGrid />
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: -1, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%",    left: -80,  width: 360, height: 360, background: "rgba(143,245,255,0.04)", filter: "blur(110px)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "20%", right: -80, width: 300, height: 300, background: "rgba(213,117,255,0.04)", filter: "blur(90px)",  borderRadius: "50%" }} />
      </div>

      {/* ── Navigation ──────────────────────────────────────────── */}
      <Navbar activeSection={activeSection} />

      {/* ── Page sections ───────────────────────────────────────── */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CTASection />
        <ContactSection />
      </main>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <Footer />
    </>
  );
}
