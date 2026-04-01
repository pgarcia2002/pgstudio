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

  return (
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
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: 17,
          fontWeight: 700,
          color: "#F0EDE8",
          textDecoration: "none",
          letterSpacing: "0.04em",
        }}
      >
        PG Studio
      </Link>
      <div style={{ display: "flex", gap: 40 }}>
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
    </nav>
  )
}
