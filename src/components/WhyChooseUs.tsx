import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, TrendingUp, Layers } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Layers size={32} />,
      title: 'Custom Solutions',
      desc: 'We don\'t believe in one-size-fits-all. Every system is built from the ground up to match your unique business needs.',
      color: 'text-blue-500'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'ROI-Focused',
      desc: 'Our development process is driven by data. We build systems that directly impact your bottom line and growth.',
      color: 'text-emerald-500'
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Execution',
      desc: 'Agile methodologies allow us to ship high-quality products faster without compromising on security or performance.',
      color: 'text-amber-500'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Scalable Systems',
      desc: 'Built for the future. Our architectures are designed to handle millions of users and scale as your business grows.',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="section-padding bg-zinc-50 dark:bg-zinc-900/30">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-6 border border-emerald-500/20"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">The Wings Advantage</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">WHY CHOOSE <br /> <span className="text-emerald-500">WINGSFORSHARE.</span></h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            We combine technical excellence with business intelligence to deliver products that dominate the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-8 transition-all group-hover:scale-110 ${card.color}`}>
                {card.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight">{card.title}</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
