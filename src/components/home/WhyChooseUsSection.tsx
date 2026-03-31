import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const whyChooseUs = [
  {
    title: 'Custom Built Systems',
    desc: 'We don\'t use generic templates. Every line of code is written to solve your specific business challenges.'
  },
  {
    title: 'Data-First Approach',
    desc: 'Our systems are built with analytics at the core, giving you the insights you need to make informed decisions.'
  },
  {
    title: 'Scalable Architecture',
    desc: 'We build for the future. Our technology stacks are designed to grow with your business without friction.'
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-gray-900 dark:bg-black text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-white/5 to-white/[0.02] rounded-[2rem] md:rounded-[3rem] border border-white/10 p-8 md:p-12 flex flex-col justify-center"
            >
              <div className="relative z-10">
                <h4 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight text-emerald-500">Business Growth Systems</h4>
                <p className="text-base md:text-xl text-white/80 leading-relaxed mb-8 md:mb-10">
                  We design digital systems that help businesses generate leads, streamline operations, and scale using modern technology.
                </p>

                <div className="space-y-3 md:space-y-4">
                  {[
                    'Lead Generation Systems',
                    'Digital Marketing Infrastructure',
                    'Business Process Automation',
                    'Custom Business Applications'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-base md:text-lg font-medium text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-emerald-500 font-bold uppercase tracking-widest mb-6">Why Choose Us</p>
            <h3 className="mb-8 leading-tight text-white">
              Engineering Excellence <br />
              <span className="text-white/40">For Your Business Success</span>
            </h3>

            <div className="space-y-6 md:space-y-8">
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-4 md:space-x-6 group"
                >
                  <div className="w-10 h-10 rounded-xl md:rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-emerald-500 transition-colors duration-300">
                    <CheckCircle size={20} className="text-emerald-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">{item.title}</h4>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
