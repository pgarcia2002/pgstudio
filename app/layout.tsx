import type { Metadata } from "next"
import { Playfair_Display, Josefin_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Nav } from "@/components/nav"
import { Cursor } from "@/components/cursor"
import { Footer } from "@/components/footer"

const playfair = Playfair_Display({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

const josefin = Josefin_Sans({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "PG Studio — AI & Motion",
  description:
    "Patrick Garcia — AI & Motion Designer based in Paris. Creative digital experiences.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo pg.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${josefin.variable} ${spaceGrotesk.variable}`}
      style={{ background: "#080808" }}
    >
      <body style={{ background: "#080808", color: "#F0EDE8", cursor: "none", minHeight: "100vh" }}>
        <Cursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
