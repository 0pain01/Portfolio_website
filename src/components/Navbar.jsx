// ─────────────────────────────────────────────────────────────────
//  Navbar.jsx
//  Desktop: floating pill with all links.
//  Mobile/Tablet: brand + hamburger only; drawer slides in.
//  All layout switching is done via CSS classes — zero JS breakpoints.
// ─────────────────────────────────────────────────────────────────

import { useState } from "react";
import { PERSONAL } from "../data/portfolio.data";

const SECTIONS = ["about", "projects", "experience", "skills", "contact"];
const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const go = (id) => { scrollTo(id); setOpen(false); };

  return (
    <>
      {/* ── Fixed header ─────────────────────────────────────────── */}
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, display:"flex", justifyContent:"center" }}>
        <nav className="nav-pill" style={{
          background:"rgba(25,25,31,0.8)", backdropFilter:"blur(20px)",
          borderRadius:9999, marginTop:16, padding:"8px 24px",
          display:"flex", alignItems:"center", gap:28,
          boxShadow:"0 0 20px rgba(143,245,255,0.05)",
          border:"1px solid rgba(255,255,255,0.05)",
        }}>

          {/* Brand */}
          <div className="font-headline" style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"-0.05em", color:"var(--primary)", whiteSpace:"nowrap" }}>
            {PERSONAL.brandName}
          </div>

          {/* Desktop links */}
          <div className="nav-desktop-links" style={{ display:"flex", gap:4 }}>
            {SECTIONS.map((s) => (
              <button key={s} onClick={() => go(s)}
                className={`nav-link ${activeSection === s ? "active" : "inactive"}`}
                style={{ background:"none", border:"none", cursor:"pointer" }}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          {/* Desktop resume */}
          <a href={PERSONAL.resumeUrl} target="_blank" rel="noreferrer"
            className="font-headline nav-desktop-resume"
            style={{ background:"rgba(143,245,255,0.1)", border:"1px solid rgba(143,245,255,0.3)", color:"var(--primary)", borderRadius:9999, padding:"6px 18px", fontSize:"0.75rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", textDecoration:"none", transition:"all 0.2s", whiteSpace:"nowrap" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(143,245,255,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(143,245,255,0.1)")}>
            Resume
          </a>

          {/* Hamburger — hidden on desktop via CSS */}
          <button className="nav-hamburger" onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ display:"none", flexDirection:"column", gap:5, background:"none", border:"none", cursor:"pointer", padding:4 }}>
            <span style={{ display:"block", width:22, height:2, background:"var(--primary)", borderRadius:2, transition:"all 0.3s", transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display:"block", width:22, height:2, background:"var(--primary)", borderRadius:2, transition:"all 0.3s", opacity: open ? 0 : 1 }} />
            <span style={{ display:"block", width:22, height:2, background:"var(--primary)", borderRadius:2, transition:"all 0.3s", transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </nav>
      </header>

      {/* ── Mobile drawer ────────────────────────────────────────── */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button onClick={() => setOpen(false)}
          style={{ position:"absolute", top:24, right:24, background:"none", border:"none", cursor:"pointer", color:"var(--on-surface-variant)" }}>
          <span className="material-symbols-outlined" style={{ fontSize:"2rem" }}>close</span>
        </button>

        <div className="font-headline" style={{ fontSize:"0.9rem", fontWeight:700, color:"var(--primary)", marginBottom:8 }}>
          {PERSONAL.brandName}
        </div>

        {SECTIONS.map((s) => (
          <button key={s} onClick={() => go(s)}
            className={`mobile-nav-link ${activeSection === s ? "active" : ""}`}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}

        <a href={PERSONAL.resumeUrl} target="_blank" rel="noreferrer"
          onClick={() => setOpen(false)} className="font-headline"
          style={{ marginTop:8, background:"linear-gradient(135deg,var(--primary),var(--primary-container))", color:"var(--on-primary-container)", borderRadius:6, padding:"12px 36px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", textDecoration:"none" }}>
          Resume
        </a>
      </div>
    </>
  );
}
