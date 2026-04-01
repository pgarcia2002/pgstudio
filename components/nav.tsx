"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const links = [
  { label: "Projets", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export function Nav() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastScrollY.current && currentY > 80)
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on route change / scroll
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "28px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: 17,
            fontWeight: 700,
            color: "#F0EDE8",
            textDecoration: "none",
            letterSpacing: "0.04em",
            zIndex: 101,
          }}
        >
          PG Studio
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: "flex", gap: 40 }}>
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: 11,
                fontWeight: 400,
                color: "#F0EDE8",
                textDecoration: "none",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
              className="nav-link"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            zIndex: 101,
          }}
          aria-label="Menu"
        >
          <span style={{
            display: "block", width: 22, height: 1,
            background: "#F0EDE8",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
          }} />
          <span style={{
            display: "block", width: 22, height: 1,
            background: "#F0EDE8",
            transition: "opacity 0.3s ease",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: 22, height: 1,
            background: "#F0EDE8",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "#080808",
        zIndex: 99,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 48,
        transition: "opacity 0.4s ease, transform 0.4s ease",
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
        pointerEvents: menuOpen ? "auto" : "none",
      }}>
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: 28,
              fontWeight: 300,
              color: "#F0EDE8",
              textDecoration: "none",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  )
}
