"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border animate-fade-in-down">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 animate-scale-in">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center hover-lift">
              <span className="text-accent-foreground font-bold text-sm">LMC</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">LMC</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-accent transition-colors hover-lift animate-slide-in-left"
            >
              Trang Chủ
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors hover-lift stagger-1">
              Về Tôi
            </Link>
            <Link href="/blog" className="text-foreground hover:text-accent transition-colors hover-lift stagger-2">
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-down">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors hover-lift"
            >
              Trang Chủ
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors hover-lift"
            >
              Về Tôi
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors hover-lift"
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
