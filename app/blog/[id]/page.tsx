import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { blogPosts } from "@/data/blog-posts"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="text-accent hover:underline mb-8 inline-block animate-fade-in-up hover-lift">
          ← Quay lại Blog
        </Link>

        <article className="animate-fade-in-up">
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={tag}
                  className={`text-xs px-3 py-1 bg-accent/20 text-accent rounded-full animate-scale-in stagger-${(index % 9) + 1}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <div className="text-foreground leading-relaxed space-y-4 whitespace-pre-wrap">{post.content}</div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
