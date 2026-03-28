// CTASection.jsx
const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function CTASection() {
  return (
    <section className="section-inner" style={{ padding:"120px 48px", background:"var(--surface-container-low)", borderTop:"1px solid rgba(72,71,77,0.1)", borderBottom:"1px solid rgba(72,71,77,0.1)" }}>
      <div style={{ maxWidth:860, margin:"0 auto", textAlign:"center" }}>
        <h2 className="font-headline" style={{ fontSize:"clamp(2.5rem,6vw,4.5rem)", zIndex:1000, fontWeight:700, letterSpacing:"-0.05em", textTransform:"uppercase", lineHeight:1, marginBottom:18 }}>
          Let's build the<br /><span className="text-gradient">Next Dimension</span>
        </h2>
        <p className="font-body" style={{ fontSize:"1.1rem", color:"var(--on-surface-variant)", marginBottom:40 }}>
          Open to backend engineering, compliance-tech, and full-stack opportunities.
        </p>
        <button onClick={() => scrollTo("contact")} className="font-headline"
          style={{ background:"var(--primary)", color:"var(--on-primary-container)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.18em", fontSize:"0.875rem", padding:"16px 38px", borderRadius:6, border:"none", cursor:"pointer", boxShadow:"0 0 36px rgba(143,245,255,0.15)", transition:"transform 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform="scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform="scale(1)")}>
          Initialize Contact
        </button>
      </div>
    </section>
  );
}
