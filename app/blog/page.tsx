import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BlogList from "@/components/blog-list"
import { TechAnimation } from "@/components/tech-animation"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Khám phá các bài viết về lập trình mạng, Java, JavaScript và các chủ đề liên quan.
            </p>
          </div>
          <div className="animate-slide-in-right">
            <TechAnimation />
          </div>
        </div>
        <BlogList />
      </main>
      <Footer />
    </div>
  )
}
