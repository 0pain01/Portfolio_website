// ─────────────────────────────────────────────────────────────────
//  ProjectsSection.jsx
// ─────────────────────────────────────────────────────────────────

import { PROJECTS, SKILLS } from "../data/portfolio.data";

function ProjectCard({ project: { id, title, tags, desc, img, links } }) {
  return (
    <div className="glass-card" style={{ borderRadius:12, overflow:"hidden", display:"flex", flexDirection:"column" }}>
      <div style={{ aspectRatio:"16/9", position:"relative", overflow:"hidden", background:"var(--surface-container-highest)" }}>
        <img src={img} alt={title} className="project-img" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(19,19,24,0.8),transparent)" }} />
        <div className="font-headline" style={{ position:"absolute", top:14, right:14, fontSize:"1.75rem", fontWeight:900, opacity:0.3, color:"var(--surface-container-highest)" }}>{id}</div>
      </div>
      <div style={{ padding:26, display:"flex", flexDirection:"column", flexGrow:1 }}>
        <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:12 }}>
          {tags.map((t) => (
            <span key={t.label} className="font-headline" style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--on-surface-variant)", display:"flex", alignItems:"center", gap:5 }}>
              <span style={{ width:5, height:5, borderRadius:"50%", background:t.color, boxShadow:`0 0 6px ${t.color}` }} />{t.label}
            </span>
          ))}
        </div>
        <h3 className="font-headline" style={{ fontSize:"1.25rem", fontWeight:700, marginBottom:10, color:"var(--on-surface)" }}>{title}</h3>
        <p className="font-body" style={{ color:"var(--on-surface-variant)", fontSize:"0.85rem", marginBottom:22, lineHeight:1.65, flexGrow:1 }}>{desc}</p>
        <div style={{ display:"flex", gap:16 }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              style={{ display:"flex", alignItems:"center", gap:6, color:`${l.color}bb`, fontFamily:"Space Grotesk", fontWeight:700, fontSize:"0.6rem", textTransform:"uppercase", letterSpacing:"0.14em", textDecoration:"none", transition:"color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color=l.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color=`${l.color}bb`)}>
              {l.label}<span className="material-symbols-outlined" style={{ fontSize:"0.8rem" }}>{l.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-inner" style={{ padding:"120px 48px", background:"var(--surface)" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>

        <header style={{ marginBottom:68, display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:32, flexWrap:"wrap" }}>
          <h1 className="font-headline" style={{ fontSize:"clamp(3rem,8vw,6rem)", fontWeight:700, letterSpacing:"-0.05em", textTransform:"uppercase", lineHeight:0.9 }}>
            SELECTED<br /><span style={{ color:"var(--primary)" }}>WORKS.</span>
          </h1>
          <p className="font-body" style={{ fontSize:"1rem", color:"var(--on-surface-variant)", maxWidth:360 }}>
            Production-grade systems spanning compliance technology, healthcare platforms, and applied AI research.
          </p>
        </header>

        <div className="projects-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:26 }}>
          {PROJECTS.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>

        <div style={{ marginTop:96 }}>
          <h2 className="font-headline" style={{ fontSize:"0.68rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.4em", color:"var(--on-surface-variant)", marginBottom:36 }}>
            System Core Technologies
          </h2>
          <div className="tech-icons-grid" style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:20 }}>
            {SKILLS.techIcons.map((item) => (
              <div key={item.label} className="tech-icon-item">
                <div className="icon-wrap"><span className="material-symbols-outlined mat-icon">{item.icon}</span></div>
                <span className="icon-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
