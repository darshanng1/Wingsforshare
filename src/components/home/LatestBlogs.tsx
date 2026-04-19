import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { blogs } from '../../data/blogs';

export const LatestBlogs: React.FC = () => {
  return (
    <section className="section-padding bg-bg relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Insights & Intelligence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tighter"
            >
              Latest from the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 italic font-light">Digital Lab</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/blog" 
              className="group inline-flex items-center gap-3 text-text-primary hover:text-accent transition-colors font-bold uppercase tracking-widest text-[11px]"
            >
              View All Articles
              <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-accent transition-colors">
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.slice(0, 3).map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <Link to={`/blog/${blog.slug}`} className="flex flex-col h-full">
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shrink-0">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-accent/90 backdrop-blur-md rounded-xl text-white text-[10px] font-black uppercase tracking-widest">
                    {blog.category}
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow px-2">
                  <div className="flex items-center gap-6 text-[10px] font-bold text-text-secondary/40 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar size={12} className="text-accent" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={12} className="text-accent" />
                      {blog.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold leading-tight text-text-primary group-hover:text-accent transition-colors mb-4 line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-text-secondary/60 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
                    {blog.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-white/5 flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-accent group-hover:gap-5 transition-all">
                    Explore Insight <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
