import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import { TechAnimation } from "@/components/tech-animation"
import { CodeAnimation } from "@/components/code-animation"
import { DataFlow } from "@/components/data-flow"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Công Nghệ & Kỹ Năng</h2>
          <p className="text-lg text-muted-foreground">Khám phá các khái niệm lập trình mạng thông qua hình ảnh động</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="stagger-1">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Mạng Lưới Kết Nối</h3>
              <p className="text-sm text-muted-foreground">Hiểu cách các node kết nối và giao tiếp trong mạng</p>
            </div>
            <TechAnimation />
          </div>

          <div className="stagger-2">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Lập Trình Socket</h3>
              <p className="text-sm text-muted-foreground">Viết code để tạo kết nối mạng với Socket API</p>
            </div>
            <CodeAnimation />
          </div>

          <div className="stagger-3">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Luồng Dữ Liệu</h3>
              <p className="text-sm text-muted-foreground">Theo dõi cách dữ liệu di chuyển qua mạng</p>
            </div>
            <DataFlow />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
