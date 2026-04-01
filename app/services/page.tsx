import { AnimatedSection } from "@/components/animated-section"
import { NeonLink } from "@/components/ui/neon-link"

const T = "var(--font-title), sans-serif"
const S = "var(--font-syne), sans-serif"
const P = "var(--font-cormorant), serif"

export default function ServicesPage() {
  return (
    <main style={{ background: "#080808" }}>

      {/* ── Hero ── */}
      <section className="pg-section-hero" style={{ borderBottom: "1px solid rgba(240,237,232,0.1)" }}>
        <AnimatedSection>
          <h1 style={{ fontFamily: T, fontSize: "clamp(52px, 7vw, 88px)", fontWeight: 300, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F0EDE8", margin: "0 0 24px", lineHeight: 1 }}>
            Services
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p style={{ fontFamily: P, fontSize: "clamp(20px, 2.5vw, 28px)", fontStyle: "italic", fontWeight: 400, color: "rgba(240,237,232,0.5)", maxWidth: 560, lineHeight: 1.5 }}>
            Des sites au design soigné, pensés pour capter l'attention et transformer vos visiteurs en clients.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Website Creation ── */}
      <AnimatedSection delay={0.1}>
        <section className="pg-section" style={{ borderBottom: "1px solid rgba(240,237,232,0.1)" }}>
          <div className="pg-grid-2">
            {/* Left */}
            <div>
              <p style={{ fontFamily: S, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(240,237,232,0.38)", marginBottom: 20 }}>
                01 — Création de site web
              </p>
              <h2 style={{ fontFamily: T, fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", color: "#F0EDE8", margin: "0 0 32px", lineHeight: 1.1 }}>
                Un site qui vous ressemble
              </h2>
              <p style={{ fontFamily: S, fontSize: 14, fontWeight: 300, color: "rgba(240,237,232,0.5)", lineHeight: 1.9, marginBottom: 24 }}>
                Chaque site est conçu sur mesure, avec un design original pensé pour votre marque et votre audience. Pas de template. Pas de compromis. Une identité visuelle forte, des animations soignées, une navigation fluide — le tout optimisé pour convertir.
              </p>
              <p style={{ fontFamily: S, fontSize: 14, fontWeight: 300, color: "rgba(240,237,232,0.5)", lineHeight: 1.9 }}>
                Que vous lanciez une nouvelle activité ou que vous souhaitiez passer à un niveau supérieur, je m'occupe de tout : stratégie, design, développement et mise en ligne.
              </p>
            </div>
            {/* Right — pricing */}
            <div>
              <div style={{ border: "1px solid rgba(240,237,232,0.1)", padding: "48px 40px" }}>
                <p style={{ fontFamily: S, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(240,237,232,0.38)", marginBottom: 16 }}>Tarif</p>
                <p style={{ fontFamily: T, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300, letterSpacing: "0.02em", color: "#F0EDE8", lineHeight: 1, marginBottom: 8 }}>600 – 1 200 €</p>
                <p style={{ fontFamily: P, fontSize: 17, fontStyle: "italic", color: "rgba(240,237,232,0.38)", marginBottom: 40 }}>selon la complexité du projet</p>
                <div style={{ borderTop: "1px solid rgba(240,237,232,0.1)", paddingTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Design sur mesure", "Site responsive (mobile, tablette, desktop)", "Animations & micro-interactions", "Optimisation SEO de base", "Intégration CMS", "Mise en ligne incluse"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: S, fontSize: 13, fontWeight: 300, color: "#F0EDE8" }}>
                      <span style={{ color: "rgba(240,237,232,0.4)", fontSize: 8 }}>◆</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Monthly Maintenance ── */}
      <AnimatedSection delay={0.1}>
        <section className="pg-section" style={{ borderBottom: "1px solid rgba(240,237,232,0.1)" }}>
          <div className="pg-grid-2">
            {/* Left */}
            <div>
              <p style={{ fontFamily: S, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(240,237,232,0.38)", marginBottom: 20 }}>
                02 — Maintenance mensuelle
              </p>
              <h2 style={{ fontFamily: T, fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", color: "#F0EDE8", margin: "0 0 32px", lineHeight: 1.1 }}>
                Votre site, toujours à jour
              </h2>
              <p style={{ fontFamily: S, fontSize: 14, fontWeight: 300, color: "rgba(240,237,232,0.5)", lineHeight: 1.9, marginBottom: 24 }}>
                Un site web, ça vit. Textes à modifier, photos à changer, nouvelles offres à ajouter — je m'en occupe pour vous. Sans délai, sans prise de tête.
              </p>
              <p style={{ fontFamily: S, fontSize: 14, fontWeight: 300, color: "rgba(240,237,232,0.5)", lineHeight: 1.9 }}>
                Le forfait maintenance vous garantit un interlocuteur unique, réactif, qui connaît votre site de fond en comble.
              </p>
            </div>
            {/* Right — pricing */}
            <div>
              <div style={{ border: "1px solid rgba(240,237,232,0.1)", padding: "48px 40px" }}>
                <p style={{ fontFamily: S, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(240,237,232,0.38)", marginBottom: 16 }}>Forfait mensuel</p>
                <p style={{ fontFamily: T, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300, letterSpacing: "0.02em", color: "#F0EDE8", lineHeight: 1, marginBottom: 8 }}>20 – 50 €</p>
                <p style={{ fontFamily: P, fontSize: 17, fontStyle: "italic", color: "rgba(240,237,232,0.38)", marginBottom: 40 }}>par mois, sans engagement</p>
                <div style={{ borderTop: "1px solid rgba(240,237,232,0.1)", paddingTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Modifications de contenu (textes, images)", "Mises à jour techniques", "Ajout de nouvelles pages ou sections", "Suivi des performances", "Support prioritaire"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: S, fontSize: 13, fontWeight: 300, color: "#F0EDE8" }}>
                      <span style={{ color: "rgba(240,237,232,0.4)", fontSize: 8 }}>◆</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Process ── */}
      <section className="pg-section" style={{ borderBottom: "1px solid rgba(240,237,232,0.1)" }}>
        <AnimatedSection>
          <p style={{ fontFamily: S, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(240,237,232,0.38)", marginBottom: 64 }}>
            Méthode
          </p>
        </AnimatedSection>
        <div className="pg-grid-4">
          {[
            { num: "01", name: "Découverte", desc: "Comprendre vos objectifs, votre audience et votre marché pour définir une direction claire." },
            { num: "02", name: "Design", desc: "Concevoir des maquettes originales et des prototypes interactifs, jusqu'au rendu parfait." },
            { num: "03", name: "Développement", desc: "Intégrer le design avec un code propre, rapide et accessible." },
            { num: "04", name: "Lancement", desc: "Déploiement soigné, tests complets et passation en douceur." },
          ].map(({ num, name, desc }, i) => (
            <AnimatedSection key={num} delay={i * 0.1}>
              <div>
                <span style={{ fontFamily: S, fontSize: 11, color: "rgba(240,237,232,0.38)", letterSpacing: "0.1em", display: "block", marginBottom: 16 }}>{num}</span>
                <h3 style={{ fontFamily: T, fontSize: 20, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F0EDE8", margin: "0 0 14px" }}>{name}</h3>
                <p style={{ fontFamily: S, fontSize: 12, fontWeight: 300, color: "rgba(240,237,232,0.38)", lineHeight: 1.8, margin: 0 }}>{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pg-section-lg" style={{ textAlign: "center" }}>
        <AnimatedSection>
          <h2 style={{ fontFamily: T, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F0EDE8", margin: "0 0 16px" }}>
            On démarre ?
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p style={{ fontFamily: P, fontSize: 20, fontStyle: "italic", color: "rgba(240,237,232,0.38)", marginBottom: 48 }}>
            Parlons de votre projet — sans engagement.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <NeonLink href="/contact">Prendre contact</NeonLink>
        </AnimatedSection>
      </section>
    </main>
  )
}
