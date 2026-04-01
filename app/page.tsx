import Link from "next/link"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { AnimatedSection } from "@/components/animated-section"
import { NeonLink } from "@/components/ui/neon-link"

export default function HomePage() {
  return (
    <main style={{ background: "#080808" }}>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 48px",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.85 }}>
          <ShaderAnimation />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(8,8,8,0.4) 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 600 }}>
          <p
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(240,237,232,0.38)",
              marginBottom: 20,
            }}
          >
            Web Design — Paris
          </p>
          <h1
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#F0EDE8",
              margin: "0 0 20px",
            }}
          >
            Un design qui convertit.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: 13,
              fontWeight: 300,
              color: "rgba(240,237,232,0.38)",
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            Je conçois des sites web qui captent l'attention et transforment les visiteurs en clients.
          </p>
          <NeonLink href="/work">Voir les projets →</NeonLink>
        </div>
      </section>


      {/* ── Contact CTA strip ── */}
      <section
        style={{
          borderTop: "1px solid rgba(240,237,232,0.1)",
          padding: "120px 48px",
          textAlign: "center",
        }}
      >
        <AnimatedSection style={{ transform: "translateY(80px) scale(0.95)" }}>
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(48px, 6vw, 80px)",
              fontWeight: 300,
              color: "#F0EDE8",
              margin: "0 0 20px",
            }}
          >
            Un projet en tête ?
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: 14,
              fontWeight: 300,
              color: "rgba(240,237,232,0.38)",
              marginBottom: 48,
            }}
          >
            Créons quelque chose de remarquable ensemble.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <NeonLink href="/contact">Travaillons ensemble</NeonLink>
        </AnimatedSection>
      </section>
    </main>
  )
}
