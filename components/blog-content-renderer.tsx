"use client"

import type React from "react"

interface BlogContentRendererProps {
  content: string
}

export function BlogContentRenderer({ content }: BlogContentRendererProps) {
  const renderContent = () => {
    const lines = content.split("\n")
    const elements: React.ReactNode[] = []
    let codeBlock = ""
    let inCodeBlock = false

    lines.forEach((line, index) => {
      // Detect code blocks (lines that start with spaces or contain code patterns)
      if (
        line.match(
          /^(public|private|const|import|class|function|async|app\.|router\.|export|\/\/|\/\*|\*\/|{|}|\[|\]|=|;)/,
        )
      ) {
        if (!inCodeBlock) {
          inCodeBlock = true
          codeBlock = line
        } else {
          codeBlock += "\n" + line
        }
      } else if (inCodeBlock && line.trim() === "") {
        // End code block on empty line
        if (codeBlock.trim()) {
          elements.push(
            <div key={`code-${index}`} className="my-6 animate-fade-in-up">
              <div className="bg-card border border-accent/20 rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="bg-accent/10 px-4 py-2 border-b border-accent/20">
                  <span className="text-xs font-mono text-accent">Code Example</span>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm font-mono text-foreground/90 leading-relaxed">{codeBlock.trim()}</code>
                </pre>
              </div>
            </div>,
          )
        }
        inCodeBlock = false
        codeBlock = ""
      } else if (inCodeBlock) {
        codeBlock += "\n" + line
      } else if (line.match(/^\d+\.\s+[A-Z]/)) {
        // Section heading (e.g., "1. INTRODUCTION")
        elements.push(
          <div key={`section-${index}`} className="mt-8 mb-4 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-accent border-l-4 border-accent pl-4 py-2">{line}</h2>
          </div>,
        )
      } else if (line.match(/^[A-Z][a-z]+:/)) {
        // Subheading (e.g., "Sai:", "Đúng:")
        elements.push(
          <div key={`subheading-${index}`} className="mt-4 mb-2 animate-fade-in-up">
            <h3 className="text-lg font-semibold text-accent/80">{line}</h3>
          </div>,
        )
      } else if (line.match(/^-\s+/)) {
        // Bullet point
        elements.push(
          <div key={`bullet-${index}`} className="ml-4 my-2 animate-fade-in-up">
            <p className="text-foreground/80 flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>{line.replace(/^-\s+/, "")}</span>
            </p>
          </div>,
        )
      } else if (line.match(/^\|/)) {
        // Table row
        elements.push(
          <div key={`table-${index}`} className="my-2 animate-fade-in-up">
            <div className="bg-card/50 border border-accent/10 px-4 py-2 rounded font-mono text-sm text-foreground/80">
              {line}
            </div>
          </div>,
        )
      } else if (line.trim() !== "") {
        // Regular paragraph
        elements.push(
          <div key={`para-${index}`} className="my-3 animate-fade-in-up">
            <p className="text-foreground/85 leading-relaxed text-base">{line}</p>
          </div>,
        )
      }
    })

    // Handle last code block if exists
    if (inCodeBlock && codeBlock.trim()) {
      elements.push(
        <div key="code-final" className="my-6 animate-fade-in-up">
          <div className="bg-card border border-accent/20 rounded-lg overflow-hidden shadow-lg hover-lift">
            <div className="bg-accent/10 px-4 py-2 border-b border-accent/20">
              <span className="text-xs font-mono text-accent">Code Example</span>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm font-mono text-foreground/90 leading-relaxed">{codeBlock.trim()}</code>
            </pre>
          </div>
        </div>,
      )
    }

    return elements
  }

  return <div className="content-wrapper space-y-2">{renderContent()}</div>
}
