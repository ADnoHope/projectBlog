export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20 animate-fade-in-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="stagger-1">
            <h3 className="font-semibold text-foreground mb-4">Về Blog</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Blog chia sẻ kiến thức về lập trình mạng, Java, JavaScript và các công nghệ liên quan.
            </p>
          </div>
          <div className="stagger-2">
            <h3 className="font-semibold text-foreground mb-4">Danh Mục</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-accent transition-colors hover-lift">
                  Tất Cả Bài Viết
                </a>
              </li>
              <li>
                <a
                  href="/blog?tag=java"
                  className="text-muted-foreground hover:text-accent transition-colors hover-lift"
                >
                  Java
                </a>
              </li>
              <li>
                <a
                  href="/blog?tag=javascript"
                  className="text-muted-foreground hover:text-accent transition-colors hover-lift"
                >
                  JavaScript
                </a>
              </li>
            </ul>
          </div>
          <div className="stagger-3">
            <h3 className="font-semibold text-foreground mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:cuongdz204@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors hover-lift"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ADnoHope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors hover-lift"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/manhcuonq204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors hover-lift"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Lập Trình Mạng Blog. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
