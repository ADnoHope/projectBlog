import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Khám Phá Lập Trình Mạng</h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Chào mừng bạn đến với blog cá nhân của tôi. Tôi chia sẻ kiến thức sâu sắc về lập trình mạng, từ các khái
            niệm cơ bản đến các kỹ thuật nâng cao sử dụng Java và JavaScript.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Thông qua các bài viết chi tiết, ví dụ thực tế và hướng dẫn từng bước, tôi giúp bạn hiểu rõ hơn về cách xây
            dựng các ứng dụng mạng mạnh mẽ và hiệu quả.
          </p>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity hover-lift"
          >
            Đọc Blog
          </Link>
        </div>
        <div className="flex justify-center animate-slide-in-right">
          <div className="relative w-80 h-96 rounded-lg overflow-hidden border-2 border-accent/30 shadow-2xl hover-lift">
            <Image
              src="/profile.jpg"
              alt="Lê Mạnh Cường - Network Programming Expert"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
