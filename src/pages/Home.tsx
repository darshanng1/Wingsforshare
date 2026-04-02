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
import { ProductCard } from '../components/home/MiniMockups';
import { HeroContent } from '../components/home/HeroContent';
import { HeroVisual } from '../components/home/HeroVisual';
import { SolutionsSection } from '../components/home/SolutionsSection';
import { LiveDemoSection } from '../components/home/LiveDemoSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { PlanningSection } from '../components/home/PlanningSection';
import { ContactSection } from '../components/home/ContactSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

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
  const { setActiveSection } = useScrollSpy();

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
        title="Wings Technology - Software, Web, App & Growth Agency"
        description="Wings Technology helps businesses scale through custom software, high-performance web development, mobile apps, and data-driven growth strategies."
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
          className="relative min-h-[110vh] flex items-center pt-[140px] pb-[100px] overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background Depth Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
              <div className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[140px]" />
              <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[140px]" />
              {/* Subtle glow behind right panel */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full opacity-50" />
            </div>
            <div className="absolute inset-0 bg-grid" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg opacity-60" />
          </div>

          <div className="container-custom relative z-10 -mt-12 md:-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <HeroContent />
              </div>
              
              <div className="lg:col-span-7 flex justify-center lg:justify-end">
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

      {/* --- Trust Section --- */}
      <section className="py-20 border-y border-text-primary/5 bg-text-primary/[0.01]">
        <div className="container-custom">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary/40 mb-12">
            Powering Systems for Global Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Vercel', 'Stripe', 'Linear', 'Supabase', 'Framer'].map((company) => (
              <span key={company} className="text-2xl font-black tracking-tighter text-text-primary hover:text-accent cursor-default transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Start Project Section */}
      <InView
        as="section"
        id="start-project-hero"
        threshold={0.5}
        onChange={(inView) => { if (inView) setActiveSection('start-project-hero'); }}
      >
      <section id="start-project-hero" className="section-padding bg-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-[12px] font-bold uppercase tracking-widest text-accent mb-8"
              >
                <Rocket size={14} />
                <span>Kickstart Your Growth</span>
              </motion.div>
              <h2 className="text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.2] mb-8">
                READY TO <br />
                <span className="text-text-secondary">TRANSFORM?</span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-text-secondary max-w-lg mb-12 leading-relaxed">
                Tell us about your vision. Whether it's a high-performance web platform, a native mobile app, or a complex BI system, we have the expertise to build it.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: 'Expert Consultation', desc: 'Direct access to senior technical architects' },
                  { title: 'Tailored Roadmap', desc: 'Custom strategy aligned with your business goals' },
                  { title: 'Rapid Execution', desc: 'Agile development with consistent delivery' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1 border border-accent/20">
                      <CheckCircle2 size={16} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] uppercase tracking-widest text-text-primary mb-1">{item.title}</h4>
                      <p className="text-[14px] text-text-secondary mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full opacity-50" />
              <div className="card-premium relative z-10">
                <ProjectIntakeForm />
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

      {/* Consultation & Meeting Section */}
      <PlanningSection />

      {/* Contact & Final CTA Section */}
      <ContactSection />
    </div>
  );
}
