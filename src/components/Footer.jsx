// ─────────────────────────────────────────────────────────────────
//  Footer.jsx
// ─────────────────────────────────────────────────────────────────

import { SOCIAL_LINKS } from "../data/portfolio.data";

export default function Footer() {
  return (
    <footer style={{
      background:   "var(--surface)",
      borderTop:    "1px solid rgba(72,71,77,0.2)",
      position:     "relative",
      zIndex:       1,           // sits above dot grid layers
    }}>
      <div style={{
        maxWidth:       1280,
        margin:         "0 auto",
        display:        "flex",
        flexWrap:       "wrap",
        justifyContent: "space-between",
        alignItems:     "center",
        gap:            18,
        padding:        "40px 32px",
      }}>
        {/* Copyright */}
        <div className="font-label" style={{
          fontSize: "0.58rem", letterSpacing: "0.2em",
          textTransform: "uppercase", color: "rgba(248,245,253,0.4)",
        }}>
          © {new Date().getFullYear()} PANKAJ SINGH. ALL RIGHTS RESERVED.
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: 24 }}>
          {SOCIAL_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="font-label"
              style={{
                fontSize:      "0.58rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color:         "rgba(248,245,253,0.4)",
                textDecoration: "none",
                transition:    "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--secondary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,245,253,0.4)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Status indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span style={{ width: 4, height: 4, background: "var(--primary)", borderRadius: "50%" }} />
          <span className="font-label" style={{
            fontSize: "0.58rem", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--primary)",
          }}>
            System Operational
          </span>
        </div>
      </div>
    </footer>
  );
}
