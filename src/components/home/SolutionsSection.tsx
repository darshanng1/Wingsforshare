import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, Smartphone, TrendingUp, BarChart, Cpu } from 'lucide-react';

const solutions = [
  {
    icon: <Globe className="text-emerald-500" />,
    title: 'Custom Web Development',
    desc: 'High-performance, SEO-optimized enterprise websites and web applications designed to convert visitors into loyal customers.',
    href: '/services/web-development'
  },
  {
    icon: <Smartphone className="text-blue-500" />,
    title: 'Mobile App Development',
    desc: 'Custom iOS and Android mobile applications built with React Native and Flutter for seamless cross-platform performance.',
    href: '/services/app-development'
  },
  {
    icon: <TrendingUp className="text-orange-500" />,
    title: 'SEO & Growth Marketing',
    desc: 'Data-driven SEO strategies, keyword optimization, and growth hacking to scale your organic search presence and ROI.',
    href: '/services/seo-growth'
  },
  {
    icon: <BarChart className="text-purple-500" />,
    title: 'Business Intelligence (BI)',
    desc: 'Advanced data analytics, custom dashboards, and BI tools to transform raw data into actionable business intelligence.',
    href: '/services/business-intelligence'
  },
  {
    icon: <Cpu className="text-emerald-500" />,
    title: 'Custom Software Solutions',
    desc: 'Tailor-made enterprise software and automation systems built to solve complex business challenges and unique workflows.',
    href: '/services/custom-software'
  },
  {
    icon: <Zap className="text-yellow-500" />,
    title: 'Digital Transformation',
    desc: 'Modernizing legacy systems with cutting-edge technology, cloud integration, and AI-driven automation for the digital age.',
    href: '/services/digital-transformation'
  }
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-padding bg-white dark:bg-[#030303] relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              <Zap size={12} />
              <span>Our Expertise</span>
            </motion.div>
            <h2 className="mb-0">Solutions that <br /> <span className="text-zinc-400 dark:text-zinc-600">Scale Revenue.</span></h2>
          </div>
          <p className="lg:mb-4 text-lg text-zinc-500 dark:text-zinc-400 max-w-md ml-auto">
            We don't just build software; we build growth engines. Every solution is engineered for maximum performance and conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-[#030303] p-12 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                {React.cloneElement(solution.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{solution.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                {solution.desc}
              </p>
              <Link 
                to={solution.href}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-500 hover:gap-4 transition-all"
              >
                Explore Solution <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
