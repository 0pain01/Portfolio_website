// ─────────────────────────────────────────────────────────────────
//  SkillsSection.jsx
// ─────────────────────────────────────────────────────────────────

import { SKILLS } from "../data/portfolio.data";

function SmallCard({ title, accentColor, items }) {
  return (
    <div
      style={{ background:"var(--surface-container-low)", padding:20, borderRadius:12, border:"1px solid rgba(72,71,77,0.1)", display:"flex", flexDirection:"column", justifyContent:"space-between", gap:10, transition:"background 0.3s", position:"relative", zIndex:1 }}
      onMouseEnter={(e) => (e.currentTarget.style.background="var(--surface-container)")}
      onMouseLeave={(e) => (e.currentTarget.style.background="var(--surface-container-low)")}>
      <h4 className="font-headline" style={{ fontSize:"0.95rem", fontWeight:700, color:"var(--on-surface)", display:"flex", alignItems:"center", gap:9 }}>
        <span style={{ width:18, height:2, background:accentColor, display:"inline-block" }} />{title}
      </h4>
      <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
        {items.map((t) => (
          <span key={t} className="font-body" style={{ fontSize:"0.76rem", color:"var(--on-surface-variant)" }}>• {t}</span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-inner" style={{ padding:"120px 48px", background:"var(--surface)" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>

        <div style={{ marginBottom:52 }}>
          <span className="font-label" style={{ color:"var(--secondary)", textTransform:"uppercase", letterSpacing:"0.2em", fontSize:"0.68rem", display:"block", marginBottom:12 }}>Weaponry</span>
          <h2 className="font-headline" style={{ fontSize:"clamp(2.5rem,6vw,4.5rem)", fontWeight:700, letterSpacing:"-0.05em", lineHeight:1 }}>Technical Stack</h2>
        </div>

        {/* Bento — 4 cols desktop, 2 cols tablet, 1 col mobile via CSS */}
        <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>

          {/* Core Languages — 2×2 on desktop */}
          <div className="skills-lang-card" style={{ gridColumn:"span 2", gridRow:"span 2", background:"var(--surface-container-low)", padding:30, borderRadius:12, border:"1px solid rgba(72,71,77,0.1)", position:"relative", overflow:"hidden", minHeight:260 }}>
            <span className="material-symbols-outlined" style={{ position:"absolute", right:-20, bottom:-20, fontSize:"8rem", opacity:0.04, pointerEvents:"none" }}>translate</span>
            <h4 className="font-headline" style={{ fontSize:"1rem", fontWeight:700, marginBottom:24, color:"var(--on-surface)", display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ width:26, height:2, background:"var(--primary)", display:"inline-block" }} /> Core Languages
            </h4>
            <div style={{ display:"flex", flexWrap:"wrap", gap:9 }}>
              {SKILLS.coreLanguages.map((lang) => (
                <div key={lang} className="skill-chip">
                  <span style={{ width:3, height:13, background:"var(--primary)", borderRadius:2, display:"inline-block" }} />
                  <span className="font-label" style={{ fontSize:"0.78rem", textTransform:"uppercase", letterSpacing:"0.1em" }}>{lang}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skills-backend-card"
            style={{ gridColumn:"span 2", background:"var(--surface-container-low)", padding:20, borderRadius:12, border:"1px solid rgba(72,71,77,0.1)", display:"flex", flexDirection:"column", justifyContent:"space-between", gap:14, transition:"background 0.3s", position:"relative", zIndex:1 }}
            onMouseEnter={(e) => (e.currentTarget.style.background="var(--surface-container)")}
            onMouseLeave={(e) => (e.currentTarget.style.background="var(--surface-container-low)")}>
            <h4 className="font-headline" style={{ fontSize:"0.95rem", fontWeight:700, color:"var(--on-surface)", display:"flex", alignItems:"center", gap:9 }}>
              <span style={{ width:18, height:2, background:"var(--secondary)", display:"inline-block" }} /> Backend & APIs
            </h4>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
              {SKILLS.backend.map((t) => (
                <span key={t} className="font-label" style={{ fontSize:"0.56rem", letterSpacing:"0.08em", textTransform:"uppercase", background:"var(--surface-container-highest)", padding:"4px 9px", borderRadius:4, color:"var(--on-surface-variant)", border:"1px solid rgba(72,71,77,0.1)" }}>{t}</span>
              ))}
            </div>
          </div>

          <SmallCard title="Cloud"      accentColor="var(--outline)" items={SKILLS.cloud} />
          <SmallCard title="Data & DBs" accentColor="var(--outline)" items={SKILLS.data} />

          {/* Live status */}
          <div className="skills-status-card" style={{ gridColumn:"span 2", background:"var(--surface-container-high)", padding:26, borderRadius:12, border:"1px solid rgba(143,245,255,0.18)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(to right,var(--primary),var(--secondary))" }} />
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <span className="material-symbols-outlined" style={{ color:"var(--primary)" }}>sensors</span>
              <span className="font-label animate-pulse" style={{ fontSize:"0.58rem", color:"var(--primary)", background:"rgba(143,245,255,0.1)", padding:"2px 8px", borderRadius:9999 }}>LIVE SYSTEM</span>
            </div>
            <p className="font-body" style={{ fontSize:"0.85rem", fontStyle:"italic", color:"var(--on-surface)", lineHeight:1.65, marginTop:12 }}>"{SKILLS.liveStatus}"</p>
            <div style={{ marginTop:12, display:"flex", gap:6 }}>
              {[0.4,0.2,0.1].map((o,i)=><div key={i} style={{ width:5, height:5, borderRadius:"50%", background:`rgba(143,245,255,${o})` }}/>)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
