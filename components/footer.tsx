import Image from "next/image"

export function Footer() {
  return (
    <footer
      className="footer-inner"
      style={{
        borderTop: "1px solid rgba(240,237,232,0.1)",
        padding: "32px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "var(--font-syne), sans-serif",
        fontSize: 11,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "rgba(240,237,232,0.38)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Image src="/logo.png" alt="PG Studio" width={28} height={14} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
        <span>PG Studio © 2025</span>
      </div>
    </footer>
  )
}
