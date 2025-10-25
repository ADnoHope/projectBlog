import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Timeline from "@/components/timeline"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <div className="bg-gradient-to-b from-secondary/50 to-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent shadow-lg hover-lift">
              <Image
                src="/profile.jpg"
                alt="Lê Mạnh Cường"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Lê Mạnh Cường</h1>
            <p className="text-xl text-muted-foreground mb-2">Lập Trình Viên & Chuyên Gia Lập Trình Mạng</p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Với hơn 7 năm kinh nghiệm trong lập trình mạng, tôi đam mê chia sẻ kiến thức về Java, JavaScript và các
              công nghệ networking hiện đại.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Về Tôi</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Tôi là một lập trình viên đam mê với kinh nghiệm sâu rộng trong lập trình mạng. Bắt đầu từ Java, tôi đã
              phát triển kỹ năng sang JavaScript và Node.js, cho phép tôi xây dựng các ứng dụng mạng toàn diện.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Tôi tin rằng chia sẻ kiến thức là cách tốt nhất để phát triển cộng đồng lập trình viên. Thông qua blog
              này, tôi muốn giúp những người mới bắt đầu hiểu rõ hơn về các khái niệm phức tạp trong lập trình mạng.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Khi không viết code, tôi thích đọc sách về công nghệ, tham gia các hội thảo lập trình, và cộng tác với các
              lập trình viên khác để học hỏi những điều mới.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Kỹ Năng Chính</h2>
            <div className="space-y-3">
              {[
                { skill: "Java", level: "Expert" },
                { skill: "JavaScript / Node.js", level: "Expert" },
                { skill: "Socket Programming", level: "Advanced" },
                { skill: "WebSocket & Real-time Apps", level: "Advanced" },
                { skill: "REST API Design", level: "Advanced" },
                { skill: "Network Security", level: "Intermediate" },
                { skill: "Database Optimization", level: "Intermediate" },
                { skill: "Cloud Deployment", level: "Intermediate" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <span className="font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-accent font-semibold">{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Hành Trình Học Tập</h2>
            <Timeline />
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Chứng Chỉ & Giải Thưởng</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-secondary/50 border border-border rounded-lg overflow-hidden hover-lift transition-all duration-300 shadow-lg">
            <div className="relative w-full h-auto">
              <Image
                src="/cisco-certificate.png"
                alt="Cisco Networking Academy Certificate - Networking Basics"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Cisco Networking Academy Certificate</h3>
              <p className="text-muted-foreground mb-3">Networking Basics | 22DTHC5&6</p>
              <p className="text-sm text-accent font-medium">
                Hoàn thành khóa học cơ bản về mạng máy tính từ Cisco Networking Academy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-secondary/50 border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Liên Hệ Với Tôi</h2>
          <p className="text-muted-foreground mb-6">Bạn có câu hỏi hoặc muốn hợp tác? Tôi luôn sẵn sàng lắng nghe!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:cuongdz204@gmail.com"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              Email
            </a>
            <a
              href="https://github.com/ADnoHope"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/manhcuonq204"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
