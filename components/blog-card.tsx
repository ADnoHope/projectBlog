import Link from "next/link"
import type { BlogPost } from "@/types/blog"

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const animationDelay = `${index * 100}ms`

  return (
    <Link href={`/blog/${post.id}`}>
      <div
        className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-smooth cursor-pointer h-full flex flex-col animate-fade-in-up hover:shadow-lg hover:shadow-accent/20"
        style={{ animationDelay }}
      >
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {post.tags.map((tag, tagIndex) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-accent/20 text-accent rounded animate-scale-in hover:bg-accent/40 transition-smooth"
              style={{ animationDelay: `${index * 100 + tagIndex * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-smooth">
          {post.title}
        </h2>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>

        <div className="flex justify-between items-center text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  )
}
