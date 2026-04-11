"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"

export default function HomePage() {
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ref = (el: HTMLElement | null) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el) }

  return (
    <main style={{ background: "#000" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        {/* Video background — replace /hero.mp4 with your actual video */}
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)" }} />

        {/* Hero content */}
        <div style={{
          position: "relative", zIndex: 2, height: "100%",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "0 40px 60px",
        }}>
          <h1 style={{
            fontFamily: "var(--font-title), sans-serif",
            fontSize: "clamp(52px, 10vw, 140px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 0.92,
            color: "#fff",
            textTransform: "uppercase",
            marginBottom: 32,
          }}>
            Patrick<br />Garcia
          </h1>
          <p style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: 13,
            fontWeight: 300,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
          }}>
            AI · Motion
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 40, right: 40, zIndex: 2,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        }}>
          <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", writingMode: "vertical-rl" }}>Scroll down</span>
          <div style={{ width: 1, height: 48, background: "rgba(255,255,255,0.3)" }} />
        </div>
      </section>

      {/* ── SPLIT — AI / MOTION ── */}
      <div className="home-split" style={{ display: "flex", height: "100vh" }}>
        <Link href="/ai" style={{
          flex: 1, position: "relative", overflow: "hidden", textDecoration: "none",
          display: "flex", alignItems: "flex-end", padding: "40px",
          borderRight: "1px solid rgba(255,255,255,0.08)",
          background: "#000",
          transition: "background 0.5s ease",
        }}
          onMouseEnter={e => (e.currentTarget.style.background = "#0a0a0a")}
          onMouseLeave={e => (e.currentTarget.style.background = "#000")}
        >
          <div>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>01</p>
            <h2 style={{
              fontFamily: "var(--font-title), sans-serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 700, letterSpacing: "-0.02em",
              textTransform: "uppercase", color: "#fff", lineHeight: 0.9,
            }}>
              Artificial<br />Intelligence
            </h2>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 20, letterSpacing: "0.05em" }}>
              Generative & Creative AI →
            </p>
          </div>
        </Link>

        <Link href="/motion" style={{
          flex: 1, position: "relative", overflow: "hidden", textDecoration: "none",
          display: "flex", alignItems: "flex-end", padding: "40px",
          background: "#000",
          transition: "background 0.5s ease",
        }}
          onMouseEnter={e => (e.currentTarget.style.background = "#0a0a0a")}
          onMouseLeave={e => (e.currentTarget.style.background = "#000")}
        >
          <div>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>02</p>
            <h2 style={{
              fontFamily: "var(--font-title), sans-serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 700, letterSpacing: "-0.02em",
              textTransform: "uppercase", color: "#fff", lineHeight: 0.9,
            }}>
              Motion<br />Design
            </h2>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 20, letterSpacing: "0.05em" }}>
              Animation & Art Direction →
            </p>
          </div>
        </Link>
      </div>

      {/* ── STATEMENT ── */}
      <section style={{ padding: "140px 40px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p ref={ref} className="reveal" style={{
          fontFamily: "var(--font-title), sans-serif",
          fontSize: "clamp(28px, 4vw, 52px)",
          fontWeight: 300,
          color: "#fff",
          lineHeight: 1.3,
          maxWidth: 900,
          letterSpacing: "-0.01em",
        }}>
          I create digital experiences that leave a mark — radical aesthetics, artificial intelligence, and motion.
        </p>
        <div style={{ marginTop: 64 }}>
          <Link href="/contact" style={{
            fontFamily: "var(--font-syne)", fontSize: 11, letterSpacing: "0.25em",
            textTransform: "uppercase", color: "#fff", textDecoration: "none",
            paddingBottom: 4, borderBottom: "1px solid rgba(255,255,255,0.4)",
            transition: "border-color 0.3s ease",
          }}>
            Start a project →
          </Link>
        </div>
      </section>

    </main>
  )
}
