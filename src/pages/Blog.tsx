import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-bold tracking-wide animate-fade-in" style={{animationDelay: '0.05s'}}>BLOG</span>
            <h1 className="mt-4 mb-6 animate-slide-up" style={{animationDelay: '0.15s'}}>Internet <span className="text-primary">Insights</span> & News</h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{animationDelay: '0.25s'}}>
              Stay informed with the latest tips, guides, and industry news about internet connectivity and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, idx) => (
              <article 
                key={post.id}
                className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary transition-all duration-300 group animate-slide-up"
                style={{animationDelay: `${0.35 + idx * 0.15}s`}}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 animate-fade-in" style={{animationDelay: `${0.4 + idx * 0.15}s`}}>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold animate-bounce-in" style={{animationDelay: `${0.45 + idx * 0.15}s`}}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 animate-fade-in" style={{animationDelay: `${0.5 + idx * 0.15}s`}}>
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors animate-slide-up" style={{animationDelay: `${0.55 + idx * 0.15}s`}}>
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 animate-fade-in" style={{animationDelay: `${0.6 + idx * 0.15}s`}}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between animate-fade-in" style={{animationDelay: `${0.65 + idx * 0.15}s`}}>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground animate-fade-in" style={{animationDelay: `${0.7 + idx * 0.15}s`}}>
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`} tabIndex={0} aria-label={`Read more about ${post.title}`}>
                      <Button variant="ghost" size="sm" className="text-primary animate-zoom-in" style={{animationDelay: `${0.75 + idx * 0.15}s`}}>
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;