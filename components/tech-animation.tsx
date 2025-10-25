"use client"

export function TechAnimation() {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg border border-accent/20 bg-card/50 backdrop-blur-sm">
      {/* Animated network nodes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <style>{`
            @keyframes pulse-node {
              0%, 100% { r: 4px; opacity: 0.8; }
              50% { r: 6px; opacity: 1; }
            }
            @keyframes move-line {
              0%, 100% { stroke-dashoffset: 0; }
              50% { stroke-dashoffset: 10; }
            }
            .node { animation: pulse-node 2s ease-in-out infinite; }
            .line { animation: move-line 3s linear infinite; stroke-dasharray: 5,5; }
          `}</style>
        </defs>

        {/* Network lines */}
        <line x1="50" y1="50" x2="350" y2="250" className="line" stroke="rgba(139, 0, 0, 0.3)" strokeWidth="1" />
        <line x1="350" y1="50" x2="50" y2="250" className="line" stroke="rgba(139, 0, 0, 0.3)" strokeWidth="1" />
        <line x1="200" y1="30" x2="200" y2="270" className="line" stroke="rgba(139, 0, 0, 0.3)" strokeWidth="1" />
        <line x1="30" y1="150" x2="370" y2="150" className="line" stroke="rgba(139, 0, 0, 0.3)" strokeWidth="1" />

        {/* Center node */}
        <circle cx="200" cy="150" className="node" fill="rgba(139, 0, 0, 0.6)" />

        {/* Corner nodes */}
        <circle cx="50" cy="50" className="node" fill="rgba(139, 0, 0, 0.4)" />
        <circle cx="350" cy="50" className="node" fill="rgba(139, 0, 0, 0.4)" />
        <circle cx="50" cy="250" className="node" fill="rgba(139, 0, 0, 0.4)" />
        <circle cx="350" cy="250" className="node" fill="rgba(139, 0, 0, 0.4)" />

        {/* Mid-point nodes */}
        <circle cx="200" cy="50" className="node" fill="rgba(139, 0, 0, 0.3)" />
        <circle cx="200" cy="250" className="node" fill="rgba(139, 0, 0, 0.3)" />
        <circle cx="50" cy="150" className="node" fill="rgba(139, 0, 0, 0.3)" />
        <circle cx="350" cy="150" className="node" fill="rgba(139, 0, 0, 0.3)" />
      </svg>

      {/* Overlay text */}
      <div className="relative z-10 text-center">
        <div className="text-sm font-mono text-accent/70">Network Programming</div>
        <div className="text-xs text-muted-foreground mt-2">Java • JavaScript • Networking</div>
      </div>
    </div>
  )
}
