"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"

const projects = [
  {
    title: "Brand Film",
    year: "2024",
    tags: ["After Effects", "Cinema 4D"],
    description: "Brand film for a product launch. End-to-end concept: storyboard, motion graphics, sound design. A cohesive visual language from first to last frame.",
  },
  {
    title: "UI Motion",
    year: "2024",
    tags: ["Framer", "Lottie"],
    description: "Animation system for a SaaS interface. Micro-interactions, page transitions, loading states — every movement tells a story.",
  },
  {
    title: "Showreel",
    year: "2023",
    tags: ["Premiere Pro", "After Effects"],
    description: "Annual showreel compiling the most significant projects. Rhythm, cut, energy — a showcase in motion.",
  },
]

export default function MotionPage() {
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ref = (el: HTMLElement | null) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el) }

  return (
    <main style={{ background: "#000" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "180px 40px 100px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <p style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 32 }}>
          02 — Motion Design
        </p>
        <h1 style={{ fontFamily: "var(--font-title), sans-serif", fontSize: "clamp(44px, 12vw, 160px)", fontWeight: 700, letterSpacing: "-0.03em", textTransform: "uppercase", color: "#fff", lineHeight: 0.88 }}>
          Motion
        </h1>
      </section>

      {/* ── PROJECTS ── */}
      {projects.map(({ title, year, tags, description }, i) => (
        <article key={title} ref={ref} className="reveal" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "80px 40px" }}>
          <div style={{
            width: "100%", aspectRatio: "16/7", marginBottom: 40,
            background: `hsl(${200 + i * 30}, 8%, 8%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)" }} />
            <span style={{ fontFamily: "var(--font-syne)", fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.15)", textTransform: "uppercase", zIndex: 1 }}>▶ Video</span>
          </div>

          <div className="pg-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-title), sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 600, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", marginBottom: 16 }}>
                {title}
              </h2>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {tags.map(t => (
                  <span key={t} style={{ fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.12)", padding: "4px 10px" }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>{description}</p>
              <p style={{ fontFamily: "var(--font-syne)", fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.2)", marginTop: 24 }}>{year}</p>
            </div>
          </div>
        </article>
      ))}

      {/* ── CTA ── */}
      <section style={{ padding: "120px 40px", textAlign: "center" }}>
        <p ref={ref} className="reveal" style={{ fontFamily: "var(--font-title), sans-serif", fontSize: "clamp(32px, 5vw, 72px)", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", marginBottom: 48 }}>
          Got a project in mind?
        </p>
        <Link href="/contact" style={{ fontFamily: "var(--font-syne)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#fff", textDecoration: "none", paddingBottom: 4, borderBottom: "1px solid rgba(255,255,255,0.4)" }}>
          Let's work together →
        </Link>
      </section>
    </main>
  )
}
