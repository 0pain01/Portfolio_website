// ─────────────────────────────────────────────────────────────────
//  ExperienceSection.jsx
//  Desktop: left/right alternating timeline (unchanged).
//  Tablet/Mobile: collapses to left-rail via CSS classes.
// ─────────────────────────────────────────────────────────────────

import { EXPERIENCES } from "../data/portfolio.data";

function ExpCard({ exp }) {
  return (
    <div className="exp-card">
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:8, marginBottom:8 }}>
        <h3 className="font-headline" style={{ fontSize:"1.15rem", fontWeight:700, color:"var(--on-surface)", lineHeight:1.25 }}>{exp.title}</h3>
        <span className="font-label" style={{ fontSize:"0.66rem", letterSpacing:"0.1em", color:exp.active?"var(--secondary)":"var(--on-surface-variant)", fontWeight:700, flexShrink:0 }}>{exp.period}</span>
      </div>
      <div style={{ marginBottom:4 }}>
        <span className="font-label" style={{ color:"var(--primary)", fontSize:"0.74rem", textTransform:"uppercase", letterSpacing:"0.08em" }}>{exp.company}</span>
      </div>
      <div style={{ marginBottom:16 }}>
        <span className="font-label" style={{ color:"var(--on-surface-variant)", fontSize:"0.64rem", textTransform:"uppercase", letterSpacing:"0.07em" }}>{exp.location}</span>
      </div>
      <ul style={{ display:"flex", flexDirection:"column", gap:9 }}>
        {exp.bullets.map((b, j) => (
          <li key={j} className="font-body" style={{ display:"flex", gap:9, color:"var(--on-surface-variant)", fontSize:"0.8rem", lineHeight:1.55 }}>
            <span style={{ color:"var(--primary)", flexShrink:0, marginTop:1 }}>/</span>{b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-inner" style={{ padding:"120px 48px", background:"var(--surface-container-low)" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>

        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:68, flexWrap:"wrap", gap:16 }}>
          <div style={{ maxWidth:500 }}>
            <span className="font-label" style={{ color:"var(--primary)", textTransform:"uppercase", letterSpacing:"0.2em", fontSize:"0.68rem", display:"block", marginBottom:12 }}>Professional Journey</span>
            <h1 className="font-headline" style={{ fontSize:"clamp(2.5rem,6vw,4.5rem)", fontWeight:700, letterSpacing:"-0.05em", lineHeight:1 }}>Experience</h1>
          </div>
          <p className="font-body" style={{ color:"var(--on-surface-variant)", maxWidth:280, fontSize:"0.875rem", lineHeight:1.65, textAlign:"right" }}>
            Architecting digital infrastructures and refining codebases for the next generation of scale.
          </p>
        </div>

        {/* Timeline — CSS collapses left/right to single-column on tablet/mobile */}
        <div className="timeline-wrapper">
          <div className="timeline-center-line" />
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="timeline-item">
              {exp.side === "left"
                ? <div className="slot-left"><ExpCard exp={exp} /></div>
                : <div className="slot-empty" />
              }
              <div className="slot-node">
                <div className={`timeline-node ${exp.active ? "is-active" : "is-inactive"}`}>
                  <span className="material-symbols-outlined" style={{ fontSize:"1.1rem" }}>{exp.icon}</span>
                </div>
              </div>
              {exp.side === "right"
                ? <div className="slot-right"><ExpCard exp={exp} /></div>
                : <div className="slot-empty" />
              }
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
