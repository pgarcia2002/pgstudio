export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "28px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "var(--font-syne), sans-serif",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.3)",
    }}>
      <span>PG Studio © 2025</span>
      <span>Paris, France</span>
    </footer>
  )
}
