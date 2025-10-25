"use client"

import { useState } from "react"
import BlogCard from "./blog-card"
import { blogPosts } from "@/data/blog-posts"

export default function BlogList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = selectedTag ? blogPosts.filter((post) => post.tags.includes(selectedTag)) : blogPosts

  const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-4 py-2 rounded-lg font-medium transition-smooth animate-slide-in-left ${
            selectedTag === null
              ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30"
              : "bg-secondary text-foreground hover:bg-muted"
          }`}
        >
          Tất Cả
        </button>
        {tags.map((tag, index) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-lg font-medium transition-smooth animate-slide-in-left hover:shadow-md ${
              selectedTag === tag
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30"
                : "bg-secondary text-foreground hover:bg-muted"
            }`}
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <p className="text-muted-foreground text-lg">Không có bài viết nào với tag này.</p>
        </div>
      )}
    </div>
  )
}
