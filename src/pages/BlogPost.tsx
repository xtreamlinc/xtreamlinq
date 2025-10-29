import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPost, getLatestBlogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();
  const post = getBlogPost(id || "");
  const relatedPosts = getLatestBlogPosts(3).filter(p => p.id !== id);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-6 pt-32 pb-20 text-center">
          <h1 className="mb-6">Blog Post Not Found</h1>
          <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
            <Button>Return to Blog</Button>
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      

      <article className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#0f172a] via-[#101c2e] to-[#111827] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-64 bg-green-400/10 blur-3xl rounded-full pointer-events-none animate-fade-in" style={{animationDelay: '0.1s'}} />
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 animate-fade-in" style={{animationDelay: '0.05s'}}>
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8 flex items-center gap-4 animate-bounce-in" style={{animationDelay: '0.15s'}}>
            <span className="px-4 py-2 bg-gradient-to-r from-green-400/20 to-primary/20 text-primary rounded-full text-sm font-bold shadow-lg">
              {post.category}
            </span>
            <span className="px-3 py-1 bg-zinc-800/60 text-xs rounded-full text-zinc-300 border border-zinc-700">Featured</span>
          </div>

          <h1 className="mb-6 animate-slide-up text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-primary to-green-300 bg-clip-text text-transparent drop-shadow-lg" style={{animationDelay: '0.25s'}}>{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border animate-fade-in" style={{animationDelay: '0.35s'}}>
            <div className="flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.45s'}}>
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-xl text-green-300/80 mb-8 leading-relaxed font-semibold italic border-l-4 border-green-400/60 pl-6 bg-zinc-900/40 py-4 rounded-lg shadow animate-fade-in" style={{animationDelay: '0.55s'}}>
              {post.excerpt}
            </div>

            <div className="whitespace-pre-line leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-3xl font-bold mt-12 mb-6 animate-slide-up bg-gradient-to-r from-green-400/20 to-primary/10 px-4 py-2 rounded-lg shadow-md" style={{animationDelay: `${0.6 + index * 0.05}s`}}>{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**:')) {
                  return <h4 key={index} className="text-xl font-bold mt-8 mb-3 animate-slide-up text-green-300/90" style={{animationDelay: `${0.65 + index * 0.05}s`}}>{paragraph.replace(/\*\*/g, '').replace(':', '')}</h4>;
                }
                if (paragraph.trim().startsWith('-')) {
                  return <li key={index} className="ml-6 mb-2 animate-fade-in text-green-200/90 marker:text-green-400" style={{animationDelay: `${0.7 + index * 0.05}s`}}>{paragraph.replace(/^[-*]\s*/, '')}</li>;
                }
                if (paragraph.trim().startsWith('>')) {
                  return <blockquote key={index} className="border-l-4 border-green-400/60 pl-6 italic text-green-200/80 bg-zinc-900/40 py-2 rounded-lg shadow animate-fade-in" style={{animationDelay: `${0.72 + index * 0.05}s`}}>{paragraph.replace(/^>\s*/, '')}</blockquote>;
                }
                if (paragraph.trim() === '') {
                  return <div key={index} className="my-6 border-b border-dashed border-green-900/40 w-1/2 mx-auto animate-fade-in" style={{animationDelay: `${0.73 + index * 0.05}s`}} />;
                }
                return <p key={index} className="mb-4 leading-relaxed animate-fade-in text-zinc-100/90" style={{animationDelay: `${0.75 + index * 0.05}s`}}>{paragraph}</p>;
              })}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border animate-fade-in" style={{animationDelay: '0.85s'}}>
            <h3 className="text-2xl font-bold mb-8 animate-slide-up text-green-300/90" style={{animationDelay: '0.9s'}}>Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, idx) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-gradient-to-br from-zinc-900/80 to-green-900/30 p-6 rounded-xl border border-border hover:border-primary transition-colors shadow-lg animate-slide-up"
                  style={{animationDelay: `${0.95 + idx * 0.1}s`}}
                >
                  <span className="text-xs text-primary font-bold animate-bounce-in" style={{animationDelay: `${1.0 + idx * 0.1}s`}}>{relatedPost.category}</span>
                  <h4 className="font-bold mt-2 mb-2 line-clamp-2 animate-fade-in text-green-200/90" style={{animationDelay: `${1.05 + idx * 0.1}s`}}>{relatedPost.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2 animate-fade-in" style={{animationDelay: `${1.1 + idx * 0.1}s`}}>{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;