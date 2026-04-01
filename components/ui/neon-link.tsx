"use client"
import React, { useState } from 'react'
import Link from 'next/link'

interface NeonLinkProps {
  href: string
  children: React.ReactNode
  size?: 'sm' | 'default' | 'lg'
  external?: boolean
}

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: "8px 20px", fontSize: 10 },
  default: { padding: "14px 36px", fontSize: 11 },
  lg: { padding: "18px 52px", fontSize: 12 },
}

export function NeonLink({ href, children, size = 'default', external }: NeonLinkProps) {
  const [hovered, setHovered] = useState(false)

  const baseStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    fontFamily: "var(--font-syne), sans-serif",
    fontWeight: 400,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#F0EDE8",
    textDecoration: "none",
    background: "transparent",
    border: `1px solid ${hovered ? "rgba(240,237,232,0.9)" : "rgba(240,237,232,0.35)"}`,
    borderRadius: 50,
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    boxShadow: hovered
      ? "0 0 8px rgba(240,237,232,0.5), 0 0 20px rgba(240,237,232,0.2), 0 0 40px rgba(240,237,232,0.08), inset 0 0 12px rgba(240,237,232,0.04)"
      : "none",
    ...sizeStyles[size],
  }

  const neonTop: React.CSSProperties = {
    position: "absolute",
    top: -1,
    left: "12.5%",
    width: "75%",
    height: 1,
    background: "linear-gradient(to right, transparent, rgba(240,237,232,0.9), transparent)",
    opacity: hovered ? 1 : 0,
    transition: "opacity 0.4s ease",
    pointerEvents: "none",
  }

  const neonBottom: React.CSSProperties = {
    position: "absolute",
    bottom: -1,
    left: "12.5%",
    width: "75%",
    height: 1,
    background: "linear-gradient(to right, transparent, rgba(240,237,232,0.5), transparent)",
    opacity: hovered ? 1 : 0,
    transition: "opacity 0.4s ease",
    pointerEvents: "none",
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={baseStyle}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <span style={neonTop} />
        {children}
        <span style={neonBottom} />
      </a>
    )
  }

  return (
    <Link href={href} style={baseStyle}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <span style={neonTop} />
      {children}
      <span style={neonBottom} />
    </Link>
  )
}
