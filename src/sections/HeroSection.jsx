// ─────────────────────────────────────────────────────────────────
//  HeroSection.jsx
//  Desktop layout is the baseline — CSS media queries handle the rest.
// ─────────────────────────────────────────────────────────────────

import { PERSONAL } from "../data/portfolio.data";
import profilePhoto from "../assets/profile.png";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function HeroSection() {
  return (
    <section id="home" className="section-inner" style={{
      minHeight:"100vh", display:"flex", flexDirection:"column",
      justifyContent:"center", padding:"96px 48px 0",
      position:"relative", overflow:"hidden",
    }}>
      {/* Ambient blobs */}
      <div style={{ position:"absolute", top:"-10%", right:"-5%", width:500, height:500, background:"rgba(143,245,255,0.05)", borderRadius:"50%", filter:"blur(120px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-10%", left:"-5%", width:400, height:400, background:"rgba(213,117,255,0.05)", borderRadius:"50%", filter:"blur(100px)", pointerEvents:"none" }} />

      <div className="hero-grid" style={{ maxWidth:1280, margin:"0 auto", width:"100%", display:"grid", gridTemplateColumns:"1fr auto", gap:48, alignItems:"center" }}>

        {/* ── Portrait — mobile/tablet only (hidden on desktop via CSS) ── */}
        <div className="hero-portrait-mobile" style={{ display:"none", justifyContent:"center" }}>
          <div className="hero-portrait-mobile-img" style={{ width:200, aspectRatio:"4/5", borderRadius:8, overflow:"hidden", border:"1px solid rgba(143,245,255,0.12)", position:"relative", boxShadow:"0 0 40px rgba(143,245,255,0.08)" }}>
            <img src={profilePhoto} alt={PERSONAL.name}
              style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top center", display:"block" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(14,14,19,0.6) 0%,transparent 40%)" }} />
            <div style={{ position:"absolute", bottom:12, left:12, right:12, padding:8, background:"rgba(25,25,31,0.75)", backdropFilter:"blur(20px)", borderRadius:4, border:"1px solid rgba(72,71,77,0.15)" }}>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <span className="font-label" style={{ fontSize:"0.52rem", textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--primary)" }}>Location</span>
                <span className="font-label" style={{ fontSize:"0.52rem", textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--on-surface)" }}>{PERSONAL.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Text column ──────────────────────────────────────────── */}
        <div className="hero-text" style={{ display:"flex", flexDirection:"column", gap:26 }}>

          <div className="fade-in-up hero-badge" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"6px 16px", borderRadius:9999, background:"rgba(31,31,38,0.5)", border:"1px solid rgba(72,71,77,0.2)", width:"fit-content" }}>
            <span className="animate-pulse" style={{ width:8, height:8, borderRadius:"50%", background:"var(--primary)", display:"inline-block" }} />
            <span className="font-label" style={{ fontSize:"0.68rem", textTransform:"uppercase", letterSpacing:"0.2em", color:"var(--on-surface-variant)" }}>{PERSONAL.status}</span>
          </div>

          <h1 className="font-headline fade-in-up-delay-1" style={{ fontSize:"clamp(3.5rem,9vw,8rem)", fontWeight:700, letterSpacing:"-0.05em", lineHeight:0.92 }}>
            {PERSONAL.nameDisplay.line1}<br />
            <span className="text-gradient">{PERSONAL.nameDisplay.line2}</span>
          </h1>

          <div className="fade-in-up-delay-2" style={{ maxWidth:520 }}>
            <p className="font-body" style={{ fontSize:"1.1rem", color:"var(--on-surface-variant)", lineHeight:1.65, marginBottom:32 }}>
              {PERSONAL.tagline}
            </p>
            <div className="hero-ctas" style={{ display:"flex", flexWrap:"wrap", gap:16 }}>
              <button onClick={() => scrollTo("projects")} className="font-label"
                style={{ padding:"14px 28px", background:"linear-gradient(135deg,var(--primary),var(--primary-container))", borderRadius:6, border:"none", cursor:"pointer", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:"var(--on-primary-container)", display:"flex", alignItems:"center", gap:8, transition:"transform 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform="scale(0.97)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform="scale(1)")}>
                View Projects <span className="material-symbols-outlined" style={{ fontSize:"1rem" }}>arrow_forward</span>
              </button>
              <button onClick={() => scrollTo("about")} className="font-label"
                style={{ padding:"14px 28px", border:"1px solid rgba(72,71,77,0.3)", borderRadius:6, background:"transparent", color:"var(--on-surface)", cursor:"pointer", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", transition:"background 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background="rgba(31,31,38,1)")}
                onMouseLeave={(e) => (e.currentTarget.style.background="transparent")}>
                About Me
              </button>
            </div>
          </div>
        </div>

        {/* ── Portrait — desktop right column ──────────────────────── */}
        <div className="hero-portrait-desktop fade-in-up-delay-3" style={{ width:290, aspectRatio:"4/5", borderRadius:8, overflow:"hidden", border:"1px solid rgba(143,245,255,0.12)", position:"relative", flexShrink:0, boxShadow:"0 0 40px rgba(143,245,255,0.08)" }}>
          <img src={profilePhoto} alt={PERSONAL.name}
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top center", display:"block" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(14,14,19,0.7) 0%,transparent 45%)" }} />
          <div style={{ position:"absolute", bottom:18, left:18, right:18, padding:12, background:"rgba(25,25,31,0.75)", backdropFilter:"blur(20px)", borderRadius:6, border:"1px solid rgba(72,71,77,0.15)" }}>
            <div style={{ display:"flex", justifyContent:"space-between" }}>
              <span className="font-label" style={{ fontSize:"0.58rem", textTransform:"uppercase", letterSpacing:"0.18em", color:"var(--primary)" }}>Location</span>
              <span className="font-label" style={{ fontSize:"0.58rem", textTransform:"uppercase", letterSpacing:"0.18em", color:"var(--on-surface)" }}>{PERSONAL.location}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
