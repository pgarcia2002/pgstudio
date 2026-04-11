"use client"
import { useEffect, useRef } from "react"

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, rafId: number

    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY }
    window.addEventListener("mousemove", onMove)

    const animate = () => {
      if (dotRef.current) dotRef.current.style.transform = `translate(${mouseX - 4}px,${mouseY - 4}px)`
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX - 18}px,${ringY - 18}px)`
      rafId = requestAnimationFrame(animate)
    }
    animate()
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{
        position: "fixed", top: 0, left: 0, width: 8, height: 8,
        borderRadius: "50%", background: "#fff",
        mixBlendMode: "difference", pointerEvents: "none", zIndex: 9999, willChange: "transform",
      }} />
      <div ref={ringRef} className="cursor-ring" style={{
        position: "fixed", top: 0, left: 0, width: 36, height: 36,
        borderRadius: "50%", border: "1px solid #fff",
        mixBlendMode: "difference", pointerEvents: "none", zIndex: 9999, willChange: "transform",
      }} />
    </>
  )
}
