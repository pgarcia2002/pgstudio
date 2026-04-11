"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const videos = [
  "/hero.mp4",
  "/film4.mp4",
  "/composition3.mp4",
  "/MontageV1.mp4",
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
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "#0a0a0a" }}>
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      >
        <source src={video} type="video/mp4" />
      </video>
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
          cursor: "pointer",
          backdropFilter: "blur(8px)",
          transition: "background 0.2s ease",
          zIndex: 2,
        }}
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
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ref = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <main style={{ background: "#000" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "clamp(100px, 15vw, 180px) clamp(20px, 5vw, 40px) clamp(40px, 8vw, 80px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <p style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 32 }}>
          01 — Artificial Intelligence
        </p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-title), sans-serif", fontSize: "clamp(64px, 12vw, 160px)", fontWeight: 700, letterSpacing: "-0.03em", textTransform: "uppercase", color: "#fff", lineHeight: 0.88 }}>
            AI
          </h1>
          <Image src="/logo.png" alt="PG Studio" width={72} height={36} style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.5, marginBottom: 8 }} />
        </div>
        <VideoCard video="/hero.mp4" />
      </section>

      {/* ── VIDEOS ── */}
      {videos.slice(1).map((video, i) => (
        <article key={i} ref={ref} className="reveal" style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "clamp(32px, 6vw, 80px) clamp(20px, 5vw, 40px)",
        }}>
          <VideoCard video={video} />
        </article>
      ))}

      {/* ── CTA ── */}
      <section style={{ padding: "clamp(60px, 10vw, 120px) clamp(20px, 5vw, 40px)", textAlign: "center" }}>
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
