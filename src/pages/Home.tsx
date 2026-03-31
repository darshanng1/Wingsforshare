import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'motion/react';
import {
  ArrowRight, Sparkles, Zap, Globe, Star, TrendingUp,
  BarChart3, Rocket, Building2, ShoppingCart, HardHat, CheckCircle2
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ProjectIntakeForm from '../components/ProjectIntakeForm';
import SEO from '../components/SEO';
import { products } from '../data/products';

// --- Imported Hero Components ---
import { ProductCard } from '../components/home/MiniMockups';
import { HeroContent } from '../components/home/HeroContent';
import { HeroVisual } from '../components/home/HeroVisual';
import { SolutionsSection } from '../components/home/SolutionsSection';
import { LiveDemoSection } from '../components/home/LiveDemoSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { PlanningSection } from '../components/home/PlanningSection';
import { ContactSection } from '../components/home/ContactSection';

const featuredApps = [
  {
    id: 'pest-control',
    name: 'Pest Management BI System',
    tag: 'Industry Leader',
    desc: 'A complete Business Intelligence and automation engine for pest control companies. Manage technicians, track chemical usage, and monitor revenue in real-time.',
    benefits: [
      '300% Increase in operational efficiency',
      'Real-time technician GPS tracking',
      'Automated chemical usage reporting',
      'Instant invoicing & payment collection'
    ],
    password: 'googlepehai1@',
    link: 'https://pest-nine.vercel.app',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'business-app',
    name: 'Enterprise Attendance App',
    tag: 'Workforce Management',
    desc: 'Next-gen employee tracking system with geo-fencing and biometric security. Perfect for managing large-scale distributed workforces.',
    benefits: [
      'Eliminate buddy punching with Biometrics',
      'Geo-fenced check-ins for field staff',
      'Automated payroll & leave processing',
      'Real-time productivity heatmaps'
    ],
    link: '#',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Home() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [visibleItems, setVisibleItems] = useState(6);

  const allProjects = React.useMemo(() => {
    // Prepend featured apps to the project list
    const featured = featuredApps.map(app => ({
      id: app.id,
      name: app.name,
      title: app.name,
      category: app.tag === 'Industry Leader' ? 'Business Intelligence' : 'Mobile App',
      industry: app.tag,
      description: app.desc,
      shortDescription: app.desc,
      image: app.image,
      screenshot: app.image,
      features: app.benefits,
      demoLink: app.link,
      demo: app.link,
      slug: app.id,
      result: app.benefits[0],
      highlight: true,
      password: app.password
    }));

    const baseProjects = Array.from({ length: 500 }, (_, i) => {
      const base = products[i % products.length];
      const results = [
        "Increased user engagement by 45%",
        "Reduced operational costs by 30%",
        "Boosted conversion rates by 2.5x",
        "Streamlined workflow efficiency by 60%",
        "Achieved 99.9% system uptime"
      ];
      return {
        ...base,
        id: `${base.id}-${i}`,
        name: `${base.name} ${Math.floor(i / products.length) + 1}`,
        title: `${base.title} ${Math.floor(i / products.length) + 1}`,
        result: results[i % results.length],
        highlight: false
      };
    });

    return [...featured, ...baseProjects];
  }, [featuredApps]);

  const categories = React.useMemo(() => ['All', ...new Set(products.map(p => p.category))], []);

  const filteredProjects = React.useMemo(() => {
    return allProjects.filter(project => {
      const matchesFilter = filter === 'All' || project.category === filter;
      
      const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());
      
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

  const [wordIndex, setWordIndex] = useState(0);
  const words = [
    { text: "WEB DEV", color: "text-emerald-500", bg: "from-emerald-500/20", label: "Web Development", keywords: ["React", "Next.js", "Node.js", "E-commerce"] },
    { text: "MOBILE APPS", color: "text-blue-500", bg: "from-blue-500/20", label: "App Development", keywords: ["iOS", "Android", "Flutter", "React Native"] },
    { text: "SEO GROWTH", color: "text-purple-500", bg: "from-purple-500/20", label: "SEO Optimization", keywords: ["Keywords", "Backlinks", "Ranking", "Analytics"] },
    { text: "BI TOOLS", color: "text-orange-500", bg: "from-orange-500/20", label: "Business Intelligence", keywords: ["Dashboards", "Data Mining", "ROI", "Automation"] }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <SEO
        title="Wings Technology - Software, Web, App & Growth Agency"
        description="Wings Technology helps businesses scale through custom software, high-performance web development, mobile apps, and data-driven growth strategies."
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${words[wordIndex].bg} via-transparent to-transparent blur-[120px] opacity-40`}
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Dynamic Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
              className="absolute w-1 h-1 bg-emerald-500/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* --- Hero Content (Left Column) --- */}
            <HeroContent wordIndex={wordIndex} words={words} />

            {/* --- Hero Visual (Right Column) --- */}
            <HeroVisual 
              rotateX={rotateX} 
              rotateY={rotateY} 
              textX={textX} 
              textY={textY} 
              wordIndex={wordIndex} 
              words={words} 
            />

            {/* Background Decorative Rings */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent blur-3xl" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-emerald-500/10 rounded-full border-dashed" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-blue-500/10 rounded-full border-dashed" 
              />
            </div>
          </div>
        </div>
      </section>
      {/* Start Project Section */}
      <section id="start-project-hero" className="section-padding bg-zinc-50 dark:bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-8"
              >
                <Rocket size={14} />
                <span>Kickstart Your Growth</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
                READY TO <br />
                <span className="text-zinc-400 dark:text-zinc-700">TRANSFORM?</span>
              </h2>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-lg mb-12 leading-relaxed">
                Tell us about your vision. Whether it's a high-performance web platform, a native mobile app, or a complex BI system, we have the expertise to build it.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Expert Consultation', desc: 'Direct access to senior technical architects' },
                  { title: 'Tailored Roadmap', desc: 'Custom strategy aligned with your business goals' },
                  { title: 'Rapid Execution', desc: 'Agile development with consistent delivery' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-1">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest">{item.title}</h4>
                      <p className="text-xs text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-50" />
              <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[3rem] p-8 md:p-12 shadow-2xl">
                <ProjectIntakeForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Live Demo Showcase Section */}
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

      {/* Across Industries Section */}
      <IndustriesSection wordIndex={wordIndex} words={words} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Consultation & Meeting Section */}
      <PlanningSection />

      {/* Contact & Final CTA Section */}
      <ContactSection />
    </div>
  );
}
