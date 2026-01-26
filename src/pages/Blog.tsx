import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";

const Blog = () => {
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

          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Insights & Knowledge
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-yellow">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert insights on HR consulting, staffing solutions, and workplace culture 
              to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-card rounded-2xl overflow-hidden border border-border hover-lift h-full flex flex-col">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-primary font-semibold text-sm gap-2 group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-20" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your HR?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Partner with Namsbel for comprehensive HR solutions that drive your business forward.
              </p>
              <Link to="/#inquiry">
                <Button variant="hero" size="lg">
                  Get Started Today
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

export default Blog;
