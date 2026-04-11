"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Generative Portraits",
    year: "2024",
    tags: ["Midjourney", "Stable Diffusion"],
    description: "A series of generative portraits exploring identity in the age of AI. Each image is the result of a dialogue between human intention and algorithm.",
    video: "/film 4.mp4",
  },
  {
    title: "Brand × AI",
    year: "2024",
    tags: ["DALL·E", "ControlNet"],
    description: "Brand visual identities amplified by artificial intelligence. Living, adaptive graphic systems in constant evolution.",
    video: "/Composition 3_3.mp4",
  },
  {
    title: "Typographic AI",
    year: "2023",
    tags: ["Runway", "After Effects"],
    description: "An exploration of typography animated by diffusion models. Letters that breathe, shape mutations — somewhere between control and chance.",
    video: "/MontageV1.mp4",
  },
]

function VideoCard({ video }: { video: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", marginBottom: 40, overflow: "hidden", background: "#0a0a0a" }}>
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* Sound toggle */}
      <button
        onClick={toggleSound}
        style={{
          position: "absolute", bottom: 16, right: 16,
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
          padding: "8px 14px",
          cursor: "none",
          backdropFilter: "blur(8px)",
          transition: "background 0.2s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
      >
        {muted ? "🔇 Sound off" : "🔊 Sound on"}
      </button>
    </div>
  )
}

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
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 40px 60px" }}>
          <p style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 24 }}>
            01 — Artificial Intelligence
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <h1 style={{ fontFamily: "var(--font-title), sans-serif", fontSize: "clamp(64px, 12vw, 160px)", fontWeight: 700, letterSpacing: "-0.03em", textTransform: "uppercase", color: "#fff", lineHeight: 0.88 }}>
              AI
            </h1>
            <Image src="/logo.png" alt="PG Studio" width={72} height={36} style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.5, marginBottom: 8 }} />
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      {projects.map(({ title, year, tags, description, video }) => (
        <article key={title} ref={ref} className="reveal" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "80px 40px" }}>
          <VideoCard video={video} />

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
