"use client"

export function DataFlow() {
  return (
    <div className="relative w-full h-56 md:h-64 flex items-center justify-center overflow-hidden rounded-lg border border-accent/20 bg-card/50 backdrop-blur-sm">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <style>{`
            @keyframes flow-right {
              0% { x: -20px; opacity: 0; }
              50% { opacity: 1; }
              100% { x: 400px; opacity: 0; }
            }
            @keyframes flow-left {
              0% { x: 420px; opacity: 0; }
              50% { opacity: 1; }
              100% { x: 0; opacity: 0; }
            }
            .packet-right { animation: flow-right 3s linear infinite; }
            .packet-left { animation: flow-left 3s linear infinite; }
          `}</style>
        </defs>

        {/* Data flow paths */}
        <line x1="50" y1="80" x2="350" y2="80" stroke="rgba(139, 0, 0, 0.2)" strokeWidth="2" />
        <line x1="350" y1="150" x2="50" y2="150" stroke="rgba(139, 0, 0, 0.2)" strokeWidth="2" />
        <line x1="50" y1="220" x2="350" y2="220" stroke="rgba(139, 0, 0, 0.2)" strokeWidth="2" />

        {/* Animated packets */}
        <g className="packet-right">
          <rect x="0" y="70" width="20" height="20" fill="rgba(139, 0, 0, 0.7)" rx="2" />
        </g>
        <g className="packet-right" style={{ animationDelay: "1s" }}>
          <rect x="0" y="70" width="20" height="20" fill="rgba(139, 0, 0, 0.5)" rx="2" />
        </g>

        <g className="packet-left">
          <rect x="0" y="140" width="20" height="20" fill="rgba(139, 0, 0, 0.7)" rx="2" />
        </g>
        <g className="packet-left" style={{ animationDelay: "1s" }}>
          <rect x="0" y="140" width="20" height="20" fill="rgba(139, 0, 0, 0.5)" rx="2" />
        </g>

        <g className="packet-right">
          <rect x="0" y="210" width="20" height="20" fill="rgba(139, 0, 0, 0.7)" rx="2" />
        </g>
        <g className="packet-right" style={{ animationDelay: "1s" }}>
          <rect x="0" y="210" width="20" height="20" fill="rgba(139, 0, 0, 0.5)" rx="2" />
        </g>

        {/* Labels */}
        <text x="200" y="30" textAnchor="middle" fill="rgba(139, 0, 0, 0.6)" fontSize="12">
          Request
        </text>
        <text x="200" y="180" textAnchor="middle" fill="rgba(139, 0, 0, 0.6)" fontSize="12">
          Response
        </text>
        <text x="200" y="250" textAnchor="middle" fill="rgba(139, 0, 0, 0.6)" fontSize="12">
          Data Stream
        </text>
      </svg>
    </div>
  )
}
