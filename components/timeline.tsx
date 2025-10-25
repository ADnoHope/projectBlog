export default function Timeline() {
  const timelineEvents = [
    {
      year: "2018",
      title: "Bắt Đầu Học Lập Trình",
      description:
        "Khởi đầu hành trình học lập trình với Java, tìm hiểu các khái niệm cơ bản về OOP và cấu trúc dữ liệu.",
      icon: "🚀",
    },
    {
      year: "2019",
      title: "Chuyên Sâu Java & Networking",
      description: "Tập trung học về Socket Programming, TCP/UDP protocols, và xây dựng các ứng dụng mạng đầu tiên.",
      icon: "🔌",
    },
    {
      year: "2020",
      title: "Khám Phá JavaScript & Web Development",
      description: "Mở rộng kỹ năng sang JavaScript, học Node.js, Express.js và phát triển ứng dụng web full-stack.",
      icon: "🌐",
    },
    {
      year: "2021",
      title: "WebSocket & Real-time Applications",
      description: "Chuyên sâu vào WebSocket, xây dựng các ứng dụng real-time như chat, notification systems.",
      icon: "⚡",
    },
    {
      year: "2022",
      title: "Network Security & Optimization",
      description: "Học về SSL/TLS, encryption, authentication, và tối ưu hóa hiệu suất ứng dụng mạng.",
      icon: "🔐",
    },
    {
      year: "2023",
      title: "REST API & Microservices",
      description: "Thiết kế và phát triển REST APIs, tìm hiểu về microservices architecture và best practices.",
      icon: "🏗️",
    },
    {
      year: "2024",
      title: "Advanced Networking & Cloud",
      description: "Khám phá gRPC, Protocol Buffers, cloud networking, và deployment trên các nền tảng cloud.",
      icon: "☁️",
    },
    {
      year: "2025",
      title: "Chia Sẻ Kiến Thức & Mentoring",
      description: "Bắt đầu viết blog chia sẻ kiến thức về lập trình mạng, giúp đỡ những lập trình viên mới.",
      icon: "📚",
    },
  ]

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-accent/30 animate-fade-in"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} stagger-${(index % 9) + 1}`}
              >
                <div className="w-1/2">
                  <div className="bg-secondary/50 border border-border rounded-lg p-6 hover:border-accent transition-colors hover-lift glow-border">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl animate-bounce-in">{event.icon}</span>
                      <span className="text-sm font-semibold text-accent">{event.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-0 flex justify-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background animate-pulse-glow"></div>
                </div>

                {/* Empty space */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
