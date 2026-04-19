import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ChevronLeft, ArrowRight, Share2, MessageSquare } from 'lucide-react';
import { blogs } from '../data/blogs';
import SEO from '../components/SEO';
import Markdown from 'react-markdown';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Post not found</h1>
        <Link to="/blog" className="text-accent underline">Back to Knowledge Hub</Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-32 bg-bg min-h-screen">
      <SEO 
        title={`${blog.title} | WingsForShare Insight`}
        description={blog.excerpt}
      />

      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary/50 hover:text-accent font-display transition-colors">
            <ChevronLeft size={14} />
            Back to Knowledge Hub
          </Link>
        </motion.div>

        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest inline-block">
                {blog.category}
              </span>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-text-secondary/40">
                <span className="flex items-center gap-2"><Calendar size={12} className="text-accent" /> {blog.date}</span>
                <span className="flex items-center gap-2"><Clock size={12} className="text-accent" /> {blog.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[1] text-white max-w-4xl">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 pt-6 md:pt-8 border-t border-white/5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent to-blue-500 p-0.5">
                <div className="w-full h-full rounded-full bg-bg flex items-center justify-center font-bold text-accent text-sm md:text-lg">
                  {blog.author.charAt(0)}
                </div>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-text-secondary/40 mb-0.5">Written By</p>
                <p className="text-xs md:text-sm font-bold text-white">{blog.author}</p>
              </div>
            </div>
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[4rem] overflow-hidden mb-16 md:mb-24 shadow-2xl border border-white/5"
        >
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          {/* Main Content Area */}
          <div className="flex-grow lg:max-w-[calc(100%-400px)]">
            <div className="markdown-content">
              <style>{`
                .markdown-content { 
                  color: rgba(255,255,255,0.8); 
                  font-size: 1.125rem;
                  line-height: 1.8; 
                }
                .markdown-content h2 { 
                  color: white; 
                  font-family: 'Outfit', sans-serif; 
                  font-weight: 800; 
                  font-size: clamp(2rem, 5vw, 2.5rem); 
                  margin-top: 3.5rem; 
                  margin-bottom: 1.5rem; 
                  letter-spacing: -0.02em; 
                  line-height: 1.1;
                }
                .markdown-content h3 { 
                  color: white; 
                  font-weight: 700; 
                  font-size: clamp(1.5rem, 4vw, 1.75rem); 
                  margin-top: 2.5rem; 
                  margin-bottom: 1rem;
                  line-height: 1.2;
                }
                .markdown-content p { 
                  margin-bottom: 1.5rem; 
                }
                .markdown-content ul { 
                  margin: 2rem 0; 
                  padding: 0;
                }
                .markdown-content li { 
                  position: relative; 
                  padding-left: 1.5rem; 
                  margin-bottom: 0.75rem; 
                }
                .markdown-content li::before { 
                  content: ""; 
                  position: absolute; 
                  left: 0; 
                  top: 0.7rem; 
                  width: 6px; 
                  height: 6px; 
                  border-radius: 99px; 
                  background: #10b981; 
                }
                .markdown-content strong {
                  color: white;
                  font-weight: 700;
                }
              `}</style>
              <Markdown>{blog.content}</Markdown>
            </div>

            {/* Post Footer */}
            <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/40">Impact Knowledge:</span>
                <div className="flex gap-2">
                   <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Share2 size={18} /></button>
                   <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><MessageSquare size={18} /></button>
                </div>
              </div>
              <Link to="/blog" className="text-[10px] font-black uppercase tracking-widest text-accent hover:underline">Read more articles</Link>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-[360px] lg:shrink-0">
            <div className="lg:sticky lg:top-32 h-fit space-y-8">
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-accent to-blue-600 shadow-2xl shadow-accent/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-10 -translate-y-10" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-black/10 blur-2xl rounded-full" />
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-black text-white mb-6 leading-tight">Revolutionize your digital presence.</h4>
                  <p className="text-white/80 text-sm mb-10 leading-relaxed font-medium">
                    Ready to implement top-tier solutions like the ones discussed here? Let's connect and build your vision.
                  </p>
                  <Link to="/contact" className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-bg font-black uppercase tracking-widest text-[11px] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                    Let's Talk <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Related/Info Card */}
              <div className="p-8 rounded-[2.5rem] bg-card-bg border border-card-border overflow-hidden">
                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6">Article Metadata</h5>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-[10px] font-bold text-text-secondary/60 uppercase">Category</span>
                    <span className="text-[10px] font-black text-white uppercase">{blog.category}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-[10px] font-bold text-text-secondary/60 uppercase">Complexity</span>
                    <span className="text-[10px] font-black text-white uppercase">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[10px] font-bold text-text-secondary/60 uppercase">Status</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <span className="text-[10px] font-black text-emerald-500 uppercase">Live Insight</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
