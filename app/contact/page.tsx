"use client"

export default function ContactPage() {
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

      {/* ── INFO ── */}
      <section style={{ padding: "80px 40px 120px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>

          <div>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>Email</p>
            <a href="mailto:pgstudio.fx@gmail.com" style={{ fontFamily: "var(--font-title), sans-serif", fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", textDecoration: "none" }}>
              pgstudio.fx@gmail.com
            </a>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>Instagram</p>
            <a href="https://www.instagram.com/pgstudio.fx/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-title), sans-serif", fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", textDecoration: "none" }}>
              @pgstudio.fx
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}
