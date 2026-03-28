// ─────────────────────────────────────────────────────────────────
//  AboutSection.jsx
// ─────────────────────────────────────────────────────────────────

import { ABOUT } from "../data/portfolio.data";

export default function AboutSection() {
  return (
    <section id="about" className="section-inner" style={{ padding:"120px 48px", background:"var(--surface-container-low)" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div className="about-grid" style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap:64 }}>

          <div>
            <h2 className="font-headline about-heading" style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, textTransform:"uppercase", letterSpacing:"-0.05em", position:"sticky", top:120 }}>
              The<br /><span style={{ color:"var(--secondary)" }}>Engineer</span>
            </h2>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
            <p className="font-body" style={{ fontSize:"1.35rem", color:"var(--on-surface)", lineHeight:1.45 }}>{ABOUT.headline}</p>
            <p className="font-body" style={{ fontSize:"1rem", color:"var(--on-surface-variant)", lineHeight:1.8 }}>{ABOUT.bio}</p>

            <div className="about-cards" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginTop:12 }}>
              {ABOUT.cards.map((item) => (
                <div key={item.title}
                  style={{ padding:22, background:"var(--surface-container-high)", borderRadius:8, display:"flex", flexDirection:"column", gap:10, transition:"background 0.3s", cursor:"default", position:"relative", zIndex:1 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background="var(--surface-bright)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background="var(--surface-container-high)")}>
                  <span className="material-symbols-outlined" style={{ fontSize:"1.5rem", color:item.color }}>{item.icon}</span>
                  <h3 className="font-headline" style={{ fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", fontSize:"0.68rem" }}>{item.title}</h3>
                  <p className="font-body" style={{ fontSize:"0.72rem", color:"var(--on-surface-variant)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
