"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"

const projects = [
  {
    title: "Brand Film",
    year: "2024",
    tags: ["After Effects", "Cinema 4D"],
    description: "Film de marque pour un lancement produit. Conception end-to-end : storyboard, motion graphics, sound design. Un langage visuel cohérent du premier au dernier frame.",
  },
  {
    title: "UI Motion",
    year: "2024",
    tags: ["Framer", "Lottie"],
    description: "Système d'animation pour une interface SaaS. Micro-interactions, transitions de page, états de chargement — chaque mouvement raconte quelque chose.",
  },
  {
    title: "Showreel",
    year: "2023",
    tags: ["Premiere Pro", "After Effects"],
    description: "Showreel annuel compilant les projets les plus significatifs. Rythme, coupe, énergie — une vitrine en mouvement.",
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
        <p style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)", marginBottom: 32,
        }}>02 — Motion Design</p>
        <h1 style={{
          fontFamily: "var(--font-title), sans-serif",
          fontSize: "clamp(44px, 12vw, 160px)",
          fontWeight: 700, letterSpacing: "-0.03em",
          textTransform: "uppercase", color: "#fff", lineHeight: 0.88,
        }}>
          Motion
        </h1>
      </section>

      {/* ── PROJECTS ── */}
      {projects.map(({ title, year, tags, description }, i) => (
        <article key={title} ref={ref} className="reveal" style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "80px 40px",
        }}>
          {/* Video/image placeholder */}
          <div style={{
            width: "100%",
            aspectRatio: "16/7",
            background: `hsl(${200 + i * 30}, 8%, 8%)`,
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
            }} />
            <span style={{ fontFamily: "var(--font-syne)", fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.15)", textTransform: "uppercase", zIndex: 1 }}>
              ▶ Vidéo
            </span>
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
