"use client"
import { AnimatedSection } from "@/components/animated-section"
import { NeonButton } from "@/components/ui/neon-button"

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
]

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get("name")
    const email = data.get("email")
    const message = data.get("message")
    const subject = encodeURIComponent(`Demande de projet — ${name}`)
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    )
    window.location.href = `mailto:patrickgarciapro@hotmail.com?subject=${subject}&body=${body}`
  }

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
            Parlons-en.
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
            Parlez-moi de votre projet.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Form + Info ── */}
      <section
        style={{
          padding: "80px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 96,
          alignItems: "start",
        }}
      >
        {/* Form */}
        <AnimatedSection>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(240,237,232,0.38)",
                }}
              >
                Nom
              </span>
              <input
                type="text"
                name="name"
                required
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(240,237,232,0.2)",
                  padding: "10px 0",
                  color: "#F0EDE8",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 14,
                  fontWeight: 300,
                  outline: "none",
                  width: "100%",
                }}
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(240,237,232,0.38)",
                }}
              >
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(240,237,232,0.2)",
                  padding: "10px 0",
                  color: "#F0EDE8",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 14,
                  fontWeight: 300,
                  outline: "none",
                  width: "100%",
                }}
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(240,237,232,0.38)",
                }}
              >
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                required
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(240,237,232,0.2)",
                  padding: "10px 0",
                  color: "#F0EDE8",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 14,
                  fontWeight: 300,
                  outline: "none",
                  width: "100%",
                  resize: "none",
                }}
              />
            </label>

            <NeonButton type="submit" style={{ alignSelf: "flex-start", cursor: "none", fontFamily: "var(--font-syne), sans-serif", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Envoyer →
            </NeonButton>
          </form>
        </AnimatedSection>

        {/* Contact info */}
        <AnimatedSection delay={0.15}>
          <div style={{ paddingTop: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 40, marginBottom: 64 }}>
              {[
                { label: "Email", value: "patrickgarciapro@hotmail.com", href: "mailto:patrickgarciapro@hotmail.com" },
                { label: "Basé à", value: "Paris, France" },
                { label: "Disponible pour", value: "Projets freelance partout dans le monde" },
                { label: "Délai de réponse", value: "Sous 48h" },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(240,237,232,0.38)",
                      marginBottom: 8,
                    }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 22,
                        fontWeight: 400,
                        color: "#F0EDE8",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(240,237,232,0.2)",
                        paddingBottom: 2,
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 22,
                        fontWeight: 400,
                        color: "#F0EDE8",
                        margin: 0,
                      }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(240,237,232,0.1)",
                paddingTop: 32,
                display: "flex",
                gap: 40,
              }}
            >
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(240,237,232,0.38)",
                    textDecoration: "none",
                    paddingBottom: 2,
                    borderBottom: "1px solid transparent",
                    transition: "color 0.3s ease, border-color 0.3s ease",
                  }}
                  className="footer-link"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
