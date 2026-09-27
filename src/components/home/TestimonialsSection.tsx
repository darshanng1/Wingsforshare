import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, FileCode2, Globe2, BarChart3, Handshake } from 'lucide-react';

// Honest, verifiable commitments — no fabricated client quotes, names or stock avatars.
const commitments = [
  {
    icon: <Clock size={26} />,
    title: 'Reply within 24 hours',
    desc: 'Every enquiry is answered the next working day — most within a few hours.'
  },
  {
    icon: <FileCode2 size={26} />,
    title: 'You own your code',
    desc: 'Full source-code and IP ownership on delivery. No lock-in, no hostage repos.'
  },
  {
    icon: <ShieldCheck size={26} />,
    title: 'Fixed scope, fixed price',
    desc: 'A written timeline and price before we start. No surprise invoices mid-project.'
  },
  {
    icon: <Globe2 size={26} />,
    title: 'Global delivery',
    desc: 'We work with clients across India, the US, UK, Australia and the Middle East.'
  },
  {
    icon: <BarChart3 size={26} />,
    title: 'Reported against outcomes',
    desc: 'We track leads, traffic and rankings — not vanity metrics.'
  },
  {
    icon: <Handshake size={26} />,
    title: 'A senior engineer on every build',
    desc: 'No hand-offs to juniors after the sales call. The people who scope it, build it.'
  }
];

export function TestimonialsSection() {
  return (
    <section id="commitments" className="section-padding bg-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <ShieldCheck size={14} />
            <span>Our commitments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-text-primary leading-[0.95] mb-8"
          >
            How we work with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 italic font-light">every client.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-text-secondary/60 max-w-xl leading-relaxed font-medium"
          >
            The standards you can hold us to on every project — before you sign anything.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {commitments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group p-8 rounded-[2rem] bg-card-bg border border-card-border hover:border-accent/40 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-bg transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
