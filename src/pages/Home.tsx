// CLEAN FINAL VERSION — SAFE FOR BUILD
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import ProjectIntakeForm from '../components/ProjectIntakeForm';
import SEO from '../components/SEO';
import { products } from '../data/products';
import { useScrollSpy } from '../contexts/ScrollContext';

// --- Components ---
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

  const allProjects = React.useMemo(() => products, []);
  const categories = React.useMemo(() => ['All', ...new Set(products.map(p => p.category))], []);

  const filteredProjects = React.useMemo(() => {
    const searchLower = search.toLowerCase().trim();
    if (!searchLower) return allProjects.filter(p => filter === 'All' || p.category === filter);

    return allProjects.filter(project => {
      const matchesFilter = filter === 'All' || project.category === filter;
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

  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]));
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]));

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <div className="bg-bg transition-colors duration-500 overflow-hidden">
      <SEO title="WingsForShare" description="Business growth platform" />

      {/* HERO */}
      <InView as="section" threshold={0.5} onChange={(v) => v && setActiveSection('hero')}>
        <section ref={heroRef} className="min-h-screen flex items-center justify-center">
          <div className="container-custom flex flex-col lg:flex-row gap-10">
            <HeroContent />
            <HeroVisual rotateX={rotateX} rotateY={rotateY} />
          </div>
        </section>
      </InView>

      {/* START PROJECT */}
      <section className="py-24">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold">Ready to Transform?</h2>
          </div>
          <ProjectIntakeForm />
        </div>
      </section>

      {/* SECTIONS */}
      <SolutionsSection />
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
      <IndustriesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <LatestBlogs />
      <ContactSection />
    </div>
  );
}
