import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Search, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <div className="pt-32 pb-32 bg-bg min-h-screen">
      <SEO 
        title="Knowledge Hub | WingsForShare Digital Insights"
        description="Deep dives into software engineering, performance marketing, SaaS growth, and the future of technology."
      />

      <div className="container-custom">
        <header className="max-w-4xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-black uppercase tracking-[0.4em] mb-10 shadow-xl shadow-accent/5"
          >
            Digital Lab Journal
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] mb-12"
          >
            Knowledge <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-blue-500 italic font-light">Intelligence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[20px] md:text-[24px] text-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            Expert perspectives on building high-performance systems and managing global digital products.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 group relative"
          >
            <Link to={`/blog/${blogs[0].slug}`} className="block h-full">
              <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src={blogs[0].image} 
                  alt={blogs[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 p-2 max-w-2xl">
                   <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-2 bg-accent rounded-xl text-white text-[10px] font-black uppercase tracking-widest inline-block shadow-lg shadow-accent/20">
                      Featured Insight
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/80">{blogs[0].date}</span>
                   </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-text-primary leading-[1.1] group-hover:text-accent transition-colors">
                    {blogs[0].title}
                  </h2>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side Hub */}
          <div className="lg:col-span-4 flex flex-col gap-10 md:gap-12">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-card-bg border border-card-border backdrop-blur-3xl shadow-2xl flex flex-col h-full justify-between group/card overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-text-primary mb-6 tracking-tight">Stay in the Loop</h3>
                <p className="text-sm text-text-secondary mb-10 leading-relaxed font-medium">Get exclusive updates on new technologies and agency transformations directly.</p>
                <div className="relative group/input">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-500 rounded-2xl opacity-0 group-focus-within/input:opacity-100 blur transition duration-500" />
                  <div className="relative flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full pl-6 pr-16 py-4 rounded-2xl bg-bg border border-card-border focus:outline-none focus:border-accent text-text-primary placeholder:text-text-secondary/30 transition-all font-medium"
                    />
                    <button className="absolute right-2 top-2 bottom-2 w-12 rounded-xl bg-accent text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-10 border-t border-card-border relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8">Popular Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogs.map(b => b.category))).map(cat => (
                    <button key={cat} className="px-4 py-2 rounded-xl bg-bg/50 border border-card-border text-[10px] font-black text-text-secondary hover:text-accent hover:border-accent uppercase tracking-widest transition-all">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-32">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${blog.slug}`} className="block">
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
                </div>
                <div className="px-4 space-y-4">
                  <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-accent">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-accent/20" />
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-snug text-text-primary group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
