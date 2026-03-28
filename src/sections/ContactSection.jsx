// ─────────────────────────────────────────────────────────────────
//  const EMAILJS_SERVICE_ID  = "service_h7b4oh8";
// const EMAILJS_TEMPLATE_ID = "template_xjfqa6m";
// const EMAILJS_PUBLIC_KEY  = "Ux2cO4WxwyaUZyPD3";
// ─────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────
//  ContactSection.jsx  — with real EmailJS + email validation
// ─────────────────────────────────────────────────────────────────

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { PERSONAL } from "../data/portfolio.data";

const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const CONTACT_LINKS = [
  { icon: "terminal", label: "GITHUB",   href: PERSONAL.github },
  { icon: "share",    label: "LINKEDIN", href: PERSONAL.linkedin },
  { icon: "mail",     label: "EMAIL",    href: `mailto:${PERSONAL.email}` },
  { icon: "code",      label: "LEETCODE", href: PERSONAL.leetcode },
];

const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

function Field({ id, label, type = "text", rows, value, onChange, error, onBlur }) {
  const hasValue = value.length > 0;
  const isInvalid = !!error;

  const borderColor = isInvalid
    ? "#e05252"
    : "rgba(72,71,77,0.4)";

  const focusBorder = isInvalid ? "#e05252" : "var(--primary)";

  const sharedStyle = {
    borderBottomColor: borderColor,
  };

  return (
    <div style={{ position: "relative", paddingBottom: 4 }}>
      {rows ? (
        <textarea
          id={id} name={id} placeholder=" " rows={rows}
          value={value} onChange={onChange}
          style={sharedStyle}
          onFocus={(e) => (e.target.style.borderBottomColor = focusBorder)}
          onBlur={(e) => { e.target.style.borderBottomColor = isInvalid ? "#e05252" : "rgba(72,71,77,0.4)"; onBlur?.(); }}
        />
      ) : (
        <input
          id={id} name={id} type={type} placeholder=" "
          value={value} onChange={onChange}
          style={sharedStyle}
          onFocus={(e) => (e.target.style.borderBottomColor = focusBorder)}
          onBlur={(e) => { e.target.style.borderBottomColor = isInvalid ? "#e05252" : "rgba(72,71,77,0.4)"; onBlur?.(); }}
        />
      )}
      <label htmlFor={id} className="font-headline" style={{
        position: "absolute", left: 0, top: hasValue ? 0 : 24,
        fontSize: hasValue ? "0.66rem" : "1rem",
        fontWeight: hasValue ? 700 : 400,
        letterSpacing: hasValue ? "0.2em" : "0",
        color: isInvalid ? "#e05252" : "var(--outline-variant)",
        transition: "all 0.3s",
        pointerEvents: "none", textTransform: "uppercase",
      }}>{label}</label>

      {/* Error message */}
      <div style={{
        overflow: "hidden",
        maxHeight: isInvalid ? 24 : 0,
        opacity: isInvalid ? 1 : 0,
        transition: "max-height 0.25s ease, opacity 0.25s ease",
        marginTop: 6,
      }}>
        <span className="font-headline" style={{
          fontSize: "0.58rem", letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#e05252",
          display: "flex", alignItems: "center", gap: 5,
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: "0.85rem" }}>error</span>
          {error}
        </span>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const formRef = useRef(null);
  const [form, setForm]         = useState({ name: "", email: "", message: "" });
  const [emailTouched, setEmailTouched] = useState(false);
  const [status, setStatus]     = useState("idle"); // idle | sending | sent | error

  const emailError = emailTouched && form.email.length > 0 && !isValidEmail(form.email)
    ? "Invalid email address"
    : emailTouched && form.email.length === 0
    ? "Email is required"
    : null;

  const canSubmit = form.name.trim() && form.message.trim() && isValidEmail(form.email) && status !== "sending";

  const handle = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setEmailTouched(true);
    if (!canSubmit) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setEmailTouched(false);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const isSending = status === "sending";
  const isSent    = status === "sent";
  const isError   = status === "error";

  const btnLabel = isSending ? "Transmitting…" : isSent ? "Signal Sent ✓" : isError ? "Failed — Retry?" : "Send Signal";
  const btnBg    = isSent ? "var(--primary)" : isError ? "#c0392b" : "#2c2b33";
  const btnColor = (isSent || isError) ? "var(--on-primary-container)" : "var(--on-surface)";

  return (
    <section id="contact" className="section-inner" style={{ padding: "120px 48px", background: "var(--surface-container-low)" }}>
      <div className="contact-grid" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 96, alignItems: "center" }}>

        {/* ── Left info ─────────────────────────────────────────── */}
        <div>
          <h1 className="font-headline" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.95, marginBottom: 26 }}>
            <span>INITIATE</span><br /><span style={{ color: "var(--primary)" }}>CONNECTION</span>
          </h1>
          <p className="font-body" style={{ color: "var(--on-surface-variant)", fontSize: "1rem", maxWidth: 400, marginBottom: 10, lineHeight: 1.75 }}>
            Available for backend engineering, compliance-tech, and full-stack roles.{" "}
            <span style={{ color: "var(--secondary)" }}>Latency is minimal.</span>
          </p>
          <a href={`tel:${PERSONAL.phone}`} className="font-label" style={{ display: "block", marginBottom: 4, fontSize: "0.66rem", color: "var(--on-surface-variant)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}>📞 {PERSONAL.phone}</a>
          <a href={`mailto:${PERSONAL.email}`} className="font-label" style={{ display: "block", marginBottom: 30, fontSize: "0.66rem", color: "var(--on-surface-variant)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}>✉️ {PERSONAL.email}</a>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
            {CONTACT_LINKS.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 9, background: "var(--surface-container-low)", padding: "10px 16px", borderRadius: 8, textDecoration: "none", transition: "background 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-container-high)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--surface-container-low)")}>
                <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1.1rem" }}>{link.icon}</span>
                <span className="font-headline" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--on-surface)" }}>{link.label}</span>
              </a>
            ))}
          </div>

          <a href={PERSONAL.resumeUrl} target="_blank" rel="noreferrer" className="font-headline"
            style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "linear-gradient(to right,var(--primary),var(--primary-container))", color: "var(--on-primary-container)", padding: "13px 26px", borderRadius: 6, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", transition: "all 0.3s", position: "relative", zIndex: 1, textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 26px rgba(143,245,255,0.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>
            Download Resume <span className="material-symbols-outlined">download</span>
          </a>
        </div>

        {/* ── Form ─────────────────────────────────────────────── */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: -70, right: -70, width: 200, height: 200, background: "rgba(143,245,255,0.07)", filter: "blur(80px)", borderRadius: "50%", pointerEvents: "none" }} />
          <div className="glass-panel" style={{ padding: 40, borderRadius: 16, border: "1px solid rgba(72,71,77,0.1)", boxShadow: "0 20px 48px rgba(0,0,0,0.3)", position: "relative", overflow: "hidden" }}>
            <form ref={formRef} onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 34 }}>
              <Field id="name"    label="Full Name"            value={form.name}    onChange={handle} />
              <Field
                id="email" label="Email Address" type="email"
                value={form.email} onChange={handle}
                error={emailError}
                onBlur={() => setEmailTouched(true)}
              />
              <Field id="message" label="Transmission Message" value={form.message} onChange={handle} rows={4} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, paddingTop: 10 }}>
                <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
                  <span className="animate-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: isError ? "#c0392b" : "var(--secondary)", display: "inline-block" }} />
                  <span className="font-headline" style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--outline-variant)" }}>
                    {isError ? "Status: Failed" : isSending ? "Status: Transmitting" : isSent ? "Status: Delivered" : "Status: Online"}
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="font-headline"
                  style={{ background: btnBg, color: btnColor, padding: "13px 32px", borderRadius: 6, border: "1px solid rgba(72,71,77,0.2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", cursor: isSending || !canSubmit ? "not-allowed" : "pointer", transition: "all 0.3s", opacity: isSending ? 0.7 : 1 }}
                  onMouseEnter={(e) => { if (!isSending && !isSent && !isError) { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "var(--on-primary-container)"; e.currentTarget.style.borderColor = "var(--primary)"; } }}
                  onMouseLeave={(e) => { if (!isSending && !isSent && !isError) { e.currentTarget.style.background = "#2c2b33"; e.currentTarget.style.color = "var(--on-surface)"; e.currentTarget.style.borderColor = "rgba(72,71,77,0.2)"; } }}>
                  {btnLabel}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}