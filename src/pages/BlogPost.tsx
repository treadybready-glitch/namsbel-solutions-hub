import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-xl">N</span>
            </div>
            <span className="font-display font-bold text-2xl text-foreground">
              namsbel
            </span>
          </Link>

          <Link to="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              All Posts
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">{post.category}</span>
            </div>

            {/* Category Badge */}
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <span>Namsbel Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none
              prose-headings:font-display prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:text-muted-foreground prose-p:leading-loose prose-p:mb-8
              prose-strong:text-primary prose-strong:font-semibold
              prose-ul:text-muted-foreground prose-ul:space-y-4 prose-ul:my-8 prose-li:mb-3
              prose-ol:text-muted-foreground prose-ol:space-y-4 prose-ol:my-8
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-primary prose-blockquote:pl-6 prose-blockquote:my-8
              [&>*+*]:mt-6
            ">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Continue Reading
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {otherPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="bg-card rounded-xl overflow-hidden border border-border hover-lift flex flex-col h-full">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5 flex-grow">
                        <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                        <h3 className="font-display text-lg font-bold text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 border border-border text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-20" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Expert HR Guidance?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss how Namsbel can help transform your HR operations.
              </p>
              <Link to="/#inquiry">
                <Button variant="hero">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Namsbel Global Pvt Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
