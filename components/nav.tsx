"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const links = [
  { label: "AI", href: "/ai" },
  { label: "Motion", href: "/motion" },
  { label: "Contact", href: "/contact" },
]

export function Nav() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setHidden(y > lastScrollY.current && y > 80)
      lastScrollY.current = y
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "24px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
      }}>
        <Link href="/" onClick={() => setMenuOpen(false)} style={{ zIndex: 101, display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="PG Studio"
            width={72}
            height={36}
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop */}
        <div className="nav-desktop" style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {links.map(({ label, href }) => (
            <Link key={label} href={href} className="nav-link" style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: 11, fontWeight: 400,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#fff", textDecoration: "none",
            }}>
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4, zIndex: 101 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: 22, height: 1, background: "#fff",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: i === 0 && menuOpen ? "translateY(6px) rotate(45deg)" : i === 2 && menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              opacity: i === 1 && menuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed", inset: 0, background: "#000", zIndex: 99,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 52,
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: menuOpen ? "auto" : "none",
      }}>
        {links.map(({ label, href }) => (
          <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: 36, fontWeight: 300, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#fff", textDecoration: "none",
          }}>
            {label}
          </Link>
        ))}
      </div>
    </>
  )
}
