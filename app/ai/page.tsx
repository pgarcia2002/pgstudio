"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"

const projects = [
  {
    title: "Generative Portraits",
    year: "2024",
    tags: ["Midjourney", "Stable Diffusion"],
    description: "Série de portraits génératifs explorant l'identité à l'ère de l'IA. Chaque image est le résultat d'un dialogue entre l'intention humaine et l'algorithme.",
    video: "/film 4.mp4",
  },
  {
    title: "Brand × AI",
    year: "2024",
    tags: ["DALL·E", "ControlNet"],
    description: "Déclinaisons d'identités visuelles de marque amplifiées par l'intelligence artificielle. Systèmes graphiques vivants, adaptatifs, en perpétuelle évolution.",
    video: "/Composition 3_3.mp4",
  },
  {
    title: "Typographic AI",
    year: "2023",
    tags: ["Runway", "After Effects"],
    description: "Exploration de la typographie animée par des modèles de diffusion. Lettres qui respirent, mutations de forme, entre contrôle et hasard.",
    video: "/MontageV1.mp4",
  },
]

export default function AIPage() {
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
        <p style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)", marginBottom: 32,
        }}>01 — Intelligence Artificielle</p>
        <h1 style={{
          fontFamily: "var(--font-title), sans-serif",
          fontSize: "clamp(64px, 12vw, 160px)",
          fontWeight: 700, letterSpacing: "-0.03em",
          textTransform: "uppercase", color: "#fff", lineHeight: 0.88,
        }}>
          AI
        </h1>
      </section>

      {/* ── PROJECTS ── */}
      {projects.map(({ title, year, tags, description, video }) => (
        <article key={title} ref={ref} className="reveal" style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "80px 40px",
        }}>
          <div style={{ width: "100%", aspectRatio: "16/7", marginBottom: 40, overflow: "hidden", background: "#0a0a0a" }}>
            <video
              autoPlay muted loop playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>

          <div className="pg-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <h2 style={{
                fontFamily: "var(--font-title), sans-serif",
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 600, letterSpacing: "-0.02em",
                textTransform: "uppercase", color: "#fff", marginBottom: 16,
              }}>
                {title}
              </h2>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {tags.map(t => (
                  <span key={t} style={{
                    fontFamily: "var(--font-syne)", fontSize: 9, letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                    border: "1px solid rgba(255,255,255,0.12)", padding: "4px 10px",
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>
                {description}
              </p>
              <p style={{ fontFamily: "var(--font-syne)", fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.2)", marginTop: 24 }}>{year}</p>
            </div>
          </div>
        </article>
      ))}

      {/* ── CTA ── */}
      <section style={{ padding: "120px 40px", textAlign: "center" }}>
        <p ref={ref} className="reveal" style={{
          fontFamily: "var(--font-title), sans-serif",
          fontSize: "clamp(32px, 5vw, 72px)",
          fontWeight: 700, letterSpacing: "-0.02em",
          textTransform: "uppercase", color: "#fff", marginBottom: 48,
        }}>
          Un projet en tête ?
        </p>
        <Link href="/contact" style={{
          fontFamily: "var(--font-syne)", fontSize: 11, letterSpacing: "0.25em",
          textTransform: "uppercase", color: "#fff", textDecoration: "none",
          paddingBottom: 4, borderBottom: "1px solid rgba(255,255,255,0.4)",
        }}>
          Travaillons ensemble →
        </Link>
      </section>
    </main>
  )
}
