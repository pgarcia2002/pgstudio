"use client"
import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
    if (res.ok) {
      setStatus("sent")
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setStatus("error")
    }
  }

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    padding: "18px 0",
    fontFamily: "var(--font-syne), sans-serif",
    fontSize: 15,
    fontWeight: 300,
    color: "#fff",
    outline: "none",
    transition: "border-color 0.3s ease",
  }

  return (
    <main style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "180px 40px 80px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <p style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)", marginBottom: 32,
        }}>Contact</p>
        <h1 style={{
          fontFamily: "var(--font-title), sans-serif",
          fontSize: "clamp(52px, 10vw, 130px)",
          fontWeight: 700, letterSpacing: "-0.03em",
          textTransform: "uppercase", color: "#fff", lineHeight: 0.88,
        }}>
          Let's<br />Talk.
        </h1>
      </section>

      {/* ── FORM ── */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 680 }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ marginBottom: 8 }}>
              <label style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Name</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={inputStyle} />
            </div>
            <div style={{ marginBottom: 8, marginTop: 32 }}>
              <label style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.com" style={inputStyle} />
            </div>
            <div style={{ marginBottom: 8, marginTop: 32 }}>
              <label style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Message</label>
              <textarea required value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell me about your project..." rows={5}
                style={{ ...inputStyle, resize: "none", display: "block" }} />
            </div>

            <div style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 24 }}>
              <button type="submit" disabled={status === "sending" || status === "sent"} style={{
                background: "#fff", color: "#000",
                border: "none",
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: 11, fontWeight: 500,
                letterSpacing: "0.25em", textTransform: "uppercase",
                padding: "18px 48px",
                cursor: status === "sending" || status === "sent" ? "default" : "none",
                opacity: status === "sending" ? 0.6 : 1,
                transition: "background 0.2s ease, color 0.2s ease, opacity 0.2s ease",
              }}
                onMouseEnter={e => { if (status === "idle" || status === "error") (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.85)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#fff" }}
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send →"}
              </button>
              {status === "error" && (
                <p style={{ fontFamily: "var(--font-syne)", fontSize: 11, color: "rgba(255,80,80,0.8)", letterSpacing: "0.1em" }}>
                  Something went wrong. Try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* ── INFO ── */}
      <section style={{ padding: "0 40px 120px", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 40, paddingTop: 60 }}>
        <div style={{ display: "flex", gap: 80, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 12 }}>Email</p>
            <a href="mailto:pgstudio.fx@gmail.com" style={{ fontFamily: "var(--font-syne)", fontSize: 14, color: "#fff", textDecoration: "none" }}>
              pgstudio.fx@gmail.com
            </a>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 12 }}>Location</p>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 14, color: "#fff" }}>Paris, France</p>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 12 }}>Availability</p>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 14, color: "#fff" }}>Open for projects</p>
          </div>
        </div>
      </section>
    </main>
  )
}
