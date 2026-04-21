"use client"

export default function ContactPage() {
  return (
    <main style={{ background: "#000", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "180px 40px 80px" }}>
        <p style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)", marginBottom: 32,
        }}>Contact</p>
        <h1 style={{
          fontFamily: "var(--font-title), sans-serif",
          fontSize: "clamp(64px, 14vw, 180px)",
          fontWeight: 700, letterSpacing: "-0.03em",
          textTransform: "uppercase", color: "#fff", lineHeight: 0.85,
        }}>
          Let's<br />Talk.
        </h1>
      </section>

      {/* ── LINKS ── */}
      <div style={{ flex: 1, borderTop: "1px solid rgba(255,255,255,0.08)" }}>

        <a
          href="mailto:pgstudio.fx@gmail.com"
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "40px 40px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            textDecoration: "none",
            transition: "background 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#fff" ;
            e.currentTarget.querySelectorAll("[data-text]").forEach(el => (el as HTMLElement).style.color = "#000")
          }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            e.currentTarget.querySelectorAll("[data-text]").forEach(el => (el as HTMLElement).style.color = "#fff")
          }}
        >
          <div>
            <p data-text style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12, transition: "color 0.3s ease" }}>01 — Email</p>
            <p data-text style={{ fontFamily: "var(--font-title), sans-serif", fontSize: "clamp(28px, 5vw, 72px)", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", transition: "color 0.3s ease" }}>
              pgstudio.fx@gmail.com
            </p>
          </div>
          <span data-text style={{ fontFamily: "var(--font-title)", fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 700, color: "#fff", transition: "color 0.3s ease" }}>↗</span>
        </a>

        <a
          href="https://www.instagram.com/pgstudio.fx/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "40px 40px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            textDecoration: "none",
            transition: "background 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
            e.currentTarget.querySelectorAll("[data-text]").forEach(el => (el as HTMLElement).style.color = "#000")
          }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            e.currentTarget.querySelectorAll("[data-text]").forEach(el => (el as HTMLElement).style.color = "#fff")
          }}
        >
          <div>
            <p data-text style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12, transition: "color 0.3s ease" }}>02 — Instagram</p>
            <p data-text style={{ fontFamily: "var(--font-title), sans-serif", fontSize: "clamp(28px, 5vw, 72px)", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", transition: "color 0.3s ease" }}>
              @pgstudio.fx
            </p>
          </div>
          <span data-text style={{ fontFamily: "var(--font-title)", fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 700, color: "#fff", transition: "color 0.3s ease" }}>↗</span>
        </a>

      </div>

      {/* ── FOOTER LINE ── */}
      <div style={{ padding: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Paris, France</p>
        <p style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Open for projects</p>
      </div>

    </main>
  )
}
