// Build Sync Marker: 2026-04-20 16:25
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'motion/react';
import {
  ArrowRight, Sparkles, Zap, Globe, Star, TrendingUp,
  BarChart3, Rocket, Building2, ShoppingCart, HardHat, CheckCircle2
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import ProjectIntakeForm from '../components/ProjectIntakeForm';
import SEO from '../components/SEO';
import { products } from '../data/products';
import { useScrollSpy } from '../contexts/ScrollContext';

// --- Imported Hero Components ---
import { ProductCard } from '@/components/home/MiniMockups';
import { HeroContent } from '@/components/home/HeroContent';
import { HeroVisual } from '@/components/home/HeroVisual';
import { SolutionsSection } from '@/components/home/SolutionsSection';
import { LiveDemoSection } from '@/components/home/LiveDemoSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { ContactSection } from '@/components/home/ContactSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { LatestBlogs } from '@/components/home/LatestBlogs';

export default function Home() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [visibleItems, setVisibleItems] = useState(6);
  const { setActiveSection } = useScrollSpy();

  const allProjects = React.useMemo(() => {
    return products;
  }, []);

  const categories = React.useMemo(() => ['All', ...new Set(products.map(p => p.category))], []);

  const filteredProjects = React.useMemo(() => {
    const searchLower = search.toLowerCase().trim();
    if (!searchLower) return allProjects.filter(p => filter === 'All' || p.category === filter);

    return allProjects.filter(project => {
      const matchesFilter = filter === 'All' || project.category === filter;
      
      // Strict match priority: Name > slug > Category > Industry
      const matchesSearch = 
        project.name.toLowerCase().includes(searchLower) ||
        project.slug.toLowerCase().includes(searchLower) ||
        project.category.toLowerCase().includes(searchLower) ||
        (project.industry && project.industry.toLowerCase().includes(searchLower));
      
      return matchesFilter && matchesSearch;
    });
  }, [allProjects, filter, search]);

  const displayedProjects = filteredProjects.slice(0, visibleItems);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  // 3D Tilt & Parallax Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Parallax for text and background
  const textX = useTransform(mouseXSpring, [-0.5, 0.5], [15, -15]);
  const textY = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]);

  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], [-30, 30]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="bg-bg transition-colors duration-500 overflow-hidden">
      <SEO
        title="WingsForShare - Business Technology Growth Agency"
        description="WingsForShare helps businesses scale through custom software, high-performance web development, mobile apps, and data-driven growth strategies."
      />

      {/* Hero Section */}
      <InView
        as="section"
        id="hero"
        threshold={0.5}
        onChange={(inView) => { if (inView) setActiveSection('hero'); }}
      >
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background Depth Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
              <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] opacity-40" />
              <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] opacity-40" />
            </div>
            {/* Smooth gradient overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020203] via-transparent to-[#020203] opacity-80" />
          </div>

          <div className="container-custom w-full relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              <div className="w-full lg:w-[45%] flex flex-col justify-center text-center lg:text-left">
                <HeroContent />
              </div>
              
              <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                <HeroVisual 
                  rotateX={rotateX} 
                  rotateY={rotateY} 
                  textX={textX} 
                  textY={textY} 
                />
              </div>
            </div>
          </div>
        </section>
      </InView>

      {/* Start Project Section */}
      <InView
        as="section"
        id="start-project-hero"
        threshold={0.5}
        onChange={(inView) => { if (inView) setActiveSection('start-project-hero'); }}
      >
      <section id="start-project-hero" className="relative py-24 md:py-32 bg-bg overflow-hidden">
        {/* Atmospheric Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-emerald-500/5 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/5 blur-[120px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg opacity-60" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-card-bg border border-card-border mb-10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-text-secondary uppercase tracking-[0.4em]">Kickstart Your Growth</span>
              </motion.div>

              <div className="space-y-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-display text-[56px] md:text-[96px] font-black tracking-[-0.04em] leading-[0.9] text-text-primary"
                >
                  READY TO <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-500">TRANSFORM?</span>
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-[18px] md:text-[20px] text-text-secondary max-w-lg leading-relaxed font-medium"
                >
                  Tell us about your vision. Whether it's a high-performance web platform, a native mobile app, or a complex BI system, we have the expertise to build it.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8"
                >
                  {[
                    { title: 'Expert Consultation', desc: 'Direct access to senior technical architects' },
                    { title: 'Tailored Roadmap', desc: 'Custom strategy aligned with your business goals' },
                    { title: 'Rapid Execution', desc: 'Agile development with consistent delivery' },
                    { title: 'Global Standards', desc: 'Enterprise-grade security and performance' }
                  ].map((item, i) => (
                    <div key={i} className="group p-5 rounded-3xl bg-card-bg border border-card-border hover:bg-accent/5 hover:border-accent/20 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                          <CheckCircle2 size={12} className="text-emerald-500" />
                        </div>
                        <h4 className="font-display font-black text-[12px] uppercase tracking-[0.2em] text-text-primary">{item.title}</h4>
                      </div>
                      <p className="text-[13px] text-text-secondary leading-relaxed mb-0">{item.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              {/* Decorative Glows */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
              
              <div className="relative z-10 p-1 rounded-[2.5rem] bg-gradient-to-br from-card-border via-card-bg to-transparent border border-card-border shadow-2xl backdrop-blur-xl">
                <div className="bg-bg rounded-[2.25rem] p-8 md:p-10">
                  <div className="mb-10 text-center">
                    <h3 className="text-2xl font-black text-text-primary mb-2 tracking-tight">Project Intake</h3>
                    <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Secure & Confidential</p>
                  </div>
                  <ProjectIntakeForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </InView>

      {/* Solutions Section */}
      <InView
        as="div"
        threshold={0.3}
        onChange={(inView) => { if (inView) setActiveSection('solutions'); }}
      >
        <SolutionsSection />
      </InView>

      {/* Live Demo Showcase Section */}
      <InView
        as="div"
        threshold={0.3}
        onChange={(inView) => { if (inView) setActiveSection('portfolio'); }}
      >
        <LiveDemoSection 
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          categories={categories}
          displayedProjects={displayedProjects}
          filteredProjects={filteredProjects}
          visibleItems={visibleItems}
          setVisibleItems={setVisibleItems}
        />
      </InView>

      {/* Across Industries Section */}
      <InView
        as="div"
        threshold={0.3}
        onChange={(inView) => { if (inView) setActiveSection('industries'); }}
      >
        <IndustriesSection />
      </InView>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Section */}
      <LatestBlogs />

      {/* Consultation & Meeting Section */}
      <ProjectPlanningSection />

      {/* Contact & Final CTA Section */}
      <ContactSection />
    </div>
  );
}
