import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LMC - Blog Lập Trình Mạng",
  description: "Blog chia sẻ kiến thức về lập trình mạng với Java & JavaScript",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        <div className="tech-orb tech-orb-primary" />
        <div className="tech-orb tech-orb-secondary" />
        <div className="content-wrapper">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
