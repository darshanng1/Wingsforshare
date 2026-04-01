import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ value, suffix = '', prefix = '', duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = 60 * duration;
      const increment = end / totalSteps;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default function Results() {
  const stats = [
    { label: 'Successful Clients', value: 50, suffix: '+' },
    { label: 'Satisfaction Rate', value: 98, suffix: '%' },
    { label: 'Average ROI', value: 3, suffix: 'x' },
    { label: 'Revenue Growth', value: 120, suffix: '%' }
  ];

  return (
    <section className="section-padding bg-accent text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
