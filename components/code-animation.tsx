"use client"

export function CodeAnimation() {
  return (
    <div className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-lg border border-accent/20 bg-card/50 backdrop-blur-sm font-mono text-xs md:text-sm">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
        <defs>
          <style>{`
            @keyframes type-line {
              0% { stroke-dashoffset: 100; }
              100% { stroke-dashoffset: 0; }
            }
            .code-line { animation: type-line 2s ease-in-out infinite; stroke-dasharray: 100; }
          `}</style>
        </defs>

        {/* Code lines */}
        <text x="20" y="40" fill="rgba(139, 0, 0, 0.8)" fontSize="14">
          {"> const socket = new Socket()"}
        </text>
        <text x="20" y="70" fill="rgba(139, 0, 0, 0.6)" fontSize="14">
          {"> socket.connect(host, port)"}
        </text>
        <text x="20" y="100" fill="rgba(139, 0, 0, 0.8)" fontSize="14">
          {'> socket.on("data", handler)'}
        </text>
        <text x="20" y="130" fill="rgba(139, 0, 0, 0.6)" fontSize="14">
          {"> socket.write(message)"}
        </text>
        <text x="20" y="160" fill="rgba(139, 0, 0, 0.4)" fontSize="14">
          {"> // Connected..."}
        </text>

        {/* Cursor blink */}
        <rect x="380" y="160" width="2" height="16" fill="rgba(139, 0, 0, 0.8)">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  )
}
