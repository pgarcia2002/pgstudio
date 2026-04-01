import { AnimatedSection } from "@/components/animated-section"
import { NeonLink } from "@/components/ui/neon-link"

const projects = [
  {
    name: "La Pizza de Papa",
    url: "https://la-pizza-de-papa.vercel.app",
    category: "Restauration",
    description:
      "Un site chaleureux et appétissant pour une pizzeria locale. Conçu pour évoquer l'odeur du four à bois et l'esprit d'une vraie recette familiale italienne.",
  },
  {
    name: "Logueuil",
    url: "https://logueuil.vercel.app",
    category: "Horlogerie",
    description:
      "Une expérience éditoriale raffinée pour une marque horlogère de luxe. Chaque plan est composé comme une photographie — précis, délibéré, intemporel.",
  },
  {
    name: "Speedster",
    url: "https://speedster-sandy.vercel.app",
    category: "Chaussures de sport",
    description:
      "Un site audacieux et dynamique pour une marque de chaussures de sport. Des visuels à fort contraste et une énergie cinétique qui reflète la puissance et le style de chaque paire.",
  },
]

export default function WorkPage() {
  return (
    <main style={{ background: "#080808" }}>
      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 80,
          paddingLeft: 48,
          paddingRight: 48,
          borderBottom: "1px solid rgba(240,237,232,0.1)",
        }}
      >
        <AnimatedSection>
          <h1
            style={{
              fontFamily: "var(--font-title), sans-serif",
              fontSize: "clamp(52px, 7vw, 88px)",
              fontWeight: 300,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#F0EDE8",
              margin: "0 0 20px",
              lineHeight: 1,
            }}
          >
            Projets
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(240,237,232,0.38)",
            }}
          >
            Sélection de réalisations.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Projects ── */}
      {projects.map(({ name, url, category, description }) => (
        <AnimatedSection key={name} delay={0.1}>
          <section
            style={{
              borderBottom: "1px solid rgba(240,237,232,0.1)",
              padding: "72px 48px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* iframe preview */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "62.5%",
                overflow: "hidden",
                background: "#0f0f0f",
                border: "1px solid rgba(240,237,232,0.08)",
              }}
            >
              <iframe
                src={url}
                title={name}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  pointerEvents: "none",
                }}
                loading="lazy"
              />
            </div>

            {/* Project info */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(240,237,232,0.38)",
                  marginBottom: 20,
                }}
              >
                {category}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(32px, 3.5vw, 48px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#F0EDE8",
                  margin: "0 0 24px",
                  lineHeight: 1.15,
                }}
              >
                {name}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 13,
                  fontWeight: 300,
                  color: "rgba(240,237,232,0.38)",
                  lineHeight: 1.9,
                  marginBottom: 40,
                }}
              >
                {description}
              </p>
              <NeonLink href={url} size="sm" external>Voir le projet →</NeonLink>
            </div>
          </section>
        </AnimatedSection>
      ))}
    </main>
  )
}
