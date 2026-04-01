"use client"
import React, { useState } from 'react'

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'default' | 'lg'
}

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: "8px 20px", fontSize: 10 },
  default: { padding: "14px 36px", fontSize: 11 },
  lg: { padding: "18px 52px", fontSize: 12 },
}

export function NeonButton({ children, size = 'default', style, ...props }: NeonButtonProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily: "var(--font-syne), sans-serif",
        fontWeight: 400,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#F0EDE8",
        background: "transparent",
        border: `1px solid ${hovered ? "rgba(240,237,232,0.9)" : "rgba(240,237,232,0.35)"}`,
        borderRadius: 50,
        cursor: "none",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 0 8px rgba(240,237,232,0.5), 0 0 20px rgba(240,237,232,0.2), 0 0 40px rgba(240,237,232,0.08), inset 0 0 12px rgba(240,237,232,0.04)"
          : "none",
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      <span style={{
        position: "absolute",
        top: -1,
        left: "12.5%",
        width: "75%",
        height: 1,
        background: "linear-gradient(to right, transparent, rgba(240,237,232,0.9), transparent)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />
      {children}
      <span style={{
        position: "absolute",
        bottom: -1,
        left: "12.5%",
        width: "75%",
        height: 1,
        background: "linear-gradient(to right, transparent, rgba(240,237,232,0.5), transparent)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />
    </button>
  )
}
